(function (_0x383130, _0x1bdf14) {
  const _0x4d286f = _0x1c7a,
    _0x344044 = _0x383130();
  while (!![]) {
    try {
      const _0x252bc9 =
        (-parseInt("58rZtNjK") / 0x1) * (-parseInt("156eJYzNx") / 0x2) +
        parseInt("1299090GHNjCB") / 0x3 +
        -parseInt("1100708FfPLcU") / 0x4 +
        parseInt("2322885FHkOTx") / 0x5 +
        (parseInt("230682ktdrmY") / 0x6) * (parseInt("98mejiuR") / 0x7) +
        (parseInt("8dGsNSS") / 0x8) * (-parseInt("6014718FDjKUw") / 0x9) +
        (-parseInt("923300EVHkJv") / 0xa) * (parseInt("11kdpmtZ") / 0xb);
      if (_0x252bc9 === _0x1bdf14) break;
      else _0x344044["push"](_0x344044["shift"]());
    } catch (_0x1eecb8) {
      _0x344044["push"](_0x344044["shift"]());
    }
  }
})(_0x397e, 0x62c64);
var chesscomfaketitle = (function () {
  const _0x46ad98 = _0x1c7a;
  function _0x1f29f2(_0x523e14) {
    return _0x523e14;
  }
  var _0x1f9a41 = "chessr-mock-title",
    _0x1dfa1e = {
      GM: "Grandmaster",
      IM: "International Master",
      FM: "FIDE Master",
      NM: "National Master",
      CM: "FIDE Candidate Master",
      WGM: "Woman Grandmaster",
      WIM: "Woman International Master",
      WFM: "Woman FIDE Master",
      WCM: "FIDE Woman Candidate Master",
      WNM: "Woman National Master",
    },
    _0x5cef8f = {
      matches: ["*://chess.com/*", "*://*.chess.com/*"],
      world: "MAIN",
      runAt: "document_start",
      main() {
        const _0x5c2350 = _0x46ad98;
        let _0xd2cdc8 = !0x1,
          _0x4f94d9 = "GM";
        try {
          ((_0xd2cdc8 = localStorage["getItem"]("chessr-title") === "true"),
            (_0x4f94d9 = localStorage["getItem"]("chessr-title-type") || "GM"));
        } catch {}
        let _0x32142e = null;
        function _0x1860d4(_0xa4f372) {
          const _0x2aa67f = _0x5c2350;
          if (!_0xa4f372) return null;
          let _0x1d200a = _0xa4f372["cloneNode"](!0x0);
          return (
            _0x1d200a["querySelectorAll"]("." + _0x1f9a41)["forEach"](
              (_0x3697ef) => _0x3697ef["remove"](),
            ),
            _0x1d200a["textContent"]?.["trim"]() || null
          );
        }
        function _0x2abbd1() {
          const _0x48c878 = _0x5c2350;
          let _0x5cee26 = document["querySelector"](
            'a[data-user-activity-key="profile"]',
          );
          if (_0x5cee26?.["href"]) {
            let _0x5e9c67 = _0x5cee26["href"]["split"]("/")["filter"](Boolean),
              _0x191140 = _0x5e9c67[_0x5e9c67["length"] - 0x1];
            if (_0x191140) return _0x191140;
          }
          return (
            _0x1860d4(
              document["querySelector"](
                '[data-user-activity-key="profile"] .sidebar-link-text',
              ),
            ) ||
            _0x1860d4(document["querySelector"](".nav-link-name")) ||
            _0x1860d4(document["querySelector"](".nav-user-header-username")) ||
            (document["documentElement"]["classList"]["contains"](
              "user-logged-in",
            ),
            null)
          );
        }
        function _0x4d3890() {
          const _0x55f066 = _0x5c2350;
          document["querySelectorAll"]("." + _0x1f9a41)["forEach"](
            (_0x526b49) => _0x526b49["remove"](),
          );
        }
        function _0xcd4e0c(_0x29d626) {
          const _0xfc293 = _0x5c2350;
          document["querySelectorAll"](
            ".player-tagline, .cc-user-block-component, .user-block-component",
          )["forEach"]((_0x3d89f8) => {
            const _0x27ba21 = _0xfc293;
            let _0x40d30f = _0x3d89f8["querySelector"](
              '[data-test-element="user-tagline-username"]',
            );
            if (
              !_0x40d30f ||
              _0x40d30f["textContent"]?.["trim"]()["toLowerCase"]() !==
                _0x29d626 ||
              _0x3d89f8["querySelector"]("." + _0x1f9a41)
            )
              return;
            let _0x563bf3 = document["createElement"]("a");
            ((_0x563bf3["className"] =
              "cc-user-title-component cc-text-x-small-bold " + _0x1f9a41),
              (_0x563bf3["href"] = "/members/titled-players"),
              (_0x563bf3["target"] = "_blank"),
              (_0x563bf3["textContent"] = _0x4f94d9),
              _0x40d30f["parentNode"]?.["insertBefore"](_0x563bf3, _0x40d30f));
          });
        }
        function _0x1a4153(_0x1e2dfe) {
          const _0x45a3ea = _0x5c2350;
          let _0x771682 = new URL(location["href"])["pathname"]
              ["split"]("/")
              ["filter"](Boolean),
            _0x299332 = _0x771682["indexOf"]("member");
          if (_0x299332 === -0x1) return;
          let _0x331adc = _0x771682[_0x299332 + 0x1]?.["toLowerCase"]();
          if (!_0x331adc || _0x331adc !== _0x1e2dfe) return;
          let _0x5c0f1b = document["querySelector"](".profile-card-username");
          if (
            !_0x5c0f1b ||
            _0x5c0f1b["parentElement"]?.["querySelector"]("." + _0x1f9a41)
          )
            return;
          let _0xdd3a4b = document["createElement"]("a");
          ((_0xdd3a4b["href"] = "/members/titled-players"),
            (_0xdd3a4b["className"] = "profile-card-chesstitle " + _0x1f9a41),
            _0xdd3a4b["setAttribute"](
              "v-tooltip",
              _0x1dfa1e[_0x4f94d9] || _0x4f94d9,
            ),
            (_0xdd3a4b["textContent"] = _0x4f94d9),
            _0x5c0f1b["parentElement"]?.["insertBefore"](_0xdd3a4b, _0x5c0f1b));
        }
        function _0x25234a(_0x1defe8) {
          const _0x2c946d = _0x5c2350;
          let _0x550c6d = document["querySelector"](".profile-badges");
          if (!_0x550c6d || _0x550c6d["querySelector"]("." + _0x1f9a41)) return;
          let _0x4695fe = new URL(location["href"])["pathname"]
              ["split"]("/")
              ["filter"](Boolean),
            _0x4439ad = _0x4695fe["indexOf"]("member");
          if (_0x4439ad === -0x1) return;
          let _0x2a71b9 = _0x4695fe[_0x4439ad + 0x1]?.["toLowerCase"]();
          if (!_0x2a71b9 || _0x2a71b9 !== _0x1defe8) return;
          let _0x19ae94 = document["createElement"]("a");
          ((_0x19ae94["className"] = "profile-badge " + _0x1f9a41),
            (_0x19ae94["href"] = "/members/titled-players"),
            (_0x19ae94["target"] = "_blank"));
          let _0x354c9f = document["createElement"]("div");
          ((_0x354c9f["className"] = "badges-icon-square badges-titled"),
            (_0x354c9f["innerHTML"] =
              '<span class="cc-icon-glyph cc-icon-size-24 badges-icon"><svg aria-hidden="true" data-glyph="game-crown-2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="fill:currentColor"><path d="M19 20V22H5.00002V20H19ZM1.27002 6.57001C2.30002 5.54001 3.47002 5.54001 4.17002 6.24001C4.74002 6.81001 4.84002 7.64001 4.17002 8.64001L7.24002 10.91C7.31002 10.98 7.47002 10.94 7.54002 10.84L10.37 6.84001H9.87002C8.77002 6.84001 8.30002 6.07001 8.30002 5.34001C8.30002 4.54001 9.00002 3.84001 9.87002 3.84001H10.5V3.11001C10.5 2.21001 11.2 1.51001 12 1.51001C12.83 1.51001 13.5 2.21001 13.5 3.11001V3.84001H14.13C15 3.84001 15.7 4.54001 15.7 5.34001C15.7 6.07001 15.23 6.84001 14.13 6.84001H13.63L16.5 10.84C16.57 10.94 16.67 10.97 16.77 10.91L19.8 8.68001C19.13 7.68001 19.23 6.81001 19.83 6.25001C20.53 5.52001 21.7 5.55001 22.73 6.58001L19 18.01H5.00002L1.27002 6.57001Z"></path></svg></span>'));
          let _0x51b6b1 = document["createElement"]("div");
          ((_0x51b6b1["className"] = "badges-about"),
            (_0x51b6b1["innerHTML"] =
              '<span class="cc-heading-xx-small badges-name">Titled Player</span> <span class="cc-text-small badges-extra">' +
              (_0x1dfa1e[_0x4f94d9] || _0x4f94d9) +
              "</span>"),
            _0x19ae94["appendChild"](_0x354c9f),
            _0x19ae94["appendChild"](_0x51b6b1));
          let _0xe85847 = _0x550c6d["querySelector"](
            ".profile-badge:has(.streak-badge-about)",
          );
          _0xe85847
            ? _0xe85847["insertAdjacentElement"]("afterend", _0x19ae94)
            : _0x550c6d["insertBefore"](_0x19ae94, _0x550c6d["firstChild"]);
        }
        function _0x381125() {
          const _0x48da20 = _0x5c2350;
          let _0x389cec = document["querySelector"](
            'a[data-user-activity-key="profile"]',
          );
          if (!_0x389cec || _0x389cec["querySelector"]("." + _0x1f9a41)) return;
          let _0x234c96 = _0x389cec["querySelector"](".sidebar-link-text");
          if (!_0x234c96) return;
          let _0x428724 = document["createElement"]("span");
          ((_0x428724["className"] =
            "cc-user-title-component cc-text-x-small-bold " + _0x1f9a41),
            (_0x428724["textContent"] = _0x4f94d9),
            (_0x428724["style"]["marginRight"] = "4px"),
            _0x234c96["insertBefore"](_0x428724, _0x234c96["firstChild"]));
        }
        function _0x4b8cbb() {
          const _0x36da84 = _0x5c2350;
          if (!_0xd2cdc8 || !/(^|\.)chess\.com$/["test"](location["hostname"]))
            return;
          let _0x50feb8 = _0x2abbd1();
          if (!_0x50feb8) return;
          let _0x17e6d3 = _0x50feb8["toLowerCase"]();
          (_0xcd4e0c(_0x17e6d3),
            _0x1a4153(_0x17e6d3),
            _0x25234a(_0x17e6d3),
            _0x381125());
        }
        function _0x11b0a8() {
          _0xd2cdc8 &&
            (_0x32142e && clearTimeout(_0x32142e),
            (_0x32142e = setTimeout(_0x4b8cbb, 0x64)));
        }
        (_0xd2cdc8 && _0x11b0a8(),
          new MutationObserver(() => {
            _0xd2cdc8 && _0x11b0a8();
          })["observe"](document["documentElement"], {
            childList: !0x0,
            subtree: !0x0,
          }),
          window["addEventListener"]("message", (_0x19c8f7) => {
            const _0x1de745 = _0x5c2350;
            if (_0x19c8f7["data"]?.["type"] !== "chessr:setTitle") return;
            let _0x50b0a6 = !!_0x19c8f7["data"]["enabled"],
              _0x50e15d =
                typeof _0x19c8f7["data"]["type_"] == "string" &&
                _0x19c8f7["data"]["type_"]
                  ? _0x19c8f7["data"]["type_"]
                  : _0x4f94d9,
              _0x22165e = _0x50e15d !== _0x4f94d9;
            _0x4f94d9 = _0x50e15d;
            try {
              (localStorage["setItem"]("chessr-title-type", _0x4f94d9),
                localStorage["setItem"](
                  "chessr-title",
                  _0x50b0a6 ? "true" : "false",
                ));
            } catch {}
            _0x50b0a6
              ? ((_0xd2cdc8 = !0x0), _0x22165e && _0x4d3890(), _0x4b8cbb())
              : ((_0xd2cdc8 = !0x1),
                (_0x32142e &&= (clearTimeout(_0x32142e), null)),
                _0x4d3890());
          }));
      },
    },
    _0x50d560 = {
      debug: (..._0x10a9ab) => ([..._0x10a9ab], void 0x0),
      log: (..._0x4599cb) => ([..._0x4599cb], void 0x0),
      warn: (..._0x385075) => ([..._0x385075], void 0x0),
      error: (..._0x46e4bc) => ([..._0x46e4bc], void 0x0),
    };
  return (async () => {
    const _0xbf65ef = _0x46ad98;
    try {
      return await _0x5cef8f["main"]();
    } catch (_0x508ff2) {
      throw (
        _0x50d560["error"](
          'The content script "chesscomFakeTitle" crashed on startup!',
          _0x508ff2,
        ),
        _0x508ff2
      );
    }
  })();
})();
function _0x1c7a(_0x40886b, _0x124b45) {
  _0x40886b = _0x40886b - 0x1aa;
  const _0x397e2b = _0x397e();
  let _0x1c7a70 = _0x397e2b[_0x40886b];
  if (_0x1c7a["wMiAWC"] === undefined) {
    var _0x146712 = function (_0x5735a7) {
      const _0x5d458e =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x1f29f2 = "",
        _0x1f9a41 = "";
      for (
        let _0x1dfa1e = 0x0, _0x5cef8f, _0x50d560, _0x523e14 = 0x0;
        (_0x50d560 = _0x5735a7["charAt"](_0x523e14++));
        ~_0x50d560 &&
        ((_0x5cef8f =
          _0x1dfa1e % 0x4 ? _0x5cef8f * 0x40 + _0x50d560 : _0x50d560),
        _0x1dfa1e++ % 0x4)
          ? (_0x1f29f2 += String["fromCharCode"](
              0xff & (_0x5cef8f >> ((-0x2 * _0x1dfa1e) & 0x6)),
            ))
          : 0x0
      ) {
        _0x50d560 = _0x5d458e["indexOf"](_0x50d560);
      }
      for (
        let _0xd2cdc8 = 0x0, _0x4f94d9 = _0x1f29f2["length"];
        _0xd2cdc8 < _0x4f94d9;
        _0xd2cdc8++
      ) {
        _0x1f9a41 +=
          "%" +
          ("00" + _0x1f29f2["charCodeAt"](_0xd2cdc8)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x1f9a41);
    };
    ((_0x1c7a["auAiIQ"] = _0x146712),
      (_0x1c7a["hTLPen"] = {}),
      (_0x1c7a["wMiAWC"] = !![]));
  }
  const _0x542b4b = _0x397e2b[0x0],
    _0x1e67c8 = _0x40886b + _0x542b4b,
    _0x3cfa89 = _0x1c7a["hTLPen"][_0x1e67c8];
  return (
    !_0x3cfa89
      ? ((_0x1c7a70 = _0x1c7a["auAiIQ"](_0x1c7a70)),
        (_0x1c7a["hTLPen"][_0x1e67c8] = _0x1c7a70))
      : (_0x1c7a70 = _0x3cfa89),
    _0x1c7a70
  );
}
function _0x397e() {
  const _0x29f635 = [
    "y2XHC3nmAxn0",
    "mJmYmJG4nuziA09uEa",
    "lM5HDI1SAw5Rlw5HBwu",
    "tMf0Aw9UywWGtwfZDgvY",
    "CxvLCNLtzwXLy3rVCKfSBa",
    "nJaXndCXoezeAKTvDW",
    "v29Tyw4GtMf0Aw9UywWGtwfZDgvY",
    "lNbYB2zPBguTyMfKz2u6AgfZkc5ZDhjLywSTyMfKz2uTywjVDxqP",
    "y2HLC3nYlw1Vy2STDgL0Bgu",
    "Dhj1zq",
    "y3jLyxrLrwXLBwvUDa",
    "zMLYC3rdAgLSza",
    "otiZmZaWrvziA0P2",
    "zg9JDw1LBNrfBgvTzw50",
    "pc9ZCgfUpG",
    "sw50zxjUyxrPB25HBcbnyxn0zxi",
    "y2mTDxnLCI10AxrSzs1JB21WB25LBNqGy2mTDgv4Dc14lxnTywXSlwjVBgqG",
    "y2HLC3nYlxrPDgXL",
    "CxvLCNLtzwXLy3rVCG",
    "Aw5KzxHpzG",
    "yxbWzw5Kq2HPBgq",
    "DgvZDa",
    "lM5HDI11C2vYlwHLywrLCI11C2vYBMfTzq",
    "Aw5Zzxj0qwrQywnLBNrfBgvTzw50",
    "DxnLCI1SB2DNzwqTAw4",
    "rKLersbnyxn0zxi",
    "DgfYz2v0",
    "C2v0sxrLBq",
    "lNbSyxLLCI10ywDSAw5LlcaUy2mTDxnLCI1IBg9JAY1JB21WB25LBNqSic51C2vYlwjSB2nRlwnVBxbVBMvUDa",
    "w2rHDgeTDxnLCI1Hy3rPDML0Es1RzxK9iNbYB2zPBguIxsaUC2LKzwjHCI1SAw5RlxrLEhq",
    "mtu2zuPzEK54",
    "mtfRzhbTDfO",
    "ChjVzMLSzs1JyxjKlwnOzxnZDgL0BguG",
    "tufjtG",
    "lNnPzgvIyxiTBgLUAY10zxH0",
    "y2XVBMvoB2rL",
    "yMfKz2vZlwLJB24TC3f1yxjLigjHzgDLCY10AxrSzwq",
    "B2jZzxj2zq",
    "Cgf0Ag5HBwu",
    "zMLSDgvY",
    "Dg9mB3DLCKnHC2u",
    "DhLWzv8",
    "BwfYz2LUuMLNAhq",
    "C2v0qxr0CMLIDxrL",
    "lNbYB2zPBguTy2fYzc11C2vYBMfTzq",
    "Dgv4DenVBNrLBNq",
    "x2jSyw5R",
    "kJOVl2nOzxnZlMnVBs8Q",
    "yvTKyxrHlxvZzxiTywn0AxzPDhKTA2v5psjWCM9MAwXLiL0",
    "mteWmdCWoezMueXJvq",
    "BwvTyMvY",
    "z2v0sxrLBq",
    "BwvZC2fNzq",
    "y2XHC3noyw1L",
    "v29Tyw4Gr3jHBMrTyxn0zxi",
    "C3bSAxq",
    "zM9YrwfJAa",
    "Aw5Uzxjive1m",
    "rKLersbdyw5KAwrHDguGtwfZDgvY",
    "zg9JDw1LBNrFC3rHCNq",
    "mti5ota5meDitMPdqG",
    "ntHYwNroAKS",
    "C3r5Bgu",
    "Ag9ZDg5HBwu",
    "y2HLC3nYlxrPDgXLlxr5Cgu",
    "zgf0yq",
    "phnWyw4Gy2XHC3m9iMnJlwHLywrPBMCTEhGTC21HBgWGyMfKz2vZlw5HBwuIpLrPDgXLzcbqBgf5zxi8l3nWyw4+idXZCgfUignSyxnZpsjJyY10zxH0lxnTywXSigjHzgDLCY1LEhrYysi+",
    "l21LBwjLCNmVDgL0BgvKlxbSyxLLCNm",
    "nhb4",
    "ywz0zxjLBMq",
    "DhLWzq",
    "rKLersbxB21HBIbdyw5KAwrHDguGtwfZDgvY",
    "DhjPBq",
    "CgfYzw50tM9Kzq",
    "y2HLC3nYoNnLDfrPDgXL",
    "BwfPBG",
    "r3jHBMrTyxn0zxi",
    "v29Tyw4Gsw50zxjUyxrPB25HBcbnyxn0zxi",
    "mJmWnJGYA3rKCM1z",
    "zxjYB3i",
    "y29UDgfPBNm",
    "ChjVzMLSzs1IywrNzsa",
    "otHTzwPPDvi",
    "CgfYzw50rwXLBwvUDa",
    "C3rYAw5N",
    "phnWyw4Gy2XHC3m9iMnJlwLJB24Tz2X5CgGGy2mTAwnVBI1ZAxPLlti0igjHzgDLCY1Py29UiJ48C3zNigfYAweTAgLKzgvUpsj0CNvLiIbKyxrHlwDSExbOpsjNyw1LlwnYB3DUltiIihzPzxDcB3G9iJaGmcaYncaYnciGAgvPz2H0psiYnciGD2LKDgG9iJi0iIb4BwXUCZ0IAhr0CdOVl3D3DY53mY5VCMCVmJaWmc9ZDMCIihn0EwXLpsjMAwXSoMn1CNjLBNrdB2XVCIi+phbHDgGGzd0Itte5idiWvJiYsduUmdaWmdjwmJbimtLAtteUmJCWmdiGnI41nZaWmumYlJmWmdaYiduUntqWmdeGmY40nZaWmIa1lJu0mdaXidqUmtCWmdiGnI4YndaWmum0lJC0mdaYidyUodeWmdeGnc44ndaWmIa3lJy0mdaXidqUmtCWmdiGoc42ndaWmuW3lJi0mdaYideWlJKXqZCUmZeWmdiGmtaUotGGnY40nZaWmIaXmc45nca3lJu0mdaYideWlJG0tdeWlJm3idyUodqWmdfios44nZaWmKm4lJC3mdaYidyUodqWmdeGoc4ZmdaWmIa2lJa3mdaXidGUmZaWmdiGns4ZndaWmum4lJmWmdaYidqUntqWmdeGos4WmdaWmIaZlJG0mdaXidKUodCWmdiGmY44ndaWmuGXmc41vJmUmteWmdfdmtaUnsaYlJiXmdaXideXlJiGms41mtaWmsaXmIaXlJuXmdaXqZeYlJGZideUnteWmdeGmtmUnsaYlJiXmdaXideZlJuGmY4XmtaWmvyZlJG0mdaXsde0lJeZqZe1idmUodqWmdeGmtuUnYa0lJu0mdaXide1lJCGns4ZndaWmumXns43idyUmdCWmdeGmtuUmJmGnI44ndaWmsaXnc4XmYa2lJG0mdaXsdeZlJyZtde2lJuGmtaUodrdmtyUntCGmtaUotqGmtyUnJCGmtaUotCGmtyUnZCGmtaUotfmmtKUoca4lJy4mdaXqZe5lJeZidCUnJGWmdeGmtKUmJmGnI44mtaWmsaXos44mYa2lJi1mdaXqZiWlJuZiduUntiWmdeGmJeUnYa1lJu1mdaXidiYlJCZidyUntGWmdfmmtKGmtGUmdfins4WmdaWmKWXlJi3mdaYidyUntCWmdfAiJ48l3bHDgG+pc9ZDMC+pc9ZCgfUpG",
    "vgHLignVBNrLBNqGC2nYAxb0icjJAgvZC2nVBuzHA2vuAxrSzsiGy3jHC2HLzcbVBIbZDgfYDhvWiq",
    "zgL2",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "v29Tyw4GrKLersbnyxn0zxi",
    "AhjLzG",
    "CMvTB3zL",
    "kJOVlYOUy2HLC3mUy29TlYO",
    "Aw5Zzxj0qMvMB3jL",
    "w2rHDgeTDgvZDc1LBgvTzw50psj1C2vYlxrHz2XPBMuTDxnLCM5HBwuIxq",
    "DI10B29SDgLW",
    "zw5HyMXLza",
    "ogrhC05tuW",
    "zMfSC2u",
    "BgvUz3rO",
    "yMfKz2vZlwfIB3v0",
    "lNbYB2zPBguTyMfKz2vZ",
    "C3bHBG",
  ];
  _0x397e = function () {
    return _0x29f635;
  };
  return _0x397e();
}
