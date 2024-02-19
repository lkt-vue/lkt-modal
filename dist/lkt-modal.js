import { nextTick as M, defineComponent as z, ref as I, getCurrentInstance as S, computed as v, openBlock as s, createElementBlock as l, Fragment as C, renderList as y, createBlock as $, resolveDynamicComponent as B, mergeProps as L, useSlots as w, normalizeClass as _, normalizeStyle as N, createElementVNode as m, withModifiers as x, unref as g, renderSlot as k, createCommentVNode as h, toDisplayString as T } from "vue";
import { openConfirm as K } from "lkt-modal-confirm";
import O from "lkt-loader";
const V = (t, e = "_") => `${t}_${e}`;
class j {
    constructor() {
        this.config = [], this.components = {}, this.zIndex = 500;
    }
    setConfig(e) {
        this.config = e;
    }
    addWindow(e) {
        this.config.push(e);
    }
    findConfig(e) {
        return this.config.find((o) => o.alias === e);
    }
    getModalInfo(e, o = "_", d = {}) {
        const a = V(e, o);
        return {
            component: this.findConfig(e).component,
            alias: e,
            index: a,
            key: o,
            props: { ...d, modalName: e, modalKey: o, zIndex: this.zIndex },
            zIndex: this.zIndex
        };
    }
    open(e, o = "_", d = {}) {
        if (this.findConfig(e)) {
            ++this.zIndex;
            const r = this.getModalInfo(e, o, d);
            return this.components[r.index] ? this.focus(r) : (this.components[r.index] = r, this.components[r.index]);
        }
    }
    focus(e) {
        return this.components[e.index] = e, this.components[e.index];
    }
    close(e, o = "_") {
        if (this.findConfig(e)) {
            --this.zIndex;
            const a = this.getModalInfo(e, o, {});
            delete this.components[a.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
        }
    }
}
const i = {
    controller: new j(),
    // @ts-ignore
    canvas: void 0
}, ne = (t, e = "_", o = {}) => {
    i.controller.open(t, e, o), i.canvas.refresh();
}, D = (t, e = "_") => {
    i.controller.close(t, e), i.canvas.refresh();
}, se = (t, e) => {
    i.controller.addWindow({ alias: t, component: e });
}, le = (t, e = "_", o = {}) => {
    i.controller.close(t, e), i.canvas.refresh(), M(() => {
        i.controller.open(t, e, o), i.canvas.refresh();
    });
}, E = { class: "lkt-modal-canvas" }, F = /* @__PURE__ */ z({
    __name: "LktModalCanvas",
    setup(t, { expose: e }) {
        const o = I(0), { ctx: d } = S(), a = () => {
            o.value = o.value + 1, setTimeout(() => {
                d.$forceUpdate();
            }, 1);
        }, r = v(() => (o.value, Object.values(i.controller.components)));
        return e({
            refresh: a
        }), (f, b) => (s(), l("section", E, [
            (s(!0), l(C, null, y(r.value, (c) => (s(), $(B(c.component), L({
                key: c.index
            }, c.props), null, 16))), 128))
        ]));
    }
}), H = {
    class: "lkt-modal-inner",
    ref: "inner"
}, P = { class: "lkt-modal-header" }, W = { class: "lkt-modal-header_title-container" }, U = {
    key: 0,
    class: "lkt-modal-header_pre-title"
}, q = ["innerHTML"], A = {
    key: 2,
    class: "lkt-modal-header_title"
}, G = { class: "lkt-modal-button-tray" }, J = ["disabled"], Q = { class: "lkt-modal-content" }, R = {
    key: 0,
    class: "lkt-modal-footer"
}, X = {
    key: 0,
    class: "lkt-modal-footer_main"
}, Y = {
    key: 1,
    class: "lkt-modal-button-tray"
}, Z = /* @__PURE__ */ z({
    __name: "LktModal",
    props: {
        palette: { type: String, default: "" },
        size: { type: String, default: "" },
        preTitle: { type: String, default: "" },
        title: { type: String, default: "" },
        closeConfirm: { type: String, default: "" },
        closeConfirmKey: { type: String, default: "_" },
        showClose: { type: Boolean, default: !0 },
        disabledClose: { type: Boolean, default: !1 },
        disabledVeilClick: { type: Boolean, default: !1 },
        modalName: { type: String, default: "" },
        modalKey: { type: [String, Number], default: "_" },
        zIndex: { type: Number, default: 500 },
        beforeClose: { type: Function, default: void 0 }
    },
    setup(t) {
        const e = t, o = I(0), d = v(() => {
            let n = ["lkt-modal"];
            return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
        }), a = () => {
            const n = async () => {
                typeof e.beforeClose == "function" && await e.beforeClose(), D(e.modalName, e.modalKey);
            };
            if (e.closeConfirm) {
                K(e.closeConfirm, e.closeConfirmKey, {
                    onConfirm: n
                });
                return;
            }
            n();
        }, r = () => {
            e.disabledVeilClick || a();
        }, f = w(), b = v(() => {
            o.value;
            let n = [];
            for (let u in f)
                u.indexOf("button-") === 0 && n.push(u);
            return n;
        }), c = v(() => {
            o.value;
            let n = [];
            for (let u in f)
                u.indexOf("footer-button-") === 0 && n.push(u);
            return n;
        });
        return (n, u) => (s(), l("section", {
            class: _(d.value),
            style: N("z-index: " + t.zIndex)
        }, [
            m("div", {
                class: "lkt-modal-back",
                onClick: x(r, ["prevent", "stop"])
            }),
            m("div", H, [
                m("header", P, [
                    m("div", W, [
                        g(f)["pre-title"] ? (s(), l("div", U, [
                            k(n.$slots, "pre-title")
                        ])) : t.preTitle ? (s(), l("div", {
                            key: 1,
                            class: "lkt-modal-header_pre-title",
                            innerHTML: t.preTitle
                        }, null, 8, q)) : h("", !0),
                        t.title ? (s(), l("div", A, T(t.title), 1)) : h("", !0)
                    ]),
                    m("div", G, [
                        (s(!0), l(C, null, y(b.value, (p) => (s(), l("div", {
                            class: _("lkt-modal-button lkt-modal-" + p)
                        }, [
                            k(n.$slots, p)
                        ], 2))), 256)),
                        t.showClose ? (s(), l("button", {
                            key: 0,
                            class: "lkt-modal-button lkt-modal-button-close",
                            onClick: x(a, ["prevent", "stop"]),
                            disabled: t.disabledClose
                        }, null, 8, J)) : h("", !0)
                    ])
                ]),
                m("section", Q, [
                    k(n.$slots, "default")
                ]),
                c.value.length > 0 || g(f).footer ? (s(), l("footer", R, [
                    g(f).footer ? (s(), l("div", X, [
                        k(n.$slots, "footer")
                    ])) : h("", !0),
                    c.value.length > 0 ? (s(), l("div", Y, [
                        (s(!0), l(C, null, y(c.value, (p) => (s(), l("div", {
                            class: _("lkt-modal-button lkt-modal-" + p)
                        }, [
                            k(n.$slots, p)
                        ], 2))), 256))
                    ])) : h("", !0)
                ])) : h("", !0)
            ], 512)
        ], 6));
    }
}), ie = {
    install: (t) => {
        t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", F), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Z), t.component("lkt-loader") === void 0 && t.use(O);
    }
}, re = (t) => {
    i.canvas = t;
};
export { se as addModal, D as closeModal, ie as default, ne as openModal, le as reOpenModal, re as setCanvas };
