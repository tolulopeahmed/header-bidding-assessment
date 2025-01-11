/* prebid.js v9.26.0-pre
Updated: 2025-01-05
Modules: appnexusBidAdapter, rubiconBidAdapter */

if (window.pbjs && window.pbjs.libLoaded)
  try {
    window.pbjs.getConfig("debug") &&
      console.warn(
        "Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted."
      );
  } catch (e) {}
else
  (function () {
    (() => {
      var r,
        t = {
          433: (r, t, e) => {
            function n(r, t, e, n, o) {
              for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
                r = r ? r[t[n]] : o;
              return r === o ? e : r;
            }
            e.d(t, { A: () => n });
          },
          8128: (r) => {
            /*
             * @license MIT
             * Fun Hooks v0.9.10
             * (c) @snapwich
             */
            (f.SYNC = 1), (f.ASYNC = 2), (f.QUEUE = 4);
            var t = "fun-hooks";
            var e = Object.freeze({ useProxy: !0, ready: 0 }),
              n = new WeakMap(),
              o =
                "2,1,0" ===
                [1]
                  .reduce(function (r, t, e) {
                    return [r, t, e];
                  }, 2)
                  .toString()
                  ? Array.prototype.reduce
                  : function (r, t) {
                      var e,
                        n = Object(this),
                        o = n.length >>> 0,
                        i = 0;
                      if (t) e = t;
                      else {
                        for (; i < o && !(i in n); ) i++;
                        e = n[i++];
                      }
                      for (; i < o; ) i in n && (e = r(e, n[i], i, n)), i++;
                      return e;
                    };
            function i(r, t) {
              return Array.prototype.slice.call(r, t);
            }
            var u =
              Object.assign ||
              function (r) {
                return o.call(
                  i(arguments, 1),
                  function (r, t) {
                    return (
                      t &&
                        Object.keys(t).forEach(function (e) {
                          r[e] = t[e];
                        }),
                      r
                    );
                  },
                  r
                );
              };
            function f(r) {
              var c,
                a = {},
                l = [];
              function p(r, t) {
                return "function" == typeof r
                  ? h.call(null, "sync", r, t)
                  : "string" == typeof r && "function" == typeof t
                  ? h.apply(null, arguments)
                  : "object" == typeof r
                  ? y.apply(null, arguments)
                  : void 0;
              }
              function y(r, t, e) {
                var n = !0;
                void 0 === t && ((t = Object.getOwnPropertyNames(r)), (n = !1));
                var o = {},
                  i = ["constructor"];
                do {
                  (t = t.filter(function (t) {
                    return !(
                      "function" != typeof r[t] ||
                      -1 !== i.indexOf(t) ||
                      t.match(/^_/)
                    );
                  })).forEach(function (t) {
                    var n = t.split(":"),
                      i = n[0],
                      u = n[1] || "sync";
                    if (!o[i]) {
                      var f = r[i];
                      o[i] = r[i] = h(u, f, e ? [e, i] : void 0);
                    }
                  }),
                    (r = Object.getPrototypeOf(r));
                } while (n && r);
                return o;
              }
              function s(r) {
                var e = Array.isArray(r) ? r : r.split(".");
                return o.call(
                  e,
                  function (n, o, i) {
                    var u = n[o],
                      f = !1;
                    return (
                      u ||
                      (i === e.length - 1
                        ? (c ||
                            l.push(function () {
                              f ||
                                console.warn(
                                  t +
                                    ": referenced '" +
                                    r +
                                    "' but it was never created"
                                );
                            }),
                          (n[o] = v(function (r) {
                            (n[o] = r), (f = !0);
                          })))
                        : (n[o] = {}))
                    );
                  },
                  a
                );
              }
              function v(r) {
                var t = [],
                  e = [],
                  o = function () {},
                  i = {
                    before: function (r, e) {
                      return c.call(this, t, "before", r, e);
                    },
                    after: function (r, t) {
                      return c.call(this, e, "after", r, t);
                    },
                    getHooks: function (r) {
                      var n = t.concat(e);
                      "object" == typeof r &&
                        (n = n.filter(function (t) {
                          return Object.keys(r).every(function (e) {
                            return t[e] === r[e];
                          });
                        }));
                      try {
                        u(n, {
                          remove: function () {
                            return (
                              n.forEach(function (r) {
                                r.remove();
                              }),
                              this
                            );
                          },
                        });
                      } catch (r) {
                        console.error(
                          "error adding `remove` to array, did you modify Array.prototype?"
                        );
                      }
                      return n;
                    },
                    removeAll: function () {
                      return this.getHooks().remove();
                    },
                  },
                  f = {
                    install: function (n, i, u) {
                      (this.type = n), (o = u), u(t, e), r && r(i);
                    },
                  };
                return n.set(i.after, f), i;
                function c(r, n, i, u) {
                  var f = {
                    hook: i,
                    type: n,
                    priority: u || 10,
                    remove: function () {
                      var n = r.indexOf(f);
                      -1 !== n && (r.splice(n, 1), o(t, e));
                    },
                  };
                  return (
                    r.push(f),
                    r.sort(function (r, t) {
                      return t.priority - r.priority;
                    }),
                    o(t, e),
                    this
                  );
                }
              }
              function h(e, o, a) {
                var p = o.after && n.get(o.after);
                if (p) {
                  if (p.type !== e)
                    throw t + ": recreated hookable with different type";
                  return o;
                }
                var y,
                  h,
                  b = a ? s(a) : v(),
                  d = {
                    get: function (r, t) {
                      return b[t] || Reflect.get.apply(Reflect, arguments);
                    },
                  };
                return (
                  c || l.push(g),
                  r.useProxy && "function" == typeof Proxy && Proxy.revocable
                    ? (h = new Proxy(o, d))
                    : ((h = function () {
                        return d.apply
                          ? d.apply(o, this, i(arguments))
                          : o.apply(this, arguments);
                      }),
                      u(h, b)),
                  n.get(h.after).install(e, h, function (r, t) {
                    var n,
                      o = [];
                    r.length || t.length
                      ? (r.forEach(u),
                        (n = o.push(void 0) - 1),
                        t.forEach(u),
                        (y = function (r, t, u) {
                          var f,
                            c = 0,
                            a =
                              "async" === e &&
                              "function" == typeof u[u.length - 1] &&
                              u.pop();
                          function l(r) {
                            "sync" === e
                              ? (f = r)
                              : a && a.apply(null, arguments);
                          }
                          function p(r) {
                            if (o[c]) {
                              var n = i(arguments);
                              return (
                                (p.bail = l), n.unshift(p), o[c++].apply(t, n)
                              );
                            }
                            "sync" === e
                              ? (f = r)
                              : a && a.apply(null, arguments);
                          }
                          return (
                            (o[n] = function () {
                              var n = i(arguments, 1);
                              "async" === e && a && (delete p.bail, n.push(p));
                              var o = r.apply(t, n);
                              "sync" === e && p(o);
                            }),
                            p.apply(null, u),
                            f
                          );
                        }))
                      : (y = void 0);
                    function u(r) {
                      o.push(r.hook);
                    }
                    g();
                  }),
                  h
                );
                function g() {
                  !c &&
                  ("sync" !== e || r.ready & f.SYNC) &&
                  ("async" !== e || r.ready & f.ASYNC)
                    ? "sync" !== e && r.ready & f.QUEUE
                      ? (d.apply = function () {
                          var r = arguments;
                          l.push(function () {
                            h.apply(r[1], r[2]);
                          });
                        })
                      : (d.apply = function () {
                          throw t + ": hooked function not ready";
                        })
                    : (d.apply = y);
                }
              }
              return (
                (r = u({}, e, r)).ready
                  ? (p.ready = function () {
                      (c = !0),
                        (function (r) {
                          for (var t; (t = r.shift()); ) t();
                        })(l);
                    })
                  : (c = !0),
                (p.get = s),
                p
              );
            }
            r.exports = f;
          },
          4705: (r, t, e) => {
            function n(r) {
              return (
                (n =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (r) {
                        return typeof r;
                      }
                    : function (r) {
                        return r &&
                          "function" == typeof Symbol &&
                          r.constructor === Symbol &&
                          r !== Symbol.prototype
                          ? "symbol"
                          : typeof r;
                      }),
                n(r)
              );
            }
            function o(r) {
              var t = (function (r, t) {
                if ("object" != n(r) || !r) return r;
                var e = r[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var o = e.call(r, t || "default");
                  if ("object" != n(o)) return o;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(r);
              })(r, "string");
              return "symbol" == n(t) ? t : t + "";
            }
            function i(r, t, e) {
              return (
                (t = o(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: e,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = e),
                r
              );
            }
            e.d(t, { A: () => i });
          },
          3172: (r, t, e) => {
            function n(r, t, e) {
              t.split && (t = t.split("."));
              for (
                var n, o, i = 0, u = t.length, f = r;
                i < u &&
                "__proto__" != (o = "" + t[i++]) &&
                "constructor" !== o &&
                "prototype" !== o;

              )
                f = f[o] =
                  i === u
                    ? e
                    : typeof (n = f[o]) == typeof t
                    ? n
                    : 0 * t[i] != 0 || ~("" + t[i]).indexOf(".")
                    ? {}
                    : [];
            }
            e.d(t, { J: () => n });
          },
          5751: (r, t, e) => {
            function n(r) {
              var t, e, o;
              if (Array.isArray(r)) {
                for (e = Array((t = r.length)); t--; )
                  e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                return e;
              }
              if ("[object Object]" === Object.prototype.toString.call(r)) {
                for (t in ((e = {}), r))
                  "__proto__" === t
                    ? Object.defineProperty(e, t, {
                        value: n(r[t]),
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                      })
                    : (e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o);
                return e;
              }
              return r;
            }
            e.d(t, { Q: () => n });
          },
        },
        e = {};
      function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = (e[r] = { exports: {} });
        return t[r](i, i.exports, n), i.exports;
      }
      (n.m = t),
        (r = []),
        (n.O = (t, e, o, i) => {
          if (!e) {
            var u = 1 / 0;
            for (l = 0; l < r.length; l++) {
              (e = r[l][0]), (o = r[l][1]), (i = r[l][2]);
              for (var f = !0, c = 0; c < e.length; c++)
                (!1 & i || u >= i) &&
                Object.keys(n.O).every((r) => n.O[r](e[c]))
                  ? e.splice(c--, 1)
                  : ((f = !1), i < u && (u = i));
              if (f) {
                r.splice(l--, 1);
                var a = o();
                void 0 !== a && (t = a);
              }
            }
            return t;
          }
          i = i || 0;
          for (var l = r.length; l > 0 && r[l - 1][2] > i; l--) r[l] = r[l - 1];
          r[l] = [e, o, i];
        }),
        (n.n = (r) => {
          var t = r && r.__esModule ? () => r.default : () => r;
          return n.d(t, { a: t }), t;
        }),
        (n.d = (r, t) => {
          for (var e in t)
            n.o(t, e) &&
              !n.o(r, e) &&
              Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
        }),
        (n.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
        (() => {
          var r = { 673: 0 };
          n.O.j = (t) => 0 === r[t];
          var t = (t, e) => {
              var o,
                i,
                u = e[0],
                f = e[1],
                c = e[2],
                a = 0;
              if (u.some((t) => 0 !== r[t])) {
                for (o in f) n.o(f, o) && (n.m[o] = f[o]);
                if (c) var l = c(n);
              }
              for (t && t(e); a < u.length; a++)
                (i = u[a]), n.o(r, i) && r[i] && r[i][0](), (r[i] = 0);
              return n.O(l);
            },
            e = (self.pbjsChunk = self.pbjsChunk || []);
          e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)));
        })();
      var o = n.O(void 0, [802, 85], () => n(5952));
      o = n.O(o);
    })();
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [802],
      {
        5789: (e, t, n) => {
          n.d(t, { A4: () => l, J7: () => u, Pg: () => f });
          var i = n(1580),
            r = n(1069),
            o = n(5901),
            s = n(7873),
            a = n(5569);
          const c = (0, s.m)(),
            d = "outstream";
          function l(e) {
            const {
              url: t,
              config: n,
              id: s,
              callback: l,
              loaded: u,
              adUnitCode: f,
              renderNow: g,
            } = e;
            (this.url = t),
              (this.config = n),
              (this.handlers = {}),
              (this.id = s),
              (this.renderNow = g),
              (this.loaded = u),
              (this.cmd = []),
              (this.push = (e) => {
                "function" == typeof e
                  ? this.loaded
                    ? e.call()
                    : this.cmd.push(e)
                  : (0, r.vV)(
                      "Commands given to Renderer.push must be wrapped in a function"
                    );
              }),
              (this.callback =
                l ||
                (() => {
                  (this.loaded = !0), this.process();
                })),
              (this.render = function () {
                const e = arguments,
                  n = () => {
                    this._render
                      ? this._render.apply(this, e)
                      : (0, r.JE)(
                          "No render function was provided, please use .setRender on the renderer"
                        );
                  };
                !(function (e) {
                  var t;
                  const n = c.adUnits,
                    i = (0, o.I6)(n, (t) => t.code === e);
                  if (!i) return !1;
                  const r = null == i ? void 0 : i.renderer,
                    s = !!(r && r.url && r.render),
                    a =
                      null == i ||
                      null === (t = i.mediaTypes) ||
                      void 0 === t ||
                      null === (t = t.video) ||
                      void 0 === t
                        ? void 0
                        : t.renderer,
                    d = !!(a && a.url && a.render);
                  return !!(
                    (s && !0 !== r.backupOnly) ||
                    (d && !0 !== a.backupOnly)
                  );
                })(f)
                  ? g
                    ? n()
                    : (this.cmd.unshift(n),
                      (0, i.R)(t, a.tp, d, this.callback, this.documentContext))
                  : ((0, r.JE)(
                      "External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
                        f
                      )
                    ),
                    n());
              }.bind(this));
          }
          function u(e) {
            return !(!e || (!e.url && !e.renderNow));
          }
          function f(e, t, n) {
            let i = null;
            e.config &&
              e.config.documentResolver &&
              (i = e.config.documentResolver(t, document, n)),
              i || (i = document),
              (e.documentContext = i),
              e.render(t, e.documentContext);
          }
          (l.install = function (e) {
            let {
              url: t,
              config: n,
              id: i,
              callback: r,
              loaded: o,
              adUnitCode: s,
              renderNow: a,
            } = e;
            return new l({
              url: t,
              config: n,
              id: i,
              callback: r,
              loaded: o,
              adUnitCode: s,
              renderNow: a,
            });
          }),
            (l.prototype.getConfig = function () {
              return this.config;
            }),
            (l.prototype.setRender = function (e) {
              this._render = e;
            }),
            (l.prototype.setEventHandlers = function (e) {
              this.handlers = e;
            }),
            (l.prototype.handleVideoEvent = function (e) {
              let { id: t, eventName: n } = e;
              "function" == typeof this.handlers[n] && this.handlers[n](),
                (0, r.OG)(
                  "Prebid Renderer event for id ".concat(t, " type ").concat(n)
                );
            }),
            (l.prototype.process = function () {
              for (; this.cmd.length > 0; )
                try {
                  this.cmd.shift().call();
                } catch (e) {
                  (0, r.vV)("Error processing Renderer command: ", e);
                }
            });
        },
        6811: (e, t, n) => {
          n.d(t, {
            DL: () => c,
            Ml: () => r,
            Ue: () => i,
            VJ: () => l,
            hE: () => d,
            hq: () => a,
            mo: () => s,
            pY: () => u,
            uc: () => o,
          });
          const i = "accessDevice",
            r = "syncUser",
            o = "fetchBids",
            s = "reportAnalytics",
            a = "transmitEids",
            c = "transmitUfpd",
            d = "transmitPreciseGeo",
            l = "transmitTid",
            u = "loadExternalScript";
        },
        3441: (e, t, n) => {
          n.d(t, { s: () => r });
          var i = n(8046);
          const r = (0, n(2604).ZI)((e) => i.Ay.resolveAlias(e));
        },
        5569: (e, t, n) => {
          n.d(t, { Tn: () => o, tW: () => r, tp: () => i });
          const i = "prebid",
            r = "bidder",
            o = "analytics";
        },
        2604: (e, t, n) => {
          n.d(t, {
            Dk: () => s,
            Ii: () => o,
            TQ: () => g,
            XG: () => l,
            ZI: () => p,
            Zw: () => d,
            bt: () => u,
            e3: () => f,
            iK: () => a,
            q7: () => c,
          });
          var i = n(5569),
            r = n(9214);
          const o = "component",
            s = o + "Type",
            a = o + "Name",
            c = "adapterCode",
            d = "storageType",
            l = "configName",
            u = "syncType",
            f = "syncUrl",
            g = "_config";
          function p(e) {
            return function (t, n, r) {
              const d = { [s]: t, [a]: n, [o]: "".concat(t, ".").concat(n) };
              return t === i.tW && (d[c] = e(n)), h(Object.assign(d, r));
            };
          }
          const h = (0, r.A_)("sync", (e) => e);
        },
        5139: (e, t, n) => {
          n.d(t, { io: () => s, qB: () => o });
          var i = n(1069),
            r = n(2604);
          const [o, s] = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (0, i.h0)("Activity control:");
            const t = {};
            function n(e) {
              return (t[e] = t[e] || []);
            }
            function o(t, n, i, o) {
              let s;
              try {
                s = i(o);
              } catch (i) {
                e.logError(
                  "Exception in rule ".concat(n, " for '").concat(t, "'"),
                  i
                ),
                  (s = { allow: !1, reason: i });
              }
              return (
                s &&
                Object.assign({ activity: t, name: n, component: o[r.Ii] }, s)
              );
            }
            const s = {};
            function a(t) {
              let {
                activity: n,
                name: i,
                allow: r,
                reason: o,
                component: a,
              } = t;
              const c = ""
                  .concat(i, " ")
                  .concat(r ? "allowed" : "denied", " '")
                  .concat(n, "' for '")
                  .concat(a, "'")
                  .concat(o ? ":" : ""),
                d = s.hasOwnProperty(c);
              if (
                (d && clearTimeout(s[c]),
                (s[c] = setTimeout(() => delete s[c], 1e3)),
                !d)
              ) {
                const t = [c];
                o && t.push(o), (r ? e.logInfo : e.logWarn).apply(e, t);
              }
            }
            return [
              function (e, t, i) {
                let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 10;
                const o = n(e),
                  s = o.findIndex((e) => {
                    let [t] = e;
                    return r < t;
                  }),
                  a = [r, t, i];
                return (
                  o.splice(s < 0 ? o.length : s, 0, a),
                  function () {
                    const e = o.indexOf(a);
                    e >= 0 && o.splice(e, 1);
                  }
                );
              },
              function (e, t) {
                let i, r;
                for (const [s, c, d] of n(e)) {
                  if (i !== s && r) break;
                  i = s;
                  const n = o(e, c, d, t);
                  if (n) {
                    if (!n.allow) return a(n), !1;
                    r = n;
                  }
                }
                return r && a(r), !0;
              },
            ];
          })();
        },
        9075: (e, t, n) => {
          n.d(t, {
            $A: () => I,
            BS: () => W,
            Hh: () => x,
            Pk: () => N,
            Uc: () => B,
            XO: () => V,
            bw: () => D,
            n6: () => T,
            qn: () => U,
            vB: () => P,
            vW: () => k,
            vd: () => R,
          });
          var i = n(1069),
            r = n(5023),
            o = n(8969),
            s = n(3272),
            a = n(5789),
            c = n(1371),
            d = n(6881),
            l = n(6031),
            u = n(9214),
            f = n(2449),
            g = n(5555),
            p = n(8046),
            h = n(6894),
            m = n(7779);
          const {
              AD_RENDER_FAILED: b,
              AD_RENDER_SUCCEEDED: v,
              STALE_RENDER: y,
              BID_WON: E,
              EXPIRED_RENDER: A,
            } = o.qY,
            { EXCEPTION: w } = o.as,
            I = (0, u.A_)("sync", function (e) {
              return (
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : g.k.resolve()
              )
                .then((t) => (null != t ? t : d.n.findBidByAdId(e)))
                .catch(() => {});
            }),
            T = (0, u.A_)("sync", function (e) {
              r.Ic(E, e), d.n.addWinningBid(e);
            });
          function O(e) {
            let { reason: t, message: n, bid: o, id: s } = e;
            const a = { reason: t, message: n };
            o && ((a.bid = o), (a.adId = o.adId)),
              s && (a.adId = s),
              (0, i.vV)("Error rendering ad (id: ".concat(s, "): ").concat(n)),
              r.Ic(b, a);
          }
          function C(e) {
            let { doc: t, bid: n, id: i } = e;
            const o = { doc: t };
            n && (o.bid = n),
              i && (o.adId = i),
              p.Ay.callAdRenderSucceededBidder(n.adapterCode || n.bidder, n),
              r.Ic(v, o);
          }
          function B(e, t) {
            switch (e.event) {
              case o.qY.AD_RENDER_FAILED:
                O({
                  bid: t,
                  id: t.adId,
                  reason: e.info.reason,
                  message: e.info.message,
                });
                break;
              case o.qY.AD_RENDER_SUCCEEDED:
                C({ doc: null, bid: t, id: t.adId });
                break;
              default:
                (0, i.vV)(
                  "Received event request for unsupported event: '"
                    .concat(e.event, "' (adId: '")
                    .concat(t.adId, "')")
                );
            }
          }
          function k(e, t, n) {
            let { resizeFn: i, fireTrackers: r = f.vO } = n;
            if ("resizeNativeHeight" === e.action) i(e.width, e.height);
            else r(e, t);
          }
          const S = { [o.nl.EVENT]: B };
          S[o.nl.NATIVE] = k;
          const R = (0, u.A_)("sync", function (e, t) {
              const {
                  ad: n,
                  adUrl: r,
                  cpm: o,
                  originalCpm: s,
                  width: a,
                  height: c,
                } = e,
                d = {
                  AUCTION_PRICE: s || o,
                  CLICKTHROUGH: (null == t ? void 0 : t.clickUrl) || "",
                };
              return {
                ad: (0, i.gM)(n, d),
                adUrl: (0, i.gM)(r, d),
                width: a,
                height: c,
              };
            }),
            j = (0, u.A_)("sync", function (e) {
              let {
                renderFn: t,
                resizeFn: n,
                bidResponse: r,
                options: s,
                doc: a,
                isMainDocument: d = a === document && !(0, i.al)(),
              } = e;
              const l = r.mediaType === c.G_;
              if (d || l)
                return void O({
                  reason: o.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                  message: l
                    ? "Cannot render video ad without a renderer"
                    : "renderAd was prevented from writing to the main document.",
                  bid: r,
                  id: r.adId,
                });
              const u = R(r, s);
              t(Object.assign({ adId: r.adId }, u));
              const { width: f, height: g } = u;
              null != (null != f ? f : g) && n(f, g);
            });
          function D(e) {
            let {
              renderFn: t,
              resizeFn: n,
              adId: a,
              options: c,
              bidResponse: d,
              doc: l,
            } = e;
            x(d, () => {
              if (null != d) {
                var e, u;
                if (d.status === o.tl.RENDERED)
                  if (
                    ((0, i.JE)("Ad id ".concat(a, " has been rendered before")),
                    r.Ic(y, d),
                    null !== (e = s.$W.getConfig("auctionOptions")) &&
                      void 0 !== e &&
                      e.suppressStaleRender)
                  )
                    return;
                if (!m.uW.isBidNotExpired(d))
                  if (
                    ((0, i.JE)("Ad id ".concat(a, " has been expired")),
                    r.Ic(A, d),
                    null !== (u = s.$W.getConfig("auctionOptions")) &&
                      void 0 !== u &&
                      u.suppressExpiredRender)
                  )
                    return;
                try {
                  j({
                    renderFn: t,
                    resizeFn: n,
                    bidResponse: d,
                    options: c,
                    doc: l,
                  });
                } catch (e) {
                  O({
                    reason: o.as.EXCEPTION,
                    message: e.message,
                    id: a,
                    bid: d,
                  });
                }
              } else
                O({
                  reason: o.as.CANNOT_FIND_AD,
                  message: "Cannot find ad '".concat(a, "'"),
                  id: a,
                });
            });
          }
          function U(e) {
            const t = (0, h.BO)(e.metrics);
            t.checkpoint("bidRender"),
              t.timeBetween("bidWon", "bidRender", "render.deferred"),
              t.timeBetween("auctionEnd", "bidRender", "render.pending"),
              t.timeBetween("requestBids", "bidRender", "render.e2e"),
              (e.status = o.tl.RENDERED);
          }
          j.before(function (e, t) {
            const { bidResponse: n, doc: i } = t;
            (0, a.J7)(n.renderer)
              ? ((0, a.Pg)(n.renderer, n, i),
                C({ doc: i, bid: n, id: n.adId }),
                e.bail())
              : e(t);
          }, 100);
          const _ = new WeakMap(),
            q = new WeakSet();
          function x(e, t) {
            null != e ? (_.set(e, t), e.deferRendering || P(e), N(e)) : t();
          }
          function N(e) {
            q.has(e) || (q.add(e), T(e));
          }
          function P(e) {
            const t = _.get(e);
            t && (t(), U(e), _.delete(e));
          }
          function W(e, t, n) {
            let r;
            function s(e, n) {
              O(Object.assign({ id: t, bid: r }, { reason: e, message: n }));
            }
            function a(t, n) {
              e.defaultView &&
                e.defaultView.frameElement &&
                (t && (e.defaultView.frameElement.width = t),
                n && (e.defaultView.frameElement.height = n));
            }
            const c =
              ((d = { resizeFn: a }),
              function (e, t, n) {
                S.hasOwnProperty(e) && S[e](t, n, d);
              });
            var d;
            function u(t) {
              t.ad
                ? (e.write(t.ad), e.close(), C({ doc: e, bid: r, id: r.adId }))
                : (0, l.H)(r)
                    .then((n) =>
                      n(
                        t,
                        { sendMessage: (e, t) => c(e, t, r), mkFrame: i.hw },
                        e.defaultView
                      )
                    )
                    .then(
                      () => C({ doc: e, bid: r, id: r.adId }),
                      (e) => {
                        s(
                          (null == e ? void 0 : e.reason) || o.as.EXCEPTION,
                          null == e ? void 0 : e.message
                        ),
                          (null == e ? void 0 : e.stack) && (0, i.vV)(e);
                      }
                    );
              const n = document.createComment(
                "Creative "
                  .concat(r.creativeId, " served by ")
                  .concat(r.bidder, " Prebid.js Header Bidding")
              );
              (0, i._s)(n, e, "html");
            }
            try {
              t && e
                ? I(t).then((i) => {
                    (r = i),
                      D({
                        renderFn: u,
                        resizeFn: a,
                        adId: t,
                        options: {
                          clickUrl: null == n ? void 0 : n.clickThrough,
                        },
                        bidResponse: i,
                        doc: e,
                      });
                  })
                : s(
                    o.as.MISSING_DOC_OR_ADID,
                    "missing ".concat(t ? "doc" : "adId")
                  );
            } catch (e) {
              s(w, e.message);
            }
          }
          function V() {
            if (!window.frames[o.IY])
              if (document.body) {
                const e = (0, i.CA)();
                (e.name = o.IY), document.body.appendChild(e);
              } else window.requestAnimationFrame(V);
          }
        },
        8046: (e, t, n) => {
          n.d(t, { Ay: () => re, pX: () => Z });
          var i = n(4705),
            r = n(1069),
            o = n(2449),
            s = n(9115),
            a = n(8044),
            c = n(3272),
            d = n(9214),
            l = n(5901);
          let u = {};
          function f(e, t, n) {
            let i = (function (e, t) {
              let n = (u[e] = u[e] || { bidders: {} });
              return t ? (n.bidders[t] = n.bidders[t] || {}) : n;
            })(e, n);
            return (i[t] = (i[t] || 0) + 1), i[t];
          }
          function g(e) {
            return f(e, "auctionsCounter");
          }
          function p(e) {
            var t;
            return (
              (null === (t = u) ||
              void 0 === t ||
              null === (t = t[e]) ||
              void 0 === t
                ? void 0
                : t.requestsCounter) || 0
            );
          }
          function h(e, t) {
            var n;
            return (
              (null === (n = u) ||
              void 0 === n ||
              null === (n = n[e]) ||
              void 0 === n ||
              null === (n = n.bidders) ||
              void 0 === n ||
              null === (n = n[t]) ||
              void 0 === n
                ? void 0
                : n.requestsCounter) || 0
            );
          }
          function m(e, t) {
            var n;
            return (
              (null === (n = u) ||
              void 0 === n ||
              null === (n = n[e]) ||
              void 0 === n ||
              null === (n = n.bidders) ||
              void 0 === n ||
              null === (n = n[t]) ||
              void 0 === n
                ? void 0
                : n.winsCounter) || 0
            );
          }
          function b(e) {
            var t;
            return (
              (null === (t = u) ||
              void 0 === t ||
              null === (t = t[e]) ||
              void 0 === t
                ? void 0
                : t.auctionsCounter) || 0
            );
          }
          var v = n(7934),
            y = n(6916),
            E = n(5023),
            A = n(8969),
            w = n(6894),
            I = n(6881),
            T = n(5569),
            O = n(5139),
            C = n(6811),
            B = n(2604),
            k = n(433);
          const S = [
              "data",
              "ext.data",
              "yob",
              "gender",
              "keywords",
              "kwarray",
              "id",
              "buyeruid",
              "customdata",
            ]
              .map((e) => "user.".concat(e))
              .concat("device.ext.cdep"),
            R = ["user.eids", "user.ext.eids"],
            j = [
              "user.geo.lat",
              "user.geo.lon",
              "device.geo.lat",
              "device.geo.lon",
            ],
            D = ["device.ip"],
            U = ["device.ipv6"];
          function _(e) {
            return Object.assign(
              {
                get() {},
                run(e, t, n, i, r) {
                  const o = n && n[i];
                  if (
                    (function (e) {
                      return (
                        null != e &&
                        ("object" != typeof e || Object.keys(e).length > 0)
                      );
                    })(o) &&
                    r()
                  ) {
                    const e = this.get(o);
                    void 0 === e ? delete n[i] : (n[i] = e);
                  }
                },
              },
              e
            );
          }
          function q(e) {
            return (
              e.forEach((e) => {
                e.paths = e.paths.map((e) => {
                  const t = e.split("."),
                    n = t.pop();
                  return [t.length > 0 ? t.join(".") : null, n];
                });
              }),
              function (t, n) {
                const i = [];
                for (
                  var r = arguments.length,
                    o = new Array(r > 2 ? r - 2 : 0),
                    s = 2;
                  s < r;
                  s++
                )
                  o[s - 2] = arguments[s];
                const a = (function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  return function (t) {
                    return (
                      e.hasOwnProperty(t.name) ||
                        (e[t.name] = !!t.applies(...n)),
                      e[t.name]
                    );
                  };
                })(t, ...o);
                return (
                  e.forEach((e) => {
                    if (!1 !== t[e.name])
                      for (const [r, o] of e.paths) {
                        const s = null == r ? n : (0, k.A)(n, r);
                        if (
                          (i.push(e.run(n, r, s, o, a.bind(null, e))),
                          !1 === t[e.name])
                        )
                          return;
                      }
                  }),
                  i.filter((e) => null != e)
                );
              }
            );
          }
          function x(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : O.io;
            return function (n) {
              return !t(e, n);
            };
          }
          function N() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O.io;
            return [
              { name: C.DL, paths: S, applies: x(C.DL, e) },
              { name: C.hq, paths: R, applies: x(C.hq, e) },
              {
                name: C.hE,
                paths: j,
                applies: x(C.hE, e),
                get: (e) => Math.round(100 * (e + Number.EPSILON)) / 100,
              },
              {
                name: C.hE,
                paths: D,
                applies: x(C.hE, e),
                get: (e) =>
                  (function (e) {
                    if (!e) return null;
                    let t = e.split(".").map(Number);
                    if (4 != t.length) return null;
                    let n = [];
                    for (let e = 0; e < 4; e++) {
                      let t = Math.max(0, Math.min(8, 24 - 8 * e));
                      n.push((255 << (8 - t)) & 255);
                    }
                    return t.map((e, t) => e & n[t]).join(".");
                  })(e),
              },
              {
                name: C.hE,
                paths: U,
                applies: x(C.hE, e),
                get: (e) =>
                  (function (e) {
                    if (!e) return null;
                    let t = e.split(":").map((e) => parseInt(e, 16));
                    for (t = t.map((e) => (isNaN(e) ? 0 : e)); t.length < 8; )
                      t.push(0);
                    if (8 != t.length) return null;
                    let n = [];
                    for (let e = 0; e < 8; e++) {
                      let t = Math.max(0, Math.min(16, 64 - 16 * e));
                      n.push((65535 << (16 - t)) & 65535);
                    }
                    return t
                      .map((e, t) => e & n[t])
                      .map((e) => e.toString(16))
                      .join(":");
                  })(e),
              },
              { name: C.VJ, paths: ["source.tid"], applies: x(C.VJ, e) },
            ].map(_);
          }
          const P = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O.io;
            const t = q(N(e)),
              n = q(
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : O.io;
                  return [
                    {
                      name: C.hq,
                      paths: ["userId", "userIdAsEids"],
                      applies: x(C.hq, e),
                    },
                    {
                      name: C.VJ,
                      paths: ["ortb2Imp.ext.tid"],
                      applies: x(C.VJ, e),
                    },
                  ].map(_);
                })(e)
              );
            return function (e) {
              const i = {};
              return {
                ortb2: (n) => (t(i, n, e), n),
                bidRequest: (t) => (n(i, t, e), t),
              };
            };
          })();
          function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          function V(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? W(Object(n), !0).forEach(function (t) {
                    (0, i.A)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : W(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          (0, O.qB)(C.VJ, "enableTIDs config", () => {
            if (!c.$W.getConfig("enableTIDs"))
              return { allow: !1, reason: "TIDs are disabled" };
          });
          const M = "pbsBidAdapter",
            G = { CLIENT: "client", SERVER: "server" },
            F = { isAllowed: O.io, redact: P };
          let H = {},
            $ = (H.bidderRegistry = {}),
            L = (H.aliasRegistry = {}),
            z = [];
          c.$W.getConfig("s2sConfig", (e) => {
            e &&
              e.s2sConfig &&
              (z = (0, r.cy)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          });
          var J = {};
          const K = (0, B.ZI)((e) => H.resolveAlias(e));
          const Q = (0, d.A_)(
            "sync",
            function (e) {
              let {
                bidderCode: t,
                auctionId: n,
                bidderRequestId: i,
                adUnits: o,
                src: s,
                metrics: a,
              } = e;
              return o
                .reduce((e, o) => {
                  const c = o.bids.filter((e) => e.bidder === t);
                  return (
                    null == t &&
                      0 === c.length &&
                      null != o.s2sBid &&
                      c.push({ bidder: null }),
                    e.push(
                      c.reduce((e, c) => {
                        var d, l;
                        const u =
                          null ==
                          (c = Object.assign(
                            {},
                            c,
                            { ortb2Imp: (0, r.D9)({}, o.ortb2Imp, c.ortb2Imp) },
                            (0, r.SH)(o, [
                              "nativeParams",
                              "nativeOrtbRequest",
                              "mediaType",
                              "renderer",
                            ])
                          )).mediaTypes
                            ? o.mediaTypes
                            : c.mediaTypes;
                        return (
                          (0, r.wD)(u)
                            ? (c = Object.assign({}, c, { mediaTypes: u }))
                            : (0, r.vV)(
                                "mediaTypes is not correctly configured for adunit ".concat(
                                  o.code
                                )
                              ),
                          "client" === s &&
                            (function (e, t) {
                              f(e, "requestsCounter", t);
                            })(o.code, t),
                          e.push(
                            Object.assign({}, c, {
                              adUnitCode: o.code,
                              transactionId: o.transactionId,
                              adUnitId: o.adUnitId,
                              sizes:
                                (null == u ||
                                null === (d = u.banner) ||
                                void 0 === d
                                  ? void 0
                                  : d.sizes) ||
                                (null == u ||
                                null === (l = u.video) ||
                                void 0 === l
                                  ? void 0
                                  : l.playerSize) ||
                                [],
                              bidId: c.bid_id || (0, r.s0)(),
                              bidderRequestId: i,
                              auctionId: n,
                              src: s,
                              metrics: a,
                              auctionsCount: b(o.code),
                              bidRequestsCount: p(o.code),
                              bidderRequestsCount: h(o.code, c.bidder),
                              bidderWinsCount: m(o.code, c.bidder),
                              deferBilling: !!o.deferBilling,
                            })
                          ),
                          e
                        );
                      }, [])
                    ),
                    e
                  );
                }, [])
                .reduce(r.Bq, [])
                .filter((e) => "" !== e);
            },
            "getBids"
          );
          const Y = (0, d.A_)(
            "sync",
            function (e, t) {
              let { getS2SBidders: n = Z } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (null == t) return e;
              {
                const i = n(t);
                return e.filter((e) => i.has(e.bidder));
              }
            },
            "filterBidsForAdUnit"
          );
          const X = (0, d.A_)("sync", (e, t) => e, "setupAdUnitMediaTypes");
          function Z(e) {
            (0, r.cy)(e) || (e = [e]);
            const t = new Set([null]);
            return (
              e
                .filter((e) => e && e.enabled)
                .flatMap((e) => e.bidders)
                .forEach((e) => t.add(e)),
              t
            );
          }
          const ee = (0, d.A_)(
            "sync",
            function (e, t) {
              let { getS2SBidders: n = Z } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              const i = n(t);
              return (0, r.ZA)(e).reduce(
                (e, t) => (e[i.has(t) ? G.SERVER : G.CLIENT].push(t), e),
                { [G.CLIENT]: [], [G.SERVER]: [] }
              );
            },
            "partitionBidders"
          );
          function te(e, t) {
            const n = $[e],
              i = (null == n ? void 0 : n.getSpec) && n.getSpec();
            if (i && i[t] && "function" == typeof i[t]) return [i, i[t]];
          }
          function ne(e, t, n, i) {
            try {
              (0, r.fH)("Invoking ".concat(e, ".").concat(t));
              for (
                var o = arguments.length,
                  s = new Array(o > 4 ? o - 4 : 0),
                  a = 4;
                a < o;
                a++
              )
                s[a - 4] = arguments[a];
              c.$W.runWithBidder(e, i.bind(n, ...s));
            } catch (n) {
              (0, r.JE)("Error calling ".concat(t, " of ").concat(e));
            }
          }
          function ie(e, t, n) {
            if ((null == n ? void 0 : n.source) !== A.RW.SRC) {
              const i = te(e, t);
              null != i && ne(e, t, ...i, n);
            }
          }
          (H.makeBidRequests = (0, d.A_)(
            "sync",
            function (e, t, n, i, s) {
              let a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {},
                d = arguments.length > 6 ? arguments[6] : void 0;
              (d = (0, w.BO)(d)),
                E.Ic(A.qY.BEFORE_REQUEST_BIDS, e),
                (0, o.nk)(e),
                e
                  .map((e) => e.code)
                  .filter(r.hj)
                  .forEach(g),
                e.forEach((e) => {
                  (0, r.Qd)(e.mediaTypes) || (e.mediaTypes = {}),
                    (e.bids = e.bids.filter(
                      (e) => !e.bidder || F.isAllowed(C.uc, K(T.tW, e.bidder))
                    )),
                    f(e.code, "requestsCounter");
                }),
                (e = X(e, s));
              let { [G.CLIENT]: u, [G.SERVER]: p } = ee(e, z);
              c.$W.getConfig("bidderSequence") === c.Ov && (u = (0, r.k4)(u));
              const h = (0, v.EN)();
              let m = [];
              const b = a.global || {},
                I = a.bidder || {};
              function O(e, t) {
                const i = F.redact(null != t ? t : K(T.tW, e.bidderCode)),
                  o = Object.freeze(
                    i.ortb2(
                      (0, r.D9)({ source: { tid: n } }, b, I[e.bidderCode])
                    )
                  );
                return (
                  (e.ortb2 = o),
                  (e.bids = e.bids.map(
                    (e) => ((e.ortb2 = o), i.bidRequest(e))
                  )),
                  e
                );
              }
              z.forEach((i) => {
                const o = (function (e) {
                  return K(T.tp, M, { [B.XG]: e.configName });
                })(i);
                if (i && i.enabled && F.isAllowed(C.uc, o)) {
                  let { adUnits: s, hasModuleBids: a } = (function (e, t) {
                      let n = (0, r.Go)(e),
                        i = !1;
                      return (
                        n.forEach((e) => {
                          const n = e.bids.filter((e) => {
                            var n;
                            return (
                              e.module === M &&
                              (null === (n = e.params) || void 0 === n
                                ? void 0
                                : n.configName) === t.configName
                            );
                          });
                          1 === n.length
                            ? ((e.s2sBid = n[0]),
                              (i = !0),
                              (e.ortb2Imp = (0, r.D9)(
                                {},
                                e.s2sBid.ortb2Imp,
                                e.ortb2Imp
                              )))
                            : n.length > 1 &&
                              (0, r.JE)(
                                'Multiple "module" bids for the same s2s configuration; all will be ignored',
                                n
                              ),
                            (e.bids = Y(e.bids, t).map(
                              (e) => ((e.bid_id = (0, r.s0)()), e)
                            ));
                        }),
                        (n = n.filter(
                          (e) => 0 !== e.bids.length || null != e.s2sBid
                        )),
                        { adUnits: n, hasModuleBids: i }
                      );
                    })(e, i),
                    c = (0, r.lk)();
                  (0 === p.length && a ? [null] : p).forEach((e) => {
                    const a = (0, r.s0)(),
                      l = d.fork(),
                      u = O(
                        {
                          bidderCode: e,
                          auctionId: n,
                          bidderRequestId: a,
                          uniquePbsTid: c,
                          bids: Q({
                            bidderCode: e,
                            auctionId: n,
                            bidderRequestId: a,
                            adUnits: (0, r.Go)(s),
                            src: A.RW.SRC,
                            metrics: l,
                          }),
                          auctionStart: t,
                          timeout: i.timeout,
                          src: A.RW.SRC,
                          refererInfo: h,
                          metrics: l,
                        },
                        o
                      );
                    0 !== u.bids.length && m.push(u);
                  }),
                    s.forEach((e) => {
                      let t = e.bids.filter((e) =>
                        (0, l.I6)(m, (t) =>
                          (0, l.I6)(t.bids, (t) => t.bidId === e.bid_id)
                        )
                      );
                      e.bids = t;
                    }),
                    m.forEach((e) => {
                      void 0 === e.adUnitsS2SCopy &&
                        (e.adUnitsS2SCopy = s.filter(
                          (e) => e.bids.length > 0 || null != e.s2sBid
                        ));
                    });
                }
              });
              let k = (function (e) {
                let t = (0, r.Go)(e);
                return (
                  t.forEach((e) => {
                    e.bids = Y(e.bids, null);
                  }),
                  (t = t.filter((e) => 0 !== e.bids.length)),
                  t
                );
              })(e);
              return (
                u.forEach((e) => {
                  const o = (0, r.s0)(),
                    a = d.fork(),
                    c = O({
                      bidderCode: e,
                      auctionId: n,
                      bidderRequestId: o,
                      bids: Q({
                        bidderCode: e,
                        auctionId: n,
                        bidderRequestId: o,
                        adUnits: (0, r.Go)(k),
                        labels: s,
                        src: "client",
                        metrics: a,
                      }),
                      auctionStart: t,
                      timeout: i,
                      refererInfo: h,
                      metrics: a,
                    }),
                    l = $[e];
                  l ||
                    (0, r.vV)(
                      "Trying to make a request for bidder that does not exist: ".concat(
                        e
                      )
                    ),
                    l && c.bids && 0 !== c.bids.length && m.push(c);
                }),
                m.forEach((e) => {
                  y.mW.getConsentData() &&
                    (e.gdprConsent = y.mW.getConsentData()),
                    y.t6.getConsentData() &&
                      (e.uspConsent = y.t6.getConsentData()),
                    y.ad.getConsentData() &&
                      (e.gppConsent = y.ad.getConsentData());
                }),
                m
              );
            },
            "makeBidRequests"
          )),
            (H.callBids = function (e, t, n, i, o, s, d) {
              let l =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : {};
              if (!t.length)
                return void (0, r.JE)(
                  "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
                );
              let [u, f] = t.reduce(
                (e, t) => (
                  e[Number(void 0 !== t.src && t.src === A.RW.SRC)].push(t), e
                ),
                [[], []]
              );
              var g = [];
              f.forEach((e) => {
                for (var t = -1, n = 0; n < g.length; ++n)
                  if (e.uniquePbsTid === g[n].uniquePbsTid) {
                    t = n;
                    break;
                  }
                t <= -1 && g.push(e);
              });
              let p = 0;
              z.forEach((e) => {
                if (e && g[p] && Z(e).has(g[p].bidderCode)) {
                  const t = (0, a.g4)(
                    s,
                    o
                      ? { request: o.request.bind(null, "s2s"), done: o.done }
                      : void 0
                  );
                  let c = e.bidders;
                  const u = $[e.adapter];
                  let h = g[p].uniquePbsTid,
                    m = g[p].adUnitsS2SCopy,
                    b = f.filter((e) => e.uniquePbsTid === h);
                  if (u) {
                    let o = {
                      ad_units: m,
                      s2sConfig: e,
                      ortb2Fragments: l,
                      requestBidsTimeout: s,
                    };
                    if (o.ad_units.length) {
                      let e = b.map(
                        (e) => (
                          (e.start = (0, r.vE)()),
                          function (t) {
                            t || d(e.bidderRequestId), i.apply(e, arguments);
                          }
                        )
                      );
                      const s = (0, r.ZA)(o.ad_units).filter((e) =>
                        c.includes(e)
                      );
                      (0, r.OG)(
                        "CALLING S2S HEADER BIDDERS ==== ".concat(
                          s.length > 0
                            ? s.join(", ")
                            : 'No bidder specified, using "ortb2Imp" definition(s) only'
                        )
                      ),
                        b.forEach((e) => {
                          E.Ic(
                            A.qY.BID_REQUESTED,
                            V(V({}, e), {}, { tid: e.auctionId })
                          );
                        }),
                        u.callBids(o, f, n, (t) => e.forEach((e) => e(t)), t);
                    }
                  } else (0, r.vV)("missing " + e.adapter);
                  p++;
                }
              }),
                u.forEach((e) => {
                  e.start = (0, r.vE)();
                  const t = $[e.bidderCode];
                  c.$W.runWithBidder(e.bidderCode, () => {
                    (0, r.OG)("CALLING BIDDER"), E.Ic(A.qY.BID_REQUESTED, e);
                  });
                  let l = (0, a.g4)(
                    s,
                    o
                      ? {
                          request: o.request.bind(null, e.bidderCode),
                          done: o.done,
                        }
                      : void 0
                  );
                  const u = i.bind(e);
                  try {
                    c.$W.runWithBidder(
                      e.bidderCode,
                      t.callBids.bind(
                        t,
                        e,
                        n,
                        u,
                        l,
                        () => d(e.bidderRequestId),
                        c.$W.callbackWithBidder(e.bidderCode)
                      )
                    );
                  } catch (t) {
                    (0, r.vV)(
                      "".concat(
                        e.bidderCode,
                        " Bid Adapter emitted an uncaught error when parsing their bidRequest"
                      ),
                      { e: t, bidRequest: e }
                    ),
                      u();
                  }
                });
            }),
            (H.videoAdapters = []),
            (H.registerBidAdapter = function (e, t) {
              let { supportedMediaTypes: n = [] } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              var i;
              e && t
                ? "function" == typeof e.callBids
                  ? (($[t] = e),
                    y.o2.register(
                      T.tW,
                      t,
                      null === (i = e.getSpec) || void 0 === i
                        ? void 0
                        : i.call(e).gvlid
                    ),
                    (0, l.mK)(n, "video") && H.videoAdapters.push(t),
                    (0, l.mK)(n, "native") && o.mT.push(t))
                  : (0, r.vV)(
                      "Bidder adaptor error for bidder code: " +
                        t +
                        "bidder must implement a callBids() function"
                    )
                : (0, r.vV)("bidAdapter or bidderCode not specified");
            }),
            (H.aliasBidAdapter = function (e, t, n) {
              if (void 0 === $[t]) {
                let i = $[e];
                if (void 0 === i) {
                  const n = [];
                  z.forEach((i) => {
                    if (i.bidders && i.bidders.length) {
                      const r = i && i.bidders;
                      i && (0, l.mK)(r, t) ? (L[t] = e) : n.push(e);
                    }
                  }),
                    n.forEach((e) => {
                      (0, r.vV)(
                        'bidderCode "' + e + '" is not an existing bidder.',
                        "adapterManager.aliasBidAdapter"
                      );
                    });
                } else
                  try {
                    let a,
                      c = (function (e) {
                        let t = [];
                        return (
                          (0, l.mK)(H.videoAdapters, e) && t.push("video"),
                          (0, l.mK)(o.mT, e) && t.push("native"),
                          t
                        );
                      })(e);
                    if (i.constructor.prototype != Object.prototype)
                      (a = new i.constructor()), a.setBidderCode(t);
                    else {
                      const { useBaseGvlid: o = !1 } = n || {};
                      let c = i.getSpec();
                      const d = o ? c.gvlid : null == n ? void 0 : n.gvlid;
                      null == d &&
                        null != c.gvlid &&
                        (0, r.JE)(
                          "Alias '"
                            .concat(
                              t,
                              "' will NOT re-use the GVL ID of the original adapter ('"
                            )
                            .concat(c.code, "', gvlid: ")
                            .concat(
                              c.gvlid,
                              "). Functionality that requires TCF consent may not work as expected."
                            )
                        );
                      let l = n && n.skipPbsAliasing;
                      (a = (0, s.xb)(
                        Object.assign({}, c, {
                          code: t,
                          gvlid: d,
                          skipPbsAliasing: l,
                        })
                      )),
                        (L[t] = e);
                    }
                    H.registerBidAdapter(a, t, { supportedMediaTypes: c });
                  } catch (t) {
                    (0, r.vV)(
                      e + " bidder does not currently support aliasing.",
                      "adapterManager.aliasBidAdapter"
                    );
                  }
              } else
                (0, r.OG)('alias name "' + t + '" has been already specified.');
            }),
            (H.resolveAlias = function (e) {
              let t,
                n = e;
              for (; L[n] && (!t || !t.has(n)); )
                (n = L[n]), (t = t || new Set()).add(n);
              return n;
            }),
            (H.registerAnalyticsAdapter = function (e) {
              let { adapter: t, code: n, gvlid: i } = e;
              t && n
                ? "function" == typeof t.enableAnalytics
                  ? ((t.code = n),
                    (J[n] = { adapter: t, gvlid: i }),
                    y.o2.register(T.Tn, n, i))
                  : (0, r.vV)(
                      'Prebid Error: Analytics adaptor error for analytics "'.concat(
                        n,
                        '"\n        analytics adapter must implement an enableAnalytics() function'
                      )
                    )
                : (0, r.vV)(
                    "Prebid Error: analyticsAdapter or analyticsCode not specified"
                  );
            }),
            (H.enableAnalytics = function (e) {
              (0, r.cy)(e) || (e = [e]),
                e.forEach((e) => {
                  const t = J[e.provider];
                  t && t.adapter
                    ? F.isAllowed(C.mo, K(T.Tn, e.provider, { [B.TQ]: e })) &&
                      t.adapter.enableAnalytics(e)
                    : (0, r.vV)(
                        "Prebid Error: no analytics adapter found in registry for '".concat(
                          e.provider,
                          "'."
                        )
                      );
                });
            }),
            (H.getBidAdapter = function (e) {
              return $[e];
            }),
            (H.getAnalyticsAdapter = function (e) {
              return J[e];
            }),
            (H.callTimedOutBidders = function (e, t, n) {
              (t = t.map(
                (t) => (
                  (t.params = (0, r.SB)(e, t.adUnitCode, t.bidder)),
                  (t.timeout = n),
                  t
                )
              )),
                (t = (0, r.$z)(t, "bidder")),
                Object.keys(t).forEach((e) => {
                  ie(e, "onTimeout", t[e]);
                });
            }),
            (H.callBidWonBidder = function (e, t, n) {
              var i, o;
              (t.params = (0, r.SB)(n, t.adUnitCode, t.bidder)),
                (i = t.adUnitCode),
                (o = t.bidder),
                f(i, "winsCounter", o),
                ie(e, "onBidWon", t);
            }),
            (H.triggerBilling = (() => {
              const e = new WeakSet();
              return (t) => {
                e.has(t) ||
                  (e.add(t),
                  t.source === A.RW.SRC && t.burl && r.mM.triggerPixel(t.burl),
                  ie(t.bidder, "onBidBillable", t));
              };
            })()),
            (H.callSetTargetingBidder = function (e, t) {
              ie(e, "onSetTargeting", t);
            }),
            (H.callBidViewableBidder = function (e, t) {
              ie(e, "onBidViewable", t);
            }),
            (H.callBidderError = function (e, t, n) {
              ie(e, "onBidderError", { error: t, bidderRequest: n });
            }),
            (H.callAdRenderSucceededBidder = function (e, t) {
              ie(e, "onAdRenderSucceeded", t);
            }),
            (H.callDataDeletionRequest = (0, d.A_)("sync", function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              const i = "onDataDeletionRequest";
              Object.keys($)
                .filter((e) => !L.hasOwnProperty(e))
                .forEach((e) => {
                  const n = te(e, i);
                  if (null != n) {
                    const r = I.n.getBidsRequested().filter(
                      (t) =>
                        (function (e) {
                          const t = new Set();
                          for (; L.hasOwnProperty(e) && !t.has(e); )
                            t.add(e), (e = L[e]);
                          return e;
                        })(t.bidderCode) === e
                    );
                    ne(e, i, ...n, r, ...t);
                  }
                }),
                Object.entries(J).forEach((e) => {
                  var n;
                  let [o, s] = e;
                  const a =
                    null == s || null === (n = s.adapter) || void 0 === n
                      ? void 0
                      : n[i];
                  if ("function" == typeof a)
                    try {
                      a.apply(s.adapter, t);
                    } catch (e) {
                      (0, r.vV)(
                        "error calling ".concat(i, " of ").concat(o),
                        e
                      );
                    }
                });
            }));
          const re = H;
        },
        9115: (e, t, n) => {
          function i(e) {
            var t = e;
            return {
              callBids: function () {},
              setBidderCode: function (e) {
                t = e;
              },
              getBidderCode: function () {
                return t;
              },
            };
          }
          n.d(t, { xb: () => C, a$: () => T });
          var r = n(8046),
            o = n(3272),
            s = n(3597),
            a = n(8230),
            c = n(2449),
            d = n(3895),
            l = n(8969),
            u = n(5023),
            f = n(5901),
            g = n(1069),
            p = n(9214),
            h = n(6881),
            m = n(2693),
            b = n(6894),
            v = n(5139),
            y = n(3441),
            E = n(5569),
            A = n(6811);
          const w = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
            I = ["auctionId", "transactionId"];
          function T(e) {
            const t = Array.isArray(e.supportedMediaTypes)
              ? { supportedMediaTypes: e.supportedMediaTypes }
              : void 0;
            function n(e) {
              const n = C(e);
              r.Ay.registerBidAdapter(n, e.code, t);
            }
            n(e),
              Array.isArray(e.aliases) &&
                e.aliases.forEach((t) => {
                  let i,
                    o,
                    s = t;
                  (0, g.Qd)(t) &&
                    ((s = t.code), (i = t.gvlid), (o = t.skipPbsAliasing)),
                    (r.Ay.aliasRegistry[s] = e.code),
                    n(
                      Object.assign({}, e, {
                        code: s,
                        gvlid: i,
                        skipPbsAliasing: o,
                      })
                    );
                });
          }
          const O = (0, g.Bj)((e) => {
            let { bidderCode: t } = e;
            if ((0, v.io)(A.VJ, (0, y.s)(E.tW, t)))
              return { bidRequest: (e) => e, bidderRequest: (e) => e };
            function n(e, t, n) {
              return I.includes(t) ? null : Reflect.get(e, t, n);
            }
            function i(e, t) {
              const n = new Proxy(e, t);
              return (
                Object.entries(e)
                  .filter((e) => {
                    let [t, n] = e;
                    return "function" == typeof n;
                  })
                  .forEach((t) => {
                    let [i, r] = t;
                    return (n[i] = r.bind(e));
                  }),
                n
              );
            }
            const r = (0, g.Bj)(
              (e) => i(e, { get: n }),
              (e) => e.bidId
            );
            return {
              bidRequest: r,
              bidderRequest: (e) =>
                i(e, {
                  get: (t, i, o) => ("bids" === i ? e.bids.map(r) : n(t, i, o)),
                }),
            };
          });
          function C(e) {
            return Object.assign(new i(e.code), {
              getSpec: function () {
                return Object.freeze(Object.assign({}, e));
              },
              registerSyncs: t,
              callBids: function (n, i, a, p, v, y) {
                if (!Array.isArray(n.bids)) return;
                const E = O(n),
                  A = {};
                function T(e, t) {
                  const n = (0, b.BO)(t.metrics);
                  n.checkpoint("addBidResponse"),
                    (A[e] = !0),
                    n.measureTime("addBidResponse.validate", () =>
                      (function (e, t) {
                        let { index: n = h.n.index } =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        function i() {
                          let e = Object.keys(t);
                          return w.every(
                            (n) =>
                              (0, f.mK)(e, n) &&
                              !(0, f.mK)([void 0, null], t[n])
                          );
                        }
                        function r(e) {
                          return "Invalid bid from "
                            .concat(t.bidderCode, ". Ignoring bid: ")
                            .concat(e);
                        }
                        if (!e)
                          return (
                            (0, g.JE)(
                              "No adUnitCode was supplied to addBidResponse."
                            ),
                            !1
                          );
                        if (!t)
                          return (
                            (0, g.JE)(
                              "Some adapter tried to add an undefined bid for ".concat(
                                e,
                                "."
                              )
                            ),
                            !1
                          );
                        if (!i())
                          return (
                            (0, g.vV)(
                              r(
                                "Bidder ".concat(
                                  t.bidderCode,
                                  " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
                                )
                              )
                            ),
                            !1
                          );
                        if (
                          "native" === t.mediaType &&
                          !(0, c.Bm)(t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r("Native bid missing some required properties.")
                            ),
                            !1
                          );
                        if (
                          "video" === t.mediaType &&
                          !(0, d.vk)(t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r(
                                "Video bid does not have required vastUrl or renderer property"
                              )
                            ),
                            !1
                          );
                        if (
                          "banner" === t.mediaType &&
                          !(function (e, t) {
                            let { index: n = h.n.index } =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                            if (
                              (t.width || 0 === parseInt(t.width, 10)) &&
                              (t.height || 0 === parseInt(t.height, 10))
                            )
                              return (
                                (t.width = parseInt(t.width, 10)),
                                (t.height = parseInt(t.height, 10)),
                                !0
                              );
                            const i = n.getBidRequest(t),
                              r = n.getMediaTypes(t),
                              o =
                                (i && i.sizes) ||
                                (r && r.banner && r.banner.sizes),
                              s = (0, g.kK)(o);
                            if (1 === s.length) {
                              const [e, n] = s[0].split("x");
                              return (
                                (t.width = parseInt(e, 10)),
                                (t.height = parseInt(n, 10)),
                                !0
                              );
                            }
                            return !1;
                          })(e, t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r("Banner bids require a width and height")
                            ),
                            !1
                          );
                        return !0;
                      })(e, t)
                    )
                      ? i(e, t)
                      : i.reject(e, t, l.Tf.INVALID);
                }
                const C = [];
                function B() {
                  a(),
                    o.$W.runWithBidder(e.code, () => {
                      u.Ic(l.qY.BIDDER_DONE, n),
                        t(C, n.gdprConsent, n.uspConsent, n.gppConsent);
                    });
                }
                const S = j(n).measureTime("validate", () =>
                  n.bids.filter((t) =>
                    (function (t) {
                      if (!e.isBidRequestValid(t))
                        return (
                          (0, g.JE)(
                            "Invalid bid sent to bidder "
                              .concat(e.code, ": ")
                              .concat(JSON.stringify(t))
                          ),
                          !1
                        );
                      return !0;
                    })(E.bidRequest(t))
                  )
                );
                if (0 === S.length) return void B();
                const D = {};
                S.forEach((e) => {
                  (D[e.bidId] = e),
                    e.adUnitCode || (e.adUnitCode = e.placementCode);
                }),
                  k(e, S, n, p, y, {
                    onRequest: (e) => u.Ic(l.qY.BEFORE_BIDDER_HTTP, n, e),
                    onResponse: (t) => {
                      v(e.code), C.push(t);
                    },
                    onPaapi: (e) => {
                      const t = D[e.bidId];
                      t
                        ? R(t, e)
                        : (0, g.JE)(
                            "Received fledge auction configuration for an unknown bidId",
                            e
                          );
                    },
                    onError: (t, i) => {
                      i.timedOut || v(e.code),
                        r.Ay.callBidderError(e.code, i, n),
                        u.Ic(l.qY.BIDDER_ERROR, { error: i, bidderRequest: n }),
                        (0, g.vV)(
                          "Server call for "
                            .concat(e.code, " failed: ")
                            .concat(t, " ")
                            .concat(i.status, ". Continuing without bids.")
                        );
                    },
                    onBid: (t) => {
                      const n = D[t.requestId];
                      if (n) {
                        var r;
                        if (
                          ((t.adapterCode = n.bidder),
                          (function (e, t) {
                            let n =
                                m.u.get(t, "allowAlternateBidderCodes") || !1,
                              i = m.u.get(t, "allowedAlternateBidderCodes");
                            if (
                              e &&
                              t &&
                              t !== e &&
                              ((i = (0, g.cy)(i)
                                ? i
                                    .map((e) => e.trim().toLowerCase())
                                    .filter((e) => !!e)
                                    .filter(g.hj)
                                : i),
                              !n ||
                                ((0, g.cy)(i) &&
                                  "*" !== i[0] &&
                                  !i.includes(e)))
                            )
                              return !0;
                            return !1;
                          })(t.bidderCode, n.bidder))
                        )
                          return (
                            (0, g.JE)(
                              ""
                                .concat(
                                  t.bidderCode,
                                  " is not a registered partner or known bidder of "
                                )
                                .concat(
                                  n.bidder,
                                  ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."
                                )
                            ),
                            void i.reject(
                              n.adUnitCode,
                              t,
                              l.Tf.BIDDER_DISALLOWED
                            )
                          );
                        (t.originalCpm = t.cpm),
                          (t.originalCurrency = t.currency),
                          (t.meta = t.meta || Object.assign({}, t[n.bidder])),
                          (t.deferBilling = n.deferBilling),
                          (t.deferRendering =
                            t.deferBilling &&
                            (null !== (r = t.deferRendering) && void 0 !== r
                              ? r
                              : "function" != typeof e.onBidBillable));
                        const o = Object.assign(
                          (0, s.O)(l.XQ.GOOD, n),
                          t,
                          (0, g.Up)(n, I)
                        );
                        T(n.adUnitCode, o);
                      } else
                        (0, g.JE)(
                          "Bidder "
                            .concat(
                              e.code,
                              " made bid for unknown request ID: "
                            )
                            .concat(t.requestId, ". Ignoring.")
                        ),
                          i.reject(null, t, l.Tf.INVALID_REQUEST_ID);
                    },
                    onCompletion: B,
                  });
              },
            });
            function t(t, n, i, r) {
              S(e, t, n, i, r);
            }
          }
          const B = ["bids", "paapi"],
            k = (0, p.A_)(
              "sync",
              function (e, t, n, i, r, o) {
                let {
                  onRequest: s,
                  onResponse: a,
                  onPaapi: c,
                  onError: d,
                  onBid: l,
                  onCompletion: u,
                } = o;
                const f = j(n);
                u = f.startTiming("total").stopBefore(u);
                const p = O(n);
                let h = f.measureTime("buildRequests", () =>
                  e.buildRequests(t.map(p.bidRequest), p.bidderRequest(n))
                );
                if (!h || 0 === h.length) return void u();
                Array.isArray(h) || (h = [h]);
                const b = (0, g.U6)(u, h.length);
                h.forEach((t) => {
                  const n = f.fork();
                  function o(e) {
                    null != e && (e.metrics = n.fork().renameWith()), l(e);
                  }
                  const u = r(function (i, r) {
                      h();
                      try {
                        i = JSON.parse(i);
                      } catch (e) {}
                      (i = {
                        body: i,
                        headers: { get: r.getResponseHeader.bind(r) },
                      }),
                        a(i);
                      try {
                        i = n.measureTime("interpretResponse", () =>
                          e.interpretResponse(i, t)
                        );
                      } catch (t) {
                        return (
                          (0, g.vV)(
                            "Bidder ".concat(
                              e.code,
                              " failed to interpret the server's response. Continuing without bids"
                            ),
                            null,
                            t
                          ),
                          void b()
                        );
                      }
                      let s, d;
                      i && !Object.keys(i).some((e) => !B.includes(e))
                        ? ((s = i.bids), (d = i.paapi))
                        : (s = i),
                        (0, g.cy)(d) && d.forEach(c),
                        s && ((0, g.cy)(s) ? s.forEach(o) : o(s)),
                        b();
                    }),
                    p = r(function (e, t) {
                      h(), d(e, t), b();
                    });
                  s(t);
                  const h = n.startTiming("net");
                  function w(n) {
                    var i;
                    const r = t.options;
                    return Object.assign(n, r, {
                      browsingTopics:
                        !(
                          null != r &&
                          r.hasOwnProperty("browsingTopics") &&
                          !r.browsingTopics
                        ) &&
                        (null === (i = m.u.get(e.code, "topicsHeader")) ||
                          void 0 === i ||
                          i) &&
                        (0, v.io)(A.DL, (0, y.s)(E.tW, e.code)),
                    });
                  }
                  switch (t.method) {
                    case "GET":
                      i(
                        "".concat(t.url).concat(
                          (function (e) {
                            if (e)
                              return "?".concat(
                                "object" == typeof e ? (0, g.bL)(e) : e
                              );
                            return "";
                          })(t.data)
                        ),
                        { success: u, error: p },
                        void 0,
                        w({ method: "GET", withCredentials: !0 })
                      );
                      break;
                    case "POST":
                      i(
                        t.url,
                        { success: u, error: p },
                        "string" == typeof t.data
                          ? t.data
                          : JSON.stringify(t.data),
                        w({
                          method: "POST",
                          contentType: "text/plain",
                          withCredentials: !0,
                        })
                      );
                      break;
                    default:
                      (0, g.JE)(
                        "Skipping invalid request from "
                          .concat(e.code, ". Request type ")
                          .concat(t.type, " must be GET or POST")
                      ),
                        b();
                  }
                });
              },
              "processBidderRequests"
            ),
            S = (0, p.A_)(
              "async",
              function (e, t, n, i, s) {
                const c = o.$W.getConfig("userSync.aliasSyncEnabled");
                if (e.getUserSyncs && (c || !r.Ay.aliasRegistry[e.code])) {
                  let r = o.$W.getConfig("userSync.filterSettings"),
                    c = e.getUserSyncs(
                      {
                        iframeEnabled: !(!r || (!r.iframe && !r.all)),
                        pixelEnabled: !(!r || (!r.image && !r.all)),
                      },
                      t,
                      n,
                      i,
                      s
                    );
                  c &&
                    (Array.isArray(c) || (c = [c]),
                    c.forEach((t) => {
                      a.zt.registerSync(t.type, e.code, t.url);
                    }),
                    a.zt.bidderDone(e.code));
                }
              },
              "registerSyncs"
            ),
            R = (0, p.A_)("sync", (e, t) => {}, "addPaapiConfig");
          function j(e) {
            return (0, b.BO)(e.metrics).renameWith((t) => [
              "adapter.client.".concat(t),
              "adapters.client.".concat(e.bidderCode, ".").concat(t),
            ]);
          }
        },
        1580: (e, t, n) => {
          n.d(t, { R: () => l });
          var i = n(6811),
            r = n(3441),
            o = n(5139),
            s = n(5901),
            a = n(1069);
          const c = new WeakMap(),
            d = [
              "debugging",
              "outstream",
              "improvedigital",
              "showheroes-bs",
              "aaxBlockmeter",
              "adagio",
              "adloox",
              "akamaidap",
              "arcspan",
              "airgrid",
              "browsi",
              "brandmetrics",
              "clean.io",
              "humansecurity",
              "confiant",
              "contxtful",
              "hadron",
              "mediafilter",
              "medianet",
              "azerionedge",
              "a1Media",
              "geoedge",
              "qortex",
              "dynamicAdBoost",
              "51Degrees",
              "symitridap",
              "wurfl",
              "justtag",
              "tncId",
              "ftrackId",
              "id5",
            ];
          function l(e, t, n, l, u, f) {
            if (!(0, o.io)(i.pY, (0, r.s)(t, n))) return;
            if (!n || !e)
              return void (0, a.vV)(
                "cannot load external script without url and moduleCode"
              );
            if (!(0, s.mK)(d, n))
              return void (0, a.vV)(
                "".concat(n, " not whitelisted for loading external JavaScript")
              );
            u || (u = document);
            const g = m(u, e);
            if (g)
              return (
                l &&
                  "function" == typeof l &&
                  (g.loaded ? l() : g.callbacks.push(l)),
                g.tag
              );
            const p = c.get(u) || {},
              h = { loaded: !1, tag: null, callbacks: [] };
            return (
              (p[e] = h),
              c.set(u, p),
              l && "function" == typeof l && h.callbacks.push(l),
              (0, a.JE)("module ".concat(n, " is loading external JavaScript")),
              (function (t, n, i, r) {
                i || (i = document);
                var o = i.createElement("script");
                (o.type = "text/javascript"), (o.async = !0);
                const s = m(i, e);
                s && (s.tag = o);
                o.readyState
                  ? (o.onreadystatechange = function () {
                      ("loaded" !== o.readyState &&
                        "complete" !== o.readyState) ||
                        ((o.onreadystatechange = null), n());
                    })
                  : (o.onload = function () {
                      n();
                    });
                (o.src = t), r && (0, a.Bg)(o, r);
                return (0, a._s)(o, i), o;
              })(
                e,
                function () {
                  h.loaded = !0;
                  try {
                    for (let e = 0; e < h.callbacks.length; e++)
                      h.callbacks[e]();
                  } catch (e) {
                    (0, a.vV)(
                      "Error executing callback",
                      "adloader.js:loadExternalScript",
                      e
                    );
                  }
                },
                u,
                f
              )
            );
            function m(e, t) {
              const n = c.get(e);
              return n && n[t] ? n[t] : null;
            }
          }
        },
        8044: (e, t, n) => {
          n.d(t, { g4: () => u });
          var i = n(3272),
            r = n(1069);
          const o = {
              fetch: window.fetch.bind(window),
              makeRequest: (e, t) => new Request(e, t),
              timeout(e, t) {
                const n = new AbortController();
                let i = setTimeout(() => {
                  n.abort(),
                    (0, r.vV)("Request timeout after ".concat(e, "ms"), t),
                    (i = null);
                }, e);
                return {
                  signal: n.signal,
                  done() {
                    i && clearTimeout(i);
                  },
                };
              },
            },
            s = "GET",
            a = "POST",
            c = "Content-Type";
          function d() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              { request: t, done: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (t, n) => {
                var r, s;
                let a;
                null == e ||
                  null !=
                    (null === (r = n) || void 0 === r ? void 0 : r.signal) ||
                  i.$W.getConfig("disableAjaxTimeout") ||
                  ((a = o.timeout(e, t)),
                  (n = Object.assign({ signal: a.signal }, n)));
                let c = o.fetch(t, n);
                return (
                  null !=
                    (null === (s = a) || void 0 === s ? void 0 : s.done) &&
                    (c = c.finally(a.done)),
                  c
                );
              };
            return (
              (null == t && null == n) ||
                (r = ((e) =>
                  function (i, r) {
                    const o = new URL(
                      null == (null == i ? void 0 : i.url) ? i : i.url,
                      document.location
                    ).origin;
                    let s = e(i, r);
                    return t && t(o), n && (s = s.finally(() => n(o))), s;
                  })(r)),
              r
            );
          }
          function l(e, t) {
            let { status: n, statusText: i = "", headers: o, url: s } = e,
              a = 0;
            function d(e) {
              if (0 === a)
                try {
                  var n;
                  a = new DOMParser().parseFromString(
                    t,
                    null == o ||
                      null === (n = o.get(c)) ||
                      void 0 === n ||
                      null === (n = n.split(";")) ||
                      void 0 === n
                      ? void 0
                      : n[0]
                  );
                } catch (t) {
                  (a = null), e && e(t);
                }
              return a;
            }
            return {
              readyState: XMLHttpRequest.DONE,
              status: n,
              statusText: i,
              responseText: t,
              response: t,
              responseType: "",
              responseURL: s,
              get responseXML() {
                return d(r.vV);
              },
              getResponseHeader: (e) =>
                null != o && o.has(e) ? o.get(e) : null,
              toJSON() {
                return Object.assign({ responseXML: d() }, this);
              },
              timedOut: !1,
            };
          }
          function u() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              { request: t, done: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            const i = d(e, { request: t, done: n });
            return function (e, t, n) {
              !(function (e, t) {
                const { success: n, error: i } =
                  "object" == typeof t && null != t
                    ? t
                    : {
                        success: "function" == typeof t ? t : () => null,
                        error: (e, t) => (0, r.vV)("Network error", e, t),
                      };
                e.then((e) => e.text().then((t) => [e, t])).then(
                  (e) => {
                    let [t, r] = e;
                    const o = l(t, r);
                    t.ok || 304 === t.status ? n(r, o) : i(t.statusText, o);
                  },
                  (e) =>
                    i(
                      "",
                      Object.assign(l({ status: 0 }, ""), {
                        reason: e,
                        timedOut:
                          "AbortError" === (null == e ? void 0 : e.name),
                      })
                    )
                );
              })(
                i(
                  (function (e, t) {
                    let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    const i = n.method || (t ? a : s);
                    if (i === s && t) {
                      const i = (0, r.Dl)(e, n);
                      Object.assign(i.search, t), (e = (0, r.c$)(i));
                    }
                    const d = new Headers(n.customHeaders);
                    d.set(c, n.contentType || "text/plain");
                    const l = { method: i, headers: d };
                    return (
                      i !== s && t && (l.body = t),
                      n.withCredentials && (l.credentials = "include"),
                      isSecureContext &&
                        ["browsingTopics", "adAuctionHeaders"].forEach((e) => {
                          n[e] && (l[e] = !0);
                        }),
                      n.keepalive && (l.keepalive = !0),
                      o.makeRequest(e, l)
                    );
                  })(
                    e,
                    n,
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {}
                  )
                ),
                t
              );
            };
          }
          u(), d();
        },
        6881: (e, t, n) => {
          n.d(t, { n: () => ie });
          var i = n(1069),
            r = n(6833),
            o = n(2449),
            s = n(8044),
            a = n(3272);
          const c = 15;
          function d(e) {
            let { index: t = ie.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = e.vastXml
                ? e.vastXml
                : (function (e, t) {
                    let n = (t = t && (Array.isArray(t) ? t : [t]))
                      ? t
                          .map((e) =>
                            "<Impression><![CDATA[".concat(
                              e,
                              "]]></Impression>"
                            )
                          )
                          .join("")
                      : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                      .concat(e, "]]></VASTAdTagURI>\n        ")
                      .concat(
                        n,
                        "\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
                      );
                  })(e.vastUrl, e.vastImpUrl),
              i = t.getAuction(e);
            let r = { type: "xml", value: n, ttlseconds: Number(e.ttl) + c };
            return (
              a.$W.getConfig("cache.vasttrack") &&
                ((r.bidder = e.bidder),
                (r.bidid = e.requestId),
                (r.aid = e.auctionId)),
              null != i && (r.timestamp = i.getAuctionStart()),
              "string" == typeof e.customCacheKey &&
                "" !== e.customCacheKey &&
                (r.key = e.customCacheKey),
              r
            );
          }
          const l = {
            store: function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : s.g4;
              const i = { puts: e.map(d) };
              n(a.$W.getConfig("cache.timeout"))(
                a.$W.getConfig("cache.url"),
                (function (e) {
                  return {
                    success: function (t) {
                      let n;
                      try {
                        n = JSON.parse(t).responses;
                      } catch (t) {
                        return void e(t, []);
                      }
                      n
                        ? e(null, n)
                        : e(
                            new Error(
                              "The cache server didn't respond with a responses property."
                            ),
                            []
                          );
                    },
                    error: function (t, n) {
                      e(
                        new Error(
                          "Error storing video ad in the cache: "
                            .concat(t, ": ")
                            .concat(JSON.stringify(n))
                        ),
                        []
                      );
                    },
                  };
                })(t),
                JSON.stringify(i),
                { contentType: "text/plain", withCredentials: !0 }
              );
            },
          };
          function u(e) {
            const t = e.map((e) => e.bidResponse);
            l.store(t, function (n, r) {
              var o;
              n
                ? ((o = n),
                  (0, i.vV)(
                    "Failed to save to the video cache: ".concat(
                      o,
                      ". Video bids will be discarded:"
                    ),
                    t
                  ))
                : e.length !== r.length
                ? (0, i.vV)(
                    "expected "
                      .concat(e.length, " cache IDs, got ")
                      .concat(r.length, " instead")
                  )
                : r.forEach((t, n) => {
                    const {
                      auctionInstance: r,
                      bidResponse: o,
                      afterBidAdded: s,
                    } = e[n];
                    var c;
                    "" === t.uuid
                      ? (0, i.JE)(
                          "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                        )
                      : ((o.videoCacheKey = t.uuid),
                        o.vastUrl ||
                          (o.vastUrl =
                            ((c = o.videoCacheKey),
                            ""
                              .concat(a.$W.getConfig("cache.url"), "?uuid=")
                              .concat(c))),
                        H(r, o),
                        s());
                  });
            });
          }
          let f, g;
          a.$W.getConfig("cache", (e) => {
            (f =
              "number" == typeof e.cache.batchSize && e.cache.batchSize > 0
                ? e.cache.batchSize
                : 1),
              (g =
                "number" == typeof e.cache.batchTimeout &&
                e.cache.batchTimeout > 0
                  ? e.cache.batchTimeout
                  : 0);
          });
          const p = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : setTimeout,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : u,
              n = [[]],
              i = !1;
            const r = (e) => e();
            return function (o, s, a) {
              const c = g > 0 ? e : r;
              n[n.length - 1].length >= f && n.push([]),
                n[n.length - 1].push({
                  auctionInstance: o,
                  bidResponse: s,
                  afterBidAdded: a,
                }),
                i ||
                  ((i = !0),
                  c(() => {
                    n.forEach(t), (n = [[]]), (i = !1);
                  }, g));
            };
          })();
          var h = n(5789),
            m = n(8230),
            b = n(9214),
            v = n(5901),
            y = n(3895),
            E = n(1371),
            A = n(2693),
            w = n(5023),
            I = n(8046),
            T = n(8969),
            O = n(5555),
            C = n(6894);
          var B = n(7873),
            k = n(6853),
            S = n(7863);
          const { syncUsers: R } = m.zt,
            j = "started",
            D = "inProgress",
            U = "completed";
          w.on(T.qY.BID_ADJUSTMENT, function (e) {
            !(function (e) {
              let t = (function (e, t, n) {
                var r;
                let { index: o = ie.index, bs: s = A.u } =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                n = n || o.getBidRequest(t);
                const a = null == t ? void 0 : t.adapterCode,
                  c =
                    (null == t ? void 0 : t.bidderCode) ||
                    (null === (r = n) || void 0 === r ? void 0 : r.bidder),
                  d = s.get(
                    null == t ? void 0 : t.adapterCode,
                    "adjustAlternateBids"
                  ),
                  l =
                    s.getOwn(c, "bidCpmAdjustment") ||
                    s.get(d ? a : c, "bidCpmAdjustment");
                if (l && "function" == typeof l)
                  try {
                    return l(e, Object.assign({}, t), n);
                  } catch (e) {
                    (0, i.vV)("Error during bid adjustment", e);
                  }
                return e;
              })(e.cpm, e);
              t >= 0 && (e.cpm = t);
            })(e);
          });
          const _ = 4,
            q = {},
            x = {},
            N = [],
            P = (0, B.m)();
          function W(e) {
            let {
              adUnits: t,
              adUnitCodes: n,
              callback: s,
              cbTimeout: c,
              labels: d,
              auctionId: l,
              ortb2Fragments: u,
              metrics: f,
            } = e;
            f = (0, C.BO)(f);
            const g = t,
              p = d,
              m = n,
              b = l || (0, i.lk)(),
              A = c,
              B = new Set(),
              W = (0, O.v)(),
              z = (0, O.v)();
            let J,
              K,
              Q,
              Y,
              X = [],
              Z = s,
              ee = [],
              ne = (0, k.H)({
                startTime: (e) => e.responseTimestamp,
                ttl: (e) =>
                  null == (0, S.S9)()
                    ? null
                    : 1e3 * Math.max((0, S.S9)(), e.ttl),
              }),
              re = [],
              oe = [],
              se = [];
            function ae() {
              return {
                auctionId: b,
                timestamp: J,
                auctionEnd: K,
                auctionStatus: Y,
                adUnits: g,
                adUnitCodes: m,
                labels: p,
                bidderRequests: ee,
                noBids: re,
                bidsReceived: ne.toArray(),
                bidsRejected: X,
                winningBids: oe,
                timeout: A,
                metrics: f,
                seatNonBids: se,
              };
            }
            function ce(e) {
              if (
                (e ? w.Ic(T.qY.AUCTION_TIMEOUT, ae()) : clearTimeout(Q),
                void 0 === K)
              ) {
                let n = [];
                e &&
                  ((0, i.OG)("Auction ".concat(b, " timedOut")),
                  (n = ee
                    .filter((e) => !B.has(e.bidderRequestId))
                    .flatMap((e) => e.bids)),
                  n.length && w.Ic(T.qY.BID_TIMEOUT, n)),
                  (Y = U),
                  (K = Date.now()),
                  f.checkpoint("auctionEnd"),
                  f.timeBetween(
                    "requestBids",
                    "auctionEnd",
                    "requestBids.total"
                  ),
                  f.timeBetween(
                    "callBids",
                    "auctionEnd",
                    "requestBids.callBids"
                  ),
                  W.resolve(),
                  w.Ic(T.qY.AUCTION_END, ae()),
                  F(g, function () {
                    try {
                      if (null != Z) {
                        const t = ne
                          .toArray()
                          .filter((e) => m.includes(e.adUnitCode))
                          .reduce(te, {});
                        Z.apply(P, [t, e, b]), (Z = null);
                      }
                    } catch (e) {
                      (0, i.vV)("Error executing bidsBackHandler", null, e);
                    } finally {
                      n.length && I.Ay.callTimedOutBidders(t, n, A);
                      let e = a.$W.getConfig("userSync") || {};
                      e.enableOverride || R(e.syncDelay);
                    }
                  });
              }
            }
            function de() {
              a.$W.resetBidder(),
                (0, i.fH)(
                  "Bids Received for Auction with id: ".concat(b),
                  ne.toArray()
                ),
                (Y = U),
                ce(!1);
            }
            function le(e) {
              B.add(e);
            }
            function ue(e) {
              e.forEach((e) => {
                var t;
                (t = e), (ee = ee.concat(t));
              });
              let t = {},
                n = {
                  bidRequests: e,
                  run: () => {
                    (Q = setTimeout(() => ce(!0), A)),
                      (Y = D),
                      w.Ic(T.qY.AUCTION_INIT, ae());
                    let n = (function (e, t) {
                      let { index: n = ie.index } =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        s = 0,
                        c = !1,
                        d = new Set(),
                        l = {};
                      function u() {
                        s--, c && 0 === s && e();
                      }
                      function f(e, t, n) {
                        return (
                          (l[t.requestId] = !0),
                          (function (e, t) {
                            let { index: n = ie.index } =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                            const r = n.getBidderRequest(e),
                              o = n.getAdUnit(e),
                              s = (r && r.start) || e.requestTimestamp;
                            Object.assign(e, {
                              responseTimestamp:
                                e.responseTimestamp || (0, i.vE)(),
                              requestTimestamp: e.requestTimestamp || s,
                              cpm: parseFloat(e.cpm) || 0,
                              bidder: e.bidder || e.bidderCode,
                              adUnitCode: t,
                            }),
                              null != (null == o ? void 0 : o.ttlBuffer) &&
                                (e.ttlBuffer = o.ttlBuffer);
                            e.timeToRespond =
                              e.responseTimestamp - e.requestTimestamp;
                          })(t, e),
                          s++,
                          n(u)
                        );
                      }
                      function g(e, s) {
                        f(e, s, (e) => {
                          let c = (function (e) {
                            var t;
                            let { index: n = ie.index } =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            w.Ic(T.qY.BID_ADJUSTMENT, e);
                            const i =
                                (null === (t = n.getBidRequest(e)) ||
                                void 0 === t
                                  ? void 0
                                  : t.renderer) || n.getAdUnit(e).renderer,
                              o = e.mediaType,
                              s = n.getMediaTypes(e),
                              c = s && s[o];
                            var d = c && c.renderer,
                              l = null;
                            !d ||
                            !d.render ||
                            (!0 === d.backupOnly && e.renderer)
                              ? !i ||
                                !i.render ||
                                (!0 === i.backupOnly && e.renderer) ||
                                (l = i)
                              : (l = d);
                            l &&
                              ((e.renderer = h.A4.install({
                                url: l.url,
                                config: l.options,
                                renderNow: null == l.url,
                              })),
                              e.renderer.setRender(l.render));
                            const u = L(
                                e.mediaType,
                                s,
                                a.$W.getConfig("mediaTypePriceGranularity")
                              ),
                              f = (0, r.j)(
                                e.cpm,
                                "object" == typeof u
                                  ? u
                                  : a.$W.getConfig("customPriceBucket"),
                                a.$W.getConfig("currency.granularityMultiplier")
                              );
                            return (
                              (e.pbLg = f.low),
                              (e.pbMg = f.med),
                              (e.pbHg = f.high),
                              (e.pbAg = f.auto),
                              (e.pbDg = f.dense),
                              (e.pbCg = f.custom),
                              e
                            );
                          })(s);
                          w.Ic(T.qY.BID_ACCEPTED, c),
                            c.mediaType === E.G_
                              ? (function (e, t, n) {
                                  var r;
                                  let { index: o = ie.index } =
                                      arguments.length > 3 &&
                                      void 0 !== arguments[3]
                                        ? arguments[3]
                                        : {},
                                    s = !0;
                                  const c =
                                      null ===
                                        (r = o.getMediaTypes({
                                          requestId:
                                            t.originalRequestId || t.requestId,
                                          adUnitId: t.adUnitId,
                                        })) || void 0 === r
                                        ? void 0
                                        : r.video,
                                    d = c && (null == c ? void 0 : c.context),
                                    l =
                                      c && (null == c ? void 0 : c.useCacheKey);
                                  a.$W.getConfig("cache.url") &&
                                    (l || d !== y.H6) &&
                                    (!t.videoCacheKey ||
                                    a.$W.getConfig("cache.ignoreBidderCacheKey")
                                      ? ((s = !1), $(e, t, n, c))
                                      : t.vastUrl ||
                                        ((0, i.vV)(
                                          "videoCacheKey specified but not required vastUrl for video bid"
                                        ),
                                        (s = !1)));
                                  s && (H(e, t), n());
                                })(t, c, e)
                              : ((0, o.l6)(c) && (0, o.gs)(c, n.getAdUnit(c)),
                                H(t, c),
                                e());
                        });
                      }
                      function p(e, n, r) {
                        return f(e, n, (e) => {
                          (n.rejectionReason = r),
                            (0, i.JE)(
                              "Bid from "
                                .concat(
                                  n.bidder || "unknown bidder",
                                  " was rejected: "
                                )
                                .concat(r),
                              n
                            ),
                            w.Ic(T.qY.BID_REJECTED, n),
                            t.addBidRejected(n),
                            e();
                        });
                      }
                      function m() {
                        let n = this,
                          r = t.getBidRequests();
                        const o = a.$W.getConfig("auctionOptions");
                        if ((d.add(n), o && !(0, i.Im)(o))) {
                          const e = o.secondaryBidders;
                          e &&
                            !r.every((t) => (0, v.mK)(e, t.bidderCode)) &&
                            (r = r.filter((t) => !(0, v.mK)(e, t.bidderCode)));
                        }
                        (c = r.every((e) => d.has(e))),
                          n.bids.forEach((e) => {
                            l[e.bidId] || (t.addNoBid(e), w.Ic(T.qY.NO_BID, e));
                          }),
                          c && 0 === s && e();
                      }
                      return {
                        addBidResponse: (function () {
                          function e(e, t) {
                            V.call(
                              { dispatch: g },
                              e,
                              t,
                              (() => {
                                let n = !1;
                                return (i) => {
                                  n || (p(e, t, i), (n = !0));
                                };
                              })()
                            );
                          }
                          return (e.reject = p), e;
                        })(),
                        adapterDone: function () {
                          M(O.k.resolve()).finally(() => m.call(this));
                        },
                      };
                    })(de, this);
                    I.Ay.callBids(
                      g,
                      e,
                      n.addBidResponse,
                      n.adapterDone,
                      {
                        request(e, n) {
                          c(q, n),
                            c(t, e),
                            x[e] || (x[e] = { SRA: !0, origin: n }),
                            t[e] > 1 && (x[e].SRA = !1);
                        },
                        done(e) {
                          q[e]--, N[0] && s(N[0]) && N.shift();
                        },
                      },
                      A,
                      le,
                      u
                    ),
                      z.resolve();
                  },
                };
              function s(e) {
                let t = !0,
                  n = a.$W.getConfig("maxRequestsPerOrigin") || _;
                return (
                  e.bidRequests.some((e) => {
                    let i = 1,
                      r =
                        void 0 !== e.src && e.src === T.RW.SRC
                          ? "s2s"
                          : e.bidderCode;
                    return (
                      x[r] &&
                        (!1 === x[r].SRA && (i = Math.min(e.bids.length, n)),
                        q[x[r].origin] + i > n && (t = !1)),
                      !t
                    );
                  }),
                  t && e.run(),
                  t
                );
              }
              function c(e, t) {
                void 0 === e[t] ? (e[t] = 1) : e[t]++;
              }
              s(n) ||
                ((0, i.JE)("queueing auction due to limited endpoint capacity"),
                N.push(n));
            }
            return (
              (0, S.lc)(() => ne.refresh()),
              w.on(T.qY.SEAT_NON_BID, (e) => {
                var t;
                e.auctionId === b && ((t = e.seatnonbid), (se = se.concat(t)));
              }),
              {
                addBidReceived: function (e) {
                  ne.add(e);
                },
                addBidRejected: function (e) {
                  X = X.concat(e);
                },
                addNoBid: function (e) {
                  re = re.concat(e);
                },
                callBids: function () {
                  (Y = j), (J = Date.now());
                  let e = f.measureTime("requestBids.makeRequests", () =>
                    I.Ay.makeBidRequests(g, J, b, A, p, u, f)
                  );
                  (0, i.fH)(
                    "Bids Requested for Auction with id: ".concat(b),
                    e
                  ),
                    f.checkpoint("callBids"),
                    e.length < 1
                      ? ((0, i.JE)(
                          "No valid bid requests returned for auction"
                        ),
                        de())
                      : G.call({ dispatch: ue, context: this }, e);
                },
                addWinningBid: function (e) {
                  (oe = oe.concat(e)),
                    I.Ay.callBidWonBidder(e.adapterCode || e.bidder, e, t),
                    e.deferBilling || I.Ay.triggerBilling(e);
                },
                setBidTargeting: function (e) {
                  I.Ay.callSetTargetingBidder(e.adapterCode || e.bidder, e);
                },
                getWinningBids: () => oe,
                getAuctionStart: () => J,
                getAuctionEnd: () => K,
                getTimeout: () => A,
                getAuctionId: () => b,
                getAuctionStatus: () => Y,
                getAdUnits: () => g,
                getAdUnitCodes: () => m,
                getBidRequests: () => ee,
                getBidsReceived: () => ne.toArray(),
                getNoBids: () => re,
                getNonBids: () => se,
                getFPD: () => u,
                getMetrics: () => f,
                end: W.promise,
                requestsDone: z.promise,
                getProperties: ae,
              }
            );
          }
          const V = (0, b.A_)(
              "sync",
              function (e, t, n) {
                !(function (e) {
                  const t = a.$W.getConfig("maxBid");
                  return !t || !e.cpm || t >= Number(e.cpm);
                })(t)
                  ? n(T.Tf.PRICE_TOO_HIGH)
                  : this.dispatch.call(null, e, t);
              },
              "addBidResponse"
            ),
            M = (0, b.A_)("sync", (e) => e, "responsesReady"),
            G = (0, b.A_)(
              "sync",
              function (e) {
                this.dispatch.call(this.context, e);
              },
              "addBidderRequests"
            ),
            F = (0, b.A_)(
              "async",
              function (e, t) {
                t && t();
              },
              "bidsBackCallback"
            );
          function H(e, t) {
            !(function (e) {
              let t;
              const n =
                !0 === A.u.get(e.bidderCode, "allowZeroCpmBids")
                  ? e.cpm >= 0
                  : e.cpm > 0;
              e.bidderCode &&
                (n || e.dealId) &&
                (t = (function (e, t) {
                  let { index: n = ie.index } =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if (!t) return {};
                  const i = n.getBidRequest(t);
                  var r = {};
                  const s = Z(t.mediaType, e);
                  ee(r, s, t, i),
                    e &&
                      A.u.getOwn(e, T.iD.ADSERVER_TARGETING) &&
                      (ee(r, A.u.ownSettingsFor(e), t, i),
                      (t.sendStandardTargeting = A.u.get(
                        e,
                        "sendStandardTargeting"
                      )));
                  t.native && (r = Object.assign({}, r, (0, o.Zj)(t)));
                  return r;
                })(e.bidderCode, e));
              e.adserverTargeting = Object.assign(e.adserverTargeting || {}, t);
            })(t),
              (0, C.BO)(t.metrics).timeSince(
                "addBidResponse",
                "addBidResponse.total"
              ),
              e.addBidReceived(t),
              w.Ic(T.qY.BID_RESPONSE, t);
          }
          const $ = (0, b.A_)(
            "async",
            function (e, t, n, i) {
              p(e, t, n);
            },
            "callPrebidCache"
          );
          function L(e, t, n) {
            if (e && n) {
              if (e === E.G_) {
                var i, r;
                const e =
                  null !==
                    (i =
                      null == t || null === (r = t[E.G_]) || void 0 === r
                        ? void 0
                        : r.context) && void 0 !== i
                    ? i
                    : "instream";
                if (n["".concat(E.G_, "-").concat(e)])
                  return n["".concat(E.G_, "-").concat(e)];
              }
              return n[e];
            }
          }
          const z = (e) => (t) => {
              const n =
                e ||
                (function (e) {
                  let { index: t = ie.index } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const n = L(
                    e.mediaType,
                    t.getMediaTypes(e),
                    a.$W.getConfig("mediaTypePriceGranularity")
                  );
                  return "string" == typeof e.mediaType && n
                    ? "string" == typeof n
                      ? n
                      : "custom"
                    : a.$W.getConfig("priceGranularity");
                })(t);
              return n === T.UE.AUTO
                ? t.pbAg
                : n === T.UE.DENSE
                ? t.pbDg
                : n === T.UE.LOW
                ? t.pbLg
                : n === T.UE.MEDIUM
                ? t.pbMg
                : n === T.UE.HIGH
                ? t.pbHg
                : n === T.UE.CUSTOM
                ? t.pbCg
                : void 0;
            },
            J = () => (e) => e.creativeId ? e.creativeId : "",
            K = () => (e) =>
              e.meta &&
              e.meta.advertiserDomains &&
              e.meta.advertiserDomains.length > 0
                ? [e.meta.advertiserDomains].flat()[0]
                : "",
            Q = () => (e) => {
              var t, n;
              return e.meta && (e.meta.networkId || e.meta.networkName)
                ? (null == e || null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.networkName) ||
                    (null == e || null === (n = e.meta) || void 0 === n
                      ? void 0
                      : n.networkId)
                : "";
            },
            Y = () => (e) =>
              e.meta && e.meta.primaryCatId ? e.meta.primaryCatId : "";
          function X(e, t) {
            return {
              key: e,
              val:
                "function" == typeof t
                  ? function (e, n) {
                      return t(e, n);
                    }
                  : function (e) {
                      return e[t];
                    },
            };
          }
          function Z(e, t) {
            const n = Object.assign({}, A.u.settingsFor(null));
            if (
              (n[T.iD.ADSERVER_TARGETING] ||
                (n[T.iD.ADSERVER_TARGETING] = [
                  X(T.xS.BIDDER, "bidderCode"),
                  X(T.xS.AD_ID, "adId"),
                  X(T.xS.PRICE_BUCKET, z()),
                  X(T.xS.SIZE, "size"),
                  X(T.xS.DEAL, "dealId"),
                  X(T.xS.SOURCE, "source"),
                  X(T.xS.FORMAT, "mediaType"),
                  X(T.xS.ADOMAIN, K()),
                  X(T.xS.ACAT, Y()),
                  X(T.xS.DSP, Q()),
                  X(T.xS.CRID, J()),
                ]),
              "video" === e)
            ) {
              const e = n[T.iD.ADSERVER_TARGETING].slice();
              if (
                ((n[T.iD.ADSERVER_TARGETING] = e),
                [T.xS.UUID, T.xS.CACHE_ID].forEach((t) => {
                  void 0 === (0, v.I6)(e, (e) => e.key === t) &&
                    e.push(X(t, "videoCacheKey"));
                }),
                a.$W.getConfig("cache.url") &&
                  (!t || !1 !== A.u.get(t, "sendStandardTargeting")))
              ) {
                const t = (0, i.Dl)(a.$W.getConfig("cache.url"));
                void 0 === (0, v.I6)(e, (e) => e.key === T.xS.CACHE_HOST) &&
                  e.push(
                    X(T.xS.CACHE_HOST, function (e) {
                      var n;
                      return (
                        (null == e ||
                        null === (n = e.adserverTargeting) ||
                        void 0 === n
                          ? void 0
                          : n[T.xS.CACHE_HOST]) || t.hostname
                      );
                    })
                  );
              }
            }
            return n;
          }
          function ee(e, t, n, r) {
            var o = t[T.iD.ADSERVER_TARGETING];
            return (
              (n.size = n.getSize()),
              (o || []).forEach(function (o) {
                var s = o.key,
                  a = o.val;
                if (
                  (e[s] && (0, i.JE)("The key: " + s + " is being overwritten"),
                  (0, i.fp)(a))
                )
                  try {
                    a = a(n, r);
                  } catch (e) {
                    (0, i.vV)("bidmanager", "ERROR", e);
                  }
                ((void 0 === t.suppressEmptyKeys ||
                  !0 !== t.suppressEmptyKeys) &&
                  s !== T.xS.DEAL &&
                  s !== T.xS.ACAT &&
                  s !== T.xS.DSP &&
                  s !== T.xS.CRID) ||
                (!(0, i.xQ)(a) && null != a)
                  ? (e[s] = a)
                  : (0, i.fH)(
                      "suppressing empty key '" +
                        s +
                        "' from adserver targeting"
                    );
              }),
              e
            );
          }
          function te(e, t) {
            return (
              e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
              e[t.adUnitCode].bids.push(t),
              e
            );
          }
          function ne(e) {
            Object.assign(this, {
              getAuction(t) {
                let { auctionId: n } = t;
                if (null != n) return e().find((e) => e.getAuctionId() === n);
              },
              getAdUnit(t) {
                let { adUnitId: n } = t;
                if (null != n)
                  return e()
                    .flatMap((e) => e.getAdUnits())
                    .find((e) => e.adUnitId === n);
              },
              getMediaTypes(e) {
                let { adUnitId: t, requestId: n } = e;
                if (null != n) {
                  const e = this.getBidRequest({ requestId: n });
                  if (null != e && (null == t || e.adUnitId === t))
                    return e.mediaTypes;
                } else if (null != t) {
                  const e = this.getAdUnit({ adUnitId: t });
                  if (null != e) return e.mediaTypes;
                }
              },
              getBidderRequest(t) {
                let { requestId: n, bidderRequestId: i } = t;
                if (null != n || null != i) {
                  let t = e().flatMap((e) => e.getBidRequests());
                  return (
                    null != i && (t = t.filter((e) => e.bidderRequestId === i)),
                    null == n
                      ? t[0]
                      : t.find(
                          (e) =>
                            e.bids && null != e.bids.find((e) => e.bidId === n)
                        )
                  );
                }
              },
              getBidRequest(t) {
                let { requestId: n } = t;
                if (null != n)
                  return e()
                    .flatMap((e) => e.getBidRequests())
                    .flatMap((e) => e.bids)
                    .find((e) => e && e.bidId === n);
              },
              getOrtb2(e) {
                var t, n;
                return (
                  (null === (t = this.getBidderRequest(e)) || void 0 === t
                    ? void 0
                    : t.ortb2) ||
                  (null === (n = this.getAuction(e)) ||
                  void 0 === n ||
                  null === (n = n.getFPD()) ||
                  void 0 === n ||
                  null === (n = n.global) ||
                  void 0 === n
                    ? void 0
                    : n.ortb2)
                );
              },
            });
          }
          const ie = (function () {
            const e = (0, k.H)({
              startTime: (e) => e.end.then(() => e.getAuctionEnd()),
              ttl: (e) =>
                null == (0, S.S9)()
                  ? null
                  : e.end.then(
                      () =>
                        1e3 *
                        Math.max(
                          (0, S.S9)(),
                          ...e.getBidsReceived().map((e) => e.ttl)
                        )
                    ),
            });
            (0, S.lc)(() => e.refresh());
            const t = { onExpiry: e.onExpiry };
            function n(t) {
              for (const n of e) if (n.getAuctionId() === t) return n;
            }
            function r() {
              return e.toArray().flatMap((e) => e.getBidsReceived());
            }
            return (
              (t.addWinningBid = function (e) {
                const t = (0, C.BO)(e.metrics);
                t.checkpoint("bidWon"),
                  t.timeBetween("auctionEnd", "bidWon", "adserver.pending"),
                  t.timeBetween("requestBids", "bidWon", "adserver.e2e");
                const r = n(e.auctionId);
                r
                  ? r.addWinningBid(e)
                  : (0, i.JE)("Auction not found when adding winning bid");
              }),
              Object.entries({
                getAllWinningBids: { name: "getWinningBids" },
                getBidsRequested: { name: "getBidRequests" },
                getNoBids: {},
                getAdUnits: {},
                getBidsReceived: { pre: (e) => e.getAuctionStatus() === U },
                getAdUnitCodes: { post: i.hj },
              }).forEach((n) => {
                let [i, { name: r = i, pre: o, post: s }] = n;
                const a =
                    null == o ? (e) => e[r]() : (e) => (o(e) ? e[r]() : []),
                  c = null == s ? (e) => e : (e) => e.filter(s);
                t[i] = () => c(e.toArray().flatMap(a));
              }),
              (t.getAllBidsForAdUnitCode = function (e) {
                return r().filter((t) => t && t.adUnitCode === e);
              }),
              (t.createAuction = function (t) {
                const n = W(t);
                return (
                  (function (t) {
                    e.add(t);
                  })(n),
                  n
                );
              }),
              (t.findBidByAdId = function (e) {
                return r().find((t) => t.adId === e);
              }),
              (t.getStandardBidderAdServerTargeting = function () {
                return Z()[T.iD.ADSERVER_TARGETING];
              }),
              (t.setStatusForBids = function (e, i) {
                let r = t.findBidByAdId(e);
                if ((r && (r.status = i), r && i === T.tl.BID_TARGETING_SET)) {
                  const e = n(r.auctionId);
                  e && e.setBidTargeting(r);
                }
              }),
              (t.getLastAuctionId = function () {
                const t = e.toArray();
                return t.length && t[t.length - 1].getAuctionId();
              }),
              (t.clearAllAuctions = function () {
                e.clear();
              }),
              (t.index = new ne(() => e.toArray())),
              t
            );
          })();
        },
        7863: (e, t, n) => {
          n.d(t, { S9: () => l, cT: () => d, lc: () => u });
          var i = n(3272),
            r = n(1069);
          const o = "minBidCacheTTL";
          let s = 1,
            a = null;
          const c = [];
          function d(e) {
            return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : s);
          }
          function l() {
            return a;
          }
          function u(e) {
            c.push(e);
          }
          i.$W.getConfig("ttlBuffer", (e) => {
            "number" == typeof e.ttlBuffer
              ? (s = e.ttlBuffer)
              : (0, r.vV)("Invalid value for ttlBuffer", e.ttlBuffer);
          }),
            i.$W.getConfig(o, (e) => {
              const t = a;
              (a = null == e ? void 0 : e[o]),
                (a = "number" == typeof a ? a : null),
                t !== a && c.forEach((e) => e(a));
            });
        },
        2693: (e, t, n) => {
          n.d(t, { u: () => u });
          var i = n(433),
            r = n(1069),
            o = n(7873),
            s = n(8969);
          function a(e, t) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.add(e);
          }
          function c(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var d = new WeakSet();
          function l(e) {
            return null == e ? this.defaultScope : e;
          }
          const u = new (class {
            constructor(e, t) {
              a(this, d), (this.getSettings = e), (this.defaultScope = t);
            }
            get(e, t) {
              let n = this.getOwn(e, t);
              return void 0 === n && (n = this.getOwn(null, t)), n;
            }
            getOwn(e, t) {
              return (
                (e = c(d, this, l).call(this, e)),
                (0, i.A)(this.getSettings(), "".concat(e, ".").concat(t))
              );
            }
            getScopes() {
              return Object.keys(this.getSettings()).filter(
                (e) => e !== this.defaultScope
              );
            }
            settingsFor(e) {
              return (0, r.D9)(
                {},
                this.ownSettingsFor(null),
                this.ownSettingsFor(e)
              );
            }
            ownSettingsFor(e) {
              return (
                (e = c(d, this, l).call(this, e)), this.getSettings()[e] || {}
              );
            }
          })(() => (0, o.m)().bidderSettings || {}, s.iD.BD_SETTING_STANDARD);
        },
        3597: (e, t, n) => {
          n.d(t, { O: () => o });
          var i = n(1069);
          function r(e) {
            let {
              src: t = "client",
              bidder: n = "",
              bidId: r,
              transactionId: o,
              adUnitId: s,
              auctionId: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            var c = t,
              d = e || 0;
            Object.assign(this, {
              bidderCode: n,
              width: 0,
              height: 0,
              statusMessage: (function () {
                switch (d) {
                  case 0:
                    return "Pending";
                  case 1:
                    return "Bid available";
                  case 2:
                    return "Bid returned empty or error response";
                  case 3:
                    return "Bid timed out";
                }
              })(),
              adId: (0, i.s0)(),
              requestId: r,
              transactionId: o,
              adUnitId: s,
              auctionId: a,
              mediaType: "banner",
              source: c,
            }),
              (this.getStatusCode = function () {
                return d;
              }),
              (this.getSize = function () {
                return this.width + "x" + this.height;
              }),
              (this.getIdentifiers = function () {
                return {
                  src: this.source,
                  bidder: this.bidderCode,
                  bidId: this.requestId,
                  transactionId: this.transactionId,
                  adUnitId: this.adUnitId,
                  auctionId: this.auctionId,
                };
              });
          }
          function o(e, t) {
            return new r(e, t);
          }
        },
        3272: (e, t, n) => {
          n.d(t, { $W: () => b, Ov: () => f });
          var i = n(4705),
            r = n(6833),
            o = n(5901),
            s = n(1069),
            a = n(433),
            c = n(8969);
          function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          const l = "TRUE" === (0, s.Ez)(c.M).toUpperCase(),
            u = {},
            f = "random",
            g = {};
          (g[f] = !0), (g.fixed = !0);
          const p = f,
            h = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            };
          function m(e) {
            const t =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                ? {
                    priceGranularity: h.MEDIUM,
                    customPriceBucket: {},
                    mediaTypePriceGranularity: {},
                    bidderSequence: p,
                    auctionOptions: {},
                  }
                : {};
            function n(e) {
              return t[e];
            }
            function i(n, i) {
              t.hasOwnProperty(n) ||
                Object.defineProperty(e, n, { enumerable: !0 }),
                (t[n] = i);
            }
            const a = {
              publisherDomain: {
                set(e) {
                  null != e &&
                    (0, s.JE)(
                      "publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"
                    ),
                    i("publisherDomain", e);
                },
              },
              priceGranularity: {
                set(e) {
                  d(e) &&
                    ("string" == typeof e
                      ? i("priceGranularity", c(e) ? e : h.MEDIUM)
                      : (0, s.Qd)(e) &&
                        (i("customPriceBucket", e),
                        i("priceGranularity", h.CUSTOM),
                        (0, s.OG)("Using custom price granularity")));
                },
              },
              customPriceBucket: {},
              mediaTypePriceGranularity: {
                set(e) {
                  null != e &&
                    i(
                      "mediaTypePriceGranularity",
                      Object.keys(e).reduce(
                        (t, i) => (
                          d(e[i])
                            ? "string" == typeof e
                              ? (t[i] = c(e[i]) ? e[i] : n("priceGranularity"))
                              : (0, s.Qd)(e) &&
                                ((t[i] = e[i]),
                                (0, s.OG)(
                                  "Using custom price granularity for ".concat(
                                    i
                                  )
                                ))
                            : (0, s.JE)(
                                "Invalid price granularity for media type: ".concat(
                                  i
                                )
                              ),
                          t
                        ),
                        {}
                      )
                    );
                },
              },
              bidderSequence: {
                set(e) {
                  g[e]
                    ? i("bidderSequence", e)
                    : (0, s.JE)(
                        "Invalid order: ".concat(
                          e,
                          ". Bidder Sequence was not set."
                        )
                      );
                },
              },
              auctionOptions: {
                set(e) {
                  (function (e) {
                    if (!(0, s.Qd)(e))
                      return (0, s.JE)("Auction Options must be an object"), !1;
                    for (let t of Object.keys(e)) {
                      if (
                        "secondaryBidders" !== t &&
                        "suppressStaleRender" !== t &&
                        "suppressExpiredRender" !== t
                      )
                        return (
                          (0, s.JE)(
                            "Auction Options given an incorrect param: ".concat(
                              t
                            )
                          ),
                          !1
                        );
                      if ("secondaryBidders" === t) {
                        if (!(0, s.cy)(e[t]))
                          return (
                            (0, s.JE)(
                              "Auction Options ".concat(
                                t,
                                " must be of type Array"
                              )
                            ),
                            !1
                          );
                        if (!e[t].every(s.O8))
                          return (
                            (0, s.JE)(
                              "Auction Options ".concat(
                                t,
                                " must be only string"
                              )
                            ),
                            !1
                          );
                      } else if (
                        ("suppressStaleRender" === t ||
                          "suppressExpiredRender" === t) &&
                        !(0, s.Lm)(e[t])
                      )
                        return (
                          (0, s.JE)(
                            "Auction Options ".concat(
                              t,
                              " must be of type boolean"
                            )
                          ),
                          !1
                        );
                    }
                    return !0;
                  })(e) && i("auctionOptions", e);
                },
              },
            };
            return (
              Object.defineProperties(
                e,
                Object.fromEntries(
                  Object.entries(a).map((e) => {
                    let [r, o] = e;
                    return [
                      r,
                      Object.assign(
                        {
                          get: n.bind(null, r),
                          set: i.bind(null, r),
                          enumerable: t.hasOwnProperty(r),
                          configurable: !t.hasOwnProperty(r),
                        },
                        o
                      ),
                    ];
                  })
                )
              ),
              e
            );
            function c(e) {
              return (0, o.I6)(Object.keys(h), (t) => e === h[t]);
            }
            function d(e) {
              if (!e)
                return (
                  (0, s.vV)(
                    "Prebid Error: no value passed to `setPriceGranularity()`"
                  ),
                  !1
                );
              if ("string" == typeof e)
                c(e) ||
                  (0, s.JE)(
                    "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
                  );
              else if ((0, s.Qd)(e) && !(0, r.q)(e))
                return (
                  (0, s.vV)(
                    "Invalid custom price value passed to `setPriceGranularity()`"
                  ),
                  !1
                );
              return !0;
            }
          }
          const b = (function () {
            let e,
              t,
              n,
              r = [],
              c = null;
            function f() {
              e = {};
              let i = m({
                debug: l,
                bidderTimeout: 3e3,
                enableSendAllBids: true,
                useBidCache: false,
                deviceAccess: true,
                disableAjaxTimeout: false,
                maxNestedIframes: 10,
                maxBid: 5e3,
                userSync: { topics: u },
              });
              t &&
                A(
                  Object.keys(t).reduce(
                    (e, n) => (t[n] !== i[n] && (e[n] = i[n] || {}), e),
                    {}
                  )
                ),
                (t = i),
                (n = {});
            }
            function g() {
              if (c && n && (0, s.Qd)(n[c])) {
                let e = n[c];
                const i = new Set(Object.keys(t).concat(Object.keys(e)));
                return (0, o.A6)(i).reduce(
                  (n, i) => (
                    void 0 === e[i]
                      ? (n[i] = t[i])
                      : void 0 === t[i]
                      ? (n[i] = e[i])
                      : (0, s.Qd)(e[i])
                      ? (n[i] = (0, s.D9)({}, t[i], e[i]))
                      : (n[i] = e[i]),
                    n
                  ),
                  {}
                );
              }
              return Object.assign({}, t);
            }
            const [p, h] = [
                g,
                function () {
                  const e = g();
                  return (
                    Object.defineProperty(e, "ortb2", {
                      get: function () {
                        throw new Error(
                          "invalid access to 'orbt2' config - use request parameters instead"
                        );
                      },
                    }),
                    e
                  );
                },
              ].map(
                (e) =>
                  function () {
                    if (
                      arguments.length <= 1 &&
                      "function" !=
                        typeof (arguments.length <= 0 ? void 0 : arguments[0])
                    ) {
                      const t = arguments.length <= 0 ? void 0 : arguments[0];
                      return t ? (0, a.A)(e(), t) : g();
                    }
                    return E(...arguments);
                  }
              ),
              [b, v] = [h, p].map(
                (e) =>
                  function () {
                    let t = e(...arguments);
                    return t && "object" == typeof t && (t = (0, s.Go)(t)), t;
                  }
              );
            function y(n) {
              if (!(0, s.Qd)(n))
                return void (0, s.vV)("setConfig options must be an object");
              let i = Object.keys(n),
                r = {};
              i.forEach((i) => {
                let o = n[i];
                (0, s.Qd)(e[i]) &&
                  (0, s.Qd)(o) &&
                  (o = Object.assign({}, e[i], o));
                try {
                  r[i] = t[i] = o;
                } catch (e) {
                  (0, s.JE)(
                    "Cannot set config for property ".concat(i, " : "),
                    e
                  );
                }
              }),
                A(r);
            }
            function E(e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = t;
              if (
                ("string" != typeof e && ((i = e), (e = "*"), (n = t || {})),
                "function" != typeof i)
              )
                return void (0, s.vV)("listener must be a function");
              const o = { topic: e, callback: i };
              return (
                r.push(o),
                n.init && i("*" === e ? h() : { [e]: h(e) }),
                function () {
                  r.splice(r.indexOf(o), 1);
                }
              );
            }
            function A(e) {
              const t = Object.keys(e);
              r
                .filter((e) => (0, o.mK)(t, e.topic))
                .forEach((t) => {
                  t.callback({ [t.topic]: e[t.topic] });
                }),
                r.filter((e) => "*" === e.topic).forEach((t) => t.callback(e));
            }
            function w(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                !(function (e) {
                  if (!(0, s.Qd)(e))
                    throw "setBidderConfig bidder options must be an object";
                  if (!Array.isArray(e.bidders) || !e.bidders.length)
                    throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                  if (!(0, s.Qd)(e.config))
                    throw "setBidderConfig bidder options must contain a config object";
                })(e),
                  e.bidders.forEach((i) => {
                    n[i] || (n[i] = m({}, !1)),
                      Object.keys(e.config).forEach((r) => {
                        let o = e.config[r];
                        const a = n[i][r];
                        if ((0, s.Qd)(o) && (null == a || (0, s.Qd)(a))) {
                          const e = t ? s.D9 : Object.assign;
                          n[i][r] = e({}, a || {}, o);
                        } else n[i][r] = o;
                      });
                  });
              } catch (e) {
                (0, s.vV)(e);
              }
            }
            function I(e, t) {
              c = e;
              try {
                return t();
              } finally {
                T();
              }
            }
            function T() {
              c = null;
            }
            return (
              f(),
              {
                getCurrentBidder: function () {
                  return c;
                },
                resetBidder: T,
                getConfig: h,
                getAnyConfig: p,
                readConfig: b,
                readAnyConfig: v,
                setConfig: y,
                mergeConfig: function (e) {
                  if (!(0, s.Qd)(e))
                    return void (0, s.vV)(
                      "mergeConfig input must be an object"
                    );
                  const t = (0, s.D9)(g(), e);
                  return (
                    y(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? d(Object(n), !0).forEach(function (t) {
                                (0, i.A)(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : d(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({}, t)
                    ),
                    t
                  );
                },
                setDefaults: function (n) {
                  (0, s.Qd)(e)
                    ? (Object.assign(e, n), Object.assign(t, n))
                    : (0, s.vV)("defaults must be an object");
                },
                resetConfig: f,
                runWithBidder: I,
                callbackWithBidder: function (e) {
                  return function (t) {
                    return function () {
                      if ("function" == typeof t) {
                        for (
                          var n = arguments.length, i = new Array(n), r = 0;
                          r < n;
                          r++
                        )
                          i[r] = arguments[r];
                        return I(e, t.bind(this, ...i));
                      }
                      (0, s.JE)(
                        "config.callbackWithBidder callback is not a function"
                      );
                    };
                  };
                },
                setBidderConfig: w,
                getBidderConfig: function () {
                  return n;
                },
                mergeBidderConfig: function (e) {
                  return w(e, !0);
                },
              }
            );
          })();
        },
        6916: (e, t, n) => {
          n.d(t, {
            SL: () => B,
            ad: () => I,
            mW: () => A,
            o2: () => O,
            t6: () => w,
          });
          var i = n(4705),
            r = n(1069),
            o = n(5555),
            s = n(3272);
          function a(e, t, n) {
            c(e, t), t.set(e, n);
          }
          function c(e, t) {
            if (t.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          }
          function d(e, t) {
            return e.get(u(e, t));
          }
          function l(e, t, n) {
            return e.set(u(e, t), n), n;
          }
          function u(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          Object.freeze({});
          var f = new WeakMap(),
            g = new WeakMap(),
            p = new WeakMap(),
            h = new WeakMap(),
            m = new WeakMap(),
            b = new WeakMap(),
            v = new WeakSet();
          class y {
            constructor() {
              var e, t;
              c((e = this), (t = v)),
                t.add(e),
                a(this, f, void 0),
                a(this, g, void 0),
                a(this, p, void 0),
                a(this, h, void 0),
                a(this, m, !0),
                a(this, b, void 0),
                (0, i.A)(this, "generatedTime", void 0),
                (0, i.A)(this, "hashFields", void 0),
                this.reset();
            }
            reset() {
              l(p, this, (0, o.v)()),
                l(f, this, !1),
                l(g, this, null),
                l(h, this, !1),
                (this.generatedTime = null);
            }
            enable() {
              l(f, this, !0);
            }
            get enabled() {
              return d(f, this);
            }
            get ready() {
              return d(h, this);
            }
            get promise() {
              return d(h, this)
                ? o.k.resolve(d(g, this))
                : (d(f, this) || u(v, this, E).call(this, null),
                  d(p, this).promise);
            }
            setConsentData(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : (0, r.vE)();
              (this.generatedTime = t),
                l(m, this, !0),
                u(v, this, E).call(this, e);
            }
            getConsentData() {
              return d(g, this);
            }
            get hash() {
              return (
                d(m, this) &&
                  (l(
                    b,
                    this,
                    (0, r.PB)(
                      JSON.stringify(
                        d(g, this) && this.hashFields
                          ? this.hashFields.map((e) => d(g, this)[e])
                          : d(g, this)
                      )
                    )
                  ),
                  l(m, this, !1)),
                d(b, this)
              );
            }
          }
          function E(e) {
            l(h, this, !0), l(g, this, e), d(p, this).resolve(e);
          }
          const A = new (class extends y {
              constructor() {
                super(...arguments),
                  (0, i.A)(this, "hashFields", [
                    "gdprApplies",
                    "consentString",
                  ]);
              }
              getConsentMeta() {
                const e = this.getConsentData();
                if (e && e.vendorData && this.generatedTime)
                  return {
                    gdprApplies: e.gdprApplies,
                    consentStringSize: (0, r.O8)(e.vendorData.tcString)
                      ? e.vendorData.tcString.length
                      : 0,
                    generatedAt: this.generatedTime,
                    apiVersion: e.apiVersion,
                  };
              }
            })(),
            w = new (class extends y {
              getConsentMeta() {
                if (this.getConsentData() && this.generatedTime)
                  return { generatedAt: this.generatedTime };
              }
            })(),
            I = new (class extends y {
              constructor() {
                super(...arguments),
                  (0, i.A)(this, "hashFields", [
                    "applicableSections",
                    "gppString",
                  ]);
              }
              getConsentMeta() {
                if (this.getConsentData() && this.generatedTime)
                  return { generatedAt: this.generatedTime };
              }
            })(),
            T = (() => {
              function e() {
                return !!s.$W.getConfig("coppa");
              }
              return {
                getCoppa: e,
                getConsentData: e,
                getConsentMeta: e,
                reset() {},
                get promise() {
                  return o.k.resolve(e());
                },
                get hash() {
                  return e() ? "1" : "0";
                },
              };
            })(),
            O = (function () {
              const e = {},
                t = {},
                n = {};
              return {
                register(i, r, o) {
                  o &&
                    (((e[r] = e[r] || {})[i] = o),
                    t.hasOwnProperty(r)
                      ? t[r] !== o && (t[r] = n)
                      : (t[r] = o));
                },
                get(i) {
                  const r = { modules: e[i] || {} };
                  return (
                    t.hasOwnProperty(i) && t[i] !== n && (r.gvlid = t[i]), r
                  );
                },
              };
            })(),
            C = { gdpr: A, usp: w, gpp: I, coppa: T };
          const B = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : C;
            return (
              (e = Object.entries(e)),
              Object.assign(
                {
                  get promise() {
                    return o.k
                      .all(
                        e.map((e) => {
                          let [t, n] = e;
                          return n.promise.then((e) => [t, e]);
                        })
                      )
                      .then((e) => Object.fromEntries(e));
                  },
                  get hash() {
                    return (0, r.PB)(
                      e
                        .map((e) => {
                          let [t, n] = e;
                          return n.hash;
                        })
                        .join(":")
                    );
                  },
                },
                Object.fromEntries(
                  ["getConsentData", "getConsentMeta", "reset"].map((t) => {
                    return [
                      t,
                      ((n = t),
                      function () {
                        return Object.fromEntries(
                          e.map((e) => {
                            let [t, i] = e;
                            return [t, i[n]()];
                          })
                        );
                      }),
                    ];
                    var n;
                  })
                )
              )
            );
          })();
        },
        8969: (e, t, n) => {
          n.d(t, {
            IY: () => A,
            M: () => r,
            RW: () => g,
            Tf: () => h,
            UE: () => d,
            XQ: () => o,
            Zh: () => u,
            _B: () => y,
            as: () => a,
            cA: () => c,
            h0: () => m,
            iD: () => i,
            jO: () => b,
            nl: () => E,
            oA: () => v,
            qY: () => s,
            tl: () => p,
            x5: () => f,
            xS: () => l,
          });
          const i = {
              PL_CODE: "code",
              PL_SIZE: "sizes",
              PL_BIDS: "bids",
              BD_BIDDER: "bidder",
              BD_ID: "paramsd",
              BD_PL_ID: "placementId",
              ADSERVER_TARGETING: "adserverTargeting",
              BD_SETTING_STANDARD: "standard",
            },
            r = "pbjs_debug",
            o = { GOOD: 1 },
            s = {
              AUCTION_INIT: "auctionInit",
              AUCTION_TIMEOUT: "auctionTimeout",
              AUCTION_END: "auctionEnd",
              BID_ADJUSTMENT: "bidAdjustment",
              BID_TIMEOUT: "bidTimeout",
              BID_REQUESTED: "bidRequested",
              BID_RESPONSE: "bidResponse",
              BID_REJECTED: "bidRejected",
              NO_BID: "noBid",
              SEAT_NON_BID: "seatNonBid",
              BID_WON: "bidWon",
              BIDDER_DONE: "bidderDone",
              BIDDER_ERROR: "bidderError",
              SET_TARGETING: "setTargeting",
              BEFORE_REQUEST_BIDS: "beforeRequestBids",
              BEFORE_BIDDER_HTTP: "beforeBidderHttp",
              REQUEST_BIDS: "requestBids",
              ADD_AD_UNITS: "addAdUnits",
              AD_RENDER_FAILED: "adRenderFailed",
              AD_RENDER_SUCCEEDED: "adRenderSucceeded",
              TCF2_ENFORCEMENT: "tcf2Enforcement",
              AUCTION_DEBUG: "auctionDebug",
              BID_VIEWABLE: "bidViewable",
              STALE_RENDER: "staleRender",
              EXPIRED_RENDER: "expiredRender",
              BILLABLE_EVENT: "billableEvent",
              BID_ACCEPTED: "bidAccepted",
              RUN_PAAPI_AUCTION: "paapiRunAuction",
              PBS_ANALYTICS: "pbsAnalytics",
              PAAPI_BID: "paapiBid",
              PAAPI_NO_BID: "paapiNoBid",
              PAAPI_ERROR: "paapiError",
            },
            a = {
              PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
              NO_AD: "noAd",
              EXCEPTION: "exception",
              CANNOT_FIND_AD: "cannotFindAd",
              MISSING_DOC_OR_ADID: "missingDocOrAdid",
            },
            c = { bidWon: "adUnitCode" },
            d = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            },
            l = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              SOURCE: "hb_source",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_ID: "hb_cache_id",
              CACHE_HOST: "hb_cache_host",
              ADOMAIN: "hb_adomain",
              ACAT: "hb_acat",
              CRID: "hb_crid",
              DSP: "hb_dsp",
            },
            u = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_HOST: "hb_cache_host",
            },
            f = {
              title: "hb_native_title",
              body: "hb_native_body",
              body2: "hb_native_body2",
              privacyLink: "hb_native_privacy",
              privacyIcon: "hb_native_privicon",
              sponsoredBy: "hb_native_brand",
              image: "hb_native_image",
              icon: "hb_native_icon",
              clickUrl: "hb_native_linkurl",
              displayUrl: "hb_native_displayurl",
              cta: "hb_native_cta",
              rating: "hb_native_rating",
              address: "hb_native_address",
              downloads: "hb_native_downloads",
              likes: "hb_native_likes",
              phone: "hb_native_phone",
              price: "hb_native_price",
              salePrice: "hb_native_saleprice",
              rendererUrl: "hb_renderer_url",
              adTemplate: "hb_adTemplate",
            },
            g = {
              SRC: "s2s",
              DEFAULT_ENDPOINT:
                "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
              SYNCED_BIDDERS_KEY: "pbjsSyncs",
            },
            p = {
              BID_TARGETING_SET: "targetingSet",
              RENDERED: "rendered",
              BID_REJECTED: "bidRejected",
            },
            h = {
              INVALID: "Bid has missing or invalid properties",
              INVALID_REQUEST_ID: "Invalid request ID",
              BIDDER_DISALLOWED:
                "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
              FLOOR_NOT_MET: "Bid does not meet price floor",
              CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
              DSA_REQUIRED:
                "Bid does not provide required DSA transparency info",
              DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
              PRICE_TOO_HIGH: "Bid price exceeds maximum value",
            },
            m = {
              body: "desc",
              body2: "desc2",
              sponsoredBy: "sponsored",
              cta: "ctatext",
              rating: "rating",
              address: "address",
              downloads: "downloads",
              likes: "likes",
              phone: "phone",
              price: "price",
              salePrice: "saleprice",
              displayUrl: "displayurl",
            },
            b = {
              sponsored: 1,
              desc: 2,
              rating: 3,
              likes: 4,
              downloads: 5,
              price: 6,
              saleprice: 7,
              phone: 8,
              address: 9,
              desc2: 10,
              displayurl: 11,
              ctatext: 12,
            },
            v = { ICON: 1, MAIN: 3 },
            y = [
              "privacyIcon",
              "clickUrl",
              "sendTargetingKeys",
              "adTemplate",
              "rendererUrl",
              "type",
            ],
            E = {
              REQUEST: "Prebid Request",
              RESPONSE: "Prebid Response",
              NATIVE: "Prebid Native",
              EVENT: "Prebid Event",
            },
            A = "__pb_locator__";
        },
        6833: (e, t, n) => {
          n.d(t, { j: () => f, q: () => p });
          var i = n(5901),
            r = n(1069),
            o = n(3272);
          const s = 2,
            a = { buckets: [{ max: 5, increment: 0.5 }] },
            c = { buckets: [{ max: 20, increment: 0.1 }] },
            d = { buckets: [{ max: 20, increment: 0.01 }] },
            l = {
              buckets: [
                { max: 3, increment: 0.01 },
                { max: 8, increment: 0.05 },
                { max: 20, increment: 0.5 },
              ],
            },
            u = {
              buckets: [
                { max: 5, increment: 0.05 },
                { max: 10, increment: 0.1 },
                { max: 20, increment: 0.5 },
              ],
            };
          function f(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              i = parseFloat(e);
            return (
              isNaN(i) && (i = ""),
              {
                low: "" === i ? "" : g(e, a, n),
                med: "" === i ? "" : g(e, c, n),
                high: "" === i ? "" : g(e, d, n),
                auto: "" === i ? "" : g(e, u, n),
                dense: "" === i ? "" : g(e, l, n),
                custom: "" === i ? "" : g(e, t, n),
              }
            );
          }
          function g(e, t, n) {
            let a = "";
            if (!p(t)) return a;
            const c = t.buckets.reduce((e, t) => (e.max > t.max ? e : t), {
              max: 0,
            });
            let d = 0,
              l = (0, i.I6)(t.buckets, (t) => {
                if (e > c.max * n) {
                  let e = t.precision;
                  void 0 === e && (e = s), (a = (t.max * n).toFixed(e));
                } else {
                  if (e <= t.max * n && e >= d * n) return (t.min = d), t;
                  d = t.max;
                }
              });
            return (
              l &&
                (a = (function (e, t, n) {
                  const i = void 0 !== t.precision ? t.precision : s,
                    a = t.increment * n,
                    c = t.min * n;
                  let d = Math.floor,
                    l = o.$W.getConfig("cpmRoundingFunction");
                  "function" == typeof l && (d = l);
                  let u,
                    f,
                    g = Math.pow(10, i + 2),
                    p = (e * g - c * g) / (a * g);
                  try {
                    u = d(p) * a + c;
                  } catch (e) {
                    f = !0;
                  }
                  (f || "number" != typeof u) &&
                    ((0, r.JE)("Invalid rounding function passed in config"),
                    (u = Math.floor(p) * a + c));
                  return (u = Number(u.toFixed(10))), u.toFixed(i);
                })(e, l, n)),
              a
            );
          }
          function p(e) {
            if ((0, r.Im)(e) || !e.buckets || !Array.isArray(e.buckets))
              return !1;
            let t = !0;
            return (
              e.buckets.forEach((e) => {
                (e.max && e.increment) || (t = !1);
              }),
              t
            );
          }
        },
        6031: (e, t, n) => {
          n.d(t, { H: () => a, k: () => s });
          var i = n(5555),
            r = n(1069),
            o = n(4595);
          const s = (0, n(9214).A_)("sync", function (e) {
              return o.G;
            }),
            a = (function () {
              const e = {};
              return function (t) {
                const n = s(t);
                return (
                  e.hasOwnProperty(n) ||
                    (e[n] = new i.k((e) => {
                      const t = (0, r.CA)();
                      (t.srcdoc = "<script>".concat(n, "</script>")),
                        (t.onload = () => e(t.contentWindow.render)),
                        document.body.appendChild(t);
                    })),
                  e[n]
                );
              };
            })();
        },
        5023: (e, t, n) => {
          n.d(t, { AU: () => m, Ic: () => y, kQ: () => v, on: () => h });
          var i = n(1069),
            r = n(8969),
            o = n(6853),
            s = n(3272);
          const a = "eventHistoryTTL";
          let c = null;
          const d = (0, o.H)({ monotonic: !0, ttl: () => c });
          s.$W.getConfig(a, (e) => {
            var t;
            const n = c;
            (e = null === (t = e) || void 0 === t ? void 0 : t[a]),
              (c = "number" == typeof e ? 1e3 * e : null),
              n !== c && d.refresh();
          });
          let l = Array.prototype.slice,
            u = Array.prototype.push,
            f = Object.values(r.qY);
          const g = r.cA,
            p = (function () {
              let e = {},
                t = {};
              function n(e) {
                return f.includes(e);
              }
              return (
                (t.has = n),
                (t.on = function (t, r, o) {
                  if (n(t)) {
                    let n = e[t] || { que: [] };
                    o
                      ? ((n[o] = n[o] || { que: [] }), n[o].que.push(r))
                      : n.que.push(r),
                      (e[t] = n);
                  } else
                    i.vV(
                      "Wrong event name : " + t + " Valid event names :" + f
                    );
                }),
                (t.emit = function (t) {
                  !(function (t, n) {
                    i.OG("Emitting event for: " + t);
                    let r = n[0] || {},
                      o = r[g[t]],
                      s = e[t] || { que: [] };
                    var a = Object.keys(s);
                    let c = [];
                    d.add({ eventType: t, args: r, id: o, elapsedTime: i.V() }),
                      o && a.includes(o) && u.apply(c, s[o].que),
                      u.apply(c, s.que),
                      (c || []).forEach(function (e) {
                        if (e)
                          try {
                            e.apply(null, n);
                          } catch (e) {
                            i.vV("Error executing handler:", "events.js", e, t);
                          }
                      });
                  })(t, l.call(arguments, 1));
                }),
                (t.off = function (t, n, r) {
                  let o = e[t];
                  i.Im(o) ||
                    (i.Im(o.que) && i.Im(o[r])) ||
                    (r && (i.Im(o[r]) || i.Im(o[r].que))) ||
                    (r
                      ? (o[r].que || []).forEach(function (e) {
                          let t = o[r].que;
                          e === n && t.splice(t.indexOf(e), 1);
                        })
                      : (o.que || []).forEach(function (e) {
                          let t = o.que;
                          e === n && t.splice(t.indexOf(e), 1);
                        }),
                    (e[t] = o));
                }),
                (t.get = function () {
                  return e;
                }),
                (t.addEvents = function (e) {
                  f = f.concat(e);
                }),
                (t.getEvents = function () {
                  return d.toArray().map((e) => Object.assign({}, e));
                }),
                t
              );
            })();
          i.cD(p.emit.bind(p));
          const {
            on: h,
            off: m,
            get: b,
            getEvents: v,
            emit: y,
            addEvents: E,
            has: A,
          } = p;
        },
        3858: (e, t, n) => {
          n.d(t, { Dy: () => r, O$: () => s, i8: () => o });
          var i = n(1069);
          const r = ["dooh", "app", "site"];
          function o(e) {
            return function (t) {
              return (
                r.reduce(
                  (n, r) => (
                    s(t, r) &&
                      (null != n
                        ? ((0, i.JE)(
                            ""
                              .concat(e, " specifies both '")
                              .concat(n, "' and '")
                              .concat(r, "'; dropping the latter.")
                          ),
                          delete t[r])
                        : (n = r)),
                    n
                  ),
                  null
                ),
                t
              );
            };
          }
          function s(e, t) {
            return null != e[t] && Object.keys(e[t]).length > 0;
          }
        },
        9214: (e, t, n) => {
          n.d(t, { A_: () => s, Y6: () => d, Yn: () => c });
          var i = n(8128),
            r = n.n(i),
            o = n(5555);
          let s = r()({ ready: r().SYNC | r().ASYNC | r().QUEUE });
          const a = (0, o.v)();
          s.ready = (() => {
            const e = s.ready;
            return function () {
              try {
                return e.apply(s, arguments);
              } finally {
                a.resolve();
              }
            };
          })();
          a.promise;
          const c = s.get;
          function d(e, t) {
            return (
              Object.defineProperties(
                t,
                Object.fromEntries(
                  ["before", "after", "getHooks", "removeAll"].map((t) => [
                    t,
                    { get: () => e[t] },
                  ])
                )
              ),
              t
            );
          }
        },
        1371: (e, t, n) => {
          n.d(t, { D4: () => o, G_: () => r, LM: () => s, s6: () => i });
          const i = "native",
            r = "video",
            o = "banner",
            s = "adpod";
        },
        2449: (e, t, n) => {
          n.d(t, {
            Bm: () => T,
            IX: () => j,
            Nh: () => p,
            Xj: () => x,
            Zj: () => B,
            gs: () => C,
            l6: () => E,
            mT: () => g,
            nk: () => w,
            vO: () => O,
            yl: () => D,
          });
          var i = n(4705),
            r = n(1069),
            o = n(5901),
            s = n(6881),
            a = n(8969),
            c = n(1371),
            d = n(9075),
            l = n(6031);
          function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          function f(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    (0, i.A)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const g = [],
            p = Object.keys(a.x5).map((e) => a.x5[e]),
            h = {
              image: {
                ortb: {
                  ver: "1.2",
                  assets: [
                    {
                      required: 1,
                      id: 1,
                      img: { type: 3, wmin: 100, hmin: 100 },
                    },
                    { required: 1, id: 2, title: { len: 140 } },
                    { required: 1, id: 3, data: { type: 1 } },
                    { required: 0, id: 4, data: { type: 2 } },
                    {
                      required: 0,
                      id: 5,
                      img: { type: 1, wmin: 20, hmin: 20 },
                    },
                  ],
                },
                image: { required: !0 },
                title: { required: !0 },
                sponsoredBy: { required: !0 },
                clickUrl: { required: !0 },
                body: { required: !1 },
                icon: { required: !1 },
              },
            },
            m = W(a.h0),
            b = W(a.jO),
            v = { img: 1, js: 2, 1: "img", 2: "js" },
            y = {
              impression: 1,
              "viewable-mrc50": 2,
              "viewable-mrc100": 3,
              "viewable-video50": 4,
            };
          function E(e) {
            return e.native && "object" == typeof e.native;
          }
          function A(e) {
            if (
              (e &&
                e.type &&
                (function (e) {
                  if (!e || !(0, o.mK)(Object.keys(h), e))
                    return (
                      (0, r.vV)("".concat(e, " nativeParam is not supported")),
                      !1
                    );
                  return !0;
                })(e.type) &&
                (e = h[e.type]),
              !e || !e.ortb || I(e.ortb))
            )
              return e;
          }
          function w(e) {
            e.forEach((e) => {
              var t;
              const n =
                e.nativeParams ||
                (null == e || null === (t = e.mediaTypes) || void 0 === t
                  ? void 0
                  : t.native);
              n && (e.nativeParams = A(n)),
                e.nativeParams &&
                  (e.nativeOrtbRequest =
                    e.nativeParams.ortb ||
                    (function (e) {
                      if (!e && !(0, r.Qd)(e))
                        return void (0, r.vV)(
                          "Native assets object is empty or not an object: ",
                          e
                        );
                      const t = { ver: "1.2", assets: [] };
                      for (let n in e) {
                        if (a._B.includes(n)) continue;
                        if (!a.x5.hasOwnProperty(n)) {
                          (0, r.vV)(
                            "Unrecognized native asset code: ".concat(
                              n,
                              ". Asset will be ignored."
                            )
                          );
                          continue;
                        }
                        if ("privacyLink" === n) {
                          t.privacy = 1;
                          continue;
                        }
                        const i = e[n];
                        let o = 0;
                        i.required &&
                          (0, r.Lm)(i.required) &&
                          (o = Number(i.required));
                        const s = { id: t.assets.length, required: o };
                        if (n in a.h0)
                          (s.data = { type: a.jO[a.h0[n]] }),
                            i.len && (s.data.len = i.len);
                        else if ("icon" === n || "image" === n) {
                          if (
                            ((s.img = {
                              type: "icon" === n ? a.oA.ICON : a.oA.MAIN,
                            }),
                            i.aspect_ratios)
                          )
                            if ((0, r.cy)(i.aspect_ratios))
                              if (i.aspect_ratios.length) {
                                const { min_width: e, min_height: t } =
                                  i.aspect_ratios[0];
                                (0, r.Fq)(e) && (0, r.Fq)(t)
                                  ? ((s.img.wmin = e), (s.img.hmin = t))
                                  : (0, r.vV)(
                                      "image.aspect_ratios min_width or min_height are invalid: ",
                                      e,
                                      t
                                    );
                                const n = i.aspect_ratios
                                  .filter(
                                    (e) => e.ratio_width && e.ratio_height
                                  )
                                  .map((e) =>
                                    ""
                                      .concat(e.ratio_width, ":")
                                      .concat(e.ratio_height)
                                  );
                                n.length > 0 &&
                                  (s.img.ext = { aspectratios: n });
                              } else
                                (0, r.vV)(
                                  "image.aspect_ratios was passed, but it's empty:",
                                  i.aspect_ratios
                                );
                            else
                              (0, r.vV)(
                                "image.aspect_ratios was passed, but it's not a an array:",
                                i.aspect_ratios
                              );
                          i.sizes &&
                            (2 === i.sizes.length &&
                            (0, r.Fq)(i.sizes[0]) &&
                            (0, r.Fq)(i.sizes[1])
                              ? ((s.img.w = i.sizes[0]),
                                (s.img.h = i.sizes[1]),
                                delete s.img.hmin,
                                delete s.img.wmin)
                              : (0, r.vV)(
                                  "image.sizes was passed, but its value is not an array of integers:",
                                  i.sizes
                                ));
                        } else
                          "title" === n
                            ? (s.title = { len: i.len || 140 })
                            : "ext" === n && ((s.ext = i), delete s.required);
                        t.assets.push(s);
                      }
                      return t;
                    })(e.nativeParams));
            });
          }
          function I(e) {
            const t = e.assets;
            if (!Array.isArray(t) || 0 === t.length)
              return (
                (0, r.vV)(
                  "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                  t
                ),
                !1
              );
            const n = t.map((e) => e.id);
            return t.length !== new Set(n).size ||
              n.some((e) => e !== parseInt(e, 10))
              ? ((0, r.vV)(
                  "each asset object must have 'id' property, it must be unique and it must be an integer"
                ),
                !1)
              : e.hasOwnProperty("eventtrackers") &&
                !Array.isArray(e.eventtrackers)
              ? ((0, r.vV)(
                  "ortb.eventtrackers is not an array. Eventtrackers: ",
                  e.eventtrackers
                ),
                !1)
              : t.every((e) =>
                  (function (e) {
                    if (!(0, r.Qd)(e))
                      return (
                        (0, r.vV)(
                          "asset must be an object. Provided asset: ",
                          e
                        ),
                        !1
                      );
                    if (e.img) {
                      if (!(0, r.Et)(e.img.w) && !(0, r.Et)(e.img.wmin))
                        return (
                          (0, r.vV)(
                            "for img asset there must be 'w' or 'wmin' property"
                          ),
                          !1
                        );
                      if (!(0, r.Et)(e.img.h) && !(0, r.Et)(e.img.hmin))
                        return (
                          (0, r.vV)(
                            "for img asset there must be 'h' or 'hmin' property"
                          ),
                          !1
                        );
                    } else if (e.title) {
                      if (!(0, r.Et)(e.title.len))
                        return (
                          (0, r.vV)(
                            "for title asset there must be 'len' property defined"
                          ),
                          !1
                        );
                    } else if (e.data) {
                      if (!(0, r.Et)(e.data.type))
                        return (
                          (0, r.vV)(
                            "for data asset 'type' property must be a number"
                          ),
                          !1
                        );
                    } else if (
                      e.video &&
                      !(
                        Array.isArray(e.video.mimes) &&
                        Array.isArray(e.video.protocols) &&
                        (0, r.Et)(e.video.minduration) &&
                        (0, r.Et)(e.video.maxduration)
                      )
                    )
                      return (
                        (0, r.vV)("video asset is not properly configured"), !1
                      );
                    return !0;
                  })(e)
                );
          }
          function T(e) {
            var t;
            let { index: n = s.n.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const i = n.getAdUnit(e);
            if (!i) return !1;
            let a = i.nativeOrtbRequest;
            return (function (e, t) {
              var n;
              if (null == e || null === (n = e.link) || void 0 === n || !n.url)
                return (
                  (0, r.vV)(
                    "native response doesn't have 'link' property. Ortb response: ",
                    e
                  ),
                  !1
                );
              let i = t.assets.filter((e) => 1 === e.required).map((e) => e.id),
                s = e.assets.map((e) => e.id);
              const a = i.every((e) => (0, o.mK)(s, e));
              a ||
                (0, r.vV)(
                  "didn't receive a bid with all required assets. Required ids: "
                    .concat(i, ", but received ids in response: ")
                    .concat(s)
                );
              return a;
            })(
              (null === (t = e.native) || void 0 === t ? void 0 : t.ortb) ||
                P(e.native, a),
              a
            );
          }
          function O(e, t) {
            const n = t.native.ortb || N(t.native);
            return (
              "click" === e.action
                ? (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      { fetchURL: n = r.z$ } =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    if (t) {
                      var i;
                      const r = (e.assets || [])
                          .filter((e) => e.link)
                          .reduce((e, t) => ((e[t.id] = t.link), e), {}),
                        o =
                          (null === (i = e.link) || void 0 === i
                            ? void 0
                            : i.clicktrackers) || [];
                      let s = r[t],
                        a = o;
                      s && (a = s.clicktrackers || []), a.forEach((e) => n(e));
                    } else {
                      var o;
                      (
                        (null === (o = e.link) || void 0 === o
                          ? void 0
                          : o.clicktrackers) || []
                      ).forEach((e) => n(e));
                    }
                  })(n, null == e ? void 0 : e.assetId)
                : (function (e) {
                    let {
                      runMarkup: t = (e) => (0, r.ro)(e),
                      fetchURL: n = r.z$,
                    } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const i = (e.eventtrackers || []).filter(
                      (e) => e.event === y.impression
                    );
                    let { img: o, js: s } = i.reduce(
                      (e, t) => (
                        v.hasOwnProperty(t.method) &&
                          e[v[t.method]].push(t.url),
                        e
                      ),
                      { img: [], js: [] }
                    );
                    e.imptrackers && (o = o.concat(e.imptrackers));
                    o.forEach((e) => n(e)),
                      (s = s.map((e) =>
                        '<script async src="'.concat(e, '"></script>')
                      )),
                      e.jstracker && (s = s.concat([e.jstracker]));
                    s.length && t(s.join("\n"));
                  })(n),
              e.action
            );
          }
          function C(e, t) {
            var n;
            const i = null == t ? void 0 : t.nativeOrtbRequest,
              r = null === (n = e.native) || void 0 === n ? void 0 : n.ortb;
            if (i && r) {
              const t = (function (e, t) {
                var n;
                const i = {},
                  r = (null == t ? void 0 : t.assets) || [];
                (i.clickUrl =
                  null === (n = e.link) || void 0 === n ? void 0 : n.url),
                  (i.privacyLink = e.privacy);
                for (const t of (null == e ? void 0 : e.assets) || []) {
                  const e = r.find((e) => t.id === e.id);
                  if (t.title) i.title = t.title.text;
                  else if (t.img) {
                    var o;
                    i[
                      (null == e || null === (o = e.img) || void 0 === o
                        ? void 0
                        : o.type) === a.oA.MAIN
                        ? "image"
                        : "icon"
                    ] = { url: t.img.url, width: t.img.w, height: t.img.h };
                  } else if (t.data) {
                    var s;
                    i[
                      m[
                        b[
                          null == e || null === (s = e.data) || void 0 === s
                            ? void 0
                            : s.type
                        ]
                      ]
                    ] = t.data.value;
                  }
                }
                i.impressionTrackers = [];
                let c = [];
                e.imptrackers && i.impressionTrackers.push(...e.imptrackers);
                for (const t of (null == e ? void 0 : e.eventtrackers) || [])
                  t.event === y.impression &&
                    t.method === v.img &&
                    i.impressionTrackers.push(t.url),
                    t.event === y.impression &&
                      t.method === v.js &&
                      c.push(t.url);
                (c = c.map((e) =>
                  '<script async src="'.concat(e, '"></script>')
                )),
                  null != e && e.jstracker && c.push(e.jstracker);
                c.length && (i.javascriptTrackers = c.join("\n"));
                return i;
              })(r, i);
              Object.assign(e.native, t);
            }
            ["rendererUrl", "adTemplate"].forEach((n) => {
              var i;
              const r =
                null == t || null === (i = t.nativeParams) || void 0 === i
                  ? void 0
                  : i[n];
              r && (e.native[n] = U(r));
            });
          }
          function B(e) {
            var t, n;
            let { index: i = s.n.index } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = {};
            const o = i.getAdUnit(e),
              c =
                null ==
                  (null == o || null === (t = o.nativeParams) || void 0 === t
                    ? void 0
                    : t.ortb) &&
                !1 !==
                  (null == o || null === (n = o.nativeParams) || void 0 === n
                    ? void 0
                    : n.sendTargetingKeys),
              d = (function (e) {
                var t;
                const n = {};
                null != e &&
                  null !== (t = e.nativeParams) &&
                  void 0 !== t &&
                  t.ext &&
                  Object.keys(e.nativeParams.ext).forEach((e) => {
                    n[e] = "hb_native_".concat(e);
                  });
                return f(f({}, a.x5), n);
              })(o),
              l = f(f({}, e.native), e.native.ext);
            return (
              delete l.ext,
              Object.keys(l).forEach((t) => {
                var n, i, s;
                const a = d[t];
                let l =
                  U(e.native[t]) ||
                  U(
                    null == e ||
                      null === (n = e.native) ||
                      void 0 === n ||
                      null === (n = n.ext) ||
                      void 0 === n
                      ? void 0
                      : n[t]
                  );
                if ("adTemplate" === t || !a || !l) return;
                let u =
                  null == o ||
                  null === (i = o.nativeParams) ||
                  void 0 === i ||
                  null === (i = i[t]) ||
                  void 0 === i
                    ? void 0
                    : i.sendId;
                var f;
                "boolean" != typeof u &&
                  (u =
                    null == o ||
                    null === (f = o.nativeParams) ||
                    void 0 === f ||
                    null === (f = f.ext) ||
                    void 0 === f ||
                    null === (f = f[t]) ||
                    void 0 === f
                      ? void 0
                      : f.sendId);
                if (u) {
                  l = "".concat(a, ":").concat(e.adId);
                }
                let g =
                  null == o ||
                  null === (s = o.nativeParams) ||
                  void 0 === s ||
                  null === (s = s[t]) ||
                  void 0 === s
                    ? void 0
                    : s.sendTargetingKeys;
                var p;
                "boolean" != typeof g &&
                  (g =
                    null == o ||
                    null === (p = o.nativeParams) ||
                    void 0 === p ||
                    null === (p = p.ext) ||
                    void 0 === p ||
                    null === (p = p[t]) ||
                    void 0 === p
                      ? void 0
                      : p.sendTargetingKeys);
                ("boolean" == typeof g ? g : c) && (r[a] = l);
              }),
              r
            );
          }
          function k(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = [];
            return (
              Object.entries(e)
                .filter((e) => {
                  let [i, r] = e;
                  return (
                    r &&
                    ((!1 === n && "ext" === i) || null == t || t.includes(i))
                  );
                })
                .forEach((e) => {
                  let [r, o] = e;
                  !1 === n && "ext" === r
                    ? i.push(...k(o, t, !0))
                    : (n || a.x5.hasOwnProperty(r)) &&
                      i.push({ key: r, value: U(o) });
                }),
              i
            );
          }
          function S(e, t, n) {
            let { index: i = s.n.index } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            const o = { message: "assetResponse", adId: e.adId };
            let c = (0, d.vd)(t).native;
            return (
              c
                ? ((o.native = Object.assign({}, c)),
                  (o.renderer = (0, l.k)(t)),
                  null != n &&
                    (c.assets = c.assets.filter((e) => {
                      let { key: t } = e;
                      return n.includes(t);
                    })))
                : (c = (function (e, t, n) {
                    var i;
                    const o = f(
                      f({}, (0, r.SH)(e.native, ["rendererUrl", "adTemplate"])),
                      {},
                      { assets: k(e.native, n), nativeKeys: a.x5 }
                    );
                    return (
                      e.native.ortb
                        ? (o.ortb = e.native.ortb)
                        : null !== (i = t.mediaTypes) &&
                          void 0 !== i &&
                          null !== (i = i.native) &&
                          void 0 !== i &&
                          i.ortb &&
                          (o.ortb = P(e.native, t.nativeOrtbRequest)),
                      o
                    );
                  })(t, i.getAdUnit(t), n)),
              Object.assign(o, c)
            );
          }
          const R = Object.fromEntries(
            Object.entries(a.x5).map((e) => {
              let [t, n] = e;
              return [n, t];
            })
          );
          function j(e, t) {
            const n = e.assets.map((e) => R[e]);
            return S(e, t, n);
          }
          function D(e, t) {
            return S(e, t, null);
          }
          function U(e) {
            return (null == e ? void 0 : e.url) || e;
          }
          function _(e, t) {
            for (; e && t && e !== t; ) e > t ? (e -= t) : (t -= e);
            return e || t;
          }
          function q(e) {
            if (!I(e)) return;
            const t = {};
            for (const n of e.assets) {
              if (n.title) {
                const e = {
                  required: !!n.required && Boolean(n.required),
                  len: n.title.len,
                };
                t.title = e;
              } else if (n.img) {
                const e = { required: !!n.required && Boolean(n.required) };
                if (n.img.w && n.img.h) e.sizes = [n.img.w, n.img.h];
                else if (n.img.wmin && n.img.hmin) {
                  const t = _(n.img.wmin, n.img.hmin);
                  e.aspect_ratios = [
                    {
                      min_width: n.img.wmin,
                      min_height: n.img.hmin,
                      ratio_width: n.img.wmin / t,
                      ratio_height: n.img.hmin / t,
                    },
                  ];
                }
                n.img.type === a.oA.MAIN ? (t.image = e) : (t.icon = e);
              } else if (n.data) {
                let e = Object.keys(a.jO).find((e) => a.jO[e] === n.data.type),
                  i = Object.keys(a.h0).find((t) => a.h0[t] === e);
                (t[i] = { required: !!n.required && Boolean(n.required) }),
                  n.data.len && (t[i].len = n.data.len);
              }
              e.privacy && (t.privacyLink = { required: !1 });
            }
            return t;
          }
          function x(e) {
            {
              if (!e || !(0, r.cy)(e)) return e;
              if (
                !e.some((e) => {
                  var t;
                  return null ===
                    (t = ((null == e ? void 0 : e.mediaTypes) || {})[c.s6]) ||
                    void 0 === t
                    ? void 0
                    : t.ortb;
                })
              )
                return e;
              let t = (0, r.Go)(e);
              for (const e of t)
                e.mediaTypes &&
                  e.mediaTypes[c.s6] &&
                  e.mediaTypes[c.s6].ortb &&
                  ((e.mediaTypes[c.s6] = Object.assign(
                    (0, r.Up)(e.mediaTypes[c.s6], a._B),
                    q(e.mediaTypes[c.s6].ortb)
                  )),
                  (e.nativeParams = A(e.mediaTypes[c.s6])));
              return t;
            }
          }
          function N(e) {
            const t = { link: {}, eventtrackers: [] };
            return (
              Object.entries(e).forEach((e) => {
                let [n, i] = e;
                switch (n) {
                  case "clickUrl":
                    t.link.url = i;
                    break;
                  case "clickTrackers":
                    t.link.clicktrackers = Array.isArray(i) ? i : [i];
                    break;
                  case "impressionTrackers":
                    (Array.isArray(i) ? i : [i]).forEach((e) => {
                      t.eventtrackers.push({
                        event: y.impression,
                        method: v.img,
                        url: e,
                      });
                    });
                    break;
                  case "javascriptTrackers":
                    t.jstracker = Array.isArray(i) ? i.join("") : i;
                    break;
                  case "privacyLink":
                    t.privacy = i;
                }
              }),
              t
            );
          }
          function P(e, t) {
            const n = f(f({}, N(e)), {}, { assets: [] });
            function i(e, i) {
              let o = t.assets.find(e);
              null != o && ((o = (0, r.Go)(o)), i(o), n.assets.push(o));
            }
            return (
              Object.keys(e)
                .filter((t) => !!e[t])
                .forEach((t) => {
                  const n = U(e[t]);
                  switch (t) {
                    case "title":
                      i(
                        (e) => null != e.title,
                        (e) => {
                          e.title = { text: n };
                        }
                      );
                      break;
                    case "image":
                    case "icon":
                      const e = "image" === t ? a.oA.MAIN : a.oA.ICON;
                      i(
                        (t) => null != t.img && t.img.type === e,
                        (e) => {
                          e.img = { url: n };
                        }
                      );
                      break;
                    default:
                      t in a.h0 &&
                        i(
                          (e) =>
                            null != e.data && e.data.type === a.jO[a.h0[t]],
                          (e) => {
                            e.data = { value: n };
                          }
                        );
                  }
                }),
              n
            );
          }
          function W(e) {
            var t = {};
            for (var n in e) t[e[n]] = n;
            return t;
          }
        },
        1e3: (e, t, n) => {
          n.d(t, {
            Cf: () => a,
            S3: () => r,
            Tb: () => o,
            WR: () => s,
            e4: () => d,
            qN: () => c,
            yB: () => f,
            zt: () => i,
          });
          const i = ["request", "imp", "bidResponse", "response"],
            [r, o, s, a] = i,
            [c, d] = ["default", "pbs"],
            l = new Set(i);
          const { registerOrtbProcessor: u, getProcessors: f } = (function () {
            const e = {};
            return {
              registerOrtbProcessor(t) {
                let {
                  type: n,
                  name: r,
                  fn: o,
                  priority: s = 0,
                  dialects: a = [c],
                } = t;
                if (!l.has(n))
                  throw new Error(
                    "ORTB processor type must be one of: ".concat(i.join(", "))
                  );
                a.forEach((t) => {
                  e.hasOwnProperty(t) || (e[t] = {}),
                    e[t].hasOwnProperty(n) || (e[t][n] = {}),
                    (e[t][n][r] = { priority: s, fn: o });
                });
              },
              getProcessors: (t) => e[t] || {},
            };
          })();
        },
        5901: (e, t, n) => {
          function i(e, t, n) {
            return (e && e.includes(t, n)) || !1;
          }
          function r() {
            return Array.from.apply(Array, arguments);
          }
          function o(e, t, n) {
            return e && e.find(t, n);
          }
          n.d(t, { A6: () => r, I6: () => o, mK: () => i });
        },
        5952: (e, t, n) => {
          var i = n(7873),
            r = n(1069),
            o = n(433),
            s = n(3172),
            a = n(4705),
            c = n(2449),
            d = n(8969),
            l = n(5901),
            u = n(9075),
            f = n(6031);
          function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          function p(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? g(Object(n), !0).forEach(function (t) {
                    (0, a.A)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : g(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const { REQUEST: h, RESPONSE: m, NATIVE: b, EVENT: v } = d.nl,
            y = {
              [h]: function (e, t, n) {
                (0, u.bw)({
                  renderFn(t) {
                    e(Object.assign({ message: m, renderer: (0, f.k)(n) }, t));
                  },
                  resizeFn: A(t.adId, n),
                  options: t.options,
                  adId: t.adId,
                  bidResponse: n,
                });
              },
              [v]: function (e, t, n) {
                if (null == n)
                  return void (0, r.vV)(
                    "Cannot find ad '".concat(
                      t.adId,
                      "' for x-origin event request"
                    )
                  );
                if (n.status !== d.tl.RENDERED)
                  return void (0, r.JE)(
                    "Received x-origin event request without corresponding render request for ad '".concat(
                      n.adId,
                      "'"
                    )
                  );
                return (0, u.Uc)(t, n);
              },
            };
          function E() {
            window.addEventListener(
              "message",
              function (e) {
                !(function (e) {
                  var t = e.message ? "message" : "data",
                    n = {};
                  try {
                    n = JSON.parse(e[t]);
                  } catch (e) {
                    return;
                  }
                  if (n && n.adId && n.message && y.hasOwnProperty(n.message))
                    (0, u.$A)(n.adId, n.message === d.nl.REQUEST).then((t) => {
                      var i, o;
                      y[n.message](
                        ((i = n.adId),
                        (o = (function (e) {
                          return null == e.origin && 0 === e.ports.length
                            ? function () {
                                const e =
                                  "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                throw ((0, r.vV)(e), new Error(e));
                              }
                            : e.ports.length > 0
                            ? function (t) {
                                e.ports[0].postMessage(JSON.stringify(t));
                              }
                            : function (t) {
                                e.source.postMessage(
                                  JSON.stringify(t),
                                  e.origin
                                );
                              };
                        })(e)),
                        function (e) {
                          for (
                            var t = arguments.length,
                              n = new Array(t > 1 ? t - 1 : 0),
                              r = 1;
                            r < t;
                            r++
                          )
                            n[r - 1] = arguments[r];
                          return o(Object.assign({}, e, { adId: i }), ...n);
                        }),
                        n,
                        t
                      );
                    });
                })(e);
              },
              !1
            );
          }
          function A(e, t) {
            return function (n, i) {
              !(function (e) {
                let { adId: t, adUnitCode: n, width: i, height: o } = e;
                function s(e) {
                  return e ? e + "px" : "100%";
                }
                function a(e) {
                  let i = c(t, n),
                    r = document.getElementById(i);
                  return r && r.querySelector(e);
                }
                function c(e, t) {
                  return (0, r.II)() ? d(e) : (0, r.t1)() ? u(t) : t;
                }
                function d(e) {
                  const t = (0, l.I6)(
                    window.googletag.pubads().getSlots(),
                    (t) =>
                      (0, l.I6)(t.getTargetingKeys(), (n) =>
                        (0, l.mK)(t.getTargeting(n), e)
                      )
                  );
                  return t ? t.getSlotElementId() : null;
                }
                function u(e) {
                  let t = window.apntag.getTag(e);
                  return t && t.targetId;
                }
                ["div", "iframe"].forEach((e) => {
                  let t = a(e + ':not([style*="display: none"])');
                  if (t) {
                    let e = t.style;
                    (e.width = s(i)), (e.height = s(o));
                  } else
                    (0, r.vV)(
                      "Unable to locate matching page element for adUnitCode ".concat(
                        n,
                        ".  Can't resize it to ad's dimensions.  Please review setup."
                      )
                    );
                });
              })(p(p({}, t), {}, { width: n, height: i, adId: e }));
            };
          }
          Object.assign(y, {
            [b]: function (e, t, n) {
              if (null == n)
                return void (0, r.vV)(
                  "Cannot find ad for x-origin event request: '".concat(
                    t.adId,
                    "'"
                  )
                );
              switch (t.action) {
                case "assetRequest":
                  (0, u.Hh)(n, () => e((0, c.IX)(t, n)));
                  break;
                case "allAssetRequest":
                  (0, u.Hh)(n, () => e((0, c.yl)(t, n)));
                  break;
                default:
                  (0, u.vW)(t, n, { resizeFn: A(t.adId, n) }), (0, u.Pk)(n);
              }
            },
          });
          var w = n(8230),
            I = n(3272),
            T = n(6881),
            O = n(7779),
            C = n(9214),
            B = n(3597),
            k = n(1580),
            S = n(5555),
            R = n(5569);
          const j = "__pbjs_debugging__";
          function D() {
            return (0, i.m)().installedModules.includes("debugging");
          }
          function U(e) {
            return new S.k((t) => {
              (0, k.R)(e, R.tp, "debugging", t);
            });
          }
          function _() {
            let { alreadyInstalled: e = D, script: t = U } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = null;
            return function () {
              return (
                null == n &&
                  (n = new S.k((n, o) => {
                    setTimeout(() => {
                      if (e()) n();
                      else {
                        const e =
                          "https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/debugging-standalone.js";
                        (0, r.OG)(
                          'Debugging module not installed, loading it from "'.concat(
                            e,
                            '"...'
                          )
                        ),
                          ((0, i.m)()._installDebugging = !0),
                          t(e)
                            .then(() => {
                              (0, i.m)()._installDebugging({
                                DEBUG_KEY: j,
                                hook: C.A_,
                                config: I.$W,
                                createBid: B.O,
                                logger: (0, r.h0)("DEBUG:"),
                              });
                            })
                            .then(n, o);
                      }
                    });
                  })),
                n
              );
            };
          }
          const q = (function () {
            let { load: e = _(), hook: t = (0, C.Yn)("requestBids") } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = null,
              i = !1;
            function r(e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              return (n || S.k.resolve()).then(() => e.apply(this, i));
            }
            function o() {
              t.getHooks({ hook: r }).remove(), (i = !1);
            }
            return {
              enable: function () {
                i || ((n = e()), t.before(r, 99), (i = !0));
              },
              disable: o,
              reset: function () {
                (n = null), o();
              },
            };
          })();
          q.reset;
          I.$W.getConfig("debugging", function (e) {
            let { debugging: t } = e;
            null != t && t.enabled ? q.enable() : q.disable();
          });
          var x = n(2938),
            N = n(8046),
            P = n(5023),
            W = n(6894),
            V = n(7934);
          const M = (0, x.CK)("fpdEnrichment"),
            G = (0, r.Bj)(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.host;
              if (!M.cookiesAreEnabled()) return e;
              const t = e.split(".");
              if (2 === t.length) return e;
              let n,
                i,
                o = -2;
              const s = "_rdc".concat(Date.now()),
                a = "writeable";
              do {
                n = t.slice(o).join(".");
                let e = new Date((0, r.vE)() + 1e4).toUTCString();
                M.setCookie(s, a, e, "Lax", n, void 0);
                M.getCookie(s, void 0) === a
                  ? ((i = !1),
                    M.setCookie(
                      s,
                      "",
                      "Thu, 01 Jan 1970 00:00:01 GMT",
                      void 0,
                      n,
                      void 0
                    ))
                  : ((o += -1), (i = Math.abs(o) <= t.length));
              } while (i);
              return n;
            }),
            F = [
              "architecture",
              "bitness",
              "model",
              "platformVersion",
              "fullVersionList",
            ],
            H = ["brands", "mobile", "platform"],
            $ = (function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null === (e = window.navigator) || void 0 === e
                  ? void 0
                  : e.userAgentData;
              const n =
                t && H.some((e) => void 0 !== t[e])
                  ? Object.freeze(z(1, t))
                  : null;
              return function () {
                return n;
              };
            })(),
            L = (function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null === (e = window.navigator) || void 0 === e
                  ? void 0
                  : e.userAgentData;
              const n = {},
                i = new WeakMap();
              return function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : F;
                if (!i.has(e)) {
                  const t = Array.from(e);
                  t.sort(), i.set(e, t.join("|"));
                }
                const o = i.get(e);
                if (!n.hasOwnProperty(o))
                  try {
                    n[o] = t
                      .getHighEntropyValues(e)
                      .then((e) =>
                        (0, r.Im)(e) ? null : Object.freeze(z(2, e))
                      )
                      .catch(() => null);
                  } catch (e) {
                    n[o] = S.k.resolve(null);
                  }
                return n[o];
              };
            })();
          function z(e, t) {
            function n(e, t) {
              const n = { brand: e };
              return (
                (0, r.O8)(t) && !(0, r.xQ)(t) && (n.version = t.split(".")), n
              );
            }
            const i = { source: e };
            return (
              t.platform && (i.platform = n(t.platform, t.platformVersion)),
              (t.fullVersionList || t.brands) &&
                (i.browsers = (t.fullVersionList || t.brands).map((e) => {
                  let { brand: t, version: i } = e;
                  return n(t, i);
                })),
              void 0 !== t.mobile && (i.mobile = t.mobile ? 1 : 0),
              ["model", "bitness", "architecture"].forEach((e) => {
                const n = t[e];
                (0, r.O8)(n) && (i[e] = n);
              }),
              i
            );
          }
          var J = n(3858),
            K = n(5139),
            Q = n(3441),
            Y = n(6811);
          const X = {
              getRefererInfo: V.EN,
              findRootDomain: G,
              getWindowTop: r.mb,
              getWindowSelf: r.l4,
              getHighEntropySUA: L,
              getLowEntropySUA: $,
            },
            Z = (0, J.i8)("FPD"),
            ee = (0, C.A_)("sync", (e) => {
              const t = [
                e,
                ne().catch(() => null),
                S.k
                  .resolve(
                    "cookieDeprecationLabel" in navigator &&
                      (0, K.io)(Y.Ue, (0, Q.s)(R.tp, "cdep")) &&
                      navigator.cookieDeprecationLabel.getValue()
                  )
                  .catch(() => null),
              ];
              return S.k.all(t).then((e) => {
                let [t, n, i] = e;
                const o = X.getRefererInfo();
                if (
                  (Object.entries(re).forEach((e) => {
                    let [n, i] = e;
                    const s = i(t, o);
                    s &&
                      Object.keys(s).length > 0 &&
                      (t[n] = (0, r.D9)({}, s, t[n]));
                  }),
                  n &&
                    (0, s.J)(
                      t,
                      "device.sua",
                      Object.assign({}, n, t.device.sua)
                    ),
                  i)
                ) {
                  const e = { cdep: i };
                  (0, s.J)(t, "device.ext", Object.assign({}, e, t.device.ext));
                }
                t = Z(t);
                for (let e of J.Dy)
                  if ((0, J.O$)(t, e)) {
                    t[e] = (0, r.D9)({}, oe(t, o), t[e]);
                    break;
                  }
                return t;
              });
            });
          function te(e) {
            try {
              return e(X.getWindowTop());
            } catch (t) {
              return e(X.getWindowSelf());
            }
          }
          function ne() {
            const e = I.$W.getConfig("firstPartyData.uaHints");
            return Array.isArray(e) && 0 !== e.length
              ? X.getHighEntropySUA(e)
              : S.k.resolve(X.getLowEntropySUA());
          }
          function ie(e) {
            return (0, r.SH)(e, Object.keys(e));
          }
          const re = {
            site(e, t) {
              if (!J.Dy.filter((e) => "site" !== e).some(J.O$.bind(null, e)))
                return ie({ page: t.page, ref: t.ref });
            },
            device: () =>
              te((e) => {
                var t;
                const n = e.screen.width,
                  i = e.screen.height,
                  o =
                    e.innerWidth ||
                    e.document.documentElement.clientWidth ||
                    e.document.body.clientWidth,
                  a =
                    e.innerHeight ||
                    e.document.documentElement.clientHeight ||
                    e.document.body.clientHeight,
                  c = {
                    w: n,
                    h: i,
                    dnt: (0, r.l9)() ? 1 : 0,
                    ua: e.navigator.userAgent,
                    language: e.navigator.language.split("-").shift(),
                    ext: { vpw: o, vph: a },
                  };
                return (
                  null !== (t = e.navigator) &&
                    void 0 !== t &&
                    t.webdriver &&
                    (0, s.J)(c, "ext.webdriver", !0),
                  c
                );
              }),
            regs() {
              const e = {};
              te((e) => e.navigator.globalPrivacyControl) &&
                (0, s.J)(e, "ext.gpc", "1");
              const t = I.$W.getConfig("coppa");
              return "boolean" == typeof t && (e.coppa = t ? 1 : 0), e;
            },
          };
          function oe(e, t) {
            var n, i;
            const r = (0, V.gR)(t.page, { noLeadingWww: !0 });
            return ie({
              domain: r,
              keywords:
                null ===
                  (n = te((e) =>
                    e.document.querySelector("meta[name='keywords']")
                  )) ||
                void 0 === n ||
                null === (n = n.content) ||
                void 0 === n ||
                null === (i = n.replace) ||
                void 0 === i
                  ? void 0
                  : i.call(n, /\s/g, ""),
              publisher: ie({ domain: X.findRootDomain(r) }),
            });
          }
          var se = n(6916),
            ae = n(2713),
            ce = n(3895);
          const de = new Map([
            [
              "format",
              (e) =>
                Array.isArray(e) &&
                e.length > 0 &&
                e.every((e) => "object" == typeof e),
            ],
            ["w", r.Fq],
            ["h", r.Fq],
            ["btype", r.Uu],
            ["battr", r.Uu],
            ["pos", r.Fq],
            [
              "mimes",
              (e) =>
                Array.isArray(e) &&
                e.length > 0 &&
                e.every((e) => "string" == typeof e),
            ],
            ["topframe", (e) => [1, 0].includes(e)],
            ["expdir", r.Uu],
            ["api", r.Uu],
            ["id", r.O8],
            ["vcm", (e) => [1, 0].includes(e)],
          ]);
          var le = n(1371);
          const ue = (0, i.m)(),
            { triggerUserSyncs: fe } = w.zt,
            { ADD_AD_UNITS: ge, REQUEST_BIDS: pe, SET_TARGETING: he } = d.qY,
            me = {
              bidWon: function (e) {
                if (
                  !T.n
                    .getBidsRequested()
                    .map((e) => e.bids.map((e) => e.adUnitCode))
                    .reduce(r.Bq)
                    .filter(r.hj)
                    .includes(e)
                )
                  return void (0, r.vV)(
                    'The "' + e + '" placement is not defined.'
                  );
                return !0;
              },
            };
          function be(e, t) {
            let n = [];
            return (
              (0, r.cy)(e) &&
                (t ? e.length === t : e.length > 0) &&
                (e.every((e) => (0, r.Uu)(e, 2))
                  ? (n = e)
                  : (0, r.Uu)(e, 2) && n.push(e)),
              n
            );
          }
          function ve(e, t) {
            const n = (0, o.A)(e, "ortb2Imp.".concat(t)),
              i = (0, o.A)(e, "mediaTypes.".concat(t));
            if (!n && !i) return;
            const a = { [le.G_]: ce.Zy, [le.D4]: de }[t];
            a &&
              [...a].forEach((n) => {
                let [i, a] = n;
                const c = (0, o.A)(e, "mediaTypes.".concat(t, ".").concat(i)),
                  d = (0, o.A)(e, "ortb2Imp.".concat(t, ".").concat(i));
                (null == c && null == d) ||
                  (null == c
                    ? (0, s.J)(e, "mediaTypes.".concat(t, ".").concat(i), d)
                    : null == d
                    ? (0, s.J)(e, "ortb2Imp.".concat(t, ".").concat(i), c)
                    : ((0, r.JE)(
                        "adUnit "
                          .concat(e.code, ": specifies conflicting ortb2Imp.")
                          .concat(t, ".")
                          .concat(i, " and mediaTypes.")
                          .concat(t, ".")
                          .concat(i, ", the latter will be ignored"),
                        e
                      ),
                      (0, s.J)(e, "mediaTypes.".concat(t, ".").concat(i), d)));
              });
          }
          function ye(e) {
            const t = (0, r.Go)(e),
              n = t.mediaTypes.banner,
              i = be(n.sizes);
            return (
              i.length > 0
                ? ((n.sizes = i), (t.sizes = i))
                : ((0, r.vV)(
                    "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
                  ),
                  delete t.mediaTypes.banner),
              ve(t, "banner"),
              t
            );
          }
          function Ee(e) {
            const t = (0, r.Go)(e),
              n = t.mediaTypes.video;
            if (n.playerSize) {
              let e = "number" == typeof n.playerSize[0] ? 2 : 1;
              const i = be(n.playerSize, e);
              i.length > 0
                ? (2 === e &&
                    (0, r.fH)(
                      "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
                    ),
                  (n.playerSize = i),
                  (t.sizes = i))
                : ((0, r.vV)(
                    "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                  ),
                  delete t.mediaTypes.video.playerSize);
            }
            return (0, ce.aP)(t), ve(t, "video"), t;
          }
          function Ae(e) {
            function t(t) {
              return (
                (0, r.vV)(
                  'Error in adUnit "'
                    .concat(e.code, '": ')
                    .concat(t, ". Removing native request from ad unit"),
                  e
                ),
                delete i.mediaTypes.native,
                i
              );
            }
            function n(e) {
              for (const t of ["sendTargetingKeys", "types"])
                if (o.hasOwnProperty(t)) {
                  const n = e(t);
                  if (n) return n;
                }
            }
            const i = (0, r.Go)(e),
              o = i.mediaTypes.native;
            if (o.ortb) {
              var s;
              if (
                null !== (s = o.ortb.assets) &&
                void 0 !== s &&
                s.some((e) => !(0, r.Et)(e.id) || e.id < 0 || e.id % 1 != 0)
              )
                return t("native asset ID must be a nonnegative integer");
              if (
                n((e) =>
                  t('ORTB native requests cannot specify "'.concat(e, '"'))
                )
              )
                return i;
              const e = Object.keys(d.x5).filter((e) =>
                  d.x5[e].includes("hb_native_")
                ),
                a = Object.keys(o).filter((t) => e.includes(t));
              a.length > 0 &&
                ((0, r.vV)(
                  "when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(
                    a,
                    " keys from request."
                  )
                ),
                a.forEach((e) => delete i.mediaTypes.native[e]));
            } else
              n((e) =>
                "mediaTypes.native.".concat(
                  e,
                  " is deprecated, consider using native ORTB instead"
                )
              );
            return (
              o.image &&
                o.image.sizes &&
                !Array.isArray(o.image.sizes) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
                ),
                delete i.mediaTypes.native.image.sizes),
              o.image &&
                o.image.aspect_ratios &&
                !Array.isArray(o.image.aspect_ratios) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
                ),
                delete i.mediaTypes.native.image.aspect_ratios),
              o.icon &&
                o.icon.sizes &&
                !Array.isArray(o.icon.sizes) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
                ),
                delete i.mediaTypes.native.icon.sizes),
              i
            );
          }
          function we(e, t) {
            var n;
            let i =
              null == e ||
              null === (n = e.mediaTypes) ||
              void 0 === n ||
              null === (n = n[t]) ||
              void 0 === n
                ? void 0
                : n.pos;
            if (!(0, r.Et)(i) || isNaN(i) || !isFinite(i)) {
              let n = "Value of property 'pos' on ad unit ".concat(
                e.code,
                " should be of type: Number"
              );
              (0, r.JE)(n), delete e.mediaTypes[t].pos;
            }
            return e;
          }
          function Ie(e) {
            const t = (t) => "adUnit.code '".concat(e.code, "' ").concat(t),
              n = e.mediaTypes,
              i = e.bids;
            return null == i || (0, r.cy)(i)
              ? null == i && null == e.ortb2Imp
                ? ((0, r.vV)(
                    t(
                      "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"
                    )
                  ),
                  null)
                : n && 0 !== Object.keys(n).length
                ? (null == e.ortb2Imp ||
                    (null != i && 0 !== i.length) ||
                    ((e.bids = [{ bidder: null }]),
                    (0, r.OG)(
                      t(
                        "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"
                      )
                    )),
                  e)
                : ((0, r.vV)(
                    t(
                      "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."
                    )
                  ),
                  null)
              : ((0, r.vV)(
                  t(
                    "defines 'adUnit.bids' that is not an array. Removing adUnit from auction"
                  )
                ),
                null);
          }
          !(function () {
            let e = null;
            try {
              e = window.sessionStorage;
            } catch (e) {}
            if (null !== e) {
              let t = q,
                n = null;
              try {
                n = e.getItem(j);
              } catch (e) {}
              null !== n && t.enable();
            }
          })(),
            (ue.bidderSettings = ue.bidderSettings || {}),
            (ue.libLoaded = !0),
            (ue.version = "v9.26.0-pre"),
            (0, r.fH)("Prebid.js v9.26.0-pre loaded"),
            (ue.installedModules = ue.installedModules || []),
            (ue.adUnits = ue.adUnits || []),
            (ue.triggerUserSyncs = fe);
          const Te = {
            validateAdUnit: Ie,
            validateBannerMediaType: ye,
            validateSizes: be,
          };
          Object.assign(Te, { validateNativeMediaType: Ae }),
            Object.assign(Te, { validateVideoMediaType: Ee });
          const Oe = (0, C.A_)(
            "sync",
            function (e) {
              const t = [];
              return (
                e.forEach((e) => {
                  if (null == (e = Ie(e))) return;
                  const n = e.mediaTypes;
                  let i, r, o;
                  n.banner &&
                    ((i = ye(e)),
                    n.banner.hasOwnProperty("pos") && (i = we(i, "banner"))),
                    n.video &&
                      ((r = Ee(i || e)),
                      n.video.hasOwnProperty("pos") && (r = we(r, "video"))),
                    n.native && (o = Ae(r || i || e));
                  const s = Object.assign({}, i, r, o);
                  t.push(s);
                }),
                t
              );
            },
            "checkAdUnitSetup"
          );
          function Ce(e) {
            const t = T.n[e]().filter((e) =>
                T.n.getAdUnitCodes().includes(e.adUnitCode)
              ),
              n = T.n.getLastAuctionId();
            return t
              .map((e) => e.adUnitCode)
              .filter(r.hj)
              .map((e) =>
                t.filter((t) => t.auctionId === n && t.adUnitCode === e)
              )
              .filter((e) => e && e[0] && e[0].adUnitCode)
              .map((e) => ({ [e[0].adUnitCode]: { bids: e } }))
              .reduce((e, t) => Object.assign(e, t), {});
          }
          (ue.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (
              ((0, r.fH)(
                "Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
                arguments
              ),
              e)
            ) {
              var t = ue.getAdserverTargetingForAdUnitCode(e);
              return (0, r.$D)(t);
            }
            (0, r.OG)(
              "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
            );
          }),
            (ue.getHighestUnusedBidResponseForAdUnitCode = function (e) {
              if (e) {
                const t = T.n.getAllBidsForAdUnitCode(e).filter(O.Yl);
                return t.length ? t.reduce(ae.Vk) : {};
              }
              (0, r.OG)(
                "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
              );
            }),
            (ue.getAdserverTargetingForAdUnitCode = function (e) {
              return ue.getAdserverTargeting(e)[e];
            }),
            (ue.getAdserverTargeting = function (e) {
              return (
                (0, r.fH)("Invoking pbjs.getAdserverTargeting", arguments),
                O.iS.getAllTargeting(e)
              );
            }),
            (ue.getConsentMetadata = function () {
              return (
                (0, r.fH)("Invoking pbjs.getConsentMetadata"),
                se.SL.getConsentMeta()
              );
            }),
            (ue.getNoBids = function () {
              return (
                (0, r.fH)("Invoking pbjs.getNoBids", arguments), Ce("getNoBids")
              );
            }),
            (ue.getNoBidsForAdUnitCode = function (e) {
              return {
                bids: T.n.getNoBids().filter((t) => t.adUnitCode === e),
              };
            }),
            (ue.getBidResponses = function () {
              return (
                (0, r.fH)("Invoking pbjs.getBidResponses", arguments),
                Ce("getBidsReceived")
              );
            }),
            (ue.getBidResponsesForAdUnitCode = function (e) {
              return {
                bids: T.n.getBidsReceived().filter((t) => t.adUnitCode === e),
              };
            }),
            (ue.setTargetingForGPTAsync = function (e, t) {
              (0, r.fH)("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0, r.II)()
                  ? O.iS.setTargetingForGPT(e, t)
                  : (0, r.vV)("window.googletag is not defined on the page");
            }),
            (ue.setTargetingForAst = function (e) {
              (0, r.fH)("Invoking pbjs.setTargetingForAn", arguments),
                O.iS.isApntagDefined()
                  ? (O.iS.setTargetingForAst(e),
                    P.Ic(he, O.iS.getAllTargeting()))
                  : (0, r.vV)("window.apntag is not defined on the page");
            }),
            (ue.renderAd = (0, C.A_)("async", function (e, t, n) {
              (0, r.fH)("Invoking pbjs.renderAd", arguments),
                (0, r.OG)("Calling renderAd with adId :" + t),
                (0, u.BS)(e, t, n);
            })),
            (ue.removeAdUnit = function (e) {
              if (((0, r.fH)("Invoking pbjs.removeAdUnit", arguments), !e))
                return void (ue.adUnits = []);
              let t;
              (t = (0, r.cy)(e) ? e : [e]),
                t.forEach((e) => {
                  for (let t = ue.adUnits.length - 1; t >= 0; t--)
                    ue.adUnits[t].code === e && ue.adUnits.splice(t, 1);
                });
            }),
            (ue.requestBids = (function () {
              const e = (0, C.A_)(
                "async",
                function () {
                  let {
                    bidsBackHandler: e,
                    timeout: t,
                    adUnits: n,
                    adUnitCodes: i,
                    labels: o,
                    auctionId: s,
                    ttlBuffer: a,
                    ortb2: c,
                    metrics: d,
                    defer: u,
                  } = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                  P.Ic(pe);
                  const f = t || I.$W.getConfig("bidderTimeout");
                  (0, r.fH)("Invoking pbjs.requestBids", arguments),
                    null == i || Array.isArray(i) || (i = [i]),
                    i && i.length
                      ? (n = n.filter((e) => (0, l.mK)(i, e.code)))
                      : (i = n && n.map((e) => e.code)),
                    (i = i.filter(r.hj));
                  const g = {
                    global: (0, r.D9)(
                      {},
                      I.$W.getAnyConfig("ortb2") || {},
                      c || {}
                    ),
                    bidder: Object.fromEntries(
                      Object.entries(I.$W.getBidderConfig())
                        .map((e) => {
                          let [t, n] = e;
                          return [t, (0, r.Go)(n.ortb2)];
                        })
                        .filter((e) => {
                          let [t, n] = e;
                          return null != n;
                        })
                    ),
                  };
                  return ee(S.k.resolve(g.global)).then(
                    (t) => (
                      (g.global = t),
                      Be({
                        bidsBackHandler: e,
                        timeout: f,
                        adUnits: n,
                        adUnitCodes: i,
                        labels: o,
                        auctionId: s,
                        ttlBuffer: a,
                        ortb2Fragments: g,
                        metrics: d,
                        defer: u,
                      })
                    )
                  );
                },
                "requestBids"
              );
              return (0, C.Y6)(e, function () {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = t.adUnits || ue.adUnits;
                return (
                  (t.adUnits = (0, r.cy)(n) ? n.slice() : [n]),
                  (t.metrics = (0, W.K7)()),
                  t.metrics.checkpoint("requestBids"),
                  (t.defer = (0, S.v)({
                    promiseFactory: (e) => new Promise(e),
                  })),
                  e.call(this, t),
                  t.defer.promise
                );
              });
            })());
          const Be = (0, C.A_)(
            "async",
            function () {
              let {
                bidsBackHandler: e,
                timeout: t,
                adUnits: n,
                ttlBuffer: i,
                adUnitCodes: o,
                labels: a,
                auctionId: c,
                ortb2Fragments: d,
                metrics: u,
                defer: f,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              const g = (0, N.pX)(I.$W.getConfig("s2sConfig") || []);
              function p(t, n, i) {
                if ("function" == typeof e)
                  try {
                    e(t, n, i);
                  } catch (e) {
                    (0, r.vV)("Error executing bidsBackHandler", null, e);
                  }
                f.resolve({ bids: t, timedOut: n, auctionId: i });
              }
              !(function (e) {
                e.forEach((e) => (0, ce.V0)(e));
              })(n),
                (n = (0, W.BO)(u).measureTime("requestBids.validate", () =>
                  Oe(n)
                ));
              const h = {};
              if (
                (n.forEach((e) => {
                  var t;
                  const n = Object.keys(e.mediaTypes || { banner: "banner" }),
                    o = e.bids.map((e) => e.bidder),
                    s = N.Ay.bidderRegistry,
                    a = o.filter((e) => !g.has(e));
                  e.adUnitId = (0, r.lk)();
                  const c =
                    null === (t = e.ortb2Imp) ||
                    void 0 === t ||
                    null === (t = t.ext) ||
                    void 0 === t
                      ? void 0
                      : t.tid;
                  c &&
                    (h.hasOwnProperty(e.code)
                      ? (0, r.JE)(
                          "Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '".concat(
                            e.code,
                            "'"
                          )
                        )
                      : (h[e.code] = c)),
                    null == i ||
                      e.hasOwnProperty("ttlBuffer") ||
                      (e.ttlBuffer = i),
                    a.forEach((t) => {
                      const i = s[t],
                        o = i && i.getSpec && i.getSpec(),
                        a = (o && o.supportedMediaTypes) || ["banner"];
                      n.some((e) => (0, l.mK)(a, e)) ||
                        ((0, r.JE)((0, r.bz)(e, t)),
                        (e.bids = e.bids.filter((e) => e.bidder !== t)));
                    });
                }),
                n && 0 !== n.length)
              ) {
                n.forEach((e) => {
                  var t;
                  const n =
                    (null === (t = e.ortb2Imp) ||
                    void 0 === t ||
                    null === (t = t.ext) ||
                    void 0 === t
                      ? void 0
                      : t.tid) ||
                    h[e.code] ||
                    (0, r.lk)();
                  h.hasOwnProperty(e.code) || (h[e.code] = n),
                    (e.transactionId = n),
                    (0, s.J)(e, "ortb2Imp.ext.tid", n);
                });
                const e = T.n.createAuction({
                  adUnits: n,
                  adUnitCodes: o,
                  callback: p,
                  cbTimeout: t,
                  labels: a,
                  auctionId: c,
                  ortb2Fragments: d,
                  metrics: u,
                });
                let i = n.length;
                i > 15 &&
                  (0, r.fH)(
                    "Current auction "
                      .concat(e.getAuctionId(), " contains ")
                      .concat(i, " adUnits."),
                    n
                  ),
                  o.forEach((t) =>
                    O.iS.setLatestAuctionForAdUnit(t, e.getAuctionId())
                  ),
                  e.callBids();
              } else
                (0, r.OG)("No adUnits configured. No bids requested."), p();
            },
            "startAuction"
          );
          ue.requestBids.before(function (e, t) {
            function n(e) {
              for (var t; (t = e.shift()); ) t();
            }
            n(x.s0), n(ke), e.call(this, t);
          }, 49),
            (ue.addAdUnits = function (e) {
              (0, r.fH)("Invoking pbjs.addAdUnits", arguments),
                ue.adUnits.push.apply(ue.adUnits, (0, r.cy)(e) ? e : [e]),
                P.Ic(ge);
            }),
            (ue.onEvent = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.onEvent", arguments),
                (0, r.fp)(t)
                  ? !n || me[e].call(null, n)
                    ? P.on(e, t, n)
                    : (0, r.vV)(
                        'The id provided is not valid for event "' +
                          e +
                          '" and no handler was set.'
                      )
                  : (0, r.vV)(
                      'The event handler provided is not a function and was not set on event "' +
                        e +
                        '".'
                    );
            }),
            (ue.offEvent = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.offEvent", arguments),
                (n && !me[e].call(null, n)) || P.AU(e, t, n);
            }),
            (ue.getEvents = function () {
              return (0, r.fH)("Invoking pbjs.getEvents"), P.kQ();
            }),
            (ue.registerBidAdapter = function (e, t) {
              (0, r.fH)("Invoking pbjs.registerBidAdapter", arguments);
              try {
                N.Ay.registerBidAdapter(e(), t);
              } catch (e) {
                (0, r.vV)("Error registering bidder adapter : " + e.message);
              }
            }),
            (ue.registerAnalyticsAdapter = function (e) {
              (0, r.fH)("Invoking pbjs.registerAnalyticsAdapter", arguments);
              try {
                N.Ay.registerAnalyticsAdapter(e);
              } catch (e) {
                (0, r.vV)("Error registering analytics adapter : " + e.message);
              }
            }),
            (ue.createBid = function (e) {
              return (
                (0, r.fH)("Invoking pbjs.createBid", arguments), (0, B.O)(e)
              );
            });
          const ke = [],
            Se = (0, C.A_)(
              "async",
              function (e) {
                e && !(0, r.Im)(e)
                  ? ((0, r.fH)("Invoking pbjs.enableAnalytics for: ", e),
                    N.Ay.enableAnalytics(e))
                  : (0, r.vV)(
                      "pbjs.enableAnalytics should be called with option {}"
                    );
              },
              "enableAnalyticsCb"
            );
          function Re(e) {
            if ("function" == typeof e)
              try {
                e.call();
              } catch (e) {
                (0, r.vV)("Error processing command :", e.message, e.stack);
              }
            else
              (0, r.vV)(
                "Commands written into pbjs.cmd.push must be wrapped in a function"
              );
          }
          function je(e) {
            e.forEach(function (e) {
              if (void 0 === e.called)
                try {
                  e.call(), (e.called = !0);
                } catch (e) {
                  (0, r.vV)("Error processing command :", "prebid.js", e);
                }
            });
          }
          (ue.enableAnalytics = function (e) {
            ke.push(Se.bind(this, e));
          }),
            (ue.aliasBidder = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.aliasBidder", arguments),
                e && t
                  ? N.Ay.aliasBidAdapter(e, t, n)
                  : (0, r.vV)(
                      "bidderCode and alias must be passed as arguments",
                      "pbjs.aliasBidder"
                    );
            }),
            (ue.aliasRegistry = N.Ay.aliasRegistry),
            I.$W.getConfig("aliasRegistry", (e) => {
              "private" === e.aliasRegistry && delete ue.aliasRegistry;
            }),
            (ue.getAllWinningBids = function () {
              return T.n.getAllWinningBids();
            }),
            (ue.getAllPrebidWinningBids = function () {
              return T.n
                .getBidsReceived()
                .filter((e) => e.status === d.tl.BID_TARGETING_SET);
            }),
            (ue.getHighestCpmBids = function (e) {
              return O.iS.getWinningBids(e);
            }),
            (ue.clearAllAuctions = function () {
              T.n.clearAllAuctions();
            }),
            (ue.markWinningBidAsUsed = function (e) {
              let t,
                { adId: n, adUnitCode: i, analytics: o = !1 } = e;
              i && null == n
                ? (t = O.iS.getWinningBids(i))
                : n
                ? (t = T.n.getBidsReceived().filter((e) => e.adId === n))
                : (0, r.JE)(
                    "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
                  ),
                t.length > 0 &&
                  (o ? (0, u.n6)(t[0]) : T.n.addWinningBid(t[0]),
                  (0, u.qn)(t[0]));
            }),
            (ue.getConfig = I.$W.getAnyConfig),
            (ue.readConfig = I.$W.readAnyConfig),
            (ue.mergeConfig = I.$W.mergeConfig),
            (ue.mergeBidderConfig = I.$W.mergeBidderConfig),
            (ue.setConfig = I.$W.setConfig),
            (ue.setBidderConfig = I.$W.setBidderConfig),
            ue.que.push(() => E()),
            (ue.processQueue = function () {
              (ue.que.push = ue.cmd.push = Re),
                (0, u.XO)(),
                C.A_.ready(),
                je(ue.que),
                je(ue.cmd);
            }),
            (ue.triggerBilling = (e) => {
              let { adId: t, adUnitCode: n } = e;
              T.n
                .getAllWinningBids()
                .filter(
                  (e) => e.adId === t || (null == t && e.adUnitCode === n)
                )
                .forEach((e) => {
                  N.Ay.triggerBilling(e), (0, u.vB)(e);
                });
            });
        },
        7873: (e, t, n) => {
          n.d(t, { E: () => s, m: () => o });
          const i = window,
            r = (i.pbjs = i.pbjs || {});
          function o() {
            return r;
          }
          function s(e) {
            r.installedModules.push(e);
          }
          (r.cmd = r.cmd || []),
            (r.que = r.que || []),
            i === window &&
              ((i._pbjsGlobals = i._pbjsGlobals || []),
              i._pbjsGlobals.push("pbjs"));
        },
        7934: (e, t, n) => {
          n.d(t, { EN: () => c, gR: () => s });
          var i = n(3272),
            r = n(1069);
          function o(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window;
            if (!e) return e;
            if (/\w+:\/\//.exec(e)) return e;
            let n = t.location.protocol;
            try {
              n = t.top.location.protocol;
            } catch (e) {}
            return /^\/\//.exec(e) ? n + e : "".concat(n, "//").concat(e);
          }
          function s(e) {
            let { noLeadingWww: t = !1, noPort: n = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            try {
              e = new URL(o(e));
            } catch (e) {
              return;
            }
            return (
              (e = n ? e.hostname : e.host),
              t && e.startsWith("www.") && (e = e.substring(4)),
              e
            );
          }
          function a(e) {
            try {
              const t = e.querySelector("link[rel='canonical']");
              if (null !== t) return t.href;
            } catch (e) {}
            return null;
          }
          const c = (function (e) {
            let t,
              n,
              i,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window;
            return r.top !== r
              ? e
              : function () {
                  const o = a(r.document),
                    s = r.location.href;
                  return (
                    (t === o && s === n) || ((t = o), (n = s), (i = e())), i
                  );
                };
          })(
            ((d = window),
            function () {
              const e = [],
                t = (function (e) {
                  try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins;
                  } catch (e) {}
                })(d),
                n = i.$W.getConfig("maxNestedIframes");
              let c,
                l,
                u,
                f,
                g = !1,
                p = 0,
                h = !1,
                m = !1,
                b = !1;
              do {
                const n = c,
                  i = m;
                let o,
                  s = !1,
                  f = null;
                (m = !1), (c = c ? c.parent : d);
                try {
                  o = c.location.href || null;
                } catch (e) {
                  s = !0;
                }
                if (s)
                  if (i) {
                    const e = n.context;
                    try {
                      (f = e.sourceUrl),
                        (l = f),
                        (b = !0),
                        (h = !0),
                        c === d.top && (g = !0),
                        e.canonicalUrl && (u = e.canonicalUrl);
                    } catch (e) {}
                  } else {
                    (0, r.JE)(
                      "Trying to access cross domain iframe. Continuing without referrer and location"
                    );
                    try {
                      const e = n.document.referrer;
                      e && ((f = e), c === d.top && (g = !0));
                    } catch (e) {}
                    !f &&
                      t &&
                      t[p - 1] &&
                      ((f = t[p - 1]), c === d.top && (b = !0)),
                      f && !h && (l = f);
                  }
                else {
                  if (o && ((f = o), (l = f), (h = !1), c === d.top)) {
                    g = !0;
                    const e = a(c.document);
                    e && (u = e);
                  }
                  c.context && c.context.sourceUrl && (m = !0);
                }
                e.push(f), p++;
              } while (c !== d.top && p < n);
              e.reverse();
              try {
                f = d.top.document.referrer;
              } catch (e) {}
              const v = g || b ? l : null,
                y = i.$W.getConfig("pageUrl") || u || null;
              let E = i.$W.getConfig("pageUrl") || v || o(y, d);
              return (
                v &&
                  v.indexOf("?") > -1 &&
                  -1 === E.indexOf("?") &&
                  (E = "".concat(E).concat(v.substring(v.indexOf("?")))),
                {
                  reachedTop: g,
                  isAmp: h,
                  numIframes: p - 1,
                  stack: e,
                  topmostLocation: l || null,
                  location: v,
                  canonicalUrl: y,
                  page: E,
                  domain: s(E) || null,
                  ref: f || null,
                  legacy: {
                    reachedTop: g,
                    isAmp: h,
                    numIframes: p - 1,
                    stack: e,
                    referer: l || null,
                    canonicalUrl: y,
                  },
                }
              );
            })
          );
          var d;
        },
        2938: (e, t, n) => {
          n.d(t, { CK: () => E, s0: () => b, vM: () => y });
          var i = n(4705),
            r = n(1069),
            o = n(2693),
            s = n(5569),
            a = n(5139),
            c = n(2604),
            d = n(6811),
            l = n(3272),
            u = n(8046),
            f = n(3441);
          function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          function p(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? g(Object(n), !0).forEach(function (t) {
                    (0, i.A)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : g(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const h = "html5",
            m = "cookie";
          let b = [];
          function v() {
            let { moduleName: e, moduleType: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { isAllowed: n = a.io } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            function i(i, r) {
              let o = e;
              const a = l.$W.getCurrentBidder();
              a && t === s.tW && u.Ay.aliasRegistry[a] === e && (o = a);
              return i({ valid: n(d.Ue, (0, f.s)(t, o, { [c.Zw]: r })) });
            }
            function o(e, t, n) {
              if (!n || "function" != typeof n) return i(e, t);
              b.push(function () {
                let r = i(e, t);
                n(r);
              });
            }
            function g(e) {
              const t = e.charAt(0).toUpperCase() + e.substring(1),
                n = () => window[e],
                i = function (t) {
                  return o(
                    function (t) {
                      if (t && t.valid)
                        try {
                          return !!n();
                        } catch (t) {
                          (0, r.vV)("".concat(e, " api disabled"));
                        }
                      return !1;
                    },
                    h,
                    t
                  );
                };
              return {
                ["has".concat(t)]: i,
                ["".concat(e, "IsEnabled")]: (e) =>
                  o(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return (
                            n().setItem("prebid.cookieTest", "1"),
                            "1" === n().getItem("prebid.cookieTest")
                          );
                        } catch (e) {
                        } finally {
                          try {
                            n().removeItem("prebid.cookieTest");
                          } catch (e) {}
                        }
                      return !1;
                    },
                    h,
                    e
                  ),
                ["setDataIn".concat(t)]: (e, t, r) =>
                  o(
                    function (r) {
                      r && r.valid && i() && n().setItem(e, t);
                    },
                    h,
                    r
                  ),
                ["getDataFrom".concat(t)]: (e, t) =>
                  o(
                    function (t) {
                      return t && t.valid && i() ? n().getItem(e) : null;
                    },
                    h,
                    t
                  ),
                ["removeDataFrom".concat(t)]: (e, t) =>
                  o(
                    function (t) {
                      t && t.valid && i() && n().removeItem(e);
                    },
                    h,
                    t
                  ),
              };
            }
            return p(
              p(
                p(
                  {
                    setCookie: function (e, t, n, i, r, s) {
                      return o(
                        function (o) {
                          if (o && o.valid) {
                            const o =
                                r && "" !== r
                                  ? " ;domain=".concat(encodeURIComponent(r))
                                  : "",
                              s = n && "" !== n ? " ;expires=".concat(n) : "",
                              a =
                                null != i && "none" == i.toLowerCase()
                                  ? "; Secure"
                                  : "";
                            document.cookie = ""
                              .concat(e, "=")
                              .concat(encodeURIComponent(t))
                              .concat(s, "; path=/")
                              .concat(o)
                              .concat(i ? "; SameSite=".concat(i) : "")
                              .concat(a);
                          }
                        },
                        m,
                        s
                      );
                    },
                    getCookie: function (e, t) {
                      return o(
                        function (t) {
                          if (t && t.valid) {
                            let t = window.document.cookie.match(
                              "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
                            );
                            return t ? decodeURIComponent(t[2]) : null;
                          }
                          return null;
                        },
                        m,
                        t
                      );
                    },
                    cookiesAreEnabled: function (e) {
                      return o(
                        function (e) {
                          return !(!e || !e.valid) && (0, r.GE)();
                        },
                        m,
                        e
                      );
                    },
                  },
                  g("localStorage")
                ),
                g("sessionStorage")
              ),
              {},
              {
                findSimilarCookies: function (e, t) {
                  return o(
                    function (t) {
                      if (t && t.valid) {
                        const t = [];
                        if ((0, r.N9)()) {
                          const n = document.cookie.split(";");
                          for (; n.length; ) {
                            const i = n.pop();
                            let r = i.indexOf("=");
                            r = r < 0 ? i.length : r;
                            decodeURIComponent(
                              i.slice(0, r).replace(/^\s+/, "")
                            ).indexOf(e) >= 0 &&
                              t.push(decodeURIComponent(i.slice(r + 1)));
                          }
                        }
                        return t;
                      }
                    },
                    m,
                    t
                  );
                },
              }
            );
          }
          function y() {
            let {
              moduleType: e,
              moduleName: t,
              bidderCode: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            function i() {
              throw new Error(
                "Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName"
              );
            }
            return (
              n
                ? (((e && e !== s.tW) || t) && i(), (e = s.tW), (t = n))
                : (t && e) || i(),
              v({ moduleType: e, moduleName: t })
            );
          }
          function E(e) {
            return v({ moduleName: e, moduleType: s.tp });
          }
          (0, a.qB)(d.Ue, "deviceAccess config", function () {
            if (!(0, r.N9)()) return { allow: !1 };
          }),
            (0, a.qB)(d.Ue, "bidderSettings.*.storageAllowed", function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o.u;
              if (e[c.Dk] !== s.tW) return;
              let n = t.get(e[c.q7], "storageAllowed");
              if (n && !0 !== n) {
                const t = e[c.Zw];
                n = Array.isArray(n) ? n.some((e) => e === t) : n === t;
              } else n = !!n;
              return n ? void 0 : { allow: n };
            });
        },
        7779: (e, t, n) => {
          n.d(t, { Yl: () => I, iS: () => B, uW: () => w });
          var i = n(6881),
            r = n(7863),
            o = n(2693),
            s = n(3272),
            a = n(8969),
            c = n(5023),
            d = n(9214),
            l = n(1371),
            u = n(2449),
            f = n(5901),
            g = n(1069),
            p = n(433),
            h = n(2713),
            m = [];
          const b = 20,
            v = "targetingControls.allowTargetingKeys",
            y = "targetingControls.addTargetingKeys",
            E = 'Only one of "'.concat(v, '" or "').concat(y, '" can be set'),
            A = Object.keys(a.xS).map((e) => a.xS[e]);
          let w = {
            isActualBid: (e) => e.getStatusCode() === a.XQ.GOOD,
            isBidNotExpired: (e) =>
              e.responseTimestamp + 1e3 * (0, r.cT)(e) > (0, g.vE)(),
            isUnusedBid: (e) =>
              e &&
              ((e.status && !(0, f.mK)([a.tl.RENDERED], e.status)) ||
                !e.status),
          };
          function I(e) {
            return !Object.values(w).some((t) => !t(e));
          }
          const T = (0, d.A_)("sync", function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : g.Q0;
            if (!i) {
              const i = [],
                o = s.$W.getConfig("sendBidsControl.dealPrioritization");
              let a = (0, g.$z)(e, "adUnitCode");
              return (
                Object.keys(a).forEach((e) => {
                  let s = [],
                    c = (0, g.$z)(a[e], "bidderCode");
                  Object.keys(c).forEach((e) => {
                    s.push(c[e].reduce(t));
                  }),
                    n
                      ? ((s = o
                          ? s.sort(O(!0))
                          : s.sort((e, t) => t.cpm - e.cpm)),
                        i.push(...s.slice(0, n)))
                      : ((s = s.sort(r)), i.push(...s));
                }),
                i
              );
            }
            return e;
          });
          function O() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function (t, n) {
              return void 0 !== t.adserverTargeting.hb_deal &&
                void 0 === n.adserverTargeting.hb_deal
                ? -1
                : void 0 === t.adserverTargeting.hb_deal &&
                  void 0 !== n.adserverTargeting.hb_deal
                ? 1
                : e
                ? n.cpm - t.cpm
                : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb;
            };
          }
          function C(e, t) {
            return (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : () => window.googletag.pubads().getSlots()
            )().reduce((e, n) => {
              const i = (0, g.fp)(t) && t(n);
              return (
                Object.keys(e)
                  .filter((0, g.fp)(i) ? i : (0, g.iC)(n))
                  .forEach((t) => e[t].push(n)),
                e
              );
            }, Object.fromEntries(e.map((e) => [e, []])));
          }
          const B = (function (e) {
            let t = {},
              n = {};
            function i(e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              const i = A.concat(u.Nh),
                r = s.$W.getConfig(
                  "targetingControls.allowSendAllBidsTargetingKeys"
                ),
                o = r ? r.map((e) => a.xS[e]) : i;
              return e.reduce((e, r) => {
                if (t || (n && r.dealId)) {
                  const t = (function (e, t) {
                    return t.reduce(
                      (t, n) => (
                        e.adserverTargeting[n] &&
                          t.push({
                            [""
                              .concat(n, "_")
                              .concat(e.bidderCode)
                              .substring(0, 20)]: [e.adserverTargeting[n]],
                          }),
                        t
                      ),
                      []
                    );
                  })(
                    r,
                    i.filter(
                      (e) =>
                        void 0 !== r.adserverTargeting[e] &&
                        (n || -1 !== o.indexOf(e))
                    )
                  );
                  t && e.push({ [r.adUnitCode]: t });
                }
                return e;
              }, []);
            }
            function r(t) {
              return "string" == typeof t
                ? [t]
                : (0, g.cy)(t)
                ? t
                : e.getAdUnitCodes() || [];
            }
            function w() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : h.Bq,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : void 0,
                r = e.getBidsReceived().reduce((e, t) => {
                  const i = s.$W.getConfig("useBidCache"),
                    r = s.$W.getConfig("bidCacheFilterFunction"),
                    o = n[t.adUnitCode] === t.auctionId,
                    a = !(i && !o && "function" == typeof r) || !!r(t);
                  return (
                    (i || o) &&
                      a &&
                      (0, p.A)(t, "video.context") !== l.LM &&
                      I(t) &&
                      ((t.latestTargetedAuctionId = n[t.adUnitCode]),
                      e.push(t)),
                    e
                  );
                }, []);
              return T(r, t, void 0, void 0, void 0, i);
            }
            function B() {
              return e
                .getStandardBidderAdServerTargeting()
                .map((e) => e.key)
                .concat(A)
                .filter(g.hj);
            }
            return (
              (t.setLatestAuctionForAdUnit = function (e, t) {
                n[e] = t;
              }),
              (t.resetPresetTargeting = function (e, t) {
                if ((0, g.II)()) {
                  const n = r(e);
                  Object.values(C(n, t)).forEach((e) => {
                    e.forEach((e) => {
                      !(function (e) {
                        m.forEach((t) => {
                          e.getTargeting(t) && e.clearTargeting(t);
                        });
                      })(e);
                    });
                  });
                }
              }),
              (t.resetPresetTargetingAST = function (e) {
                r(e).forEach(function (e) {
                  const t = window.apntag.getTag(e);
                  if (t && t.keywords) {
                    const n = Object.keys(t.keywords),
                      i = {};
                    n.forEach((e) => {
                      (0, f.mK)(m, e.toLowerCase()) || (i[e] = t.keywords[e]);
                    }),
                      window.apntag.modifyTag(e, { keywords: i });
                  }
                });
              }),
              (t.getAllTargeting = function (t, n, c) {
                let d =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : h.Vk,
                  l =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : g.Q0;
                c || (c = w(d, l));
                const A = r(t),
                  I = s.$W.getConfig("enableSendAllBids"),
                  C = s.$W.getConfig("sendBidsControl.bidLimit"),
                  k = (I && (n || C)) || 0,
                  { customKeysByUnit: S, filteredBids: R } = (function (e, t) {
                    const n = [],
                      i = {},
                      r = s.$W.getConfig(
                        "targetingControls.alwaysIncludeDeals"
                      );
                    return (
                      t.forEach((t) => {
                        const s = (0, f.mK)(e, t.adUnitCode),
                          a =
                            !0 === o.u.get(t.bidderCode, "allowZeroCpmBids")
                              ? t.cpm >= 0
                              : t.cpm > 0,
                          c = r && t.dealId;
                        s &&
                          (c || a) &&
                          (n.push(t),
                          Object.keys(t.adserverTargeting)
                            .filter(
                              (function () {
                                let e = B();
                                e = e.concat(u.Nh);
                                return function (t) {
                                  return -1 === e.indexOf(t);
                                };
                              })()
                            )
                            .forEach((e) => {
                              const n = e.substring(0, b),
                                r = i[t.adUnitCode] || {},
                                o = [t.adserverTargeting[e]];
                              r[n]
                                ? (r[n] = r[n].concat(o).filter(g.hj))
                                : (r[n] = o),
                                (i[t.adUnitCode] = r);
                            }));
                      }),
                      { filteredBids: n, customKeysByUnit: i }
                    );
                  })(A, c);
                let j = (function (t, n) {
                  const r = (function (e) {
                    let t = [],
                      n = e.reduce(
                        (e, n) => (
                          (0, f.mK)(t, n.adUnitCode) ||
                            (e.push(n), t.push(n.adUnitCode)),
                          e
                        ),
                        []
                      ),
                      i = B();
                    return (
                      (n = n.map((e) => ({
                        [e.adUnitCode]: Object.keys(e.adserverTargeting)
                          .filter(
                            (t) =>
                              void 0 === e.sendStandardTargeting ||
                              e.sendStandardTargeting ||
                              -1 === i.indexOf(t)
                          )
                          .reduce((t, n) => {
                            const i = [e.adserverTargeting[n]],
                              r = { [n.substring(0, b)]: i };
                            if (n === a.xS.DEAL) {
                              const o = ""
                                  .concat(n, "_")
                                  .concat(e.bidderCode)
                                  .substring(0, b),
                                s = { [o]: i };
                              return [...t, r, s];
                            }
                            return [...t, r];
                          }, []),
                      }))),
                      n
                    );
                  })(t)
                    .concat(
                      (function (e, t) {
                        return e.reduce((e, n) => {
                          const i = Object.assign({}, n),
                            r = t[i.adUnitCode],
                            o = [];
                          return (
                            r &&
                              Object.keys(r).forEach((e) => {
                                e && r[e] && o.push({ [e]: r[e] });
                              }),
                            e.push({ [i.adUnitCode]: o }),
                            e
                          );
                        }, []);
                      })(t, n)
                    )
                    .concat(
                      (function (e) {
                        const t = s.$W.getConfig(
                          "targetingControls.alwaysIncludeDeals"
                        );
                        return i(e, s.$W.getConfig("enableSendAllBids"), t);
                      })(t)
                    )
                    .concat(
                      (function () {
                        function t(e) {
                          return (0, p.A)(e, a.iD.ADSERVER_TARGETING);
                        }
                        function n(e) {
                          const n = t(e);
                          return Object.keys(n).map(function (e) {
                            return (
                              (0, g.O8)(n[e]) &&
                                (n[e] = n[e].split(",").map((e) => e.trim())),
                              (0, g.cy)(n[e]) || (n[e] = [n[e]]),
                              { [e]: n[e] }
                            );
                          });
                        }
                        return e
                          .getAdUnits()
                          .filter((e) => t(e))
                          .reduce((e, t) => {
                            const i = n(t);
                            return i && e.push({ [t.code]: i }), e;
                          }, []);
                      })()
                    );
                  return (
                    r.forEach((e) => {
                      !(function (e) {
                        Object.keys(e).forEach((t) => {
                          e[t].forEach((e) => {
                            const t = Object.keys(e);
                            -1 === m.indexOf(t[0]) && (m = t.concat(m));
                          });
                        });
                      })(e);
                    }),
                    r
                  );
                })(T(R, d, k, void 0, l), S);
                const D = Object.keys(Object.assign({}, a.Zh, a.x5));
                let U = s.$W.getConfig(v);
                const _ = s.$W.getConfig(y);
                if (null != _ && null != U) throw new Error(E);
                (U = null != _ ? D.concat(_) : U || D),
                  Array.isArray(U) &&
                    U.length > 0 &&
                    (j = (function (e, t) {
                      const n = Object.assign({}, a.xS, a.x5),
                        i = Object.keys(n),
                        r = {};
                      (0, g.fH)(
                        "allowTargetingKeys - allowed keys [ ".concat(
                          t.map((e) => n[e]).join(", "),
                          " ]"
                        )
                      ),
                        e.map((e) => {
                          const o = Object.keys(e)[0],
                            s = e[o].filter((e) => {
                              const o = Object.keys(e)[0],
                                s =
                                  0 ===
                                    i.filter((e) => 0 === o.indexOf(n[e]))
                                      .length ||
                                  (0, f.I6)(t, (e) => {
                                    const t = n[e];
                                    return 0 === o.indexOf(t);
                                  });
                              return (r[o] = !s), s;
                            });
                          e[o] = s;
                        });
                      const o = Object.keys(r).filter((e) => r[e]);
                      return (
                        (0, g.fH)(
                          "allowTargetingKeys - removed keys [ ".concat(
                            o.join(", "),
                            " ]"
                          )
                        ),
                        e.filter((e) => e[Object.keys(e)[0]].length > 0)
                      );
                    })(j, U)),
                  (j = (function (e) {
                    let t = e.map((e) => ({
                      [Object.keys(e)[0]]: e[Object.keys(e)[0]]
                        .map((e) => ({
                          [Object.keys(e)[0]]: e[Object.keys(e)[0]].join(","),
                        }))
                        .reduce((e, t) => Object.assign(t, e), {}),
                    }));
                    return (
                      (t = t.reduce(function (e, t) {
                        var n = Object.keys(t)[0];
                        return (e[n] = Object.assign({}, e[n], t[n])), e;
                      }, {})),
                      t
                    );
                  })(j));
                const q = s.$W.getConfig(
                  "targetingControls.auctionKeyMaxChars"
                );
                return (
                  q &&
                    ((0, g.fH)(
                      "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                        q,
                        " characters.  Running checks on auction keys..."
                      )
                    ),
                    (j = (function (e, t) {
                      let n = (0, g.Go)(e),
                        i = Object.keys(n)
                          .map((e) => ({
                            adUnitCode: e,
                            adserverTargeting: n[e],
                          }))
                          .sort(O());
                      return i.reduce(function (e, i, r, o) {
                        let s =
                          ((a = i.adserverTargeting),
                          Object.keys(a).reduce(function (e, t) {
                            return (
                              e +
                              ""
                                .concat(t, "%3d")
                                .concat(encodeURIComponent(a[t]), "%26")
                            );
                          }, ""));
                        var a;
                        r + 1 === o.length && (s = s.slice(0, -3));
                        let c = i.adUnitCode,
                          d = s.length;
                        return (
                          d <= t
                            ? ((t -= d),
                              (0, g.fH)(
                                "AdUnit '"
                                  .concat(c, "' auction keys comprised of ")
                                  .concat(
                                    d,
                                    " characters.  Deducted from running threshold; new limit is "
                                  )
                                  .concat(t),
                                n[c]
                              ),
                              (e[c] = n[c]))
                            : (0, g.JE)(
                                "The following keys for adUnitCode '"
                                  .concat(
                                    c,
                                    "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                                  )
                                  .concat(
                                    d,
                                    ", the current allotted amount was "
                                  )
                                  .concat(t, ".\n"),
                                n[c]
                              ),
                          r + 1 === o.length &&
                            0 === Object.keys(e).length &&
                            (0, g.vV)(
                              "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                            ),
                          e
                        );
                      }, {});
                    })(j, q))),
                  A.forEach((e) => {
                    j[e] || (j[e] = {});
                  }),
                  j
                );
              }),
              s.$W.getConfig("targetingControls", function (e) {
                null != (0, p.A)(e, v) &&
                  null != (0, p.A)(e, y) &&
                  (0, g.vV)(E);
              }),
              (t.setTargetingForGPT = (0, d.A_)(
                "sync",
                function (n, i) {
                  let r = t.getAllTargeting(n),
                    o = Object.fromEntries(m.map((e) => [e, null]));
                  Object.entries(C(Object.keys(r), i)).forEach((e) => {
                    let [t, n] = e;
                    n.forEach((e) => {
                      Object.keys(r[t]).forEach((e) => {
                        let n = r[t][e];
                        "string" == typeof n &&
                          -1 !== n.indexOf(",") &&
                          (n = n.split(",")),
                          (r[t][e] = n);
                      }),
                        (0, g.OG)(
                          "Attempting to set targeting-map for slot: ".concat(
                            e.getSlotElementId(),
                            " with targeting-map:"
                          ),
                          r[t]
                        ),
                        e.updateTargetingFromMap(Object.assign({}, o, r[t]));
                    });
                  }),
                    Object.keys(r).forEach((t) => {
                      Object.keys(r[t]).forEach((n) => {
                        "hb_adid" === n &&
                          e.setStatusForBids(r[t][n], a.tl.BID_TARGETING_SET);
                      });
                    }),
                    t.targetingDone(r),
                    c.Ic(a.qY.SET_TARGETING, r);
                },
                "setTargetingForGPT"
              )),
              (t.targetingDone = (0, d.A_)(
                "sync",
                function (e) {
                  return e;
                },
                "targetingDone"
              )),
              (t.getWinningBids = function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : h.Vk,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : g.Q0;
                const a = [],
                  c = t || w(n, i),
                  d = r(e);
                return c.reduce((e, t) => {
                  const n = t.adUnitCode,
                    i =
                      !0 === o.u.get(n, "allowZeroCpmBids")
                        ? t.cpm >= 0
                        : t.cpm > 0,
                    r =
                      s.$W.getConfig("targetingControls.alwaysIncludeDeals") &&
                      t.dealId;
                  return (
                    (0, f.mK)(d, n) &&
                      !(0, f.mK)(a, n) &&
                      (r || i) &&
                      (e.push(t), a.push(n)),
                    e
                  );
                }, []);
              }),
              (t.setTargetingForAst = function (e) {
                let n = t.getAllTargeting(e);
                try {
                  t.resetPresetTargetingAST(e);
                } catch (e) {
                  (0, g.vV)("unable to reset targeting for AST" + e);
                }
                Object.keys(n).forEach((e) =>
                  Object.keys(n[e]).forEach((t) => {
                    if (
                      ((0, g.OG)(
                        "Attempting to set targeting for targetId: "
                          .concat(e, " key: ")
                          .concat(t, " value: ")
                          .concat(n[e][t])
                      ),
                      (0, g.O8)(n[e][t]) || (0, g.cy)(n[e][t]))
                    ) {
                      let i = {},
                        r = /pt[0-9]/;
                      t.search(r) < 0
                        ? (i[t.toUpperCase()] = n[e][t])
                        : (i[t] = n[e][t]),
                        window.apntag.setKeywords(e, i, {
                          overrideKeyValue: !0,
                        });
                    }
                  })
                );
              }),
              (t.isApntagDefined = function () {
                if (window.apntag && (0, g.fp)(window.apntag.setKeywords))
                  return !0;
              }),
              t
            );
          })(i.n);
        },
        8230: (e, t, n) => {
          n.d(t, { zt: () => g });
          var i = n(1069),
            r = n(3272),
            o = n(5901),
            s = n(2938),
            a = n(5139),
            c = n(6811),
            d = n(2604),
            l = n(5569),
            u = n(3441);
          r.$W.setDefaults({
            userSync: (0, i.Go)({
              syncEnabled: !0,
              filterSettings: { image: { bidders: "*", filter: "include" } },
              syncsPerBidder: 5,
              syncDelay: 3e3,
              auctionDelay: 500,
            }),
          });
          const f = (0, s.CK)("usersync");
          const g = (function (e) {
            let t = {},
              n = { image: [], iframe: [] },
              s = new Set(),
              a = {},
              f = { image: !0, iframe: !1 },
              g = e.config;
            function p() {
              if (g.syncEnabled && e.browserSupportsCookies) {
                try {
                  !(function () {
                    if (!f.iframe) return;
                    h(n.iframe, (e) => {
                      let [t, r] = e;
                      (0, i.OG)(
                        "Invoking iframe user sync for bidder: ".concat(t)
                      ),
                        (0, i.SG)(r),
                        (function (e, t) {
                          e.image = e.image.filter((e) => e[0] !== t);
                        })(n, t);
                    });
                  })(),
                    (function () {
                      if (!f.image) return;
                      h(n.image, (e) => {
                        let [t, n] = e;
                        (0, i.OG)(
                          "Invoking image pixel user sync for bidder: ".concat(
                            t
                          )
                        ),
                          (0, i.z$)(n);
                      });
                    })();
                } catch (e) {
                  return (0, i.vV)("Error firing user syncs", e);
                }
                n = { image: [], iframe: [] };
              }
            }
            function h(e, t) {
              (0, i.k4)(e).forEach(t);
            }
            function m(e, t) {
              let n = g.filterSettings;
              if (
                (function (e, t) {
                  if (e.all && e[t])
                    return (
                      (0, i.JE)(
                        'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                          t,
                          '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                        )
                      ),
                      !1
                    );
                  let n = e.all ? e.all : e[t],
                    r = e.all ? "all" : t;
                  if (!n) return !1;
                  let o = n.filter,
                    s = n.bidders;
                  if (o && "include" !== o && "exclude" !== o)
                    return (
                      (0, i.JE)(
                        'UserSync "filterSettings.'
                          .concat(r, ".filter\" setting '")
                          .concat(
                            o,
                            "' is not a valid option; use either 'include' or 'exclude'."
                          )
                      ),
                      !1
                    );
                  if (
                    "*" !== s &&
                    !(
                      Array.isArray(s) &&
                      s.length > 0 &&
                      s.every((e) => (0, i.O8)(e) && "*" !== e)
                    )
                  )
                    return (
                      (0, i.JE)(
                        'Detected an invalid setup in userSync "filterSettings.'.concat(
                          r,
                          ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                        )
                      ),
                      !1
                    );
                  return !0;
                })(n, e)
              ) {
                f[e] = !0;
                let i = n.all ? n.all : n[e],
                  r = "*" === i.bidders ? [t] : i.bidders;
                const s = {
                  include: (e, t) => !(0, o.mK)(e, t),
                  exclude: (e, t) => (0, o.mK)(e, t),
                };
                return s[i.filter || "include"](r, t);
              }
              return !f[e];
            }
            return (
              r.$W.getConfig("userSync", (e) => {
                if (e.userSync) {
                  let t = e.userSync.filterSettings;
                  (0, i.Qd)(t) &&
                    (t.image ||
                      t.all ||
                      (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include",
                      }));
                }
                g = Object.assign(g, e.userSync);
              }),
              e.regRule(c.Ml, "userSync config", (e) => {
                if (!g.syncEnabled)
                  return { allow: !1, reason: "syncs are disabled" };
                if (e[d.Dk] === l.tW) {
                  const n = e[d.bt],
                    i = e[d.iK];
                  if (!t.canBidderRegisterSync(n, i))
                    return {
                      allow: !1,
                      reason: ""
                        .concat(n, " syncs are not enabled for ")
                        .concat(i),
                    };
                }
              }),
              (t.registerSync = (t, r, o) =>
                s.has(r)
                  ? (0, i.OG)(
                      'already fired syncs for "'.concat(
                        r,
                        '", ignoring registerSync call'
                      )
                    )
                  : g.syncEnabled && (0, i.cy)(n[t])
                  ? r
                    ? 0 !== g.syncsPerBidder && Number(a[r]) >= g.syncsPerBidder
                      ? (0, i.JE)(
                          'Number of user syncs exceeded for "'.concat(r, '"')
                        )
                      : void (
                          e.isAllowed(
                            c.Ml,
                            (0, u.s)(l.tW, r, { [d.bt]: t, [d.e3]: o })
                          ) &&
                          (n[t].push([r, o]),
                          (a = (function (e, t) {
                            return e[t] ? (e[t] += 1) : (e[t] = 1), e;
                          })(a, r)))
                        )
                    : (0, i.JE)("Bidder is required for registering sync")
                  : (0, i.JE)('User sync type "'.concat(t, '" not supported'))),
              (t.bidderDone = s.add.bind(s)),
              (t.syncUsers = function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (e) return setTimeout(p, Number(e));
                p();
              }),
              (t.triggerUserSyncs = () => {
                g.enableOverride && t.syncUsers();
              }),
              (t.canBidderRegisterSync = (e, t) =>
                !g.filterSettings || !m(e, t)),
              t
            );
          })(
            Object.defineProperties(
              {
                config: r.$W.getConfig("userSync"),
                isAllowed: a.io,
                regRule: a.qB,
              },
              {
                browserSupportsCookies: {
                  get: function () {
                    return !(0, i.Vt)() && f.cookiesAreEnabled();
                  },
                },
              }
            )
          );
        },
        1069: (e, t, n) => {
          n.d(t, {
            $D: () => R,
            $z: () => Se,
            Bg: () => Je,
            Bj: () => ze,
            Bk: () => ue,
            Bq: () => ge,
            CA: () => z,
            D4: () => pe,
            D9: () => $e,
            Dl: () => Ge,
            El: () => Ke,
            Et: () => Z,
            Ez: () => J,
            Fq: () => Ne,
            GE: () => Be,
            Go: () => Ee,
            II: () => me,
            Im: () => ne,
            JE: () => M,
            Lm: () => te,
            N9: () => Ce,
            O8: () => Y,
            OG: () => W,
            PB: () => Le,
            Q0: () => ve,
            Qd: () => ee,
            SB: () => De,
            SG: () => de,
            SH: () => Re,
            Tz: () => le,
            U6: () => ke,
            Up: () => Pe,
            Uu: () => We,
            V: () => Oe,
            Vt: () => we,
            ZA: () => he,
            _s: () => oe,
            al: () => Ae,
            bL: () => S,
            bu: () => re,
            bz: () => xe,
            c$: () => Fe,
            cD: () => w,
            cf: () => _,
            cy: () => X,
            eP: () => Me,
            fH: () => V,
            fp: () => Q,
            gM: () => Ie,
            h0: () => F,
            hj: () => fe,
            hw: () => L,
            iC: () => qe,
            k4: () => ye,
            kK: () => D,
            l4: () => N,
            l9: () => Ue,
            lk: () => k,
            mM: () => T,
            mb: () => x,
            ro: () => ce,
            s0: () => B,
            t1: () => be,
            vE: () => Te,
            vV: () => G,
            wD: () => je,
            xQ: () => ie,
            y$: () => j,
            z$: () => ae,
          });
          var i = n(3272),
            r = n(5751),
            o = n(5901),
            s = n(8969),
            a = n(5555),
            c = n(7873),
            d = "String",
            l = "Function",
            u = "Number",
            f = "Object",
            g = "Boolean",
            p = Object.prototype.toString;
          let h,
            m = Boolean(window.console),
            b = Boolean(m && window.console.log),
            v = Boolean(m && window.console.info),
            y = Boolean(m && window.console.warn),
            E = Boolean(m && window.console.error);
          const A = (0, c.m)();
          function w(e) {
            h = e;
          }
          function I() {
            null != h && h(...arguments);
          }
          const T = {
            checkCookieSupport: Be,
            createTrackPixelIframeHtml: function (e) {
              let t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "";
              if (!e) return "";
              t && (e = encodeURI(e));
              n && (n = 'sandbox="'.concat(n, '"'));
              return "<iframe "
                .concat(n, ' id="')
                .concat(
                  B(),
                  '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                )
                .concat(e, '">\n    </iframe>');
            },
            getWindowSelf: N,
            getWindowTop: x,
            canAccessWindowTop: function () {
              try {
                if (T.getWindowTop().location.href) return !0;
              } catch (e) {
                return !1;
              }
            },
            getWindowLocation: P,
            insertUserSyncIframe: de,
            insertElement: oe,
            isFn: Q,
            triggerPixel: ae,
            logError: G,
            logWarn: M,
            logMessage: W,
            logInfo: V,
            parseQS: Ve,
            formatQS: Me,
            deepEqual: He,
          };
          var O,
            C =
              ((O = 0),
              function () {
                return ++O;
              });
          function B() {
            return C() + Math.random().toString(16).substr(2);
          }
          function k(e) {
            return e
              ? (
                  e ^
                  ((window && window.crypto && window.crypto.getRandomValues
                    ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                    : 16 * Math.random()) >>
                    (e / 4))
                ).toString(16)
              : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, k);
          }
          function S(e) {
            let t = "";
            for (var n in e)
              e.hasOwnProperty(n) &&
                (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return (t = t.replace(/&$/, "")), t;
          }
          function R(e) {
            return e && Object.getOwnPropertyNames(e).length > 0
              ? Object.keys(e)
                  .map((t) =>
                    "".concat(t, "=").concat(encodeURIComponent(e[t]))
                  )
                  .join("&")
              : "";
          }
          function j(e) {
            return "string" == typeof e
              ? e
                  .split(/\s*,\s*/)
                  .map((e) => e.match(/^(\d+)x(\d+)$/i))
                  .filter((e) => e)
                  .map((e) => {
                    let [t, n, i] = e;
                    return [parseInt(n, 10), parseInt(i, 10)];
                  })
              : Array.isArray(e)
              ? q(e)
                ? [e]
                : e.filter(q)
              : [];
          }
          function D(e) {
            return j(e).map(U);
          }
          function U(e) {
            return e[0] + "x" + e[1];
          }
          function _(e) {
            return { w: e[0], h: e[1] };
          }
          function q(e) {
            return X(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
          }
          function x() {
            return window.top;
          }
          function N() {
            return window.self;
          }
          function P() {
            return window.location;
          }
          function W() {
            $() && b && console.log.apply(console, H(arguments, "MESSAGE:"));
          }
          function V() {
            $() && v && console.info.apply(console, H(arguments, "INFO:"));
          }
          function M() {
            $() && y && console.warn.apply(console, H(arguments, "WARNING:")),
              I(s.qY.AUCTION_DEBUG, { type: "WARNING", arguments });
          }
          function G() {
            $() && E && console.error.apply(console, H(arguments, "ERROR:")),
              I(s.qY.AUCTION_DEBUG, { type: "ERROR", arguments });
          }
          function F(e) {
            function t(t) {
              return function () {
                for (
                  var n = arguments.length, i = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  i[r] = arguments[r];
                t(e, ...i);
              };
            }
            return {
              logError: t(G),
              logWarn: t(M),
              logMessage: t(W),
              logInfo: t(V),
            };
          }
          function H(e, t) {
            e = [].slice.call(e);
            let n = i.$W.getCurrentBidder();
            return (
              t && e.unshift(t),
              n && e.unshift(r("#aaa")),
              e.unshift(r("#3b88c3")),
              e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")),
              e
            );
            function r(e) {
              return "display: inline-block; color: #fff; background: ".concat(
                e,
                "; padding: 1px 4px; border-radius: 3px;"
              );
            }
          }
          function $() {
            return !!i.$W.getConfig("debug");
          }
          const L = (() => {
            const e = {
              border: "0px",
              hspace: "0",
              vspace: "0",
              marginWidth: "0",
              marginHeight: "0",
              scrolling: "no",
              frameBorder: "0",
              allowtransparency: "true",
            };
            return function (t, n) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              const r = t.createElement("iframe");
              return (
                Object.assign(r, Object.assign({}, e, n)),
                Object.assign(r.style, i),
                r
              );
            };
          })();
          function z() {
            return L(
              document,
              { id: B(), width: 0, height: 0, src: "about:blank" },
              { display: "none", height: "0px", width: "0px", border: "0px" }
            );
          }
          function J(e) {
            return Ve(P().search)[e] || "";
          }
          function K(e, t) {
            return p.call(e) === "[object " + t + "]";
          }
          function Q(e) {
            return K(e, l);
          }
          function Y(e) {
            return K(e, d);
          }
          const X = Array.isArray.bind(Array);
          function Z(e) {
            return K(e, u);
          }
          function ee(e) {
            return K(e, f);
          }
          function te(e) {
            return K(e, g);
          }
          function ne(e) {
            return (
              !e ||
              (X(e) || Y(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
            );
          }
          function ie(e) {
            return Y(e) && (!e || 0 === e.length);
          }
          function re(e, t) {
            if (Q(null == e ? void 0 : e.forEach)) return e.forEach(t, this);
            Object.entries(e || {}).forEach((e) => {
              let [n, i] = e;
              return t.call(this, i, n);
            });
          }
          function oe(e, t, n, i) {
            let r;
            (t = t || document),
              (r = n
                ? t.getElementsByTagName(n)
                : t.getElementsByTagName("head"));
            try {
              if (
                ((r = r.length ? r : t.getElementsByTagName("body")), r.length)
              ) {
                r = r[0];
                let t = i ? null : r.firstChild;
                return r.insertBefore(e, t);
              }
            } catch (e) {}
          }
          function se(e, t) {
            let n = null;
            return new a.k((i) => {
              const r = function () {
                e.removeEventListener("load", r),
                  e.removeEventListener("error", r),
                  null != n && window.clearTimeout(n),
                  i();
              };
              e.addEventListener("load", r),
                e.addEventListener("error", r),
                null != t && (n = window.setTimeout(r, t));
            });
          }
          function ae(e, t, n) {
            const i = new Image();
            t && T.isFn(t) && se(i, n).then(t), (i.src = e);
          }
          function ce(e) {
            if (!e) return;
            const t = z();
            var n;
            T.insertElement(t, document, "body"),
              (n = t.contentWindow.document).open(),
              n.write(e),
              n.close();
          }
          function de(e, t, n) {
            let i = T.createTrackPixelIframeHtml(
                e,
                !1,
                "allow-scripts allow-same-origin"
              ),
              r = document.createElement("div");
            r.innerHTML = i;
            let o = r.firstChild;
            t && T.isFn(t) && se(o, n).then(t),
              T.insertElement(o, document, "html", !0);
          }
          function le(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : encodeURI;
            if (!e) return "";
            let n =
              '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return (n += '<img src="' + t(e) + '"></div>'), n;
          }
          function ue(e) {
            return Array.from(e.matchAll(/\$({[^}]+})/g))
              .map((e) => e[1])
              .reduce(
                (e, t) => e.replace("$" + encodeURIComponent(t), "$" + t),
                encodeURI(e)
              );
          }
          function fe(e, t, n) {
            return n.indexOf(e) === t;
          }
          function ge(e, t) {
            return e.concat(t);
          }
          function pe(e, t) {
            if (e)
              return t
                .flatMap((e) => e.bids)
                .find((t) =>
                  ["bidId", "adId", "bid_id"].some((n) => t[n] === e)
                );
          }
          function he() {
            return (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A.adUnits
            )
              .map((e) => e.bids.map((e) => e.bidder).reduce(ge, []))
              .reduce(ge, [])
              .filter((e) => void 0 !== e)
              .filter(fe);
          }
          function me() {
            if (
              window.googletag &&
              Q(window.googletag.pubads) &&
              Q(window.googletag.pubads().getSlots)
            )
              return !0;
          }
          function be() {
            if (window.apntag && Q(window.apntag.getTag)) return !0;
          }
          const ve = (e, t) => t.cpm - e.cpm;
          function ye(e) {
            let t = e.length;
            for (; t > 0; ) {
              let n = Math.floor(Math.random() * t);
              t--;
              let i = e[t];
              (e[t] = e[n]), (e[n] = i);
            }
            return e;
          }
          function Ee(e) {
            return (0, r.Q)(e) || {};
          }
          function Ae() {
            try {
              return T.getWindowSelf() !== T.getWindowTop();
            } catch (e) {
              return !0;
            }
          }
          function we() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(
              navigator.userAgent
            );
          }
          function Ie(e, t) {
            if (e)
              return Object.entries(t).reduce((e, t) => {
                let [n, i] = t;
                return e.replace(
                  new RegExp("\\$\\{" + n + "\\}", "g"),
                  i || ""
                );
              }, e);
          }
          function Te() {
            return new Date().getTime();
          }
          function Oe() {
            return (
              (window.performance &&
                window.performance.now &&
                window.performance.now()) ||
              0
            );
          }
          function Ce() {
            return !1 !== i.$W.getConfig("deviceAccess");
          }
          function Be() {
            if (window.navigator.cookieEnabled || document.cookie.length)
              return !0;
          }
          function ke(e, t) {
            if (t < 1)
              throw new Error(
                "numRequiredCalls must be a positive number. Got ".concat(t)
              );
            let n = 0;
            return function () {
              n++, n === t && e.apply(this, arguments);
            };
          }
          function Se(e, t) {
            return e.reduce(function (e, n) {
              return (e[n[t]] = e[n[t]] || []).push(n), e;
            }, {});
          }
          function Re(e, t) {
            return t
              .filter((t) => e[t])
              .reduce((t, n) => Object.assign(t, { [n]: e[n] }), {});
          }
          function je(e) {
            const t = ["banner", "native", "video"],
              n = ["instream", "outstream", "adpod"];
            return (
              !!Object.keys(e).every((e) => (0, o.mK)(t, e)) &&
              (!e.video || !e.video.context || (0, o.mK)(n, e.video.context))
            );
          }
          function De(e, t, n) {
            return e
              .filter((e) => e.code === t)
              .flatMap((e) => e.bids)
              .filter((e) => e.bidder === n)
              .map((e) => e.params || {});
          }
          function Ue() {
            return (
              "1" === navigator.doNotTrack ||
              "1" === window.doNotTrack ||
              "1" === navigator.msDoNotTrack ||
              "yes" === navigator.doNotTrack
            );
          }
          const _e = (e, t) =>
            e.getAdUnitPath() === t || e.getSlotElementId() === t;
          function qe(e) {
            return (t) => _e(e, t);
          }
          function xe(e, t) {
            const n = Object.keys(e.mediaTypes || { banner: "banner" }).join(
              ", "
            );
            return "\n    "
              .concat(e.code, " is a ")
              .concat(n, " ad unit\n    containing bidders that don't support ")
              .concat(n, ": ")
              .concat(t, ".\n    This bidder won't fetch demand.\n  ");
          }
          const Ne = Number.isInteger.bind(Number);
          function Pe(e, t) {
            return "object" != typeof e
              ? {}
              : t.reduce((n, i, r) => {
                  if ("function" == typeof i) return n;
                  let o = i,
                    s = i.match(/^(.+?)\sas\s(.+?)$/i);
                  s && ((i = s[1]), (o = s[2]));
                  let a = e[i];
                  return (
                    "function" == typeof t[r + 1] && (a = t[r + 1](a, n)),
                    void 0 !== a && (n[o] = a),
                    n
                  );
                }, {});
          }
          function We(e, t) {
            return X(e) && (!t || e.length === t) && e.every((e) => Ne(e));
          }
          function Ve(e) {
            return e
              ? e
                  .replace(/^\?/, "")
                  .split("&")
                  .reduce((e, t) => {
                    let [n, i] = t.split("=");
                    return (
                      /\[\]$/.test(n)
                        ? ((n = n.replace("[]", "")),
                          (e[n] = e[n] || []),
                          e[n].push(i))
                        : (e[n] = i || ""),
                      e
                    );
                  }, {})
              : {};
          }
          function Me(e) {
            return Object.keys(e)
              .map((t) =>
                Array.isArray(e[t])
                  ? e[t].map((e) => "".concat(t, "[]=").concat(e)).join("&")
                  : "".concat(t, "=").concat(e[t])
              )
              .join("&");
          }
          function Ge(e, t) {
            let n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
              ? (n.href = e)
              : (n.href = decodeURIComponent(e));
            let i = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
              href: n.href,
              protocol: (n.protocol || "").replace(/:$/, ""),
              hostname: n.hostname,
              port: +n.port,
              pathname: n.pathname.replace(/^(?!\/)/, "/"),
              search: i ? n.search : T.parseQS(n.search || ""),
              hash: (n.hash || "").replace(/^#/, ""),
              host: n.host || window.location.host,
            };
          }
          function Fe(e) {
            return (
              (e.protocol || "http") +
              "://" +
              (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
              (e.pathname || "") +
              (e.search ? "?".concat(T.formatQS(e.search || "")) : "") +
              (e.hash ? "#".concat(e.hash) : "")
            );
          }
          function He(e, t) {
            let { checkTypes: n = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (e === t) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof t ||
              null === t ||
              (n && e.constructor !== t.constructor)
            )
              return !1;
            {
              const i = Object.keys(e);
              if (i.length !== Object.keys(t).length) return !1;
              for (let r of i) {
                if (!t.hasOwnProperty(r)) return !1;
                if (!He(e[r], t[r], { checkTypes: n })) return !1;
              }
              return !0;
            }
          }
          function $e(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            if (!n.length) return e;
            const r = n.shift();
            if (ee(e) && ee(r))
              for (const t in r)
                ee(r[t])
                  ? (e[t] || Object.assign(e, { [t]: {} }), $e(e[t], r[t]))
                  : X(r[t])
                  ? e[t]
                    ? X(e[t]) &&
                      r[t].forEach((n) => {
                        let i = 1;
                        for (let r = 0; r < e[t].length; r++)
                          if (He(e[t][r], n)) {
                            i = 0;
                            break;
                          }
                        i && e[t].push(n);
                      })
                    : Object.assign(e, { [t]: [...r[t]] })
                  : Object.assign(e, { [t]: r[t] });
            return $e(e, ...n);
          }
          function Le(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = function (e, t) {
                if (Q(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return (
                  4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n
                );
              },
              i = 3735928559 ^ t,
              r = 1103547991 ^ t;
            for (let t, o = 0; o < e.length; o++)
              (t = e.charCodeAt(o)),
                (i = n(i ^ t, 2654435761)),
                (r = n(r ^ t, 1597334677));
            return (
              (i =
                n(i ^ (i >>> 16), 2246822507) ^ n(r ^ (r >>> 13), 3266489909)),
              (r =
                n(r ^ (r >>> 16), 2246822507) ^ n(i ^ (i >>> 13), 3266489909)),
              (4294967296 * (2097151 & r) + (i >>> 0)).toString()
            );
          }
          function ze(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (e) {
                    return e;
                  };
            const n = new Map(),
              i = function () {
                const i = t.apply(this, arguments);
                return n.has(i) || n.set(i, e.apply(this, arguments)), n.get(i);
              };
            return (i.clear = n.clear.bind(n)), i;
          }
          function Je(e, t) {
            Object.entries(t).forEach((t) => {
              let [n, i] = t;
              return e.setAttribute(n, i);
            });
          }
          function Ke(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : (e) => e,
              i = 0,
              r = e.length && e.length - 1;
            const o = n(t);
            for (; r - i > 1; ) {
              const t = i + Math.round((r - i) / 2);
              o > n(e[t]) ? (i = t) : (r = t);
            }
            for (; e.length > i && o > n(e[i]); ) i++;
            return i;
          }
        },
        2621: (e, t, n) => {
          function i(e) {
            var t;
            return (
              null == e ||
              !e.gdprApplies ||
              !0 ===
                (null == e ||
                null === (t = e.vendorData) ||
                void 0 === t ||
                null === (t = t.purpose) ||
                void 0 === t ||
                null === (t = t.consents) ||
                void 0 === t
                  ? void 0
                  : t[1])
            );
          }
          n.d(t, { C: () => i });
        },
        6894: (e, t, n) => {
          n.d(t, { BO: () => g, K7: () => p });
          var i = n(3272);
          const r = "performanceMetrics",
            o =
              window.performance && window.performance.now
                ? () => window.performance.now()
                : () => Date.now(),
            s = new WeakMap();
          function a() {
            let {
              now: e = o,
              mkNode: t = l,
              mkTimer: n = d,
              mkRenamer: i = (e) => e,
              nodes: r = s,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            return function () {
              return (function o(s) {
                let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : (e) => ({
                        forEach(t) {
                          t(e);
                        },
                      });
                a = i(a);
                const c =
                  ((d = "timestamps"),
                  function (e) {
                    return s.dfWalk({
                      visit(t, n) {
                        const i = n[d];
                        if (i.hasOwnProperty(e)) return i[e];
                      },
                    });
                  });
                var d;
                function l(e, t) {
                  const n = a(e);
                  s.dfWalk({
                    follow: (e, t) => t.propagate && (!e || !e.stopPropagation),
                    visit(e, i) {
                      n.forEach((n) => {
                        null == e
                          ? (i.metrics[n] = t)
                          : (i.groups.hasOwnProperty(n) || (i.groups[n] = []),
                            i.groups[n].push(t));
                      });
                    },
                  });
                }
                function u(t) {
                  return n(e, (e) => l(t, e));
                }
                function f() {
                  let e = {};
                  return (
                    s.dfWalk({
                      visit(t, n) {
                        e = Object.assign(
                          {},
                          !t || t.includeGroups ? n.groups : null,
                          n.metrics,
                          e
                        );
                      },
                    }),
                    e
                  );
                }
                const g = {
                  startTiming: u,
                  measureTime: function (e, t) {
                    return u(e).stopAfter(t)();
                  },
                  measureHookTime: function (e, t, n) {
                    const i = u(e);
                    return n(
                      (function (e) {
                        const t = i.stopBefore(e);
                        return (
                          (t.bail = e.bail && i.stopBefore(e.bail)),
                          (t.stopTiming = i),
                          (t.untimed = e),
                          t
                        );
                      })(t)
                    );
                  },
                  checkpoint: function (t) {
                    s.timestamps[t] = e();
                  },
                  timeSince: function (t, n) {
                    const i = c(t),
                      r = null != i ? e() - i : null;
                    return null != n && l(n, r), r;
                  },
                  timeBetween: function (e, t, n) {
                    const i = c(e),
                      r = c(t),
                      o = null != i && null != r ? r - i : null;
                    return null != n && l(n, o), o;
                  },
                  setMetric: l,
                  getMetrics: f,
                  fork: function () {
                    let {
                      propagate: e = !0,
                      stopPropagation: n = !1,
                      includeGroups: i = !1,
                    } = arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                    return o(
                      t([
                        [
                          s,
                          {
                            propagate: e,
                            stopPropagation: n,
                            includeGroups: i,
                          },
                        ],
                      ]),
                      a
                    );
                  },
                  join: function (e) {
                    let {
                      propagate: t = !0,
                      stopPropagation: n = !1,
                      includeGroups: i = !1,
                    } = arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                    const o = r.get(e);
                    null != o &&
                      o.addParent(s, {
                        propagate: t,
                        stopPropagation: n,
                        includeGroups: i,
                      });
                  },
                  newMetrics: function () {
                    return o(s.newSibling(), a);
                  },
                  renameWith: function (e) {
                    return o(s, e);
                  },
                  toJSON: () => f(),
                };
                return r.set(g, s), g;
              })(t([]));
            };
          }
          function c(e, t, n) {
            return function () {
              t && t();
              try {
                return e.apply(this, arguments);
              } finally {
                n && n();
              }
            };
          }
          function d(e, t) {
            const n = e();
            let i = !1;
            function r() {
              i || (t(e() - n), (i = !0));
            }
            return (
              (r.stopBefore = (e) => c(e, r)),
              (r.stopAfter = (e) => c(e, null, r)),
              r
            );
          }
          function l(e) {
            return {
              metrics: {},
              timestamps: {},
              groups: {},
              addParent(t, n) {
                e.push([t, n]);
              },
              newSibling: () => l(e.slice()),
              dfWalk() {
                let t,
                  {
                    visit: n,
                    follow: i = () => !0,
                    visited: r = new Set(),
                    inEdge: o,
                  } = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (!r.has(this)) {
                  if ((r.add(this), (t = n(o, this)), null != t)) return t;
                  for (const [s, a] of e)
                    if (
                      i(o, a) &&
                      ((t = s.dfWalk({
                        visit: n,
                        follow: i,
                        visited: r,
                        inEdge: a,
                      })),
                      null != t)
                    )
                      return t;
                }
              },
            };
          }
          const u = (() => {
            const e = function () {},
              t = () => ({}),
              n = { forEach: e },
              i = () => null;
            (i.stopBefore = (e) => e), (i.stopAfter = (e) => e);
            const r = Object.defineProperties(
              { dfWalk: e, newSibling: () => r, addParent: e },
              Object.fromEntries(
                ["metrics", "timestamps", "groups"].map((e) => [e, { get: t }])
              )
            );
            return a({
              now: () => 0,
              mkNode: () => r,
              mkRenamer: () => () => n,
              mkTimer: () => i,
              nodes: { get: e, set: e },
            })();
          })();
          let f = !0;
          function g(e) {
            return (f && e) || u;
          }
          i.$W.getConfig(r, (e) => {
            f = !!e[r];
          });
          const p = (() => {
            const e = a();
            return function () {
              return f ? e() : u;
            };
          })();
          function h(e, t) {
            return function (n, i) {
              return function (r) {
                for (
                  var o = arguments.length,
                    s = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  s[a - 1] = arguments[a];
                const c = this;
                return g(t.apply(c, s)).measureHookTime(e + n, r, function (e) {
                  return i.call(c, e, ...s);
                });
              };
            };
          }
          h("requestBids.", (e) => e.metrics),
            h("addBidResponse.", (e, t) => t.metrics);
        },
        5555: (e, t, n) => {
          function i(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function r(e, t) {
            return e.get(s(e, t));
          }
          function o(e, t, n) {
            return e.set(s(e, t), n), n;
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          n.d(t, { k: () => u, v: () => g });
          const a = 0,
            c = 1;
          var d = new WeakMap(),
            l = new WeakMap();
          class u {
            static timeout() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return new u((t) => {
                0 === e ? t() : setTimeout(t, e);
              });
            }
            constructor(e) {
              if (
                (i(this, d, void 0), i(this, l, void 0), "function" != typeof e)
              )
                throw new Error("resolver not a function");
              const t = [],
                n = [];
              let [r, s] = [a, c].map(
                (e) =>
                  function (i) {
                    if (
                      e === a &&
                      "function" == typeof (null == i ? void 0 : i.then)
                    )
                      i.then(r, s);
                    else if (!t.length)
                      for (t.push(e, i); n.length; ) n.shift()();
                  }
              );
              try {
                e(r, s);
              } catch (e) {
                s(e);
              }
              o(d, this, t), o(l, this, n);
            }
            then(e, t) {
              const n = r(d, this);
              return new this.constructor((i, o) => {
                const s = () => {
                  let r = n[1],
                    [s, c] = n[0] === a ? [e, i] : [t, o];
                  if ("function" == typeof s) {
                    try {
                      r = s(r);
                    } catch (e) {
                      return void o(e);
                    }
                    c = i;
                  }
                  c(r);
                };
                n.length ? s() : r(l, this).push(s);
              });
            }
            catch(e) {
              return this.then(null, e);
            }
            finally(e) {
              let t;
              return this.then(
                (n) => ((t = n), e()),
                (n) => ((t = this.constructor.reject(n)), e())
              ).then(() => t);
            }
            static race(e) {
              return new this((t, n) => {
                s(u, this, f).call(this, e, (e, i) => (e ? t(i) : n(i)));
              });
            }
            static all(e) {
              return new this((t, n) => {
                let i = [];
                s(u, this, f).call(
                  this,
                  e,
                  (e, t, r) => (e ? (i[r] = t) : n(t)),
                  () => t(i)
                );
              });
            }
            static allSettled(e) {
              return new this((t) => {
                let n = [];
                s(u, this, f).call(
                  this,
                  e,
                  (e, t, i) =>
                    (n[i] = e
                      ? { status: "fulfilled", value: t }
                      : { status: "rejected", reason: t }),
                  () => t(n)
                );
              });
            }
            static resolve(e) {
              return new this((t) => t(e));
            }
            static reject(e) {
              return new this((t, n) => n(e));
            }
          }
          function f(e, t, n) {
            let i = e.length;
            function r() {
              t.apply(this, arguments), --i <= 0 && n && n();
            }
            0 === e.length && n
              ? n()
              : e.forEach((e, t) =>
                  this.resolve(e).then(
                    (e) => r(!0, e, t),
                    (e) => r(!1, e, t)
                  )
                );
          }
          function g() {
            let e,
              t,
              { promiseFactory: n = (e) => new u(e) } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            function i(e) {
              return (t) => e(t);
            }
            return {
              promise: n((n, i) => {
                (e = n), (t = i);
              }),
              resolve: i(e),
              reject: i(t),
            };
          }
        },
        2713: (e, t, n) => {
          function i(e, t) {
            return e === t ? 0 : e < t ? -1 : 1;
          }
          function r() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (e) => e;
            return (t, n) => i(e(t), e(n));
          }
          function o() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i;
            return (t, n) => -e(t, n) || 0;
          }
          function s() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e, n) {
              for (const i of t) {
                const t = i(e, n);
                if (0 !== t) return t;
              }
              return 0;
            };
          }
          function a() {
            return (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i;
              return (t, n) => (e(n, t) < 0 ? n : t);
            })(
              o(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i
              )
            );
          }
          n.d(t, { Bq: () => u, Vk: () => l });
          const c = r((e) => e.cpm),
            d = r((e) => e.responseTimestamp),
            l = a(s(c, o(r((e) => e.timeToRespond)))),
            u = a(s(c, o(d)));
          a(s(c, d));
        },
        6853: (e, t, n) => {
          n.d(t, { H: () => l });
          var i = n(5555),
            r = n(1069);
          let o = null,
            s = 0,
            a = [];
          function c() {
            var e;
            document.hidden
              ? (o = Date.now())
              : ((s += Date.now() - (null !== (e = o) && void 0 !== e ? e : 0)),
                (o = null),
                a.forEach((e) => {
                  let { callback: t, startTime: n, setTimerId: i } = e;
                  return i(d(t, s - n)());
                }),
                (a = []));
          }
          function d(e, t) {
            const n = s;
            let i = setTimeout(() => {
              s === n && null == o
                ? e()
                : null != o
                ? a.push({
                    callback: e,
                    startTime: n,
                    setTimerId(e) {
                      i = e;
                    },
                  })
                : (i = d(e, s - n)());
            }, t);
            return () => i;
          }
          function l() {
            let {
              startTime: e = r.vE,
              ttl: t = () => null,
              monotonic: n = !1,
              slack: o = 5e3,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const s = new Map(),
              a = [],
              c = [],
              l = n
                ? (e) => c.push(e)
                : (e) =>
                    c.splice(
                      (0, r.El)(c, e, (e) => e.expiry),
                      0,
                      e
                    );
            let u, f;
            function g() {
              if ((f && clearTimeout(f), c.length > 0)) {
                const e = (0, r.vE)();
                (u = Math.max(e, c[0].expiry + o)),
                  (f = d(() => {
                    const e = (0, r.vE)();
                    let t = 0;
                    for (const n of c) {
                      if (n.expiry > e) break;
                      a.forEach((e) => {
                        try {
                          e(n.item);
                        } catch (e) {
                          (0, r.vV)(e);
                        }
                      }),
                        s.delete(n.item),
                        t++;
                    }
                    c.splice(0, t), (f = null), g();
                  }, u - e));
              } else f = null;
            }
            function p(n) {
              const r = {},
                s = h;
              let a;
              const [c, d] = Object.entries({ start: e, delta: t }).map((e) => {
                  let t,
                    [c, d] = e;
                  return function () {
                    const e = (t = {});
                    i.k.resolve(d(n)).then((n) => {
                      e === t &&
                        ((r[c] = n),
                        s === h &&
                          null != r.start &&
                          null != r.delta &&
                          ((a = r.start + r.delta),
                          l(p),
                          (null == f || u > a + o) && g()));
                    });
                  };
                }),
                p = {
                  item: n,
                  refresh: d,
                  get expiry() {
                    return a;
                  },
                };
              return c(), d(), p;
            }
            let h = {};
            return {
              [Symbol.iterator]: () => s.keys(),
              add(e) {
                !s.has(e) && s.set(e, p(e));
              },
              clear() {
                (c.length = 0), g(), s.clear(), (h = {});
              },
              toArray: () => Array.from(s.keys()),
              refresh() {
                (c.length = 0), g();
                for (const e of s.values()) e.refresh();
              },
              onExpiry: (e) => (
                a.push(e),
                () => {
                  const t = a.indexOf(e);
                  t >= 0 && a.splice(t, 1);
                }
              ),
            };
          }
          document.addEventListener("visibilitychange", c);
        },
        3895: (e, t, n) => {
          n.d(t, {
            H6: () => a,
            V0: () => l,
            Zy: () => d,
            aP: () => u,
            mn: () => c,
            vk: () => f,
          });
          var i = n(1069),
            r = n(3272),
            o = n(9214),
            s = n(6881);
          const a = "outstream",
            c = "instream",
            d = new Map([
              [
                "mimes",
                (e) =>
                  Array.isArray(e) &&
                  e.length > 0 &&
                  e.every((e) => "string" == typeof e),
              ],
              ["minduration", i.Fq],
              ["maxduration", i.Fq],
              ["startdelay", i.Fq],
              ["maxseq", i.Fq],
              ["poddur", i.Fq],
              ["protocols", i.Uu],
              ["w", i.Fq],
              ["h", i.Fq],
              ["podid", i.O8],
              ["podseq", i.Fq],
              ["rqddurs", i.Uu],
              ["placement", i.Fq],
              ["plcmt", i.Fq],
              ["linearity", i.Fq],
              ["skip", (e) => [1, 0].includes(e)],
              ["skipmin", i.Fq],
              ["skipafter", i.Fq],
              ["sequence", i.Fq],
              ["slotinpod", i.Fq],
              ["mincpmpersec", i.Et],
              ["battr", i.Uu],
              ["maxextended", i.Fq],
              ["minbitrate", i.Fq],
              ["maxbitrate", i.Fq],
              ["boxingallowed", i.Fq],
              ["playbackmethod", i.Uu],
              ["playbackend", i.Fq],
              ["delivery", i.Uu],
              ["pos", i.Fq],
              ["api", i.Uu],
              ["companiontype", i.Uu],
              ["poddedupe", i.Uu],
            ]);
          function l(e) {
            var t;
            const n =
              null == e || null === (t = e.mediaTypes) || void 0 === t
                ? void 0
                : t.video;
            null != n &&
              null == n.plcmt &&
              (n.context === a || [2, 3, 4].includes(n.placement)
                ? (n.plcmt = 4)
                : n.context !== a &&
                  [2, 6].includes(n.playbackmethod) &&
                  (n.plcmt = 2));
          }
          function u(e, t) {
            var n;
            const r =
              null == e || null === (n = e.mediaTypes) || void 0 === n
                ? void 0
                : n.video;
            (0, i.Qd)(r)
              ? null != r &&
                Object.entries(r).forEach((n) => {
                  let [o, s] = n;
                  if (!d.has(o)) return;
                  d.get(o)(s) ||
                    ("function" == typeof t
                      ? t(o, s, e)
                      : (delete r[o],
                        (0, i.JE)(
                          'Invalid prop in adUnit "'
                            .concat(
                              e.code,
                              '": Invalid value for mediaTypes.video.'
                            )
                            .concat(
                              o,
                              " ORTB property. The property has been removed."
                            )
                        )));
                })
              : (0, i.JE)(
                  "validateOrtbVideoFields: videoParams must be an object."
                );
          }
          function f(e) {
            var t;
            let { index: n = s.n.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const i =
                null === (t = n.getMediaTypes(e)) || void 0 === t
                  ? void 0
                  : t.video,
              r = i && (null == i ? void 0 : i.context),
              o = i && (null == i ? void 0 : i.useCacheKey),
              a = n.getAdUnit(e);
            return g(e, a, i, r, o);
          }
          const g = (0, o.A_)(
            "sync",
            function (e, t, n, o, s) {
              return n && (s || o !== a)
                ? r.$W.getConfig("cache.url") || !e.vastXml || e.vastUrl
                  ? !(!e.vastUrl && !e.vastXml)
                  : ((0, i.vV)(
                      '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
                    ),
                    !1)
                : !(o === a && !s) ||
                    !!(e.renderer || (t && t.renderer) || n.renderer);
            },
            "checkVideoBidSetup"
          );
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [85],
      {
        4595: (s, d, e) => {
          e.d(d, { G: () => n });
          const n =
            '(()=>{"use strict";window.render=function({ad:d,adUrl:e,width:i,height:r},{mkFrame:n},o){if(!d&&!e)throw{reason:"noAd",message:"Missing ad markup or URL"};{const s=o.document,t={width:i,height:r};e&&!d?t.src=e:t.srcdoc=d,s.body.appendChild(n(s,t))}}})();';
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [247],
      {
        8656: (r, a, e) => {
          e.d(a, { D: () => o });
          var n = e(3858),
            t = e(433);
          const s = ["user.keywords"].concat(
            n.Dy.flatMap((r) =>
              ["keywords", "content.keywords"].map((a) =>
                "".concat(r, ".").concat(a)
              )
            )
          );
          function o(r) {
            for (
              var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), n = 1;
              n < a;
              n++
            )
              e[n - 1] = arguments[n];
            return (function () {
              const r = new Set();
              for (
                var a = arguments.length, e = new Array(a), n = 0;
                n < a;
                n++
              )
                e[n] = arguments[n];
              return (
                e
                  .filter((r) => r)
                  .flatMap((r) => (Array.isArray(r) ? r : r.split(",")))
                  .map((r) => r.replace(/^\s*/, "").replace(/\s*$/, ""))
                  .filter((r) => r)
                  .forEach((a) => r.add(a)),
                Array.from(r.keys())
              );
            })(...s.map((a) => (0, t.A)(r, a)), ...e);
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [444],
      {
        554: (e, t, r) => {
          r.d(t, { QF: () => g, T_: () => f, gg: () => u });
          var n = r(1069),
            o = r(433),
            i = r(8656),
            d = r(3858);
          const c = {
              526: "1plusX",
              527: "1plusX",
              541: "captify_segments",
              540: "perid",
            },
            a = ["user.data"].concat(
              d.Dy.map((e) => "".concat(e, ".content.data"))
            );
          function l(e, t, r) {
            return null == t
              ? r
              : (0, n.O8)(t)
              ? t
              : (0, n.Et)(t)
              ? t.toString()
              : void (0, n.JE)(
                  "Unsuported type for param: " + e + " required type: String"
                );
          }
          function u(e) {
            return (0, n.O8)(e) && "" !== e ? s(e.split(/\s*(?:,)\s*/)) : {};
          }
          function s(e) {
            const t = {};
            return (
              e.forEach((e) => {
                if (-1 !== e.indexOf("=")) {
                  let r = e.split("="),
                    n = r[0],
                    o = r[1];
                  t.hasOwnProperty(n) ? t[n].push(o) : (t[n] = [o]);
                } else t.hasOwnProperty(e) || (t[e] = []);
              }),
              t
            );
          }
          function f() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "keywords";
              const r = [];
              return (
                (0, n.bu)(e, (e, o) => {
                  if ((0, n.cy)(e)) {
                    let r = [];
                    (0, n.bu)(e, (e) => {
                      ((e = l(t + "." + o, e)) || "" === e) && r.push(e);
                    }),
                      (e = r);
                  } else {
                    if (((e = l(t + "." + o, e)), !(0, n.O8)(e))) return;
                    e = [e];
                  }
                  e = e.filter((e) => "" !== e);
                  const i = { key: o };
                  e.length > 0 && (i.value = e), r.push(i);
                }),
                r
              );
            })(
              (0, n.D9)(
                ...t.map((e) =>
                  Object.fromEntries(
                    Object.entries(e || {}).map((e) => {
                      let [t, r] = e;
                      return [t, (0, n.Et)(r) || (0, n.O8)(r) ? [r] : r];
                    })
                  )
                )
              )
            );
          }
          function g(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return f(
              (function (e) {
                return s((0, i.D)(e));
              })(e),
              (function (e) {
                let t = {};
                return (
                  a.forEach((r) => {
                    ((0, o.A)(e, r) || []).forEach((e) => {
                      var r;
                      const n =
                        c[
                          null == e || null === (r = e.ext) || void 0 === r
                            ? void 0
                            : r.segtax
                        ];
                      n &&
                        e.segment.forEach((e) => {
                          t[n] ? t[n].push(e.id) : (t[n] = [e.id]);
                        });
                    });
                  }),
                  t
                );
              })(e),
              ...r
            );
          }
        },
        2349: (e, t, r) => {
          r.d(t, { DX: () => i, GS: () => d, vk: () => o });
          var n = r(1069);
          function o(e) {
            return e
              .replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                return "_" + t.toLowerCase();
              })
              .replace(/^_/, "");
          }
          const i = [
            { code: "appnexusAst", gvlid: 32 },
            { code: "emxdigital", gvlid: 183 },
            { code: "emetriq", gvlid: 213 },
            { code: "pagescience", gvlid: 32 },
            { code: "gourmetads", gvlid: 32 },
            { code: "matomy", gvlid: 32 },
            { code: "featureforward", gvlid: 32 },
            { code: "oftmedia", gvlid: 32 },
            { code: "adasta", gvlid: 32 },
            { code: "beintoo", gvlid: 618 },
            { code: "projectagora", gvlid: 1032 },
            { code: "stailamedia", gvlid: 32 },
            { code: "uol", gvlid: 32 },
            { code: "adzymic", gvlid: 723 },
          ];
          function d(e, t) {
            let r = [];
            for (let o = 0; o < t; o++) {
              let t = (0, n.Qd)(e) ? (0, n.Go)(e) : e;
              r.push(t);
            }
            return r;
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [126],
      {
        5761: (e, r, n) => {
          n.d(r, { $: () => t });
          var s = n(1069);
          function t(e, r) {
            return (
              Object.keys(e).forEach((n) => {
                var t, u;
                r[n] &&
                  ((0, s.fp)(e[n])
                    ? (r[n] = e[n](r[n]))
                    : (r[n] =
                        ((t = e[n]),
                        (u = r[n]),
                        "string" === t
                          ? u && u.toString()
                          : "number" === t
                          ? Number(u)
                          : u)),
                  isNaN(r[n]) && delete r.key);
              }),
              r
            );
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [982],
      {
        9906: (e, l, s) => {
          function t(e, l) {
            let s = [];
            for (let t = 0; t < Math.ceil(e.length / l); t++) {
              let h = t * l,
                n = h + l;
              s.push(e.slice(h, n));
            }
            return s;
          }
          s.d(l, { i: () => t });
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [698],
      {
        4673: (A, B, I) => {
          I.d(B, { n: () => s });
          const s = {
            1: "IAB20-3",
            2: "IAB18-5",
            3: "IAB10-1",
            4: "IAB2-3",
            5: "IAB19-8",
            6: "IAB22-1",
            7: "IAB18-1",
            8: "IAB12-3",
            9: "IAB5-1",
            10: "IAB4-5",
            11: "IAB13-4",
            12: "IAB8-7",
            13: "IAB9-7",
            14: "IAB7-1",
            15: "IAB20-18",
            16: "IAB10-7",
            17: "IAB19-18",
            18: "IAB13-6",
            19: "IAB18-4",
            20: "IAB1-5",
            21: "IAB1-6",
            22: "IAB3-4",
            23: "IAB19-13",
            24: "IAB22-2",
            25: "IAB3-9",
            26: "IAB17-18",
            27: "IAB19-6",
            28: "IAB1-7",
            29: "IAB9-30",
            30: "IAB20-7",
            31: "IAB20-17",
            32: "IAB7-32",
            33: "IAB16-5",
            34: "IAB19-34",
            35: "IAB11-5",
            36: "IAB12-3",
            37: "IAB11-4",
            38: "IAB12-3",
            39: "IAB9-30",
            41: "IAB7-44",
            42: "IAB7-1",
            43: "IAB7-30",
            50: "IAB19-30",
            51: "IAB17-12",
            52: "IAB19-30",
            53: "IAB3-1",
            55: "IAB13-2",
            56: "IAB19-30",
            57: "IAB19-30",
            58: "IAB7-39",
            59: "IAB22-1",
            60: "IAB7-39",
            61: "IAB21-3",
            62: "IAB5-1",
            63: "IAB12-3",
            64: "IAB20-18",
            65: "IAB11-2",
            66: "IAB17-18",
            67: "IAB9-9",
            68: "IAB9-5",
            69: "IAB7-44",
            71: "IAB22-3",
            73: "IAB19-30",
            74: "IAB8-5",
            78: "IAB22-1",
            85: "IAB12-2",
            86: "IAB22-3",
            87: "IAB11-3",
            112: "IAB7-32",
            113: "IAB7-32",
            114: "IAB7-32",
            115: "IAB7-32",
            118: "IAB9-5",
            119: "IAB9-5",
            120: "IAB9-5",
            121: "IAB9-5",
            122: "IAB9-5",
            123: "IAB9-5",
            124: "IAB9-5",
            125: "IAB9-5",
            126: "IAB9-5",
            127: "IAB22-1",
            132: "IAB1-2",
            133: "IAB19-30",
            137: "IAB3-9",
            138: "IAB19-3",
            140: "IAB2-3",
            141: "IAB2-1",
            142: "IAB2-3",
            143: "IAB17-13",
            166: "IAB11-4",
            175: "IAB3-1",
            176: "IAB13-4",
            182: "IAB8-9",
            183: "IAB3-5",
          };
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [618],
      {
        7967: (e, i, d) => {
          d.d(i, { m: () => g });
          var t = d(9466),
            n = d(1e3),
            r = d(433),
            a = d(1069),
            s = d(1371),
            o = d(5561);
          const c = { [s.D4]: "banner", [s.s6]: "native", [s.G_]: "video" };
          var b = d(8046),
            p = d(3272),
            l = d(3172);
          var v = d(7873);
          const u = {
            [n.S3]: {
              extPrebid: {
                fn: function (e, i) {
                  var d;
                  (0, l.J)(
                    e,
                    "ext.prebid",
                    (0, a.D9)(
                      {
                        auctiontimestamp: i.auctionStart,
                        targeting: {
                          includewinners: !0,
                          includebidderkeys: !1,
                        },
                      },
                      null === (d = e.ext) || void 0 === d ? void 0 : d.prebid
                    )
                  ),
                    p.$W.getConfig("debug") && (e.ext.prebid.debug = !0);
                },
              },
              extPrebidChannel: {
                fn: function (e) {
                  var i;
                  (0, l.J)(
                    e,
                    "ext.prebid.channel",
                    Object.assign(
                      { name: "pbjs", version: (0, v.m)().version },
                      null === (i = e.ext) ||
                        void 0 === i ||
                        null === (i = i.prebid) ||
                        void 0 === i
                        ? void 0
                        : i.channel
                    )
                  );
                },
              },
              extPrebidAliases: {
                fn: function (e, i, d) {
                  let { am: t = b.Ay } =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  if (t.aliasRegistry[i.bidderCode]) {
                    const d = t.bidderRegistry[i.bidderCode];
                    if (!d || !d.getSpec().skipPbsAliasing) {
                      var n;
                      (0, l.J)(
                        e,
                        "ext.prebid.aliases.".concat(i.bidderCode),
                        t.aliasRegistry[i.bidderCode]
                      );
                      const r =
                        p.$W.getConfig("gvlMapping.".concat(i.bidderCode)) ||
                        (null == d || null === (n = d.getSpec) || void 0 === n
                          ? void 0
                          : n.call(d).gvlid);
                      r &&
                        (0, l.J)(
                          e,
                          "ext.prebid.aliasgvlids.".concat(i.bidderCode),
                          r
                        );
                    }
                  }
                },
              },
            },
            [n.Tb]: {
              params: {
                fn: function (e, i) {
                  let d = i.params;
                  d && (0, l.J)(e, "ext.prebid.bidder.".concat(i.bidder), d);
                },
              },
              adUnitCode: {
                fn: function (e, i) {
                  const d = i.adUnitCode;
                  d && (0, l.J)(e, "ext.prebid.adunitcode", d);
                },
              },
            },
            [n.WR]: {
              mediaType: {
                fn: function (e, i, d) {
                  let t = d.mediaType;
                  var n;
                  t ||
                    ((t = o.X.hasOwnProperty(i.mtype)
                      ? o.X[i.mtype]
                      : null === (n = i.ext) ||
                        void 0 === n ||
                        null === (n = n.prebid) ||
                        void 0 === n
                      ? void 0
                      : n.type),
                    c.hasOwnProperty(t) || (t = s.D4)),
                    (e.mediaType = t);
                },
                priority: 99,
              },
              videoCache: {
                fn: function (e, i) {
                  if (e.mediaType === s.G_) {
                    let { cacheId: d, url: t } =
                      (0, r.A)(i, "ext.prebid.cache.vastXml") || {};
                    if (!d || !t) {
                      const {
                        hb_uuid: e,
                        hb_cache_host: n,
                        hb_cache_path: a,
                      } = (0, r.A)(i, "ext.prebid.targeting") || {};
                      e &&
                        n &&
                        a &&
                        ((d = e),
                        (t = "https://"
                          .concat(n)
                          .concat(a, "?uuid=")
                          .concat(e)));
                    }
                    d &&
                      t &&
                      Object.assign(e, { videoCacheKey: d, vastUrl: t });
                  }
                },
                priority: -10,
              },
              bidderCode: {
                fn(e, i, d) {
                  var t;
                  (e.bidderCode = d.seatbid.seat),
                    (e.adapterCode =
                      (0, r.A)(i, "ext.prebid.meta.adaptercode") ||
                      (null === (t = d.bidRequest) || void 0 === t
                        ? void 0
                        : t.bidder) ||
                      e.bidderCode);
                },
              },
              pbsBidId: {
                fn(e, i) {
                  const d = (0, r.A)(i, "ext.prebid.bidid");
                  (0, a.O8)(d) && (e.pbsBidId = d);
                },
              },
              adserverTargeting: {
                fn(e, i) {
                  const d = (0, r.A)(i, "ext.prebid.targeting");
                  (0, a.Qd)(d) && (e.adserverTargeting = d);
                },
              },
              extPrebidMeta: {
                fn(e, i) {
                  e.meta = (0, a.D9)(
                    {},
                    (0, r.A)(i, "ext.prebid.meta"),
                    e.meta
                  );
                },
              },
              pbsWurl: {
                fn(e, i) {
                  const d = (0, r.A)(i, "ext.prebid.events.win");
                  (0, a.O8)(d) && (e.pbsWurl = d);
                },
              },
            },
            [n.Cf]: {
              serverSideStats: {
                fn(e, i, d) {
                  Object.entries({
                    errors: "serverErrors",
                    responsetimemillis: "serverResponseTimeMs",
                  }).forEach((e) => {
                    let [t, n] = e;
                    const a = (0, r.A)(
                      i,
                      "ext.".concat(t, ".").concat(d.bidderRequest.bidderCode)
                    );
                    a &&
                      ((d.bidderRequest[n] = a),
                      d.bidRequests.forEach((e) => (e[n] = a)));
                  });
                },
              },
            },
          };
          var f = d(9766);
          const g = (0, a.Bj)(() => (0, t.U)((0, f.T)(), u, (0, n.yB)(n.e4)));
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [498],
      {
        9766: (e, t, n) => {
          n.d(t, { T: () => m, A: () => c });
          const r = new WeakMap();
          var i = n(1069),
            o = n(1371);
          var s = n(3895);
          var a = n(5561);
          var d = n(1e3),
            p = n(3858);
          const u = {
            [d.S3]: {
              fpd: {
                priority: 99,
                fn(e, t) {
                  (0, i.D9)(e, t.ortb2);
                },
              },
              onlyOneClient: { priority: -99, fn: (0, p.i8)("ORTB request") },
              props: {
                fn(e, t) {
                  Object.assign(e, {
                    id: e.id || (0, i.lk)(),
                    test: e.test || 0,
                  });
                  const n = parseInt(t.timeout, 10);
                  isNaN(n) || (e.tmax = n);
                },
              },
            },
            [d.Tb]: {
              fpd: {
                priority: 99,
                fn(e, t) {
                  (0, i.D9)(e, t.ortb2Imp);
                },
              },
              id: {
                fn(e, t) {
                  e.id = t.bidId;
                },
              },
              banner: {
                fn: function (e, t, n) {
                  var r;
                  if (n.mediaType && n.mediaType !== o.D4) return;
                  const s =
                    null == t || null === (r = t.mediaTypes) || void 0 === r
                      ? void 0
                      : r.banner;
                  if (s) {
                    const t = { topframe: !0 === (0, i.al)() ? 0 : 1 };
                    s.sizes && (t.format = (0, i.y$)(s.sizes).map(i.cf)),
                      s.hasOwnProperty("pos") && (t.pos = s.pos),
                      (e.banner = (0, i.D9)(t, e.banner));
                  }
                },
              },
              pbadslot: {
                fn(e) {
                  var t;
                  const n =
                    null === (t = e.ext) ||
                    void 0 === t ||
                    null === (t = t.data) ||
                    void 0 === t
                      ? void 0
                      : t.pbadslot;
                  var r;
                  (n && "string" == typeof n) ||
                    null === (r = e.ext) ||
                    void 0 === r ||
                    null === (r = r.data) ||
                    void 0 === r ||
                    delete r.pbadslot;
                },
              },
              secure: {
                fn(e, t) {
                  var n;
                  e.secure = null !== (n = e.secure) && void 0 !== n ? n : 1;
                },
              },
            },
            [d.WR]: {
              mediaType: { priority: 99, fn: a.K },
              banner: {
                fn: (function () {
                  let {
                    createPixel: e = (e) =>
                      (0, i.Tz)(decodeURIComponent(e), i.Bk),
                  } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return function (t, n) {
                    t.mediaType === o.D4 &&
                      (n.adm && n.nurl
                        ? ((t.ad = n.adm), (t.ad += e(n.nurl)))
                        : n.adm
                        ? (t.ad = n.adm)
                        : n.nurl && (t.adUrl = n.nurl));
                  };
                })(),
              },
              props: {
                fn(e, t, n) {
                  var r, i;
                  Object.entries({
                    requestId:
                      null === (r = n.bidRequest) || void 0 === r
                        ? void 0
                        : r.bidId,
                    seatBidId: t.id,
                    cpm: t.price,
                    currency: n.ortbResponse.cur || n.currency,
                    width: t.w,
                    height: t.h,
                    dealId: t.dealid,
                    creative_id: t.crid,
                    creativeId: t.crid,
                    burl: t.burl,
                    ttl: t.exp || n.ttl,
                    netRevenue: n.netRevenue,
                  })
                    .filter((e) => {
                      let [t, n] = e;
                      return void 0 !== n;
                    })
                    .forEach((t) => {
                      let [n, r] = t;
                      return (e[n] = r);
                    }),
                    e.meta || (e.meta = {}),
                    t.adomain && (e.meta.advertiserDomains = t.adomain),
                    null !== (i = t.ext) &&
                      void 0 !== i &&
                      i.dsa &&
                      (e.meta.dsa = t.ext.dsa),
                    t.cat &&
                      ((e.meta.primaryCatId = t.cat[0]),
                      (e.meta.secondaryCatIds = t.cat.slice(1))),
                    t.attr && (e.meta.attr = t.attr);
                },
              },
            },
          };
          (u[d.Tb].native = {
            fn: function (e, t, n) {
              if (n.mediaType && n.mediaType !== o.s6) return;
              let r = t.nativeOrtbRequest;
              var s;
              r &&
                ((r = Object.assign({}, n.nativeRequest, r)),
                null !== (s = r.assets) && void 0 !== s && s.length
                  ? (e.native = (0, i.D9)(
                      {},
                      { request: JSON.stringify(r), ver: r.ver },
                      e.native
                    ))
                  : (0, i.JE)(
                      "mediaTypes.native is set, but no assets were specified. Native request skipped.",
                      t
                    ));
            },
          }),
            (u[d.WR].native = {
              fn: function (e, t) {
                if (e.mediaType === o.s6) {
                  let n;
                  if (
                    ((n = "string" == typeof t.adm ? JSON.parse(t.adm) : t.adm),
                    !(0, i.Qd)(n) || !Array.isArray(n.assets))
                  )
                    throw new Error("ORTB native response contained no assets");
                  e.native = { ortb: n };
                }
              },
            }),
            (u[d.Tb].video = {
              fn: function (e, t, n) {
                var r;
                if (n.mediaType && n.mediaType !== o.G_) return;
                const a =
                  null == t || null === (r = t.mediaTypes) || void 0 === r
                    ? void 0
                    : r.video;
                if (!(0, i.Im)(a)) {
                  const t = Object.fromEntries(
                    Object.entries(a).filter((e) => {
                      let [t] = e;
                      return s.Zy.has(t);
                    })
                  );
                  if (a.playerSize) {
                    const e = (0, i.y$)(a.playerSize).map(i.cf);
                    e.length > 1 &&
                      (0, i.JE)(
                        "video request specifies more than one playerSize; all but the first will be ignored"
                      ),
                      Object.assign(t, e[0]);
                  }
                  e.video = (0, i.D9)(t, e.video);
                }
              },
            }),
            (u[d.WR].video = {
              fn: function (e, t, n) {
                var r, i;
                e.mediaType === o.G_ &&
                  (null != n &&
                    null !== (r = n.imp) &&
                    void 0 !== r &&
                    null !== (r = r.video) &&
                    void 0 !== r &&
                    r.w &&
                    null != n &&
                    null !== (i = n.imp) &&
                    void 0 !== i &&
                    null !== (i = i.video) &&
                    void 0 !== i &&
                    i.h &&
                    ([e.playerWidth, e.playerHeight] = [
                      n.imp.video.w,
                      n.imp.video.h,
                    ]),
                  t.adm && (e.vastXml = t.adm),
                  t.nurl && (e.vastUrl = t.nurl));
              },
            });
          var l = n(9466);
          function c() {
            let {
              context: e = {},
              processors: t = m,
              overrides: n = {},
              imp: o,
              request: s,
              bidResponse: a,
              response: p,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const u = new WeakMap();
            function l(e, i, o, s) {
              let a;
              return function () {
                return (
                  null == a &&
                    (a = (function () {
                      let a = o.bind(
                        this,
                        (function (e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          if (!r.has(e)) {
                            const t = Object.entries(e);
                            t.sort((e, t) =>
                              (e = e[1].priority || 0) ===
                              (t = t[1].priority || 0)
                                ? 0
                                : e > t
                                ? -1
                                : 1
                            ),
                              r.set(
                                e,
                                t.map((e) => {
                                  let [t, n] = e;
                                  return [t, n.fn];
                                })
                              );
                          }
                          const n = r
                            .get(e)
                            .filter((e) => {
                              let [n] = e;
                              return !t.hasOwnProperty(n) || t[n];
                            })
                            .map(function (e) {
                              let [n, r] = e;
                              return t.hasOwnProperty(n)
                                ? t[n].bind(this, r)
                                : r;
                            });
                          return function () {
                            const e = Array.from(arguments);
                            n.forEach((t) => {
                              t.apply(this, e);
                            });
                          };
                        })(t()[e] || {}, n[e] || {})
                      );
                      return (
                        i && (a = i.bind(this, a)),
                        function () {
                          try {
                            return a.apply(this, arguments);
                          } catch (e) {
                            s.call(this, e, ...arguments);
                          }
                        }
                      );
                    })()),
                  a.apply(this, arguments)
                );
              };
            }
            const c = l(
                d.Tb,
                o,
                function (e, t, n) {
                  const r = {};
                  return e(r, t, n), r;
                },
                function (e, t, n) {
                  (0, i.vV)(
                    "Error while converting bidRequest to ORTB imp; request skipped.",
                    { error: e, bidRequest: t, context: n }
                  );
                }
              ),
              f = l(
                d.S3,
                s,
                function (e, t, n, r) {
                  const i = { imp: t };
                  return e(i, n, r), i;
                },
                function (e, t, n, r) {
                  throw (
                    ((0, i.vV)("Error while converting to ORTB request", {
                      error: e,
                      imps: t,
                      bidderRequest: n,
                      context: r,
                    }),
                    e)
                  );
                }
              ),
              v = l(
                d.WR,
                a,
                function (e, t, n) {
                  const r = {};
                  return e(r, t, n), r;
                },
                function (e, t, n) {
                  (0, i.vV)(
                    "Error while converting ORTB seatbid.bid to bidResponse; bid skipped.",
                    { error: e, bid: t, context: n }
                  );
                }
              ),
              b = l(
                d.Cf,
                p,
                function (e, t, n, r) {
                  const i = { bids: t };
                  return e(i, n, r), i;
                },
                function (e, t, n, r) {
                  throw (
                    ((0, i.vV)("Error while converting from ORTB response", {
                      error: e,
                      bidResponses: t,
                      ortbResponse: n,
                      context: r,
                    }),
                    e)
                  );
                }
              );
            return {
              toORTB(t) {
                let { bidderRequest: n, bidRequests: r, context: o = {} } = t;
                r = r || n.bids;
                const s = {
                  req: Object.assign({ bidRequests: r }, e, o),
                  imp: {},
                };
                s.req.impContext = s.imp;
                const a = r
                    .map((t) => {
                      const r = Object.assign(
                          { bidderRequest: n, reqContext: s.req },
                          e,
                          o
                        ),
                        a = c(t, r);
                      if (null != a) {
                        if (a.hasOwnProperty("id"))
                          return (
                            Object.assign(r, { bidRequest: t, imp: a }),
                            (s.imp[a.id] = r),
                            a
                          );
                        (0, i.vV)(
                          "Converted ORTB imp does not specify an id, ignoring bid request",
                          t,
                          a
                        );
                      }
                    })
                    .filter(Boolean),
                  d = f(a, n, s.req);
                return (s.req.bidderRequest = n), null != d && u.set(d, s), d;
              },
              fromORTB(e) {
                let { request: t, response: n } = e;
                const r = u.get(t);
                if (null == r)
                  throw new Error(
                    "ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`"
                  );
                function o(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return Object.assign(e, { ortbRequest: t }, n);
                }
                const s = Object.fromEntries(
                    (t.imp || []).map((e) => [e.id, e])
                  ),
                  a = (n.seatbid || [])
                    .flatMap((e) =>
                      (e.bid || []).map((t) => {
                        if (
                          s.hasOwnProperty(t.impid) &&
                          r.imp.hasOwnProperty(t.impid)
                        )
                          return v(
                            t,
                            o(r.imp[t.impid], {
                              imp: s[t.impid],
                              seatbid: e,
                              ortbResponse: n,
                            })
                          );
                        (0, i.vV)(
                          "ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid",
                          t
                        );
                      })
                    )
                    .filter(Boolean);
                return b(a, n, o(r.req));
              },
            };
          }
          const m = (0, i.Bj)(() => (0, l.U)(u, (0, d.yB)(d.qN)));
        },
        9466: (e, t, n) => {
          n.d(t, { U: () => i });
          var r = n(1e3);
          function i() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const o = t.shift(),
              s = t.length > 1 ? i(...t) : t[0];
            return Object.fromEntries(
              r.zt.map((e) => [e, Object.assign({}, o[e], s[e])])
            );
          }
        },
        5561: (e, t, n) => {
          n.d(t, { K: () => o, X: () => i });
          var r = n(1371);
          const i = { 1: r.D4, 2: r.G_, 4: r.s6 };
          function o(e, t, n) {
            if (e.mediaType) return;
            const r = n.mediaType;
            if (!r && !i.hasOwnProperty(t.mtype))
              throw new Error("Cannot determine mediaType for response");
            e.mediaType = r || i[t.mtype];
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [550],
      {
        8702: (p, n, e) => {
          function t(p, n, e) {
            let t = {};
            var i;
            (p &&
              ("boolean" == typeof p.gdprApplies &&
                (t.gdpr = Number(p.gdprApplies)),
              "string" == typeof p.consentString &&
                (t.gdpr_consent = p.consentString)),
            n && (t.us_privacy = encodeURIComponent(n)),
            null != e && e.gppString) &&
              ((t.gpp = e.gppString),
              (t.gpp_sid =
                null === (i = e.applicableSections) || void 0 === i
                  ? void 0
                  : i.toString()));
            return t;
          }
          e.d(n, { d: () => t });
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [599],
      {
        791: (e, t, r) => {
          var i = r(7873),
            a = r(1069),
            s = r(433),
            o = r(5789),
            n = r(3272),
            d = r(9115),
            c = r(1371),
            p = r(5901),
            l = r(3895),
            u = r(2938),
            m = r(2693),
            g = r(2621),
            h = r(2449),
            _ = r(4673),
            f = r(554),
            b = r(2349),
            y = r(5761),
            v = r(9906);
          const k = "appnexus",
            w = "https://ib.adnxs.com/ut/v3/prebid",
            I = "https://ib.adnxs-simple.com/ut/v3/prebid",
            x = [
              "id",
              "minduration",
              "maxduration",
              "skippable",
              "playback_method",
              "frameworks",
              "context",
              "skipoffset",
            ],
            C = [
              "minduration",
              "maxduration",
              "skip",
              "skipafter",
              "playbackmethod",
              "api",
              "startdelay",
              "placement",
              "plcmt",
            ],
            O = [
              "age",
              "externalUid",
              "external_uid",
              "segments",
              "gender",
              "dnt",
              "language",
            ],
            T = ["geo", "device_id"],
            U = ["enabled", "dongle", "member_id", "debug_timeout"],
            E = {
              apn_debug_dongle: "dongle",
              apn_debug_member_id: "member_id",
              apn_debug_timeout: "debug_timeout",
            },
            S = {
              playback_method: {
                unknown: 0,
                auto_play_sound_on: 1,
                auto_play_sound_off: 2,
                click_to_play: 3,
                mouse_over: 4,
                auto_play_sound_unknown: 5,
              },
              context: {
                unknown: 0,
                pre_roll: 1,
                mid_roll: 2,
                post_roll: 3,
                outstream: 4,
                "in-banner": 5,
                "in-feed": 6,
                interstitial: 7,
                accompanying_content_pre_roll: 8,
                accompanying_content_mid_roll: 9,
                accompanying_content_post_roll: 10,
              },
            },
            A = {
              body: "description",
              body2: "desc2",
              cta: "ctatext",
              image: {
                serverName: "main_image",
                requiredParams: { required: !0 },
              },
              icon: { serverName: "icon", requiredParams: { required: !0 } },
              sponsoredBy: "sponsored_by",
              privacyLink: "privacy_link",
              salePrice: "saleprice",
              displayUrl: "displayurl",
            },
            j = "<script",
            D = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
            R = "trk.js",
            z = (0, u.vM)({ bidderCode: k }),
            N = new Map([
              [1, "Mobile/Tablet - General"],
              [2, "Personal Computer"],
              [3, "Connected TV"],
              [4, "Phone"],
              [5, "Tablet"],
              [6, "Connected Device"],
              [7, "Set Top Box"],
              [8, "OOH Device"],
            ]),
            q = {
              code: k,
              gvlid: 32,
              aliases: b.DX,
              supportedMediaTypes: [c.D4, c.G_, c.s6],
              isBidRequestValid: function (e) {
                return !!(
                  e.params.placementId ||
                  e.params.placement_id ||
                  (e.params.member && (e.params.invCode || e.params.inv_code))
                );
              },
              buildRequests: function (e, t) {
                var r, i, s;
                const o = (e = (0, h.Xj)(e)).map(G),
                  d = (0, p.I6)(e, M);
                let c = {};
                !0 === n.$W.getConfig("coppa") && (c = { coppa: !0 }),
                  d &&
                    Object.keys(d.params.user)
                      .filter((e) => (0, p.mK)(O, e))
                      .forEach((e) => {
                        let t = (0, b.vk)(e);
                        if ("segments" === e && (0, a.cy)(d.params.user[e])) {
                          let r = [];
                          d.params.user[e].forEach((e) => {
                            (0, a.Et)(e)
                              ? r.push({ id: e })
                              : (0, a.Qd)(e) && r.push(e);
                          }),
                            (c[t] = r);
                        } else "segments" !== e && (c[t] = d.params.user[e]);
                      });
                const l = (0, p.I6)(e, K);
                let u;
                l &&
                  l.params &&
                  l.params.app &&
                  ((u = {}),
                  Object.keys(l.params.app)
                    .filter((e) => (0, p.mK)(T, e))
                    .forEach((e) => (u[e] = l.params.app[e])));
                const m = (0, p.I6)(e, V);
                let _;
                m &&
                  m.params &&
                  l.params.app &&
                  l.params.app.id &&
                  (_ = { appid: m.params.app.id });
                let k = {},
                  x = {};
                const C = z.getCookie("apn_prebid_debug") || null;
                if (C)
                  try {
                    k = JSON.parse(C);
                  } catch (e) {
                    (0, a.vV)("AppNexus Debug Auction Cookie Error:\n\n" + e);
                  }
                else {
                  Object.keys(E).forEach((e) => {
                    let t = (0, a.Ez)(e);
                    (0, a.O8)(t) &&
                      "" !== t &&
                      ((k[E[e]] = t), (k.enabled = !0));
                  }),
                    (k = (0, y.$)(
                      { member_id: "number", debug_timeout: "number" },
                      k
                    ));
                  const t = (0, p.I6)(e, $);
                  t && t.debug && (k = t.debug);
                }
                k &&
                  k.enabled &&
                  Object.keys(k)
                    .filter((e) => (0, p.mK)(U, e))
                    .forEach((e) => {
                      x[e] = k[e];
                    });
                const S = (0, p.I6)(e, B),
                  A = S ? parseInt(S.params.member, 10) : 0,
                  j = e[0].schain,
                  D = (0, p.I6)(e, W),
                  R = {
                    tags: [...o],
                    user: c,
                    sdk: { source: "pbjs", version: "9.26.0-pre" },
                    schain: j,
                  };
                D &&
                  (R.iab_support = {
                    omidpn: "Appnexus",
                    omidpv: "9.26.0-pre",
                  }),
                  A > 0 && (R.member_id = A),
                  l && (R.device = u),
                  m && (R.app = _),
                  null != t &&
                    null !== (r = t.ortb2) &&
                    void 0 !== r &&
                    r.device &&
                    ((R.device = R.device || {}),
                    (0, a.D9)(
                      R.device,
                      (function (e) {
                        const t = {
                          useragent: e.ua,
                          devicetype: N.get(e.devicetype),
                          make: e.make,
                          model: e.model,
                          os: e.os,
                          os_version: e.osv,
                          w: e.w,
                          h: e.h,
                          ppi: e.ppi,
                          pxratio: e.pxratio,
                        };
                        return Object.keys(t).reduce(
                          (e, r) => (t[r] && (e[r] = t[r]), e),
                          {}
                        );
                      })(t.ortb2.device)
                    ));
                let q = (0, a.Go)(t && t.ortb2),
                  P =
                    (0, a.Go)(n.$W.getConfig("appnexusAuctionKeywords")) || {},
                  J = (0, f.QF)(q, P);
                if (
                  (J.length > 0 && (R.keywords = J),
                  n.$W.getConfig("adpod.brandCategoryExclusion") &&
                    (R.brand_category_uniqueness = !0),
                  x.enabled &&
                    ((R.debug = x),
                    (0, a.fH)(
                      "AppNexus Debug Auction Settings:\n\n" +
                        JSON.stringify(x, null, 4)
                    )),
                  t &&
                    t.gdprConsent &&
                    ((R.gdpr_consent = {
                      consent_string: t.gdprConsent.consentString,
                      consent_required: t.gdprConsent.gdprApplies,
                    }),
                    t.gdprConsent.addtlConsent &&
                      -1 !== t.gdprConsent.addtlConsent.indexOf("~")))
                ) {
                  let e = t.gdprConsent.addtlConsent,
                    r = e.substring(e.indexOf("~") + 1);
                  R.gdpr_consent.addtl_consent = r
                    .split(".")
                    .map((e) => parseInt(e, 10));
                }
                if (
                  (t && t.uspConsent && (R.us_privacy = t.uspConsent),
                  null != t && t.gppConsent
                    ? (R.privacy = {
                        gpp: t.gppConsent.gppString,
                        gpp_sid: t.gppConsent.applicableSections,
                      })
                    : null != t &&
                      null !== (i = t.ortb2) &&
                      void 0 !== i &&
                      null !== (i = i.regs) &&
                      void 0 !== i &&
                      i.gpp &&
                      (R.privacy = {
                        gpp: t.ortb2.regs.gpp,
                        gpp_sid: t.ortb2.regs.gpp_sid,
                      }),
                  t && t.refererInfo)
                ) {
                  let e = {
                      rd_ref: encodeURIComponent(t.refererInfo.topmostLocation),
                      rd_top: t.refererInfo.reachedTop,
                      rd_ifs: t.refererInfo.numIframes,
                      rd_stk: t.refererInfo.stack
                        .map((e) => encodeURIComponent(e))
                        .join(","),
                    },
                    r = t.refererInfo.canonicalUrl;
                  (0, a.O8)(r) && "" !== r && (e.rd_can = r),
                    (R.referrer_detection = e);
                }
                (0, p.I6)(e, L) &&
                  e.filter(L).forEach((e) => {
                    const t = (function (e, t) {
                        const { durationRangeSec: r, requireExactDuration: i } =
                            t.mediaTypes.video,
                          a = (function (e) {
                            const {
                                adPodDurationSec: t,
                                durationRangeSec: r,
                                requireExactDuration: i,
                              } = e,
                              a = Math.min(...r),
                              s = Math.floor(t / a);
                            return i ? Math.max(s, r.length) : s;
                          })(t.mediaTypes.video),
                          s = Math.max(...r),
                          o = e.filter((e) => e.uuid === t.bidId);
                        let n = (0, b.GS)(...o, a);
                        if (i) {
                          const e = Math.ceil(a / r.length),
                            t = (0, v.i)(n, e);
                          r.forEach((e, r) => {
                            t[r].map((t) => {
                              H(t, "minduration", e), H(t, "maxduration", e);
                            });
                          });
                        } else n.map((e) => H(e, "maxduration", s));
                        return n;
                      })(o, e),
                      r = R.tags.filter((t) => t.uuid !== e.bidId);
                    R.tags = [...r, ...t];
                  });
                if (e[0].userId) {
                  let t = [];
                  e[0].userIdAsEids.forEach((e) => {
                    !e ||
                      !e.uids ||
                      e.uids.length < 1 ||
                      e.uids.forEach((r) => {
                        let i = { source: e.source, id: r.id };
                        "adserver.org" == e.source
                          ? (i.rti_partner = "TDID")
                          : "uidapi.com" == e.source &&
                            (i.rti_partner = "UID2"),
                          t.push(i);
                      });
                  }),
                    t.length && (R.eids = t);
                }
                if (
                  null != t &&
                  null !== (s = t.ortb2) &&
                  void 0 !== s &&
                  null !== (s = s.regs) &&
                  void 0 !== s &&
                  null !== (s = s.ext) &&
                  void 0 !== s &&
                  s.dsa
                ) {
                  const e = t.ortb2.regs.ext.dsa,
                    r = {};
                  if (
                    (["dsarequired", "pubrender", "datatopub"].forEach((t) => {
                      (0, a.Et)(e[t]) && (r[t] = e[t]);
                    }),
                    (0, a.cy)(e.transparency) &&
                      e.transparency.every((e) => (0, a.Qd)(e)))
                  ) {
                    const t = [];
                    e.transparency.forEach((e) => {
                      (0, a.O8)(e.domain) &&
                        "" != e.domain &&
                        (0, a.cy)(e.dsaparams) &&
                        e.dsaparams.every((e) => (0, a.Et)(e)) &&
                        t.push(e);
                    }),
                      t.length > 0 && (r.transparency = t);
                  }
                  (0, a.Im)(r) || (R.dsa = r);
                }
                o[0].publisher_id && (R.publisher_id = o[0].publisher_id);
                const Q = (function (e, t) {
                  let r = [],
                    i = { withCredentials: !0 },
                    s = w;
                  (0, g.C)(null == t ? void 0 : t.gdprConsent) || (s = I);
                  ("TRUE" !== (0, a.Ez)("apn_test").toUpperCase() &&
                    !0 !== n.$W.getConfig("apn_test")) ||
                    (i.customHeaders = { "X-Is-Test": 1 });
                  if (e.tags.length > 15) {
                    const o = (0, a.Go)(e);
                    (0, v.i)(e.tags, 15).forEach((e) => {
                      o.tags = e;
                      const a = JSON.stringify(o);
                      r.push({
                        method: "POST",
                        url: s,
                        data: a,
                        bidderRequest: t,
                        options: i,
                      });
                    });
                  } else {
                    const a = JSON.stringify(e);
                    r = {
                      method: "POST",
                      url: s,
                      data: a,
                      bidderRequest: t,
                      options: i,
                    };
                  }
                  return r;
                })(R, t);
                return Q;
              },
              interpretResponse: function (e, t) {
                let { bidderRequest: r } = t;
                e = e.body;
                const i = [];
                if (!e || e.error) {
                  let t = "in response for ".concat(r.bidderCode, " adapter");
                  return (
                    e && e.error && (t += ": ".concat(e.error)), (0, a.vV)(t), i
                  );
                }
                if (
                  (e.tags &&
                    e.tags.forEach((e) => {
                      const t =
                        (n = e) &&
                        n.ads &&
                        n.ads.length &&
                        (0, p.I6)(n.ads, (e) => e.rtb);
                      var n;
                      if (t) {
                        if (
                          (!0 === m.u.get(r.bidderCode, "allowZeroCpmBids")
                            ? t.cpm >= 0
                            : t.cpm > 0) &&
                          (0, p.mK)(this.supportedMediaTypes, t.ad_type)
                        ) {
                          const n = (function (e, t, r) {
                            const i = (0, a.D4)(e.uuid, [r]),
                              n = (0, a.s0)(),
                              d = {
                                adId: n,
                                requestId: e.uuid,
                                cpm: t.cpm,
                                creativeId: t.creative_id,
                                dealId: t.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: i.adUnitCode,
                                appnexus: {
                                  buyerMemberId: t.buyer_member_id,
                                  dealPriority: t.deal_priority,
                                  dealCode: t.deal_code,
                                },
                              };
                            t.adomain &&
                              (d.meta = Object.assign({}, d.meta, {
                                advertiserDomains: [t.adomain],
                              }));
                            t.advertiser_id &&
                              (d.meta = Object.assign({}, d.meta, {
                                advertiserId: t.advertiser_id,
                              }));
                            t.dsa &&
                              (d.meta = Object.assign({}, d.meta, {
                                dsa: t.dsa,
                              }));
                            function u(e) {
                              return {
                                ver: "1.0",
                                complete: 0,
                                nodes: [{ bsid: e.buyer_member_id.toString() }],
                              };
                            }
                            t.buyer_member_id &&
                              (d.meta = Object.assign({}, d.meta, {
                                dchain: u(t),
                              }));
                            t.brand_id &&
                              (d.meta = Object.assign({}, d.meta, {
                                brandId: t.brand_id,
                              }));
                            if (t.rtb.video) {
                              Object.assign(d, {
                                width: t.rtb.video.player_width,
                                height: t.rtb.video.player_height,
                                vastImpUrl: t.notify_url,
                                ttl: 3600,
                              });
                              switch ((0, s.A)(i, "mediaTypes.video.context")) {
                                case c.LM:
                                  const i = _.n[t.brand_category_id]
                                    ? _.n[t.brand_category_id]
                                    : null;
                                  d.meta = Object.assign({}, d.meta, {
                                    primaryCatId: i,
                                  });
                                  const n = t.deal_priority;
                                  (d.video = {
                                    context: c.LM,
                                    durationSeconds: Math.floor(
                                      t.rtb.video.duration_ms / 1e3
                                    ),
                                    dealTier: n,
                                  }),
                                    (d.vastUrl = t.rtb.video.asset_url);
                                  break;
                                case l.H6:
                                  if (
                                    ((d.adResponse = e),
                                    (d.adResponse.ad = d.adResponse.ads[0]),
                                    (d.adResponse.ad.video =
                                      d.adResponse.ad.rtb.video),
                                    (d.vastXml = t.rtb.video.content),
                                    t.renderer_url)
                                  ) {
                                    const i = (0, p.I6)(
                                      r.bids,
                                      (t) => t.bidId === e.uuid
                                    );
                                    let n = (0, s.A)(
                                      i,
                                      "mediaTypes.video.renderer.options"
                                    );
                                    n || (n = (0, s.A)(i, "renderer.options")),
                                      (d.renderer = (function (e, t) {
                                        let r =
                                          arguments.length > 2 &&
                                          void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                        const i = o.A4.install({
                                          id: t.renderer_id,
                                          url: t.renderer_url,
                                          config: r,
                                          loaded: !1,
                                          adUnitCode: e,
                                        });
                                        try {
                                          i.setRender(J);
                                        } catch (e) {
                                          (0, a.JE)(
                                            "Prebid Error calling setRender on renderer",
                                            e
                                          );
                                        }
                                        return (
                                          i.setEventHandlers({
                                            impression: () =>
                                              (0, a.OG)(
                                                "AppNexus outstream video impression event"
                                              ),
                                            loaded: () =>
                                              (0, a.OG)(
                                                "AppNexus outstream video loaded event"
                                              ),
                                            ended: () => {
                                              (0, a.OG)(
                                                "AppNexus outstream renderer video event"
                                              ),
                                                (document.querySelector(
                                                  "#".concat(e)
                                                ).style.display = "none");
                                            },
                                          }),
                                          i
                                        );
                                      })(d.adUnitCode, t, n));
                                  }
                                  break;
                                case l.mn:
                                  d.vastUrl =
                                    t.notify_url +
                                    "&redir=" +
                                    encodeURIComponent(t.rtb.video.asset_url);
                              }
                            } else if (t.rtb[c.s6]) {
                              const e = t.rtb[c.s6];
                              let r;
                              if (
                                (function (e) {
                                  if (!e || "" === e) return !1;
                                  let t = e.match(D),
                                    r = null != t && t.length >= 1,
                                    i = e.match(R),
                                    a = null != i && i.length >= 1;
                                  return e.startsWith(j) && a && r;
                                })(t.viewability.config)
                              ) {
                                let e =
                                  "pbjs_adid=" +
                                  n +
                                  ";pbjs_auc=" +
                                  i.adUnitCode;
                                r = t.viewability.config.replace(
                                  "dom_id=%native_dom_id%",
                                  e
                                );
                              }
                              let s = e.javascript_trackers;
                              null == s
                                ? (s = r)
                                : (0, a.O8)(s)
                                ? (s = [s, r])
                                : s.push(r),
                                (d[c.s6] = {
                                  title: e.title,
                                  body: e.desc,
                                  body2: e.desc2,
                                  cta: e.ctatext,
                                  rating: e.rating,
                                  sponsoredBy: e.sponsored,
                                  privacyLink: e.privacy_link,
                                  address: e.address,
                                  downloads: e.downloads,
                                  likes: e.likes,
                                  phone: e.phone,
                                  price: e.price,
                                  salePrice: e.saleprice,
                                  clickUrl: e.link.url,
                                  displayUrl: e.displayurl,
                                  clickTrackers: e.link.click_trackers,
                                  impressionTrackers: e.impression_trackers,
                                  video: e.video,
                                  javascriptTrackers: s,
                                }),
                                e.main_img &&
                                  (d[c.s6].image = {
                                    url: e.main_img.url,
                                    height: e.main_img.height,
                                    width: e.main_img.width,
                                  }),
                                e.icon &&
                                  (d[c.s6].icon = {
                                    url: e.icon.url,
                                    height: e.icon.height,
                                    width: e.icon.width,
                                  }),
                                (d[c.s6].ext = {
                                  video: e.video,
                                  customImage1: e.image1 && {
                                    url: e.image1.url,
                                    height: e.image1.height,
                                    width: e.image1.width,
                                  },
                                  customImage2: e.image2 && {
                                    url: e.image2.url,
                                    height: e.image2.height,
                                    width: e.image2.width,
                                  },
                                  customImage3: e.image3 && {
                                    url: e.image3.url,
                                    height: e.image3.height,
                                    width: e.image3.width,
                                  },
                                  customImage4: e.image4 && {
                                    url: e.image4.url,
                                    height: e.image4.height,
                                    width: e.image4.width,
                                  },
                                  customImage5: e.image5 && {
                                    url: e.image5.url,
                                    height: e.image5.height,
                                    width: e.image5.width,
                                  },
                                  customIcon1: e.icon1 && {
                                    url: e.icon1.url,
                                    height: e.icon1.height,
                                    width: e.icon1.width,
                                  },
                                  customIcon2: e.icon2 && {
                                    url: e.icon2.url,
                                    height: e.icon2.height,
                                    width: e.icon2.width,
                                  },
                                  customIcon3: e.icon3 && {
                                    url: e.icon3.url,
                                    height: e.icon3.height,
                                    width: e.icon3.width,
                                  },
                                  customIcon4: e.icon4 && {
                                    url: e.icon4.url,
                                    height: e.icon4.height,
                                    width: e.icon4.width,
                                  },
                                  customIcon5: e.icon5 && {
                                    url: e.icon5.url,
                                    height: e.icon5.height,
                                    width: e.icon5.width,
                                  },
                                  customSocialIcon1: e.socialicon1 && {
                                    url: e.socialicon1.url,
                                    height: e.socialicon1.height,
                                    width: e.socialicon1.width,
                                  },
                                  customSocialIcon2: e.socialicon2 && {
                                    url: e.socialicon2.url,
                                    height: e.socialicon2.height,
                                    width: e.socialicon2.width,
                                  },
                                  customSocialIcon3: e.socialicon3 && {
                                    url: e.socialicon3.url,
                                    height: e.socialicon3.height,
                                    width: e.socialicon3.width,
                                  },
                                  customSocialIcon4: e.socialicon4 && {
                                    url: e.socialicon4.url,
                                    height: e.socialicon4.height,
                                    width: e.socialicon4.width,
                                  },
                                  customSocialIcon5: e.socialicon5 && {
                                    url: e.socialicon5.url,
                                    height: e.socialicon5.height,
                                    width: e.socialicon5.width,
                                  },
                                  customTitle1: e.title1,
                                  customTitle2: e.title2,
                                  customTitle3: e.title3,
                                  customTitle4: e.title4,
                                  customTitle5: e.title5,
                                  customBody1: e.body1,
                                  customBody2: e.body2,
                                  customBody3: e.body3,
                                  customBody4: e.body4,
                                  customBody5: e.body5,
                                  customCta1: e.ctatext1,
                                  customCta2: e.ctatext2,
                                  customCta3: e.ctatext3,
                                  customCta4: e.ctatext4,
                                  customCta5: e.ctatext5,
                                  customDisplayUrl1: e.displayurl1,
                                  customDisplayUrl2: e.displayurl2,
                                  customDisplayUrl3: e.displayurl3,
                                  customDisplayUrl4: e.displayurl4,
                                  customDisplayUrl5: e.displayurl5,
                                  customSocialUrl1: e.socialurl1,
                                  customSocialUrl2: e.socialurl2,
                                  customSocialUrl3: e.socialurl3,
                                  customSocialUrl4: e.socialurl4,
                                  customSocialUrl5: e.socialurl5,
                                });
                            } else {
                              Object.assign(d, {
                                width: t.rtb.banner.width,
                                height: t.rtb.banner.height,
                                ad: t.rtb.banner.content,
                              });
                              try {
                                if (t.rtb.trackers)
                                  for (
                                    let e = 0;
                                    e <
                                    t.rtb.trackers[0].impression_urls.length;
                                    e++
                                  ) {
                                    const r =
                                        t.rtb.trackers[0].impression_urls[e],
                                      i = (0, a.Tz)(r);
                                    d.ad += i;
                                  }
                              } catch (e) {
                                (0, a.vV)("Error appending tracking pixel", e);
                              }
                            }
                            return d;
                          })(e, t, r);
                          (n.mediaType = (function (e) {
                            const t = e.ad_type;
                            return t === c.G_ ? c.G_ : t === c.s6 ? c.s6 : c.D4;
                          })(t)),
                            i.push(n);
                        }
                      }
                    }),
                  e.debug && e.debug.debug_info)
                ) {
                  let t =
                    "AppNexus Debug Auction for Prebid\n\n" +
                    e.debug.debug_info;
                  (t = t
                    .replace(/(<td>|<th>)/gm, "\t")
                    .replace(/(<\/td>|<\/th>)/gm, "\n")
                    .replace(/^<br>/gm, "")
                    .replace(/(<br>\n|<br>)/gm, "\n")
                    .replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n")
                    .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n")
                    .replace(/(<([^>]+)>)/gim, "")),
                    (0, a.OG)(
                      "https://console.appnexus.com/docs/understanding-the-debug-auction"
                    ),
                    (0, a.OG)(t);
                }
                return i;
              },
              getUserSyncs: function (e, t, r, i, a) {
                if (e.iframeEnabled && (0, g.C)(r))
                  return [
                    {
                      type: "iframe",
                      url: "https://acdn.adnxs.com/dmp/async_usersync.html",
                    },
                  ];
                if (e.pixelEnabled) {
                  return [
                    "https://px.ads.linkedin.com/setuid?partner=appNexus",
                  ].map((e) => ({ type: "image", url: e }));
                }
              },
            };
          function G(e) {
            var t;
            const r = {};
            Object.keys(e.params).forEach((t) => {
              let r = (0, b.vk)(t);
              r !== t && ((e.params[r] = e.params[t]), delete e.params[t]);
            }),
              (r.sizes = P(e.sizes)),
              (r.primary_size = r.sizes[0]),
              (r.ad_types = []),
              (r.uuid = e.bidId),
              e.params.placement_id
                ? (r.id = parseInt(e.params.placement_id, 10))
                : (r.code = e.params.inv_code);
            const i = (0, a.Ez)("ast_override_div");
            if ((0, a.O8)(i) && "" !== i) {
              const t = decodeURIComponent(i)
                .split(",")
                .find((t) => t.startsWith("".concat(e.adUnitCode, ":")));
              if (t) {
                const e = t.split(":")[1];
                e && (r.force_creative_id = parseInt(e, 10));
              }
            }
            (r.allow_smaller_sizes = e.params.allow_smaller_sizes || !1),
              (r.use_pmt_rule =
                "boolean" == typeof e.params.use_payment_rule
                  ? e.params.use_payment_rule
                  : "boolean" == typeof e.params.use_pmt_rule &&
                    e.params.use_pmt_rule),
              (r.prebid = !0),
              (r.disable_psa = !0);
            let o = (function (e) {
              if (!(0, a.fp)(e.getFloor))
                return e.params.reserve ? e.params.reserve : null;
              let t = e.getFloor({
                currency: "USD",
                mediaType: "*",
                size: "*",
              });
              if ((0, a.Qd)(t) && !isNaN(t.floor) && "USD" === t.currency)
                return t.floor;
              return null;
            })(e);
            if ((o && (r.reserve = o), e.params.position))
              r.position = { above: 1, below: 2 }[e.params.position] || 0;
            else {
              let t =
                (0, s.A)(e, "mediaTypes.banner.pos") ||
                (0, s.A)(e, "mediaTypes.video.pos");
              (0 !== t && 1 !== t && 3 !== t) || (r.position = 3 === t ? 2 : t);
            }
            e.params.traffic_source_code &&
              (r.traffic_source_code = e.params.traffic_source_code),
              e.params.private_sizes &&
                (r.private_sizes = P(e.params.private_sizes)),
              e.params.supply_type && (r.supply_type = e.params.supply_type),
              e.params.pub_click && (r.pubclick = e.params.pub_click),
              e.params.ext_inv_code && (r.ext_inv_code = e.params.ext_inv_code),
              e.params.publisher_id &&
                (r.publisher_id = parseInt(e.params.publisher_id, 10)),
              e.params.external_imp_id &&
                (r.external_imp_id = e.params.external_imp_id);
            const n = (0, f.T_)(
              (0, f.gg)((0, s.A)(e, "ortb2Imp.ext.data.keywords")),
              null === (t = e.params) || void 0 === t ? void 0 : t.keywords
            );
            n.length > 0 && (r.keywords = n);
            let d =
              (0, s.A)(e, "ortb2Imp.ext.gpid") ||
              (0, s.A)(e, "ortb2Imp.ext.data.pbadslot");
            if (
              (d && (r.gpid = d),
              (e.mediaType === c.s6 ||
                (0, s.A)(e, "mediaTypes.".concat(c.s6))) &&
                (r.ad_types.push(c.s6),
                0 === r.sizes.length && (r.sizes = P([1, 1])),
                e.nativeParams))
            ) {
              const t = (function (e) {
                const t = {};
                return (
                  Object.keys(e).forEach((r) => {
                    const i = (A[r] && A[r].serverName) || A[r] || r,
                      s = A[r] && A[r].requiredParams;
                    t[i] = Object.assign({}, s, e[r]);
                    if (
                      !(i !== A.image.serverName && i !== A.icon.serverName) &&
                      t[i].sizes
                    ) {
                      let e = t[i].sizes;
                      ((0, a.Uu)(e) ||
                        ((0, a.cy)(e) &&
                          e.length > 0 &&
                          e.every((e) => (0, a.Uu)(e)))) &&
                        (t[i].sizes = P(t[i].sizes));
                    }
                    i === A.privacyLink && (t.privacy_supported = !0);
                  }),
                  t
                );
              })(e.nativeParams);
              r[c.s6] = { layouts: [t] };
            }
            {
              const t = (0, s.A)(e, "mediaTypes.".concat(c.G_)),
                i = (0, s.A)(e, "mediaTypes.video.context");
              (r.hb_source = t && "adpod" === i ? 7 : 1),
                (e.mediaType === c.G_ || t) && r.ad_types.push(c.G_),
                (e.mediaType === c.G_ || (t && "outstream" !== i)) &&
                  (r.require_asset_url = !0),
                e.params.video &&
                  ((r.video = {}),
                  Object.keys(e.params.video)
                    .filter((e) => (0, p.mK)(x, e))
                    .forEach((t) => {
                      switch (t) {
                        case "context":
                        case "playback_method":
                          let i = e.params.video[t];
                          (i = (0, a.cy)(i) ? i[0] : i), (r.video[t] = S[t][i]);
                          break;
                        case "frameworks":
                          break;
                        default:
                          r.video[t] = e.params.video[t];
                      }
                    }),
                  e.params.video.frameworks &&
                    (0, a.cy)(e.params.video.frameworks) &&
                    (r.video_frameworks = e.params.video.frameworks)),
                t &&
                  ((r.video = r.video || {}),
                  Object.keys(t)
                    .filter((e) => (0, p.mK)(C, e))
                    .forEach((e) => {
                      switch (e) {
                        case "minduration":
                        case "maxduration":
                          "number" != typeof r.video[e] && (r.video[e] = t[e]);
                          break;
                        case "skip":
                          "boolean" != typeof r.video.skippable &&
                            (r.video.skippable = 1 === t[e]);
                          break;
                        case "skipafter":
                          "number" != typeof r.video.skipoffset &&
                            (r.video.skippoffset = t[e]);
                          break;
                        case "playbackmethod":
                          if ("number" != typeof r.video.playback_method) {
                            let i = t[e];
                            (i = (0, a.cy)(i) ? i[0] : i),
                              i >= 1 && i <= 4 && (r.video.playback_method = i);
                          }
                          break;
                        case "api":
                          if (!r.video_frameworks && (0, a.cy)(t[e])) {
                            let i = t[e]
                              .map((e) => {
                                let t = 4 === e ? 5 : 5 === e ? 4 : e;
                                if (t >= 1 && t <= 5) return t;
                              })
                              .filter((e) => e);
                            r.video_frameworks = i;
                          }
                          break;
                        case "startdelay":
                        case "plcmt":
                        case "placement":
                          if ("number" != typeof r.video.context) {
                            const e = t.plcmt,
                              i = t.placement,
                              a = t.startdelay,
                              s =
                                (function (e, t) {
                                  if (!e) return;
                                  if (2 === e) {
                                    if (void 0 === t) return;
                                    if (0 === t)
                                      return "accompanying_content_pre_roll";
                                    if (-1 === t)
                                      return "accompanying_content_mid_roll";
                                    if (-2 === t)
                                      return "accompanying_content_post_roll";
                                  } else {
                                    if (3 === e) return "interstitial";
                                    if (4 === e) return "outstream";
                                  }
                                })(e, a) ||
                                (function (e) {
                                  if (!e) return;
                                  if (2 === e) return "in-banner";
                                  if (3 === e) return "outstream";
                                  if (4 === e) return "in-feed";
                                  if (5 === e) return "intersitial";
                                })(i) ||
                                (function (e) {
                                  if (!e) return;
                                  if (0 === e) return "pre_roll";
                                  if (-1 === e) return "mid_roll";
                                  if (-2 === e) return "post_roll";
                                })(a);
                            r.video.context = S.context[s];
                          }
                      }
                    })),
                e.renderer &&
                  (r.video = Object.assign({}, r.video, {
                    custom_renderer_present: !0,
                  }));
            }
            return (
              e.params.frameworks &&
                (0, a.cy)(e.params.frameworks) &&
                (r.banner_frameworks = e.params.frameworks),
              (0, s.A)(e, "mediaTypes.".concat(c.D4)) && r.ad_types.push(c.D4),
              0 === r.ad_types.length && delete r.ad_types,
              r
            );
          }
          function P(e) {
            let t = [],
              r = {};
            if ((0, a.cy)(e) && 2 === e.length && !(0, a.cy)(e[0]))
              (r.width = parseInt(e[0], 10)),
                (r.height = parseInt(e[1], 10)),
                t.push(r);
            else if ("object" == typeof e)
              for (let i = 0; i < e.length; i++) {
                let a = e[i];
                (r = {}),
                  (r.width = parseInt(a[0], 10)),
                  (r.height = parseInt(a[1], 10)),
                  t.push(r);
              }
            return t;
          }
          function M(e) {
            return !!e.params.user;
          }
          function B(e) {
            return !!parseInt(e.params.member, 10);
          }
          function K(e) {
            if (e.params) return !!e.params.app;
          }
          function V(e) {
            return e.params && e.params.app
              ? !!e.params.app.id
              : !!e.params.app;
          }
          function $(e) {
            return !!e.debug;
          }
          function L(e) {
            return (
              e.mediaTypes &&
              e.mediaTypes.video &&
              e.mediaTypes.video.context === c.LM
            );
          }
          function W(e) {
            let t = !1;
            const r = e.params,
              i = e.params.video;
            return (
              r.frameworks &&
                (0, a.cy)(r.frameworks) &&
                (t = (0, p.mK)(e.params.frameworks, 6)),
              !t &&
                i &&
                i.frameworks &&
                (0, a.cy)(i.frameworks) &&
                (t = (0, p.mK)(e.params.video.frameworks, 6)),
              t
            );
          }
          function H(e, t, r) {
            (0, a.Im)(e.video) && (e.video = {}), (e.video[t] = r);
          }
          function J(e, t) {
            !(function (e) {
              try {
                const t = document
                  .getElementById(e)
                  .querySelectorAll("div[id^='google_ads']");
                t[0] && t[0].style.setProperty("display", "none");
              } catch (e) {}
            })(e.adUnitCode),
              (function (e) {
                try {
                  const t = document
                    .getElementById(e)
                    .querySelectorAll("script[id^='sas_script']");
                  t[0].nextSibling &&
                    "iframe" === t[0].nextSibling.localName &&
                    t[0].nextSibling.style.setProperty("display", "none");
                } catch (e) {}
              })(e.adUnitCode),
              e.renderer.push(() => {
                (
                  (null == t ? void 0 : t.defaultView) || window
                ).ANOutstreamVideo.renderAd(
                  {
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig(),
                  },
                  Q.bind(null, e)
                );
              });
          }
          function Q(e, t, r) {
            e.renderer.handleVideoEvent({ id: t, eventName: r });
          }
          (0, d.a$)(q), (0, i.E)("appnexusBidAdapter");
        },
      },
      (e) => {
        e.O(0, [802, 247, 444, 126, 982, 698, 85], () => {
          return (t = 791), e((e.s = t));
          var t;
        });
        e.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [711],
      {
        9293: (e, t, r) => {
          var i = r(4705),
            n = r(7873),
            o = r(9766),
            a = r(7967),
            s = r(9115),
            d = r(3272),
            c = r(1371),
            l = r(5789),
            u = r(1069),
            p = r(3172),
            m = r(433),
            v = r(8656),
            b = r(8702);
          function f(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, i);
            }
            return r;
          }
          function x(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? f(Object(r), !0).forEach(function (t) {
                    (0, i.A)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : f(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          const g = "https://video-outstream.rubiconproject.com/apex-2.2.1.js";
          let y = d.$W.getConfig("rubicon") || {};
          d.$W.getConfig("rubicon", (e) => {
            (0, u.D9)(y, e.rubicon);
          });
          let h = {};
          var _ = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            7: "125x125",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            17: "240x400",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            39: "750x100",
            40: "750x200",
            41: "750x300",
            42: "2x4",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            53: "1024x768",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            64: "580x500",
            65: "640x480",
            66: "930x600",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            85: "300x120",
            90: "548x150",
            94: "970x310",
            95: "970x100",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            105: "250x800",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            145: "980x150",
            152: "1000x250",
            156: "640x320",
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            221: "1x1",
            229: "320x180",
            230: "2000x1400",
            232: "580x400",
            234: "6x6",
            251: "2x2",
            256: "480x820",
            257: "400x600",
            258: "500x200",
            259: "998x200",
            261: "480x480",
            264: "970x1000",
            265: "1920x1080",
            274: "1800x200",
            278: "320x500",
            282: "320x400",
            288: "640x380",
            484: "720x1280",
            524: "1x2",
            548: "500x1000",
            550: "980x480",
            552: "300x200",
            558: "640x640",
            562: "300x431",
            564: "320x431",
            566: "320x300",
            568: "300x150",
            570: "300x125",
            572: "250x350",
            574: "620x891",
            576: "610x877",
            578: "980x552",
            580: "505x656",
            622: "192x160",
            632: "1200x450",
            634: "340x450",
            680: "970x570",
            682: "300x240",
            684: "970x550",
            686: "300x210",
            688: "300x220",
            690: "970x170",
          };
          (0, u.bu)(_, (e, t) => (_[e] = t));
          const j = (0, o.A)({
              request(e, t, r, i) {
                var o;
                const { bidRequests: a } = i,
                  s = e(t, r, i);
                var c;
                (s.cur = ["USD"]),
                  (s.test = d.$W.getConfig("debug") ? 1 : 0),
                  (0, p.J)(s, "ext.prebid.cache", {
                    vastxml: { returnCreative: !0 === y.returnVast },
                  }),
                  (0, p.J)(s, "ext.prebid.bidders", {
                    rubicon: { integration: y.int_type || "pbjs" },
                  }),
                  (0, p.J)(s, "ext.prebid.targeting.pricegranularity", {
                    ranges: {
                      low: [{ max: 5, increment: 0.5 }],
                      medium: [{ max: 20, increment: 0.1 }],
                      high: [{ max: 20, increment: 0.01 }],
                      auto: [
                        { max: 5, increment: 0.05 },
                        { min: 5, max: 10, increment: 0.1 },
                        { min: 10, max: 20, increment: 0.5 },
                      ],
                      dense: [
                        { max: 3, increment: 0.01 },
                        { min: 3, max: 8, increment: 0.05 },
                        { min: 8, max: 20, increment: 0.5 },
                      ],
                      custom:
                        (c = d.$W).getConfig("customPriceBucket") &&
                        c.getConfig("customPriceBucket").buckets,
                    }[c.getConfig("priceGranularity")],
                  });
                let l = (0, n.m)().installedModules;
                !l ||
                  (l.length && -1 === l.indexOf("rubiconAnalyticsAdapter")) ||
                  (0, p.J)(s, "ext.prebid.analytics", {
                    rubicon: { "client-analytics": !0 },
                  }),
                  (function (e, t, r) {
                    var i;
                    let n = {};
                    const o = (0, v.D)(r, ...t.map((e) => e.params.keywords));
                    t.forEach((t) => {
                      const r = {
                          user: { ext: { data: x({}, t.params.visitor) } },
                          site: { ext: { data: x({}, t.params.inventory) } },
                        },
                        i = e.imp.find((e) => {
                          var t;
                          return null === (t = e.ext) ||
                            void 0 === t ||
                            null === (t = t.prebid) ||
                            void 0 === t ||
                            null === (t = t.bidder) ||
                            void 0 === t ||
                            null === (t = t.rubicon) ||
                            void 0 === t ||
                            null === (t = t.video) ||
                            void 0 === t
                            ? void 0
                            : t.language;
                        });
                      var o;
                      i &&
                        (r.site.content = {
                          language:
                            null === (o = i.ext) ||
                            void 0 === o ||
                            null === (o = o.prebid) ||
                            void 0 === o ||
                            null === (o = o.bidder) ||
                            void 0 === o ||
                            null === (o = o.rubicon) ||
                            void 0 === o ||
                            null === (o = o.video) ||
                            void 0 === o
                              ? void 0
                              : o.language,
                        });
                      n = (0, u.D9)(n, t.ortb2 || {}, r);
                      const a = d.$W.getConfig("user.id");
                      n.user.id = n.user.id || a;
                    }),
                      (0, u.D9)(e, n),
                      o &&
                        o.length &&
                        (0, p.J)(e, "site.keywords", o.join(","));
                    null == e ||
                      null === (i = e.ext) ||
                      void 0 === i ||
                      null === (i = i.prebid) ||
                      void 0 === i ||
                      delete i.storedrequest;
                  })(s, a, r.ortb2),
                  null == s ||
                    null === (o = s.ext) ||
                    void 0 === o ||
                    null === (o = o.prebid) ||
                    void 0 === o ||
                    delete o.storedrequest,
                  !0 === y.disableFloors && delete s.ext.prebid.floors;
                return (
                  a.filter((e) => "object" == typeof e.floorData).length > 0 &&
                    (s.ext.prebid.floors = { enabled: !1 }),
                  s
                );
              },
              imp(e, t, r) {
                var i;
                const n = C(t);
                if (n.includes(c.D4) && 1 == n.length) return;
                const o = e(t, r);
                return (
                  (o.id = t.adUnitCode),
                  delete o.banner,
                  "atf" === t.params.position && o.video && (o.video.pos = 1),
                  "btf" === t.params.position && o.video && (o.video.pos = 3),
                  null === (i = o.ext) ||
                    void 0 === i ||
                    null === (i = i.prebid) ||
                    void 0 === i ||
                    delete i.storedrequest,
                  !0 === t.params.bidonmultiformat &&
                    n.length > 1 &&
                    (0, p.J)(o, "ext.prebid.bidder.rubicon.formats", n),
                  (function (e, t) {
                    "USD" != t.bidfloorcur &&
                      (delete t.bidfloor, delete t.bidfloorcur);
                    if (!t.bidfloor) {
                      let r = parseFloat((0, m.A)(e, "params.floor"));
                      isNaN(r) || ((t.bidfloor = r), (t.bidfloorcur = "USD"));
                    }
                  })(t, o),
                  (o.id = h[o.id] ? o.id + h[o.id]++ : ((h[o.id] = 2), o.id)),
                  o
                );
              },
              bidResponse(e, t, r) {
                var i;
                const n = e(t, r);
                n.meta.mediaType = (0, m.A)(t, "ext.prebid.type");
                const { bidRequest: o } = r;
                let [a, s] =
                  "outstream" ===
                  (null === (i = o.mediaTypes.video) || void 0 === i
                    ? void 0
                    : i.context)
                    ? w(o, c.G_)
                    : [void 0, void 0];
                return (
                  (n.width = t.w || a || n.playerWidth || 0),
                  (n.height = t.h || s || n.playerHeight || 0),
                  n.mediaType === c.G_ &&
                    "outstream" === o.mediaTypes.video.context &&
                    (n.renderer = (function (e) {
                      const t = l.A4.install({
                        id: e.adId,
                        url: y.rendererUrl || g,
                        config: y.rendererConfig || {},
                        loaded: !1,
                        adUnitCode: e.adUnitCode,
                      });
                      try {
                        t.setRender(k);
                      } catch (e) {
                        (0, u.JE)(
                          "Prebid Error calling setRender on renderer",
                          e
                        );
                      }
                      return t;
                    })(n)),
                  (0, m.A)(t, "ext.bidder.rp.advid") &&
                    (0, p.J)(n, "meta.advertiserId", t.ext.bidder.rp.advid),
                  n
                );
              },
              context: { netRevenue: !1 !== y.netRevenue, ttl: 360 },
              processors: a.m,
            }),
            A = {
              code: "rubicon",
              gvlid: 52,
              supportedMediaTypes: [c.D4, c.G_, c.s6],
              isBidRequestValid: function (e) {
                let t = !0;
                if ("object" != typeof e.params) return !1;
                for (
                  let t = 0, r = ["accountId", "siteId", "zoneId"];
                  t < r.length;
                  t++
                )
                  if (
                    ((e.params[r[t]] = parseInt(e.params[r[t]])),
                    isNaN(e.params[r[t]]))
                  )
                    return (
                      (0, u.vV)(
                        "Rubicon: wrong format of accountId or siteId or zoneId."
                      ),
                      !1
                    );
                let r = C(e, !0);
                if (!r.length) return !1;
                r.includes(c.G_) &&
                  (t = (function (e) {
                    let t = !0,
                      r = Object.prototype.toString.call([]),
                      i = Object.prototype.toString.call(0);
                    var n = { mimes: r, protocols: r, linearity: i };
                    return (
                      Object.keys(n).forEach(function (r) {
                        Object.prototype.toString.call(
                          (0, m.A)(e, "mediaTypes.video." + r)
                        ) !== n[r] &&
                          ((t = !1),
                          (0, u.vV)(
                            "Rubicon: mediaTypes.video." +
                              r +
                              " is required and must be of type: " +
                              n[r]
                          ));
                      }),
                      t
                    );
                  })(e));
                const i = [c.D4, c.s6].filter((e) => r.includes(e)).length > 0;
                return i ? t && i : t;
              },
              buildRequests: function (e, t) {
                let r,
                  i = [],
                  n = [];
                if (
                  ((r = e.filter((e) => {
                    const t = C(e) || [],
                      { length: r } = t,
                      { bidonmultiformat: i, video: n } = e.params || {};
                    return (
                      (1 === r && (t.includes(c.G_) || t.includes(c.s6))) ||
                      (2 === r && !t.includes(c.D4)) ||
                      (n && t.includes(c.G_)) ||
                      (i && (t.includes(c.G_) || t.includes(c.s6)))
                    );
                  })),
                  r && r.length)
                ) {
                  const e = j.toORTB({ bidRequests: r, bidderRequest: t });
                  I(),
                    n.push({
                      method: "POST",
                      url: "https://".concat(
                        y.videoHost || "prebid-server",
                        ".rubiconproject.com/openrtb2/auction"
                      ),
                      data: e,
                      bidRequest: r,
                    });
                }
                const o = e.filter((e) => {
                  const t = C(e) || [],
                    { bidonmultiformat: r, video: i } = e.params || {};
                  return (
                    t.includes(c.D4) &&
                    (1 === t.length ||
                      r ||
                      (!r && !i) ||
                      (!r && i && !t.includes(c.G_)))
                  );
                });
                if (!0 !== y.singleRequest)
                  i = n.concat(
                    o.map((e) => {
                      const r = A.createSlotParams(e, t);
                      return {
                        method: "GET",
                        url: "https://".concat(
                          y.bannerHost || "fastlane",
                          ".rubiconproject.com/a/api/fastlane.json"
                        ),
                        data:
                          A.getOrderedParams(r).reduce((e, t) => {
                            const i = r[t];
                            return ((0, u.O8)(i) && "" !== i) || (0, u.Et)(i)
                              ? "".concat(e).concat(z(t, i), "&")
                              : e;
                          }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e,
                      };
                    })
                  );
                else {
                  const e = o.reduce(
                      (e, t) => (
                        (e[t.params.siteId] = e[t.params.siteId] || []).push(t),
                        e
                      ),
                      {}
                    ),
                    r = 10;
                  i = n.concat(
                    Object.keys(e).reduce((i, n) => {
                      var o, a;
                      return (
                        ((o = e[n]),
                        (a = r),
                        o
                          .map((e, t) =>
                            t % a == 0 ? o.slice(t, t + a) : null
                          )
                          .filter((e) => e)).forEach((e) => {
                          const r = A.combineSlotUrlParams(
                            e.map((e) => A.createSlotParams(e, t))
                          );
                          i.push({
                            method: "GET",
                            url: "https://".concat(
                              y.bannerHost || "fastlane",
                              ".rubiconproject.com/a/api/fastlane.json"
                            ),
                            data:
                              A.getOrderedParams(r).reduce((e, t) => {
                                const i = r[t];
                                return ((0, u.O8)(i) && "" !== i) ||
                                  (0, u.Et)(i)
                                  ? "".concat(e).concat(z(t, i), "&")
                                  : e;
                              }, "") +
                              "slots="
                                .concat(e.length, "&rand=")
                                .concat(Math.random()),
                            bidRequest: e,
                          });
                        }),
                        i
                      );
                    }, [])
                  );
                }
                return i;
              },
              getOrderedParams: function (e) {
                const t = /^tg_v/,
                  r = /^tg_i/,
                  i = /^eid_|^tpid_/,
                  n = [
                    "account_id",
                    "site_id",
                    "zone_id",
                    "size_id",
                    "alt_size_ids",
                    "p_pos",
                    "gdpr",
                    "gdpr_consent",
                    "us_privacy",
                    "gpp",
                    "gpp_sid",
                    "rp_schain",
                  ]
                    .concat(Object.keys(e).filter((e) => i.test(e)))
                    .concat([
                      "x_liverampidl",
                      "ppuid",
                      "rf",
                      "p_geo.latitude",
                      "p_geo.longitude",
                      "kw",
                    ])
                    .concat(Object.keys(e).filter((e) => t.test(e)))
                    .concat(Object.keys(e).filter((e) => r.test(e)))
                    .concat([
                      "tk_flint",
                      "x_source.tid",
                      "l_pb_bid_id",
                      "p_screen_res",
                      "o_ae",
                      "o_cdep",
                      "rp_floor",
                      "rp_secure",
                      "tk_user_key",
                    ]);
                return n.concat(
                  Object.keys(e).filter((e) => -1 === n.indexOf(e))
                );
              },
              combineSlotUrlParams: function (e) {
                if (1 === e.length) return e[0];
                const t = e.reduce(function (t, r, i) {
                    return (
                      Object.keys(r).forEach(function (n) {
                        t.hasOwnProperty(n) || (t[n] = new Array(e.length)),
                          t[n].splice(i, 1, r[n]);
                      }),
                      t
                    );
                  }, {}),
                  r = new RegExp("^([^;]*)(;\\1)+$");
                return (
                  Object.keys(t).forEach(function (e) {
                    const i = t[e].join(";"),
                      n = i.match(r);
                    t[e] = n ? n[1] : i;
                  }),
                  t
                );
              },
              createSlotParams: function (e, t) {
                var r, i, n, o, a, s, l, p, v;
                e.startTime = new Date().getTime();
                const b = e.params,
                  f = w(e, "banner"),
                  [g, h] = b.latLong || [],
                  _ = {
                    account_id: b.accountId,
                    site_id: b.siteId,
                    zone_id: b.zoneId,
                    size_id: f[0],
                    alt_size_ids: f.slice(1).join(",") || void 0,
                    rp_floor:
                      (b.floor = parseFloat(b.floor)) >= 0.01
                        ? b.floor
                        : void 0,
                    rp_secure: "1",
                    tk_flint: "".concat(
                      y.int_type || "pbjs_lite",
                      "_v9.26.0-pre"
                    ),
                    "x_source.tid":
                      null === (r = t.ortb2) ||
                      void 0 === r ||
                      null === (r = r.source) ||
                      void 0 === r
                        ? void 0
                        : r.tid,
                    "x_imp.ext.tid":
                      null === (i = e.ortb2Imp) ||
                      void 0 === i ||
                      null === (i = i.ext) ||
                      void 0 === i
                        ? void 0
                        : i.tid,
                    l_pb_bid_id: e.bidId,
                    o_cdep:
                      null === (n = e.ortb2) ||
                      void 0 === n ||
                      null === (n = n.device) ||
                      void 0 === n ||
                      null === (n = n.ext) ||
                      void 0 === n
                        ? void 0
                        : n.cdep,
                    ip:
                      null === (o = e.ortb2) ||
                      void 0 === o ||
                      null === (o = o.device) ||
                      void 0 === o
                        ? void 0
                        : o.ip,
                    ipv6:
                      null === (a = e.ortb2) ||
                      void 0 === a ||
                      null === (a = a.device) ||
                      void 0 === a
                        ? void 0
                        : a.ipv6,
                    p_screen_res: [
                      window.screen.width,
                      window.screen.height,
                    ].join("x"),
                    tk_user_key: b.userId,
                    "p_geo.latitude": isNaN(parseFloat(g))
                      ? void 0
                      : parseFloat(g).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(h))
                      ? void 0
                      : parseFloat(h).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: O(e, t),
                  };
                if ("function" == typeof e.getFloor && !y.disableFloors) {
                  let t;
                  try {
                    t = e.getFloor({
                      currency: "USD",
                      mediaType: "banner",
                      size: "*",
                    });
                  } catch (e) {
                    (0, u.vV)("Rubicon: getFloor threw an error: ", e);
                  }
                  _.rp_hard_floor =
                    (0, u.Qd)(t) &&
                    "USD" === t.currency &&
                    !isNaN(parseInt(t.floor))
                      ? t.floor
                      : void 0;
                }
                !0 === b.bidonmultiformat &&
                  (0, m.A)(e, "mediaTypes") &&
                  Object.keys(e.mediaTypes).length > 1 &&
                  (_.p_formats = Object.keys(e.mediaTypes).join(","));
                let j =
                  { 1: "atf", 3: "btf" }[
                    (0, m.A)(e, "mediaTypes.banner.pos")
                  ] || "";
                _.p_pos =
                  "atf" === b.position || "btf" === b.position ? b.position : j;
                const k = d.$W.getConfig("user.id");
                var R;
                (k && (_.ppuid = k),
                null != e &&
                  null !== (s = e.ortb2Imp) &&
                  void 0 !== s &&
                  null !== (s = s.ext) &&
                  void 0 !== s &&
                  s.ae &&
                  (_.o_ae = 1),
                "number" ==
                  typeof (null == e ||
                  null === (l = e.ortb2) ||
                  void 0 === l ||
                  null === (l = l.site) ||
                  void 0 === l
                    ? void 0
                    : l.mobile) && (_["p_site.mobile"] = e.ortb2.site.mobile),
                (function (e, t) {
                  var r, i, n, o;
                  if (!1 === y.readTopics) return;
                  let a = [1, 2, 5, 6, 7, 507].concat(
                      (null === (r = y.sendSiteSegtax) || void 0 === r
                        ? void 0
                        : r.map((e) => Number(e))) || []
                    ),
                    s = [4, 508].concat(
                      (null === (i = y.sendUserSegtax) || void 0 === i
                        ? void 0
                        : i.map((e) => Number(e))) || []
                    ),
                    d =
                      (null === (n = e.ortb2) ||
                      void 0 === n ||
                      null === (n = n.user) ||
                      void 0 === n
                        ? void 0
                        : n.data) || [],
                    c =
                      (null === (o = e.ortb2) ||
                      void 0 === o ||
                      null === (o = o.site) ||
                      void 0 === o ||
                      null === (o = o.content) ||
                      void 0 === o
                        ? void 0
                        : o.data) || [];
                  d.forEach(S(t, "v", s)), c.forEach(S(t, "i", a));
                })(t, _),
                null != e &&
                  null !== (p = e.ortb2) &&
                  void 0 !== p &&
                  null !== (p = p.user) &&
                  void 0 !== p &&
                  null !== (p = p.ext) &&
                  void 0 !== p &&
                  p.eids &&
                  e.ortb2.user.ext.eids.forEach((e) => {
                    let {
                      source: t,
                      uids: r = [],
                      inserter: i,
                      matcher: n,
                      mm: o,
                      ext: a = {},
                    } = e;
                    try {
                      const e = r[0];
                      if (!e) return;
                      const a = (e) => {
                          var t;
                          return [
                            e.id,
                            e.atype || "",
                            "",
                            i || "",
                            n || "",
                            o || "",
                            (null == e || null === (t = e.ext) || void 0 === t
                              ? void 0
                              : t.rtipartner) || "",
                          ].join("^");
                        },
                        s = a(e);
                      if (((_["eid_".concat(t)] = s), !_.ppuid)) {
                        const e = r.find((e) => {
                          var t;
                          return (
                            "ppuid" ===
                            (null === (t = e.ext) || void 0 === t
                              ? void 0
                              : t.stype)
                          );
                        });
                        null != e && e.id && (_.ppuid = e.id);
                      }
                    } catch (e) {
                      (0, u.JE)(
                        "Rubicon: error reading eid:",
                        { source: t, uids: r },
                        e
                      );
                    }
                  }),
                t.gdprConsent &&
                  ("boolean" == typeof t.gdprConsent.gdprApplies &&
                    (_.gdpr = Number(t.gdprConsent.gdprApplies)),
                  (_.gdpr_consent = t.gdprConsent.consentString)),
                t.uspConsent &&
                  (_.us_privacy = encodeURIComponent(t.uspConsent)),
                null !== (v = t.gppConsent) && void 0 !== v && v.gppString) &&
                  ((_.gpp = t.gppConsent.gppString),
                  (_.gpp_sid =
                    null === (R = t.gppConsent) ||
                    void 0 === R ||
                    null === (R = R.applicableSections) ||
                    void 0 === R
                      ? void 0
                      : R.toString()));
                return (
                  (_.rp_maxbids = t.bidLimit || 1),
                  (function (e, t, r) {
                    const i = {
                      user: { ext: { data: x({}, e.params.visitor) } },
                      site: { ext: { data: x({}, e.params.inventory) } },
                    };
                    e.params.keywords &&
                      (i.site.keywords = (0, u.cy)(e.params.keywords)
                        ? e.params.keywords.join(",")
                        : e.params.keywords);
                    let n = (0, u.D9)({}, e.ortb2 || {}, i),
                      o = (0, m.A)(e.ortb2Imp, "ext") || {},
                      a = (0, m.A)(e.ortb2Imp, "ext.data") || {};
                    const s = (0, m.A)(e, "ortb2Imp.ext.gpid"),
                      d = (0, m.A)(n, "regs.ext.dsa"),
                      l = { user: [4], site: [1, 2, 5, 6] },
                      p = {
                        user: "tg_v.",
                        site: "tg_i.",
                        adserver: "tg_i.dfp_ad_unit_code",
                        pbadslot: "tg_i.pbadslot",
                        keywords: "kw",
                      },
                      v = function (e, t, r) {
                        return "data" === t && Array.isArray(e)
                          ? e
                              .filter(
                                (e) =>
                                  e.segment &&
                                  (0, m.A)(e, "ext.segtax") &&
                                  l[r] &&
                                  -1 !== l[r].indexOf((0, m.A)(e, "ext.segtax"))
                              )
                              .map((e) => {
                                let t = e.segment
                                  .filter((e) => e.id)
                                  .reduce((e, t) => (e.push(t.id), e), []);
                                if (t.length > 0) return t.toString();
                              })
                              .toString()
                          : ("object" != typeof e || Array.isArray(e)) &&
                            void 0 !== e
                          ? Array.isArray(e)
                            ? e
                                .filter((e) => {
                                  if ("object" != typeof e && void 0 !== e)
                                    return e.toString();
                                  (0, u.JE)(
                                    "Rubicon: Filtered value: ",
                                    e,
                                    "for key",
                                    t,
                                    ": Expected value to be string, integer, or an array of strings/ints"
                                  );
                                })
                                .toString()
                            : e.toString()
                          : void 0;
                      },
                      b = function (e, t, i) {
                        let n =
                            !(
                              arguments.length > 3 && void 0 !== arguments[3]
                            ) || arguments[3],
                          o = v(e, i, t),
                          a =
                            p[i] && n
                              ? "".concat(p[i])
                              : "data" === i
                              ? "".concat(p[t], "iab")
                              : "".concat(p[t]).concat(i);
                        r[a] = r[a] ? r[a].concat(",", o) : o;
                      };
                    if (t === c.D4) {
                      ["site", "user"].forEach((e) => {
                        Object.keys(n[e]).forEach((t) => {
                          "site" === e && "content" === t && n[e][t].data
                            ? b(n[e][t].data, e, "data")
                            : "ext" !== t
                            ? b(n[e][t], e, t)
                            : n[e][t].data &&
                              Object.keys(n[e].ext.data).forEach((t) => {
                                b(n[e].ext.data[t], e, t, !1);
                              });
                        });
                      }),
                        Object.keys(a).forEach((e) => {
                          "adserver" !== e
                            ? b(a[e], "site", e)
                            : "gam" === a[e].name && b(a[e].adslot, name, e);
                        }),
                        s && (r.p_gpid = s),
                        d &&
                          Object.keys(d).length &&
                          (0, u.Up)(d, [
                            "dsainfo",
                            (e) => (r.dsainfo = e),
                            "dsarequired",
                            (e) => (r.dsarequired = e),
                            "pubrender",
                            (e) => (r.dsapubrender = e),
                            "datatopub",
                            (e) => (r.dsadatatopubs = e),
                            "transparency",
                            (e) => {
                              Array.isArray(e) &&
                                e.length &&
                                (r.dsatransparency = e.reduce((e, t) => {
                                  const r = t.domain || "";
                                  if (!r) return e;
                                  const i = t.dsaparams || t.params;
                                  return Array.isArray(i) && 0 !== i.length
                                    ? (e && (e += "~~"),
                                      e + "".concat(r, "~").concat(i.join("_")))
                                    : e;
                                }, ""));
                            },
                          ]),
                        r["tg_i.pbadslot"] && delete r["tg_i.dfp_ad_unit_code"];
                      const e = (0, m.A)(n, "device.sua");
                      e &&
                        !1 !== y.chEnabled &&
                        (0, u.Up)(e, [
                          "architecture",
                          (e) => (r.m_ch_arch = e),
                          "bitness",
                          (e) => (r.m_ch_bitness = e),
                          "browsers",
                          (e) => {
                            var t, i;
                            if (!Array.isArray(e)) return;
                            const [n, o] = e.reduce(
                              (e, t) => {
                                var r, i, n;
                                return (
                                  e[0].push(
                                    '"'
                                      .concat(
                                        null == t ? void 0 : t.brand,
                                        '"|v="'
                                      )
                                      .concat(
                                        null == t ||
                                          null === (r = t.version) ||
                                          void 0 === r
                                          ? void 0
                                          : r[0],
                                        '"'
                                      )
                                  ),
                                  e[1].push(
                                    '"'
                                      .concat(
                                        null == t ? void 0 : t.brand,
                                        '"|v="'
                                      )
                                      .concat(
                                        null == t ||
                                          null === (i = t.version) ||
                                          void 0 === i ||
                                          null === (n = i.join) ||
                                          void 0 === n
                                          ? void 0
                                          : n.call(i, "."),
                                        '"'
                                      )
                                  ),
                                  e
                                );
                              },
                              [[], []]
                            );
                            (r.m_ch_ua =
                              null == n || null === (t = n.join) || void 0 === t
                                ? void 0
                                : t.call(n, ",")),
                              (r.m_ch_full_ver =
                                null == o ||
                                null === (i = o.join) ||
                                void 0 === i
                                  ? void 0
                                  : i.call(o, ","));
                          },
                          "mobile",
                          (e) => (r.m_ch_mobile = "?".concat(e)),
                          "model",
                          (e) => (r.m_ch_model = e),
                          "platform",
                          (e) => {
                            var t, i;
                            (r.m_ch_platform = null == e ? void 0 : e.brand),
                              (r.m_ch_platform_ver =
                                null == e ||
                                null === (t = e.version) ||
                                void 0 === t ||
                                null === (i = t.join) ||
                                void 0 === i
                                  ? void 0
                                  : i.call(t, "."));
                          },
                        ]);
                    } else
                      Object.keys(o).length && (0, u.D9)(r.imp[0].ext, o),
                        s && (r.imp[0].ext.gpid = s),
                        (0, u.D9)(r, n);
                  })(e, c.D4, _),
                  !0 === d.$W.getConfig("coppa") && (_.coppa = 1),
                  e.schain &&
                    T(e.schain) &&
                    (_.rp_schain = A.serializeSupplyChain(e.schain)),
                  _
                );
              },
              serializeSupplyChain: function (e) {
                if (!T(e)) return "";
                const { ver: t, complete: r, nodes: i } = e;
                return ""
                  .concat(t, ",")
                  .concat(r, "!")
                  .concat(A.serializeSupplyChainNodes(i));
              },
              serializeSupplyChainNodes: function (e) {
                const t = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e
                  .map((e) =>
                    t.map((t) => encodeURIComponent(e[t] || "")).join(",")
                  )
                  .join("!");
              },
              interpretResponse: function (e, t) {
                var r;
                e = e.body;
                const { data: i } = t;
                if (!e || "object" != typeof e) return [];
                if (e.seatbid) {
                  const t = (0, m.A)(e, "ext.errors.rubicon");
                  Array.isArray(t) &&
                    t.length > 0 &&
                    (0, u.JE)("Rubicon: Error in video response");
                  return j.fromORTB({ request: i, response: e }).bids;
                }
                let n,
                  o = e.ads,
                  a = 0;
                const { bidRequest: s } = t;
                if (
                  ("object" == typeof s &&
                    !Array.isArray(s) &&
                    C(s).includes(c.G_) &&
                    "object" == typeof o &&
                    (o = o[s.adUnitCode]),
                  !Array.isArray(o) || o.length < 1)
                )
                  return [];
                let d = o
                    .reduce((t, r, i) => {
                      if (
                        (r.impression_id && n === r.impression_id
                          ? a++
                          : (n = r.impression_id),
                        "ok" !== r.status)
                      )
                        return t;
                      const o = Array.isArray(s) ? s[i - a] : s;
                      if (o && "object" == typeof o) {
                        let e = {
                          requestId: o.bidId,
                          currency: "USD",
                          creativeId:
                            r.creative_id ||
                            ""
                              .concat(r.network || "", "-")
                              .concat(r.advertiser || ""),
                          cpm: r.cpm || 0,
                          dealId: r.deal,
                          ttl: 360,
                          netRevenue: !1 !== y.netRevenue,
                          rubicon: {
                            advertiserId: r.advertiser,
                            networkId: r.network,
                          },
                          meta: {
                            advertiserId: r.advertiser,
                            networkId: r.network,
                            mediaType: c.D4,
                          },
                        };
                        r.creative_type && (e.mediaType = r.creative_type),
                          r.dsa &&
                            Object.keys(r.dsa).length &&
                            (e.meta.dsa = r.dsa),
                          r.adomain &&
                            (e.meta.advertiserDomains = Array.isArray(r.adomain)
                              ? r.adomain
                              : [r.adomain]),
                          r.emulated_format &&
                            (e.meta.mediaType = r.emulated_format),
                          r.creative_type === c.G_
                            ? ((e.width = o.params.video.playerWidth),
                              (e.height = o.params.video.playerHeight),
                              (e.vastUrl = r.creative_depot_url),
                              (e.impression_id = r.impression_id),
                              (e.videoCacheKey = r.impression_id))
                            : ((e.ad =
                                ((d = r.script),
                                (l = r.impression_id),
                                "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
                                  .concat(
                                    l,
                                    "'>\n<script type='text/javascript'>"
                                  )
                                  .concat(
                                    d,
                                    "</script>\n</div>\n</body>\n</html>"
                                  ))),
                              ([e.width, e.height] = _[r.size_id]
                                .split("x")
                                .map((e) => Number(e)))),
                          (e.rubiconTargeting = (
                            Array.isArray(r.targeting) ? r.targeting : []
                          ).reduce((e, t) => ((e[t.key] = t.values[0]), e), {
                            rpfl_elemid: o.adUnitCode,
                          })),
                          t.push(e);
                      } else
                        (0, u.vV)(
                          "Rubicon: bidRequest undefined at index position:".concat(
                            i
                          ),
                          s,
                          e
                        );
                      var d, l;
                      return t;
                    }, [])
                    .sort((e, t) => (t.cpm || 0) - (e.cpm || 0)),
                  l =
                    null === (r = e.component_auction_config) || void 0 === r
                      ? void 0
                      : r.map((e) => ({ config: e, bidId: e.bidId }));
                return l ? { bids: d, paapi: l } : d;
              },
              getUserSyncs: function (e, t, r, i, n) {
                if (!D && e.iframeEnabled) {
                  let e = (0, b.d)(r, i, n);
                  return (
                    (e = Object.keys(e).length ? "?".concat((0, u.eP)(e)) : ""),
                    (D = !0),
                    {
                      type: "iframe",
                      url:
                        "https://".concat(
                          y.syncHost || "eus",
                          ".rubiconproject.com/usync.html"
                        ) + e,
                    }
                  );
                }
              },
            };
          function O(e, t) {
            let r;
            return (
              (r = e.params.referrer ? e.params.referrer : t.refererInfo.page),
              e.params.secure ? r.replace(/^http:/i, "https:") : r
            );
          }
          function k(e) {
            const t = document.getElementById(e.adUnitCode);
            !(function (e) {
              const t = e.querySelector("div[id^='google_ads']");
              t && t.style.setProperty("display", "none");
            })(t),
              (function (e) {
                const t = e.querySelector("script[id^='sas_script']"),
                  r = t && t.nextSibling;
                r &&
                  "iframe" === r.localName &&
                  r.style.setProperty("display", "none");
              })(t);
            const r = x(
              x(
                {},
                {
                  align: "center",
                  position: "append",
                  closeButton: !1,
                  label: void 0,
                  collapse: !0,
                }
              ),
              e.renderer.getConfig()
            );
            e.renderer.push(() => {
              window.MagniteApex.renderAd({
                width: e.width,
                height: e.height,
                vastUrl: e.vastUrl,
                placement: {
                  attachTo: "#".concat(e.adUnitCode),
                  align: r.align,
                  position: r.position,
                },
                closeButton: r.closeButton,
                label: r.label,
                collapse: r.collapse,
              });
            });
          }
          function w(e, t) {
            let r = e.params;
            if (t === c.G_) {
              let t = [];
              return (
                r.video && r.video.playerWidth && r.video.playerHeight
                  ? (t = [r.video.playerWidth, r.video.playerHeight])
                  : Array.isArray((0, m.A)(e, "mediaTypes.video.playerSize")) &&
                    1 === e.mediaTypes.video.playerSize.length
                  ? (t = e.mediaTypes.video.playerSize[0])
                  : Array.isArray(e.sizes) &&
                    e.sizes.length > 0 &&
                    Array.isArray(e.sizes[0]) &&
                    e.sizes[0].length > 1 &&
                    (t = e.sizes[0]),
                t
              );
            }
            let i = [];
            return (
              Array.isArray(r.sizes)
                ? (i = r.sizes)
                : void 0 !== (0, m.A)(e, "mediaTypes.banner.sizes")
                ? (i = R(e.mediaTypes.banner.sizes))
                : Array.isArray(e.sizes) && e.sizes.length > 0
                ? (i = R(e.sizes))
                : (0, u.JE)("Rubicon: no sizes are setup or found"),
              (function (e) {
                const t = [15, 2, 9];
                return e.sort((e, r) => {
                  const i = t.indexOf(e),
                    n = t.indexOf(r);
                  return i > -1 || n > -1
                    ? -1 === i
                      ? 1
                      : -1 === n
                      ? -1
                      : i - n
                    : e - r;
                });
              })(i)
            );
          }
          function S(e, t, r) {
            return (i) => {
              var n;
              const o = Number(
                null === (n = i.ext) || void 0 === n ? void 0 : n.segtax
              );
              var a;
              r.includes(o) &&
                (e["tg_".concat(t, ".tax").concat(o)] =
                  null === (a = i.segment) || void 0 === a
                    ? void 0
                    : a.map((e) => e.id).join(","));
            };
          }
          function R(e) {
            return (0, u.kK)(e).reduce((e, t) => {
              let r = parseInt(_[t], 10);
              return r && e.push(r), e;
            }, []);
          }
          function C(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = [];
            if (
              (function (e) {
                let t = void 0 !== (0, m.A)(e, "mediaTypes.".concat(c.G_)),
                  r = void 0 !== (0, m.A)(e, "mediaTypes.".concat(c.D4)),
                  i = void 0 !== (0, m.A)(e, "params.bidonmultiformat"),
                  n = "object" != typeof (0, m.A)(e, "params.video");
                return (
                  !(!t || !i) ||
                  (r && n && (t = !1),
                  t && n && (0, p.J)(e, "params.video", {}),
                  t)
                );
              })(e)
            ) {
              if (
                -1 ===
                ["outstream", "instream"].indexOf(
                  (0, m.A)(e, "mediaTypes.".concat(c.G_, ".context"))
                )
              )
                return (
                  t &&
                    (0, u.vV)(
                      "Rubicon: mediaTypes.video.context must be outstream or instream"
                    ),
                  r
                );
              if (w(e, c.G_).length < 2)
                return (
                  t &&
                    (0, u.vV)(
                      "Rubicon: could not determine the playerSize of the video"
                    ),
                  r
                );
              t &&
                (0, u.OG)(
                  "Rubicon: making video request for adUnit",
                  e.adUnitCode
                ),
                r.push(c.G_);
            }
            if (
              (void 0 !== (0, m.A)(e, "mediaTypes.".concat(c.s6)) &&
                r.push(c.s6),
              void 0 !== (0, m.A)(e, "mediaTypes.".concat(c.D4)))
            ) {
              if (0 === w(e, c.D4).length)
                return (
                  t &&
                    (0, u.vV)(
                      "Rubicon: could not determine the sizes for banner request"
                    ),
                  r
                );
              t &&
                (0, u.OG)(
                  "Rubicon: making banner request for adUnit",
                  e.adUnitCode
                ),
                r.push(c.D4);
            }
            return r;
          }
          const I = () => (h = {});
          function T(e) {
            let t = !1;
            const r = ["asi", "sid", "hp"];
            return e.nodes
              ? ((t = e.nodes.reduce(
                  (e, t) => (e ? r.every((e) => t.hasOwnProperty(e)) : e),
                  !0
                )),
                t || (0, u.vV)("Rubicon: required schain params missing"),
                t)
              : t;
          }
          function z(e, t) {
            return "rp_schain" === e
              ? "rp_schain=".concat(t)
              : "".concat(e, "=").concat(encodeURIComponent(t));
          }
          var D = !1;
          (0, s.a$)(A), (0, n.E)("rubiconBidAdapter");
        },
      },
      (e) => {
        e.O(0, [802, 247, 618, 498, 550, 85], () => {
          return (t = 9293), e((e.s = t));
          var t;
        });
        e.O();
      },
    ]);
  })(),
    pbjs.processQueue();

pbjs.setConfig({
  debug: true,
});