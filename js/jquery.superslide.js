/*!
 * SuperSlide v2.1.1 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误

 */

(function(f) {
    f.fn.slide = function(ca) {
        f.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        };
        return this.each(function() {
            var c =
                f.extend({}, f.fn.slide.defaults, ca),
                a = f(this),
                d = c.effect,
                b = f(c.prevCell, a),
                e = f(c.nextCell, a),
                t = f(c.pageStateCell, a),
                A = f(c.playStateCell, a),
                q = f(c.titCell, a),
                k = q.size(),
                h = f(c.mainCell, a),
                l = h.children().size(),
                C = c.switchLoad,
                G = f(c.targetCell, a),
                g = parseInt(c.defaultIndex),
                r = parseInt(c.delayTime),
                T = parseInt(c.interTime);
            parseInt(c.triggerTime);
            var m = parseInt(c.scroll),
                w = parseInt(c.vis),
                M = "false" == c.autoPlay || 0 == c.autoPlay ? !1 : !0,
                U = "false" == c.opp || 0 == c.opp ? !1 : !0,
                p = "false" == c.autoPage || 0 == c.autoPage ? !1 : !0,
                N = "false" == c.pnLoop || 0 == c.pnLoop ? !1 : !0,
                V = "false" == c.mouseOverStop || 0 == c.mouseOverStop ? !1 : !0,
                K = "false" == c.defaultPlay || 0 == c.defaultPlay ? !1 : !0,
                I = "false" == c.returnDefault || 0 == c.returnDefault ? !1 : !0,
                v = 0,
                u = 0,
                L = 0,
                O = 0,
                y = c.easing,
                H = null,
                P = null,
                Q = null,
                D = c.titOnClassName,
                x = q.index(a.find("." + D)),
                W = g = -1 == x ? g : x,
                da = g,
                J = g,
                n = l >= w ? 0 != l % m ? l % m : m : 0,
                z, E = "leftMarquee" == d || "topMarquee" == d ? !0 : !1,
                ea = function() {
                    f.isFunction(c.startFun) && c.startFun(g, k, a, f(c.titCell, a), h, G, b, e)
                },
                B = function() {
                    f.isFunction(c.endFun) && c.endFun(g,
                        k, a, f(c.titCell, a), h, G, b, e)
                },
                X = function() {
                    q.removeClass(D);
                    K && q.eq(da).addClass(D)
                };
            if ("menu" == c.type) K && q.removeClass(D).eq(g).addClass(D), q.hover(function() {
                z = f(this).find(c.targetCell);
                var a = q.index(f(this));
                P = setTimeout(function() {
                    g = a;
                    q.removeClass(D).eq(g).addClass(D);
                    ea();
                    switch (d) {
                        case "fade":
                            z.stop(!0, !0).animate({
                                opacity: "show"
                            }, r, y, B);
                            break;
                        case "slideDown":
                            z.stop(!0, !0).animate({
                                height: "show"
                            }, r, y, B)
                    }
                }, c.triggerTime)
            }, function() {
                clearTimeout(P);
                switch (d) {
                    case "fade":
                        z.animate({
                                opacity: "hide"
                            },
                            r, y);
                        break;
                    case "slideDown":
                        z.animate({
                            height: "hide"
                        }, r, y)
                }
            }), I && a.hover(function() {
                clearTimeout(Q)
            }, function() {
                Q = setTimeout(X, r)
            });
            else {
                0 == k && (k = l);
                E && (k = 2);
                if (p) {
                    l >= w ? "leftLoop" == d || "topLoop" == d ? k = 0 != l % m ? (l / m ^ 0) + 1 : l / m : (p = l - w, k = 1 + parseInt(0 != p % m ? p / m + 1 : p / m), 0 >= k && (k = 1)) : k = 1;
                    q.html("");
                    p = "";
                    if (1 == c.autoPage || "true" == c.autoPage)
                        for (x = 0; x < k; x++) p += "<li>" + (x + 1) + "</li>";
                    else
                        for (x = 0; x < k; x++) p += c.autoPage.replace("$", x + 1);
                    q.html(p);
                    q = q.children()
                }
                if (l >= w) {
                    h.children().each(function() {
                        f(this).width() > L &&
                            (L = f(this).width(), u = f(this).outerWidth(!0));
                        f(this).height() > O && (O = f(this).height(), v = f(this).outerHeight(!0))
                    });
                    var fa = h.children(),
                        p = function() {
                            for (var a = 0; a < w; a++) fa.eq(a).clone().addClass("clone").appendTo(h);
                            for (a = 0; a < n; a++) fa.eq(l - a - 1).clone().addClass("clone").prependTo(h)
                        };
                    switch (d) {
                        case "fold":
                            h.css({
                                position: "relative",
                                width: u,
                                height: v
                            }).children().css({
                                position: "absolute",
                                width: L,
                                left: 0,
                                top: 0,
                                display: "none"
                            });
                            break;
                        case "top":
                            h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' +
                                w * v + 'px"></div>').css({
                                top: -(g * m) * v,
                                position: "relative",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                height: O
                            });
                            break;
                        case "left":
                            h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + w * u + 'px"></div>').css({
                                width: l * u,
                                left: -(g * m) * u,
                                position: "relative",
                                overflow: "hidden",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                "float": "left",
                                width: L
                            });
                            break;
                        case "leftLoop":
                        case "leftMarquee":
                            p();
                            h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + w * u + 'px"></div>').css({
                                width: (l +
                                    w + n) * u,
                                position: "relative",
                                overflow: "hidden",
                                padding: "0",
                                margin: "0",
                                left: -(n + g * m) * u
                            }).children().css({
                                "float": "left",
                                width: L
                            });
                            break;
                        case "topLoop":
                        case "topMarquee":
                            p(), h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + w * v + 'px"></div>').css({
                                height: (l + w + n) * v,
                                position: "relative",
                                padding: "0",
                                margin: "0",
                                top: -(n + g * m) * v
                            }).children().css({
                                height: O
                            })
                    }
                }
                var Y = function(a) {
                        var b = a * m;
                        a == k ? b = l : -1 == a && 0 != l % m && (b = -l % m);
                        return b
                    },
                    ga = function(a) {
                        var b = function(b) {
                            for (var c = b; c < w + b; c++) a.eq(c).find("img[" +
                                C + "]").each(function() {
                                var a = f(this);
                                a.attr("src", a.attr(C)).removeAttr(C);
                                if (h.find(".clone")[0])
                                    for (var b = h.children(), c = 0; c < b.size(); c++) b.eq(c).find("img[" + C + "]").each(function() {
                                        f(this).attr(C) == a.attr("src") && f(this).attr("src", f(this).attr(C)).removeAttr(C)
                                    })
                            })
                        };
                        switch (d) {
                            case "fade":
                            case "fold":
                            case "top":
                            case "left":
                            case "slideDown":
                                b(g * m);
                                break;
                            case "leftLoop":
                            case "topLoop":
                                b(n + Y(J));
                                break;
                            case "leftMarquee":
                            case "topMarquee":
                                var c = "leftMarquee" == d ? h.css("left").replace("px", "") : h.css("top").replace("px",
                                        ""),
                                    e = "leftMarquee" == d ? u : v,
                                    t = n;
                                0 != c % e && (c = Math.abs(c / e ^ 0), t = 1 == g ? n + c : n + c - 1);
                                b(t)
                        }
                    },
                    F = function(a) {
                        if (!K || W != g || a || E) {
                            E ? 1 <= g ? g = 1 : 0 >= g && (g = 0) : (J = g, g >= k ? g = 0 : 0 > g && (g = k - 1));
                            ea();
                            null != C && ga(h.children());
                            G[0] && (z = G.eq(g), null != C && ga(G), "slideDown" == d ? (G.not(z).stop(!0, !0).slideUp(r), z.slideDown(r, y, function() {
                                h[0] || B()
                            })) : (G.not(z).stop(!0, !0).hide(), z.animate({
                                opacity: "show"
                            }, r, function() {
                                h[0] || B()
                            })));
                            if (l >= w) switch (d) {
                                case "fade":
                                    h.children().stop(!0, !0).eq(g).animate({
                                        opacity: "show"
                                    }, r, y, function() {
                                        B()
                                    }).siblings().hide();
                                    break;
                                case "fold":
                                    h.children().stop(!0, !0).eq(g).animate({
                                        opacity: "show"
                                    }, r, y, function() {
                                        B()
                                    }).siblings().animate({
                                        opacity: "hide"
                                    }, r, y);
                                    break;
                                case "top":
                                    h.stop(!0, !1).animate({
                                        top: -g * m * v
                                    }, r, y, function() {
                                        B()
                                    });
                                    break;
                                case "left":
                                    h.stop(!0, !1).animate({
                                        left: -g * m * u
                                    }, r, y, function() {
                                        B()
                                    });
                                    break;
                                case "leftLoop":
                                    var c = J;
                                    h.stop(!0, !0).animate({
                                        left: -(Y(J) + n) * u
                                    }, r, y, function() {
                                        -1 >= c ? h.css("left", -(n + (k - 1) * m) * u) : c >= k && h.css("left", -n * u);
                                        B()
                                    });
                                    break;
                                case "topLoop":
                                    c = J;
                                    h.stop(!0, !0).animate({
                                            top: -(Y(J) + n) * v
                                        },
                                        r, y,
                                        function() {
                                            -1 >= c ? h.css("top", -(n + (k - 1) * m) * v) : c >= k && h.css("top", -n * v);
                                            B()
                                        });
                                    break;
                                case "leftMarquee":
                                    a = h.css("left").replace("px", "");
                                    0 == g ? h.animate({
                                        left: ++a
                                    }, 0, function() {
                                        0 <= h.css("left").replace("px", "") && h.css("left", -l * u)
                                    }) : h.animate({
                                        left: --a
                                    }, 0, function() {
                                        h.css("left").replace("px", "") <= -(l + n) * u && h.css("left", -n * u)
                                    });
                                    break;
                                case "topMarquee":
                                    a = h.css("top").replace("px", ""), 0 == g ? h.animate({
                                        top: ++a
                                    }, 0, function() {
                                        0 <= h.css("top").replace("px", "") && h.css("top", -l * v)
                                    }) : h.animate({
                                        top: --a
                                    }, 0, function() {
                                        h.css("top").replace("px",
                                            "") <= -(l + n) * v && h.css("top", -n * v)
                                    })
                            }
                            q.removeClass(D).eq(g).addClass(D);
                            W = g;
                            N || (e.removeClass("nextStop"), b.removeClass("prevStop"), 0 == g && b.addClass("prevStop"), g == k - 1 && e.addClass("nextStop"));
                            t.html("<span>" + (g + 1) + "</span>/" + k)
                        }
                    };
                K && F(!0);
                I && a.hover(function() {
                    clearTimeout(Q)
                }, function() {
                    Q = setTimeout(function() {
                        g = da;
                        K ? F() : "slideDown" == d ? z.slideUp(r, X) : z.animate({
                            opacity: "hide"
                        }, r, X);
                        W = g
                    }, 300)
                });
                var Z = function(a) {
                        H = setInterval(function() {
                            U ? g-- : g++;
                            F()
                        }, a ? a : T)
                    },
                    R = function(a) {
                        H = setInterval(F, a ? a : T)
                    },
                    S = function() {
                        V || (clearInterval(H), Z())
                    },
                    I = function() {
                        if (N || g != k - 1) g++, F(), E || S()
                    },
                    p = function() {
                        if (N || 0 != g) g--, F(), E || S()
                    },
                    aa = function() {
                        clearInterval(H);
                        E ? R() : Z();
                        A.removeClass("pauseState")
                    },
                    ba = function() {
                        clearInterval(H);
                        A.addClass("pauseState")
                    };
                M ? E ? (U ? g-- : g++, R(), V && h.hover(ba, aa)) : (Z(), V && a.hover(ba, aa)) : (E && (U ? g-- : g++), A.addClass("pauseState"));
                A.click(function() {
                    A.hasClass("pauseState") ? aa() : ba()
                });
                "mouseover" == c.trigger ? q.hover(function() {
                    var a = q.index(this);
                    P = setTimeout(function() {
                        g = a;
                        F();
                        S()
                    }, c.triggerTime)
                }, function() {
                    clearTimeout(P)
                }) : q.click(function() {
                    g = q.index(this);
                    F();
                    S()
                });
                if (E) {
                    e.mousedown(I);
                    b.mousedown(p);
                    if (N) {
                        var ha, M = function() {
                                ha = setTimeout(function() {
                                    clearInterval(H);
                                    R(T / 10 ^ 0)
                                }, 150)
                            },
                            x = function() {
                                clearTimeout(ha);
                                clearInterval(H);
                                R()
                            };
                        e.mousedown(M);
                        e.mouseup(x);
                        b.mousedown(M);
                        b.mouseup(x)
                    }
                    "mouseover" == c.trigger && (e.hover(I, function() {}), b.hover(p, function() {}))
                } else e.click(I), b.click(p)
            }
        })
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
(function(f, ca) {
    f.extend(f.easing, {
        def: "easeOutQuad",
        swing: function(c, a, d, b, e) {
            return f.easing[f.easing.def](c, a, d, b, e)
        },
        easeInQuad: function(c, a, d, b, e) {
            return b * (a /= e) * a + d
        },
        easeOutQuad: function(c, a, d, b, e) {
            return -b * (a /= e) * (a - 2) + d
        },
        easeInOutQuad: function(c, a, d, b, e) {
            return 1 > (a /= e / 2) ? b / 2 * a * a + d : -b / 2 * (--a * (a - 2) - 1) + d
        },
        easeInCubic: function(c, a, d, b, e) {
            return b * (a /= e) * a * a + d
        },
        easeOutCubic: function(c, a, d, b, e) {
            return b * ((a = a / e - 1) * a * a + 1) + d
        },
        easeInOutCubic: function(c, a, d, b, e) {
            return 1 > (a /= e / 2) ? b / 2 * a * a * a + d : b / 2 *
                ((a -= 2) * a * a + 2) + d
        },
        easeInQuart: function(c, a, d, b, e) {
            return b * (a /= e) * a * a * a + d
        },
        easeOutQuart: function(c, a, d, b, e) {
            return -b * ((a = a / e - 1) * a * a * a - 1) + d
        },
        easeInOutQuart: function(c, a, d, b, e) {
            return 1 > (a /= e / 2) ? b / 2 * a * a * a * a + d : -b / 2 * ((a -= 2) * a * a * a - 2) + d
        },
        easeInQuint: function(c, a, d, b, e) {
            return b * (a /= e) * a * a * a * a + d
        },
        easeOutQuint: function(c, a, d, b, e) {
            return b * ((a = a / e - 1) * a * a * a * a + 1) + d
        },
        easeInOutQuint: function(c, a, d, b, e) {
            return 1 > (a /= e / 2) ? b / 2 * a * a * a * a * a + d : b / 2 * ((a -= 2) * a * a * a * a + 2) + d
        },
        easeInSine: function(c, a, d, b, e) {
            return -b * Math.cos(a /
                e * (Math.PI / 2)) + b + d
        },
        easeOutSine: function(c, a, d, b, e) {
            return b * Math.sin(a / e * (Math.PI / 2)) + d
        },
        easeInOutSine: function(c, a, d, b, e) {
            return -b / 2 * (Math.cos(Math.PI * a / e) - 1) + d
        },
        easeInExpo: function(c, a, d, b, e) {
            return 0 == a ? d : b * Math.pow(2, 10 * (a / e - 1)) + d
        },
        easeOutExpo: function(c, a, d, b, e) {
            return a == e ? d + b : b * (-Math.pow(2, -10 * a / e) + 1) + d
        },
        easeInOutExpo: function(c, a, d, b, e) {
            return 0 == a ? d : a == e ? d + b : 1 > (a /= e / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + d : b / 2 * (-Math.pow(2, -10 * --a) + 2) + d
        },
        easeInCirc: function(c, a, d, b, e) {
            return -b * (Math.sqrt(1 - (a /= e) *
                a) - 1) + d
        },
        easeOutCirc: function(c, a, d, b, e) {
            return b * Math.sqrt(1 - (a = a / e - 1) * a) + d
        },
        easeInOutCirc: function(c, a, d, b, e) {
            return 1 > (a /= e / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + d : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
        },
        easeInElastic: function(c, a, d, b, e) {
            c = 1.70158;
            var t = 0,
                f = b;
            if (0 == a) return d;
            if (1 == (a /= e)) return d + b;
            t || (t = .3 * e);
            f < Math.abs(b) ? (f = b, c = t / 4) : c = t / (2 * Math.PI) * Math.asin(b / f);
            return -(f * Math.pow(2, 10 * --a) * Math.sin(2 * (a * e - c) * Math.PI / t)) + d
        },
        easeOutElastic: function(c, a, d, b, e) {
            c = 1.70158;
            var t = 0,
                f = b;
            if (0 == a) return d;
            if (1 == (a /=
                    e)) return d + b;
            t || (t = .3 * e);
            f < Math.abs(b) ? (f = b, c = t / 4) : c = t / (2 * Math.PI) * Math.asin(b / f);
            return f * Math.pow(2, -10 * a) * Math.sin(2 * (a * e - c) * Math.PI / t) + b + d
        },
        easeInOutElastic: function(c, a, d, b, e) {
            c = 1.70158;
            var f = 0,
                A = b;
            if (0 == a) return d;
            if (2 == (a /= e / 2)) return d + b;
            f || (f = .3 * e * 1.5);
            A < Math.abs(b) ? (A = b, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(b / A);
            return 1 > a ? -.5 * A * Math.pow(2, 10 * --a) * Math.sin(2 * (a * e - c) * Math.PI / f) + d : A * Math.pow(2, -10 * --a) * Math.sin(2 * (a * e - c) * Math.PI / f) * .5 + b + d
        },
        easeInBack: function(c, a, d, b, e, f) {
            void 0 == f && (f = 1.70158);
            return b * (a /= e) * a * ((f + 1) * a - f) + d
        },
        easeOutBack: function(c, a, d, b, e, f) {
            void 0 == f && (f = 1.70158);
            return b * ((a = a / e - 1) * a * ((f + 1) * a + f) + 1) + d
        },
        easeInOutBack: function(c, a, d, b, e, f) {
            void 0 == f && (f = 1.70158);
            return 1 > (a /= e / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + d : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + d
        },
        easeInBounce: function(c, a, d, b, e) {
            return b - f.easing.easeOutBounce(c, e - a, 0, b, e) + d
        },
        easeOutBounce: function(c, a, d, b, e) {
            return (a /= e) < 1 / 2.75 ? 7.5625 * b * a * a + d : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 /
                2.75) * a + .9375) + d : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
        },
        easeInOutBounce: function(c, a, d, b, e) {
            return a < e / 2 ? .5 * f.easing.easeInBounce(c, 2 * a, 0, b, e) + d : .5 * f.easing.easeOutBounce(c, 2 * a - e, 0, b, e) + .5 * b + d
        }
    })
})(jQuery);