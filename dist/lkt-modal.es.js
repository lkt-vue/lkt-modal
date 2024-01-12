var S = Object.defineProperty;
var $ = (t, e, o) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var v = (t, e, o) => ($(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as I, ref as M, getCurrentInstance as B, computed as _, openBlock as s, createElementBlock as l, Fragment as y, renderList as b, createBlock as L, resolveDynamicComponent as w, mergeProps as N, useSlots as T, normalizeClass as g, normalizeStyle as K, createElementVNode as m, withModifiers as z, unref as C, renderSlot as k, createCommentVNode as h, toDisplayString as V } from "vue";
import { openConfirm as O } from "lkt-modal-confirm";
import j from "lkt-loader";
const A = (t, e = "_") => `${t}_${e}`;
class D {
  constructor() {
    v(this, "config", []);
    v(this, "components", {});
    v(this, "zIndex", 500);
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
  getModalInfo(e, o = "_", a = {}) {
    const r = A(e, o);
    return {
      component: this.findConfig(e).component,
      alias: e,
      index: r,
      key: o,
      props: { ...a, modalName: e, modalKey: o, zIndex: (() => this.zIndex)() },
      zIndex: this.zIndex
    };
  }
  open(e, o = "_", a = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const i = this.getModalInfo(e, o, a);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, o = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const r = this.getModalInfo(e, o, {});
      delete this.components[r.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const c = {
  controller: new D(),
  canvas: void 0
}, ae = (t, e = "_", o = {}) => {
  c.controller.open(t, e, o), c.canvas.refresh();
}, E = (t, e = "_") => {
  c.controller.close(t, e), c.canvas.refresh();
}, de = (t, e) => {
  c.controller.addWindow({ alias: t, component: e });
}, F = { class: "lkt-modal-canvas" }, H = { name: "LktModalCanvas", inheritAttrs: !1 }, P = /* @__PURE__ */ I({
  ...H,
  setup(t, { expose: e }) {
    const o = M(0), { ctx: a } = B(), r = () => {
      o.value = o.value + 1, setTimeout(() => {
        a.$forceUpdate();
      }, 1);
    }, i = _(() => (o.value, Object.values(c.controller.components)));
    return e({
      refresh: r
    }), (f, x) => (s(), l("section", F, [
      (s(!0), l(y, null, b(i.value, (d) => (s(), L(w(d.component), N({
        key: d.index
      }, d.props), null, 16))), 128))
    ]));
  }
}), W = {
  class: "lkt-modal-inner",
  ref: "inner"
}, U = { class: "lkt-modal-header" }, q = { class: "lkt-modal-header_title-container" }, G = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, J = ["innerHTML"], Q = {
  key: 2,
  class: "lkt-modal-header_title"
}, R = { class: "lkt-modal-button-tray" }, X = ["disabled"], Y = { class: "lkt-modal-content" }, Z = {
  key: 0,
  class: "lkt-modal-footer"
}, ee = {
  key: 0,
  class: "lkt-modal-footer_main"
}, te = {
  key: 1,
  class: "lkt-modal-button-tray"
}, oe = { name: "LktModal", inheritAttrs: !1 }, ne = /* @__PURE__ */ I({
  ...oe,
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
    const e = t, o = M(0), a = _(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), r = () => {
      const n = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose(), E(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        O(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, i = () => {
      e.disabledVeilClick || r();
    }, f = T(), x = _(() => {
      o.value;
      let n = [];
      for (let u in f)
        u.indexOf("button-") === 0 && n.push(u);
      return n;
    }), d = _(() => {
      o.value;
      let n = [];
      for (let u in f)
        u.indexOf("footer-button-") === 0 && n.push(u);
      return n;
    });
    return (n, u) => (s(), l("section", {
      class: g(a.value),
      style: K("z-index: " + t.zIndex)
    }, [
      m("div", {
        class: "lkt-modal-back",
        onClick: z(i, ["prevent", "stop"])
      }),
      m("div", W, [
        m("header", U, [
          m("div", q, [
            C(f)["pre-title"] ? (s(), l("div", G, [
              k(n.$slots, "pre-title")
            ])) : t.preTitle ? (s(), l("div", {
              key: 1,
              class: "lkt-modal-header_pre-title",
              innerHTML: t.preTitle
            }, null, 8, J)) : h("", !0),
            t.title ? (s(), l("div", Q, V(t.title), 1)) : h("", !0)
          ]),
          m("div", R, [
            (s(!0), l(y, null, b(x.value, (p) => (s(), l("div", {
              class: g("lkt-modal-button lkt-modal-" + p)
            }, [
              k(n.$slots, p)
            ], 2))), 256)),
            t.showClose ? (s(), l("button", {
              key: 0,
              class: "lkt-modal-button lkt-modal-button-close",
              onClick: z(r, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, X)) : h("", !0)
          ])
        ]),
        m("section", Y, [
          k(n.$slots, "default")
        ]),
        d.value.length > 0 || !!C(f).footer ? (s(), l("footer", Z, [
          C(f).footer ? (s(), l("div", ee, [
            k(n.$slots, "footer")
          ])) : h("", !0),
          d.value.length > 0 ? (s(), l("div", te, [
            (s(!0), l(y, null, b(d.value, (p) => (s(), l("div", {
              class: g("lkt-modal-button lkt-modal-" + p)
            }, [
              k(n.$slots, p)
            ], 2))), 256))
          ])) : h("", !0)
        ])) : h("", !0)
      ], 512)
    ], 6));
  }
});
const ce = {
  install: (t, e) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", P), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ne), t.component("lkt-loader") === void 0 && t.use(j);
  },
  setCanvas: (t) => {
    c.canvas = t;
  }
};
export {
  de as addModal,
  E as closeModal,
  ce as default,
  ae as openModal
};
