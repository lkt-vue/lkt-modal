import { nextTick as M, defineComponent as z, ref as I, getCurrentInstance as S, computed as v, openBlock as s, createElementBlock as l, Fragment as g, renderList as y, createBlock as $, resolveDynamicComponent as B, mergeProps as w, useSlots as N, normalizeClass as _, normalizeStyle as T, createElementVNode as m, withModifiers as x, unref as C, renderSlot as k, createCommentVNode as h, toDisplayString as L } from "vue";
import { openConfirm as K } from "lkt-modal-confirm";
const O = (t, e = "_") => `${t}_${e}`;
class V {
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
    const a = O(e, o), i = this.findConfig(e);
    return {
      component: typeof i < "u" ? i.component : "",
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
      const i = this.getModalInfo(e, o, d);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
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
const r = {
  controller: new V(),
  canvas: void 0
}, te = (t, e = "_", o = {}) => {
  r.controller.open(t, e, o), r.canvas.refresh();
}, j = (t, e = "_") => {
  r.controller.close(t, e), r.canvas.refresh();
}, oe = (t, e) => {
  r.controller.addWindow({ alias: t, component: e });
}, ne = (t, e = "_", o = {}) => {
  r.controller.close(t, e), r.canvas.refresh(), M(() => {
    r.controller.open(t, e, o), r.canvas.refresh();
  });
}, D = { class: "lkt-modal-canvas" }, E = /* @__PURE__ */ z({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const o = I(0), { ctx: d } = S(), a = () => {
      o.value = o.value + 1, setTimeout(() => {
        d.$forceUpdate();
      }, 1);
    }, i = v(() => (o.value, Object.values(r.controller.components)));
    return e({
      refresh: a
    }), (c, b) => (s(), l("section", D, [
      (s(!0), l(g, null, y(i.value, (f) => (s(), $(B(f.component), w({
        key: f.index
      }, f.props), null, 16))), 128))
    ]));
  }
}), F = {
  class: "lkt-modal-inner",
  ref: "inner"
}, H = { class: "lkt-modal-header" }, P = { class: "lkt-modal-header_title-container" }, W = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, U = ["innerHTML"], q = {
  key: 2,
  class: "lkt-modal-header_title"
}, A = { class: "lkt-modal-button-tray" }, G = ["disabled"], J = { class: "lkt-modal-content" }, Q = {
  key: 0,
  class: "lkt-modal-footer"
}, R = {
  key: 0,
  class: "lkt-modal-footer_main"
}, X = {
  key: 1,
  class: "lkt-modal-button-tray"
}, Y = /* @__PURE__ */ z({
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
        typeof e.beforeClose == "function" && await e.beforeClose(), j(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        K(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, i = () => {
      e.disabledVeilClick || a();
    }, c = N(), b = v(() => {
      o.value;
      let n = [];
      for (let u in c)
        u.indexOf("button-") === 0 && n.push(u);
      return n;
    }), f = v(() => {
      o.value;
      let n = [];
      for (let u in c)
        u.indexOf("footer-button-") === 0 && n.push(u);
      return n;
    });
    return (n, u) => (s(), l("section", {
      class: _(d.value),
      style: T("z-index: " + t.zIndex)
    }, [
      m("div", {
        class: "lkt-modal-back",
        onClick: x(i, ["prevent", "stop"])
      }),
      m("div", F, [
        m("header", H, [
          m("div", P, [
            C(c)["pre-title"] ? (s(), l("div", W, [
              k(n.$slots, "pre-title")
            ])) : t.preTitle ? (s(), l("div", {
              key: 1,
              class: "lkt-modal-header_pre-title",
              innerHTML: t.preTitle
            }, null, 8, U)) : h("", !0),
            t.title ? (s(), l("div", q, L(t.title), 1)) : h("", !0)
          ]),
          m("div", A, [
            (s(!0), l(g, null, y(b.value, (p) => (s(), l("div", {
              class: _("lkt-modal-button lkt-modal-" + p)
            }, [
              k(n.$slots, p)
            ], 2))), 256)),
            t.showClose ? (s(), l("button", {
              key: 0,
              class: "lkt-modal-button lkt-modal-button-close",
              onClick: x(a, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, G)) : h("", !0)
          ])
        ]),
        m("section", J, [
          k(n.$slots, "default")
        ]),
        f.value.length > 0 || C(c).footer ? (s(), l("footer", Q, [
          C(c).footer ? (s(), l("div", R, [
            k(n.$slots, "footer")
          ])) : h("", !0),
          f.value.length > 0 ? (s(), l("div", X, [
            (s(!0), l(g, null, y(f.value, (p) => (s(), l("div", {
              class: _("lkt-modal-button lkt-modal-" + p)
            }, [
              k(n.$slots, p)
            ], 2))), 256))
          ])) : h("", !0)
        ])) : h("", !0)
      ], 512)
    ], 6));
  }
}), se = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", E), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Y);
  }
}, le = (t) => {
  r.canvas = t;
};
export {
  oe as addModal,
  j as closeModal,
  se as default,
  te as openModal,
  ne as reOpenModal,
  le as setCanvas
};
