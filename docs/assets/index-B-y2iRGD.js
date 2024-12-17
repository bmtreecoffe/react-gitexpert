(function () {
  const O = document.createElement("link").relList;
  if (O && O.supports && O.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) H(j);
  new MutationObserver((j) => {
    for (const F of j)
      if (F.type === "childList")
        for (const ne of F.addedNodes)
          ne.tagName === "LINK" && ne.rel === "modulepreload" && H(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(j) {
    const F = {};
    return (
      j.integrity && (F.integrity = j.integrity),
      j.referrerPolicy && (F.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : j.crossOrigin === "anonymous"
        ? (F.credentials = "omit")
        : (F.credentials = "same-origin"),
      F
    );
  }
  function H(j) {
    if (j.ep) return;
    j.ep = !0;
    const F = m(j);
    fetch(j.href, F);
  }
})();
var _i = { exports: {} },
  gr = {},
  xi = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa;
function Tf() {
  if (xa) return D;
  xa = 1;
  var N = Symbol.for("react.element"),
    O = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    F = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    de = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    Ce = Symbol.for("react.memo"),
    we = Symbol.for("react.lazy"),
    te = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (te && c[te]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    q = {};
  function K(c, v, M) {
    (this.props = c),
      (this.context = v),
      (this.refs = q),
      (this.updater = M || $e);
  }
  (K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (K.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function yn() {}
  yn.prototype = K.prototype;
  function an(c, v, M) {
    (this.props = c),
      (this.context = v),
      (this.refs = q),
      (this.updater = M || $e);
  }
  var qe = (an.prototype = new yn());
  (qe.constructor = an), We(qe, K.prototype), (qe.isPureReactComponent = !0);
  var Se = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, M) {
    var I,
      A = {},
      V = null,
      Y = null;
    if (v != null)
      for (I in (v.ref !== void 0 && (Y = v.ref),
      v.key !== void 0 && (V = "" + v.key),
      v))
        be.call(v, I) && !Le.hasOwnProperty(I) && (A[I] = v[I]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = M;
    else if (1 < $) {
      for (var b = Array($), Ue = 0; Ue < $; Ue++) b[Ue] = arguments[Ue + 2];
      A.children = b;
    }
    if (c && c.defaultProps)
      for (I in (($ = c.defaultProps), $)) A[I] === void 0 && (A[I] = $[I]);
    return {
      $$typeof: N,
      type: c,
      key: V,
      ref: Y,
      props: A,
      _owner: Pe.current,
    };
  }
  function Nn(c, v) {
    return {
      $$typeof: N,
      type: c.type,
      key: v,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === N;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (M) {
        return v[M];
      })
    );
  }
  var cn = /\/+/g;
  function Fe(c, v) {
    return typeof c == "object" && c !== null && c.key != null
      ? Yn("" + c.key)
      : v.toString(36);
  }
  function en(c, v, M, I, A) {
    var V = typeof c;
    (V === "undefined" || V === "boolean") && (c = null);
    var Y = !1;
    if (c === null) Y = !0;
    else
      switch (V) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case N:
            case O:
              Y = !0;
          }
      }
    if (Y)
      return (
        (Y = c),
        (A = A(Y)),
        (c = I === "" ? "." + Fe(Y, 0) : I),
        Se(A)
          ? ((M = ""),
            c != null && (M = c.replace(cn, "$&/") + "/"),
            en(A, v, M, "", function (Ue) {
              return Ue;
            }))
          : A != null &&
            (gn(A) &&
              (A = Nn(
                A,
                M +
                  (!A.key || (Y && Y.key === A.key)
                    ? ""
                    : ("" + A.key).replace(cn, "$&/") + "/") +
                  c
              )),
            v.push(A)),
        1
      );
    if (((Y = 0), (I = I === "" ? "." : I + ":"), Se(c)))
      for (var $ = 0; $ < c.length; $++) {
        V = c[$];
        var b = I + Fe(V, $);
        Y += en(V, v, M, b, A);
      }
    else if (((b = J(c)), typeof b == "function"))
      for (c = b.call(c), $ = 0; !(V = c.next()).done; )
        (V = V.value), (b = I + Fe(V, $++)), (Y += en(V, v, M, b, A));
    else if (V === "object")
      throw (
        ((v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Y;
  }
  function fn(c, v, M) {
    if (c == null) return c;
    var I = [],
      A = 0;
    return (
      en(c, I, "", "", function (V) {
        return v.call(M, V, A++);
      }),
      I
    );
  }
  function Te(c) {
    if (c._status === -1) {
      var v = c._result;
      (v = v()),
        v.then(
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = M));
          },
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = M));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = v));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ue = { current: null },
    S = { transition: null },
    T = {
      ReactCurrentDispatcher: ue,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: Pe,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (D.Children = {
      map: fn,
      forEach: function (c, v, M) {
        fn(
          c,
          function () {
            v.apply(this, arguments);
          },
          M
        );
      },
      count: function (c) {
        var v = 0;
        return (
          fn(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          fn(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!gn(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (D.Component = K),
    (D.Fragment = m),
    (D.Profiler = j),
    (D.PureComponent = an),
    (D.StrictMode = H),
    (D.Suspense = Q),
    (D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (D.act = _),
    (D.cloneElement = function (c, v, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var I = We({}, c.props),
        A = c.key,
        V = c.ref,
        Y = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((V = v.ref), (Y = Pe.current)),
          v.key !== void 0 && (A = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (b in v)
          be.call(v, b) &&
            !Le.hasOwnProperty(b) &&
            (I[b] = v[b] === void 0 && $ !== void 0 ? $[b] : v[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) I.children = M;
      else if (1 < b) {
        $ = Array(b);
        for (var Ue = 0; Ue < b; Ue++) $[Ue] = arguments[Ue + 2];
        I.children = $;
      }
      return { $$typeof: N, type: c.type, key: A, ref: V, props: I, _owner: Y };
    }),
    (D.createContext = function (c) {
      return (
        (c = {
          $$typeof: ne,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: F, _context: c }),
        (c.Consumer = c)
      );
    }),
    (D.createElement = Qe),
    (D.createFactory = function (c) {
      var v = Qe.bind(null, c);
      return (v.type = c), v;
    }),
    (D.createRef = function () {
      return { current: null };
    }),
    (D.forwardRef = function (c) {
      return { $$typeof: de, render: c };
    }),
    (D.isValidElement = gn),
    (D.lazy = function (c) {
      return { $$typeof: we, _payload: { _status: -1, _result: c }, _init: Te };
    }),
    (D.memo = function (c, v) {
      return { $$typeof: Ce, type: c, compare: v === void 0 ? null : v };
    }),
    (D.startTransition = function (c) {
      var v = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = v;
      }
    }),
    (D.unstable_act = _),
    (D.useCallback = function (c, v) {
      return ue.current.useCallback(c, v);
    }),
    (D.useContext = function (c) {
      return ue.current.useContext(c);
    }),
    (D.useDebugValue = function () {}),
    (D.useDeferredValue = function (c) {
      return ue.current.useDeferredValue(c);
    }),
    (D.useEffect = function (c, v) {
      return ue.current.useEffect(c, v);
    }),
    (D.useId = function () {
      return ue.current.useId();
    }),
    (D.useImperativeHandle = function (c, v, M) {
      return ue.current.useImperativeHandle(c, v, M);
    }),
    (D.useInsertionEffect = function (c, v) {
      return ue.current.useInsertionEffect(c, v);
    }),
    (D.useLayoutEffect = function (c, v) {
      return ue.current.useLayoutEffect(c, v);
    }),
    (D.useMemo = function (c, v) {
      return ue.current.useMemo(c, v);
    }),
    (D.useReducer = function (c, v, M) {
      return ue.current.useReducer(c, v, M);
    }),
    (D.useRef = function (c) {
      return ue.current.useRef(c);
    }),
    (D.useState = function (c) {
      return ue.current.useState(c);
    }),
    (D.useSyncExternalStore = function (c, v, M) {
      return ue.current.useSyncExternalStore(c, v, M);
    }),
    (D.useTransition = function () {
      return ue.current.useTransition();
    }),
    (D.version = "18.3.1"),
    D
  );
}
var Ca;
function zi() {
  return Ca || ((Ca = 1), (xi.exports = Tf())), xi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Rf() {
  if (Pa) return gr;
  Pa = 1;
  var N = zi(),
    O = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    H = Object.prototype.hasOwnProperty,
    j = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(de, Q, Ce) {
    var we,
      te = {},
      J = null,
      $e = null;
    Ce !== void 0 && (J = "" + Ce),
      Q.key !== void 0 && (J = "" + Q.key),
      Q.ref !== void 0 && ($e = Q.ref);
    for (we in Q) H.call(Q, we) && !F.hasOwnProperty(we) && (te[we] = Q[we]);
    if (de && de.defaultProps)
      for (we in ((Q = de.defaultProps), Q))
        te[we] === void 0 && (te[we] = Q[we]);
    return {
      $$typeof: O,
      type: de,
      key: J,
      ref: $e,
      props: te,
      _owner: j.current,
    };
  }
  return (gr.Fragment = m), (gr.jsx = ne), (gr.jsxs = ne), gr;
}
var Na;
function Of() {
  return Na || ((Na = 1), (_i.exports = Rf())), _i.exports;
}
var ve = Of(),
  Ot = zi(),
  Ll = {},
  Ci = { exports: {} },
  je = {},
  Pi = { exports: {} },
  Ni = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Mf() {
  return (
    za ||
      ((za = 1),
      (function (N) {
        function O(S, T) {
          var _ = S.length;
          S.push(T);
          e: for (; 0 < _; ) {
            var c = (_ - 1) >>> 1,
              v = S[c];
            if (0 < j(v, T)) (S[c] = T), (S[_] = v), (_ = c);
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function H(S) {
          if (S.length === 0) return null;
          var T = S[0],
            _ = S.pop();
          if (_ !== T) {
            S[0] = _;
            e: for (var c = 0, v = S.length, M = v >>> 1; c < M; ) {
              var I = 2 * (c + 1) - 1,
                A = S[I],
                V = I + 1,
                Y = S[V];
              if (0 > j(A, _))
                V < v && 0 > j(Y, A)
                  ? ((S[c] = Y), (S[V] = _), (c = V))
                  : ((S[c] = A), (S[I] = _), (c = I));
              else if (V < v && 0 > j(Y, _)) (S[c] = Y), (S[V] = _), (c = V);
              else break e;
            }
          }
          return T;
        }
        function j(S, T) {
          var _ = S.sortIndex - T.sortIndex;
          return _ !== 0 ? _ : S.id - T.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var F = performance;
          N.unstable_now = function () {
            return F.now();
          };
        } else {
          var ne = Date,
            de = ne.now();
          N.unstable_now = function () {
            return ne.now() - de;
          };
        }
        var Q = [],
          Ce = [],
          we = 1,
          te = null,
          J = 3,
          $e = !1,
          We = !1,
          q = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          yn = typeof clearTimeout == "function" ? clearTimeout : null,
          an = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(S) {
          for (var T = m(Ce); T !== null; ) {
            if (T.callback === null) H(Ce);
            else if (T.startTime <= S)
              H(Ce), (T.sortIndex = T.expirationTime), O(Q, T);
            else break;
            T = m(Ce);
          }
        }
        function Se(S) {
          if (((q = !1), qe(S), !We))
            if (m(Q) !== null) (We = !0), Te(be);
            else {
              var T = m(Ce);
              T !== null && ue(Se, T.startTime - S);
            }
        }
        function be(S, T) {
          (We = !1), q && ((q = !1), yn(Qe), (Qe = -1)), ($e = !0);
          var _ = J;
          try {
            for (
              qe(T), te = m(Q);
              te !== null && (!(te.expirationTime > T) || (S && !Yn()));

            ) {
              var c = te.callback;
              if (typeof c == "function") {
                (te.callback = null), (J = te.priorityLevel);
                var v = c(te.expirationTime <= T);
                (T = N.unstable_now()),
                  typeof v == "function"
                    ? (te.callback = v)
                    : te === m(Q) && H(Q),
                  qe(T);
              } else H(Q);
              te = m(Q);
            }
            if (te !== null) var M = !0;
            else {
              var I = m(Ce);
              I !== null && ue(Se, I.startTime - T), (M = !1);
            }
            return M;
          } finally {
            (te = null), (J = _), ($e = !1);
          }
        }
        var Pe = !1,
          Le = null,
          Qe = -1,
          Nn = 5,
          gn = -1;
        function Yn() {
          return !(N.unstable_now() - gn < Nn);
        }
        function cn() {
          if (Le !== null) {
            var S = N.unstable_now();
            gn = S;
            var T = !0;
            try {
              T = Le(!0, S);
            } finally {
              T ? Fe() : ((Pe = !1), (Le = null));
            }
          } else Pe = !1;
        }
        var Fe;
        if (typeof an == "function")
          Fe = function () {
            an(cn);
          };
        else if (typeof MessageChannel < "u") {
          var en = new MessageChannel(),
            fn = en.port2;
          (en.port1.onmessage = cn),
            (Fe = function () {
              fn.postMessage(null);
            });
        } else
          Fe = function () {
            K(cn, 0);
          };
        function Te(S) {
          (Le = S), Pe || ((Pe = !0), Fe());
        }
        function ue(S, T) {
          Qe = K(function () {
            S(N.unstable_now());
          }, T);
        }
        (N.unstable_IdlePriority = 5),
          (N.unstable_ImmediatePriority = 1),
          (N.unstable_LowPriority = 4),
          (N.unstable_NormalPriority = 3),
          (N.unstable_Profiling = null),
          (N.unstable_UserBlockingPriority = 2),
          (N.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (N.unstable_continueExecution = function () {
            We || $e || ((We = !0), Te(be));
          }),
          (N.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Nn = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (N.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (N.unstable_getFirstCallbackNode = function () {
            return m(Q);
          }),
          (N.unstable_next = function (S) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = J;
            }
            var _ = J;
            J = T;
            try {
              return S();
            } finally {
              J = _;
            }
          }),
          (N.unstable_pauseExecution = function () {}),
          (N.unstable_requestPaint = function () {}),
          (N.unstable_runWithPriority = function (S, T) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var _ = J;
            J = S;
            try {
              return T();
            } finally {
              J = _;
            }
          }),
          (N.unstable_scheduleCallback = function (S, T, _) {
            var c = N.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              S)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = _ + v),
              (S = {
                id: we++,
                callback: T,
                priorityLevel: S,
                startTime: _,
                expirationTime: v,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  O(Ce, S),
                  m(Q) === null &&
                    S === m(Ce) &&
                    (q ? (yn(Qe), (Qe = -1)) : (q = !0), ue(Se, _ - c)))
                : ((S.sortIndex = v), O(Q, S), We || $e || ((We = !0), Te(be))),
              S
            );
          }),
          (N.unstable_shouldYield = Yn),
          (N.unstable_wrapCallback = function (S) {
            var T = J;
            return function () {
              var _ = J;
              J = T;
              try {
                return S.apply(this, arguments);
              } finally {
                J = _;
              }
            };
          });
      })(Ni)),
    Ni
  );
}
var La;
function Df() {
  return La || ((La = 1), (Pi.exports = Mf())), Pi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function If() {
  if (Ta) return je;
  Ta = 1;
  var N = zi(),
    O = Df();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var H = new Set(),
    j = {};
  function F(e, n) {
    ne(e, n), ne(e + "Capture", n);
  }
  function ne(e, n) {
    for (j[e] = n, e = 0; e < n.length; e++) H.add(n[e]);
  }
  var de = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Q = Object.prototype.hasOwnProperty,
    Ce =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    we = {},
    te = {};
  function J(e) {
    return Q.call(te, e)
      ? !0
      : Q.call(we, e)
      ? !1
      : Ce.test(e)
      ? (te[e] = !0)
      : ((we[e] = !0), !1);
  }
  function $e(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || $e(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function q(e, n, t, r, l, u, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i);
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      K[n] = new q(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      K[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      K[e] = new q(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var yn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(yn, an);
      K[n] = new q(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(yn, an);
        K[n] = new q(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(yn, an);
      K[n] = new q(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new q(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function qe(e, n, t, r) {
    var l = K.hasOwnProperty(n) ? K[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (We(n, t, l, r) && (t = null),
      r || l === null
        ? J(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Se = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Pe = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Nn = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    Yn = Symbol.for("react.context"),
    cn = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    en = Symbol.for("react.suspense_list"),
    fn = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    c;
  function v(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = (n && n[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var M = !1;
  function I(e, n) {
    if (!e || M) return "";
    M = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (M = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = I(e.type, !1)), e;
      case 11:
        return (e = I(e.type.render, !1)), e;
      case 1:
        return (e = I(e.type, !0)), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Pe:
        return "Portal";
      case Nn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case cn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case fn:
          return (
            (n = e.displayName || null), n !== null ? n : V(e.type) || "Memo"
          );
        case Te:
          (n = e._payload), (e = e._init);
          try {
            return V(e(n));
          } catch {}
      }
    return null;
  }
  function Y(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(n);
      case 8:
        return n === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function b(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ue(e) {
    var n = b(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Li(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = b(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return _({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Ti(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = $(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Ri(e, n) {
    (n = n.checked), n != null && qe(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Ri(e, n);
    var t = $(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ol(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ol(e, n.type, $(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Oi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Mt = Array.isArray;
  function ot(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + $(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ml(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Mi(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Mt(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: $(t) };
  }
  function Di(e, n) {
    var t = $(n.value),
      r = $(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Ii(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function ji(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ji(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var kr,
    Fi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var It = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ma = ["Webkit", "ms", "Moz", "O"];
  Object.keys(It).forEach(function (e) {
    Ma.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (It[n] = It[e]);
    });
  });
  function Ui(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (It.hasOwnProperty(e) && It[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Ai(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Ui(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Da = _(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Il(e, n) {
    if (n) {
      if (Da[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function jl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    st = null,
    at = null;
  function Vi(e) {
    if ((e = rr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = Wr(n)), Al(e.stateNode, e.type, n));
    }
  }
  function Bi(e) {
    st ? (at ? at.push(e) : (at = [e])) : (st = e);
  }
  function Hi() {
    if (st) {
      var e = st,
        n = at;
      if (((at = st = null), Vi(e), n)) for (e = 0; e < n.length; e++) Vi(n[e]);
    }
  }
  function $i(e, n) {
    return e(n);
  }
  function Wi() {}
  var Vl = !1;
  function Qi(e, n, t) {
    if (Vl) return e(n, t);
    Vl = !0;
    try {
      return $i(e, n, t);
    } finally {
      (Vl = !1), (st !== null || at !== null) && (Wi(), Hi());
    }
  }
  function jt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (de)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Ft, Ft),
        window.removeEventListener("test", Ft, Ft);
    } catch {
      Bl = !1;
    }
  function Ia(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1,
    Er = null,
    _r = !1,
    Hl = null,
    ja = {
      onError: function (e) {
        (Ut = !0), (Er = e);
      },
    };
  function Fa(e, n, t, r, l, u, i, o, s) {
    (Ut = !1), (Er = null), Ia.apply(ja, arguments);
  }
  function Ua(e, n, t, r, l, u, i, o, s) {
    if ((Fa.apply(this, arguments), Ut)) {
      if (Ut) {
        var p = Er;
        (Ut = !1), (Er = null);
      } else throw Error(m(198));
      _r || ((_r = !0), (Hl = p));
    }
  }
  function Gn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ki(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Yi(e) {
    if (Gn(e) !== e) throw Error(m(188));
  }
  function Aa(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Gn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Yi(l), e;
          if (u === r) return Yi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            (i = !0), (t = l), (r = u);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (t = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              (i = !0), (t = u), (r = l);
              break;
            }
            if (o === r) {
              (i = !0), (r = u), (t = l);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Gi(e) {
    return (e = Aa(e)), e !== null ? Xi(e) : null;
  }
  function Xi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Xi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Zi = O.unstable_scheduleCallback,
    Ji = O.unstable_cancelCallback,
    Va = O.unstable_shouldYield,
    Ba = O.unstable_requestPaint,
    oe = O.unstable_now,
    Ha = O.unstable_getCurrentPriorityLevel,
    $l = O.unstable_ImmediatePriority,
    qi = O.unstable_UserBlockingPriority,
    xr = O.unstable_NormalPriority,
    $a = O.unstable_LowPriority,
    bi = O.unstable_IdlePriority,
    Cr = null,
    dn = null;
  function Wa(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nn = Math.clz32 ? Math.clz32 : Ya,
    Qa = Math.log,
    Ka = Math.LN2;
  function Ya(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qa(e) / Ka) | 0)) | 0;
  }
  var Pr = 64,
    Nr = 4194304;
  function At(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = At(o)) : ((u &= i), u !== 0 && (r = At(u)));
    } else (i = t & ~l), i !== 0 ? (r = At(i)) : u !== 0 && (r = At(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - nn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Ga(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xa(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - nn(u),
        o = 1 << i,
        s = l[i];
      s === -1
        ? (!(o & t) || o & r) && (l[i] = Ga(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o);
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function eo() {
    var e = Pr;
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - nn(n)),
      (e[n] = t);
  }
  function Za(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - nn(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Kl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var W = 0;
  function no(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var to,
    Yl,
    ro,
    lo,
    uo,
    Gl = !1,
    Lr = [],
    zn = null,
    Ln = null,
    Tn = null,
    Bt = new Map(),
    Ht = new Map(),
    Rn = [],
    Ja =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function io(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function $t(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = rr(n)), n !== null && Yl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function qa(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (zn = $t(zn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Ln = $t(Ln, e, n, t, r, l)), !0;
      case "mouseover":
        return (Tn = $t(Tn, e, n, t, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Bt.set(u, $t(Bt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Ht.set(u, $t(Ht.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function oo(e) {
    var n = Xn(e.target);
    if (n !== null) {
      var t = Gn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Ki(t)), n !== null)) {
            (e.blockedOn = n),
              uo(e.priority, function () {
                ro(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Fl = r), t.target.dispatchEvent(r), (Fl = null);
      } else return (n = rr(t)), n !== null && Yl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function so(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function ba() {
    (Gl = !1),
      zn !== null && Tr(zn) && (zn = null),
      Ln !== null && Tr(Ln) && (Ln = null),
      Tn !== null && Tr(Tn) && (Tn = null),
      Bt.forEach(so),
      Ht.forEach(so);
  }
  function Wt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Gl ||
        ((Gl = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, ba)));
  }
  function Qt(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < Lr.length) {
      Wt(Lr[0], e);
      for (var t = 1; t < Lr.length; t++) {
        var r = Lr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zn !== null && Wt(zn, e),
        Ln !== null && Wt(Ln, e),
        Tn !== null && Wt(Tn, e),
        Bt.forEach(n),
        Ht.forEach(n),
        t = 0;
      t < Rn.length;
      t++
    )
      (r = Rn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
      oo(t), t.blockedOn === null && Rn.shift();
  }
  var ct = Se.ReactCurrentBatchConfig,
    Rr = !0;
  function ec(e, n, t, r) {
    var l = W,
      u = ct.transition;
    ct.transition = null;
    try {
      (W = 1), Xl(e, n, t, r);
    } finally {
      (W = l), (ct.transition = u);
    }
  }
  function nc(e, n, t, r) {
    var l = W,
      u = ct.transition;
    ct.transition = null;
    try {
      (W = 4), Xl(e, n, t, r);
    } finally {
      (W = l), (ct.transition = u);
    }
  }
  function Xl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) pu(e, n, r, Or, t), io(e, r);
      else if (qa(l, e, n, t, r)) r.stopPropagation();
      else if ((io(e, r), n & 4 && -1 < Ja.indexOf(e))) {
        for (; l !== null; ) {
          var u = rr(l);
          if (
            (u !== null && to(u),
            (u = Zl(e, n, t, r)),
            u === null && pu(e, n, r, Or, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, n, r, null, t);
    }
  }
  var Or = null;
  function Zl(e, n, t, r) {
    if (((Or = null), (e = Ul(r)), (e = Xn(e)), e !== null))
      if (((n = Gn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Ki(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Or = e), null;
  }
  function ao(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ha()) {
          case $l:
            return 1;
          case qi:
            return 4;
          case xr:
          case $a:
            return 16;
          case bi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    Jl = null,
    Mr = null;
  function co() {
    if (Mr) return Mr;
    var e,
      n = Jl,
      t = n.length,
      r,
      l = "value" in On ? On.value : On.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ir() {
    return !0;
  }
  function fo() {
    return !1;
  }
  function Ae(e) {
    function n(t, r, l, u, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ir
          : fo),
        (this.isPropagationStopped = fo),
        this
      );
    }
    return (
      _(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Ir));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Ir));
        },
        persist: function () {},
        isPersistent: Ir,
      }),
      n
    );
  }
  var ft = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ae(ft),
    Kt = _({}, ft, { view: 0, detail: 0 }),
    tc = Ae(Kt),
    bl,
    eu,
    Yt,
    jr = _({}, Kt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yt &&
              (Yt && e.type === "mousemove"
                ? ((bl = e.screenX - Yt.screenX), (eu = e.screenY - Yt.screenY))
                : (eu = bl = 0),
              (Yt = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    po = Ae(jr),
    rc = _({}, jr, { dataTransfer: 0 }),
    lc = Ae(rc),
    uc = _({}, Kt, { relatedTarget: 0 }),
    nu = Ae(uc),
    ic = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oc = Ae(ic),
    sc = _({}, ft, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ac = Ae(sc),
    cc = _({}, ft, { data: 0 }),
    mo = Ae(cc),
    fc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    pc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = pc[e])
      ? !!n[e]
      : !1;
  }
  function tu() {
    return mc;
  }
  var hc = _({}, Kt, {
      key: function (e) {
        if (e.key) {
          var n = fc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? dc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    vc = Ae(hc),
    yc = _({}, jr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ho = Ae(yc),
    gc = _({}, Kt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    wc = Ae(gc),
    Sc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kc = Ae(Sc),
    Ec = _({}, jr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _c = Ae(Ec),
    xc = [9, 13, 27, 32],
    ru = de && "CompositionEvent" in window,
    Gt = null;
  de && "documentMode" in document && (Gt = document.documentMode);
  var Cc = de && "TextEvent" in window && !Gt,
    vo = de && (!ru || (Gt && 8 < Gt && 11 >= Gt)),
    yo = " ",
    go = !1;
  function wo(e, n) {
    switch (e) {
      case "keyup":
        return xc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function So(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Pc(e, n) {
    switch (e) {
      case "compositionend":
        return So(n);
      case "keypress":
        return n.which !== 32 ? null : ((go = !0), yo);
      case "textInput":
        return (e = n.data), e === yo && go ? null : e;
      default:
        return null;
    }
  }
  function Nc(e, n) {
    if (dt)
      return e === "compositionend" || (!ru && wo(e, n))
        ? ((e = co()), (Mr = Jl = On = null), (dt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return vo && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ko(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zc[e.type] : n === "textarea";
  }
  function Eo(e, n, t, r) {
    Bi(r),
      (n = Br(n, "onChange")),
      0 < n.length &&
        ((t = new ql("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Xt = null,
    Zt = null;
  function Lc(e) {
    Vo(e, 0);
  }
  function Fr(e) {
    var n = yt(e);
    if (Li(n)) return e;
  }
  function Tc(e, n) {
    if (e === "change") return n;
  }
  var _o = !1;
  if (de) {
    var lu;
    if (de) {
      var uu = "oninput" in document;
      if (!uu) {
        var xo = document.createElement("div");
        xo.setAttribute("oninput", "return;"),
          (uu = typeof xo.oninput == "function");
      }
      lu = uu;
    } else lu = !1;
    _o = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    Xt && (Xt.detachEvent("onpropertychange", Po), (Zt = Xt = null));
  }
  function Po(e) {
    if (e.propertyName === "value" && Fr(Zt)) {
      var n = [];
      Eo(n, Zt, e, Ul(e)), Qi(Lc, n);
    }
  }
  function Rc(e, n, t) {
    e === "focusin"
      ? (Co(), (Xt = n), (Zt = t), Xt.attachEvent("onpropertychange", Po))
      : e === "focusout" && Co();
  }
  function Oc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fr(Zt);
  }
  function Mc(e, n) {
    if (e === "click") return Fr(n);
  }
  function Dc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Ic(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var tn = typeof Object.is == "function" ? Object.is : Ic;
  function Jt(e, n) {
    if (tn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!Q.call(n, l) || !tn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function No(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zo(e, n) {
    var t = No(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = No(t);
    }
  }
  function Lo(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Lo(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function To() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Sr(e.document);
    }
    return n;
  }
  function iu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function jc(e) {
    var n = To(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Lo(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && iu(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = zo(t, u));
          var i = zo(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Fc = de && "documentMode" in document && 11 >= document.documentMode,
    pt = null,
    ou = null,
    qt = null,
    su = !1;
  function Ro(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    su ||
      pt == null ||
      pt !== Sr(r) ||
      ((r = pt),
      "selectionStart" in r && iu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qt && Jt(qt, r)) ||
        ((qt = r),
        (r = Br(ou, "onSelect")),
        0 < r.length &&
          ((n = new ql("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = pt))));
  }
  function Ur(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var mt = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    au = {},
    Oo = {};
  de &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mt.animationend.animation,
      delete mt.animationiteration.animation,
      delete mt.animationstart.animation),
    "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ar(e) {
    if (au[e]) return au[e];
    if (!mt[e]) return e;
    var n = mt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Oo) return (au[e] = n[t]);
    return e;
  }
  var Mo = Ar("animationend"),
    Do = Ar("animationiteration"),
    Io = Ar("animationstart"),
    jo = Ar("transitionend"),
    Fo = new Map(),
    Uo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Mn(e, n) {
    Fo.set(e, n), F(n, [e]);
  }
  for (var cu = 0; cu < Uo.length; cu++) {
    var fu = Uo[cu],
      Uc = fu.toLowerCase(),
      Ac = fu[0].toUpperCase() + fu.slice(1);
    Mn(Uc, "on" + Ac);
  }
  Mn(Mo, "onAnimationEnd"),
    Mn(Do, "onAnimationIteration"),
    Mn(Io, "onAnimationStart"),
    Mn("dblclick", "onDoubleClick"),
    Mn("focusin", "onFocus"),
    Mn("focusout", "onBlur"),
    Mn(jo, "onTransitionEnd"),
    ne("onMouseEnter", ["mouseout", "mouseover"]),
    ne("onMouseLeave", ["mouseout", "mouseover"]),
    ne("onPointerEnter", ["pointerout", "pointerover"]),
    ne("onPointerLeave", ["pointerout", "pointerover"]),
    F(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    F(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    F(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    F(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bt =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bt)
    );
  function Ao(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Ua(r, n, void 0, e), (e.currentTarget = null);
  }
  function Vo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            Ao(l, o, p), (u = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Ao(l, o, p), (u = s);
          }
      }
    }
    if (_r) throw ((e = Hl), (_r = !1), (Hl = null), e);
  }
  function X(e, n) {
    var t = n[wu];
    t === void 0 && (t = n[wu] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Bo(n, e, 2, !1), t.add(r));
  }
  function du(e, n, t) {
    var r = 0;
    n && (r |= 4), Bo(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      (e[Vr] = !0),
        H.forEach(function (t) {
          t !== "selectionchange" && (Vc.has(t) || du(t, !1, e), du(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || ((n[Vr] = !0), du("selectionchange", !1, n));
    }
  }
  function Bo(e, n, t, r) {
    switch (ao(n)) {
      case 1:
        var l = ec;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Xl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Bl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function pu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Xn(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Qi(function () {
      var p = u,
        y = Ul(t),
        g = [];
      e: {
        var h = Fo.get(e);
        if (h !== void 0) {
          var k = ql,
            x = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              k = vc;
              break;
            case "focusin":
              (x = "focus"), (k = nu);
              break;
            case "focusout":
              (x = "blur"), (k = nu);
              break;
            case "beforeblur":
            case "afterblur":
              k = nu;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = po;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = lc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = wc;
              break;
            case Mo:
            case Do:
            case Io:
              k = oc;
              break;
            case jo:
              k = kc;
              break;
            case "scroll":
              k = tc;
              break;
            case "wheel":
              k = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = ho;
          }
          var C = (n & 4) !== 0,
            se = !C && e === "scroll",
            f = C ? (h !== null ? h + "Capture" : null) : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                f !== null &&
                  ((w = jt(a, f)), w != null && C.push(nr(a, w, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((h = new k(h, x, null, t, y)), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            h &&
              t !== Fl &&
              (x = t.relatedTarget || t.fromElement) &&
              (Xn(x) || x[wn]))
          )
            break e;
          if (
            (k || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            k
              ? ((x = t.relatedTarget || t.toElement),
                (k = p),
                (x = x ? Xn(x) : null),
                x !== null &&
                  ((se = Gn(x)), x !== se || (x.tag !== 5 && x.tag !== 6)) &&
                  (x = null))
              : ((k = null), (x = p)),
            k !== x)
          ) {
            if (
              ((C = po),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = ho),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (se = k == null ? h : yt(k)),
              (d = x == null ? h : yt(x)),
              (h = new C(w, a + "leave", k, t, y)),
              (h.target = se),
              (h.relatedTarget = d),
              (w = null),
              Xn(y) === p &&
                ((C = new C(f, a + "enter", x, t, y)),
                (C.target = d),
                (C.relatedTarget = se),
                (w = C)),
              (se = w),
              k && x)
            )
              n: {
                for (C = k, f = x, a = 0, d = C; d; d = ht(d)) a++;
                for (d = 0, w = f; w; w = ht(w)) d++;
                for (; 0 < a - d; ) (C = ht(C)), a--;
                for (; 0 < d - a; ) (f = ht(f)), d--;
                for (; a--; ) {
                  if (C === f || (f !== null && C === f.alternate)) break n;
                  (C = ht(C)), (f = ht(f));
                }
                C = null;
              }
            else C = null;
            k !== null && Ho(g, h, k, C, !1),
              x !== null && se !== null && Ho(g, se, x, C, !0);
          }
        }
        e: {
          if (
            ((h = p ? yt(p) : window),
            (k = h.nodeName && h.nodeName.toLowerCase()),
            k === "select" || (k === "input" && h.type === "file"))
          )
            var P = Tc;
          else if (ko(h))
            if (_o) P = Dc;
            else {
              P = Oc;
              var z = Rc;
            }
          else
            (k = h.nodeName) &&
              k.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Mc);
          if (P && (P = P(e, p))) {
            Eo(g, P, t, y);
            break e;
          }
          z && z(e, h, p),
            e === "focusout" &&
              (z = h._wrapperState) &&
              z.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value);
        }
        switch (((z = p ? yt(p) : window), e)) {
          case "focusin":
            (ko(z) || z.contentEditable === "true") &&
              ((pt = z), (ou = p), (qt = null));
            break;
          case "focusout":
            qt = ou = pt = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (su = !1), Ro(g, t, y);
            break;
          case "selectionchange":
            if (Fc) break;
          case "keydown":
          case "keyup":
            Ro(g, t, y);
        }
        var L;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          dt
            ? wo(e, t) && (R = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (R = "onCompositionStart");
        R &&
          (vo &&
            t.locale !== "ko" &&
            (dt || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && dt && (L = co())
              : ((On = y),
                (Jl = "value" in On ? On.value : On.textContent),
                (dt = !0))),
          (z = Br(p, R)),
          0 < z.length &&
            ((R = new mo(R, e, null, t, y)),
            g.push({ event: R, listeners: z }),
            L ? (R.data = L) : ((L = So(t)), L !== null && (R.data = L)))),
          (L = Cc ? Pc(e, t) : Nc(e, t)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new mo("onBeforeInput", "beforeinput", null, t, y)),
              g.push({ event: y, listeners: p }),
              (y.data = L)));
      }
      Vo(g, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = jt(e, t)),
        u != null && r.unshift(nr(e, u, l)),
        (u = jt(e, n)),
        u != null && r.push(nr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ho(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = jt(t, u)), s != null && i.unshift(nr(t, s, o)))
          : l || ((s = jt(t, u)), s != null && i.push(nr(t, s, o)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Bc = /\r\n?/g,
    Hc = /\u0000|\uFFFD/g;
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bc,
        `
`
      )
      .replace(Hc, "");
  }
  function Hr(e, n, t) {
    if (((n = $o(n)), $o(e) !== n && t)) throw Error(m(425));
  }
  function $r() {}
  var mu = null,
    hu = null;
  function vu(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yu = typeof setTimeout == "function" ? setTimeout : void 0,
    $c = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wo = typeof Promise == "function" ? Promise : void 0,
    Wc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wo < "u"
        ? function (e) {
            return Wo.resolve(null).then(e).catch(Qc);
          }
        : yu;
  function Qc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gu(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Qt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Qt(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Qo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2),
    pn = "__reactFiber$" + vt,
    tr = "__reactProps$" + vt,
    wn = "__reactContainer$" + vt,
    wu = "__reactEvents$" + vt,
    Kc = "__reactListeners$" + vt,
    Yc = "__reactHandles$" + vt;
  function Xn(e) {
    var n = e[pn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[wn] || t[pn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Qo(e); e !== null; ) {
            if ((t = e[pn])) return t;
            e = Qo(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[pn] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var Su = [],
    gt = -1;
  function In(e) {
    return { current: e };
  }
  function Z(e) {
    0 > gt || ((e.current = Su[gt]), (Su[gt] = null), gt--);
  }
  function G(e, n) {
    gt++, (Su[gt] = e.current), (e.current = n);
  }
  var jn = {},
    ke = In(jn),
    Re = In(!1),
    Zn = jn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Oe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Qr() {
    Z(Re), Z(ke);
  }
  function Ko(e, n, t) {
    if (ke.current !== jn) throw Error(m(168));
    G(ke, n), G(Re, t);
  }
  function Yo(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Y(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (Zn = ke.current),
      G(ke, e),
      G(Re, Re.current),
      !0
    );
  }
  function Go(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Yo(e, n, Zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Re),
        Z(ke),
        G(ke, e))
      : Z(Re),
      G(Re, t);
  }
  var Sn = null,
    Yr = !1,
    ku = !1;
  function Xo(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  function Gc(e) {
    (Yr = !0), Xo(e);
  }
  function Fn() {
    if (!ku && Sn !== null) {
      ku = !0;
      var e = 0,
        n = W;
      try {
        var t = Sn;
        for (W = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (Sn = null), (Yr = !1);
      } catch (l) {
        throw (Sn !== null && (Sn = Sn.slice(e + 1)), Zi($l, Fn), l);
      } finally {
        (W = n), (ku = !1);
      }
    }
    return null;
  }
  var St = [],
    kt = 0,
    Gr = null,
    Xr = 0,
    Ke = [],
    Ye = 0,
    Jn = null,
    kn = 1,
    En = "";
  function qn(e, n) {
    (St[kt++] = Xr), (St[kt++] = Gr), (Gr = e), (Xr = n);
  }
  function Zo(e, n, t) {
    (Ke[Ye++] = kn), (Ke[Ye++] = En), (Ke[Ye++] = Jn), (Jn = e);
    var r = kn;
    e = En;
    var l = 32 - nn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - nn(n) + l;
    if (30 < u) {
      var i = l - (l % 5);
      (u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (kn = (1 << (32 - nn(n) + l)) | (t << l) | r),
        (En = u + e);
    } else (kn = (1 << u) | (t << l) | r), (En = e);
  }
  function Eu(e) {
    e.return !== null && (qn(e, 1), Zo(e, 1, 0));
  }
  function _u(e) {
    for (; e === Gr; )
      (Gr = St[--kt]), (St[kt] = null), (Xr = St[--kt]), (St[kt] = null);
    for (; e === Jn; )
      (Jn = Ke[--Ye]),
        (Ke[Ye] = null),
        (En = Ke[--Ye]),
        (Ke[Ye] = null),
        (kn = Ke[--Ye]),
        (Ke[Ye] = null);
  }
  var Ve = null,
    Be = null,
    ee = !1,
    rn = null;
  function Jo(e, n) {
    var t = Je(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function qo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ve = e), (Be = Dn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ve = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = Jn !== null ? { id: kn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = Je(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ve = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Cu(e) {
    if (ee) {
      var n = Be;
      if (n) {
        var t = n;
        if (!qo(e, n)) {
          if (xu(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ve;
          n && qo(e, n)
            ? Jo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e));
        }
      } else {
        if (xu(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e);
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ve = e;
  }
  function Zr(e) {
    if (e !== Ve) return !1;
    if (!ee) return bo(e), (ee = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !vu(e.type, e.memoizedProps))),
      n && (n = Be))
    ) {
      if (xu(e)) throw (es(), Error(m(418)));
      for (; n; ) Jo(e, n), (n = Dn(n.nextSibling));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Be = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ve ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Be; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    (Be = Ve = null), (ee = !1);
  }
  function Pu(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var Xc = Se.ReactCurrentBatchConfig;
  function lr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ns(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ts(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Qn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = yi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Le
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
          (a.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Te &&
              ns(P) === a.type))
        ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
        : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = lr(f, a, d)),
          (w.return = f),
          w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = gi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = it(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = yi("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case Pe:
            return (a = gi(a, f.mode, d)), (a.return = f), a;
          case Te:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Mt(a) || T(a))
          return (a = it(a, f.mode, d, null)), (a.return = f), a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === P ? s(f, a, d, w) : null;
          case Pe:
            return d.key === P ? p(f, a, d, w) : null;
          case Te:
            return (P = d._init), h(f, a, P(d._payload), w);
        }
        if (Mt(d) || T(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(d) || null), o(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P)
            );
          case Pe:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P)
            );
          case Te:
            var z = w._init;
            return k(f, a, d, z(w._payload), P);
        }
        if (Mt(w) || T(w)) return (f = f.get(d) || null), y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function x(f, a, d, w) {
      for (
        var P = null, z = null, L = a, R = (a = 0), he = null;
        L !== null && R < d.length;
        R++
      ) {
        L.index > R ? ((he = L), (L = null)) : (he = L.sibling);
        var B = h(f, L, d[R], w);
        if (B === null) {
          L === null && (L = he);
          break;
        }
        e && L && B.alternate === null && n(f, L),
          (a = u(B, a, R)),
          z === null ? (P = B) : (z.sibling = B),
          (z = B),
          (L = he);
      }
      if (R === d.length) return t(f, L), ee && qn(f, R), P;
      if (L === null) {
        for (; R < d.length; R++)
          (L = g(f, d[R], w)),
            L !== null &&
              ((a = u(L, a, R)),
              z === null ? (P = L) : (z.sibling = L),
              (z = L));
        return ee && qn(f, R), P;
      }
      for (L = r(f, L); R < d.length; R++)
        (he = k(L, f, R, d[R], w)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              L.delete(he.key === null ? R : he.key),
            (a = u(he, a, R)),
            z === null ? (P = he) : (z.sibling = he),
            (z = he));
      return (
        e &&
          L.forEach(function (Kn) {
            return n(f, Kn);
          }),
        ee && qn(f, R),
        P
      );
    }
    function C(f, a, d, w) {
      var P = T(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var z = (P = null), L = a, R = (a = 0), he = null, B = d.next();
        L !== null && !B.done;
        R++, B = d.next()
      ) {
        L.index > R ? ((he = L), (L = null)) : (he = L.sibling);
        var Kn = h(f, L, B.value, w);
        if (Kn === null) {
          L === null && (L = he);
          break;
        }
        e && L && Kn.alternate === null && n(f, L),
          (a = u(Kn, a, R)),
          z === null ? (P = Kn) : (z.sibling = Kn),
          (z = Kn),
          (L = he);
      }
      if (B.done) return t(f, L), ee && qn(f, R), P;
      if (L === null) {
        for (; !B.done; R++, B = d.next())
          (B = g(f, B.value, w)),
            B !== null &&
              ((a = u(B, a, R)),
              z === null ? (P = B) : (z.sibling = B),
              (z = B));
        return ee && qn(f, R), P;
      }
      for (L = r(f, L); !B.done; R++, B = d.next())
        (B = k(L, f, R, B.value, w)),
          B !== null &&
            (e && B.alternate !== null && L.delete(B.key === null ? R : B.key),
            (a = u(B, a, R)),
            z === null ? (P = B) : (z.sibling = B),
            (z = B));
      return (
        e &&
          L.forEach(function (Lf) {
            return n(f, Lf);
          }),
        ee && qn(f, R),
        P
      );
    }
    function se(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Le &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (((P = d.type), P === Le)) {
                    if (z.tag === 7) {
                      t(f, z.sibling),
                        (a = l(z, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    z.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Te &&
                      ns(P) === z.type)
                  ) {
                    t(f, z.sibling),
                      (a = l(z, d.props)),
                      (a.ref = lr(f, z, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === Le
                ? ((a = it(d.props.children, f.mode, w, d.key)),
                  (a.return = f),
                  (f = a))
                : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Pe:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else n(f, a);
                a = a.sibling;
              }
              (a = gi(d, f.mode, w)), (a.return = f), (f = a);
            }
            return i(f);
          case Te:
            return (z = d._init), se(f, a, z(d._payload), w);
        }
        if (Mt(d)) return x(f, a, d, w);
        if (T(d)) return C(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (t(f, a), (a = yi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : t(f, a);
    }
    return se;
  }
  var _t = ts(!0),
    rs = ts(!1),
    qr = In(null),
    br = null,
    xt = null,
    Nu = null;
  function zu() {
    Nu = xt = br = null;
  }
  function Lu(e) {
    var n = qr.current;
    Z(qr), (e._currentValue = n);
  }
  function Tu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Ct(e, n) {
    (br = e),
      (Nu = xt = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Me = !0), (e.firstContext = null));
  }
  function Ge(e) {
    var n = e._currentValue;
    if (Nu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), xt === null)) {
        if (br === null) throw Error(m(308));
        (xt = e), (br.dependencies = { lanes: 0, firstContext: e });
      } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Ru(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function ls(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Ru(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      _n(e, r)
    );
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function xn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), U & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        _n(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Ru(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      _n(e, t)
    );
  }
  function el(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  function is(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i &&
          (o === null ? (y.firstBaseUpdate = p) : (o.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (i = 0), (y = p = s = null), (o = u);
      do {
        var h = o.lane,
          k = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var x = e,
              C = o;
            switch (((h = n), (k = t), C.tag)) {
              case 1:
                if (((x = C.payload), typeof x == "function")) {
                  g = x.call(k, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = (x.flags & -65537) | 128;
              case 0:
                if (
                  ((x = C.payload),
                  (h = typeof x == "function" ? x.call(k, g, h) : x),
                  h == null)
                )
                  break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [o]) : h.push(o));
        } else
          (k = {
            eventTime: k,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = k), (s = g)) : (y = y.next = k),
            (i |= h);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (tt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function os(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    mn = In(ur),
    ir = In(ur),
    or = In(ur);
  function et(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Mu(e, n) {
    switch ((G(or, n), G(ir, e), G(mn, ur), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Dl(n, e));
    }
    Z(mn), G(mn, n);
  }
  function Pt() {
    Z(mn), Z(ir), Z(or);
  }
  function ss(e) {
    et(or.current);
    var n = et(mn.current),
      t = Dl(n, e.type);
    n !== t && (G(ir, e), G(mn, t));
  }
  function Du(e) {
    ir.current === e && (Z(mn), Z(ir));
  }
  var re = In(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Iu = [];
  function ju() {
    for (var e = 0; e < Iu.length; e++)
      Iu[e]._workInProgressVersionPrimary = null;
    Iu.length = 0;
  }
  var rl = Se.ReactCurrentDispatcher,
    Fu = Se.ReactCurrentBatchConfig,
    nt = 0,
    le = null,
    ce = null,
    pe = null,
    ll = !1,
    sr = !1,
    ar = 0,
    Zc = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Uu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!tn(e[t], n[t])) return !1;
    return !0;
  }
  function Au(e, n, t, r, l, u) {
    if (
      ((nt = u),
      (le = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? ef : nf),
      (e = t(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (pe = ce = null),
          (n.updateQueue = null),
          (rl.current = tf),
          (e = t(r, l));
      } while (sr);
    }
    if (
      ((rl.current = ol),
      (n = ce !== null && ce.next !== null),
      (nt = 0),
      (pe = ce = le = null),
      (ll = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = ar !== 0;
    return (ar = 0), e;
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return pe === null ? (le.memoizedState = pe = e) : (pe = pe.next = e), pe;
  }
  function Xe() {
    if (ce === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ce.next;
    var n = pe === null ? le.memoizedState : pe.next;
    if (n !== null) (pe = n), (ce = e);
    else {
      if (e === null) throw Error(m(310));
      (ce = e),
        (e = {
          memoizedState: ce.memoizedState,
          baseState: ce.baseState,
          baseQueue: ce.baseQueue,
          queue: ce.queue,
          next: null,
        }),
        pe === null ? (le.memoizedState = pe = e) : (pe = pe.next = e);
    }
    return pe;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bu(e) {
    var n = Xe(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ce,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = u.next), (u.next = i);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var o = (i = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((o = s = g), (i = r)) : (s = s.next = g),
            (le.lanes |= y),
            (tt |= y);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (i = r) : (s.next = o),
        tn(r, n.memoizedState) || (Me = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (le.lanes |= u), (tt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Hu(e) {
    var n = Xe(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== l);
      tn(u, n.memoizedState) || (Me = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function as() {}
  function cs(e, n) {
    var t = le,
      r = Xe(),
      l = n(),
      u = !tn(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      $u(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (pe !== null && pe.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        fr(9, ds.bind(null, t, r, l, n), void 0, null),
        me === null)
      )
        throw Error(m(349));
      nt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (le.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ds(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ms(n) && hs(e);
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && hs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var n = _n(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function vs(e) {
    var n = hn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = bc.bind(null, le, e)),
      [n.memoizedState, e]
    );
  }
  function fr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (le.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ys() {
    return Xe().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = hn();
    (le.flags |= e),
      (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function il(e, n, t, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ce !== null) {
      var i = ce.memoizedState;
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = fr(n, t, u, r);
        return;
      }
    }
    (le.flags |= e), (l.memoizedState = fr(1 | n, t, u, r));
  }
  function gs(e, n) {
    return ul(8390656, 8, e, n);
  }
  function $u(e, n) {
    return il(2048, 8, e, n);
  }
  function ws(e, n) {
    return il(4, 2, e, n);
  }
  function Ss(e, n) {
    return il(4, 4, e, n);
  }
  function ks(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Es(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), il(4, 4, ks.bind(null, n, e), t)
    );
  }
  function Wu() {}
  function _s(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function xs(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Cs(e, n, t) {
    return nt & 21
      ? (tn(t, n) ||
          ((t = eo()), (le.lanes |= t), (tt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = t));
  }
  function Jc(e, n) {
    var t = W;
    (W = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Fu.transition;
    Fu.transition = {};
    try {
      e(!1), n();
    } finally {
      (W = t), (Fu.transition = r);
    }
  }
  function Ps() {
    return Xe().memoizedState;
  }
  function qc(e, n, t) {
    var r = $n(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ns(e))
    )
      zs(n, t);
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = ze();
      sn(t, e, r, l), Ls(t, n, r);
    }
  }
  function bc(e, n, t) {
    var r = $n(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ns(e)) zs(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = o), tn(o, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Ru(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ls(e, n, l, r)),
        t !== null && ((l = ze()), sn(t, e, r, l), Ls(t, n, r));
    }
  }
  function Ns(e) {
    var n = e.alternate;
    return e === le || (n !== null && n === le);
  }
  function zs(e, n) {
    sr = ll = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ls(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  var ol = {
      readContext: Ge,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    ef = {
      readContext: Ge,
      useCallback: function (e, n) {
        return (hn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Ge,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ul(4194308, 4, ks.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ul(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ul(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = hn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = hn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = qc.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = hn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: vs,
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        return (hn().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          n = e[0];
        return (e = Jc.bind(null, e[1])), (hn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = le,
          l = hn();
        if (ee) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), me === null)) throw Error(m(349));
          nt & 30 || fs(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ds.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = hn(),
          n = me.identifierPrefix;
        if (ee) {
          var t = En,
            r = kn;
          (t = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = ar++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = Zc++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: Ge,
      useCallback: _s,
      useContext: Ge,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: xs,
      useReducer: Bu,
      useRef: ys,
      useState: function () {
        return Bu(cr);
      },
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        var n = Xe();
        return Cs(n, ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(cr)[0],
          n = Xe().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: Ge,
      useCallback: _s,
      useContext: Ge,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: xs,
      useReducer: Hu,
      useRef: ys,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        var n = Xe();
        return ce === null ? (n.memoizedState = e) : Cs(n, ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          n = Xe().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function ln(e, n) {
    if (e && e.defaultProps) {
      (n = _({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Qu(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : _({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = $n(e),
        u = xn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (sn(n, e, l, r), el(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = $n(e),
        u = xn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (sn(n, e, l, r), el(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = ze(),
        r = $n(e),
        l = xn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = An(e, l, r)),
        n !== null && (sn(n, e, r, t), el(n, e, r));
    },
  };
  function Ts(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Jt(t, r) || !Jt(l, u)
        : !0
    );
  }
  function Rs(e, n, t) {
    var r = !1,
      l = jn,
      u = n.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((l = Oe(n) ? Zn : ke.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? wt(e, l) : jn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Os(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Ku(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ou(e);
    var u = n.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Ge(u))
      : ((u = Oe(n) ? Zn : ke.current), (l.context = wt(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == "function" && (Qu(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && sl.enqueueReplaceState(l, l.state, null),
        nl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += A(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Yu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Gu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ms(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        hl || ((hl = !0), (ai = r)), Gu(e, n);
      }),
      t
    );
  }
  function Ds(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Gu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (t.callback = function () {
          Gu(e, n),
            typeof r != "function" &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      t
    );
  }
  function Is(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rf();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = gf.bind(null, e, n, t)), n.then(e, e));
  }
  function js(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = xn(-1, 1)), (n.tag = 2), An(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var lf = Se.ReactCurrentOwner,
    Me = !1;
  function Ne(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      Ct(n, l),
      (r = Au(e, n, t, r, u, l)),
      (t = Vu()),
      e !== null && !Me
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (ee && t && Eu(n), (n.flags |= 1), Ne(e, n, r, l), n.child)
    );
  }
  function As(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" &&
        !vi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), Vs(e, n, u, r, l))
        : ((e = kl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Jt), t(i, r) && e.ref === n.ref)
      )
        return Cn(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Qn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Vs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jt(u, r) && e.ref === n.ref)
        if (((Me = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Me = !0);
        else return (n.lanes = e.lanes), Cn(e, n, l);
    }
    return Xu(e, n, t, r, l);
  }
  function Bs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          G(Lt, He),
          (He |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            G(Lt, He),
            (He |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          G(Lt, He),
          (He |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        G(Lt, He),
        (He |= r);
    return Ne(e, n, l, t), n.child;
  }
  function Hs(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Xu(e, n, t, r, l) {
    var u = Oe(t) ? Zn : ke.current;
    return (
      (u = wt(n, u)),
      Ct(n, l),
      (t = Au(e, n, t, r, u, l)),
      (r = Vu()),
      e !== null && !Me
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (ee && r && Eu(n), (n.flags |= 1), Ne(e, n, t, l), n.child)
    );
  }
  function $s(e, n, t, r, l) {
    if (Oe(t)) {
      var u = !0;
      Kr(n);
    } else u = !1;
    if ((Ct(n, l), n.stateNode === null))
      cl(e, n), Rs(n, t, r), Ku(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps;
      i.props = o;
      var s = i.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = Oe(t) ? Zn : ke.current), (p = wt(n, p)));
      var y = t.getDerivedStateFromProps,
        g =
          typeof y == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Os(n, i, r, p)),
        (Un = !1);
      var h = n.memoizedState;
      (i.state = h),
        nl(n, r, i, l),
        (s = n.memoizedState),
        o !== r || h !== s || Re.current || Un
          ? (typeof y == "function" && (Qu(n, t, y, r), (s = n.memoizedState)),
            (o = Un || Ts(n, t, o, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        us(e, n),
        (o = n.memoizedProps),
        (p = n.type === n.elementType ? o : ln(n.type, o)),
        (i.props = p),
        (g = n.pendingProps),
        (h = i.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Oe(t) ? Zn : ke.current), (s = wt(n, s)));
      var k = t.getDerivedStateFromProps;
      (y =
        typeof k == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Os(n, i, r, s)),
        (Un = !1),
        (h = n.memoizedState),
        (i.state = h),
        nl(n, r, i, l);
      var x = n.memoizedState;
      o !== g || h !== x || Re.current || Un
        ? (typeof k == "function" && (Qu(n, t, k, r), (x = n.memoizedState)),
          (p = Un || Ts(n, t, p, r, h, x, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, x, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, x, s)),
              typeof i.componentDidUpdate == "function" && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = x)),
          (i.props = r),
          (i.state = x),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Zu(e, n, t, r, u, l);
  }
  function Zu(e, n, t, r, l, u) {
    Hs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Go(n, t, !1), Cn(e, n, u);
    (r = n.stateNode), (lf.current = n);
    var o =
      i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = _t(n, e.child, null, u)), (n.child = _t(n, null, o, u)))
        : Ne(e, n, o, u),
      (n.memoizedState = r.state),
      l && Go(n, t, !0),
      n.child
    );
  }
  function Ws(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Ko(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ko(e, n.context, !1),
      Mu(e, n.containerInfo);
  }
  function Qs(e, n, t, r, l) {
    return Et(), Pu(l), (n.flags |= 256), Ne(e, n, t, r), n.child;
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ks(e, n, t) {
    var r = n.pendingProps,
      l = re.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
      e === null)
    )
      return (
        Cu(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = El(i, r, 0, null)),
                (e = it(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = qu(t)),
                (n.memoizedState = Ju),
                e)
              : bu(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return uf(e, n, i, r, o, l, t);
    if (u) {
      (u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Qn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qn(o, u)) : ((u = it(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? qu(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Qn(u, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function bu(e, n) {
    return (
      (n = El({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function al(e, n, t, r) {
    return (
      r !== null && Pu(r),
      _t(n, e.child, null, t),
      (e = bu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function uf(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Yu(Error(m(422)))), al(e, n, i, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((u = r.fallback),
          (l = n.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (u = it(u, l, i, null)),
          (u.flags |= 2),
          (r.return = n),
          (u.return = n),
          (r.sibling = u),
          (n.child = r),
          n.mode & 1 && _t(n, e.child, null, i),
          (n.child.memoizedState = qu(i)),
          (n.memoizedState = Ju),
          u);
    if (!(n.mode & 1)) return al(e, n, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), al(e, n, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), Me || o)) {
      if (((r = me), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), _n(e, l), sn(r, e, l, -1));
      }
      return hi(), (r = Yu(Error(m(421)))), al(e, n, i, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = wf.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Be = Dn(l.nextSibling)),
        (Ve = n),
        (ee = !0),
        (rn = null),
        e !== null &&
          ((Ke[Ye++] = kn),
          (Ke[Ye++] = En),
          (Ke[Ye++] = Jn),
          (kn = e.id),
          (En = e.overflow),
          (Jn = n)),
        (n = bu(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Ys(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Tu(e.return, n, t);
  }
  function ei(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Gs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Ne(e, n, r.children, t), (r = re.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, t, n);
          else if (e.tag === 19) Ys(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((G(re, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && tl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ei(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ei(n, !0, t, null, u);
          break;
        case "together":
          ei(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Cn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (tt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Qn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function of(e, n, t) {
    switch (n.tag) {
      case 3:
        Ws(n), Et();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        Oe(n.type) && Kr(n);
        break;
      case 4:
        Mu(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        G(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Ks(e, n, t)
            : (G(re, re.current & 1),
              (e = Cn(e, n, t)),
              e !== null ? e.sibling : null);
        G(re, re.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Gs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          G(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Bs(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Xs, ni, Zs, Js;
  (Xs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ni = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), et(mn.current);
        var u = null;
        switch (t) {
          case "input":
            (l = Tl(e, l)), (r = Tl(e, r)), (u = []);
            break;
          case "select":
            (l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = Ml(e, l)), (r = Ml(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = $r);
        }
        Il(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (j.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (u = u || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (j.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && X("scroll", e),
                      u || o === s || (u = []))
                    : (u = u || []).push(p, s));
        }
        t && (u = u || []).push("style", t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function dr(e, n) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function _e(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function sf(e, n, t) {
    var r = n.pendingProps;
    switch ((_u(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(n), null;
      case 1:
        return Oe(n.type) && Qr(), _e(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Pt(),
          Z(Re),
          Z(ke),
          ju(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), rn !== null && (di(rn), (rn = null)))),
          ni(e, n),
          _e(n),
          null
        );
      case 5:
        Du(n);
        var l = et(or.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return _e(n), null;
          }
          if (((e = et(mn.current)), Zr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[pn] = n), (r[tr] = u), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                X("cancel", r), X("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) X(bt[l], r);
                break;
              case "source":
                X("error", r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", r), X("load", r);
                break;
              case "details":
                X("toggle", r);
                break;
              case "input":
                Ti(r, u), X("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  X("invalid", r);
                break;
              case "textarea":
                Mi(r, u), X("invalid", r);
            }
            Il(t, u), (l = null);
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : j.hasOwnProperty(i) &&
                    o != null &&
                    i === "onScroll" &&
                    X("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), Oi(r, u, !0);
                break;
              case "textarea":
                wr(r), Ii(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ji(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[pn] = n),
              (e[tr] = r),
              Xs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = jl(t, r)), t)) {
                case "dialog":
                  X("cancel", e), X("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  X("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) X(bt[l], e);
                  l = r;
                  break;
                case "source":
                  X("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  X("error", e), X("load", e), (l = r);
                  break;
                case "details":
                  X("toggle", e), (l = r);
                  break;
                case "input":
                  Ti(e, r), (l = Tl(e, r)), X("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    X("invalid", e);
                  break;
                case "textarea":
                  Mi(e, r), (l = Ml(e, r)), X("invalid", e);
                  break;
                default:
                  l = r;
              }
              Il(t, l), (o = l);
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Ai(e, s)
                    : u === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Fi(e, s))
                    : u === "children"
                    ? typeof s == "string"
                      ? (t !== "textarea" || s !== "") && Dt(e, s)
                      : typeof s == "number" && Dt(e, "" + s)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (j.hasOwnProperty(u)
                        ? s != null && u === "onScroll" && X("scroll", e)
                        : s != null && qe(e, u, s, i));
                }
              switch (t) {
                case "input":
                  wr(e), Oi(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Ii(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? ot(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        ot(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return _e(n), null;
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = et(or.current)), et(mn.current), Zr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[pn] = n),
              (u = r.nodeValue !== t) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[pn] = n),
              (n.stateNode = r);
        }
        return _e(n), null;
      case 13:
        if (
          (Z(re),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Be !== null && n.mode & 1 && !(n.flags & 128))
            es(), Et(), (n.flags |= 98560), (u = !1);
          else if (((u = Zr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[pn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            _e(n), (u = !1);
          } else rn !== null && (di(rn), (rn = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || re.current & 1 ? fe === 0 && (fe = 3) : hi())),
            n.updateQueue !== null && (n.flags |= 4),
            _e(n),
            null);
      case 4:
        return (
          Pt(),
          ni(e, n),
          e === null && er(n.stateNode.containerInfo),
          _e(n),
          null
        );
      case 10:
        return Lu(n.type._context), _e(n), null;
      case 17:
        return Oe(n.type) && Qr(), _e(n), null;
      case 19:
        if ((Z(re), (u = n.memoizedState), u === null)) return _e(n), null;
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (fe !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = tl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      dr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return G(re, (re.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              oe() > Tt &&
              ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = tl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                dr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !i.alternate &&
                  !ee)
              )
                return _e(n), null;
            } else
              2 * oe() - u.renderingStartTime > Tt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = oe()),
            (n.sibling = null),
            (t = re.current),
            G(re, r ? (t & 1) | 2 : t & 1),
            n)
          : (_e(n), null);
      case 22:
      case 23:
        return (
          mi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? He & 1073741824 &&
              (_e(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : _e(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function af(e, n) {
    switch ((_u(n), n.tag)) {
      case 1:
        return (
          Oe(n.type) && Qr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Pt(),
          Z(Re),
          Z(ke),
          ju(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Du(n), null;
      case 13:
        if (
          (Z(re), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Z(re), null;
      case 4:
        return Pt(), null;
      case 10:
        return Lu(n.type._context), null;
      case 22:
      case 23:
        return mi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    xe = !1,
    cf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ie(e, n, r);
        }
      else t.current = null;
  }
  function ti(e, n, t) {
    try {
      t();
    } catch (r) {
      ie(e, n, r);
    }
  }
  var qs = !1;
  function ff(e, n) {
    if (((mu = Rr), (e = To()), iu(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var k;
                g !== t || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (k = g.firstChild) !== null;

              )
                (h = g), (g = k);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (k = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = k;
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      hu = { focusedElem: e, selectionRange: t }, Rr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var x = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var C = x.memoizedProps,
                      se = x.memoizedState,
                      f = n.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? C : ln(n.type, C),
                        se
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ie(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (x = qs), (qs = !1), x;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && ti(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ri(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[pn],
          delete n[tr],
          delete n[wu],
          delete n[Kc],
          delete n[Yc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, n, t), e = e.sibling; e !== null; )
        li(e, n, t), (e = e.sibling);
  }
  function ui(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), (e = e.sibling);
  }
  var ye = null,
    un = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling);
  }
  function ta(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(Cr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        xe || zt(t, n);
      case 6:
        var r = ye,
          l = un;
        (ye = null),
          Vn(e, n, t),
          (ye = r),
          (un = l),
          ye !== null &&
            (un
              ? ((e = ye),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : ye.removeChild(t.stateNode));
        break;
      case 18:
        ye !== null &&
          (un
            ? ((e = ye),
              (t = t.stateNode),
              e.nodeType === 8
                ? gu(e.parentNode, t)
                : e.nodeType === 1 && gu(e, t),
              Qt(e))
            : gu(ye, t.stateNode));
        break;
      case 4:
        (r = ye),
          (l = un),
          (ye = t.stateNode.containerInfo),
          (un = !0),
          Vn(e, n, t),
          (ye = r),
          (un = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !xe &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            (u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && ti(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (
          !xe &&
          (zt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            ie(t, n, o);
          }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((xe = (r = xe) || t.memoizedState !== null), Vn(e, n, t), (xe = r))
          : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new cf()),
        n.forEach(function (r) {
          var l = Sf.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            i = n,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (ye = o.stateNode), (un = !1);
                break e;
              case 3:
                (ye = o.stateNode.containerInfo), (un = !0);
                break e;
              case 4:
                (ye = o.stateNode.containerInfo), (un = !0);
                break e;
            }
            o = o.return;
          }
          if (ye === null) throw Error(m(160));
          ta(u, i, l), (ye = null), (un = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          ie(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling);
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((on(n, e), vn(e), r & 4)) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (C) {
            ie(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 1:
        on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (
          (on(n, e),
          vn(e),
          r & 512 && t !== null && zt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === "input" && u.type === "radio" && u.name != null && Ri(l, u),
                jl(o, i);
              var p = jl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Ai(l, g)
                  : y === "dangerouslySetInnerHTML"
                  ? Fi(l, g)
                  : y === "children"
                  ? Dt(l, g)
                  : qe(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Rl(l, u);
                  break;
                case "textarea":
                  Di(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null
                    ? ot(l, !!u.multiple, k, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? ot(l, !!u.multiple, u.defaultValue, !0)
                        : ot(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[tr] = u;
            } catch (C) {
              ie(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((on(n, e), vn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (on(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Qt(n.containerInfo);
          } catch (C) {
            ie(e, e.return, C);
          }
        break;
      case 4:
        on(n, e), vn(e);
        break;
      case 13:
        on(n, e),
          vn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (si = oe())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((y = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((xe = (p = xe) || y), on(n, e), (xe = p)) : on(n, e),
          vn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && e.mode & 1)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((h = E), (k = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var x = h.stateNode;
                    if (typeof x.componentWillUnmount == "function") {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (x.props = n.memoizedProps),
                          (x.state = n.memoizedState),
                          x.componentWillUnmount();
                      } catch (C) {
                        ie(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      oa(g);
                      continue;
                    }
                }
                k !== null ? ((k.return = h), (E = k)) : oa(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (o.style.display = Ui("display", i)));
                } catch (C) {
                  ie(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (C) {
                  ie(e, e.return, C);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), (g = g.return);
            }
            y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        on(n, e), vn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        on(n, e), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
            var u = na(e);
            ui(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            li(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ie(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function df(e, n, t) {
    (E = e), ua(e);
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || xe;
          o = fl;
          var p = xe;
          if (((fl = i), (xe = s) && !p))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                  ? ((s.return = i), (E = s))
                  : sa(l);
          for (; u !== null; ) (E = u), ua(u), (u = u.sibling);
          (E = l), (fl = o), (xe = p);
        }
        ia(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                xe || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !xe)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : ln(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = n.updateQueue;
                u !== null && os(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  os(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Qt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          xe || (n.flags & 512 && ri(n));
        } catch (h) {
          ie(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              ie(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(n, l, s);
              }
            }
            var u = n.return;
            try {
              ri(n);
            } catch (s) {
              ie(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ri(n);
            } catch (s) {
              ie(n, i, s);
            }
        }
      } catch (s) {
        ie(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        (o.return = n.return), (E = o);
        break;
      }
      E = n.return;
    }
  }
  var pf = Math.ceil,
    pl = Se.ReactCurrentDispatcher,
    ii = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    U = 0,
    me = null,
    ae = null,
    ge = 0,
    He = 0,
    Lt = In(0),
    fe = 0,
    mr = null,
    tt = 0,
    ml = 0,
    oi = 0,
    hr = null,
    De = null,
    si = 0,
    Tt = 1 / 0,
    Pn = null,
    hl = !1,
    ai = null,
    Bn = null,
    vl = !1,
    Hn = null,
    yl = 0,
    vr = 0,
    ci = null,
    gl = -1,
    wl = 0;
  function ze() {
    return U & 6 ? oe() : gl !== -1 ? gl : (gl = oe());
  }
  function $n(e) {
    return e.mode & 1
      ? U & 2 && ge !== 0
        ? ge & -ge
        : Xc.transition !== null
        ? (wl === 0 && (wl = eo()), wl)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))),
          e)
      : 1;
  }
  function sn(e, n, t, r) {
    if (50 < vr) throw ((vr = 0), (ci = null), Error(m(185)));
    Vt(e, t, r),
      (!(U & 2) || e !== me) &&
        (e === me && (!(U & 2) && (ml |= t), fe === 4 && Wn(e, ge)),
        Ie(e, r),
        t === 1 && U === 0 && !(n.mode & 1) && ((Tt = oe() + 500), Yr && Fn()));
  }
  function Ie(e, n) {
    var t = e.callbackNode;
    Xa(e, n);
    var r = zr(e, e === me ? ge : 0);
    if (r === 0)
      t !== null && Ji(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && Ji(t), n === 1))
        e.tag === 0 ? Gc(ca.bind(null, e)) : Xo(ca.bind(null, e)),
          Wc(function () {
            !(U & 6) && Fn();
          }),
          (t = null);
      else {
        switch (no(r)) {
          case 1:
            t = $l;
            break;
          case 4:
            t = qi;
            break;
          case 16:
            t = xr;
            break;
          case 536870912:
            t = bi;
            break;
          default:
            t = xr;
        }
        t = ga(t, aa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function aa(e, n) {
    if (((gl = -1), (wl = 0), U & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = zr(e, e === me ? ge : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var u = da();
      (me !== e || ge !== n) && ((Pn = null), (Tt = oe() + 500), lt(e, n));
      do
        try {
          vf();
          break;
        } catch (o) {
          fa(e, o);
        }
      while (!0);
      zu(),
        (pl.current = u),
        (U = l),
        ae !== null ? (n = 0) : ((me = null), (ge = 0), (n = fe));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (n = fi(e, l)))),
        n === 1)
      )
        throw ((t = mr), lt(e, 0), Wn(e, r), Ie(e, oe()), t);
      if (n === 6) Wn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !mf(l) &&
            ((n = Sl(e, r)),
            n === 2 && ((u = Wl(e)), u !== 0 && ((r = u), (n = fi(e, u)))),
            n === 1))
        )
          throw ((t = mr), lt(e, 0), Wn(e, r), Ie(e, oe()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, De, Pn);
            break;
          case 3:
            if (
              (Wn(e, r),
              (r & 130023424) === r && ((n = si + 500 - oe()), 10 < n))
            ) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ze(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = yu(ut.bind(null, e, De, Pn), n);
              break;
            }
            ut(e, De, Pn);
            break;
          case 4:
            if ((Wn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - nn(r);
              (u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u);
            }
            if (
              ((r = l),
              (r = oe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * pf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(ut.bind(null, e, De, Pn), r);
              break;
            }
            ut(e, De, Pn);
            break;
          case 5:
            ut(e, De, Pn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ie(e, oe()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function fi(e, n) {
    var t = hr;
    return (
      e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256),
      (e = Sl(e, n)),
      e !== 2 && ((n = De), (De = t), n !== null && di(n)),
      e
    );
  }
  function di(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function mf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!tn(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (
      n &= ~oi,
        n &= ~ml,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - nn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function ca(e) {
    if (U & 6) throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1)) return Ie(e, oe()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && ((n = r), (t = fi(e, r)));
    }
    if (t === 1) throw ((t = mr), lt(e, 0), Wn(e, n), Ie(e, oe()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      ut(e, De, Pn),
      Ie(e, oe()),
      null
    );
  }
  function pi(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      (U = t), U === 0 && ((Tt = oe() + 500), Yr && Fn());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(U & 6) && Rt();
    var n = U;
    U |= 1;
    var t = Ze.transition,
      r = W;
    try {
      if (((Ze.transition = null), (W = 1), e)) return e();
    } finally {
      (W = r), (Ze.transition = t), (U = n), !(U & 6) && Fn();
    }
  }
  function mi() {
    (He = Lt.current), Z(Lt);
  }
  function lt(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), $c(t)), ae !== null))
      for (t = ae.return; t !== null; ) {
        var r = t;
        switch ((_u(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Qr();
            break;
          case 3:
            Pt(), Z(Re), Z(ke), ju();
            break;
          case 5:
            Du(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            Z(re);
            break;
          case 19:
            Z(re);
            break;
          case 10:
            Lu(r.type._context);
            break;
          case 22:
          case 23:
            mi();
        }
        t = t.return;
      }
    if (
      ((me = e),
      (ae = e = Qn(e.current, null)),
      (ge = He = n),
      (fe = 0),
      (mr = null),
      (oi = ml = tt = 0),
      (De = hr = null),
      bn !== null)
    ) {
      for (n = 0; n < bn.length; n++)
        if (((t = bn[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var i = u.next;
            (u.next = l), (r.next = i);
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function fa(e, n) {
    do {
      var t = ae;
      try {
        if ((zu(), (rl.current = ol), ll)) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((nt = 0),
          (pe = ce = le = null),
          (sr = !1),
          (ar = 0),
          (ii.current = null),
          t === null || t.return === null)
        ) {
          (fe = 1), (mr = n), (ae = null);
          break;
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n;
          if (
            ((n = ge),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var k = js(i);
            if (k !== null) {
              (k.flags &= -257),
                Fs(k, i, o, u, n),
                k.mode & 1 && Is(u, p, n),
                (n = k),
                (s = p);
              var x = n.updateQueue;
              if (x === null) {
                var C = new Set();
                C.add(s), (n.updateQueue = C);
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Is(u, p, n), hi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (ee && o.mode & 1) {
            var se = js(i);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256),
                Fs(se, i, o, u, n),
                Pu(Nt(s, o));
              break e;
            }
          }
          (u = s = Nt(s, o)),
            fe !== 4 && (fe = 2),
            hr === null ? (hr = [u]) : hr.push(u),
            (u = i);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var f = Ms(u, s, n);
                is(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bn === null || !Bn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Ds(u, o, n);
                  is(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ma(t);
      } catch (P) {
        (n = P), ae === t && t !== null && (ae = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = pl.current;
    return (pl.current = ol), e === null ? ol : e;
  }
  function hi() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
      me === null || (!(tt & 268435455) && !(ml & 268435455)) || Wn(me, ge);
  }
  function Sl(e, n) {
    var t = U;
    U |= 2;
    var r = da();
    (me !== e || ge !== n) && ((Pn = null), lt(e, n));
    do
      try {
        hf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((zu(), (U = t), (pl.current = r), ae !== null)) throw Error(m(261));
    return (me = null), (ge = 0), fe;
  }
  function hf() {
    for (; ae !== null; ) pa(ae);
  }
  function vf() {
    for (; ae !== null && !Va(); ) pa(ae);
  }
  function pa(e) {
    var n = ya(e.alternate, e, He);
    (e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (ae = n),
      (ii.current = null);
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = af(t, n)), t !== null)) {
          (t.flags &= 32767), (ae = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (fe = 6), (ae = null);
          return;
        }
      } else if (((t = sf(t, n, He)), t !== null)) {
        ae = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ae = n;
        return;
      }
      ae = n = e;
    } while (n !== null);
    fe === 0 && (fe = 5);
  }
  function ut(e, n, t) {
    var r = W,
      l = Ze.transition;
    try {
      (Ze.transition = null), (W = 1), yf(e, n, t, r);
    } finally {
      (Ze.transition = l), (W = r);
    }
    return null;
  }
  function yf(e, n, t, r) {
    do Rt();
    while (Hn !== null);
    if (U & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (Za(e, u),
      e === me && ((ae = me = null), (ge = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        vl ||
        ((vl = !0),
        ga(xr, function () {
          return Rt(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = Ze.transition), (Ze.transition = null);
      var i = W;
      W = 1;
      var o = U;
      (U |= 4),
        (ii.current = null),
        ff(e, t),
        la(t, e),
        jc(hu),
        (Rr = !!mu),
        (hu = mu = null),
        (e.current = t),
        df(t),
        Ba(),
        (U = o),
        (W = i),
        (Ze.transition = u);
    } else e.current = t;
    if (
      (vl && ((vl = !1), (Hn = e), (yl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bn = null),
      Wa(t.stateNode),
      Ie(e, oe()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = ai), (ai = null), e);
    return (
      yl & 1 && e.tag !== 0 && Rt(),
      (u = e.pendingLanes),
      u & 1 ? (e === ci ? vr++ : ((vr = 0), (ci = e))) : (vr = 0),
      Fn(),
      null
    );
  }
  function Rt() {
    if (Hn !== null) {
      var e = no(yl),
        n = Ze.transition,
        t = W;
      try {
        if (((Ze.transition = null), (W = 16 > e ? 16 : e), Hn === null))
          var r = !1;
        else {
          if (((e = Hn), (Hn = null), (yl = 0), U & 6)) throw Error(m(331));
          var l = U;
          for (U |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) (g.return = y), (E = g);
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling,
                          k = y.return;
                        if ((bs(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = k), (E = h);
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var x = u.alternate;
                if (x !== null) {
                  var C = x.child;
                  if (C !== null) {
                    x.child = null;
                    do {
                      var se = C.sibling;
                      (C.sibling = null), (C = se);
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (E = i);
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  (f.return = u.return), (E = f);
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, o);
                    }
                  } catch (P) {
                    ie(o, o.return, P);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (E = w);
                  break e;
                }
                E = o.return;
              }
          }
          if (
            ((U = l), Fn(), dn && typeof dn.onPostCommitFiberRoot == "function")
          )
            try {
              dn.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (W = t), (Ze.transition = n);
      }
    }
    return !1;
  }
  function ha(e, n, t) {
    (n = Nt(t, n)),
      (n = Ms(e, n, 1)),
      (e = An(e, n, 1)),
      (n = ze()),
      e !== null && (Vt(e, 1, n), Ie(e, n));
  }
  function ie(e, n, t) {
    if (e.tag === 3) ha(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(r)))
          ) {
            (e = Nt(t, e)),
              (e = Ds(n, e, 1)),
              (n = An(n, e, 1)),
              (e = ze()),
              n !== null && (Vt(n, 1, e), Ie(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = ze()),
      (e.pingedLanes |= e.suspendedLanes & t),
      me === e &&
        (ge & t) === t &&
        (fe === 4 || (fe === 3 && (ge & 130023424) === ge && 500 > oe() - si)
          ? lt(e, 0)
          : (oi |= t)),
      Ie(e, n);
  }
  function va(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
        : (n = 1));
    var t = ze();
    (e = _n(e, n)), e !== null && (Vt(e, n, t), Ie(e, t));
  }
  function wf(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), va(e, t);
  }
  function Sf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), va(e, t);
  }
  var ya;
  ya = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Re.current) Me = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Me = !1), of(e, n, t);
        Me = !!(e.flags & 131072);
      }
    else (Me = !1), ee && n.flags & 1048576 && Zo(n, Xr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        cl(e, n), (e = n.pendingProps);
        var l = wt(n, ke.current);
        Ct(n, t), (l = Au(null, n, r, e, l, t));
        var u = Vu();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Oe(r) ? ((u = !0), Kr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(n),
              (l.updater = sl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Ku(n, r, e, t),
              (n = Zu(null, n, r, !0, u, t)))
            : ((n.tag = 0), ee && u && Eu(n), Ne(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Ef(r)),
            (e = ln(r, e)),
            l)
          ) {
            case 0:
              n = Xu(null, n, r, e, t);
              break e;
            case 1:
              n = $s(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = As(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Xu(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          $s(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Ws(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            us(e, n),
            nl(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = Nt(Error(m(423)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = Nt(Error(m(424)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else
              for (
                Be = Dn(n.stateNode.containerInfo.firstChild),
                  Ve = n,
                  ee = !0,
                  rn = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = Cn(e, n, t);
              break e;
            }
            Ne(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ss(n),
          e === null && Cu(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          vu(r, l) ? (i = null) : u !== null && vu(r, u) && (n.flags |= 32),
          Hs(e, n),
          Ne(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && Cu(n), null;
      case 13:
        return Ks(e, n, t);
      case 4:
        return (
          Mu(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : Ne(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Us(e, n, r, l, t)
        );
      case 7:
        return Ne(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            G(qr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (tn(u.value, i)) {
              if (u.children === l.children && !Re.current) {
                n = Cn(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = xn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Tu(u.return, t, n),
                        (o.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    Tu(i, t, n),
                    (i = u.sibling);
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      (u.return = i.return), (i = u);
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Ne(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Ct(n, t),
          (l = Ge(l)),
          (r = r(l)),
          (n.flags |= 1),
          Ne(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = ln(r, n.pendingProps)),
          (l = ln(r.type, l)),
          As(e, n, r, l, t)
        );
      case 15:
        return Vs(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          cl(e, n),
          (n.tag = 1),
          Oe(r) ? ((e = !0), Kr(n)) : (e = !1),
          Ct(n, t),
          Rs(n, r, l),
          Ku(n, r, l, t),
          Zu(null, n, r, !0, e, t)
        );
      case 19:
        return Gs(e, n, t);
      case 22:
        return Bs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Zi(e, n);
  }
  function kf(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Je(e, n, t, r) {
    return new kf(e, n, t, r);
  }
  function vi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ef(e) {
    if (typeof e == "function") return vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === cn)) return 11;
      if (e === fn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = Je(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function kl(e, n, t, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) vi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Le:
          return it(t.children, l, u, n);
        case Qe:
          (i = 8), (l |= 8);
          break;
        case Nn:
          return (
            (e = Je(12, t, n, l | 2)), (e.elementType = Nn), (e.lanes = u), e
          );
        case Fe:
          return (e = Je(13, t, n, l)), (e.elementType = Fe), (e.lanes = u), e;
        case en:
          return (e = Je(19, t, n, l)), (e.elementType = en), (e.lanes = u), e;
        case ue:
          return El(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gn:
                i = 10;
                break e;
              case Yn:
                i = 9;
                break e;
              case cn:
                i = 11;
                break e;
              case fn:
                i = 14;
                break e;
              case Te:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = Je(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function it(e, n, t, r) {
    return (e = Je(7, e, r, n)), (e.lanes = t), e;
  }
  function El(e, n, t, r) {
    return (
      (e = Je(22, e, r, n)),
      (e.elementType = ue),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, n, t) {
    return (e = Je(6, e, null, n)), (e.lanes = t), e;
  }
  function gi(e, n, t) {
    return (
      (n = Je(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function _f(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wi(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new _f(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = Je(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ou(u),
      e
    );
  }
  function xf(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function wa(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Oe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Oe(t)) return Yo(e, t, n);
    }
    return n;
  }
  function Sa(e, n, t, r, l, u, i, o, s) {
    return (
      (e = wi(t, r, !0, e, l, u, i, o, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = ze()),
      (l = $n(t)),
      (u = xn(r, l)),
      (u.callback = n ?? null),
      An(t, u, l),
      (e.current.lanes = l),
      Vt(e, l, r),
      Ie(e, r),
      e
    );
  }
  function _l(e, n, t, r) {
    var l = n.current,
      u = ze(),
      i = $n(l);
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = xn(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = An(l, n, i)),
      e !== null && (sn(e, l, i, u), el(e, l, i)),
      i
    );
  }
  function xl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ka(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Si(e, n) {
    ka(e, n), (e = e.alternate) && ka(e, n);
  }
  function Cf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ki(e) {
    this._internalRoot = e;
  }
  (Cl.prototype.render = ki.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      _l(e, n, null, null);
    }),
    (Cl.prototype.unmount = ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          rt(function () {
            _l(null, e, null, null);
          }),
            (n[wn] = null);
        }
      });
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = lo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
      Rn.splice(t, 0, e), t === 0 && oo(e);
    }
  };
  function Ei(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function _a() {}
  function Pf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = xl(i);
          u.call(p);
        };
      }
      var i = Sa(n, r, e, 0, null, !1, !1, "", _a);
      return (
        (e._reactRootContainer = i),
        (e[wn] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = xl(s);
        o.call(p);
      };
    }
    var s = wi(e, 0, !1, null, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rt(function () {
        _l(n, s, t, r);
      }),
      s
    );
  }
  function Nl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = xl(i);
          o.call(s);
        };
      }
      _l(n, i, e, l);
    } else i = Pf(t, n, e, l, r);
    return xl(i);
  }
  (to = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 &&
            (Kl(n, t | 1), Ie(n, oe()), !(U & 6) && ((Tt = oe() + 500), Fn()));
        }
        break;
      case 13:
        rt(function () {
          var r = _n(e, 1);
          if (r !== null) {
            var l = ze();
            sn(r, e, 1, l);
          }
        }),
          Si(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var n = _n(e, 134217728);
        if (n !== null) {
          var t = ze();
          sn(n, e, 134217728, t);
        }
        Si(e, 134217728);
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          t = _n(e, n);
        if (t !== null) {
          var r = ze();
          sn(t, e, n, r);
        }
        Si(e, n);
      }
    }),
    (lo = function () {
      return W;
    }),
    (uo = function (e, n) {
      var t = W;
      try {
        return (W = e), n();
      } finally {
        W = t;
      }
    }),
    (Al = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Rl(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = Wr(r);
                if (!l) throw Error(m(90));
                Li(r), Rl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Di(e, t);
          break;
        case "select":
          (n = t.value), n != null && ot(e, !!t.multiple, n, !1);
      }
    }),
    ($i = pi),
    (Wi = rt);
  var Nf = { usingClientEntryPoint: !1, Events: [rr, yt, Wr, Bi, Hi, pi] },
    yr = {
      findFiberByHostInstance: Xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    zf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Gi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Cf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (Cr = zl.inject(zf)), (dn = zl);
      } catch {}
  }
  return (
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf),
    (je.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ei(n)) throw Error(m(200));
      return xf(e, n, null, t);
    }),
    (je.createRoot = function (e, n) {
      if (!Ei(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = Ea;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = wi(e, 1, !1, null, null, t, !1, r, l)),
        (e[wn] = n.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new ki(n)
      );
    }),
    (je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Gi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (je.flushSync = function (e) {
      return rt(e);
    }),
    (je.hydrate = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !0, t);
    }),
    (je.hydrateRoot = function (e, n, t) {
      if (!Ei(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ea;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = Sa(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[wn] = n.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Cl(n);
    }),
    (je.render = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !1, t);
    }),
    (je.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rt(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (je.unstable_batchedUpdates = pi),
    (je.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Pl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Nl(e, n, t, !1, r);
    }),
    (je.version = "18.3.1-next-f1338f8080-20240426"),
    je
  );
}
var Ra;
function jf() {
  if (Ra) return Ci.exports;
  Ra = 1;
  function N() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (O) {
        console.error(O);
      }
  }
  return N(), (Ci.exports = If()), Ci.exports;
}
var Oa;
function Ff() {
  if (Oa) return Ll;
  Oa = 1;
  var N = jf();
  return (Ll.createRoot = N.createRoot), (Ll.hydrateRoot = N.hydrateRoot), Ll;
}
var Uf = Ff();
const Af = ({ onNewCategory: N }) => {
    const [O, m] = Ot.useState(""),
      H = ({ target: F }) => {
        m(F.value);
      },
      j = (F) => {
        F.preventDefault();
        const ne = O.trim().toUpperCase();
        ne.length <= 1 || (N(ne), m(""));
      };
    return ve.jsx("form", {
      onSubmit: j,
      children: ve.jsx("input", {
        type: "text",
        placeholder: "Buscar gifs",
        value: O,
        onChange: H,
      }),
    });
  },
  Vf = ({ title: N, url: O, id: m }) =>
    ve.jsxs("div", {
      className: "card",
      children: [
        ve.jsx("img", { src: O, alt: "{title}" }),
        ve.jsx("p", { children: N }),
      ],
    }),
  Bf = async (N) => {
    const O = `https://api.giphy.com/v1/gifs/search?api_key=UN15D1NnPP6nMRTNG7xTMnE89Ffpuob4&q=${N}&limit=10`,
      m = await fetch(O),
      { data: H } = await m.json();
    return H.map((F) => ({
      id: F.id,
      title: F.title,
      url: F.images.downsized_medium.url,
    }));
  },
  Hf = (N) => {
    const [O, m] = Ot.useState([]),
      [H, j] = Ot.useState(!0),
      F = async () => {
        const ne = await Bf(N);
        m(ne), j(!1);
      };
    return (
      Ot.useEffect(() => {
        F();
      }, []),
      { images: O, isLoading: H }
    );
  },
  $f = ({ category: N }) => {
    const { images: O, isLoading: m } = Hf(N);
    return ve.jsxs(ve.Fragment, {
      children: [
        ve.jsx("h3", { children: N }),
        m && ve.jsx("h2", { children: "Cargando..." }),
        ve.jsx("div", {
          className: "card-grid",
          children: O.map((H) => ve.jsx(Vf, { ...H }, H.id)),
        }),
      ],
    });
  },
  Wf = () => {
    const [N, O] = Ot.useState(["One Punch"]),
      m = (H) => {
        N.includes(H) || O([H, ...N]);
      };
    return ve.jsxs(ve.Fragment, {
      children: [
        ve.jsx("h1", { children: "GifExpertApp" }),
        ve.jsx(Af, { onNewCategory: m }),
        N.map((H) => ve.jsx($f, { category: H }, H)),
      ],
    });
  };
Uf.createRoot(document.getElementById("root")).render(
  ve.jsx(Ot.StrictMode, { children: ve.jsx(Wf, {}) })
);
