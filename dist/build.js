import { defineComponent as z, ref as g, getCurrentInstance as S, computed as k, openBlock as l, createElementBlock as a, Fragment as y, renderList as M, createBlock as w, resolveDynamicComponent as $, mergeProps as B, nextTick as N, useSlots as T, normalizeClass as _, normalizeStyle as L, createElementVNode as m, withModifiers as b, unref as C, renderSlot as p, createCommentVNode as h, toDisplayString as K } from "vue";
import { openConfirm as O } from "lkt-modal-confirm";
const V = (t, e = "_") => `${t}_${e}`;
class F {
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
  getModalInfo(e, o = "_", f = {}) {
    const d = V(e, o), i = this.findConfig(e);
    return {
      component: typeof i < "u" ? i.component : "",
      alias: e,
      index: d,
      key: o,
      props: { ...f, modalName: e, modalKey: o, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, o = "_", f = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const i = this.getModalInfo(e, o, f);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, o = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const d = this.getModalInfo(e, o, {});
      delete this.components[d.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new F(),
  canvas: void 0
}, j = { class: "lkt-modal-canvas" }, D = /* @__PURE__ */ z({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const o = g(0), { ctx: f } = S(), d = g([]), i = () => {
      o.value = o.value + 1, setTimeout(() => {
        f.$forceUpdate();
      }, 1);
    }, u = k(() => (o.value, Object.values(s.controller.components)));
    return e({
      refresh: i,
      refreshModal: (n, c = "_", r = {}) => {
        console.log("refreshModal", d.value, u.value, n, c, r);
      },
      execModal: (n, c = "_", r, I = {}) => {
        console.log("execModal", d.value, u.value, n, c, r, I);
      }
    }), (n, c) => (l(), a("section", j, [
      (l(!0), a(y, null, M(u.value, (r) => (l(), w($(r.component), B({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: d,
        key: r.index
      }, r.props), null, 16))), 128))
    ]));
  }
}), oe = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(t, e, o), s.canvas.refresh();
}, ne = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(t, e, o), s.canvas.refresh();
}, se = (t, e = "_", o, f = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(t, e, o, f), s.canvas.refresh();
}, E = (t, e = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh();
}, le = (t, e) => {
  s.controller.addWindow({ alias: t, component: e });
}, ae = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh(), N(() => {
    s.controller.open(t, e, o), s.canvas.refresh();
  });
}, H = {
  class: "lkt-modal-inner",
  ref: "inner"
}, P = { class: "lkt-modal-header" }, R = { class: "lkt-modal-header_title-container" }, W = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, U = ["innerHTML"], q = {
  key: 2,
  class: "lkt-modal-header_title"
}, A = { class: "lkt-modal-button-tray" }, G = ["disabled"], J = { class: "lkt-modal-content" }, Q = {
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
    hiddenFooter: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: [String, Number], default: "_" },
    zIndex: { type: Number, default: 500 },
    beforeClose: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, o = g(0), f = k(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), d = () => {
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
      e.disabledVeilClick || d();
    }, u = T(), x = k(() => {
      o.value;
      let n = [];
      for (let c in u)
        c.indexOf("button-") === 0 && n.push(c);
      return n;
    }), v = k(() => {
      o.value;
      let n = [];
      for (let c in u)
        c.indexOf("footer-button-") === 0 && n.push(c);
      return n;
    });
    return (n, c) => (l(), a("section", {
      class: _(f.value),
      style: L("z-index: " + t.zIndex)
    }, [
      m("div", {
        class: "lkt-modal-back",
        onClick: b(i, ["prevent", "stop"])
      }),
      m("div", H, [
        m("header", P, [
          m("div", R, [
            C(u)["pre-title"] ? (l(), a("div", W, [
              p(n.$slots, "pre-title")
            ])) : t.preTitle ? (l(), a("div", {
              key: 1,
              class: "lkt-modal-header_pre-title",
              innerHTML: t.preTitle
            }, null, 8, U)) : h("", !0),
            t.title ? (l(), a("div", q, K(t.title), 1)) : h("", !0)
          ]),
          m("div", A, [
            (l(!0), a(y, null, M(x.value, (r) => (l(), a("div", {
              class: _("lkt-modal-button lkt-modal-" + r)
            }, [
              p(n.$slots, r)
            ], 2))), 256)),
            t.showClose ? (l(), a("button", {
              key: 0,
              class: "lkt-modal-button lkt-modal-button-close",
              onClick: b(d, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, G)) : h("", !0)
          ])
        ]),
        m("section", J, [
          p(n.$slots, "default")
        ]),
        !t.hiddenFooter && (v.value.length > 0 || C(u).footer) ? (l(), a("footer", Q, [
          C(u).footer ? (l(), a("div", X, [
            p(n.$slots, "footer")
          ])) : h("", !0),
          v.value.length > 0 ? (l(), a("div", Y, [
            (l(!0), a(y, null, M(v.value, (r) => (l(), a("div", {
              class: _("lkt-modal-button lkt-modal-" + r)
            }, [
              p(n.$slots, r)
            ], 2))), 256))
          ])) : h("", !0)
        ])) : h("", !0)
      ], 512)
    ], 6));
  }
}), re = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", D), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Z);
  }
}, ie = (t) => {
  s.canvas = t;
};
export {
  le as addModal,
  E as closeModal,
  re as default,
  se as execModal,
  oe as openModal,
  ae as reOpenModal,
  ne as refreshModal,
  ie as setCanvas
};
