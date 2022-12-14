var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
!function (n, e) {
  exports = e();
}(exports, function () {
  "use strict";

  function t(n, e) {
    if (!((this || _global) instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
    (this || _global).message = n + " (char " + e + ")", (this || _global).char = e, (this || _global).stack = new Error().stack;
  }

  (t.prototype = new Error()).constructor = Error;
  var i = {
    "'": !0,
    "\u2018": !0,
    "\u2019": !0,
    "`": !0,
    "\xB4": !0
  },
      f = {
    "\"": !0,
    "\u201C": !0,
    "\u201D": !0
  };

  function o(n) {
    return e.test(n);
  }

  var e = /^[a-zA-Z_]$/;
  var u = /^[0-9a-fA-F]$/;

  function c(n) {
    return r.test(n);
  }

  var r = /^[0-9]$/;

  function s(n) {
    return " " === n || "\t" === n || "\n" === n || "\r" === n;
  }

  function a(n) {
    return "\xA0" === n || "\u2000" <= n && n <= "\u200A" || "\u202F" === n || "\u205F" === n || "\u3000" === n;
  }

  function l(n) {
    return !0 === i[n];
  }

  function h(n) {
    return !0 === f[n];
  }

  function d(n) {
    return !0 === i[n] ? "'" : !0 === f[n] ? "\"" : n;
  }

  function n(n, e) {
    e = n.lastIndexOf(e);
    return -1 !== e ? n.substring(0, e) + n.substring(e + 1) : n;
  }

  function w(n, e) {
    var r = n.length;
    if (!s(n[r - 1])) return n + e;

    for (; s(n[r - 1]);) r--;

    return n.substring(0, r) + e + n.substring(r);
  }

  var g = 0,
      b = 1,
      p = 2,
      v = 3,
      x = 4,
      m = 5,
      y = 6,
      k = {
    "": !0,
    "{": !0,
    "}": !0,
    "[": !0,
    "]": !0,
    ":": !0,
    ",": !0,
    "(": !0,
    ")": !0,
    ";": !0,
    "+": !0
  },
      I = {
    "\"": "\"",
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
  },
      E = {
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t"
  },
      j = {
    null: "null",
    true: "true",
    false: "false"
  },
      A = {
    None: "null",
    True: "true",
    False: "false"
  },
      $ = "",
      O = "",
      T = 0,
      C = "",
      F = "",
      S = y;

  function U() {
    T++, C = $.charAt(T);
  }

  function z() {
    return S === g && ("[" === F || "{" === F) || S === p || S === b || S === v;
  }

  function N() {
    O += F, S = y, F = "", k[C] ? (S = g, F = C, U()) : function () {
      if (c(C) || "-" === C) {
        if (S = b, "-" === C) {
          if (F += C, U(), !c(C)) throw new t("Invalid number, digit expected", T);
        } else "0" === C && (F += C, U());

        for (; c(C);) F += C, U();

        if ("." === C) {
          if (F += C, U(), !c(C)) throw new t("Invalid number, digit expected", T);

          for (; c(C);) F += C, U();
        }

        if ("e" === C || "E" === C) {
          if (F += C, U(), "+" !== C && "-" !== C || (F += C, U()), !c(C)) throw new t("Invalid number, digit expected", T);

          for (; c(C);) F += C, U();
        }
      } else !function () {
        if (function (n) {
          return !0 === i[n] || !0 === f[n];
        }(C)) {
          var n = d(C),
              e = l(C) ? l : h;

          for (F += "\"", S = p, U(); "" !== C && !e(C);) if ("\\" === C) {
            if (U(), void 0 !== I[C]) F += "\\" + C, U();else if ("u" === C) {
              F += "\\u", U();

              for (var r = 0; r < 4; r++) {
                if (!function (n) {
                  return u.test(n);
                }(C)) throw new t("Invalid unicode character", T - F.length);
                F += C, U();
              }
            } else {
              if ("'" !== C) throw new t("Invalid escape character \"\\" + C + "\"", T);
              F += "'", U();
            }
          } else E[C] ? F += E[C] : F += "\"" === C ? "\\\"" : C, U();

          if (d(C) !== n) throw new t("End of string expected", T - F.length);
          return F += "\"", U(), 0;
        }

        !function () {
          if (o(C)) for (S = v; o(C) || c(C) || "$" === C;) F += C, U();else !function () {
            if (s(C) || a(C)) for (S = x; s(C) || a(C);) F += C, U();else !function () {
              if ("/" === C && "*" === $[T + 1]) {
                for (S = m; "" !== C && ("*" !== C || "*" === C && "/" !== $[T + 1]);) F += C, U();

                return "*" === C && "/" === $[T + 1] && (F += C, U(), F += C, U());
              }

              if ("/" !== C || "/" !== $[T + 1]) !function () {
                for (S = y; "" !== C;) F += C, U();

                throw new t("Syntax error in part \"" + F + "\"", T - F.length);
              }();else for (S = m; "" !== C && "\n" !== C;) F += C, U();
            }();
          }();
        }();
      }();
    }(), S === x && (F = function (n) {
      for (var e = "", r = 0; r < n.length; r++) {
        var t = n[r];
        e += a(t) ? " " : t;
      }

      return e;
    }(F), N()), S === m && (S = y, F = "", N());
  }

  function V() {
    if (S !== g || "{" !== F) !function () {
      if (S === g && "[" === F) {
        if (N(), S === g && "]" === F) return N();

        for (;;) if (V(), S === g && "," === F) {
          if (N(), S === g && "]" === F) {
            O = n(O, ",");
            break;
          }
        } else {
          if (!z()) break;
          O = w(O, ",");
        }

        return S === g && "]" === F ? N() : O = w(O, "]");
      }

      !function () {
        if (S !== p) !(S === b ? N() : void function () {
          if (S === v) {
            if (j[F]) return N();
            if (A[F]) return F = A[F], N();
            var n = F,
                e = O.length;
            if (F = "", N(), S === g && "(" === F) return F = "", N(), V(), S === g && ")" === F && (F = "", N(), S === g && ";" === F && (F = "", N()));

            for (O = function (n, e, r) {
              return n.substring(0, r) + e + n.substring(r);
            }(O, "\"".concat(n), e); S === v || S === b;) N();

            return O += "\"";
          }

          !function () {
            throw new t("" === F ? "Unexpected end of json string" : "Value expected", T - F.length);
          }();
        }());else for (N(); S === g && "+" === F;) {
          var n;
          F = "", N(), S === p && (n = O.lastIndexOf("\""), O = O.substring(0, n) + F.substring(1), F = "", N());
        }
      }();
    }();else if (N(), S !== g || "}" !== F) {
      for (;;) {
        if (S !== v && S !== b || (S = p, F = "\"".concat(F, "\"")), S !== p) throw new t("Object key expected", T - F.length);
        if (N(), S === g && ":" === F) N();else {
          if (!z()) throw new t("Colon expected", T - F.length);
          O = w(O, ":");
        }

        if (V(), S === g && "," === F) {
          if (N(), S === g && "}" === F) {
            O = n(O, ",");
            break;
          }
        } else {
          if (S !== p && S !== b && S !== v) break;
          O = w(O, ",");
        }
      }

      S === g && "}" === F ? N() : O = w(O, "}");
    } else N();
  }

  return function (n) {
    if (O = "", T = 0, C = ($ = n).charAt(0), F = "", S = y, N(), n = S === g && "{" === F, V(), "" === F) return O;

    if (n && z()) {
      for (var e = ""; z();) e += O = w(O, ","), O = "", V();

      return "[\n".concat(e).concat(O, "\n]");
    }

    throw new t("Unexpected characters", T - F.length);
  };
});
var exports$1 = exports;

export default exports$1;

//# sourceMappingURL=npm-jsonrepair-2.0.1.js.map