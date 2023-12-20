var w = Object.defineProperty;
var N = (t, e, o) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var v = (t, e, o) => (N(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as $, ref as S, getCurrentInstance as L, computed as _, openBlock as l, createElementBlock as s, Fragment as b, renderList as z, createBlock as T, resolveDynamicComponent as V, mergeProps as O, useSlots as j, resolveComponent as D, normalizeClass as g, normalizeStyle as K, createElementVNode as c, withModifiers as M, unref as C, renderSlot as k, createCommentVNode as p, toDisplayString as A, withDirectives as y, createVNode as E, vShow as x } from "vue";
const H = (t, e = "_") => `${t}_${e}`;
class P {
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
    const a = H(e, o);
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
const u = {
  controller: new P(),
  canvas: void 0
}, ce = (t, e = "_", o = {}) => {
  u.controller.open(t, e, o), u.canvas.refresh();
}, W = (t, e = "_") => {
  u.controller.close(t, e), u.canvas.refresh();
}, ue = (t, e) => {
  u.controller.addWindow({ alias: t, component: e });
}, F = { class: "lkt-modal-canvas" }, U = { name: "LktModalCanvas", inheritAttrs: !1 }, q = /* @__PURE__ */ $({
  ...U,
  setup(t, { expose: e }) {
    const o = S(0), { ctx: d } = L(), a = () => {
      o.value = o.value + 1, setTimeout(() => {
        d.$forceUpdate();
      }, 1);
    }, i = _(() => (o.value, Object.values(u.controller.components)));
    return e({
      refresh: a
    }), (f, I) => (l(), s("section", F, [
      (l(!0), s(b, null, z(i.value, (r) => (l(), T(V(r.component), O({
        key: r.index
      }, r.props), null, 16))), 128))
    ]));
  }
}), G = {
  class: "lkt-modal-inner",
  ref: "inner"
}, J = { class: "lkt-modal-header" }, Q = { class: "lkt-modal-header_title-container" }, R = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, X = ["innerHTML"], Y = {
  key: 2,
  class: "lkt-modal-header_title"
}, Z = { class: "lkt-modal-button-tray" }, ee = ["disabled"], te = { "data-role": "loader" }, oe = { class: "lkt-modal-content" }, ne = {
  key: 0,
  class: "lkt-modal-footer"
}, le = {
  key: 0,
  class: "lkt-modal-footer_main"
}, se = {
  key: 1,
  class: "lkt-modal-button-tray"
}, ie = { name: "LktModal", inheritAttrs: !1 }, ae = /* @__PURE__ */ $({
  ...ie,
  props: {
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    loading: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: String, default: "_" },
    zIndex: { type: Number, default: 500 }
  },
  setup(t) {
    const e = t, o = S(0), d = _(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), a = () => W(e.modalName, e.modalKey), i = () => {
      e.disabledVeilClick || a();
    }, f = j(), I = _(() => {
      o.value;
      let n = [];
      for (let m in f)
        m.indexOf("button-") !== -1 && n.push(m);
      return n;
    }), r = _(() => {
      o.value;
      let n = [];
      for (let m in f)
        m.indexOf("footer-button-") !== -1 && n.push(m);
      return n;
    });
    return (n, m) => {
      const B = D("lkt-loader");
      return l(), s("section", {
        class: g(d.value),
        style: K("z-index: " + t.zIndex)
      }, [
        c("div", {
          class: "lkt-modal-back",
          onClick: M(i, ["prevent", "stop"])
        }),
        c("div", G, [
          c("header", J, [
            c("div", Q, [
              C(f)["pre-title"] ? (l(), s("div", R, [
                k(n.$slots, "pre-title")
              ])) : t.preTitle ? (l(), s("div", {
                key: 1,
                class: "lkt-modal-header_pre-title",
                innerHTML: t.preTitle
              }, null, 8, X)) : p("", !0),
              t.title ? (l(), s("div", Y, A(t.title), 1)) : p("", !0)
            ]),
            c("div", Z, [
              (l(!0), s(b, null, z(I.value, (h) => (l(), s("div", {
                class: g("lkt-modal-button lkt-modal-" + h)
              }, [
                k(n.$slots, h)
              ], 2))), 256)),
              t.showClose ? (l(), s("button", {
                key: 0,
                class: "lkt-modal-button lkt-modal-button-close",
                onClick: M(a, ["prevent", "stop"]),
                disabled: t.disabledClose
              }, null, 8, ee)) : p("", !0)
            ])
          ]),
          y(c("section", te, [
            E(B)
          ], 512), [
            [x, t.loading]
          ]),
          y(c("section", oe, [
            k(n.$slots, "default")
          ], 512), [
            [x, !t.loading]
          ]),
          r.value.length > 0 || !!C(f).footer ? y((l(), s("footer", ne, [
            C(f).footer ? (l(), s("div", le, [
              k(n.$slots, "footer")
            ])) : p("", !0),
            r.value.length > 0 ? (l(), s("div", se, [
              (l(!0), s(b, null, z(r.value, (h) => k(n.$slots, "footer-button-" + h, {
                key: h,
                class: g("lkt-modal-button lkt-modal-" + h)
              })), 128))
            ])) : p("", !0)
          ], 512)), [
            [x, !t.loading]
          ]) : p("", !0)
        ], 512)
      ], 6);
    };
  }
}), fe = {
  install: (t, e) => {
    t.component("lkt-modal-canvas", q).component("lkt-modal", ae);
  },
  setCanvas: (t) => {
    u.canvas = t;
  }
};
export {
  ue as addModal,
  W as closeModal,
  fe as default,
  ce as openModal
};
