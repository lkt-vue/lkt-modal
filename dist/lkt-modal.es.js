var w = Object.defineProperty;
var N = (t, e, o) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var _ = (t, e, o) => (N(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as S, ref as $, getCurrentInstance as L, computed as g, openBlock as l, createElementBlock as s, Fragment as b, renderList as z, createBlock as T, resolveDynamicComponent as V, mergeProps as K, useSlots as O, resolveComponent as j, normalizeClass as v, normalizeStyle as D, createElementVNode as c, withModifiers as M, unref as C, renderSlot as k, createCommentVNode as h, toDisplayString as A, withDirectives as y, createVNode as E, vShow as x } from "vue";
import { openConfirm as H } from "lkt-modal-confirm";
const P = (t, e = "_") => `${t}_${e}`;
class W {
  constructor() {
    _(this, "config", []);
    _(this, "components", {});
    _(this, "zIndex", 500);
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
  getModalInfo(e, o = "_", r = {}) {
    const a = P(e, o);
    return {
      component: this.findConfig(e).component,
      alias: e,
      index: a,
      key: o,
      props: { ...r, modalName: e, modalKey: o, zIndex: (() => this.zIndex)() },
      zIndex: this.zIndex
    };
  }
  open(e, o = "_", r = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const i = this.getModalInfo(e, o, r);
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
const u = {
  controller: new W(),
  canvas: void 0
}, fe = (t, e = "_", o = {}) => {
  u.controller.open(t, e, o), u.canvas.refresh();
}, F = (t, e = "_") => {
  u.controller.close(t, e), u.canvas.refresh();
}, me = (t, e) => {
  u.controller.addWindow({ alias: t, component: e });
}, U = { class: "lkt-modal-canvas" }, q = { name: "LktModalCanvas", inheritAttrs: !1 }, G = /* @__PURE__ */ S({
  ...q,
  setup(t, { expose: e }) {
    const o = $(0), { ctx: r } = L(), a = () => {
      o.value = o.value + 1, setTimeout(() => {
        r.$forceUpdate();
      }, 1);
    }, i = g(() => (o.value, Object.values(u.controller.components)));
    return e({
      refresh: a
    }), (f, I) => (l(), s("section", U, [
      (l(!0), s(b, null, z(i.value, (d) => (l(), T(V(d.component), K({
        key: d.index
      }, d.props), null, 16))), 128))
    ]));
  }
}), J = {
  class: "lkt-modal-inner",
  ref: "inner"
}, Q = { class: "lkt-modal-header" }, R = { class: "lkt-modal-header_title-container" }, X = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, Y = ["innerHTML"], Z = {
  key: 2,
  class: "lkt-modal-header_title"
}, ee = { class: "lkt-modal-button-tray" }, te = ["disabled"], oe = { "data-role": "loader" }, ne = { class: "lkt-modal-content" }, le = {
  key: 0,
  class: "lkt-modal-footer"
}, se = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ie = {
  key: 1,
  class: "lkt-modal-button-tray"
}, ae = { name: "LktModal", inheritAttrs: !1 }, re = /* @__PURE__ */ S({
  ...ae,
  props: {
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    loading: { type: Boolean, default: !1 },
    closeConfirm: { type: String, default: "" },
    closeConfirmKey: { type: String, default: "_" },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: String, default: "_" },
    zIndex: { type: Number, default: 500 }
  },
  setup(t) {
    const e = t, o = $(0), r = g(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), a = () => {
      const n = () => F(e.modalName, e.modalKey);
      if (e.closeConfirm) {
        H(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, i = () => {
      e.disabledVeilClick || a();
    }, f = O(), I = g(() => {
      o.value;
      let n = [];
      for (let m in f)
        m.indexOf("button-") === 0 && n.push(m);
      return n;
    }), d = g(() => {
      o.value;
      let n = [];
      for (let m in f)
        m.indexOf("footer-button-") === 0 && n.push(m);
      return n;
    });
    return (n, m) => {
      const B = j("lkt-loader");
      return l(), s("section", {
        class: v(r.value),
        style: D("z-index: " + t.zIndex)
      }, [
        c("div", {
          class: "lkt-modal-back",
          onClick: M(i, ["prevent", "stop"])
        }),
        c("div", J, [
          c("header", Q, [
            c("div", R, [
              C(f)["pre-title"] ? (l(), s("div", X, [
                k(n.$slots, "pre-title")
              ])) : t.preTitle ? (l(), s("div", {
                key: 1,
                class: "lkt-modal-header_pre-title",
                innerHTML: t.preTitle
              }, null, 8, Y)) : h("", !0),
              t.title ? (l(), s("div", Z, A(t.title), 1)) : h("", !0)
            ]),
            c("div", ee, [
              (l(!0), s(b, null, z(I.value, (p) => (l(), s("div", {
                class: v("lkt-modal-button lkt-modal-" + p)
              }, [
                k(n.$slots, p)
              ], 2))), 256)),
              t.showClose ? (l(), s("button", {
                key: 0,
                class: "lkt-modal-button lkt-modal-button-close",
                onClick: M(a, ["prevent", "stop"]),
                disabled: t.disabledClose
              }, null, 8, te)) : h("", !0)
            ])
          ]),
          y(c("section", oe, [
            E(B)
          ], 512), [
            [x, t.loading]
          ]),
          y(c("section", ne, [
            k(n.$slots, "default")
          ], 512), [
            [x, !t.loading]
          ]),
          d.value.length > 0 || !!C(f).footer ? y((l(), s("footer", le, [
            C(f).footer ? (l(), s("div", se, [
              k(n.$slots, "footer")
            ])) : h("", !0),
            d.value.length > 0 ? (l(), s("div", ie, [
              (l(!0), s(b, null, z(d.value, (p) => (l(), s("div", {
                class: v("lkt-modal-button lkt-modal-" + p)
              }, [
                k(n.$slots, p)
              ], 2))), 256))
            ])) : h("", !0)
          ], 512)), [
            [x, !t.loading]
          ]) : h("", !0)
        ], 512)
      ], 6);
    };
  }
});
const he = {
  install: (t, e) => {
    t.component("lkt-modal-canvas", G).component("lkt-modal", re);
  },
  setCanvas: (t) => {
    u.canvas = t;
  }
};
export {
  me as addModal,
  F as closeModal,
  he as default,
  fe as openModal
};
