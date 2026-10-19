#!/usr/bin/env node
/*
 * Resolves the static string-table calls emitted by javascript-obfuscator.
 * The original control flow and identifiers are deliberately left intact.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const root = path.resolve(__dirname, "..");
const files = [
  ["background.js", "var background="],
  ["content-scripts/chesscomAnon.js", "var chesscomanon="],
  ["content-scripts/chesscomFakeTitle.js", "var chesscomfaketitle="],
  ["content-scripts/pageContext.js", "var pagecontext="],
  ["content-scripts/content.js", "var content="],
  ["chunks/stream-CizLFs5_.js", null],
];

function functionDeclaration(source, name) {
  const start = source.indexOf(`function ${name}`);
  if (start < 0) throw new Error(`Cannot find ${name}`);
  const bodyStart = source.indexOf("{", start);
  let depth = 0;
  for (let i = bodyStart; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}" && --depth === 0)
      return source.slice(start, i + 1);
  }
  throw new Error(`Unclosed declaration ${name}`);
}

function buildContext(source, marker) {
  // Some builds put the lookup-table function after the application entrypoint.
  // Rebuild only the decoder, its table and the table-rotation IIFE, never the app.
  const rotation = /\}\)?\(\s*(_0x[\da-f]+)\s*,\s*0x[\da-f]+\s*\)\s*;?/i.exec(
    source,
  );
  if (!rotation) throw new Error("Cannot find string-table rotation");
  const rotationStart = source.lastIndexOf("(function", rotation.index);
  const rotationEnd = source.indexOf(";", rotation.index);
  if (rotationStart < 0 || rotationEnd < 0)
    throw new Error("Cannot isolate string-table rotation");
  const rotationCode = source.slice(rotationStart, rotationEnd + 1);
  const decoderMatch = /const\s+_0x[\da-f]+\s*=\s*(_0x[\da-f]+)\s*,/i.exec(
    rotationCode,
  );
  if (!decoderMatch) throw new Error("Cannot find string decoder");
  const setup = `${functionDeclaration(source, decoderMatch[1])}\n${functionDeclaration(source, rotation[1])}\n${rotationCode}`;
  const context = vm.createContext({ decodeURIComponent, String, parseInt });
  vm.runInContext(setup, context, { timeout: 10_000 });
  return context;
}

function mappedNames(source, context) {
  const names = new Set(
    Object.keys(context).filter(
      (key) =>
        /^_0x[0-9a-f]+$/i.test(key) && typeof context[key] === "function",
    ),
  );
  let changed = true;
  while (changed) {
    changed = false;
    for (const [, alias, target] of source.matchAll(
      /(?:const|let|var)\s+(_0x[\da-f]+)\s*=\s*(_0x[\da-f]+)/gi,
    )) {
      if (names.has(target) && !names.has(alias)) {
        names.add(alias);
        context[alias] = context[target];
        changed = true;
      }
    }
  }
  return names;
}

for (const [relative, marker] of files) {
  const filename = path.join(root, relative);
  const source = fs.readFileSync(filename, "utf8");
  const context = buildContext(source, marker);
  const names = mappedNames(source, context);
  const ast = parser.parse(source, {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  });
  let replaced = 0;
  traverse(ast, {
    CallExpression(nodePath) {
      const { node } = nodePath;
      if (!t.isIdentifier(node.callee) || !names.has(node.callee.name)) return;
      if (
        node.arguments.length < 1 ||
        node.arguments.length > 2 ||
        !node.arguments.every((arg) => t.isNumericLiteral(arg))
      )
        return;
      const fn = context[node.callee.name];
      if (typeof fn !== "function") return;
      try {
        const value = fn(...node.arguments.map((arg) => arg.value));
        if (typeof value === "string") {
          nodePath.replaceWith(t.stringLiteral(value));
          replaced++;
        }
      } catch {
        // Keep dynamic or unsupported calls unchanged.
      }
    },
  });
  fs.writeFileSync(
    filename,
    generate(ast, { comments: true, jsescOption: { minimal: true } }).code +
      "\n",
  );
  console.log(`${relative}: resolved ${replaced} static string lookups`);
}
