var S = Object.defineProperty;
var $ = (t, e, o) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var _ = (t, e, o) => ($(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as I, ref as M, getCurrentInstance as B, computed as v, openBlock as s, createElementBlock as l, Fragment as y, renderList as x, createBlock as w, resolveDynamicComponent as L, mergeProps as N, useSlots as T, normalizeClass as g, normalizeStyle as K, createElementVNode as m, withModifiers as z, unref as C, renderSlot as k, createCommentVNode as h, toDisplayString as V } from "vue";
import { openConfirm as O } from "lkt-modal-confirm";
const j = (t, e = "_") => `${t}_${e}`;
class A {
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
  getModalInfo(e, o = "_", a = {}) {
    const r = j(e, o);
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
  controller: new A(),
  canvas: void 0
}, ie = (t, e = "_", o = {}) => {
  c.controller.open(t, e, o), c.canvas.refresh();
}, D = (t, e = "_") => {
  c.controller.close(t, e), c.canvas.refresh();
}, re = (t, e) => {
  c.controller.addWindow({ alias: t, component: e });
}, E = { class: "lkt-modal-canvas" }, H = { name: "LktModalCanvas", inheritAttrs: !1 }, P = /* @__PURE__ */ I({
  ...H,
  setup(t, { expose: e }) {
    const o = M(0), { ctx: a } = B(), r = () => {
      o.value = o.value + 1, setTimeout(() => {
        a.$forceUpdate();
      }, 1);
    }, i = v(() => (o.value, Object.values(c.controller.components)));
    return e({
      refresh: r
    }), (u, b) => (s(), l("section", E, [
      (s(!0), l(y, null, x(i.value, (d) => (s(), w(L(d.component), N({
        key: d.index
      }, d.props), null, 16))), 128))
    ]));
  }
}), W = {
  class: "lkt-modal-inner",
  ref: "inner"
}, F = { class: "lkt-modal-header" }, U = { class: "lkt-modal-header_title-container" }, q = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, G = ["innerHTML"], J = {
  key: 2,
  class: "lkt-modal-header_title"
}, Q = { class: "lkt-modal-button-tray" }, R = ["disabled"], X = { class: "lkt-modal-content" }, Y = {
  key: 0,
  class: "lkt-modal-footer"
}, Z = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ee = {
  key: 1,
  class: "lkt-modal-button-tray"
}, te = { name: "LktModal", inheritAttrs: !1 }, oe = /* @__PURE__ */ I({
  ...te,
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
    modalKey: { type: String, default: "_" },
    zIndex: { type: Number, default: 500 }
  },
  setup(t) {
    const e = t, o = M(0), a = v(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), r = () => {
      const n = () => D(e.modalName, e.modalKey);
      if (e.closeConfirm) {
        O(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, i = () => {
      e.disabledVeilClick || r();
    }, u = T(), b = v(() => {
      o.value;
      let n = [];
      for (let f in u)
        f.indexOf("button-") === 0 && n.push(f);
      return n;
    }), d = v(() => {
      o.value;
      let n = [];
      for (let f in u)
        f.indexOf("footer-button-") === 0 && n.push(f);
      return n;
    });
    return (n, f) => (s(), l("section", {
      class: g(a.value),
      style: K("z-index: " + t.zIndex)
    }, [
      m("div", {
        class: "lkt-modal-back",
        onClick: z(i, ["prevent", "stop"])
      }),
      m("div", W, [
        m("header", F, [
          m("div", U, [
            C(u)["pre-title"] ? (s(), l("div", q, [
              k(n.$slots, "pre-title")
            ])) : t.preTitle ? (s(), l("div", {
              key: 1,
              class: "lkt-modal-header_pre-title",
              innerHTML: t.preTitle
            }, null, 8, G)) : h("", !0),
            t.title ? (s(), l("div", J, V(t.title), 1)) : h("", !0)
          ]),
          m("div", Q, [
            (s(!0), l(y, null, x(b.value, (p) => (s(), l("div", {
              class: g("lkt-modal-button lkt-modal-" + p)
            }, [
              k(n.$slots, p)
            ], 2))), 256)),
            t.showClose ? (s(), l("button", {
              key: 0,
              class: "lkt-modal-button lkt-modal-button-close",
              onClick: z(r, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, R)) : h("", !0)
          ])
        ]),
        m("section", X, [
          k(n.$slots, "default")
        ]),
        d.value.length > 0 || !!C(u).footer ? (s(), l("footer", Y, [
          C(u).footer ? (s(), l("div", Z, [
            k(n.$slots, "footer")
          ])) : h("", !0),
          d.value.length > 0 ? (s(), l("div", ee, [
            (s(!0), l(y, null, x(d.value, (p) => (s(), l("div", {
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
const ae = {
  install: (t, e) => {
    t.component("lkt-modal-canvas", P).component("lkt-modal", oe);
  },
  setCanvas: (t) => {
    c.canvas = t;
  }
};
export {
  re as addModal,
  D as closeModal,
  ae as default,
  ie as openModal
};
