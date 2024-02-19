var S = Object.defineProperty;
var $ = (t, e, o) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var v = (t, e, o) => ($(t, typeof e != "symbol" ? e + "" : e, o), o);
import { nextTick as B, defineComponent as I, ref as M, getCurrentInstance as L, computed as _, openBlock as s, createElementBlock as l, Fragment as y, renderList as b, createBlock as w, resolveDynamicComponent as N, mergeProps as T, useSlots as K, normalizeClass as g, normalizeStyle as O, createElementVNode as m, withModifiers as z, unref as C, renderSlot as k, createCommentVNode as h, toDisplayString as V } from "vue";
import { openConfirm as j } from "lkt-modal-confirm";
import D from "lkt-loader";
const E = (t, e = "_") => `${t}_${e}`;
class F {
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
  getModalInfo(e, o = "_", d = {}) {
    const a = E(e, o);
    return {
      component: this.findConfig(e).component,
      alias: e,
      index: a,
      key: o,
      props: { ...d, modalName: e, modalKey: o, zIndex: (() => this.zIndex)() },
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
  controller: new F(),
  canvas: void 0
}, re = (t, e = "_", o = {}) => {
  i.controller.open(t, e, o), i.canvas.refresh();
}, H = (t, e = "_") => {
  i.controller.close(t, e), i.canvas.refresh();
}, ae = (t, e) => {
  i.controller.addWindow({ alias: t, component: e });
}, de = (t, e = "_", o = {}) => {
  i.controller.close(t, e), i.canvas.refresh(), B(() => {
    i.controller.open(t, e, o), i.canvas.refresh();
  });
}, P = { class: "lkt-modal-canvas" }, W = /* @__PURE__ */ I({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const o = M(0), { ctx: d } = L(), a = () => {
      o.value = o.value + 1, setTimeout(() => {
        d.$forceUpdate();
      }, 1);
    }, r = _(() => (o.value, Object.values(i.controller.components)));
    return e({
      refresh: a
    }), (f, x) => (s(), l("section", P, [
      (s(!0), l(y, null, b(r.value, (c) => (s(), w(N(c.component), T({
        key: c.index
      }, c.props), null, 16))), 128))
    ]));
  }
}), U = {
  class: "lkt-modal-inner",
  ref: "inner"
}, q = { class: "lkt-modal-header" }, A = { class: "lkt-modal-header_title-container" }, G = {
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
}, oe = /* @__PURE__ */ I({
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
    const e = t, o = M(0), d = _(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), a = () => {
      const n = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose(), H(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        j(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, r = () => {
      e.disabledVeilClick || a();
    }, f = K(), x = _(() => {
      o.value;
      let n = [];
      for (let u in f)
        u.indexOf("button-") === 0 && n.push(u);
      return n;
    }), c = _(() => {
      o.value;
      let n = [];
      for (let u in f)
        u.indexOf("footer-button-") === 0 && n.push(u);
      return n;
    });
    return (n, u) => (s(), l("section", {
      class: g(d.value),
      style: O("z-index: " + t.zIndex)
    }, [
      m("div", {
        class: "lkt-modal-back",
        onClick: z(r, ["prevent", "stop"])
      }),
      m("div", U, [
        m("header", q, [
          m("div", A, [
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
              onClick: z(a, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, X)) : h("", !0)
          ])
        ]),
        m("section", Y, [
          k(n.$slots, "default")
        ]),
        c.value.length > 0 || !!C(f).footer ? (s(), l("footer", Z, [
          C(f).footer ? (s(), l("div", ee, [
            k(n.$slots, "footer")
          ])) : h("", !0),
          c.value.length > 0 ? (s(), l("div", te, [
            (s(!0), l(y, null, b(c.value, (p) => (s(), l("div", {
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
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", W), t.component("lkt-modal") === void 0 && t.component("lkt-modal", oe), t.component("lkt-loader") === void 0 && t.use(D);
  }
}, fe = (t) => {
  i.canvas = t;
};
export {
  ae as addModal,
  H as closeModal,
  ce as default,
  re as openModal,
  de as reOpenModal,
  fe as setCanvas
};
