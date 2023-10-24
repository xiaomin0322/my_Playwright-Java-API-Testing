(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8046], {
    97690: function(e, t, r) {
        "use strict";
        r.d(t, {
            F: function() {
                return u
            }
        });
        var n = r(53414)
          , i = r(54448)
          , a = r(85706)
          , c = r(59462)
          , o = ["skipCaptcha"]
          , u = (0,
        a.LC)({
            reducerPath: "flightBaseServer",
            baseQuery: (0,
            c.d)(),
            endpoints: function() {
                return {}
            },
            serializeQueryArgs: function(e) {
                var t, r = e.queryArgs, a = void 0 === r ? {} : r, c = e.endpointName;
                return a.skipCaptcha,
                (t = {
                    endpointName: c,
                    queryArgs: (0,
                    n.Z)(a, o)
                }).endpointName + "(" + JSON.stringify(t.queryArgs, function(e, t) {
                    return (0,
                    i.PO)(t) ? Object.keys(t).sort().reduce(function(e, r) {
                        return e[r] = t[r],
                        e
                    }, {}) : t
                }) + ")"
            }
        });
        t.Z = u
    },
    11255: function(e, t, r) {
        "use strict";
        r.d(t, {
            c: function() {
                return p
            }
        });
        var n, i, a = r(62567), c = r(17400), o = r.n(c), u = r(49947), s = r(14720), f = r(3881), l = (n = (0,
        a.Z)(o().mark(function e() {
            return o().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", u.n.localStorage.getItem("MarsID"));
                    case 1:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function() {
            return n.apply(this, arguments)
        }
        ), p = (i = (0,
        a.Z)(o().mark(function e(t) {
            var r, n, i, a;
            return o().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return r = (0,
                        f.i)(),
                        e.next = 3,
                        l();
                    case 3:
                        if (!((n = e.sent) && "fat" === r)) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", "".concat(null === (a = u.n.location) || void 0 === a ? void 0 : a.origin, "/html5/flight/mid/").concat(n, "/token-").concat(s.Dd, "/platform-taro").concat(t));
                    case 7:
                        return e.abrupt("return", "".concat(null === (i = u.n.location) || void 0 === i ? void 0 : i.origin, "/mid/").concat(n, "/token-").concat(s.Dd, "/platform-taro").concat(t));
                    case 8:
                        return e.abrupt("return", t);
                    case 9:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e) {
            return i.apply(this, arguments)
        }
        )
    },
    96577: function(e, t, r) {
        "use strict";
        r.d(t, {
            r: function() {
                return _
            },
            Z: function() {
                return E
            }
        });
        var n, i, a = r(53414), c = r(62567), o = r(21356), u = r(88237), s = r(77090), f = r(49104), l = r(17400), p = r.n(l), d = r(43389), h = r(37094), v = r(97618), y = r(68952), g = r(11255), m = r(98100), b = r(95735), O = r(49947), j = ["/14488/flightList", "/14488/policyListSearch", "/14488/flightDetail", "/14780/listSearchForH5", "/14780/middleSearchForH5", "/14780/detailSearchForH5"], Z = "noNeedToken", P = ["skipCaptcha", "timeout", "extension", "auth", "data"];
        function C(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(r), !0).forEach(function(t) {
                    (0,
                    f.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var S = "flt_app_session_transactionId"
          , _ = function() {
            var e;
            function t(e) {
                (0,
                u.Z)(this, t),
                (0,
                f.Z)(this, "extension", []),
                (0,
                f.Z)(this, "option", void 0),
                this.option = e
            }
            return (0,
            s.Z)(t, [{
                key: "setExtension",
                value: function(e, t) {
                    this.extension = [{
                        name: e,
                        value: t
                    }]
                }
            }, {
                key: "getApiHeader",
                value: function(e) {
                    var t = e.extension
                      , r = void 0 === t ? [] : t
                      , i = e.auth
                      , a = e.cver
                      , c = (0,
                    h.qW)();
                    return {
                        auth: i || (0,
                        h.bW)() || "",
                        cver: a || c || "",
                        extension: [].concat((0,
                        o.Z)(this.extension), (0,
                        o.Z)(r), [{
                            name: S,
                            value: n
                        }])
                    }
                }
            }, {
                key: "promise",
                value: (e = (0,
                c.Z)(p().mark(function e(r) {
                    var n, c, u, s, f, l, h, v, y, O, j, Z, C, S, _, E, I, k, D, T;
                    return p().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return c = (n = this.option).url,
                                u = n.ttl,
                                f = void 0 === (s = n.path) ? "/restapi/soa2" : s,
                                l = n.queryObject,
                                h = n.dataformat,
                                v = n.cver,
                                j = void 0 !== (O = (y = w(w({}, this.option.param), r)).skipCaptcha) && O,
                                Z = y.timeout,
                                C = y.extension,
                                S = y.auth,
                                _ = y.data,
                                E = (0,
                                a.Z)(y, P),
                                I = this.option.noCache || r.noCache,
                                e.next = 5,
                                (0,
                                g.c)((0,
                                d.Nv)({
                                    url: "".concat(f).concat(c),
                                    query: w({}, l)
                                }));
                            case 5:
                                return k = e.sent,
                                (D = w(w({}, E), {}, {
                                    data: _,
                                    head: this.getApiHeader({
                                        extension: C,
                                        auth: S,
                                        cver: v,
                                        data: _
                                    })
                                })).idlst && i && (D.idlst = [{
                                    idtype: 2,
                                    ID: i
                                }].concat((0,
                                o.Z)(D.idlst))),
                                D.params && i && (D.params = [{
                                    idtype: 12,
                                    ID: i
                                }].concat((0,
                                o.Z)(D.params))),
                                T = (0,
                                m.BE)({
                                    skipCaptcha: j,
                                    url: c
                                }, function(e) {
                                    return (0,
                                    b.z)({
                                        url: c,
                                        noCache: I,
                                        param: w(w({}, E), {}, {
                                            data: _,
                                            captchaInfo: e
                                        }),
                                        ttl: u
                                    }, function() {
                                        return t.request({
                                            targetUrl: k,
                                            paramData: D,
                                            timeout: Z,
                                            captchaInfo: e
                                        })
                                    })
                                }).then(function(e) {
                                    var t = null == e ? void 0 : e.data;
                                    return h ? h(t) : t
                                }),
                                e.abrupt("return", T);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function(t) {
                    return e.apply(this, arguments)
                }
                )
            }], [{
                key: "request",
                value: function(e) {
                    var t = e.targetUrl
                      , r = e.paramData
                      , a = e.timeout
                      , c = e.captchaInfo;
                    (0,
                    y.eI)({
                        url: t,
                        request: r
                    }, void 0);
                    var o = +new Date
                      , u = {
                        "Content-Type": "application/json"
                    };
                    if (c) {
                        var s = c.token
                          , f = c.rid
                          , l = c.version;
                        u["x-gate-captcha-token-pass"] = s,
                        u["x-gate-captcha-token-token"] = s,
                        u["x-gate-captcha-rid"] = f,
                        u["x-gate-captcha-version"] = l
                    }
                    var p = j.some(function(e) {
                        return t.includes(e)
                    }) ? "function" == typeof O.n.signature ? O.n.signature(r) : "" : Z;
                     window.encrypt = O.n.signature;
                    return p !== Z && (p ? (u.token = p,
                    (0,
                    y.bd)("hotel_capture_with_token")) : (r.head.extension.push({
                        name: "flt_h5fp_cs",
                        value: "1"
                    }),
                    (0,
                    y.bd)("hotel_capture_no_token"))),
                    new Promise(function(e, c) {
                        (0,
                        y.jq)("ajax_model_request", {
                            targetUrl: t,
                            paramData: r
                        }),
                        (0,
                        v.W)({
                            url: t,
                            data: r,
                            header: u,
                            timeout: a,
                            success: function(r) {
                                (0,
                                y.eI)({
                                    url: t,
                                    response: r
                                }, void 0),
                                e(r);
                                var a, c = r && r.data, u = (((null == c ? void 0 : null === (a = c.ResponseStatus) || void 0 === a ? void 0 : a.Extension) || []).find(function(e) {
                                    return e.Id === S
                                }) || {}).Value;
                                u && (n = u);
                                var s = (null == c ? void 0 : c.Tranno) || (null == c ? void 0 : c.transactionNo);
                                s && (i = s),
                                (0,
                                y.im)(t, r, o, {
                                    transactionId: n || "",
                                    transactionNo: i || ""
                                })
                            }
                        }).catch(function(e) {
                            c(e || Error("请求失败默认错误"))
                        })
                    }
                    )
                }
            }]),
            t
        }();
        function E(e) {
            return new _(e)
        }
    },
    95735: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return u
            }
        });
        var n = r(21356)
          , i = r(88237)
          , a = r(77090)
          , c = r(49104)
          , o = new (function() {
            function e(t) {
                (0,
                i.Z)(this, e),
                (0,
                c.Z)(this, "cache", void 0),
                (0,
                c.Z)(this, "timer", void 0),
                (0,
                c.Z)(this, "maxCache", void 0),
                this.cache = new Map,
                this.timer = {},
                this.maxCache = (t || {}).maxCache || 5
            }
            return (0,
            a.Z)(e, [{
                key: "get",
                value: function(e) {
                    return this.cache.get(JSON.stringify(e))
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var r = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15e3;
                    if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
                        var a = (0,
                        n.Z)(this.cache.keys())[0];
                        this.cache.delete(a),
                        this.timer[a] && clearTimeout(this.timer[a])
                    }
                    var c = JSON.stringify(e);
                    this.cache.set(c, t),
                    i > 0 && (this.timer[c] = setTimeout(function() {
                        r.delete(c)
                    }, i))
                }
            }, {
                key: "delete",
                value: function(e) {
                    return delete this.timer[e],
                    this.cache.delete(e)
                }
            }, {
                key: "clear",
                value: function() {
                    return this.timer = {},
                    this.cache.clear()
                }
            }]),
            e
        }())({});
        function u(e, t) {
            var r = e.url
              , n = e.noCache
              , i = e.param
              , a = e.ttl
              , c = r + (i ? JSON.stringify(i) : "");
            n && o.delete(c);
            var u = o.get(c);
            if (u)
                return u;
            var s = t().catch(function(e) {
                return o.delete(c),
                Promise.reject(e)
            });
            return n || o.set(c, s, a),
            s
        }
    },
    98100: function(e, t, r) {
        "use strict";
        r.d(t, {
            BE: function() {
                return T
            }
        });
        var n = r(77090)
          , i = r(88237)
          , a = r(70946)
          , c = r(56204)
          , o = r(81138)
          , u = r(94743)
          , s = r(87754)
          , f = r(49104)
          , l = r(31982)
          , p = r(68952)
          , d = r(52983)
          , h = r(70661)
          , v = r(29268)
          , y = r(8043)
          , g = r(27778)
          , m = r(52980)
          , b = r(18457)
          , O = r(46407)
          , j = r(35498)
          , Z = r(26352)
          , P = r.n(Z)
          , C = r(97458)
          , w = function(e) {
            var t = e.show
              , r = e.title
              , n = e.divId
              , i = e.appId
              , a = e.businessSite
              , c = e.onConfirm
              , o = (0,
            g.So)()
              , u = o.windowWidth
              , s = o.language
              , f = u - 100
              , l = f / 275 * 177
              , p = (0,
            d.useMemo)(function() {
                return n || "id_".concat((0,
                b.Vj)())
            }, [n]);
            return (0,
            d.useEffect)(function() {
                var e;
                return (0,
                O.N)("jigsawVerification").then(function() {
                    window.jigsawVerification && ((0,
                    j.ff)("c_flight_gray_show", {
                        speed: "风控弹框展示"
                    }),
                    e = new window.jigsawVerification({
                        id: p,
                        appId: i,
                        containerId: "slider-container",
                        businessSite: a,
                        width: f + "px",
                        language: s,
                        resultHandler: function(e) {
                            if ("success" === e.checkState || "hidden" === e.checkState)
                                return c && c({
                                    token: e.token,
                                    rid: e.rid,
                                    version: e.version
                                });
                            (0,
                            m.CF)("验证失败，请重试"),
                            (0,
                            j.ff)("c_flight_gray_result_handler", {
                                speed: e.checkState
                            })
                        }
                    }))
                }),
                function() {
                    if (e)
                        return e.clear()
                }
            }, [i, a, p, s, c, f]),
            (0,
            C.jsxs)(v.Z, {
                className: P().CaptchaModal,
                style: {
                    display: t ? "block" : "none"
                },
                children: [(0,
                C.jsx)(v.Z, {
                    className: "mask"
                }), (0,
                C.jsx)(v.Z, {
                    className: P()["modal-wrap"],
                    children: (0,
                    C.jsxs)(v.Z, {
                        className: P()["captcha-content"],
                        children: [(0,
                        C.jsx)(y.Z, {
                            className: P()["captcha-title"],
                            children: void 0 === r ? "请完成以下验证：" : r
                        }), (0,
                        C.jsx)("div", {
                            id: p,
                            style: {
                                width: f + "px",
                                height: l + "px"
                            }
                        })]
                    })
                })]
            })
        };
        function S(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(r), !0).forEach(function(t) {
                    (0,
                    f.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var E = []
          , I = null
          , k = function(e, t) {
            var r = "flight_search_airtickets_miniapp";
            r = "flight_search_airtickets_h5_pic",
            (0,
            l.nextTick)(function() {
                var n;
                I && ((0,
                h.Mr)(I),
                I = null),
                n = {
                    appId: "100008344",
                    businessSite: r,
                    onConfirm: function(t) {
                        var r = t.token
                          , n = t.rid
                          , i = t.version;
                        (0,
                        p.jq)("confirm_captcha_modal"),
                        (0,
                        h.Mr)(I),
                        I = null,
                        e({
                            token: r,
                            rid: n,
                            version: i
                        })
                    },
                    onCancel: t
                },
                I = (0,
                h.K4)({
                    mask: {
                        callback: n.onCancel
                    },
                    content: (0,
                    C.jsx)(w, _({}, _({
                        show: !0
                    }, n))),
                    animationClassName: "animate__animated animate__slideInUp animate__faster",
                    style: {
                        width: "310px",
                        padding: 0
                    }
                })
            })
        }
          , D = function(e) {
            (0,
            c.Z)(s, e);
            var t, r = (t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, r = (0,
                u.Z)(s);
                if (t) {
                    var n = (0,
                    u.Z)(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return (0,
                o.Z)(this, e)
            }
            );
            function s(e, t) {
                var n;
                return (0,
                i.Z)(this, s),
                n = r.call(this, e),
                (0,
                f.Z)((0,
                a.Z)(n), "skipCaptcha", void 0),
                n.skipCaptcha = t,
                n
            }
            return (0,
            n.Z)(s)
        }((0,
        s.Z)(Error));
        function T(e, t) {
            var r = e.skipCaptcha
              , n = e.url;
            return new Promise(function(e, i) {
                !function a(c) {
                    t(c).then(function(e) {
                        return null === e || [432, 430, 500].includes((null == e ? void 0 : e.statusCode) || 0) ? ((0,
                        p.jq)("response_check_is_spider", {
                            code: null == e ? void 0 : e.statusCode,
                            url: n
                        }),
                        Promise.reject(Error("response_check_is_spider"))) : e
                    }).then(e).catch(function(e) {
                        return r || c || [404, 502].includes(e.status) ? i(new D("命中爬虫切反复洗白超出重试次数",r)) : "AbortError" === e.name ? ((0,
                        p.jq)("request_timeout"),
                        i(new D("超时不处理",r))) : void (E.push(a),
                        (0,
                        p.jq)("show_captcha_modal", {
                            url: n,
                            err: e
                        }),
                        k(function(e) {
                            var t = e.token
                              , r = e.rid
                              , n = e.version;
                            E.forEach(function(e) {
                                e && e({
                                    token: t,
                                    rid: r,
                                    version: n
                                })
                            }),
                            E = []
                        }, function() {
                            i(new D("关闭反爬弹窗"))
                        }))
                    })
                }()
            }
            )
        }
    },
    3958: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return L
            }
        });
        var n = r(62567)
          , i = r(21356)
          , a = r(49104)
          , c = r(53414)
          , o = r(88237)
          , u = r(77090)
          , s = r(96833)
          , f = r(56204)
          , l = r(81138)
          , p = r(94743)
          , d = r(17400)
          , h = r.n(d)
          , v = r(6772)
          , y = r(18457)
          , g = r(92769)
          , m = r(37094)
          , b = r(65890)
          , O = r(73785)
          , j = r(35498)
          , Z = r(22693)
          , P = r(31982);
        function C(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(r), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var S = function(e) {
            return function(t) {
                return new Promise(function(r, n) {
                    try {
                        var i = t || {}
                          , a = i.success
                          , c = i.fail
                          , o = i.complete;
                        e(w(w({}, t), {}, {
                            success: function(e) {
                                r(e),
                                a && a(e)
                            },
                            complete: function(e) {
                                o && o(e)
                            },
                            fail: function(e) {
                                n(e),
                                c && c(e)
                            }
                        }))
                    } catch (e) {
                        n(e),
                        fail && fail(e)
                    }
                }
                )
            }
        }
          , _ = S(P.default.startWifi)
          , E = S(P.default.getConnectedWifi)
          , I = {
            wifiInfo: {
                data: {},
                init: function() {
                    var e = this;
                    return _().then(function() {
                        P.default.onWifiConnected(function() {
                            e.init()
                        }),
                        P.default.offWifiConnected(function() {
                            console.log("offWifiConnected")
                        })
                    }).then(function() {
                        return E()
                    }).then(function(t) {
                        return e.data = t && t.wifi || {},
                        e.data
                    }).catch(function(t) {
                        return console.log(t),
                        e.data = {},
                        e.data
                    })
                }
            }
        }
          , k = r(96577)
          , D = r(73816)
          , T = ["dataformat"];
        function x(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(r), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var R = (0,
        y.Vj)().substr(1, 36)
          , A = function(e) {
            (0,
            f.Z)(d, e);
            var t, r, a = (t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, r = (0,
                p.Z)(d);
                if (t) {
                    var n = (0,
                    p.Z)(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return (0,
                l.Z)(this, e)
            }
            );
            function d(e) {
                var t = e.dataformat
                  , r = (0,
                c.Z)(e, T);
                return (0,
                o.Z)(this, d),
                a.call(this, N(N({}, r), {}, {
                    dataformat: function(e) {
                        if (v.is(Function, t))
                            return t(e);
                        if (e && e.data && "ok" !== e.data)
                            try {
                                e.data = JSON.parse(e.data)
                            } catch (e) {
                                e instanceof Error && (0,
                                j.jq)("soa_data_format_error", e)
                            }
                        return e
                    }
                }))
            }
            return (0,
            u.Z)(d, [{
                key: "getApiHeader",
                value: function(e) {
                    var t, r, n, a = e.extension, c = void 0 === a ? [] : a, o = e.auth, u = e.cver, f = e.data, l = I.wifiInfo.data || {}, h = l.SSID, v = l.BSSID, y = "".concat((0,
                    m.al)() || "", ".").concat(f || ""), j = (0,
                    b.G)() || {}, C = null === (t = (0,
                    P.getCurrentInstance)()) || void 0 === t ? void 0 : null === (r = t.router) || void 0 === r ? void 0 : r.params, w = null != C && C.hotelToken ? decodeURIComponent(null == C ? void 0 : C.hotelToken) : void 0, S = w ? "101" : O.cm.getAttr("channel", "");
                    return (0,
                    s.Z)((0,
                    p.Z)(d.prototype), "getApiHeader", this).call(this, {
                        auth: o,
                        cver: u,
                        extension: [].concat((0,
                        i.Z)(c), [{
                            name: "Flt_SubChannel",
                            value: S
                        }, {
                            name: "mystery",
                            value: (0,
                            m.h$)(y).substring(0, 64)
                        }, {
                            name: "sessionId",
                            value: R
                        }, {
                            name: "pageName",
                            value: null === (n = (0,
                            g.uN)()) || void 0 === n ? void 0 : n.name
                        }, {
                            name: "aId",
                            value: "" + (j.allianceid || "")
                        }, {
                            name: "sId",
                            value: "" + (j.sid || "")
                        }, {
                            name: "ouId",
                            value: "" + (j.ouid || "")
                        }, {
                            name: "sourceId",
                            value: "" + (j.sourceid || "")
                        }, {
                            name: "exmktID",
                            value: "" + (j.exmktid || "")
                        }, {
                            name: "env",
                            value: (0,
                            Z.as)() || ""
                        }, {
                            name: "version",
                            value: "2023.08.24"
                        }, {
                            name: "platform.source",
                            value: (0,
                            D.C0)() || "H5"
                        }, (h || v) && {
                            name: "FLT_SSID",
                            value: h
                        }, (h || v) && {
                            name: "FLT_BSSID",
                            value: v
                        }, w && {
                            name: "hotelKeys",
                            value: JSON.stringify([{
                                hotelToken: w
                            }])
                        }]).filter(Boolean)
                    })
                }
            }, {
                key: "promise",
                value: (r = (0,
                n.Z)(h().mark(function e(t) {
                    var r;
                    return h().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = N(N({}, this.option.param), t).data,
                                e.abrupt("return", (0,
                                s.Z)((0,
                                p.Z)(d.prototype), "promise", this).call(this, N(N({}, t), {}, {
                                    data: JSON.stringify(r)
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function(e) {
                    return r.apply(this, arguments)
                }
                )
            }]),
            d
        }(k.r)
          , L = function(e) {
            return new A(e)
        }
    },
    59462: function(e, t, r) {
        "use strict";
        r.d(t, {
            d: function() {
                return l
            },
            f: function() {
                return f
            }
        });
        var n = r(49104)
          , i = r(62567)
          , a = r(17400)
          , c = r.n(a)
          , o = r(3958);
        function u(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var f = function(e) {
            return "object" == typeof e && null != e && "status"in e
        }
          , l = function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e = (0,
            i.Z)(c().mark(function e(n) {
                var i, a, u, f, l, p, d, h, v, y, g;
                return c().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = n.url,
                            a = n.serverCode,
                            u = n.method,
                            l = void 0 === (f = n.format) ? "json" : f,
                            d = void 0 === (p = n.queryObject) ? {} : p,
                            h = n.cver,
                            v = n.queryParams,
                            y = i || "/".concat(a, "/").concat(l, "/").concat(encodeURIComponent(u || "")),
                            e.prev = 2,
                            e.next = 5,
                            (0,
                            o.Z)({
                                cver: h,
                                noCache: !0,
                                url: "".concat(t).concat(y),
                                queryObject: s(s({}, r), d)
                            }).promise(v);
                        case 5:
                            return g = e.sent,
                            e.abrupt("return", {
                                data: g
                            });
                        case 9:
                            return e.prev = 9,
                            e.t0 = e.catch(2),
                            e.abrupt("return", {
                                error: {
                                    status: e.t0.status,
                                    data: e.t0,
                                    skipCaptcha: e.t0.skipCaptcha
                                }
                            });
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 9]])
            })),
            function(t) {
                return e.apply(this, arguments)
            }
        }
    },
    86778: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ck: function() {
                return f
            },
            KJ: function() {
                return d
            },
            Q$: function() {
                return s
            },
            Zn: function() {
                return o
            },
            Zs: function() {
                return l
            },
            jo: function() {
                return a
            },
            lH: function() {
                return u
            },
            sq: function() {
                return p
            },
            u$: function() {
                return i
            },
            ug: function() {
                return c
            }
        });
        var n = r(96577)
          , i = (0,
        n.Z)({
            noCache: !0,
            url: "/13515/queryUserInfo"
        });
        (0,
        n.Z)({
            url: "/14420/7087/json/flightGloryDetail"
        });
        var a = (0,
        n.Z)({
            url: "/15095/flightSameCityDetect"
        })
          , c = (0,
        n.Z)({
            url: "/15037/flightClauseSearch"
        })
          , o = (0,
        n.Z)({
            url: "/17909/queryuserauthinfo"
        })
          , u = (0,
        n.Z)({
            ServiceCode: "13060501",
            url: "/17909/giftPackage"
        })
          , s = (0,
        n.Z)({
            ServiceCode: "13032701",
            url: "/15467/extendCoupon"
        })
          , f = (0,
        n.Z)({
            url: "/14047/PopupActivity"
        })
          , l = (0,
        n.Z)({
            url: "/14047/ReceiveCoupon"
        })
          , p = (0,
        n.Z)({
            url: "/14047/NewUserReceiveCoupon"
        })
          , d = (0,
        n.Z)({
            url: "/15756/bjjson/bookingquery"
        })
    },
    44216: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ki: function() {
                return v
            },
            KJ: function() {
                return n.KJ
            },
            Q$: function() {
                return n.Q$
            },
            ug: function() {
                return n.ug
            },
            fL: function() {
                return c
            },
            K5: function() {
                return d
            },
            jo: function() {
                return n.jo
            },
            s5: function() {
                return b
            },
            ZO: function() {
                return m
            },
            h1: function() {
                return J
            },
            Kt: function() {
                return Z
            },
            s8: function() {
                return f
            },
            lH: function() {
                return n.lH
            },
            B: function() {
                return g
            },
            _f: function() {
                return K
            },
            m_: function() {
                return p
            },
            Xg: function() {
                return z
            },
            u0: function() {
                return o
            },
            G4: function() {
                return l
            },
            Jw: function() {
                return O
            },
            Zn: function() {
                return n.Zn
            },
            u$: function() {
                return n.u$
            },
            Zs: function() {
                return n.Zs
            },
            yG: function() {
                return y
            },
            OG: function() {
                return s
            },
            NN: function() {
                return j
            },
            Zu: function() {
                return h
            },
            g9: function() {
                return u
            }
        });
        var n = r(86778)
          , i = r(96577);
        (0,
        i.Z)({
            url: "/12924/DeliveryOrderListSubmit"
        }),
        (0,
        i.Z)({
            url: "/11781/Flight/User/Check",
            param: {
                otype: 1,
                psglst: []
            }
        }),
        (0,
        i.Z)({
            ServiceCode: "15000201",
            url: "/11781/Domestic/Booking/FavRecommend/Query"
        }),
        (0,
        i.Z)({
            ServiceCode: "13025003",
            url: "/14022/flightNoteSearch"
        }),
        (0,
        i.Z)({
            url: "/14022/searchFlightNote"
        }),
        (0,
        i.Z)({
            ServiceCode: "13030110",
            url: "/14022/bookingGuideQuery"
        }),
        (0,
        i.Z)({
            ServiceCode: "13025008",
            url: "/14022/flightDelivery"
        });
        var a = r(3958);
        (0,
        a.Z)({
            url: "/14488/flightList",
            queryObject: {
                subEnv: "fat128"
            }
        }),
        (0,
        a.Z)({
            url: "/14488/policyListSearch",
            queryObject: {
                subEnv: "fat128"
            }
        }),
        (0,
        a.Z)({
            url: "/14488/flightDetail",
            queryObject: {
                subEnv: "fat128"
            }
        });
        var c = (0,
        i.Z)({
            ServiceCode: "77880011",
            url: "/13378/FlightLowPriceSubscriptionListSearch"
        });
        (0,
        i.Z)({
            url: "/13378/FltLowPricePriceForecast"
        }),
        (0,
        i.Z)({
            url: "/13378/FlightLowPriceSubscriptionUpdate"
        });
        var o = (0,
        a.Z)({
            url: "/19691/note",
            queryObject: {
                subEnv: "fat6"
            }
        })
          , u = (0,
        a.Z)({
            url: "/19691/xList",
            queryObject: {
                subEnv: "fat6"
            }
        })
          , s = (0,
        a.Z)({
            url: "/15490/flightXListSearch"
        })
          , f = (0,
        a.Z)({
            url: "/13956/getXProductDetailInfo"
        })
          , l = (0,
        a.Z)({
            noCache: !0,
            url: "/19691/orderCreate",
            queryObject: {
                subEnv: "fat6"
            }
        })
          , p = (0,
        a.Z)({
            noCache: !0,
            url: "/15756/bjjson/orderCreate",
            queryObject: {
                subEnv: "fat3"
            }
        })
          , d = (0,
        a.Z)({
            noCache: !0,
            url: "/15449/flightrepeatordercheck"
        })
          , h = (0,
        a.Z)({
            url: "/19691/verify"
        })
          , v = (0,
        a.Z)({
            url: "/19691/airportFuzzySearch"
        });
        (0,
        a.Z)({
            ttl: 36e5,
            url: "/19691/getRegion"
        }),
        (0,
        a.Z)({
            url: "/19691/reportMetric"
        });
        var y = (0,
        a.Z)({
            url: "/19691/report"
        });
        (0,
        a.Z)({
            noCache: !0,
            url: "/19691/saveSharePassenger"
        }),
        (0,
        a.Z)({
            url: "/19691/getMemberInterests"
        }),
        (0,
        a.Z)({
            noCache: !0,
            url: "/19691/getCoupons"
        });
        var g = (0,
        a.Z)({
            url: "/19691/handleUserContact"
        })
          , m = (0,
        a.Z)({
            noCache: !0,
            url: "/19691/getHorn"
        });
        (0,
        a.Z)({
            noCache: !0,
            url: "/17964/hornContent"
        }),
        (0,
        a.Z)({
            url: "/19691/getTravelCard"
        });
        var b = (0,
        a.Z)({
            url: "/19691/getConfig"
        })
          , O = (0,
        a.Z)({
            url: "/19691/PersonalizedTheme"
        })
          , j = (0,
        a.Z)({
            url: "/19691/specialRoutesSearch"
        });
        (0,
        a.Z)({
            url: "/19691/getPassengerENName"
        });
        var Z = (0,
        a.Z)({
            url: "/19691/getSwitch"
        });
        (0,
        a.Z)({
            url: "/19691/orderComplete"
        }),
        (0,
        a.Z)({
            url: "/19691/completeInvoice"
        }),
        (0,
        a.Z)({
            url: "/19691/getHomeFlightInfo"
        }),
        (0,
        a.Z)({
            url: "/19691/subscribeToShare"
        }),
        (0,
        a.Z)({
            url: "/19691/getSharePassenger"
        }),
        (0,
        a.Z)({
            url: "/19691/getAvailableCardList"
        }),
        (0,
        i.Z)({
            url: "/16421/bookingGuideQuery"
        }),
        (0,
        i.Z)({
            url: "/18053/createLockPriceActivity"
        }),
        (0,
        i.Z)({
            noCache: !0,
            url: "/18053/queryLockPriceActivity"
        }),
        (0,
        i.Z)({
            noCache: !0,
            url: "/17909/QueryPriceInsurance"
        });
        var P = r(49104)
          , C = r(53414)
          , w = r(62567)
          , S = r(88237)
          , _ = r(77090)
          , E = r(96833)
          , I = r(56204)
          , k = r(81138)
          , D = r(94743)
          , T = r(17400)
          , x = r.n(T)
          , N = r(43389)
          , R = r(97618)
          , A = r(37094)
          , L = r(31690)
          , F = r(48640)
          , U = r(11255)
          , q = r(98100)
          , M = r(95735)
          , H = ["noCache", "skipCaptcha", "timeout", "useDoubleCver"];
        function G(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(r), !0).forEach(function(t) {
                    (0,
                    P.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var W = function(e) {
            (0,
            I.Z)(i, e);
            var t, r, n = (t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, r = (0,
                D.Z)(i);
                if (t) {
                    var n = (0,
                    D.Z)(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return (0,
                k.Z)(this, e)
            }
            );
            function i() {
                return (0,
                S.Z)(this, i),
                n.apply(this, arguments)
            }
            return (0,
            _.Z)(i, [{
                key: "promise",
                value: (r = (0,
                w.Z)(x().mark(function e(t) {
                    var r, n, a, c, o, u, s, f, l, p, d, h, v, y, g, m, b, O = this;
                    return x().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = (r = this.option).url,
                                a = r.ttl,
                                o = void 0 === (c = r.path) ? "/restapi/soa2" : c,
                                u = r.queryObject,
                                s = r.dataformat,
                                p = void 0 !== (l = (f = B(B({}, this.option.param), t)).noCache) && l,
                                h = void 0 !== (d = f.skipCaptcha) && d,
                                v = f.timeout,
                                g = void 0 !== (y = f.useDoubleCver) && y,
                                m = (0,
                                C.Z)(f, H),
                                e.next = 4,
                                (0,
                                U.c)((0,
                                N.Nv)({
                                    url: "".concat(o).concat(n),
                                    query: B({}, u)
                                }));
                            case 4:
                                return b = e.sent,
                                e.abrupt("return", (0,
                                q.BE)({
                                    skipCaptcha: h,
                                    url: n
                                }, function(e) {
                                    return (0,
                                    M.z)({
                                        url: n,
                                        noCache: p,
                                        param: B(B({}, m), {}, {
                                            captchaInfo: e
                                        }),
                                        ttl: a
                                    }, function() {
                                        return i.requestDouble({
                                            targetUrl: b,
                                            paramData: B(B({}, m), {}, {
                                                head: (0,
                                                E.Z)((0,
                                                D.Z)(i.prototype), "getApiHeader", O).call(O, m)
                                            }),
                                            timeout: v,
                                            captchaInfo: e,
                                            useDoubleCver: g
                                        })
                                    })
                                }).then(function(e) {
                                    var t = e && e.data;
                                    return s ? s(t) : t
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function(e) {
                    return r.apply(this, arguments)
                }
                )
            }], [{
                key: "requestDouble",
                value: function(e) {
                    var t = e.targetUrl
                      , r = e.paramData
                      , n = e.timeout
                      , i = e.captchaInfo
                      , a = e.useDoubleCver;
                    (0,
                    L.eI)({
                        url: t,
                        request: r
                    }, void 0);
                    var c = +new Date
                      , o = {
                        "Content-Type": "application/json"
                    };
                    if (i) {
                        var u = i.token
                          , s = i.rid
                          , f = i.version;
                        o["x-gate-captcha-token-pass"] = u,
                        o["x-gate-captcha-token-token"] = u,
                        o["x-gate-captcha-rid"] = s,
                        o["x-gate-captcha-version"] = f
                    }
                    var l = {};
                    if (a) {
                        var p = (0,
                        A.qW)();
                        p && (l = B(B({}, l), {}, {
                            cver: p,
                            extension: [{
                                name: "source",
                                value: "miniapp"
                            }]
                        }))
                    }
                    return new Promise(function(e, i) {
                        (0,
                        R.W)({
                            url: t,
                            data: B(B({}, r), {}, {
                                head: l
                            }),
                            header: o,
                            timeout: n,
                            success: function(r) {
                                (0,
                                L.eI)({
                                    url: t,
                                    response: r
                                }, void 0),
                                e(r),
                                (0,
                                F.Z)(t, r, c)
                            },
                            fail: function(e) {
                                i(e || Error("请求失败默认错误"))
                            }
                        })
                    }
                    )
                }
            }]),
            i
        }(i.r)
          , V = function(e) {
            return new W(e)
        };
        V({
            url: "/19728/fuzzySearch"
        }),
        V({
            url: "/15095/boardListShowSearch"
        }),
        V({
            url: "/21943/flightHomeFirstService"
        }),
        V({
            url: "/21943/historySearchLowPriceService"
        }),
        V({
            url: "/21943/flightHomeSecondService"
        });
        var z = V({
            url: "/17909/getNearAirportInfo"
        })
          , K = (0,
        i.Z)({
            url: "/21882/InsuranceNote"
        })
          , J = (0,
        i.Z)({
            url: "/17691/getLuggageRefundMsg"
        })
    },
    48478: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return eo
            }
        });
        var n = r(62567)
          , i = r(88237)
          , a = r(77090)
          , c = r(70946)
          , o = r(56204)
          , u = r(81138)
          , s = r(94743)
          , f = r(49104)
          , l = r(17400)
          , p = r.n(l)
          , d = r(52983)
          , h = function(e) {
            (0,
            o.Z)(n, e);
            var t, r = (t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, r = (0,
                s.Z)(n);
                if (t) {
                    var i = (0,
                    s.Z)(this).constructor;
                    e = Reflect.construct(r, arguments, i)
                } else
                    e = r.apply(this, arguments);
                return (0,
                u.Z)(this, e)
            }
            );
            function n(e) {
                return (0,
                i.Z)(this, n),
                r.call(this, e)
            }
            return (0,
            a.Z)(n)
        }(d.Component)
          , v = r(92769)
          , y = r(6315)
          , g = r(29268)
          , m = r(41901)
          , b = r(76032)
          , O = r(7551)
          , j = r(31982)
          , Z = r(70470)
          , P = r(43116)
          , C = r(68952)
          , w = r(15342)
          , S = r(24610)
          , _ = r(18339)
          , E = r(93473)
          , I = (0,
        r(54448).oM)({
            name: "regionType",
            initialState: {
                value: "DOMESTIC"
            },
            reducers: {
                changeRegionType: function(e, t) {
                    e.value = t.payload
                }
            }
        })
          , k = I.actions.changeRegionType;
        I.reducer;
        var D = r(62193)
          , T = r(44216)
          , x = r(82257)
          , N = r(77453)
          , R = r(52579)
          , A = r(6009)
          , L = r(86011);
        r(43389);
        var F = r(22693)
          , U = r(92740)
          , q = r(83710)
          , M = r(66466)
          , H = r(13834)
          , G = r(57965)
          , B = r(97458)
          , W = (0,
        d.memo)(function(e) {
            var t = e.needLogin
              , r = e.createNonUser
              , n = e.children
              , i = e.bootstrapped
              , a = (0,
            w.T)()
              , c = (0,
            j.useRouter)()
              , o = c.path
              , u = c.params
              , s = (0,
            w.C)(L.c7)
              , f = (0,
            w.C)(L.QY)
              , l = (0,
            d.useCallback)(function() {
                a((0,
                q.Xq)())
            }, [a]);
            (0,
            d.useEffect)(function() {
                _.Z.setPageName(o)
            }, [o]),
            (0,
            d.useEffect)(function() {
                (0,
                S.Zw)().catch(function() {
                    if (t) {
                        if ((0,
                        F.Cr)()) {
                            (0,
                            U.x)().then(function() {
                                l()
                            });
                            return
                        }
                        var e = (0,
                        M.Ug)();
                        if (e) {
                            (0,
                            H.G)(e);
                            return
                        }
                        (0,
                        S.fN)()
                    }
                })
            }, [o, u, t, r, l, s]),
            (0,
            d.useEffect)(function() {
                if (i && (!f || (0,
                A.Uc)(u))) {
                    var e = (0,
                    A.ZD)(u);
                    if (!e) {
                        a((0,
                        D.mI)(!0));
                        return
                    }
                    var t = e.tripType
                      , r = e.regionType
                      , n = e.departure
                      , c = e.arrival
                      , o = e.passengerType
                      , s = e.interCabin;
                    a((0,
                    E.mA)(t)),
                    a(k(r)),
                    a((0,
                    x.b7)(n)),
                    a((0,
                    x.AO)(n.date)),
                    a((0,
                    N.FS)(c.date)),
                    a((0,
                    N.oC)(c)),
                    a((0,
                    x.jW)(n.cabin)),
                    a((0,
                    N.Pc)(c.cabin)),
                    a((0,
                    R.wl)(o)),
                    a((0,
                    G.dS)(s)),
                    a((0,
                    D.mI)(!0))
                }
            }, [u, a, i, f, o]);
            var p = (0,
            w.C)(L.wQ)
              , h = (0,
            w.C)(L.wG);
            return (0,
            d.useEffect)(function() {
                var e = p.cityCode
                  , t = p.regionType
                  , r = p.cityName;
                T.Ki.promise({
                    data: {
                        key: e
                    }
                }).then(function(n) {
                    var i = (n.data || []).find(function(t) {
                        return "CITY" === t.poiType && t.cityCode === e.toUpperCase()
                    });
                    if (i) {
                        var c = i.isIntl ? "INTERNATIONAL" : "DOMESTIC";
                        c !== t && a((0,
                        x.ro)(c)),
                        r !== i.cityName && a((0,
                        x.Mb)(i.cityName))
                    }
                }).catch(function() {})
            }, [p, h, a]),
            (0,
            d.useEffect)(function() {
                var e = h.cityCode
                  , t = h.regionType
                  , r = h.cityName;
                T.Ki.promise({
                    data: {
                        key: e
                    }
                }).then(function(n) {
                    var i = (n.data || []).find(function(t) {
                        return "CITY" === t.poiType && t.cityCode === e.toUpperCase()
                    });
                    if (i) {
                        var c = i.isIntl ? "INTERNATIONAL" : "DOMESTIC";
                        c !== t && a((0,
                        N.gN)(c)),
                        r !== i.cityName && a((0,
                        N.nR)(i.cityName))
                    }
                }).catch(function() {})
            }, [p, h, a]),
            (0,
            B.jsx)(B.Fragment, {
                children: n
            })
        })
          , V = r(71566)
          , z = r(89358)
          , K = r.n(z)()(function() {
            return Promise.all([r.e(9527), r.e(931)]).then(r.bind(r, 43022))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [43022]
                }
            }
        })
          , J = r(92523)
          , Q = r.n(J)
          , Y = (0,
        d.memo)(function(e) {
            var t = (e || {}).tdk || {}
              , r = t.title
              , n = t.description
              , i = t.keywords;
            return (0,
            B.jsxs)(Q(), {
                children: [(0,
                B.jsx)("meta", {
                    name: "description",
                    content: void 0 === n ? "" : n
                }), (0,
                B.jsx)("meta", {
                    name: "keywords",
                    content: void 0 === i ? "" : i
                }), (0,
                B.jsx)("title", {
                    children: void 0 === r ? "" : r
                })]
            })
        })
          , $ = (0,
        d.memo)(function(e) {
            var t = e.needLogin
              , r = e.createNonUser
              , n = e.children
              , i = (0,
            j.useRouter)().params;
            return (0,
            d.useEffect)(function() {
                try {
                    var e = i.abinfo;
                    if (e) {
                        var t = JSON.parse(e) || {}
                          , r = t.abResult
                          , n = t.abTracker;
                        (0,
                        C.$Y)({
                            abResult: r,
                            abTracker: n
                        })
                    }
                } catch (e) {}
            }),
            (0,
            B.jsx)(P.zt, {
                store: V.h,
                children: (0,
                B.jsx)(Z.r, {
                    loading: null,
                    persistor: V.Dj,
                    children: function(e) {
                        return (0,
                        B.jsxs)(W, {
                            needLogin: t,
                            createNonUser: r,
                            params: i,
                            bootstrapped: e,
                            children: [(0,
                            B.jsx)(Y, {}), n, (0,
                            B.jsx)(K, {})]
                        })
                    }
                })
            })
        })
          , X = r(37852)
          , ee = r(31690)
          , et = r(35498)
          , er = r(82988);
        function en(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var ei = function(e) {
            er.Z.initPromise.then(function() {
                var t, r = er.Z.get("expTrace", {}), n = r.pageTrace, i = void 0 === n ? {} : n, a = r.expResult, c = void 0 === a ? {} : a, o = r.expTracker, u = void 0 === o ? {} : o, s = function(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return en(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name),
                                "Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return en(e, t)
                            }
                        }(e))) {
                            r && (e = r);
                            var n = 0
                              , i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, c = !0, o = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return c = e.done,
                            e
                        },
                        e: function(e) {
                            o = !0,
                            a = e
                        },
                        f: function() {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                    }
                }(i["".concat("h5", ":").concat(e)] || i["".concat(e)] || []);
                try {
                    for (s.s(); !(t = s.n()).done; ) {
                        var f = t.value
                          , l = c[f]
                          , p = u[f];
                        (0,
                        et.$Y)({
                            abResult: l,
                            abTracker: p
                        })
                    }
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
            })
        };
        function ea(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function ec(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ea(Object(r), !0).forEach(function(t) {
                    (0,
                    f.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ea(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function eo() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.pageId
              , r = e.needLogin
              , l = e.createNonUser;
            return function(e) {
                return function(d) {
                    (0,
                    o.Z)(Z, d);
                    var h, m, j = (h = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    function() {
                        var e, t = (0,
                        s.Z)(Z);
                        if (h) {
                            var r = (0,
                            s.Z)(this).constructor;
                            e = Reflect.construct(t, arguments, r)
                        } else
                            e = t.apply(this, arguments);
                        return (0,
                        u.Z)(this, e)
                    }
                    );
                    function Z(e) {
                        var r, a;
                        return (0,
                        i.Z)(this, Z),
                        r = j.call(this, e),
                        (0,
                        f.Z)((0,
                        c.Z)(r), "setCurrentPageId", (a = (0,
                        n.Z)(p().mark(function e(t) {
                            var n;
                            return p().wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        r.props.pvIdAsync;
                                    case 2:
                                        n = e.sent,
                                        r.setState(ec(ec({}, r.state), {}, {
                                            currentPageId: t
                                        })),
                                        t && (0,
                                        et.cj)({
                                            pageId: t
                                        }, n);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        })),
                        function(e) {
                            return a.apply(this, arguments)
                        }
                        )),
                        r.checkPerformance = !0,
                        r.state = {
                            currentPageId: t
                        },
                        r
                    }
                    return (0,
                    a.Z)(Z, [{
                        key: "onUnload",
                        value: function() {
                            var e = (0,
                            v.I2)();
                            (0,
                            X.of)(e)
                        }
                    }, {
                        key: "componentDidShow",
                        value: (m = (0,
                        n.Z)(p().mark(function e() {
                            var t, r, n, i;
                            return p().wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.state.currentPageId,
                                        e.next = 3,
                                        this.props.pvIdAsync;
                                    case 3:
                                        r = e.sent,
                                        n = (0,
                                        v.I2)(),
                                        (0,
                                        X.FB)(n),
                                        i = (0,
                                        b.kK)(n),
                                        y.ZP.emit(y.Ke, i),
                                        ei(i),
                                        t && (0,
                                        et.cj)({
                                            pageId: t
                                        }, r);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this)
                        })),
                        function() {
                            return m.apply(this, arguments)
                        }
                        )
                    }, {
                        key: "componentDidCatch",
                        value: function(e) {
                            (0,
                            ee.u9)(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this
                              , n = this.props
                              , i = n.pageProps
                              , a = void 0 === i ? {} : i
                              , c = n.routerType
                              , o = n.customRoutes;
                            return (0,
                            B.jsxs)(O.Mi, {
                                value: {
                                    pageProps: a,
                                    routerType: c,
                                    customRoutes: o
                                },
                                children: [(0,
                                B.jsx)($, ec(ec({}, ec(ec({}, a), {}, {
                                    needLogin: r,
                                    createNonUser: l
                                })), {}, {
                                    children: (0,
                                    B.jsx)(e, ec({}, ec(ec({}, a), {}, {
                                        setCurrentPageId: this.setCurrentPageId
                                    })))
                                })), (0,
                                B.jsx)(g.Z, {
                                    className: "view-check",
                                    onAnimationEnd: function() {
                                        return t.viewReadyHandle()
                                    }
                                })]
                            })
                        }
                    }]),
                    Z
                }(h)
            }
        }
        (0,
        m.Iy)(m.TC)
    },
    46407: function(e, t, r) {
        "use strict";
        r.d(t, {
            N: function() {
                return c
            }
        });
        var n = (0,
        r(3881).i)()
          , i = {
            CLogin: [{
                url: function() {
                    return "//".concat("fat" === n ? "webresource.uat.qa.nt.ctripcorp.com" : "webresource.c-ctrip.com", "/ares2/infosec/captcha/~2.5.8/default/js/captcha.min.js?expires=1d")
                }
            }, {
                url: function() {
                    return "//".concat("fat" === n ? "webresource.fws.qa.nt.ctripcorp.com" : "webresource.c-ctrip.com", "/ares2/basebiz/cuser_h5loginsdk/~1.0.0/default/h5loginsdk.js?expires=1d&needCaptcha=1")
                },
                attrs: {
                    id: "cH5loginsdk",
                    secretkey: "F09044EFF81F3D3801FCF6EDCCC6D388"
                }
            }],
            jigsawVerification: {
                url: function() {
                    return "//".concat("fat" === n ? "webresource.uat.qa.nt.ctripcorp.com" : "webresource.c-ctrip.com", "/ares2/infosec/jigsawCaptcha/~2.0.0/default/js/jigsaw-captcha.min.js?expires=1d")
                }
            }
        }
          , a = function(e) {
            return new Promise(function(t, r) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.onload = t,
                n.onerror = r,
                n.crossOrigin = "anonymous",
                n.src = "string" == typeof e ? e : "string" == typeof e.url ? e.url : e.url(),
                "string" != typeof e && e.attrs && Object.keys(e.attrs).forEach(function(t) {
                    n.setAttribute(t, e.attrs[t])
                }),
                document.head.append ? document.head.append(n) : document.getElementsByTagName("head")[0].appendChild(n)
            }
            )
        }
          , c = function(e) {
            return window[e] ? Promise.resolve() : Array.isArray(i[e]) ? Promise.all(i[e].map(a)) : a(i[e])
        }
    },
    31288: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return l
            }
        });
        var n = r(49104)
          , i = r(53414);
        r(52983);
        var a = r(73891)
          , c = r(8144)
          , o = r(97458)
          , u = ["src"];
        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        var f = ["images3.c-ctrip.com", "pages.ctrip.com", "pages.c-ctrip.com"];
        function l(e) {
            var t = e.src
              , r = (0,
            i.Z)(e, u)
              , l = (0,
            c.S_)()
              , p = t;
            return l && f.some(function(e) {
                return t.includes(e)
            }) && !t.endsWith(".svg") && (p = t + "_.webp"),
            (0,
            o.jsx)(a.Z, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        (0,
                        n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }({
                src: p
            }, r))
        }
    },
    41901: function(e, t, r) {
        "use strict";
        r.d(t, {
            TC: function() {
                return l
            },
            n: function() {
                return i.navigateBack
            },
            Iy: function() {
                return a.Iy
            }
        });
        var n, i = r(19584), a = r(17206), c = r(62567), o = r(17400), u = r.n(o), s = r(24610), f = r(88610), l = (n = (0,
        c.Z)(u().mark(function e(t, r) {
            var n, i, a;
            return u().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = !1,
                        i = (t.data || {}).needLogin,
                        a = (null == t ? void 0 : t.url) || "",
                        !i) {
                            e.next = 14;
                            break
                        }
                        return e.prev = 4,
                        e.next = 7,
                        (0,
                        s.Zw)();
                    case 7:
                        e.next = 14;
                        break;
                    case 9:
                        return e.prev = 9,
                        e.t0 = e.catch(4),
                        n = !0,
                        e.next = 14,
                        (0,
                        s.fN)(a);
                    case 14:
                        return f.ZP.addInfo({
                            hasLogin: !n
                        }),
                        e.next = 17,
                        r();
                    case 17:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[4, 9]])
        })),
        function(e, t) {
            return n.apply(this, arguments)
        }
        )
    },
    62193: function(e, t, r) {
        "use strict";
        r.d(t, {
            mI: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "initializedSlice",
            initialState: {
                value: !1
            },
            reducers: {
                changeInitialized: function(e, t) {
                    e.value = t.payload
                }
            }
        })
          , i = n.actions.changeInitialized;
        t.ZP = n.reducer
    },
    57965: function(e, t, r) {
        "use strict";
        r.d(t, {
            dS: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "interCabin",
            initialState: {
                cabin: "ECONOMY、SUPER_ECONOMY"
            },
            reducers: {
                changeInterCabin: function(e, t) {
                    e.cabin = t.payload
                }
            }
        })
          , i = n.actions.changeInterCabin;
        t.ZP = n.reducer
    },
    52641: function(e, t, r) {
        "use strict";
        r.d(t, {
            QA: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "listSort",
            initialState: {
                value: "DIRET_FIRST"
            },
            reducers: {
                changeListSort: function(e, t) {
                    e.value = t.payload
                }
            }
        })
          , i = n.actions.changeListSort;
        t.ZP = n.reducer
    },
    52579: function(e, t, r) {
        "use strict";
        r.d(t, {
            wl: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "passengerTypeSlice",
            initialState: {
                value: {
                    ADULT: 1,
                    CHILD: 0,
                    INFANT: 0
                }
            },
            reducers: {
                changePassengerType: function(e, t) {
                    var r = t.payload;
                    r && (e.value = r)
                }
            }
        })
          , i = n.actions.changePassengerType;
        t.ZP = n.reducer
    },
    71633: function(e, t, r) {
        "use strict";
        r.d(t, {
            tl: function() {
                return s
            }
        });
        var n, i = r(62567), a = r(17400), c = r.n(a), o = r(54448), u = r(44216), s = (0,
        o.hg)("sameCity/sameCity", (n = (0,
        i.Z)(c().mark(function e(t) {
            var r;
            return c().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        u.jo.promise({
                            cityCode: t,
                            source: "TaroFlight"
                        });
                    case 2:
                        return r = e.sent,
                        e.abrupt("return", {
                            name: t,
                            canSearch: r.sameCityFlight || !1
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e) {
            return n.apply(this, arguments)
        }
        )), f = (0,
        o.oM)({
            name: "sameCity",
            initialState: [],
            reducers: {
                changeSameCitySlice: function(e, t) {
                    t.payload
                }
            },
            extraReducers: function(e) {
                e.addCase(s.fulfilled, function(e, t) {
                    e.length >= 5 && e.shift(),
                    e.push(t.payload)
                })
            }
        });
        f.actions.changeSameCitySlice,
        t.ZP = f.reducer
    },
    62839: function(e, t, r) {
        "use strict";
        r.d(t, {
            hO: function() {
                return p
            },
            jz: function() {
                return l
            },
            n1: function() {
                return h
            },
            wP: function() {
                return d
            }
        });
        var n = r(49104)
          , i = r(54448);
        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var o = {
            depatureCity: [],
            arrivalCity: [],
            date: {
                departDateRange: [r(35027).Ti]
            }
        };
        function u(e) {
            return e.length > 1 ? e.map(function(e) {
                return c(c({}, e), {}, {
                    airportCode: "",
                    airportName: ""
                })
            }) : e
        }
        var s = (0,
        i.oM)({
            name: "specialOffers",
            initialState: o,
            reducers: {
                changeSpeicialOffersDepatureCity: function(e, t) {
                    e.depatureCity = u(t.payload)
                },
                changeSpeicialOffersArrivalCity: function(e, t) {
                    e.arrivalCity = u(t.payload)
                },
                changeSpeicialOffersDate: function(e, t) {
                    e.date = t.payload
                },
                resetSpeicialOffersDate: function(e) {
                    e.date.departDateRange = [],
                    e.date.stayRange = void 0,
                    e.date.weekDays = void 0
                }
            }
        })
          , f = s.actions
          , l = f.changeSpeicialOffersDepatureCity
          , p = f.changeSpeicialOffersArrivalCity
          , d = f.changeSpeicialOffersDate
          , h = f.resetSpeicialOffersDate;
        t.ZP = s.reducer
    },
    93473: function(e, t, r) {
        "use strict";
        r.d(t, {
            mA: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "tripType",
            initialState: {
                value: "ONE_WAY"
            },
            reducers: {
                changeTripType: function(e, t) {
                    e.value = t.payload
                }
            }
        })
          , i = n.actions.changeTripType;
        t.ZP = n.reducer
    },
    83710: function(e, t, r) {
        "use strict";
        r.d(t, {
            Xq: function() {
                return l
            }
        });
        var n = r(49104)
          , i = r(62567)
          , a = r(17400)
          , c = r.n(a)
          , o = r(54448)
          , u = r(44216);
        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var l = (0,
        o.hg)("users/tripUserInfo", (0,
        i.Z)(c().mark(function e() {
            var t;
            return c().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        u.u$.promise({});
                    case 2:
                        if (!(t = e.sent).userid) {
                            e.next = 5;
                            break
                        }
                        return e.abrupt("return", f(f({}, t), {
                            portraitUrl: (t.portraitUrl || "").replace("http://", "https://")
                        }));
                    case 5:
                        return e.abrupt("return", t);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })))
          , p = (0,
        o.oM)({
            name: "users",
            initialState: {
                tripUserInfo: {
                    bmobile: "",
                    ccode: "",
                    ccodef: "",
                    cityCode: "",
                    clvName: "",
                    id: "",
                    mfphone: "",
                    mobile: "",
                    nickname: "",
                    portraitUrl: "",
                    userName: "",
                    userid: "",
                    vipgrade: !1
                }
            },
            reducers: {
                changeTripUserInfo: function(e, t) {
                    e.tripUserInfo = t.payload
                }
            },
            extraReducers: function(e) {
                e.addCase(l.fulfilled, function(e, t) {
                    e.tripUserInfo = t.payload
                })
            }
        });
        p.actions.changeTripUserInfo,
        t.ZP = p.reducer
    },
    41437: function(e, t, r) {
        "use strict";
        r.d(t, {
            xE: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "visitedFlight",
            initialState: [],
            reducers: {
                addVisitedFlight: function(e, t) {
                    e.length > 10 && e.shift(),
                    e.includes(t.payload) || e.push(t.payload)
                }
            }
        })
          , i = n.actions.addVisitedFlight;
        t.ZP = n.reducer
    },
    61651: function(e, t, r) {
        "use strict";
        r.d(t, {
            f: function() {
                return i
            }
        });
        var n = (0,
        r(54448).oM)({
            name: "visitedInterPolicy",
            initialState: [],
            reducers: {
                addVisitedInterPolicy: function(e, t) {
                    e.length > 10 && e.shift(),
                    e.includes(t.payload) || e.push(t.payload)
                }
            }
        })
          , i = n.actions.addVisitedInterPolicy;
        t.ZP = n.reducer
    },
    71566: function(e, t, r) {
        "use strict";
        r.d(t, {
            Dj: function() {
                return D
            },
            h: function() {
                return k
            }
        });
        var n, i, a = r(49104), c = r(11878), o = r(2031), u = r(54448), s = {
            key: "root",
            storage: r(34734).Z,
            version: 20220615,
            keyPrefix: "flight_"
        }, f = r(35498), l = r(93473), p = r(82257), d = r(77453), h = r(41437), v = r(71633), y = r(52641), g = r(61651), m = r(83710), b = r(62193), O = r(57965), j = r(52579), Z = r(62839), P = r(97690), C = r(6009);
        function w(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(r), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var _ = (0,
        a.Z)({
            tripType: l.ZP,
            departure: p.ZP,
            arrival: d.ZP,
            visitedFlight: h.ZP,
            sameCity: v.ZP,
            listSort: y.ZP,
            user: m.ZP,
            initialized: b.ZP,
            passengerType: j.ZP,
            interCabin: O.ZP,
            visitedInterPolicy: g.ZP,
            specialOffers: Z.ZP
        }, P.F.reducerPath, P.F.reducer);
        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0,
            o.UY)(S(S({}, _), e))
        }
        var I = (0,
        c.OJ)(S(S({}, s), {}, {
            whitelist: ["tripType", "departure", "arrival", "visitedFlight", "sameCity", "listSort", "passengerStore", "visitedInterPolicy", "passengerType", "specialOffers"],
            migrate: function(e) {
                return Promise.resolve((0,
                C.BZ)(e))
            }
        }), E())
          , k = ((n = [P.F.middleware]).push(function() {
            return function(e) {
                return function(t) {
                    return "persist/REHYDRATE" === t.type && (0,
                    f.bd)("flight_taro_h5_redux", {
                        payload: t.payload,
                        type: t.type
                    }),
                    (t.type.startsWith("departure/") || t.type.startsWith("arrival/") || t.type.startsWith("tripType/")) && (0,
                    f.bd)("flight_taro_h5_redux", {
                        payload: t.payload,
                        type: t.type
                    }),
                    e(t)
                }
            }
        }),
        (i = (0,
        u.xC)({
            reducer: I,
            preloadedState: void 0,
            middleware: function(e) {
                return e({
                    serializableCheck: !1
                }).concat(n)
            }
        })).asyncReducers = {},
        i.createReducer = E,
        i)
          , D = (0,
        c.p5)(k)
    },
    24610: function(e, t, r) {
        "use strict";
        r.d(t, {
            Zw: function() {
                return u
            },
            fN: function() {
                return s
            },
            _n: function() {
                return f
            }
        });
        var n = r(15342)
          , i = r(86011)
          , a = r(92740)
          , c = r(71566)
          , o = r(83710)
          , u = function() {
            return c.h.dispatch((0,
            o.Xq)()).unwrap().then(function(e) {
                return !!e.userid || Promise.reject(!1)
            })
        }
          , s = function(e) {
            return (0,
            a.x)(e).then(function() {
                return c.h.dispatch((0,
                o.Xq)()),
                !0
            }).catch(function() {
                return Promise.reject(!1)
            })
        }
          , f = function() {
            return !!(0,
            n.C)(i.c7)
        }
    },
    6315: function(e, t, r) {
        "use strict";
        r.d(t, {
            II: function() {
                return d
            },
            Ie: function() {
                return n
            },
            J2: function() {
                return y
            },
            JU: function() {
                return l
            },
            Ke: function() {
                return v
            },
            NK: function() {
                return i
            },
            Nz: function() {
                return o
            },
            Od: function() {
                return c
            },
            WI: function() {
                return s
            },
            aN: function() {
                return f
            },
            mT: function() {
                return p
            },
            rM: function() {
                return a
            },
            uk: function() {
                return h
            },
            xU: function() {
                return u
            }
        });
        var n = "SELECTED_PASSENGER_CHANGE"
          , i = "INSURANCE_SELECT_CLEAN"
          , a = "RESEARCH"
          , c = "RESEARCH_INTRL"
          , o = "SEND_PV_first"
          , u = "SEND_PV_second"
          , s = "SEND_PV_MIDDLE"
          , f = "SEND_PV_BOOKING"
          , l = "SEND_PV_INTER_second"
          , p = "SEND_PV_INTER_first"
          , d = "SEND_PV_INTER_MIDDLE"
          , h = "SEND_PV_INTER_BOOKING"
          , v = "onShow"
          , y = "LIST_PAGE_UPDATE"
          , g = ["LIST_FILTER_CHANGE_first", "LIST_FILTER_CHANGE_second", "LIST_FILTER_CHANGE_INIT_first", "LIST_FILTER_CHANGE_INIT_second", "SWITCH_NEAR_DATE_first", "SWITCH_NEAR_DATE_second", n, "EDIT_PASSENGER_VALIDATE", "EDIT_PASSENGER_VALIDATOR", "BOOKING_X_PRODUCT_CHANGE", "FLIGHT_FILTER_POPUP", i, "HEADER_TITLE_CHANGE", "XPRODUCTS_DATA_RESPONSE", "LIST_PAGE_SHOW_first", "LIST_PAGE_SHOW_second", "UPDATE_CALENDAR_DATE", "UPDATE_FIO_MSG", "UPDATE_ADVERTISEMENT", "BACK_TO_HOME_TOP", a, c, o, u, s, f, v, "calendar_update_price", y, l, p, d, h];
        t.ZP = {
            data: {
                listener: {},
                state: {},
                uuid: {}
            },
            emit: function(e) {
                if (g.includes(e)) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    console.log("%ccEvent.emit", "color:cyan", e, r),
                    this._invoke.apply(this, [e].concat(r))
                }
            },
            on: function(e, t, r, n) {
                return !g.includes(e) || this.data.uuid[r] || (this.data.uuid[r] = !0,
                this.data.listener[e] || (this.data.listener[e] = []),
                this.data.listener[e].push({
                    uuid: r,
                    listener: t
                }),
                console.log("%ccEvent.on", "color:cyan", e, r, n, this.data.listener[e].length),
                "WAITING" === this.data.state[e] && this._invoke(e)),
                t
            },
            off: function(e, t, r) {
                delete this.data.uuid[t],
                console.log("%ccEvent.off", "color:cyan", e, t, r);
                var n = (this.data.listener[e] || []).map(function(e) {
                    return e.uuid
                }).indexOf(t);
                -1 !== n && this.data.listener[e].splice(n, 1)
            },
            _invoke: function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                    r[n - 1] = arguments[n];
                var i = this.data.listener[e];
                i && i.length > 0 ? (i.forEach(function(e) {
                    e.listener.apply(e, r)
                }),
                this.data.state[e] = "DONE") : this.data.state[e] = "WAITING"
            }
        }
    },
    26352: function(e) {
        e.exports = {
            CaptchaModal: "CaptchaModal_CaptchaModal__fP13H",
            "modal-wrap": "CaptchaModal_modal-wrap__TlkBx",
            full: "CaptchaModal_full__QziHr",
            "captcha-title": "CaptchaModal_captcha-title__VTMRY",
            "captcha-container": "CaptchaModal_captcha-container__uJ3Lz",
            "captcha-content": "CaptchaModal_captcha-content__GjbTf"
        }
    }
}]);