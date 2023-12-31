! function() {
    "use strict";
    var t = {
            n: function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, {
                    a: n
                }), n
            },
            d: function(e, n) {
                for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: n[r]
                })
            },
            o: function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        },
        e = window.ctEvents,
        n = t.n(e),
        r = window.ctFrontend,
        i = function(t, e, n) {
            return Math.max(t, Math.min(e, n))
        },
        o = function(t, e, n) {
            return e[0] + (e[1] - e[0]) / (t[1] - t[0]) * (n - t[0])
        },
        a = function(t) {
            var e = getComputedStyle(t);
            return parseFloat(e.getPropertyValue("--height"))
        },
        c = function(t) {
            if (t.blcInitialHeight) return t.blcInitialHeight;
            var e = t.firstElementChild;
            t.firstElementChild.firstElementChild && (e = t.firstElementChild.firstElementChild);
            var n = e.getBoundingClientRect().height;
            return t.blcInitialHeight = n, n
        },
        s = function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t.blcStickyHeight) return t.blcStickyHeight;
            var n = c(t),
                r = getComputedStyle(t),
                i = getComputedStyle(t.firstElementChild);
            if (t.closest('[data-sticky*="yes"]')) {
                var o = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth) + parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth);
                e || (o = 0);
                var s = t.getBoundingClientRect().height - o;
                if (s !== n || n > a(t)) return t.blcStickyHeight = t.getBoundingClientRect().height, s
            }
            var l = 100;
            return t.dataset.row.includes("middle") && (l = r.getPropertyValue("--sticky-shrink")), l && (n *= parseFloat(l) / 100), n
        },
        l = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                    return 0
                },
                e = document.querySelector(".ct-floating-bar");
            e && e.style.setProperty("--header-sticky-height-animated", t())
        };

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    var d = null,
        y = function() {
            d = null
        },
        f = function(t) {
            var e, n = t.stickyContainer,
                r = t.startPosition;
            (e = n.querySelectorAll('[data-row*="middle"]'), function(t) {
                if (Array.isArray(t)) return u(t)
            }(e) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).map((function(t) {
                if (t.querySelector('[data-id="logo"] .site-logo-container')) {
                    var e = t.querySelector('[data-id="logo"] .site-logo-container'),
                        n = function(t) {
                            var e = t.logo,
                                n = t.row;
                            if (d) return d;
                            var r = parseFloat(getComputedStyle(e).getPropertyValue("--logo-max-height") || 50),
                                i = parseFloat(getComputedStyle(e).getPropertyValue("--logo-sticky-shrink").toString().replace(",", ".") || 1),
                                o = c(n),
                                a = s(n);
                            return d = {
                                initialHeight: r,
                                stickyShrink: i,
                                rowInitialHeight: o,
                                rowStickyHeight: a
                            }
                        }({
                            logo: e,
                            row: t
                        }),
                        a = n.initialHeight,
                        l = n.stickyShrink,
                        u = n.rowInitialHeight,
                        y = n.rowStickyHeight,
                        f = a * l;
                    1 !== l && e.style.setProperty("--logo-shrink-height", "".concat(o([r, r + Math.abs(u === y ? a - f : u - y)], [1, l], i(r, r + Math.abs(u === y ? a - f : u - y), scrollY)) * a, "px"))
                }
            }))
        },
        h = null,
        m = function() {
            h = null
        },
        p = function(t) {
            var e = t.stickyContainer,
                n = (t.containerInitialHeight, t.startPosition);
            e.querySelector('[data-row*="middle"]') && [e.querySelector('[data-row*="middle"]')].map((function(t) {
                var e = function(t) {
                        var e = t.row;
                        if (h) return h;
                        var n = c(e),
                            r = s(e);
                        return h = {
                            rowInitialHeight: n,
                            rowStickyHeight: r
                        }
                    }({
                        row: t
                    }),
                    r = e.rowInitialHeight,
                    a = e.rowStickyHeight;
                if (r !== a) {
                    var l;
                    l = o([n, n + Math.abs(r - a)], [r, a], i(n, n + Math.abs(r - a), scrollY)), t.style.setProperty("--shrink-height", "".concat(l, "px"))
                }
            }))
        };

    function g(t) {
        return function(t) {
            if (Array.isArray(t)) return k(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return k(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function v(t) {
        return function(t) {
            if (Array.isArray(t)) return b(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return b(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    var w = function(t) {
            var e = t.stickyContainer,
                n = v(e.querySelectorAll("[data-row]")).reduce((function(t, e) {
                    return t + s(e, !1)
                }), 0);
            return {
                stickyContainerHeight: n,
                stickyContainerHeightAbsolute: n + parseFloat(getComputedStyle(e).top)
            }
        },
        S = null;

    function A(t) {
        return function(t) {
            if (Array.isArray(t)) return C(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return C(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function O(t) {
        return function(t) {
            if (Array.isArray(t)) return x(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return x(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    var I = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yes";
            Array.from(t.querySelectorAll("[data-row][data-transparent-row]")).map((function(t) {
                t.dataset.transparentRow = e
            }))
        },
        j = null,
        H = null,
        P = null,
        q = null;
    n().on("blocksy:sticky:compute", (function() {
        setTimeout((function() {
            m(), y(), j = null, H = null, P = null, q = null, Y = null, E()
        }), 100)
    })), window.wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.selectiveRefresh.bind("partial-content-rendered", (function(t) {
        setTimeout((function() {
            m(), y(), j = null, H = null, P = null, q = null, Y = null, E()
        }), 500)
    }));
    var Y = null,
        E = function() {
            if (Y !== scrollY) {
                var t = document.querySelector('[data-device="'.concat((0, r.getCurrentScreen)(), '"] [data-sticky]'));
                if (t) {
                    var e = H;
                    e || (e = H = Array.from(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                        return t + e.getBoundingClientRect().height
                    }), 0), t.parentNode.style.height = "".concat(e, "px"));
                    var n = j;
                    null === n && (n = function(t) {
                        if (-1 === t.dataset.sticky.indexOf("shrink") && -1 === t.dataset.sticky.indexOf("auto-hide")) return t.parentNode.getBoundingClientRect().height + 200;
                        var e = t.closest("header").getBoundingClientRect().top + scrollY;
                        if (e > 0) {
                            var n = document.elementFromPoint(0, 3);
                            n && function(t) {
                                for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
                                return e
                            }(n).map((function(t) {
                                return getComputedStyle(t).position
                            })).indexOf("fixed") > -1 && (e -= n.getBoundingClientRect().height)
                        }
                        var r = t.parentNode,
                            i = getComputedStyle(document.body),
                            o = parseFloat(i.getPropertyValue("--header-sticky-offset") || 0);
                        if (o += parseFloat(i.getPropertyValue("--frame-size")) || 0, 1 === r.parentNode.children.length || r.parentNode.children[0].classList.contains("ct-sticky-container")) return e > 0 ? e - o : e;
                        var a = Array.from(r.parentNode.children).reduce((function(t, e, n) {
                            return t.indexOf(0) > -1 || !e.dataset.row ? [].concat(O(t), [0]) : [].concat(O(t), [e.classList.contains("ct-sticky-container") ? 0 : e.getBoundingClientRect().height])
                        }), []).reduce((function(t, e) {
                            return t + e
                        }), e);
                        return a > 0 ? a - o : a
                    }(t), j = n);
                    var i = P;
                    null === i && (i = t.closest("[data-device]").getBoundingClientRect().height, P = i);
                    var o = q,
                        c = t.dataset.sticky.split(":").filter((function(t) {
                            return "yes" !== t && "no" !== t && "fixed" !== t
                        }));
                    o || (o = parseInt(t.getBoundingClientRect().height), q = parseInt(o), l((function() {
                        return -1 === c.indexOf("auto-hide") ? o > O(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                            return t + a(e)
                        }), 0) ? "".concat(o, "px") : "".concat(O(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                            return t + s(e)
                        }), 0), "px") : "0px"
                    })));
                    var u = n > 0 && Math.abs(window.scrollY - n) < 5 || window.scrollY > n;
                    c.indexOf("shrink") > -1 && (u = n > 0 ? window.scrollY >= n : window.scrollY > 0), setTimeout((function() {
                        u && -1 === document.body.dataset.header.indexOf("shrink") && (document.body.dataset.header = "".concat(document.body.dataset.header, ":shrink")), !u && document.body.dataset.header.indexOf("shrink") > -1 && (document.body.dataset.header = document.body.dataset.header.replace(":shrink", ""))
                    }), 300);
                    var d = scrollY;
                    c.indexOf("shrink") > -1 && function(t) {
                        var e = t.containerInitialHeight,
                            n = t.stickyContainer,
                            r = t.isSticky,
                            i = t.startPosition,
                            o = t.stickyComponents;
                        if (0 === i && 0 === window.scrollY && (n.dataset.sticky = ["fixed"].concat(g(o)).join(":")), r) {
                            if (o.indexOf("yes") > -1) return; - 1 === n.dataset.sticky.indexOf("yes") && (I(n, "no"), n.dataset.sticky = ["yes"].concat(g(o)).join(":")), f({
                                stickyContainer: n,
                                startPosition: i
                            }), p({
                                stickyContainer: n,
                                containerInitialHeight: e,
                                startPosition: i
                            })
                        } else Array.from(n.querySelectorAll("[data-row]")).map((function(t) {
                            return t.removeAttribute("style")
                        })), Array.from(n.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t) {
                            return t.removeAttribute("style")
                        })), I(n, "yes"), 0 === i && window.scrollY <= 0 ? n.dataset.sticky = ["fixed"].concat(g(o)).join(":") : n.dataset.sticky = o.join(":")
                    }({
                        stickyContainer: t,
                        stickyContainerHeight: o,
                        containerInitialHeight: e,
                        isSticky: u,
                        startPosition: n,
                        stickyComponents: c
                    }), c.indexOf("auto-hide") > -1 && function(t) {
                        var e = t.currentScrollY,
                            n = t.stickyContainer,
                            r = t.containerInitialHeight,
                            i = t.headerInitialHeight,
                            o = t.startPosition,
                            a = t.isSticky,
                            c = t.stickyComponents;
                        a && e - t.prevScrollY == 0 && l((function() {
                            return "0px"
                        })), a ? -1 === n.dataset.sticky.indexOf("yes") && e > 2 * i + o && (n.dataset.sticky = ["yes"].concat(v(c)).join(":"), f({
                            stickyContainer: n,
                            startPosition: o
                        }), p({
                            stickyContainer: n,
                            containerInitialHeight: r,
                            startPosition: o
                        }), I(n, "no"), document.body.removeAttribute("style")) : (Array.from(n.querySelectorAll("[data-row]")).map((function(t) {
                            return t.removeAttribute("style")
                        })), Array.from(n.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t) {
                            return t.removeAttribute("style")
                        })), n.dataset.sticky = v(c).join(":"), I(n, "yes"), l((function() {
                            return "0px"
                        })), S = null), null === S && (S = 1e3);
                        var s = S + t.prevScrollY - e,
                            u = 0;
                        if (e > 2 * i + o || n.dataset.sticky.indexOf("yes") > -1) {
                            if (e <= o) u = 0;
                            else if (e > t.prevScrollY) {
                                var d = w({
                                    stickyContainer: n
                                }).stickyContainerHeightAbsolute;
                                u = Math.abs(s) > d ? -d : s
                            } else u = s > 0 ? 0 : s;
                            n.style.transform = "translateY(".concat(u, "px)"), S = u
                        } else n.removeAttribute("style");
                        n.dataset.sticky.indexOf("yes") > -1 && (e <= o || e > t.prevScrollY || (f({
                            stickyContainer: n,
                            startPosition: o
                        }), p({
                            stickyContainer: n,
                            containerInitialHeight: r,
                            startPosition: o
                        }))), l((function() {
                            var t = w({
                                stickyContainer: n
                            }).stickyContainerHeight;
                            return "".concat(t - Math.abs(u), "px")
                        }))
                    }({
                        stickyContainer: t,
                        isSticky: u,
                        startPosition: n,
                        stickyComponents: c,
                        containerInitialHeight: e,
                        stickyContainerHeight: o,
                        headerInitialHeight: i,
                        currentScrollY: d,
                        prevScrollY: Y
                    }), (c.indexOf("slide") > -1 || c.indexOf("fade") > -1) && function(t) {
                        var e = t.stickyContainer,
                            n = t.startPosition,
                            r = t.stickyComponents;
                        t.isSticky ? (-1 === e.dataset.sticky.indexOf("yes") && (e.dataset.sticky = ["yes-start"].concat(A(r)).join(":"), setTimeout((function() {
                            e.dataset.sticky = e.dataset.sticky.replace("yes-start", "yes-end"), setTimeout((function() {
                                e.dataset.sticky = e.dataset.sticky.replace("yes-end", "yes")
                            }), 200)
                        }), 1)), I(e, "no")) : -1 === e.dataset.sticky.indexOf("yes-hide") && e.dataset.sticky.indexOf("yes:") > -1 && (Math.abs(window.scrollY - n) > 10 ? (e.dataset.sticky = r.join(":"), setTimeout((function() {
                            Array.from(e.querySelectorAll("[data-row]")).map((function(t) {
                                return t.removeAttribute("style")
                            }))
                        }), 300), I(e, "yes")) : (e.dataset.sticky = ["yes-hide-start"].concat(A(r)).join(":"), requestAnimationFrame((function() {
                            e.dataset.sticky = e.dataset.sticky.replace("yes-hide-start", "yes-hide-end"), setTimeout((function() {
                                e.dataset.sticky = r.join(":"), setTimeout((function() {
                                    Array.from(e.querySelectorAll("[data-row]")).map((function(t) {
                                        return t.removeAttribute("style")
                                    }))
                                }), 300), I(e, "yes")
                            }), 200)
                        }))))
                    }({
                        stickyContainer: t,
                        isSticky: u,
                        startPosition: n,
                        stickyComponents: c
                    }), Y = d
                }
            }
        },
        M = function() {
            document.querySelector("header [data-sticky]") && (window.addEventListener("resize", (function(t) {
                E(t), n().trigger("ct:header:update")
            }), !1), window.addEventListener("orientationchange", (function(t) {
                E(t), n().trigger("ct:header:update")
            })), window.addEventListener("scroll", E, !1), window.addEventListener("load", E, !1), E())
        };
    document.body.className.indexOf("e-preview") > -1 ? setTimeout((function() {
        M()
    }), 500) : M(), (0, r.registerDynamicChunk)("blocksy_sticky_header", {
        mount: function(t) {}
    })
}();