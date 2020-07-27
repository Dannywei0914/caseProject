! function (t, e, i, n) {
    "use strict";

    function s(t) {
        return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }
    var a = function (e) {
        for (var i = e.length, n = t("head"); i--;) 0 === n.has("." + e[i]).length && n.append('<meta class="' + e[i] + '" />')
    };
    a(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var o = function (e, n) {
            if ("string" == typeof e) {
                if (n) {
                    var s;
                    if (n.jquery) {
                        if (s = n[0], !s) return n
                    } else s = n;
                    return t(s.querySelectorAll(e))
                }
                return t(i.querySelectorAll(e))
            }
            return t(e, n)
        },
        r = function (t) {
            var e = [];
            return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
        },
        l = function (t) {
            for (var e = t.split("-"), i = e.length, n = []; i--;) 0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
            return n.reverse().join("-")
        },
        d = function (e, i) {
            var n = this,
                s = !o(this).data(this.attr_name(!0));
            return o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(o(this.scope)))), s && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function () {
                var s = !o(this).data(n.attr_name(!0) + "-init");
                o(this).data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(o(this)))), s && n.events(this)
            }), "string" == typeof e ? this[e].call(this, i) : void 0
        },
        c = function (t, e) {
            function i() {
                e(t[0])
            }

            function n() {
                if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var t = this.attr("src"),
                        e = t.match(/\?/) ? "&" : "?";
                    e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                }
            }
            return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
        };
    e.matchMedia = e.matchMedia || function (t) {
            var e, i = t.documentElement,
                n = i.firstElementChild || i.firstChild,
                s = t.createElement("body"),
                a = t.createElement("div");
            return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(a),
                function (t) {
                    return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(s, n), e = 42 === a.offsetWidth, i.removeChild(s), {
                        matches: e,
                        media: t
                    }
                }
        }(i),
        function (t) {
            function i() {
                n && (o(i), l && t.fx.tick())
            }
            for (var n, s = 0, a = ["webkit", "moz"], o = e.requestAnimationFrame, r = e.cancelAnimationFrame, l = "undefined" != typeof t.fx; s < a.length && !o; s++) o = e[a[s] + "RequestAnimationFrame"], r = r || e[a[s] + "CancelAnimationFrame"] || e[a[s] + "CancelRequestAnimationFrame"];
            o ? (e.requestAnimationFrame = o, e.cancelAnimationFrame = r, l && (t.fx.timer = function (e) {
                e() && t.timers.push(e) && !n && (n = !0, i())
            }, t.fx.stop = function () {
                n = !1
            })) : (e.requestAnimationFrame = function (t) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - s)),
                    a = e.setTimeout(function () {
                        t(i + n)
                    }, n);
                return s = i + n, a
            }, e.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }(t), e.Foundation = {
            name: "Foundation",
            version: "5.5.0",
            media_queries: {
                small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "small-only": o(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "medium-only": o(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "large-only": o(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "xlarge-only": o(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: t("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: n
            },
            init: function (t, i, n, s, a) {
                var r = [t, n, s, a],
                    l = [];
                if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), i && "string" == typeof i && !/reflow/i.test(i)) this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
                else
                    for (var d in this.libs) l.push(this.init_lib(d, i));
                return o(e).load(function () {
                    o(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                }), t
            },
            init_lib: function (e, i) {
                return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function () {}
            },
            patch: function (t) {
                t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = d, t.S = this.utils.S
            },
            inherit: function (t, e) {
                for (var i = e.split(" "), n = i.length; n--;) this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
            },
            set_namespace: function () {
                var e = this.global.namespace === n ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = e === n || /false/i.test(e) ? "" : e
            },
            libs: {},
            utils: {
                S: o,
                throttle: function (t, e) {
                    var i = null;
                    return function () {
                        var n = this,
                            s = arguments;
                        null == i && (i = setTimeout(function () {
                            t.apply(n, s), i = null
                        }, e))
                    }
                },
                debounce: function (t, e, i) {
                    var n, s;
                    return function () {
                        var a = this,
                            o = arguments,
                            r = function () {
                                n = null, i || (s = t.apply(a, o))
                            },
                            l = i && !n;
                        return clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(a, o)), s
                    }
                },
                data_options: function (e, i) {
                    function n(t) {
                        return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                    }

                    function s(e) {
                        return "string" == typeof e ? t.trim(e) : e
                    }
                    i = i || "options";
                    var a, o, r, l = {},
                        d = function (t) {
                            var e = Foundation.global.namespace;
                            return t.data(e.length > 0 ? e + "-" + i : i)
                        },
                        c = d(e);
                    if ("object" == typeof c) return c;
                    for (r = (c || ":").split(";"), a = r.length; a--;) o = r[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), n(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[s(o[0])] = s(o[1]));
                    return l
                },
                register_media: function (e, i) {
                    Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = s(t("." + i).css("font-family")))
                },
                add_custom_rule: function (t, e) {
                    if (e === n && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                    else {
                        var i = Foundation.media_queries[e];
                        i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                    }
                },
                image_loaded: function (t, e) {
                    var i = this,
                        n = t.length;
                    0 === n && e(t), t.each(function () {
                        c(i.S(this), function () {
                            n -= 1, 0 === n && e(t)
                        })
                    })
                },
                random_str: function () {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                },
                match: function (t) {
                    return e.matchMedia(t).matches
                },
                is_small_up: function () {
                    return this.match(Foundation.media_queries.small)
                },
                is_medium_up: function () {
                    return this.match(Foundation.media_queries.medium)
                },
                is_large_up: function () {
                    return this.match(Foundation.media_queries.large)
                },
                is_xlarge_up: function () {
                    return this.match(Foundation.media_queries.xlarge)
                },
                is_xxlarge_up: function () {
                    return this.match(Foundation.media_queries.xxlarge)
                },
                is_small_only: function () {
                    return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                },
                is_medium_only: function () {
                    return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_large_only: function () {
                    return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xlarge_only: function () {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xxlarge_only: function () {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                }
            }
        }, t.fn.foundation = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                return Foundation.init.apply(Foundation, [this].concat(t)), this
            })
        }
}(jQuery, window, window.document),
function (t, e, i) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.5.0",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function (t) {
                    var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                        n = t.value,
                        s = e === n;
                    return s
                }
            }
        },
        timer: null,
        init: function (t, e, i) {
            this.bindings(e, i)
        },
        events: function (e) {
            var i = this,
                n = i.S(e).attr("novalidate", "novalidate"),
                s = n.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function (t) {
                var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
                return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
            }).on("reset", function () {
                return i.reset(t(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (t) {
                s.validate_on_blur === !0 && i.validate([this], t)
            }).on("keydown.fndtn.abide", function (t) {
                s.live_validate === !0 && 9 != t.which && (clearTimeout(i.timer), i.timer = setTimeout(function () {
                    i.validate([this], t)
                }.bind(this), s.timeout))
            })
        },
        reset: function (e) {
            e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t("." + this.settings.error_class, e).not("small").removeClass(this.settings.error_class)
        },
        validate: function (t, e, i) {
            for (var n = this.parse_patterns(t), s = n.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; s > r; r++)
                if (!n[r] && (o || i)) return this.settings.focus_on_invalid && t[r].focus(), a.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
            return (o || i) && a.trigger("valid").trigger("valid.fndtn.abide"), a.removeAttr(this.invalid_attr), i ? !1 : !0
        },
        parse_patterns: function (t) {
            for (var e = t.length, i = []; e--;) i.push(this.pattern(t[e]));
            return this.check_validation_and_apply_styles(i)
        },
        pattern: function (t) {
            var e = t.getAttribute("type"),
                i = "string" == typeof t.getAttribute("required"),
                n = t.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(n) && n.length > 0 ? [t, this.settings.patterns[n], i] : n.length > 0 ? [t, new RegExp(n), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (n = /.*/, [t, n, i])
        },
        check_validation_and_apply_styles: function (e) {
            var i = e.length,
                n = [],
                s = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (s.data(this.attr_name(!0) + "-init") || {}; i--;) {
                var a, o, r = e[i][0],
                    l = e[i][2],
                    d = r.value.trim(),
                    c = this.S(r).parent(),
                    h = r.getAttribute(this.add_namespace("data-abide-validator")),
                    u = "radio" === r.type,
                    f = "checkbox" === r.type,
                    p = this.S('label[for="' + r.getAttribute("id") + '"]'),
                    g = l ? r.value.length > 0 : !0,
                    m = [];
                if (r.getAttribute(this.add_namespace("data-equalto")) && (h = "equalTo"), a = c.is("label") ? c.parent() : c, h && (o = this.settings.validators[h].apply(this, [r, l, a]), m.push(o)), u && l) m.push(this.valid_radio(r, l));
                else if (f && l) m.push(this.valid_checkbox(r, l));
                else if (m.push(e[i][1].test(d) && g || !l && r.value.length < 1 || t(r).attr("disabled") ? !0 : !1), m = [m.every(function (t) {
                        return t
                    })], m[0]) this.S(r).removeAttr(this.invalid_attr), r.setAttribute("aria-invalid", "false"), r.removeAttribute("aria-describedby"), a.removeClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"), t(r).triggerHandler("valid");
                else {
                    this.S(r).attr(this.invalid_attr, ""), r.setAttribute("aria-invalid", "true");
                    var v = a.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                        _ = v.length > 0 ? v[0].id : "";
                    _.length > 0 && r.setAttribute("aria-describedby", _), a.addClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"), t(r).triggerHandler("invalid")
                }
                n.push(m[0])
            }
            return n = [n.every(function (t) {
                return t
            })]
        },
        valid_checkbox: function (t, e) {
            var t = this.S(t),
                i = t.is(":checked") || !e || t.get(0).getAttribute("disabled");
            return i ? t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), i
        },
        valid_radio: function (t) {
            for (var e = t.getAttribute("name"), i = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + e + "']"), n = i.length, s = !1, a = !1, o = 0; n > o; o++) i[o].getAttribute("disabled") ? (a = !0, s = !0) : i[o].checked ? s = !0 : a && (s = !1);
            for (var o = 0; n > o; o++) s ? this.S(i[o]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : this.S(i[o]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return s
        },
        valid_equal: function (t, e, n) {
            var s = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                a = t.value,
                o = s === a;
            return o ? (this.S(t).removeAttr(this.invalid_attr), n.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(t).attr(this.invalid_attr, ""), n.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), o
        },
        valid_oneof: function (t, e, i, n) {
            var t = this.S(t),
                s = this.S("[" + this.add_namespace("data-oneof") + "]"),
                a = s.filter(":checked").length > 0;
            if (a ? t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !n) {
                var o = this;
                s.each(function () {
                    o.valid_oneof.call(o, this, null, null, !0)
                })
            }
            return a
        }
    }
}(jQuery, window, window.document),
function (t) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.0",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function () {}
        },
        init: function (t, e, i) {
            this.bindings(e, i)
        },
        events: function () {
            var e = this,
                i = this.S;
            i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > .accordion-navigation > a", function (n) {
                var s = i(this).closest("[" + e.attr_name() + "]"),
                    a = e.attr_name() + "=" + s.attr(e.attr_name()),
                    o = s.data(e.attr_name(!0) + "-init") || e.settings,
                    r = i("#" + this.href.split("#")[1]),
                    l = t("> .accordion-navigation", s),
                    d = l.children("." + o.content_class),
                    c = d.filter("." + o.active_class);
                return n.preventDefault(), s.attr(e.attr_name()) && (d = d.add("[" + a + "] dd > ." + o.content_class), l = l.add("[" + a + "] .accordion-navigation")), o.toggleable && r.is(c) ? (r.parent(".accordion-navigation").toggleClass(o.active_class, !1), r.toggleClass(o.active_class, !1), o.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r])) : (o.multi_expand || (d.removeClass(o.active_class), l.removeClass(o.active_class)), r.addClass(o.active_class).parent().addClass(o.active_class), o.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r]))
            })
        },
        off: function () {},
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.0",
        settings: {
            callback: function () {}
        },
        init: function (t, e, i) {
            this.bindings(e, i)
        },
        events: function () {
            var e = this,
                i = this.S;
            t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function (t) {
                var n = i(this).closest("[" + e.attr_name() + "]"),
                    s = n.data(e.attr_name(!0) + "-init") || e.settings;
                t.preventDefault(), Modernizr.csstransitions ? (n.addClass("alert-close"), n.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                    i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                })) : n.fadeOut(300, function () {
                    i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                })
            })
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e, i, n) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.0",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function (t, e, i) {
            var n = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function () {
                n.assemble(n.S("li", this))
            })
        },
        events: function (n) {
            var s = this,
                a = s.S,
                o = t(".scroll-container");
            o.length > 0 && (this.scope = o), a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function (t, e, i) {
                var e = e || a(this),
                    i = i || e,
                    n = e.next("li"),
                    o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init"),
                    r = a(t.target);
                t.preventDefault(), o || (s.init(), o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init")), i.hasClass("visible") && e[0] === i[0] && n.length > 0 && s.is_open(e) && (i = n, r = a("img", i)), s.open(r, e, i), s.update_paddles(i)
            }).on("click.fndtn.clearing", ".clearing-main-next", function (t) {
                s.nav(t, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function (t) {
                s.nav(t, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function (t) {
                Foundation.libs.clearing.close(t, this)
            }), t(i).on("keydown.fndtn.clearing", function (t) {
                s.keydown(t)
            }), a(e).off(".clearing").on("resize.fndtn.clearing", function () {
                s.resize()
            }), this.swipe_events(n)
        },
        swipe_events: function () {
            var t = this,
                e = t.S;
            e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function (t) {
                t.touches || (t = t.originalEvent);
                var i = {
                    start_page_x: t.touches[0].pageX,
                    start_page_y: t.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: n
                };
                e(this).data("swipe-transition", i), t.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function (i) {
                if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                    var n = e(this).data("swipe-transition");
                    if ("undefined" == typeof n && (n = {}), n.delta_x = i.touches[0].pageX - n.start_page_x, Foundation.rtl && (n.delta_x = -n.delta_x), "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(i.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                        i.preventDefault();
                        var s = n.delta_x < 0 ? "next" : "prev";
                        n.active = !0, t.nav(i, s)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
                e(this).data("swipe-transition", {}), t.stopPropagation()
            })
        },
        assemble: function (e) {
            var i = e.parent();
            if (!i.parent().hasClass("carousel")) {
                i.after('<div id="foundationClearingHolder"></div>');
                var n = i.detach(),
                    s = "";
                if (null != n[0]) {
                    s = n[0].outerHTML;
                    var a = this.S("#foundationClearingHolder"),
                        o = i.data(this.attr_name(!0) + "-init"),
                        r = {
                            grid: '<div class="carousel">' + s + "</div>",
                            viewing: o.templates.viewing
                        },
                        l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>",
                        d = this.settings.touch_label;
                    Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(d).end()), a.after(l).remove()
                }
            }
        },
        open: function (e, n, s) {
            function a() {
                setTimeout(function () {
                    this.image_loaded(u, function () {
                        1 !== u.outerWidth() || p ? o.call(this, u) : a.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }

            function o(e) {
                var i = t(e);
                i.css("visibility", "visible"),
				l.css("overflow", "hidden"), 
				d.addClass("clearing-blackout"),
				c.addClass("clearing-container"),
				h.show(), 
				this.fix_height(s).caption(r.S(".clearing-caption", h),
				r.S("img", s)).center_and_label(e, f).shift(n, s, function () {
                    s.closest("li").siblings().removeClass("visible"), s.closest("li").addClass("visible")
                }), h.trigger("opened.fndtn.clearing")
            }
            var r = this,
                l = t(i.body),
                d = s.closest(".clearing-assembled"),
                c = r.S("div", d).first(),
                h = r.S(".visible-img", c),
                u = r.S("img", h).not(e),
                f = r.S(".clearing-touch-label", c),
                p = !1;
            t("body").on("touchmove", function (t) {
                t.preventDefault()
            }), u.error(function () {
                p = !0
            }), this.locked() || (h.trigger("open.fndtn.clearing"), u.attr("src", this.load(e)).css("visibility", "hidden"), a.call(this))
        },
        close: function (e, n) {
            e.preventDefault();
            var s, a, o = function (t) {
                    return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                }(t(n)),
                r = t(i.body);
            return n === e.target && o && (r.css("overflow", ""), s = t("div", o).first(), a = t(".visible-img", s), a.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), a.hide(), a.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
        },
        is_open: function (t) {
            return t.parent().prop("style").length > 0
        },
        keydown: function (e) {
            var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                n = this.rtl ? 37 : 39,
                s = this.rtl ? 39 : 37,
                a = 27;
            e.which === n && this.go(i, "next"), e.which === s && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function (e, i) {
            var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
            e.preventDefault(), this.go(n, i)
        },
        resize: function () {
            var e = t("img", ".clearing-blackout .visible-img"),
                i = t(".clearing-touch-label", ".clearing-blackout");
            e.length && (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"))
        },
        fix_height: function (t) {
            var e = t.parent().children(),
                i = this;
            return e.each(function () {
                var t = i.S(this),
                    e = t.find("img");
                t.height() > e.outerHeight() && t.addClass("fix-height")
            }).closest("ul").width(100 * e.length + "%"), this
        },
        update_paddles: function (t) {
            t = t.closest("li");
            var e = t.closest(".carousel").siblings(".visible-img");
            t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
        },
        center_and_label: function (t, e) {
            return e.css(!this.rtl && e.length > 0 ? {
                marginLeft: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
            } : {
                marginRight: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }), this
        },
        load: function (t) {
            var e;
            return e = "A" === t[0].nodeName ? t.attr("href") : t.closest("a").attr("href"), this.preload(t), e ? e : t.attr("src")
        },
        preload: function (t) {
            this.img(t.closest("li").next()).img(t.closest("li").prev())
        },
        img: function (t) {
            if (t.length) {
                var e = new Image,
                    i = this.S("a", t);
                e.src = i.length ? i.attr("href") : this.S("img", t).attr("src")
            }
            return this
        },
        caption: function (t, e) {
            var i = e.attr("data-caption");
            return i ? t.html(i).show() : t.text("").hide(), this
        },
        go: function (t, e) {
            var i = this.S(".visible", t),
                n = i[e]();
            this.settings.skip_selector && 0 != n.find(this.settings.skip_selector).length && (n = n[e]()), n.length && this.S("img", n).trigger("click", [i, n]).trigger("click.fndtn.clearing", [i, n]).trigger("change.fndtn.clearing")
        },
        shift: function (t, e, i) {
            var n, s = e.parent(),
                a = this.settings.prev_index || e.index(),
                o = this.direction(s, t, e),
                r = this.rtl ? "right" : "left",
                l = parseInt(s.css("left"), 10),
                d = e.outerWidth(),
                c = {};
            e.index() === a || /skip/.test(o) ? /skip/.test(o) && (n = e.index() - this.settings.up_count, this.lock(), n > 0 ? (c[r] = -(n * d), s.animate(c, 300, this.unlock())) : (c[r] = 0, s.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), c[r] = l + d, s.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(), c[r] = l - d, s.animate(c, 300, this.unlock())), i()
        },
        direction: function (t, e, i) {
            var n, s = this.S("li", t),
                a = s.outerWidth() + s.outerWidth() / 4,
                o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1,
                r = s.index(i);
            return this.settings.up_count = o, n = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, n
        },
        adjacent: function (t, e) {
            for (var i = e + 1; i >= e - 1; i--)
                if (i === t) return !0;
            return !1
        },
        lock: function () {
            this.settings.locked = !0
        },
        unlock: function () {
            this.settings.locked = !1
        },
        locked: function () {
            return this.settings.locked
        },
        off: function () {
            this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
        },
        reflow: function () {
            this.init()
        }
    }
}(jQuery, window, window.document),
function (t, e, i) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.0",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function () {},
            closed: function () {}
        },
        init: function (e, i, n) {
            Foundation.inherit(this, "throttle"), t.extend(!0, this.settings, i, n), this.bindings(i, n)
        },
        events: function () {
            var n = this,
                s = n.S;
            s(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (e) {
                var i = s(this).data(n.attr_name(!0) + "-init") || n.settings;
                (!i.is_hover || Modernizr.touch) && (e.preventDefault(), s(this).parent("[data-reveal-id]") && e.stopPropagation(), n.toggle(t(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (t) {
                var e, i, a = s(this);
                clearTimeout(n.timeout), a.data(n.data_attr()) ? (e = s("#" + a.data(n.data_attr())), i = a) : (e = a, i = s("[" + n.attr_name() + '="' + e.attr("id") + '"]'));
                var o = i.data(n.attr_name(!0) + "-init") || n.settings;
                s(t.currentTarget).data(n.data_attr()) && o.is_hover && n.closeall.call(n), o.is_hover && n.open.apply(n, [e, i])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function () {
                var t, e = s(this);
                if (e.data(n.data_attr())) t = e.data(n.data_attr(!0) + "-init") || n.settings;
                else var i = s("[" + n.attr_name() + '="' + s(this).attr("id") + '"]'),
                    t = i.data(n.attr_name(!0) + "-init") || n.settings;
                n.timeout = setTimeout(function () {
                    e.data(n.data_attr()) ? t.is_hover && n.close.call(n, s("#" + e.data(n.data_attr()))) : t.is_hover && n.close.call(n, e)
                }.bind(this), t.hover_timeout)
            }).on("click.fndtn.dropdown", function (e) {
                var a = s(e.target).closest("[" + n.attr_name() + "-content]"),
                    o = a.find("a");
                return o.length > 0 && "false" !== a.attr("aria-autoclose") && n.close.call(n, s("[" + n.attr_name() + "-content]")), e.target !== i && !t.contains(i.documentElement, e.target) || s(e.target).closest("[" + n.attr_name() + "]").length > 0 ? void 0 : !s(e.target).data("revealId") && a.length > 0 && (s(e.target).is("[" + n.attr_name() + "-content]") || t.contains(a.first()[0], e.target)) ? void e.stopPropagation() : void n.close.call(n, s("[" + n.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
                n.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
                n.settings.closed.call(this)
            }), s(e).off(".dropdown").on("resize.fndtn.dropdown", n.throttle(function () {
                n.resize.call(n)
            }, 50)), this.resize()
        },
        close: function (e) {
            var i = this;
            e.each(function () {
                var n = t("[" + i.attr_name() + "=" + e[0].id + "]") || t("aria-controls=" + e[0].id + "]");
                n.attr("aria-expanded", "false"), i.S(this).hasClass(i.settings.active_class) && (i.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(i.settings.active_class).prev("[" + i.attr_name() + "]").removeClass(i.settings.active_class).removeData("target"), i.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [e]))
            }), e.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function () {
            var e = this;
            t.each(e.S(".f-open-" + this.attr_name(!0)), function () {
                e.close.call(e, e.S(this))
            })
        },
        open: function (t, e) {
            this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus(), t.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function () {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function (t) {
            if (!t.hasClass(this.settings.disabled_class)) {
                var e = this.S("#" + t.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
            }
        },
        resize: function () {
            var t = this.S("[" + this.attr_name() + "-content].open"),
                e = this.S("[" + this.attr_name() + '="' + t.attr("id") + '"]');
            t.length && e.length && this.css(t, e)
        },
        css: function (t, e) {
            var i = Math.max((e.width() - t.width()) / 2, 8),
                n = e.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var s = this.dirs.bottom.call(t, e, n);
                t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: s.top
                }), t.css(Foundation.rtl ? "right" : "left", i)
            } else this.style(t, e, n);
            return t
        },
        style: function (e, i, n) {
            var s = t.extend({
                position: "absolute"
            }, this.dirs[n.align].call(e, i, n));
            e.attr("style", "").css(s)
        },
        dirs: {
            _base: function (t) {
                var n = this.offsetParent(),
                    s = n.offset(),
                    a = t.offset();
                a.top -= s.top, a.left -= s.left, a.missRight = !1, a.missTop = !1, a.missLeft = !1, a.leftRightFlag = !1;
                var o;
                o = i.getElementsByClassName("row")[0] ? i.getElementsByClassName("row")[0].clientWidth : e.outerWidth;
                var r = (e.outerWidth - o) / 2,
                    l = o;
                return this.hasClass("mega") || (t.offset().top <= this.outerHeight() && (a.missTop = !0, l = e.outerWidth - r, a.leftRightFlag = !0), t.offset().left + this.outerWidth() > t.offset().left + r && t.offset().left - r > this.outerWidth() && (a.missRight = !0, a.missLeft = !1), t.offset().left - this.outerWidth() <= 0 && (a.missLeft = !0, a.missRight = !1)), a
            },
            top: function (t, e) {
                var i = Foundation.libs.dropdown,
                    n = i.dirs._base.call(this, t);
                return this.addClass("drop-top"), 1 == n.missTop && (n.top = n.top + t.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), Foundation.rtl ? {
                    left: n.left - this.outerWidth() + t.outerWidth(),
                    top: n.top - this.outerHeight()
                } : {
                    left: n.left,
                    top: n.top - this.outerHeight()
                }
            },
            bottom: function (t, e) {
                var i = Foundation.libs.dropdown,
                    n = i.dirs._base.call(this, t);
                return 1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), i.rtl ? {
                    left: n.left - this.outerWidth() + t.outerWidth(),
                    top: n.top + t.outerHeight()
                } : {
                    left: n.left,
                    top: n.top + t.outerHeight()
                }
            },
            left: function (t) {
                var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-left"), 1 == e.missLeft && (e.left = e.left + this.outerWidth(), e.top = e.top + t.outerHeight(), this.removeClass("drop-left")), {
                    left: e.left - this.outerWidth(),
                    top: e.top
                }
            },
            right: function (t, e) {
                var i = Foundation.libs.dropdown.dirs._base.call(this, t);
                this.addClass("drop-right"), 1 == i.missRight ? (i.left = i.left - this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-right")) : i.triggeredRight = !0;
                var n = Foundation.libs.dropdown;
                return (t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), {
                    left: i.left + t.outerWidth(),
                    top: i.top
                }
            }
        },
        adjust_pip: function (t, e, i, n) {
            var s = Foundation.stylesheet,
                a = 8;
            t.hasClass(i.mega_class) ? a = n.left + e.outerWidth() / 2 - 8 : this.small() && (a += n.left - 8), this.rule_idx = s.cssRules.length;
            var o = ".f-dropdown.open:before",
                r = ".f-dropdown.open:after",
                l = "left: " + a + "px;",
                d = "left: " + (a - 1) + "px;";
            1 == n.missRight && (a = t.outerWidth() - 23, o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left: " + a + "px;", d = "left: " + (a - 1) + "px;"), 1 == n.triggeredRight && (o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left:-12px;", d = "left:-14px;"), s.insertRule ? (s.insertRule([o, "{", l, "}"].join(" "), this.rule_idx), s.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1)) : (s.addRule(o, l, this.rule_idx), s.addRule(r, d, this.rule_idx + 1))
        },
        clear_idx: function () {
            var t = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function () {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.0",
        settings: {
            use_tallest: !0,
            before_height_change: t.noop,
            after_height_change: t.noop,
            equalize_on_stack: !1
        },
        init: function (t, e, i) {
            Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
        },
        events: function () {
            this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function () {
                this.reflow()
            }.bind(this))
        },
        equalize: function (e) {
            var i = !1,
                n = e.find("[" + this.attr_name() + "-watch]:visible"),
                s = e.data(this.attr_name(!0) + "-init");
            if (0 !== n.length) {
                var a = n.first().offset().top;
                if (s.before_height_change(), e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), n.height("inherit"), n.each(function () {
                        var e = t(this);
                        e.offset().top !== a && (i = !0)
                    }), s.equalize_on_stack !== !1 || !i) {
                    var o = n.map(function () {
                        return t(this).outerHeight(!1)
                    }).get();
                    if (s.use_tallest) {
                        var r = Math.max.apply(null, o);
                        n.css("height", r)
                    } else {
                        var l = Math.min.apply(null, o);
                        n.css("height", l)
                    }
                    s.after_height_change(), e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function () {
            var e = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                var i = t(this);
                e.image_loaded(e.S("img", this), function () {
                    e.equalize(i)
                })
            })
        }
    }
}(jQuery, window, window.document),
function (t, e) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.0",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function (e, i, n) {
                    if (/IMG/.test(e[0].nodeName)) {
                        var s = e[0].src;
                        if (new RegExp(i, "i").test(s)) return;
                        return e[0].src = i, n(e[0].src)
                    }
                    var a = e.data(this.data_attr + "-last-path"),
                        o = this;
                    return a != i ? /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"), e.data("interchange-last-path", i), n(i)) : t.get(i, function (t) {
                        e.html(t), e.data(o.data_attr + "-last-path", i), n()
                    }) : void 0
                }
            }
        },
        init: function (e, i, n) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, n), this.bindings(i, n), this.load("images"), this.load("nodes")
        },
        get_media_hash: function () {
            var t = "";
            for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
            return t
        },
        events: function () {
            var i, n = this;
            return t(e).off(".interchange").on("resize.fndtn.interchange", n.throttle(function () {
                var t = n.get_media_hash();
                t !== i && n.resize(), i = t
            }, 50)), this
        },
        resize: function () {
            var e = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = this.results(i, e[i]);
                    n && this.settings.directives[n.scenario[1]].call(this, n.el, n.scenario[0], function () {
                        if (arguments[0] instanceof Array) var t = arguments[0];
                        else var t = Array.prototype.slice.call(arguments, 0);
                        n.el.trigger(n.scenario[1], t)
                    })
                }
        },
        results: function (t, e) {
            var i = e.length;
            if (i > 0)
                for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                    var s, a = e[i][2];
                    if (s = matchMedia(this.settings.named_queries.hasOwnProperty(a) ? this.settings.named_queries[a] : a), s.matches) return {
                        el: n,
                        scenario: e[i]
                    }
                }
            return !1
        },
        load: function (t, e) {
            return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
        },
        update_images: function () {
            var t = this.S("img[" + this.data_attr + "]"),
                e = t.length,
                i = e,
                n = 0,
                s = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                if (n++, t[i]) {
                    var a = t[i].getAttribute(s) || "";
                    a.length > 0 && this.cached_images.push(t[i])
                }
                n === e && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function () {
            var t = this.S("[" + this.data_attr + "]").not("img"),
                e = t.length,
                i = e,
                n = 0,
                s = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                n++;
                var a = t[i].getAttribute(s) || "";
                a.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function (i) {
            for (var n = this["cached_" + i].length; n--;) this.object(t(this["cached_" + i][n]));
            return t(e).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function (t) {
            var e = this.trim(t);
            return e.length > 0 ? e : "replace"
        },
        parse_scenario: function (t) {
            var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                i = t[1];
            if (e) var n = e[1],
                s = e[2];
            else var a = t[0].split(/,\s*$/),
                n = a[0],
                s = "";
            return [this.trim(n), this.convert_directive(s), this.trim(i)]
        },
        object: function (t) {
            var e = this.parse_data_attr(t),
                i = [],
                n = e.length;
            if (n > 0)
                for (; n--;) {
                    var s = e[n].split(/\(([^\)]*?)(\))$/);
                    if (s.length > 1) {
                        var a = this.parse_scenario(s);
                        i.push(a)
                    }
                }
            return this.store(t, i)
        },
        store: function (t, e) {
            var i = this.random_str(),
                n = t.data(this.add_namespace("uuid", !0));
            return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
        },
        trim: function (e) {
            return "string" == typeof e ? t.trim(e) : e
        },
        set_data_attr: function (t) {
            return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function (t) {
            for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;) e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
            return n
        },
        reflow: function () {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function (t, e, i, n) {
    "use strict";
    var s = s || !1;
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.5.0",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function () {},
            post_step_callback: function () {},
            pre_step_callback: function () {},
            pre_ride_callback: function () {},
            post_expose_callback: function () {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function (e, i, n) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, n || i), this.bindings(i, n)
        },
        go_next: function () {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        },
        go_prev: function () {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
        },
        events: function () {
            var i = this;
            t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (t) {
                t.preventDefault(), this.go_next()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function (t) {
                t.preventDefault(), this.go_prev()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (t) {
                t.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)).on("keyup.fndtn.joyride", function (t) {
                if (this.settings.keyboard && this.settings.riding) switch (t.which) {
                case 39:
                    t.preventDefault(), this.go_next();
                    break;
                case 37:
                    t.preventDefault(), this.go_prev();
                    break;
                case 27:
                    t.preventDefault(), this.end(this.settings.abort_on_close)
                }
            }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function () {
                if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip && i.settings.riding) {
                    if (i.settings.exposed.length > 0) {
                        var e = t(i.settings.exposed);
                        e.each(function () {
                            var e = t(this);
                            i.un_expose(e), i.expose(e)
                        })
                    }
                    i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                }
            }, 100))
        },
        start: function () {
            var e = this,
                i = t("[" + this.attr_name() + "]", this.scope),
                n = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                s = n.length;
            !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (i) {
                var a = t(this);
                this.settings = t.extend({}, e.defaults, e.data_options(a));
                for (var o = s; o--;) e.settings[n[o]] = parseInt(e.settings[n[o]], 10);
                e.create({
                    $li: a,
                    index: i
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function () {
            this.set_li(), this.show()
        },
        tip_template: function (e) {
            var i, n;
            return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), n = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(n), i[0]
        },
        timer_instance: function (e) {
            var i;
            return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
        },
        button_text: function (e) {
            return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
        },
        prev_button_text: function (e, i) {
            return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == i ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
        },
        create: function (e) {
            this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
            var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                n = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")),
                s = e.$li.attr("class"),
                a = t(this.tip_template({
                    tip_class: s,
                    index: e.index,
                    button_text: i,
                    prev_button_text: n,
                    li: e.$li
                }));
            t(this.settings.tip_container).append(a)
        },
        show: function (e, i) {
            var s = null;
            if (this.settings.$li === n || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after))
                if (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, i), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                    if (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                        var a = t(".joyride-modal-bg");
                        /pop/i.test(this.settings.tipAnimation) ? a.hide() : a.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                    }
                    this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), s = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
                        s.animate({
                            width: s.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
                        s.animate({
                            width: s.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                } else this.settings.$li && this.settings.$target.length < 1 ? this.show(e, i) : this.end();
            else this.settings.paused = !0
        },
        is_phone: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function () {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function () {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function (t, e) {
            t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function () {
            this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function () {
            var e = this.settings.$li.attr(this.add_namespace("data-class")),
                n = this.settings.$li.attr(this.add_namespace("data-id")),
                s = function () {
                    return n ? t(i.getElementById(n)) : e ? t("." + e).first() : t("body")
                };
            this.settings.$target = s()
        },
        scroll_to: function () {
            var i, n;
            i = t(e).height() / 2, n = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != n && t("html, body").stop().animate({
                scrollTop: n
            }, this.settings.scroll_speed, "swing")
        },
        paused: function () {
            return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function () {
            this.hide(), this.settings.$li = n, this.show("init")
        },
        pos_default: function (t) {
            var e = this.settings.$next_tip.find(".joyride-nub"),
                i = Math.ceil(e.outerWidth() / 2),
                n = Math.ceil(e.outerHeight() / 2),
                s = t || !1;
            if (s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
            else {
                var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                } : {
                    top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function (e) {
            var i = this.settings.$next_tip.outerHeight(),
                n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                s = t(".joyride-nub", this.settings.$next_tip),
                a = Math.ceil(s.outerHeight() / 2),
                o = e || !1;
            s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - i - a
            }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + n + a
            }), s.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function (t) {
            this.center(), t.hide(), this.show_modal()
        },
        show_modal: function () {
            if (!this.settings.$next_tip.data("closed")) {
                var e = t(".joyride-modal-bg");
                if (e.length < 1) {
                    var e = t(this.settings.template.modal);
                    e.appendTo("body")
                }
                /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function () {
            var i, n, s, a, o, r = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                s = this.settings.$target
            }
            return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({
                top: s.offset().top,
                left: s.offset().left,
                width: s.outerWidth(!0),
                height: s.outerHeight(!0)
            }), n = t(this.settings.template.expose_cover), a = {
                zIndex: s.css("z-index"),
                position: s.css("position")
            }, o = null == s.attr("class") ? "" : s.attr("class"), s.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && s.css("position", "relative"), s.data("expose-css", a), s.data("orig-class", o), s.attr("class", o + " " + this.settings.expose_add_class), n.css({
                top: s.offset().top,
                left: s.offset().left,
                width: s.outerWidth(!0),
                height: s.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(n), i.addClass(r), n.addClass(r), s.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, s), void this.add_exposed(s))
        },
        un_expose: function () {
            var i, n, s, a, o, r = !1;
            if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                n = this.settings.$target
            }
            return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = n.data("expose"), s = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : s.remove(), a = n.data("expose-css"), "auto" == a.zIndex ? n.css("z-index", "") : n.css("z-index", a.zIndex), a.position != n.css("position") && ("static" == a.position ? n.css("position", "") : n.css("position", a.position)), o = n.data("orig-class"), n.attr("class", o), n.removeData("orig-classes"), n.removeData("expose"), n.removeData("expose-z-index"), void this.remove_exposed(n))
        },
        add_exposed: function (e) {
            this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
        },
        remove_exposed: function (e) {
            var i, n;
            for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], n = this.settings.exposed.length; n--;)
                if (this.settings.exposed[n] == i) return void this.settings.exposed.splice(n, 1)
        },
        center: function () {
            var i = t(e);
            return this.settings.$next_tip.css({
                top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
            }), !0
        },
        bottom: function () {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function () {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function () {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function () {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function (i) {
            var n = t(e),
                s = n.height() / 2,
                a = Math.ceil(this.settings.$target.offset().top - s + this.settings.$next_tip.outerHeight()),
                o = n.width() + n.scrollLeft(),
                r = n.height() + a,
                l = n.height() + n.scrollTop(),
                d = n.scrollTop();
            return d > a && (d = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), n.scrollLeft() > i.offset().left]
        },
        visible: function (t) {
            for (var e = t.length; e--;)
                if (t[e]) return !1;
            return !0
        },
        nub_position: function (t, e, i) {
            t.addClass("auto" === e ? i : e)
        },
        startTimer: function () {
            this.settings.$li.length ? this.settings.automate = setTimeout(function () {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function (e) {
            this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), t(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
        },
        off: function () {
            t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.0",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function (t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i)
        },
        events: function () {
            var i = this,
                n = i.S,
                s = i.settings;
            i.set_expedition_position(), n(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function (e) {
                e.preventDefault();
                var n = t(this).closest("[" + i.attr_name() + "]"),
                    s = n.data("magellan-expedition-init"),
                    a = this.hash.split("#").join(""),
                    o = t('a[name="' + a + '"]');
                0 === o.length && (o = t("#" + a));
                var r = o.offset().top - s.destination_threshold + 1;
                s.offset_by_height && (r -= n.outerHeight()), t("html, body").stop().animate({
                    scrollTop: r
                }, s.duration, s.easing, function () {
                    history.pushState ? history.pushState(null, null, "#" + a) : location.hash = "#" + a
                })
            }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)), t(e).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), s.throttle_delay))
        },
        check_for_arrivals: function () {
            var t = this;
            t.update_arrivals(), t.update_expedition_positions()
        },
        set_expedition_position: function () {
            var e = this;
            t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
                var i, n, s = t(this),
                    a = s.data("magellan-expedition-init"),
                    o = s.attr("styles");
                s.attr("style", ""), i = s.offset().top + a.threshold, n = parseInt(s.data("magellan-fixed-top")), isNaN(n) || (e.settings.fixed_top = n), s.data(e.data_attr("magellan-top-offset"), i), s.attr("style", o)
            })
        },
        update_expedition_positions: function () {
            var i = this,
                n = t(e).scrollTop();
            t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
                var e = t(this),
                    s = e.data("magellan-expedition-init"),
                    a = e.attr("style"),
                    o = e.data("magellan-top-offset");
                if (n + i.settings.fixed_top >= o) {
                    var r = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === r.length && (r = e.clone(), r.removeAttr(i.attr_name()), r.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(r)), e.css({
                        position: "fixed",
                        top: s.fixed_top
                    }).addClass("fixed")
                } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", a).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function () {
            var i = this,
                n = t(e).scrollTop();
            t("[" + this.attr_name() + "]", i.scope).each(function () {
                var e = t(this),
                    s = e.data(i.attr_name(!0) + "-init"),
                    a = i.offsets(e, n),
                    o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
                    r = !1;
                a.each(function (t, n) {
                    if (n.viewport_offset >= n.top_offset) {
                        var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                        return a.not(n.arrival).removeClass(s.active_class), n.arrival.addClass(s.active_class), r = !0, !0
                    }
                }), r || o.removeClass(s.active_class)
            })
        },
        offsets: function (e, i) {
            var n = this,
                s = e.data(n.attr_name(!0) + "-init"),
                a = i;
            return e.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function () {
                var i = t(this).data(n.data_attr("magellan-arrival")),
                    o = t("[" + n.add_namespace("data-magellan-destination") + "=" + i + "]");
                if (o.length > 0) {
                    var r = o.offset().top - s.destination_threshold;
                    return s.offset_by_height && (r -= e.outerHeight()), r = Math.floor(r), {
                        destination: o,
                        arrival: t(this),
                        top_offset: r,
                        viewport_offset: a
                    }
                }
            }).sort(function (t, e) {
                return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
            })
        },
        data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function () {
            this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
        },
        reflow: function () {
            var e = this;
            t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
        }
    }
}(jQuery, window, window.document),
function (t) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.0",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function (t, e, i) {
            this.bindings(e, i)
        },
        events: function () {
            var e = this,
                i = e.S,
                n = "",
                s = "",
                a = "";
            "move" === this.settings.open_method ? (n = "move-", s = "right", a = "left") : "overlap_single" === this.settings.open_method ? (n = "offcanvas-overlap-", s = "right", a = "left") : "overlap" === this.settings.open_method && (n = "offcanvas-overlap"), i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (a) {
                e.click_toggle_class(a, n + s), "overlap" !== e.settings.open_method && i(".left-submenu").removeClass(n + s), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (a) {
                var o = e.get_settings(a),
                    r = i(this).parent();
                !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (a.preventDefault(), i(this).siblings(".left-submenu").toggleClass(n + s)) : r.hasClass("back") && (a.preventDefault(), r.parent().removeClass(n + s)) : (e.hide.call(e, n + s, e.get_wrapper(a)), r.parent().removeClass(n + s)), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (s) {
                e.click_toggle_class(s, n + a), "overlap" !== e.settings.open_method && i(".right-submenu").removeClass(n + a), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (s) {
                var o = e.get_settings(s),
                    r = i(this).parent();
                !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (s.preventDefault(), i(this).siblings(".right-submenu").toggleClass(n + a)) : r.hasClass("back") && (s.preventDefault(), r.parent().removeClass(n + a)) : (e.hide.call(e, n + a, e.get_wrapper(s)), r.parent().removeClass(n + a)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (o) {
                e.click_remove_class(o, n + a), i(".right-submenu").removeClass(n + a), s && (e.click_remove_class(o, n + s), i(".left-submenu").removeClass(n + a)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (i) {
                e.click_remove_class(i, n + a), t(".left-off-canvas-toggle").attr("aria-expanded", "false"), s && (e.click_remove_class(i, n + s), t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function (t, e) {
            e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
        },
        show: function (t, e) {
            e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
        },
        hide: function (t, e) {
            e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
        },
        click_toggle_class: function (t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.toggle(e, i)
        },
        click_remove_class: function (t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.hide(e, i)
        },
        get_settings: function (t) {
            var e = this.S(t.target).closest("[" + this.attr_name() + "]");
            return e.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function (t) {
            var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
            return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e, i, n) {
    "use strict";
    var s = function () {},
        a = function (s, a) {
            if (s.hasClass(a.slides_container_class)) return this;
            var d, c, h, u, f, p, g = this,
                m = s,
                v = 0,
                _ = !1;
            g.slides = function () {
                return m.children(a.slide_selector)
            }, g.slides().first().addClass(a.active_slide_class), g.update_slide_number = function (e) {
                a.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(g.slides().length)), a.bullets && (h.children().removeClass(a.bullets_active_class), t(h.children().get(e)).addClass(a.bullets_active_class))
            }, g.update_active_link = function (e) {
                var i = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
                i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
            }, g.build_markup = function () {
                m.wrap('<div class="' + a.container_class + '"></div>'), d = m.parent(), m.addClass(a.slides_container_class), a.stack_on_small && d.addClass(a.stack_on_small_class), a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (u = t("<div>").addClass(a.timer_container_class), u.append("<span>"), u.append(t("<div>").addClass(a.timer_progress_class)), u.addClass(a.timer_paused_class), d.append(u)), a.slide_number && (c = t("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), d.append(c)), a.bullets && (h = t("<ol>").addClass(a.bullets_container_class), d.append(h), h.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function (e) {
                    var i = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                    h.append(i)
                }))
            }, g._goto = function (e, i) {
                if (e === v) return !1;
                "object" == typeof p && p.restart();
                var n = g.slides(),
                    s = "next";
                if (_ = !0, v > e && (s = "prev"), e >= n.length) {
                    if (!a.circular) return !1;
                    e = 0
                } else if (0 > e) {
                    if (!a.circular) return !1;
                    e = n.length - 1
                }
                var o = t(n.get(v)),
                    r = t(n.get(e));
                o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), m.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), g.update_active_link(e);
                var l = function () {
                    var t = function () {
                        v = e, _ = !1, i === !0 && (p = g.create_timer(), p.start()), g.update_slide_number(v), m.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: v,
                            total_slides: n.length
                        }]), a.after_slide_change(v, n.length)
                    };
                    m.outerHeight() != r.outerHeight() && a.variable_height ? m.animate({
                        height: r.outerHeight()
                    }, 250, "linear", t) : t()
                };
                if (1 === n.length) return l(), !1;
                var d = function () {
                    "next" === s && f.next(o, r, l), "prev" === s && f.prev(o, r, l)
                };
                r.outerHeight() > m.outerHeight() && a.variable_height ? m.animate({
                    height: r.outerHeight()
                }, 250, "linear", d) : d()
            }, g.next = function (t) {
                t.stopImmediatePropagation(), t.preventDefault(), g._goto(v + 1)
            }, g.prev = function (t) {
                t.stopImmediatePropagation(), t.preventDefault(), g._goto(v - 1)
            }, g.link_custom = function (e) {
                e.preventDefault();
                var i = t(this).attr("data-orbit-link");
                if ("string" == typeof i && "" != (i = t.trim(i))) {
                    var n = d.find("[data-orbit-slide=" + i + "]"); - 1 != n.index() && g._goto(n.index())
                }
            }, g.link_bullet = function () {
                var e = t(this).attr("data-orbit-slide");
                if ("string" == typeof e && "" != (e = t.trim(e)))
                    if (isNaN(parseInt(e))) {
                        var i = d.find("[data-orbit-slide=" + e + "]"); - 1 != i.index() && g._goto(i.index() + 1)
                    } else g._goto(parseInt(e))
            }, g.timer_callback = function () {
                g._goto(v + 1, !0)
            }, g.compute_dimensions = function () {
                var e = t(g.slides().get(v)),
                    i = e.outerHeight();
                a.variable_height || g.slides().each(function () {
                    t(this).outerHeight() > i && (i = t(this).outerHeight())
                }), m.height(i)
            }, g.create_timer = function () {
                var t = new o(d.find("." + a.timer_container_class), a, g.timer_callback);
                return t
            }, g.stop_timer = function () {
                "object" == typeof p && p.stop()
            }, g.toggle_timer = function () {
                var t = d.find("." + a.timer_container_class);
                t.hasClass(a.timer_paused_class) ? ("undefined" == typeof p && (p = g.create_timer()), p.start()) : "object" == typeof p && p.stop()
            }, g.init = function () {
                g.build_markup(), a.timer && (p = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), p.start)), f = new l(a, m), "slide" === a.animation && (f = new r(a, m)), d.on("click", "." + a.next_class, g.next), d.on("click", "." + a.prev_class, g.prev), a.next_on_click && d.on("click", "." + a.slides_container_class + " [data-orbit-slide]", g.link_bullet), d.on("click", g.toggle_timer), a.swipe && d.on("touchstart.fndtn.orbit", function (t) {
                    t.touches || (t = t.originalEvent);
                    var e = {
                        start_page_x: t.touches[0].pageX,
                        start_page_y: t.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: n
                    };
                    d.data("swipe-transition", e), t.stopPropagation()
                }).on("touchmove.fndtn.orbit", function (t) {
                    if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        var e = d.data("swipe-transition");
                        if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                            t.preventDefault();
                            var i = e.delta_x < 0 ? v + 1 : v - 1;
                            e.active = !0, g._goto(i)
                        }
                    }
                }).on("touchend.fndtn.orbit", function (t) {
                    d.data("swipe-transition", {}), t.stopPropagation()
                }), d.on("mouseenter.fndtn.orbit", function () {
                    a.timer && a.pause_on_hover && g.stop_timer()
                }).on("mouseleave.fndtn.orbit", function () {
                    a.timer && a.resume_on_mouseout && p.start()
                }), t(i).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                    d.prev("." + a.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), m.trigger("ready.fndtn.orbit")
                })
            }, g.init()
        },
        o = function (t, e, i) {
            var n, s, a = this,
                o = e.timer_speed,
                r = t.find("." + e.timer_progress_class),
                l = -1;
            this.update_progress = function (t) {
                var e = r.clone();
                e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
            }, this.restart = function () {
                clearTimeout(s), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
            }, this.start = function () {
                return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), n = (new Date).getTime(), r.animate({
                    width: "100%"
                }, l, "linear"), s = setTimeout(function () {
                    a.restart(), i()
                }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
            }, this.stop = function () {
                if (t.hasClass(e.timer_paused_class)) return !0;
                clearTimeout(s), t.addClass(e.timer_paused_class);
                var i = (new Date).getTime();
                l -= i - n;
                var r = 100 - l / o * 100;
                a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
            }
        },
        r = function (e) {
            var i = e.animation_speed,
                n = 1 === t("html[dir=rtl]").length,
                s = n ? "marginRight" : "marginLeft",
                a = {};
            a[s] = "0%", this.next = function (t, e, n) {
                t.animate({
                    marginLeft: "-100%"
                }, i), e.animate(a, i, function () {
                    t.css(s, "100%"), n()
                })
            }, this.prev = function (t, e, n) {
                t.animate({
                    marginLeft: "100%"
                }, i), e.css(s, "-100%"), e.animate(a, i, function () {
                    t.css(s, "100%"), n()
                })
            }
        },
        l = function (e) {
            {
                var i = e.animation_speed;
                1 === t("html[dir=rtl]").length
            }
            this.next = function (t, e, n) {
                e.css({
                    margin: "0%",
                    opacity: "0.01"
                }), e.animate({
                    opacity: "1"
                }, i, "linear", function () {
                    t.css("margin", "100%"), n()
                })
            }, this.prev = function (t, e, n) {
                e.css({
                    margin: "0%",
                    opacity: "0.01"
                }), e.animate({
                    opacity: "1"
                }, i, "linear", function () {
                    t.css("margin", "100%"), n()
                })
            }
        };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.0",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: s,
            after_slide_change: s
        },
        init: function (t, e, i) {
            this.bindings(e, i)
        },
        events: function (t) {
            var e = new a(this.S(t), this.S(t).data("orbit-init"));
            this.S(t).data(this.name + "-instance", e)
        },
        reflow: function () {
            var t = this;
            if (t.S(t.scope).is("[data-orbit]")) {
                var e = t.S(t.scope),
                    i = e.data(t.name + "-instance");
                i.compute_dimensions()
            } else t.S("[data-orbit]", t.scope).each(function (e, i) {
                var n = t.S(i),
                    s = (t.data_options(n), n.data(t.name + "-instance"));
                s.compute_dimensions()
            })
        }
    }
}(jQuery, window, window.document),
function (t, e, i, n) {
    "use strict";

    function s(t) {
        var e = /fade/i.test(t),
            i = /pop/i.test(t);
        return {
            animate: e || i,
            pop: i,
            fade: e
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.0",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function () {},
            opened: function () {},
            close: function () {},
            closed: function () {},
            bg: t(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function (e, i, n) {
            t.extend(!0, this.settings, i, n), this.bindings(i, n)
        },
        events: function () {
            var t = this,
                e = t.S;
            return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function (i) {
                if (i.preventDefault(), !t.locked) {
                    var n = e(this),
                        s = n.data(t.data_attr("reveal-ajax"));
                    if (t.locked = !0, "undefined" == typeof s) t.open.call(t, n);
                    else {
                        var a = s === !0 ? n.attr("href") : s;
                        t.open.call(t, n, {
                            url: a
                        })
                    }
                }
            }), e(i).on("click.fndtn.reveal", this.close_targets(), function (i) {
                if (i.preventDefault(), !t.locked) {
                    var n = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init") || t.settings,
                        s = e(i.target)[0] === e("." + n.bg_class)[0];
                    if (s) {
                        if (!n.close_on_background_click) return;
                        i.stopPropagation()
                    }
                    t.locked = !0, t.close.call(t, s ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
                }
            }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function () {
            var t = this;
            return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
                var i = t.S("[" + t.attr_name() + "].open"),
                    n = i.data(t.attr_name(!0) + "-init") || t.settings;
                n && 27 === e.which && n.close_on_esc && !t.locked && t.close.call(t, i)
            }), !0
        },
        key_up_off: function () {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function (i, n) {
            var s, a = this;
            i ? "undefined" != typeof i.selector ? s = a.S("#" + i.data(a.data_attr("reveal-id"))).first() : (s = a.S(this.scope), n = i) : s = a.S(this.scope);
            var o = s.data(a.attr_name(!0) + "-init");
            if (o = o || this.settings, s.hasClass("open") && i.attr("data-reveal-id") == s.attr("id")) return a.close(s);
            if (!s.hasClass("open")) {
                var r = a.S("[" + a.attr_name() + "].open");
                if ("undefined" == typeof s.data("css-top") && s.data("css-top", parseInt(s.css("top"), 10)).data("offset", this.cache_offset(s)), this.key_up_on(s), s.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), r.length < 1 && this.toggle_bg(s, !0), "string" == typeof n && (n = {
                        url: n
                    }), "undefined" != typeof n && n.url) {
                    var l = "undefined" != typeof n.success ? n.success : null;
                    t.extend(n, {
                        success: function (e, i, n) {
                            if (t.isFunction(l)) {
                                var d = l(e, i, n);
                                "string" == typeof d && (e = d)
                            }
                            s.html(e), a.S(s).foundation("section", "reflow"), a.S(s).children().foundation(), r.length > 0 && a.hide(r, o.css.close), a.show(s, o.css.open)
                        }
                    }), t.ajax(n)
                } else r.length > 0 && this.hide(r, o.css.close), this.show(s, o.css.open)
            }
            a.S(e).trigger("resize")
        },
        close: function (t) {
            var t = t && t.length ? t : this.S(this.scope),
                e = this.S("[" + this.attr_name() + "].open"),
                i = t.data(this.attr_name(!0) + "-init") || this.settings;
            e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(t, !1), this.hide(e, i.css.close, i))
        },
        close_targets: function () {
            var t = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
        },
        toggle_bg: function (e, i) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var s = this.settings.bg.filter(":visible").length > 0;
            i != s && ((i == n ? s : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function (i, n) {
            if (n) {
                var a = i.data(this.attr_name(!0) + "-init") || this.settings,
                    o = a.root_element;
                if (0 === i.parent(o).length) {
                    var r = i.wrap('<div style="display: none;" />').parent();
                    i.on("closed.fndtn.reveal.wrapped", function () {
                        i.detach().appendTo(r), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), i.detach().appendTo(o)
                }
                var l = s(a.animation);
                if (l.animate || (this.locked = !1), l.pop) {
                    n.top = t(e).scrollTop() - i.data("offset") + "px";
                    var d = {
                        top: t(e).scrollTop() + i.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function () {
                        return i.css(n).animate(d, a.animation_speed, "linear", function () {
                            this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (l.fade) {
                    n.top = t(e).scrollTop() + i.data("css-top") + "px";
                    var d = {
                        opacity: 1
                    };
                    return setTimeout(function () {
                        return i.css(n).animate(d, a.animation_speed, "linear", function () {
                            this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return i.css(n).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var a = this.settings;
            return s(a.animation).fade ? i.fadeIn(a.animation_speed / 2) : (this.locked = !1, i.show())
        },
        hide: function (i, n) {
            if (n) {
                var a = i.data(this.attr_name(!0) + "-init");
                a = a || this.settings;
                var o = s(a.animation);
                if (o.animate || (this.locked = !1), o.pop) {
                    var r = {
                        top: -t(e).scrollTop() - i.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function () {
                        return i.animate(r, a.animation_speed, "linear", function () {
                            this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (o.fade) {
                    var r = {
                        opacity: 0
                    };
                    return setTimeout(function () {
                        return i.animate(r, a.animation_speed, "linear", function () {
                            this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return i.hide().css(n).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var a = this.settings;
            return s(a.animation).fade ? i.fadeOut(a.animation_speed / 2) : i.hide()
        },
        close_video: function (e) {
            var i = t(".flex-video", e.target),
                n = t("iframe", i);
            n.length > 0 && (n.attr("data-src", n[0].src), n.attr("src", n.attr("src")), i.hide())
        },
        open_video: function (e) {
            var i = t(".flex-video", e.target),
                s = i.find("iframe");
            if (s.length > 0) {
                var a = s.attr("data-src");
                if ("string" == typeof a) s[0].src = s.attr("data-src");
                else {
                    var o = s[0].src;
                    s[0].src = n, s[0].src = o
                }
                i.show()
            }
        },
        data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        cache_offset: function (t) {
            var e = t.show().height() + parseInt(t.css("top"), 10);
            return t.hide(), e
        },
        off: function () {
            t(this.scope).off(".fndtn.reveal")
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.0",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: null,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function () {}
        },
        cache: {},
        init: function (t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
        },
        events: function () {
            var i = this;
            t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function (e) {
                i.cache.active || (e.preventDefault(), i.set_active_slider(t(e.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function (n) {
                if (i.cache.active)
                    if (n.preventDefault(), t.data(i.cache.active[0], "settings").vertical) {
                        var s = 0;
                        n.pageY || (s = e.scrollY), i.calculate_position(i.cache.active, i.get_cursor_position(n, "y") + s)
                    } else i.calculate_position(i.cache.active, i.get_cursor_position(n, "x"))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function () {
                i.remove_active_slider()
            }).on("change.fndtn.slider", function () {
                i.settings.on_change()
            }), i.S(e).on("resize.fndtn.slider", i.throttle(function () {
                i.reflow()
            }, 300))
        },
        get_cursor_position: function (t, e) {
            var i, n = "page" + e.toUpperCase(),
                s = "client" + e.toUpperCase();
            return "undefined" != typeof t[n] ? i = t[n] : "undefined" != typeof t.originalEvent[s] ? i = t.originalEvent[s] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0][s] ? i = t.originalEvent.touches[0][s] : t.currentPoint && "undefined" != typeof t.currentPoint[e] && (i = t.currentPoint[e]), i
        },
        set_active_slider: function (t) {
            this.cache.active = t
        },
        remove_active_slider: function () {
            this.cache.active = null
        },
        calculate_position: function (e, i) {
            var n = this,
                s = t.data(e[0], "settings"),
                a = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                o = t.data(e[0], "bar_o");
            requestAnimationFrame(function () {
                var t;
                t = Foundation.rtl && !s.vertical ? n.limit_to((o + a - i) / a, 0, 1) : n.limit_to((i - o) / a, 0, 1), t = s.vertical ? 1 - t : t;
                var r = n.normalized_value(t, s.start, s.end, s.step, s.precision);
                n.set_ui(e, r)
            })
        },
        set_ui: function (e, i) {
            var n = t.data(e[0], "settings"),
                s = t.data(e[0], "handle_l"),
                a = t.data(e[0], "bar_l"),
                o = this.normalized_percentage(i, n.start, n.end),
                r = o * (a - s) - 1,
                l = 100 * o,
                d = e.parent(),
                c = e.parent().children("input[type=hidden]");
            Foundation.rtl && !n.vertical && (r = -r), r = n.vertical ? -r + a - s + 1 : r, this.set_translate(e, r, n.vertical), n.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), d.attr(this.attr_name(), i).trigger("change").trigger("change.fndtn.slider"), c.val(i), n.trigger_input_change && c.trigger("change"), e[0].hasAttribute("aria-valuemin") || e.attr({
                "aria-valuemin": n.start,
                "aria-valuemax": n.end
            }), e.attr("aria-valuenow", i), "" != n.display_selector && t(n.display_selector).each(function () {
                this.hasOwnProperty("value") ? t(this).val(i) : t(this).text(i)
            })
        },
        normalized_percentage: function (t, e, i) {
            return Math.min(1, (t - e) / (i - e))
        },
        normalized_value: function (t, e, i, n, s) {
            var a = i - e,
                o = t * a,
                r = (o - o % n) / n,
                l = o % n,
                d = l >= .5 * n ? n : 0;
            return (r * n + d + e).toFixed(s)
        },
        set_translate: function (e, i, n) {
            n ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
        },
        limit_to: function (t, e, i) {
            return Math.min(Math.max(t, e), i)
        },
        initialize_settings: function (e) {
            var i, n = t.extend({}, this.settings, this.data_options(t(e).parent()));
            null === n.precision && (i = ("" + n.step).match(/\.([\d]*)/), n.precision = i && i[1] ? i[1].length : 0), n.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", n)
        },
        set_initial_position: function (e) {
            var i = t.data(e.children(".range-slider-handle")[0], "settings"),
                n = "number" != typeof i.initial || isNaN(i.initial) ? Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start : i.initial,
                s = e.children(".range-slider-handle");
            this.set_ui(s, n)
        },
        set_value: function (e) {
            var i = this;
            t("[" + i.attr_name() + "]", this.scope).each(function () {
                t(this).attr(i.attr_name(), e)
            }), t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e), i.reflow()
        },
        reflow: function () {
            var e = this;
            e.S("[" + this.attr_name() + "]").each(function () {
                var i = t(this).children(".range-slider-handle")[0],
                    n = t(this).attr(e.attr_name());
                e.initialize_settings(i), n ? e.set_ui(t(i), parseFloat(n)) : e.set_initial_position(t(this))
            })
        }
    }
}(jQuery, window, window.document),
function (t, e, i, n) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.0",
        settings: {
            active_class: "active",
            callback: function () {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function (t, i, n) {
            var s = this,
                a = this.S;
            this.bindings(i, n), this.handle_location_hash_change(), a("[" + this.attr_name() + "] > .active > a", this.scope).each(function () {
                s.default_tab_hashes.push(this.hash)
            }), s.entry_location = e.location.href
        },
        events: function () {
            var t = this,
                i = this.S,
                n = function (e) {
                    var n = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                    (!n.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(i(this).parent()))
                };
            i(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", n).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", n).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function () {
                var e = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                e.is_hover && t.toggle_active_tab(i(this).parent())
            }), i(e).on("hashchange.fndtn.tab", function (e) {
                e.preventDefault(), t.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function () {
            var e = this,
                i = this.S;
            i("[" + this.attr_name() + "]", this.scope).each(function () {
                var s = i(this).data(e.attr_name(!0) + "-init");
                if (s.deep_linking) {
                    var a;
                    if (a = s.scroll_to_content ? e.scope.location.hash : e.scope.location.hash.replace("fndtn-", ""), "" != a) {
                        var o = i(a);
                        if (o.hasClass("content") && o.parent().hasClass("tabs-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent());
                        else {
                            var r = o.closest(".content").attr("id");
                            r != n && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), a)
                        }
                    } else
                        for (var l = 0; l < e.default_tab_hashes.length; l++) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                }
            })
        },
        toggle_active_tab: function (s, a) {
            var o = this,
                r = o.S,
                l = s.closest("[" + this.attr_name() + "]"),
                d = s.find("a"),
                c = s.children("a").first(),
                h = "#" + c.attr("href").split("#")[1],
                u = r(h),
                f = s.siblings(),
                p = l.data(this.attr_name(!0) + "-init"),
                g = function (e) {
                    var n, s = t(this),
                        a = t(this).parents("li").prev().children('[role="tab"]'),
                        o = t(this).parents("li").next().children('[role="tab"]');
                    switch (e.keyCode) {
                    case 37:
                        n = a;
                        break;
                    case 39:
                        n = o;
                        break;
                    default:
                        n = !1
                    }
                    n.length && (s.attr({
                        tabindex: "-1",
                        "aria-selected": null
                    }), n.attr({
                        tabindex: "0",
                        "aria-selected": !0
                    }).focus()), t('[role="tabpanel"]').attr("aria-hidden", "true"), t("#" + t(i.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                },
                m = function (t) {
                    var i = e.location.href === o.entry_location,
                        n = p.scroll_to_content ? o.default_tab_hashes[0] : "fndtn-" + o.default_tab_hashes[0].replace("#", "");
                    i && t === n || (e.location.hash = t)
                };
            r(this).data(this.data_attr("tab-content")) && (h = "#" + r(this).data(this.data_attr("tab-content")).split("#")[1], u = r(h)), p.deep_linking && (p.scroll_to_content ? (m(a || h), a == n || a == h ? s.parent()[0].scrollIntoView() : r(h)[0].scrollIntoView()) : m(a != n ? "fndtn-" + a.replace("#", "") : "fndtn-" + h.replace("#", ""))), s.addClass(p.active_class).triggerHandler("opened"), d.attr({
                "aria-selected": "true",
                tabindex: 0
            }), f.removeClass(p.active_class), f.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), u.siblings().removeClass(p.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }), u.addClass(p.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), p.callback(s), u.triggerHandler("toggled", [s]), l.triggerHandler("toggled", [u]), d.off("keydown").on("keydown", g)
        },
        data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function () {},
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.0",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function (t, e) {
                return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function (t, e, i) {
            Foundation.inherit(this, "random_str"), this.bindings(e, i)
        },
        should_show: function (e) {
            var i = t.extend({}, this.settings, this.data_options(e));
            return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
        },
        medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function (e) {
            var i = this,
                n = i.S;
            i.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function (e) {
                var s = n(this),
                    a = t.extend({}, i.settings, i.data_options(s)),
                    o = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && n(e.target).is("a")) return !1;
                if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
                if (s.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), i.hide(s);
                else {
                    if (a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                    !a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), n(a.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(e.type) ? this.timer = setTimeout(function () {
                        i.showTip(s)
                    }.bind(this), i.settings.hover_delay) : "mouseout" === e.type || "mouseleave" === e.type ? (clearTimeout(this.timer), i.hide(s)) : i.showTip(s)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (e) {
                return /mouse/i.test(e.type) && i.ie_touch(e) ? !1 : void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? i.convert_to_touch(t(this)) : i.hide(t(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function () {
                i.hide(n(this))
            })
        },
        ie_touch: function () {
            return !1
        },
        showTip: function (t) {
            var e = this.getTip(t);
            return this.should_show(t, e) ? this.show(t) : void 0
        },
        getTip: function (e) {
            var i = this.selector(e),
                n = t.extend({}, this.settings, this.data_options(e)),
                s = null;
            return i && (s = this.S('span[data-selector="' + i + '"]' + n.tooltip_class)), "object" == typeof s ? s : !1
        },
        selector: function (t) {
            var e = t.attr("id"),
                i = t.attr(this.attr_name()) || t.attr("data-selector");
            return (e && e.length < 1 || !e) && "string" != typeof i && (i = this.random_str(6), t.attr("data-selector", i).attr("aria-describedby", i)), e && e.length > 0 ? e : i
        },
        create: function (i) {
            var n = this,
                s = t.extend({}, this.settings, this.data_options(i)),
                a = this.settings.tip_template;
            "string" == typeof s.tip_template && e.hasOwnProperty(s.tip_template) && (a = e[s.tip_template]);
            var o = t(a(this.selector(i), t("<div></div>").html(i.attr("title")).html())),
                r = this.inheritable_classes(i);
            o.addClass(r).appendTo(s.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function () {
                n.hide(i)
            })), i.removeAttr("title").attr("title", "")
        },
        reposition: function (e, i, n) {
            var s, a, o, r, l;
            if (i.css("visibility", "hidden").show(), s = e.data("width"), a = i.children(".nub"), o = a.outerHeight(), r = a.outerHeight(), i.css(this.small() ? {
                    width: "100%"
                } : {
                    width: s ? s : "auto"
                }), l = function (t, e, i, n, s) {
                    return t.css({
                        top: e ? e : "auto",
                        bottom: n ? n : "auto",
                        left: s ? s : "auto",
                        right: i ? i : "auto"
                    }).end()
                }, l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), i.addClass("tip-override"), l(a, -o, "auto", "auto", e.offset().left);
            else {
                var d = e.offset().left;
                Foundation.rtl && (a.addClass("rtl"), d = e.offset().left + e.outerWidth() - i.outerWidth()), l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", d), i.removeClass("tip-override"), n && n.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"), l(i, e.offset().top - i.outerHeight(), "auto", "auto", d).removeClass("tip-override")) : n && n.indexOf("tip-left") > -1 ? (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left - i.outerWidth() - o).removeClass("tip-override"), a.removeClass("rtl")) : n && n.indexOf("tip-right") > -1 && (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + o).removeClass("tip-override"), a.removeClass("rtl"))
            }
            i.css("visibility", "visible").hide()
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function (e) {
            var i = t.extend({}, this.settings, this.data_options(e)),
                n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes),
                s = e.attr("class"),
                a = s ? t.map(s.split(" "), function (e) {
                    return -1 !== t.inArray(e, n) ? e : void 0
                }).join(" ") : "";
            return t.trim(a)
        },
        convert_to_touch: function (e) {
            var i = this,
                n = i.getTip(e),
                s = t.extend({}, i.settings, i.data_options(e));
            0 === n.find(".tap-to-close").length && (n.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), n.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function () {
                i.hide(e)
            })), e.data("tooltip-open-event-type", "touch")
        },
        show: function (t) {
            var e = this.getTip(t);
            "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
        },
        hide: function (t) {
            var e = this.getTip(t);
            e.fadeOut(150, function () {
                e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
            })
        },
        off: function () {
            var e = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (i) {
                t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
            }).remove()
        },
        reflow: function () {}
    }
}(jQuery, window, window.document),
function (t, e, i) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.0",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function (e, i, n) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var s = this;
            s.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, n), s.S("[" + this.attr_name() + "]", this.scope).each(function () {
                {
                    var e = t(this),
                        i = e.data(s.attr_name(!0) + "-init");
                    s.S("section, .top-bar-section", this)
                }
                e.data("index", 0);
                var n = e.parent();
                n.hasClass("fixed") || s.is_sticky(e, n, i) ? (s.settings.sticky_class = i.sticky_class, s.settings.sticky_topbar = e, e.data("height", n.outerHeight()), e.data("stickyoffset", n.offset().top)) : e.data("height", e.outerHeight()), i.assembled || s.assemble(e), i.is_hover ? s.S(".has-dropdown", e).addClass("not-click") : s.S(".has-dropdown", e).removeClass("not-click"), s.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function (t, e, i) {
            var n = e.hasClass(i.sticky_class);
            return n && "all" === i.sticky_on ? !0 : n && this.small() && "small" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.medium() && "medium" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.large() && "large" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
        },
        toggle: function (i) {
            var n, s = this;
            n = i ? s.S(i).closest("[" + this.attr_name() + "]") : s.S("[" + this.attr_name() + "]");
            var a = n.data(this.attr_name(!0) + "-init"),
                o = s.S("section, .top-bar-section", n);
            s.breakpoint() && (s.rtl ? (o.css({
                right: "0%"
            }), t(">.name", o).css({
                right: "100%"
            })) : (o.css({
                left: "0%"
            }), t(">.name", o).css({
                left: "100%"
            })), s.S("li.moved", o).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), a.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (a.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), s.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : (s.is_sticky(n, n.parent(), a) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), s.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), s.update_sticky_positioning())))
        },
        timer: null,
        events: function () {
            var i = this,
                n = this.S;
            n(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (t) {
                t.preventDefault(), i.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function () {
                var e = t(this).closest("li");
                !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (e) {
                var s = n(this),
                    a = n(e.target),
                    o = s.closest("[" + i.attr_name() + "]"),
                    r = o.data(i.attr_name(!0) + "-init");
                return a.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), s.hasClass("hover") ? (s.removeClass("hover").find("li").removeClass("hover"), s.parents("li.hover").removeClass("hover")) : (s.addClass("hover"), t(s).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && e.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (t) {
                if (i.breakpoint()) {
                    t.preventDefault();
                    var e = n(this),
                        s = e.closest("[" + i.attr_name() + "]"),
                        a = s.find("section, .top-bar-section"),
                        o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                    s.data("index", s.data("index") + 1), o.addClass("moved"), i.rtl ? (a.css({
                        right: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        right: 100 * s.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        left: 100 * s.data("index") + "%"
                    })), s.css("height", e.siblings("ul").outerHeight(!0) + s.data("height"))
                }
            }), n(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function () {
                i.resize.call(i)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function () {
                n(this).trigger("resize.fndtn.topbar")
            }), n("body").off(".topbar").on("click.fndtn.topbar", function (t) {
                var e = n(t.target).closest("li").closest("li.hover");
                e.length > 0 || n("[" + i.attr_name() + "] li.hover").removeClass("hover")
            }), n(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (t) {
                t.preventDefault();
                var e = n(this),
                    s = e.closest("[" + i.attr_name() + "]"),
                    a = s.find("section, .top-bar-section"),
                    o = (s.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                    r = o.parent();
                s.data("index", s.data("index") - 1), i.rtl ? (a.css({
                    right: -(100 * s.data("index")) + "%"
                }), a.find(">.name").css({
                    right: 100 * s.data("index") + "%"
                })) : (a.css({
                    left: -(100 * s.data("index")) + "%"
                }), a.find(">.name").css({
                    left: 100 * s.data("index") + "%"
                })), 0 === s.data("index") ? s.css("height", "") : s.css("height", r.outerHeight(!0) + s.data("height")), setTimeout(function () {
                    o.removeClass("moved")
                }, 300)
            }), n(this.scope).find(".dropdown a").focus(function () {
                t(this).parents(".has-dropdown").addClass("hover")
            }).blur(function () {
                t(this).parents(".has-dropdown").removeClass("hover")
            })
        },
        resize: function () {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function () {
                var e, n = t.S(this),
                    s = n.data(t.attr_name(!0) + "-init"),
                    a = n.parent("." + t.settings.sticky_class);
                if (!t.breakpoint()) {
                    var o = n.hasClass("expanded");
                    n.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(n)
                }
                t.is_sticky(n, a, s) && (a.hasClass("fixed") ? (a.removeClass("fixed"), e = a.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= n.data("height")), n.data("stickyoffset", e), a.addClass("fixed")) : (e = a.offset().top, n.data("stickyoffset", e)))
            })
        },
        breakpoint: function () {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function (e) {
            var i = this,
                n = e.data(this.attr_name(!0) + "-init"),
                s = i.S("section, .top-bar-section", e);
            s.detach(), i.S(".has-dropdown>a", s).each(function () {
                var e, s = i.S(this),
                    a = s.siblings(".dropdown"),
                    o = s.attr("href");
                a.find(".title.back").length || (e = t(1 == n.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small-only"><a class="parent-link js-generated" href="' + o + '">' + s.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == n.custom_back_text ? n.back_text : "&laquo; " + s.html()), a.prepend(e))
            }), s.appendTo(e), this.sticky(), this.assembled(e)
        },
        assembled: function (e) {
            e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function (e) {
            var i = 0,
                n = this;
            return t("> li", e).each(function () {
                i += n.S(this).outerHeight(!0)
            }), i
        },
        sticky: function () {
            var t = this;
            this.S(e).on("scroll", function () {
                t.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function () {
            var t = "." + this.settings.sticky_class,
                i = this.S(e),
                n = this;
            if (n.settings.sticky_topbar && n.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var s = this.settings.sticky_topbar.data("stickyoffset");
                n.S(t).hasClass("expanded") || (i.scrollTop() > s ? n.S(t).hasClass("fixed") || (n.S(t).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= s && n.S(t).hasClass("fixed") && (n.S(t).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function () {
            this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
        },
        reflow: function () {}
    }
};
var imgLiquid = imgLiquid || {
    VER: "0.9.944"
};
imgLiquid.bgs_Available = !1, imgLiquid.bgs_CheckRunned = !1, imgLiquid.injectCss = ".imgLiquid img {visibility:hidden}",
    function (t) {
        function e() {
            if (!imgLiquid.bgs_CheckRunned) {
                imgLiquid.bgs_CheckRunned = !0;
                var e = t('<span style="background-size:cover" />');
                t("body").append(e), ! function () {
                    var t = e[0];
                    if (t && window.getComputedStyle) {
                        var i = window.getComputedStyle(t, null);
                        i && i.backgroundSize && (imgLiquid.bgs_Available = "cover" === i.backgroundSize)
                    }
                }(), e.remove()
            }
        }
        t.fn.extend({
            imgLiquid: function (i) {
                this.defaults = {
                    fill: !0,
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    useBackgroundSize: !0,
                    useDataHtmlAttr: !0,
                    responsive: !0,
                    delay: 0,
                    fadeInTime: 0,
                    removeBoxBackground: !0,
                    hardPixels: !0,
                    responsiveCheckTime: 500,
                    timecheckvisibility: 500,
                    onStart: null,
                    onFinish: null,
                    onItemStart: null,
                    onItemFinish: null,
                    onItemError: null
                }, e();
                var n = this;
                return this.options = i, this.settings = t.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (e) {
                    function i() {
                        -1 === h.css("background-image").indexOf(encodeURI(u.attr("src"))) && h.css({
                            "background-image": 'url("' + encodeURI(u.attr("src")) + '")'
                        }), h.css({
                            "background-size": c.fill ? "cover" : "contain",
                            "background-position": (c.horizontalAlign + " " + c.verticalAlign).toLowerCase(),
                            "background-repeat": "no-repeat"
                        }), t("a:first", h).css({
                            display: "block",
                            width: "100%",
                            height: "100%"
                        }), t("img", h).css({
                            display: "none"
                        }), c.onItemFinish && c.onItemFinish(e, h, u), h.addClass("imgLiquid_bgSize"), h.addClass("imgLiquid_ready"), d()
                    }

                    function s() {
                        function i() {
                            u.data("imgLiquid_error") || u.data("imgLiquid_loaded") || u.data("imgLiquid_oldProcessed") || (h.is(":visible") && u[0].complete && u[0].width > 0 && u[0].height > 0 ? (u.data("imgLiquid_loaded", !0), setTimeout(l, e * c.delay)) : setTimeout(i, c.timecheckvisibility))
                        }
                        if (u.data("oldSrc") && u.data("oldSrc") !== u.attr("src")) {
                            var n = u.clone().removeAttr("style");
                            return n.data("imgLiquid_settings", u.data("imgLiquid_settings")), u.parent().prepend(n), u.remove(), u = n, u[0].width = 0, void setTimeout(s, 10)
                        }
                        return u.data("imgLiquid_oldProcessed") ? void l() : (u.data("imgLiquid_oldProcessed", !1), u.data("oldSrc", u.attr("src")), t("img:not(:first)", h).css("display", "none"), h.css({
                            overflow: "hidden"
                        }), u.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
                            visibility: "visible",
                            "max-width": "none",
                            "max-height": "none",
                            width: "auto",
                            height: "auto",
                            display: "block"
                        }), u.on("error", o), u[0].onerror = o, i(), void a())
                    }

                    function a() {
                        (c.responsive || u.data("imgLiquid_oldProcessed")) && u.data("imgLiquid_settings") && (c = u.data("imgLiquid_settings"), h.actualSize = h.get(0).offsetWidth + h.get(0).offsetHeight / 1e4, h.sizeOld && h.actualSize !== h.sizeOld && l(), h.sizeOld = h.actualSize, setTimeout(a, c.responsiveCheckTime))
                    }

                    function o() {
                        u.data("imgLiquid_error", !0), h.addClass("imgLiquid_error"), c.onItemError && c.onItemError(e, h, u), d()
                    }

                    function r() {
                        var t = {};
                        if (n.settings.useDataHtmlAttr) {
                            var e = h.attr("data-imgLiquid-fill"),
                                i = h.attr("data-imgLiquid-horizontalAlign"),
                                s = h.attr("data-imgLiquid-verticalAlign");
                            ("true" === e || "false" === e) && (t.fill = Boolean("true" === e)), void 0 === i || "left" !== i && "center" !== i && "right" !== i && -1 === i.indexOf("%") || (t.horizontalAlign = i), void 0 === s || "top" !== s && "bottom" !== s && "center" !== s && -1 === s.indexOf("%") || (t.verticalAlign = s)
                        }
                        return imgLiquid.isIE && n.settings.ieFadeInDisabled && (t.fadeInTime = 0), t
                    }

                    function l() {
                        var t, i, n, s, a, o, r, l, f = 0,
                            p = 0,
                            g = h.width(),
                            m = h.height();
                        void 0 === u.data("owidth") && u.data("owidth", u[0].width), void 0 === u.data("oheight") && u.data("oheight", u[0].height), c.fill === g / m >= u.data("owidth") / u.data("oheight") ? (t = "100%", i = "auto", n = Math.floor(g), s = Math.floor(g * (u.data("oheight") / u.data("owidth")))) : (t = "auto", i = "100%", n = Math.floor(m * (u.data("owidth") / u.data("oheight"))), s = Math.floor(m)), a = c.horizontalAlign.toLowerCase(), r = g - n, "left" === a && (p = 0), "center" === a && (p = .5 * r), "right" === a && (p = r), -1 !== a.indexOf("%") && (a = parseInt(a.replace("%", ""), 10), a > 0 && (p = r * a * .01)), o = c.verticalAlign.toLowerCase(), l = m - s, "top" === o && (f = 0), "center" === o && (f = .5 * l), "bottom" === o && (f = l), -1 !== o.indexOf("%") && (o = parseInt(o.replace("%", ""), 10), o > 0 && (f = l * o * .01)), c.hardPixels && (t = n, i = s), u.css({
                            width: t,
                            height: i,
                            "margin-left": Math.floor(p),
                            "margin-top": Math.floor(f)
                        }), u.data("imgLiquid_oldProcessed") || (u.fadeTo(c.fadeInTime, 1), u.data("imgLiquid_oldProcessed", !0), c.removeBoxBackground && h.css("background-image", "none"), h.addClass("imgLiquid_nobgSize"), h.addClass("imgLiquid_ready")), c.onItemFinish && c.onItemFinish(e, h, u), d()
                    }

                    function d() {
                        e === n.length - 1 && n.settings.onFinish && n.settings.onFinish()
                    }
                    var c = n.settings,
                        h = t(this),
                        u = t("img:first", h);
                    return u.length ? (u.data("imgLiquid_settings") ? (h.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"), c = t.extend({}, u.data("imgLiquid_settings"), n.options)) : c = t.extend({}, n.settings, r()), u.data("imgLiquid_settings", c), c.onItemStart && c.onItemStart(e, h, u), void(imgLiquid.bgs_Available && c.useBackgroundSize ? i() : s())) : void o()
                })
            }
        })
    }(jQuery), ! function () {
        var t = imgLiquid.injectCss,
            e = document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), e.appendChild(i)
    }(),
    function () {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            s = this,
            a = s.EventEmitter;
        n.getListeners = function (t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function (t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function (t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function (t, i) {
            var n, s = this.getListenersAsObject(t),
                a = "object" == typeof i;
            for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(a ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
            return this.getListeners(t), this
        }, n.defineEvents = function (t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function (t, i) {
            var n, s, a = this.getListenersAsObject(t);
            for (s in a) a.hasOwnProperty(s) && (n = e(a[s], i), -1 !== n && a[s].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function (t, e, i) {
            var n, s, a = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) a.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? a.call(this, n, s) : o.call(this, n, s));
            return this
        }, n.removeEvent = function (t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
            var i, n, s, a, o = this.getListenersAsObject(t);
            for (s in o)
                if (o.hasOwnProperty(s))
                    for (n = o[s].length; n--;) i = o[s][n], i.once === !0 && this.removeListener(t, i.listener), a = i.listener.apply(this, e || []), a === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return s.EventEmitter = a, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function (t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener ? n = function (t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function (t, i, n) {
            t[i + n] = n.handleEvent ? function () {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function () {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var s = function () {};
        i.removeEventListener ? s = function (t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (s = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var a = {
            bind: n,
            unbind: s
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", a) : t.eventie = a
    }(this),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function (t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function s(t) {
            return "[object Array]" === u.call(t)
        }

        function a(t) {
            var e = [];
            if (s(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, i) {
            if (!(this instanceof o)) return new o(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = a(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), d && (this.jqDeferred = new d.Deferred);
            var s = this;
            setTimeout(function () {
                s.check()
            })
        }

        function r(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var d = t.jQuery,
            c = t.console,
            h = "undefined" != typeof c,
            u = Object.prototype.toString;
        o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var s = i.querySelectorAll("img"), a = 0, o = s.length; o > a; a++) {
                        var r = s[a];
                        this.addImage(r)
                    }
            }
        }, o.prototype.addImage = function (t) {
            var e = new r(t);
            this.images.push(e)
        }, o.prototype.check = function () {
            function t(t, s) {
                return e.options.debug && h && c.log("confirm", t, s), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var s = 0; n > s; s++) {
                var a = this.images[s];
                a.on("confirm", t), a.check()
            }
        }, o.prototype.progress = function (t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function () {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, o.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function () {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, d && (d.fn.imagesLoaded = function (t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(d(this))
        }), r.prototype = new e, r.prototype.check = function () {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function (t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, r.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function () {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function (t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function (t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function (t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function (t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, o
    }), window.Modernizr = function (t, e, i) {
        function n(t) {
            _.cssText = t
        }

        function s(t, e) {
            return typeof t === e
        }

        function a(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function o(t, e) {
            for (var n in t) {
                var s = t[n];
                if (!a(s, "-") && _[s] !== i) return "pfx" == e ? s : !0
            }
            return !1
        }

        function r(t, e, n) {
            for (var a in t) {
                var o = e[t[a]];
                if (o !== i) return n === !1 ? t[a] : s(o, "function") ? o.bind(n || e) : o
            }
            return !1
        }

        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                a = (t + " " + x.join(n + " ") + n).split(" ");
            return s(e, "string") || s(e, "undefined") ? o(a, e) : (a = (t + " " + w.join(n + " ") + n).split(" "), r(a, e, i))
        }
        var d, c, h, u = "2.6.2",
            f = {},
            p = !0,
            g = e.documentElement,
            m = "modernizr",
            v = e.createElement(m),
            _ = v.style,
            b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            y = "Webkit Moz O ms",
            x = y.split(" "),
            w = y.toLowerCase().split(" "),
            C = {},
            S = [],
            k = S.slice,
            F = function (t, i, n, s) {
                var a, o, r, l, d = e.createElement("div"),
                    c = e.body,
                    h = c || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) r = e.createElement("div"), r.id = s ? s[n] : m + (n + 1), d.appendChild(r);
                return a = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), d.id = m, (c ? d : h).innerHTML += a, h.appendChild(d), c || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), o = i(d, t), c ? d.parentNode.removeChild(d) : (h.parentNode.removeChild(h), g.style.overflow = l), !!o
            },
            T = {}.hasOwnProperty;
        h = s(T, "undefined") || s(T.call, "undefined") ? function (t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return T.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = k.call(arguments, 1),
                n = function () {
                    if (this instanceof n) {
                        var s = function () {};
                        s.prototype = e.prototype;
                        var a = new s,
                            o = e.apply(a, i.concat(k.call(arguments)));
                        return Object(o) === o ? o : a
                    }
                    return e.apply(t, i.concat(k.call(arguments)))
                };
            return n
        }), C.csstransforms = function () {
            return !!l("transform")
        }, C.csstransforms3d = function () {
            var t = !!l("perspective");
            return t && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, C.csstransitions = function () {
            return l("transition")
        };
        for (var A in C) h(C, A) && (c = A.toLowerCase(), f[c] = C[A](), S.push((f[c] ? "" : "no-") + c));
        return f.addTest = function (t, e) {
            if ("object" == typeof t)
                for (var n in t) h(t, n) && f.addTest(n, t[n]);
            else {
                if (t = t.toLowerCase(), f[t] !== i) return f;
                e = "function" == typeof e ? e() : e, "undefined" != typeof p && p && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
            }
            return f
        }, n(""), v = d = null, f._version = u, f._prefixes = b, f._domPrefixes = w, f._cssomPrefixes = x, f.testProp = function (t) {
            return o([t])
        }, f.testAllProps = l, f.testStyles = F, f.prefixed = function (t, e, i) {
            return e ? l(t, e, i) : l(t, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + S.join(" ") : ""), f
    }(this, this.document),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(window.jQuery, window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
    }(function (t, e, i) {
        "use strict";

        function n(t) {
            return t ? t.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-") : ""
        }

        function s(e, i, n) {
            var s, a, o, r = null,
                l = 0;
            n = n || {};
            var d = function () {
                l = n.leading === !1 ? 0 : t.now(), r = null, o = e.apply(s, a), s = a = null
            };
            return function () {
                var c = t.now();
                l || n.leading !== !1 || (l = c);
                var h = i - (c - l);
                return s = this, a = arguments, 0 >= h || h > i ? (clearTimeout(r), r = null, l = c, o = e.apply(s, a), s = a = null) : r || n.trailing === !1 || (r = setTimeout(d, h)), o
            }
        }

        function a(t, e, i) {
            for (var n = 0, s = t.length; s > n; n++)
                if (e.call(i, t[n], n, t) === {}) return
        }

        function o(e, i, n) {
            return setTimeout(t.proxy(e, i), n)
        }

        function r(t) {
            return Math.max.apply(Math, t)
        }

        function l(t) {
            return Math.min.apply(Math, t)
        }

        function d(e) {
            return t.isNumeric(e) ? e : 0
        }

        function c(t) {
            var e, i, n = t.length;
            if (!n) return t;
            for (; --n;) i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e;
            return t
        }
        if ("object" != typeof e) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
        var h = e.prefixed("transition"),
            u = e.prefixed("transitionDelay"),
            f = e.prefixed("transitionDuration"),
            p = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[h],
            g = e.prefixed("transform"),
            m = n(g),
            v = e.csstransforms && e.csstransitions,
            _ = e.csstransforms3d,
            b = "shuffle",
            y = .3,
            x = "all",
            w = "groups",
            C = 1,
            S = .001,
            k = function (t, e) {
                this.x = d(t), this.y = d(e)
            };
        k.equals = function (t, e) {
            return t.x === e.x && t.y === e.y
        };
        var F = 0,
            T = t(window),
            A = function (e, i) {
                i = i || {}, t.extend(this, A.options, i, A.settings), this.$el = t(e), this.element = e, this.unique = "shuffle_" + F++, this._fire(A.EventType.LOADING), this._init(), o(function () {
                    this.initialized = !0, this._fire(A.EventType.DONE)
                }, this, 16)
            };
        return A.EventType = {
            LOADING: "loading",
            DONE: "done",
            LAYOUT: "layout",
            REMOVED: "removed"
        }, A.ClassName = {
            BASE: b,
            SHUFFLE_ITEM: "shuffle-item",
            FILTERED: "filtered",
            CONCEALED: "concealed"
        }, A.options = {
            group: x,
            speed: 250,
            easing: "ease-out",
            itemSelector: "",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimeter: null,
            buffer: 0,
            initialSort: null,
            throttle: s,
            throttleTime: 300,
            sequentialFadeDelay: 150,
            supported: v
        }, A.settings = {
            useSizer: !1,
            itemCss: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible"
            },
            revealAppendedDelay: 300,
            lastSort: {},
            lastFilter: x,
            enabled: !0,
            destroyed: !1,
            initialized: !1,
            _animations: [],
            styleQueue: []
        }, A.Point = k, A._getItemTransformString = function (t, e) {
            return _ ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
        }, A._getNumberStyle = function (e, i) {
            return A._getFloat(t(e).css(i))
        }, A._getInt = function (t) {
            return d(parseInt(t, 10))
        }, A._getFloat = function (t) {
            return d(parseFloat(t))
        }, A._getOuterWidth = function (t, e) {
            var i = t.offsetWidth;
            if (e) {
                var n = A._getNumberStyle(t, "marginLeft"),
                    s = A._getNumberStyle(t, "marginRight");
                i += n + s
            }
            return i
        }, A._getOuterHeight = function (t, e) {
            var i = t.offsetHeight;
            if (e) {
                var n = A._getNumberStyle(t, "marginTop"),
                    s = A._getNumberStyle(t, "marginBottom");
                i += n + s
            }
            return i
        }, A._skipTransition = function (t, e, i) {
            var n = t.style[f];
            t.style[f] = "0ms", e.call(i);
            var s = t.offsetWidth;
            s = null, t.style[f] = n
        }, A.prototype._init = function () {
            this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(A.ClassName.BASE), this._initItems(), T.on("resize." + b + "." + this.unique, this._getResizeFunction());
            var t = this.$el.css(["position", "overflow"]),
                e = A._getOuterWidth(this.element);
            this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && o(function () {
                this._setTransitions(), this.element.style[h] = "height " + this.speed + "ms " + this.easing
            }, this)
        }, A.prototype._getResizeFunction = function () {
            var e = t.proxy(this._onResize, this);
            return this.throttle ? this.throttle(e, this.throttleTime) : e
        }, A.prototype._getElementOption = function (t) {
            return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
        }, A.prototype._validateStyles = function (t) {
            "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
        }, A.prototype._filter = function (t, e) {
            t = t || this.lastFilter, e = e || this.$items;
            var i = this._getFilteredSets(t, e);
            return this._toggleFilterClasses(i.filtered, i.concealed), this.lastFilter = t, "string" == typeof t && (this.group = t), i.filtered
        }, A.prototype._getFilteredSets = function (e, i) {
            var n = t(),
                s = t();
            return e === x ? n = i : a(i, function (i) {
                var a = t(i);
                this._doesPassFilter(e, a) ? n = n.add(a) : s = s.add(a)
            }, this), {
                filtered: n,
                concealed: s
            }
        }, A.prototype._doesPassFilter = function (e, i) {
            if (t.isFunction(e)) return e.call(i[0], i, this);
            var n = i.data(w),
                s = this.delimeter && !t.isArray(n) ? n.split(this.delimeter) : n;
            return t.inArray(e, s) > -1
        }, A.prototype._toggleFilterClasses = function (t, e) {
            t.removeClass(A.ClassName.CONCEALED).addClass(A.ClassName.FILTERED), e.removeClass(A.ClassName.FILTERED).addClass(A.ClassName.CONCEALED)
        }, A.prototype._initItems = function (t) {
            t = t || this.$items, t.addClass([A.ClassName.SHUFFLE_ITEM, A.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new k).data("scale", C)
        }, A.prototype._updateItemCount = function () {
            this.visibleItems = this._getFilteredItems().length
        }, A.prototype._setTransition = function (t) {
            t.style[h] = m + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        }, A.prototype._setTransitions = function (t) {
            t = t || this.$items, a(t, function (t) {
                this._setTransition(t)
            }, this)
        }, A.prototype._setSequentialDelay = function (t) {
            this.supported && a(t, function (t, e) {
                t.style[u] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
            }, this)
        }, A.prototype._getItems = function () {
            return this.$el.children(this.itemSelector)
        }, A.prototype._getFilteredItems = function () {
            return this.$items.filter("." + A.ClassName.FILTERED)
        }, A.prototype._getConcealedItems = function () {
            return this.$items.filter("." + A.ClassName.CONCEALED)
        }, A.prototype._getColumnSize = function (e, i) {
            var n;
            return n = t.isFunction(this.columnWidth) ? this.columnWidth(e) : this.useSizer ? A._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? A._getOuterWidth(this.$items[0], !0) : e, 0 === n && (n = e), n + i
        }, A.prototype._getGutterSize = function (e) {
            var i;
            return i = t.isFunction(this.gutterWidth) ? this.gutterWidth(e) : this.useSizer ? A._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
        }, A.prototype._setColumns = function (t) {
            var e = t || A._getOuterWidth(this.element),
                i = this._getGutterSize(e),
                n = this._getColumnSize(e, i),
                s = (e + i) / n;
            Math.abs(Math.round(s) - s) < y && (s = Math.round(s)), this.cols = Math.max(Math.floor(s), 1), this.containerWidth = e, this.colWidth = n
        }, A.prototype._setContainerSize = function () {
            this.$el.css("height", this._getContainerSize())
        }, A.prototype._getContainerSize = function () {
            return r(this.positions)
        }, A.prototype._fire = function (t, e) {
            this.$el.trigger(t + "." + b, e && e.length ? e : [this])
        }, A.prototype._resetCols = function () {
            var t = this.cols;
            for (this.positions = []; t--;) this.positions.push(0)
        }, A.prototype._layout = function (t, e) {
            a(t, function (t) {
                this._layoutItem(t, !!e)
            }, this), this._processStyleQueue(), this._setContainerSize()
        }, A.prototype._layoutItem = function (e, i) {
            var n = t(e),
                s = n.data(),
                a = s.point,
                o = s.scale,
                r = {
                    width: A._getOuterWidth(e, !0),
                    height: A._getOuterHeight(e, !0)
                },
                l = this._getItemPosition(r);
            k.equals(a, l) && o === C || (s.point = l, s.scale = C, this.styleQueue.push({
                $item: n,
                point: l,
                scale: C,
                opacity: i ? 0 : 1,
                skipTransition: i,
                callfront: function () {
                    i || n.css("visibility", "visible")
                },
                callback: function () {
                    i && n.css("visibility", "hidden")
                }
            }))
        }, A.prototype._getItemPosition = function (t) {
            for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), i = this._getColumnSet(e, this.cols), n = this._getShortColumn(i, this.buffer), s = new k(Math.round(this.colWidth * n), Math.round(i[n])), a = i[n] + t.height, o = this.cols + 1 - i.length, r = 0; o > r; r++) this.positions[n + r] = a;
            return s
        }, A.prototype._getColumnSpan = function (t, e, i) {
            var n = t / e;
            return Math.abs(Math.round(n) - n) < y && (n = Math.round(n)), Math.min(Math.ceil(n), i)
        }, A.prototype._getColumnSet = function (t, e) {
            if (1 === t) return this.positions;
            for (var i = e + 1 - t, n = [], s = 0; i > s; s++) n[s] = r(this.positions.slice(s, s + t));
            return n
        }, A.prototype._getShortColumn = function (t, e) {
            for (var i = l(t), n = 0, s = t.length; s > n; n++)
                if (t[n] >= i - e && t[n] <= i + e) return n;
            return 0
        }, A.prototype._shrink = function (e) {
            var i = e || this._getConcealedItems();
            a(i, function (e) {
                var i = t(e),
                    n = i.data();
                n.scale !== S && (n.scale = S, this.styleQueue.push({
                    $item: i,
                    point: n.point,
                    scale: S,
                    opacity: 0,
                    callback: function () {
                        i.css("visibility", "hidden")
                    }
                }))
            }, this)
        }, A.prototype._onResize = function () {
            if (this.enabled && !this.destroyed && !this.isTransitioning) {
                var t = A._getOuterWidth(this.element);
                t !== this.containerWidth && this.update()
            }
        }, A.prototype._getStylesForTransition = function (t) {
            var e = {
                opacity: t.opacity
            };
            return this.supported ? e[g] = A._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
        }, A.prototype._transition = function (e) {
            var i = this._getStylesForTransition(e);
            this._startItemAnimation(e.$item, i, e.callfront || t.noop, e.callback || t.noop)
        }, A.prototype._startItemAnimation = function (e, i, n, s) {
            function a(e) {
                e.target === e.currentTarget && (t(e.target).off(p, a), s())
            }
            if (n(), !this.initialized) return e.css(i), void s();
            if (this.supported) e.css(i), e.on(p, a);
            else {
                var o = e.stop(!0).animate(i, this.speed, "swing", s);
                this._animations.push(o.promise())
            }
        }, A.prototype._processStyleQueue = function (e) {
            var i = t();
            a(this.styleQueue, function (t) {
                t.skipTransition ? this._styleImmediately(t) : (i = i.add(t.$item), this._transition(t))
            }, this), i.length > 0 && this.initialized ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(i, p, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : e || o(this._layoutEnd, this), this.styleQueue.length = 0
        }, A.prototype._styleImmediately = function (t) {
            A._skipTransition(t.$item[0], function () {
                t.$item.css(this._getStylesForTransition(t))
            }, this)
        }, A.prototype._movementFinished = function () {
            this.isTransitioning = !1, this._layoutEnd()
        }, A.prototype._layoutEnd = function () {
            this._fire(A.EventType.LAYOUT)
        }, A.prototype._addItems = function (t, e, i) {
            this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), a(this.styleQueue, function (t) {
                t.skipTransition = !0
            }), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, i) : this.shuffle(this.lastFilter)
        }, A.prototype._addItemsToEnd = function (t, e) {
            var i = this._filter(null, t),
                n = i.get();
            this._updateItemCount(), this._layout(n, !0), e && this.supported && this._setSequentialDelay(n), this._revealAppended(n)
        }, A.prototype._revealAppended = function (e) {
            o(function () {
                a(e, function (e) {
                    var i = t(e);
                    this._transition({
                        $item: i,
                        opacity: 1,
                        point: i.data("point"),
                        scale: C
                    })
                }, this), this._whenCollectionDone(t(e), p, function () {
                    t(e).css(u, "0ms"), this._movementFinished()
                })
            }, this, this.revealAppendedDelay)
        }, A.prototype._whenCollectionDone = function (e, i, n) {
            function s(e) {
                e.target === e.currentTarget && (t(e.target).off(i, s), a++, a === o && n.call(r))
            }
            var a = 0,
                o = e.length,
                r = this;
            e.on(i, s)
        }, A.prototype._whenAnimationsDone = function (e) {
            t.when.apply(null, this._animations).always(t.proxy(function () {
                this._animations.length = 0, e.call(this)
            }, this))
        }, A.prototype.shuffle = function (t, e) {
            this.enabled && !this.isTransitioning && (t || (t = x), this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
        }, A.prototype.sort = function (t) {
            if (this.enabled && !this.isTransitioning) {
                this._resetCols();
                var e = t || this.lastSort,
                    i = this._getFilteredItems().sorted(e);
                this._layout(i), this.lastSort = e
            }
        }, A.prototype.update = function (t) {
            this.enabled && !this.isTransitioning && (t || this._setColumns(), this.sort())
        }, A.prototype.layout = function () {
            this.update(!0)
        }, A.prototype.appended = function (t, e, i) {
            this._addItems(t, e === !0, i !== !1)
        }, A.prototype.disable = function () {
            this.enabled = !1
        }, A.prototype.enable = function (t) {
            this.enabled = !0, t !== !1 && this.update()
        }, A.prototype.remove = function (e) {
            function i() {
                e.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(A.EventType.REMOVED, [e, this]), e = null
            }
            e.length && e.jquery && (this._toggleFilterClasses(t(), e), this._shrink(e), this.sort(), this.$el.one(A.EventType.LAYOUT + "." + b, t.proxy(i, this)))
        }, A.prototype.destroy = function () {
            T.off("." + this.unique), this.$el.removeClass(b).removeAttr("style").removeData(b), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([A.ClassName.CONCEALED, A.ClassName.FILTERED, A.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this.destroyed = !0
        }, t.fn.shuffle = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var n = t(this),
                    s = n.data(b);
                s ? "string" == typeof e && s[e] && s[e].apply(s, i) : (s = new A(this, e), n.data(b, s))
            })
        }, t.fn.sorted = function (e) {
            var n = t.extend({}, t.fn.sorted.defaults, e),
                s = this.get(),
                a = !1;
            return s.length ? n.randomize ? c(s) : (t.isFunction(n.by) && s.sort(function (e, s) {
                if (a) return 0;
                var o = n.by(t(e)),
                    r = n.by(t(s));
                return o === i && r === i ? (a = !0, 0) : r > o || "sortFirst" === o || "sortLast" === r ? -1 : o > r || "sortLast" === o || "sortFirst" === r ? 1 : 0
            }), a ? this.get() : (n.reverse && s.reverse(), s)) : []
        }, t.fn.sorted.defaults = {
            reverse: !1,
            by: null,
            randomize: !1
        }, A
    }),
    function (t) {
        "use strict";
        t(["jquery"], function (t) {
            function e(e) {
                return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
            }

            function i(e) {
                return t.isFunction(e) || t.isPlainObject(e) ? e : {
                    top: e,
                    left: e
                }
            }
            var n = t.scrollTo = function (e, i, n) {
                return t(window).scrollTo(e, i, n)
            };
            return n.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, t.fn.scrollTo = function (s, a, o) {
                "object" == typeof a && (o = a, a = 0), "function" == typeof o && (o = {
                    onAfter: o
                }), "max" === s && (s = 9e9), o = t.extend({}, n.defaults, o), a = a || o.duration;
                var r = o.queue && o.axis.length > 1;
                return r && (a /= 2), o.offset = i(o.offset), o.over = i(o.over), this.each(function () {
                    function l(e) {
                        var i = t.extend({}, o, {
                            queue: !0,
                            duration: a,
                            complete: e && function () {
                                e.call(h, f, o)
                            }
                        });
                        u.animate(p, i)
                    }
                    if (null !== s) {
                        var d, c = e(this),
                            h = c ? this.contentWindow || window : this,
                            u = t(h),
                            f = s,
                            p = {};
                        switch (typeof f) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                f = i(f);
                                break
                            }
                            if (f = c ? t(f) : t(f, h), !f.length) return;
                        case "object":
                            (f.is || f.style) && (d = (f = t(f)).offset())
                        }
                        var g = t.isFunction(o.offset) && o.offset(h, f) || o.offset;
                        t.each(o.axis.split(""), function (t, e) {
                            var i = "x" === e ? "Left" : "Top",
                                s = i.toLowerCase(),
                                a = "scroll" + i,
                                m = u[a](),
                                v = n.max(h, e);
                            if (d) p[a] = d[s] + (c ? 0 : m - u.offset()[s]), o.margin && (p[a] -= parseInt(f.css("margin" + i), 10) || 0, p[a] -= parseInt(f.css("border" + i + "Width"), 10) || 0), p[a] += g[s] || 0, o.over[s] && (p[a] += f["x" === e ? "width" : "height"]() * o.over[s]);
                            else {
                                var _ = f[s];
                                p[a] = _.slice && "%" === _.slice(-1) ? parseFloat(_) / 100 * v : _
                            }
                            o.limit && /^\d+$/.test(p[a]) && (p[a] = p[a] <= 0 ? 0 : Math.min(p[a], v)), !t && o.axis.length > 1 && (m === p[a] ? p = {} : r && (l(o.onAfterFirst), p = {}))
                        }), l(o.onAfter)
                    }
                })
            }, n.max = function (i, n) {
                var s = "x" === n ? "Width" : "Height",
                    a = "scroll" + s;
                if (!e(i)) return i[a] - t(i)[s.toLowerCase()]();
                var o = "client" + s,
                    r = i.ownerDocument || i.document,
                    l = r.documentElement,
                    d = r.body;
                return Math.max(l[a], d[a]) - Math.min(l[o], d[o])
            }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
                get: function (e) {
                    return t(e.elem)[e.prop]()
                },
                set: function (e) {
                    var i = this.get(e);
                    if (e.options.interrupt && e._last && e._last !== i) return t(e.elem).stop();
                    var n = Math.round(e.now);
                    i !== n && (t(e.elem)[e.prop](n), e._last = this.get(e))
                }
            }, n
        })
    }("function" == typeof define && define.amd ? define : function (t, e) {
        "use strict";
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    });
var BLOCKS = function (t) {
    "use strict";
    var e = t(".blocks"),
        i = t(".filter-options"),
        n = (e.find(".shuffle__sizer"), t("#loader")),
        s = function () {
            setTimeout(function () {
                o(), a()
            }, 100), e.on("loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle", function (t) {
                window.console && window.console.log && "function" == typeof window.console.log && console.log("Shuffle:", t.type)
            }), e.shuffle({
                itemSelector: ".hentry",
                sizer: null
            })
        },
        a = function () {
            var n = i.children();
            n.on("click", function () {
                var i = t(this),
                    n = i.hasClass("active"),
                    s = n ? "all" : i.find("a").data("group");
                n || t(".filter-options .active").removeClass("active"), i.toggleClass("active"), e.shuffle("shuffle", s)
            }), n = null
        },
        o = function () {
            var i = Foundation.utils.throttle(function () {
                e.shuffle("update")
            }, 300);
            e.find("img").each(function () {
                var s;
                this.complete && void 0 !== this.naturalWidth && (n.addClass("hide"), e.addClass("images-loaded")), s = new Image, t(s).on("load", function () {
                    t(this).off("load"), i()
                }), s.src = this.src
            }), setTimeout(function () {
                i()
            }, 500)
        };
    return {
        init: s
    }
}(jQuery);
! function (t) {
    "use strict";
    t(document).ready(function () {
        BLOCKS.init()
    })
}(jQuery),
function (t) {
    (function () {
        var e, i, n;
        i = [], n = 0, e = function () {
                function e(e) {
                    this.index = n++, this.el = e, this.compression = t(this.el).data("compression") || 10, this.minFontSize = t(this.el).data("min") || Number.NEGATIVE_INFINITY, this.maxFontSize = t(this.el).data("max") || Number.POSITIVE_INFINITY, this.scrollable = t(this.el).data("scrollable") || !1, this.scrollSpeed = t(this.el).data("scrollspeed") || 900, this.scrollReset = t(this.el).data("scrollreset") || 400, this.init()
                }
                return e.prototype.init = function () {
                    return t(this.el).wrapInner('<span class="responsiveText-wrapper" />'), this.adjustOnLoad(), this.adjustOnResize(), this.scrollable ? this.scrollOnHover() : void 0
                }, e.prototype.resizeText = function () {
                    var e, i;
                    e = t(this.el).width() / this.compression, i = Math.max(Math.min(e, this.maxFontSize), this.minFontSize)
                }, e.prototype.adjustOnLoad = function () {
                    return t(window).on("load", function () {})
                }, e.prototype.adjustOnResize = function () {
                    var e = this;
                    return t(window).on("resize", function () {
                        return clearTimeout(i[e.index]), i[e.index] = setTimeout(function () {}, 20)
                    })
                }, e.prototype.scrollOnHover = function () {
                    var e = this;
                    return t(this.el).css({
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        "white-space": "nowrap"
                    }), t(this.el).hover(function () {
                        return e.difference = e.el.scrollWidth - t(e.el).width(), e.difference > e.scrollSpeed && (e.scrollSpeed = e.difference), e.difference > 0 ? (t(e.el).css("cursor", "e-resize"), t(e.el).stop().animate({
                            "text-indent": -e.difference
                        }, e.scrollSpeed, function () {
                            return t(e.el).css("cursor", "text")
                        })) : void 0
                    }, function () {
                        return t(e.el).stop().animate({
                            "text-indent": 0
                        }, e.scrollReset)
                    })
                }, e
            }(),
            function (t) {
                var i;
                return i = [], t.fn.responsiveText = function () {
                    return this.each(function () {
                        return i.push(new e(this))
                    })
                }
            }(jQuery), t(document).ready(function () {
                return t(".responsive").not("table").responsiveText()
            })
    }).call(this)
}(jQuery),
function (t) {
    (function () {
        var e, i, n;
        i = [], n = 0, e = function () {
                function e(e) {
                    this.el = e, this.index = n++, this.text = t(this.el).text(), t(this.el).attr("data-text", this.text), this.words = this.text.trim().split(" "), this.lines = parseInt(t(this.el).attr("data-truncate")), this.truncate(), this.adjustOnResize()
                }
                return e.prototype.truncate = function () {
                    return this.measure(), this.setContent()
                }, e.prototype.reset = function () {
                    return t(this.el).text(this.text).css("max-height", "none").attr("data-truncated", "false")
                }, e.prototype.measure = function () {
                    var e;
                    for (this.reset(), t(this.el).html("."), this.singleLineHeight = t(this.el).outerHeight(), e = 1; e++ < this.lines;) t(this.el).append("<br>.");
                    return this.maxLinesHeight = t(this.el).outerHeight()
                }, e.prototype.empty = function () {
                    return t(this.el).html("")
                }, e.prototype.setContent = function () {
                    var e;
                    return this.reset(), e = !1, this.addWords(this.words.length), this.tooBig() ? (this.addNumberWordsThatFit(), t(this.el).css("max-height", this.maxLinesHeight + "px"), t(this.el).attr("data-truncated", !0)) : void 0
                }, e.prototype.addNumberWordsThatFit = function () {
                    var e, i, n;
                    for (i = this.words.length, e = 0, n = Math.floor(this.words.length / 2); e + 1 !== i;) this.addWords(e + n), this.tooBig() ? i = e + n : e += n, n = Math.floor(n / 2) || 1;
                    return this.addWords(e), t(this.el).html(this.trimTrailingPunctuation(t(this.el).html()))
                }, e.prototype.addWords = function (e) {
                    return t(this.el).html(this.words.slice(0, e).join(" "))
                }, e.prototype.tooBig = function () {
                    return t(this.el).outerHeight() > this.maxLinesHeight
                }, e.prototype.adjustOnResize = function () {
                    var e = this;
                    return t(window).on("resize", function () {
                        return clearTimeout(i[e.index]), i[e.index] = setTimeout(function () {
                            return e.truncate()
                        }, 20)
                    })
                }, e.prototype.trimTrailingPunctuation = function (t) {
                    return t.replace(/(,$)|(\.$)|(\:$)|(\;$)|(\?$)|(\!$)/g, "")
                }, e
            }(),
            function (t) {
                var i, n;
                return i = !1, n = [], t.fn.truncateLines = function () {
                    return this.each(function () {
                        return n.push(new e(this))
                    })
                }
            }(jQuery), t(window).load(function () {
                return console.log("truncating contents...."), t("[data-truncate]").truncateLines()
            })
    }).call(this)
}(jQuery),
function (t) {
    t.flexslider = function (e, i) {
        var n = t(e);
        n.vars = t.extend({}, t.flexslider.defaults, i);
        var s, a = n.vars.namespace,
            o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            r = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            l = "click touchend MSPointerUp keyup",
            d = "",
            c = "vertical" === n.vars.direction,
            h = n.vars.reverse,
            u = n.vars.itemWidth > 0,
            f = "fade" === n.vars.animation,
            p = "" !== n.vars.asNavFor,
            g = {},
            m = !0;
        t.data(e, "flexslider", n), g = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = t(n.vars.selector, n), n.container = t(n.containerSelector, n), n.count = n.slides.length, n.syncExists = t(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = c ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !f && n.vars.useCSS && function () {
                    var t = document.createElement("div"),
                        e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && g.controlNav.setup(), n.vars.directionNav && g.directionNav.setup(), n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup", function (t) {
                    var e = t.keyCode;
                    if (!n.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? n.getTarget("next") : 37 === e ? n.getTarget("prev") : !1;
                        n.flexAnimate(i, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (t, e) {
                    t.preventDefault();
                    var i = n.getTarget(0 > e ? "next" : "prev");
                    n.flexAnimate(i, n.vars.pauseOnAction)
                }), n.vars.pausePlay && g.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && g.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && g.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), p && g.asNav.setup(), r && n.vars.touch && g.touch(), (!f || f && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", g.resize), n.find("img").attr("draggable", "true"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"), o ? (e._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var i = t(this),
                                s = i.index();
                            t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < s ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function (e) {
                        e.preventDefault();
                        var i = t(this),
                            s = i.index(),
                            o = i.offset().left - t(n).scrollLeft();
                        0 >= o && i.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (n.direction = n.currentItem < s ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    n.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var e, i, s = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                        o = 1;
                    if (n.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + s + '"></ol>'), n.pagingCount > 1)
                        for (var r = 0; r < n.pagingCount; r++) {
                            if (i = n.slides.eq(r), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + o + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var c = i.attr("data-thumbcaption");
                                "" != c && void 0 != c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + e + "</li>"), o++
                        }
                    n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (e) {
                        if (e.preventDefault(), "" === d || d === e.type) {
                            var i = t(this),
                                s = n.controlNav.index(i);
                            i.hasClass(a + "active") || (n.direction = s > n.currentSlide ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction))
                        }
                        "" === d && (d = e.type), g.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    n.controlNav = n.manualControls, g.controlNav.active(), n.controlNav.bind(l, function (e) {
                        if (e.preventDefault(), "" === d || d === e.type) {
                            var i = t(this),
                                s = n.controlNav.index(i);
                            i.hasClass(a + "active") || (n.direction = s > n.currentSlide ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction))
                        }
                        "" === d && (d = e.type), g.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = t("." + a + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function () {
                    n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                },
                update: function (e, i) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(), g.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : g.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var e = t('<ul class="' + a + 'direction-nav"><li><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + a + "direction-nav li a", n)), g.directionNav.update(), n.directionNav.bind(l, function (e) {
                        e.preventDefault();
                        var i;
                        ("" === d || d === e.type) && (i = n.getTarget(t(this).hasClass(a + "next") ? "next" : "prev"), n.flexAnimate(i, n.vars.pauseOnAction)), "" === d && (d = e.type), g.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var t = a + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var e = t('<div class="' + a + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + a + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + a + "pauseplay a", n)), g.pausePlay.update(n.vars.slideshow ? a + "pause" : a + "play"), n.pausePlay.bind(l, function (e) {
                        e.preventDefault(), ("" === d || d === e.type) && (t(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === d && (d = e.type), g.setToClearWatchedEvent()
                    })
                },
                update: function (t) {
                    "play" === t ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                }
            },
            touch: function () {
                function t(t) {
                    n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), m = c ? n.h : n.w, _ = Number(new Date), y = t.touches[0].pageX, x = t.touches[0].pageY, g = u && h && n.animatingTo === n.last ? 0 : u && h ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : u && n.currentSlide === n.last ? n.limit : u ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : h ? (n.last - n.currentSlide + n.cloneOffset) * m : (n.currentSlide + n.cloneOffset) * m, d = c ? x : y, p = c ? y : x, e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", s, !1))
                }

                function i(t) {
                    y = t.touches[0].pageX, x = t.touches[0].pageY, v = c ? d - x : d - y, b = c ? Math.abs(v) < Math.abs(y - p) : Math.abs(v) < Math.abs(x - p);
                    var e = 500;
                    (!b || Number(new Date) - _ > e) && (t.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (v /= 0 === n.currentSlide && 0 > v || n.currentSlide === n.last && v > 0 ? Math.abs(v) / m + 2 : 1), n.setProps(g + v, "setTouch")))
                }

                function s() {
                    if (e.removeEventListener("touchmove", i, !1), n.animatingTo === n.currentSlide && !b && null !== v) {
                        var t = h ? -v : v,
                            a = n.getTarget(t > 0 ? "next" : "prev");
                        n.canAdvance(a) && (Number(new Date) - _ < 550 && Math.abs(t) > 50 || Math.abs(t) > m / 2) ? n.flexAnimate(a, n.vars.pauseOnAction) : f || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", s, !1), d = null, p = null, v = null, g = null
                }

                function a(t) {
                    t.stopPropagation(), n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), w = 0, m = c ? n.h : n.w, _ = Number(new Date), g = u && h && n.animatingTo === n.last ? 0 : u && h ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : u && n.currentSlide === n.last ? n.limit : u ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : h ? (n.last - n.currentSlide + n.cloneOffset) * m : (n.currentSlide + n.cloneOffset) * m)
                }

                function r(t) {
                    t.stopPropagation();
                    var i = t.target._slider;
                    if (i) {
                        var n = -t.translationX,
                            s = -t.translationY;
                        return w += c ? s : n, v = w, b = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-s), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            e._gesture.stop()
                        }) : void((!b || Number(new Date) - _ > 500) && (t.preventDefault(), !f && i.transitions && (i.vars.animationLoop || (v = w / (0 === i.currentSlide && 0 > w || i.currentSlide === i.last && w > 0 ? Math.abs(w) / m + 2 : 1)), i.setProps(g + v, "setTouch"))))
                    }
                }

                function l(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !b && null !== v) {
                            var i = h ? -v : v,
                                n = e.getTarget(i > 0 ? "next" : "prev");
                            e.canAdvance(n) && (Number(new Date) - _ < 550 && Math.abs(i) > 50 || Math.abs(i) > m / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : f || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        d = null, p = null, v = null, g = null, w = 0
                    }
                }
                var d, p, g, m, v, _, b = !1,
                    y = 0,
                    x = 0,
                    w = 0;
                o ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", a, !1), e._slider = n, e.addEventListener("MSGestureChange", r, !1), e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
            },
            resize: function () {
                !n.animating && n.is(":visible") && (u || n.doMath(), f ? g.smoothHeight() : u ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : c ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && g.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function (t) {
                if (!c || f) {
                    var e = f ? n : n.viewport;
                    t ? e.animate({
                        height: n.slides.eq(n.animatingTo).height()
                    }, t) : e.height(n.slides.eq(n.animatingTo).height())
                }
            },
            sync: function (e) {
                var i = t(n.vars.sync).data("flexslider"),
                    s = n.animatingTo;
                switch (e) {
                case "animate":
                    i.flexAnimate(s, n.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    i.playing || i.asNav || i.play();
                    break;
                case "pause":
                    i.pause()
                }
            },
            uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var t = g.pauseInvisible.getHiddenProp();
                    if (t) {
                        var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, function () {
                            g.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function () {
                    var t = g.pauseInvisible.getHiddenProp();
                    return t ? document[t] : !1
                },
                getHiddenProp: function () {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(s), s = setTimeout(function () {
                    d = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, i, s, o, l) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), p && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, l) || s) && n.is(":visible")) {
                if (p && o) {
                    var d = t(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, d.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next" : "prev", d.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && g.sync("animate"), n.vars.controlNav && g.controlNav.active(), u || n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && g.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), f) r ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(b)) : (n.slides.eq(n.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var m, v, _, b = c ? n.slides.filter(":first").height() : n.computedW;
                    u ? (m = n.vars.itemMargin, _ = (n.itemW + m) * n.move * n.animatingTo, v = _ > n.limit && 1 !== n.visible ? n.limit : _) : v = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? h ? (n.count + n.cloneOffset) * b : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? h ? 0 : (n.count + 1) * b : h ? (n.count - 1 - e + n.cloneOffset) * b : (e + n.cloneOffset) * b, n.setProps(v, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(b)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(b)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(b)
                    })
                }
                n.vars.smoothHeight && g.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (t) {
            f || u || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && m && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && g.pausePlay.update("play"), n.syncExists && g.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && g.pausePlay.update("pause"), n.syncExists && g.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (t, e) {
            var i = p ? n.pagingCount - 1 : n.last;
            return e ? !0 : p && n.currentItem === n.count - 1 && 0 === t && "prev" === n.direction ? !0 : p && 0 === n.currentItem && t === n.pagingCount - 1 && "next" !== n.direction ? !1 : t !== n.currentSlide || p ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && t === i && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === i && 0 === t && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function (t) {
            return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (t, e, i) {
            var s = function () {
                var i = t ? t : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                    s = function () {
                        if (u) return "setTouch" === e ? t : h && n.animatingTo === n.last ? 0 : h ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                        switch (e) {
                        case "setTotal":
                            return h ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                        case "setTouch":
                            return h ? t : t;
                        case "jumpEnd":
                            return h ? t : n.count * t;
                        case "jumpStart":
                            return h ? n.count * t : t;
                        default:
                            return t
                        }
                    }();
                return -1 * s + "px"
            }();
            n.transitions && (s = c ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = s, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", s)
        }, n.setup = function (e) {
            if (f) n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && g.smoothHeight();
            else {
                var i, s;
                "init" === e && (n.viewport = t('<div class="' + a + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, h && (s = t.makeArray(n.slides).reverse(), n.slides = t(s), n.container.empty().append(n.slides))), n.vars.animationLoop && !u && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(g.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = t(n.vars.selector, n), i = h ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, c && !u ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(i * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && g.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            u || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var t = n.slides.first(),
                e = n.vars.itemMargin,
                i = n.vars.minItems,
                s = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), u ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = s ? s * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (s - 1)) / s : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function (t, e) {
            n.doMath(), u || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !u || n.pagingCount > n.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !u || n.pagingCount < n.controlNav.length) && (u && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), g.controlNav.update("remove", n.last))), n.vars.directionNav && g.directionNav.update()
        }, n.addSlide = function (e, i) {
            var s = t(e);
            n.count += 1, n.last = n.count - 1, c && h ? void 0 !== i ? n.slides.eq(n.count - i).after(s) : n.container.prepend(s) : void 0 !== i ? n.slides.eq(i).before(s) : n.container.append(s), n.update(i, "add"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var i = isNaN(e) ? n.slides.index(t(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? t(e, n.slides).remove() : c && h ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(i, "remove"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, g.init()
    }, t(window).blur(function () {
        focused = !1
    }).focus(function () {
        focused = !0
    }), t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    }, t.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
            var i = t(this),
                n = e.selector ? e.selector : ".slides > li",
                s = i.find(n);
            1 === s.length && e.allowOneSlide === !0 || 0 === s.length ? (s.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
        });
        var i = t(this).data("flexslider");
        switch (e) {
        case "play":
            i.play();
            break;
        case "pause":
            i.pause();
            break;
        case "stop":
            i.stop();
            break;
        case "next":
            i.flexAnimate(i.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            i.flexAnimate(i.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof e && i.flexAnimate(e, !0)
        }
    }
}(jQuery),
function (t) {
    var e = t(window),
        i = e.height();
    e.resize(function () {
        i = e.height()
    }), t.fn.dondo_parallax = function (n, s, a) {
        function o() {
            d.each(function () {
                l = d.offset().top
            }), r = a ? function (t) {
                return t.outerHeight(!0)
            } : function (t) {
                return t.height()
            }, (arguments.length < 1 || null === n) && (n = "50%"), (arguments.length < 2 || null === s) && (s = .5), (arguments.length < 3 || null === a) && (a = !0);
            var o = e.scrollTop();
            d.each(function () {
                var e = t(this),
                    a = e.offset().top,
                    c = r(e);
                o > a + c || a > o + i || (console.log(l + " - " + o + " - " + s), d.css("backgroundPosition", n + " " + Math.round(-o * s) + "px"), d.css("backgroundAttachment", "fixed"))
            })
        }
        var r, l, d = t(this);
        e.bind("scroll", o).resize(o), o()
    }
}(jQuery),
function (t) {
    "use strict";
	
	
	/*t('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		t('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
  */
	  
  
    function e() {
        var e = t(window).scrollTop();
        e > i ? s.stop(!0, !0).slideDown(n) : i >= e && s.stop(!0, !0).slideUp(n)
    }
    var i = 200,
        n = 500,
        s = t(".scroll-top");
    t(window).scroll(e), e(), s.bind("touchstart click", function () {
        return t("html, body").scrollTo(0, 1e3), !1
    }), t(".menu-item-filter").bind("touchstart click", function () {
        t(this).hasClass("user") && (t("#tdf-login-form").css("display", "block"), t("#tdf-woo-cart").css("display", "none")), t(this).hasClass("cart") && (t("#tdf-login-form").css("display", "none"), t("#tdf-woo-cart").css("display", "block"))
    }), t("a[href*=#]:not([href=#])").bind("touchstart click", function () {
        if (!t(this).parents(".woocommerce-tabs:eq(0)").length && location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = t(this.hash);
            if (e = e.length ? e : t("[name=" + this.hash.slice(1) + "]"), e.length) return t("html,body").stop(!0, !0).animate({
                scrollTop: e.offset().top
            }, 1600), !1
        }
    }), t(".tdf .off-canvas-wrap .widget .menu-item-has-children a").length > 0 && t(".tdf .off-canvas-wrap .widget .menu-item-has-children a").bind("touchstart click", function () {
        return t(this).parent().hasClass("sub-menu-open") ? (t(this).parent().removeClass("sub-menu-open"), t(this).parent().find(">.sub-menu").removeClass("animate fadeIn").css({
            display: "none"
        })) : (t(this).parent().addClass("sub-menu-open"), t(this).parent().find(">.sub-menu").addClass("animate fadeIn").css({
            display: "block"
        })), !1
    }), t(document).ready(function () {
        t(".panel").length > 0 && t(".panel").addClass("animated fadeIn"), t('a[rel^="dondo_prettyPhoto"]').length > 0 && t('a[rel^="dondo_prettyPhoto"]').prettyPhoto({
            animationSpeed: "normal",
            theme: "pp_default",
            opacity: .8,
            showTitle: !1,
            deeplinking: !1,
            horizontal_padding: 20,
            social_tools: !1
        }), t(".tdf-featured-media .gallery").length > 0 && t(".tdf-featured-media .gallery").parent(".item-wrap").find(".content-loader").removeClass("hide"), t(".no-contextmenu img").bind("contextmenu", function () {
            return !1
        }), t(".no-contextmenu div").bind("contextmenu", function () {
            return "none" != t(this).css("background-image") ? !1 : !0
        }), t(".imgLiquidFill").length > 0 && t(".imgLiquidFill").imgLiquid({
            fill: !0,
            verticalAlign: "top",
            horizontalAlign: "center"
        }), t(".imgLiquidFill").length > 0 && t(window).width() > 1024 && t(".tdf-featured-media.featured-image .imgLiquidFill, .tdf-featured-media.header-image .imgLiquidFill").dondo_parallax("50%", .1), t(".menu li").each(function (e, i) {
            var n = t(i);
            if (n.attr("class")) {
                var s = n.attr("class").split(" ")[0];
                console.log(s), 0 === s.indexOf("fa") && (n.children("a").find(".fa-menu").addClass(s).removeClass("fa-menu fa-square"), n.removeClass(s))
            }
        });
        var e = t(".icon-light");
        e.on("touchstart click", Foundation.utils.debounce(function (i) {
            t(".post-thumbnail .feature-overlay").length > 0 && (t(".post-thumbnail .feature-overlay").hasClass("dark") ? (t(".post-thumbnail .feature-overlay").removeClass("dark"), e.find(".icon").removeClass("fa-sun-o").addClass("fa-moon-o")) : (t(".post-thumbnail .feature-overlay").addClass("dark"), e.find(".icon").removeClass("fa-moon-o").addClass("fa-sun-o"))), i.preventDefault()
        }, 300, !0)), t(window).on("load resize", function () {
            t(".content-excerpts").length > 0;
            var e = t("#site-footer"),
                i = t("#page").height(),
                n = t(window).height();
            n -= e.height(), n > i && e.addClass("sticky");
            var s = t("#masthead.fix-header").height();
            /*
            t("#masthead.fix-header").next().hasClass("tdf-featured-media") || t("#masthead.fix-header").length > 0 && t("#masthead.fix-header").next().css({
                "margin-top": s
            }), t("#masthead.fix-header").next().hasClass("tdf-featured-media") && t("#masthead.fix-header").length > 0 && t("#masthead.fix-header").next().css({
                "margin-top": -s
            })*/
        })
        /*t(window).on("load scroll", Foundation.utils.throttle(function () {
            t(window).scrollTop() >= t("#masthead").outerHeight(!0) && t("#masthead").addClass("animated fadeInDown fixed"), t(window).scrollTop() < t("#masthead").outerHeight(!0) && t("#masthead").removeClass(t("#masthead").hasClass("fix-header") ? "animated fadeInDown" : "animated fadeInDown fixed")
        }, 300))*/
    }), t(window).on("load", Foundation.utils.debounce(function () {
        if (t("#page-loader").length > 0 && t("#page-loader").addClass("animated fadeUp").delay(300).remove(), t("#loader").length > 0 && t("#loader").addClass("animated fadeOut"), t(".tdf-featured-media .gallery").length > 0 && (t(".tdf-featured-media .gallery").parent(".item-wrap").find(".content-loader").addClass("hide"), t(".tdf-flexslider").flexslider({
                animation: "fade",
                controlNav: !1,
                prevText: "",
                nextText: "",
                touch: !0
            })), t(".right-single .page-header").length > 0 && !t(".right-single .page-header").parent().hasClass("tdf-featured-media")) {
            var e = t(".right-single .page-header").height();
            console.log(e)
        }
        if (t(".right-single .entry-header").length > 0 && 0 == t(".right-single .entry-header").parents("#content-woocommerce:eq(0)").length && !t(".right-single .entry-header").parent().hasClass("item-wrap")) {
            var e = t(".right-single .entry-header").outerHeight(!0);
            console.log(e)
        }
        if (t(".page-template-content-right .page-header").length > 0 && !t(".page-template-content-right .page-header").parent().hasClass("tdf-featured-media")) {
            var e = t(".page-template-content-right .page-header").height();
            console.log(e)
        }
        if (t(".page-template-content-right .entry-header").length > 0 && 0 == t(".page-template-content-right .entry-header").parents("#content-woocommerce:eq(0)").length && !t(".page-template-content-right .entry-header").parent().hasClass("item-wrap")) {
            var e = t(".page-template-content-right .entry-header").outerHeight(!0);
            console.log(e)
        }
        if (t(".left-single .page-header").length > 0 && !t(".left-single .page-header").parent().hasClass("tdf-featured-media")) {
            var e = t(".left-single .page-header").height();
            console.log(e)
        }
        if (t(".left-single .entry-header").length > 0 && 0 == t(".left-single .entry-header").parents("#content-woocommerce:eq(0)").length && !t(".left-single .entry-header").parent().hasClass("item-wrap")) {
            var e = t(".left-single .entry-header").outerHeight(!0);
            console.log(e)
        }
        if (t(".page-template-content-left .page-header").length > 0 && !t(".page-template-content-left .page-header").parent().hasClass("tdf-featured-media")) {
            var e = t(".page-template-content-left .page-header").height();
            console.log(e)
        }
        if (t(".page-template-content-left .entry-header").length > 0 && 0 == t(".page-template-content-left .entry-header").parents("#content-woocommerce:eq(0)").length && !t(".page-template-content-left .entry-header").parent().hasClass("item-wrap")) {
            var e = t(".page-template-content-left .entry-header").outerHeight(!0);
            console.log(e)
        }
    }, 1e3, !0)), t(document).foundation({
        offcanvas: {
            open_method: "overlap_single",
            close_on_click: !1
        },
        tooltip: {
            disable_for_touch: !0
        },
        equalizer: {
            before_height_change: function () {},
            after_height_change: function () {}
        },
        "magellan-expedition": {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 50,
            fixed_top: 80,
            offset_by_height: !0
        }
    }), t(document).on("open.fndtn.reveal", "[data-reveal]", function () {
        var e = t(this);
        e.removeClass("fadeOut"), e.addClass("fadeIn")
    }), t(document).on("close.fndtn.reveal", "[data-reveal]", function () {
        var e = t(this);
        e.removeClass("fadeIn"), e.addClass("fadeOut")
    }), t(document).on("open.fndtn.offcanvas", "[data-offcanvas]", Foundation.utils.throttle(function () {
        t("body").scrollTo(t("#off-canvas-wrap"), 1e3)
    }, 300)).on("close.fndtn.offcanvas", "[data-offcanvas]", function () {
        t("html").css("overflow", "auto")
    }), t(window).resize(function () {
        t(document).foundation("equalizer", "reflow")
    })
}(jQuery);