import { defineComponent as S, ref as x, getCurrentInstance as w, computed as _, openBlock as l, createElementBlock as a, Fragment as M, renderList as b, createBlock as $, resolveDynamicComponent as B, mergeProps as N, nextTick as K, useSlots as T, normalizeClass as y, normalizeStyle as L, createElementVNode as h, withModifiers as I, unref as g, renderSlot as v, createCommentVNode as p, toDisplayString as O } from "vue";
import { openConfirm as V } from "lkt-modal-confirm";
const E = (t, e = "_") => `${t}_${e}`;
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
    const i = E(e, o), d = this.findConfig(e);
    return {
      component: typeof d < "u" ? d.component : "",
      alias: e,
      index: i,
      key: o,
      props: { ...f, modalName: e, modalKey: o, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, o = "_", f = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const d = this.getModalInfo(e, o, f);
      return this.components[d.index] ? this.focus(d) : (this.components[d.index] = d, this.components[d.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, o = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const i = this.getModalInfo(e, o, {});
      delete this.components[i.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new F(),
  canvas: void 0
}, R = { class: "lkt-modal-canvas" }, j = /* @__PURE__ */ S({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const o = x(0), { ctx: f } = w(), i = x([]), d = () => {
      o.value = o.value + 1, setTimeout(() => {
        f.$forceUpdate();
      }, 1);
    }, u = _(() => (o.value, Object.values(s.controller.components)));
    return e({
      refresh: d,
      refreshModal: (n, c = "_", r = {}) => {
        i.value.forEach((m) => {
          m.modalName === n && m.modalKey === c && typeof m.doRefresh == "function" && m.doRefresh(r);
        });
      },
      execModal: (n, c = "_", r, m = {}) => {
        i.value.forEach((C) => {
          C.modalName === n && C.modalKey === c && C[r](m);
        });
      }
    }), (n, c) => (l(), a("section", R, [
      (l(!0), a(M, null, b(u.value, (r) => (l(), $(B(r.component), N({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: i,
        key: r.index
      }, r.props), null, 16))), 128))
    ]));
  }
}), ne = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(t, e, o), s.canvas.refresh();
}, se = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(t, e, o), s.canvas.refresh();
}, le = (t, e = "_", o, f = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(t, e, o, f), s.canvas.refresh();
}, D = (t, e = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh();
}, ae = (t, e) => {
  s.controller.addWindow({ alias: t, component: e });
}, re = (t, e = "_", o = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh(), K(() => {
    s.controller.open(t, e, o), s.canvas.refresh();
  });
}, H = {
  class: "lkt-modal-inner",
  ref: "inner"
}, P = { class: "lkt-modal-header" }, W = { class: "lkt-modal-header_title-container" }, U = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, q = ["innerHTML"], A = {
  key: 2,
  class: "lkt-modal-header_title"
}, G = { class: "lkt-modal-button-tray" }, J = ["disabled"], Q = { class: "lkt-modal-content" }, X = {
  key: 0,
  class: "lkt-modal-footer"
}, Y = {
  key: 0,
  class: "lkt-modal-footer_main"
}, Z = {
  key: 1,
  class: "lkt-modal-button-tray"
}, ee = /* @__PURE__ */ S({
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
    const e = t, o = x(0), f = _(() => {
      let n = ["lkt-modal"];
      return e.size && n.push(`is-${e.size}`), e.palette && n.push(`is-${e.palette}`), n.join(" ");
    }), i = () => {
      const n = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose(), D(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        V(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: n
        });
        return;
      }
      n();
    }, d = () => {
      e.disabledVeilClick || i();
    }, u = T(), z = _(() => {
      o.value;
      let n = [];
      for (let c in u)
        c.indexOf("button-") === 0 && n.push(c);
      return n;
    }), k = _(() => {
      o.value;
      let n = [];
      for (let c in u)
        c.indexOf("footer-button-") === 0 && n.push(c);
      return n;
    });
    return (n, c) => (l(), a("section", {
      class: y(f.value),
      style: L("z-index: " + t.zIndex)
    }, [
      h("div", {
        class: "lkt-modal-back",
        onClick: I(d, ["prevent", "stop"])
      }),
      h("div", H, [
        h("header", P, [
          h("div", W, [
            g(u)["pre-title"] ? (l(), a("div", U, [
              v(n.$slots, "pre-title")
            ])) : t.preTitle ? (l(), a("div", {
              key: 1,
              class: "lkt-modal-header_pre-title",
              innerHTML: t.preTitle
            }, null, 8, q)) : p("", !0),
            t.title ? (l(), a("div", A, O(t.title), 1)) : p("", !0)
          ]),
          h("div", G, [
            (l(!0), a(M, null, b(z.value, (r) => (l(), a("div", {
              class: y("lkt-modal-button lkt-modal-" + r)
            }, [
              v(n.$slots, r)
            ], 2))), 256)),
            t.showClose ? (l(), a("button", {
              key: 0,
              class: "lkt-modal-button lkt-modal-button-close",
              onClick: I(i, ["prevent", "stop"]),
              disabled: t.disabledClose
            }, null, 8, J)) : p("", !0)
          ])
        ]),
        h("section", Q, [
          v(n.$slots, "default")
        ]),
        !t.hiddenFooter && (k.value.length > 0 || g(u).footer) ? (l(), a("footer", X, [
          g(u).footer ? (l(), a("div", Y, [
            v(n.$slots, "footer")
          ])) : p("", !0),
          k.value.length > 0 ? (l(), a("div", Z, [
            (l(!0), a(M, null, b(k.value, (r) => (l(), a("div", {
              class: y("lkt-modal-button lkt-modal-" + r)
            }, [
              v(n.$slots, r)
            ], 2))), 256))
          ])) : p("", !0)
        ])) : p("", !0)
      ], 512)
    ], 6));
  }
}), de = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", j), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ee);
  }
}, ie = (t) => {
  s.canvas = t;
};
export {
  ae as addModal,
  D as closeModal,
  de as default,
  le as execModal,
  ne as openModal,
  re as reOpenModal,
  se as refreshModal,
  ie as setCanvas
};
