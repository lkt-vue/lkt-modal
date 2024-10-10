import { defineComponent as S, ref as M, getCurrentInstance as T, computed as g, openBlock as s, createElementBlock as a, Fragment as x, renderList as I, createBlock as w, resolveDynamicComponent as $, mergeProps as B, nextTick as N, useSlots as K, resolveComponent as L, normalizeClass as C, normalizeStyle as O, createElementVNode as p, withModifiers as z, unref as y, createCommentVNode as h, renderSlot as v, toDisplayString as V } from "vue";
import { openConfirm as E } from "lkt-modal-confirm";
const F = (t, e = "_") => `${t}_${e}`;
class R {
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
    return this.config.find((n) => n.alias === e);
  }
  getModalInfo(e, n = "_", r = {}) {
    const d = F(e, n), i = this.findConfig(e);
    return {
      component: typeof i < "u" ? i.component : "",
      alias: e,
      index: d,
      key: n,
      props: { ...r, modalName: e, modalKey: n, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, n = "_", r = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const i = this.getModalInfo(e, n, r);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, n = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const d = this.getModalInfo(e, n, {});
      delete this.components[d.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const l = {
  controller: new R(),
  canvas: void 0
}, j = { class: "lkt-modal-canvas" }, D = /* @__PURE__ */ S({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const n = M(0), r = T(), d = M([]), i = () => {
      n.value = n.value + 1, setTimeout(() => {
        var o;
        (o = r == null ? void 0 : r.proxy) == null || o.$forceUpdate();
      }, 1);
    }, u = g(() => (n.value, Object.values(l.controller.components)));
    return e({
      refresh: i,
      refreshModal: (o, f = "_", m = {}) => {
        d.value.forEach((c) => {
          c.modalName === o && c.modalKey === f && typeof c.doRefresh == "function" && c.doRefresh(m);
        });
      },
      execModal: (o, f = "_", m, c = {}) => {
        d.value.forEach((_) => {
          _.modalName === o && _.modalKey === f && _[m](c);
        });
      }
    }), (o, f) => (s(), a("section", j, [
      (s(!0), a(x, null, I(u.value, (m) => (s(), w($(m.component), B({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: d,
        key: m.index
      }, m.props), null, 16))), 128))
    ]));
  }
}), ne = (t, e = "_", n = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.open(t, e, n), l.canvas.refresh();
}, le = (t, e = "_", n = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.canvas.refreshModal(t, e, n), l.canvas.refresh();
}, se = (t, e = "_", n, r = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.canvas.execModal(t, e, n, r), l.canvas.refresh();
}, H = (t, e = "_") => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.close(t, e), l.canvas.refresh();
}, ae = (t, e) => {
  l.controller.addWindow({ alias: t, component: e });
}, re = (t, e = "_", n = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.close(t, e), l.canvas.refresh(), N(() => {
    l.controller.open(t, e, n), l.canvas.refresh();
  });
}, P = {
  class: "lkt-modal-inner",
  ref: "inner"
}, W = { class: "lkt-modal-header" }, U = { class: "lkt-modal-header_title-container" }, q = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, A = ["innerHTML"], G = {
  key: 1,
  class: "lkt-modal-header_title"
}, J = { class: "lkt-modal-button-tray" }, Q = { class: "lkt-modal-content" }, X = {
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
    preTitleIcon: { type: String, default: "" },
    title: { type: String, default: "" },
    closeIcon: { type: String, default: () => l.defaultCloseIcon },
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
    const e = t, n = M(0), r = g(() => {
      let o = ["lkt-modal"];
      return e.size && o.push(`is-${e.size}`), e.palette && o.push(`is-${e.palette}`), o.join(" ");
    }), d = () => {
      const o = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose(), H(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        E(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: o
        });
        return;
      }
      o();
    }, i = () => {
      e.disabledVeilClick || d();
    }, u = K(), b = g(() => {
      n.value;
      let o = [];
      for (let f in u) f.indexOf("button-") === 0 && o.push(f);
      return o;
    }), k = g(() => {
      n.value;
      let o = [];
      for (let f in u) f.indexOf("footer-button-") === 0 && o.push(f);
      return o;
    });
    return (o, f) => {
      const m = L("lkt-button");
      return s(), a("section", {
        class: C(r.value),
        style: O("z-index: " + t.zIndex)
      }, [
        p("div", {
          class: "lkt-modal-back",
          onClick: z(i, ["prevent", "stop"])
        }),
        p("div", P, [
          p("header", W, [
            p("div", U, [
              t.preTitleIcon || y(u)["pre-title"] || t.preTitle ? (s(), a("div", q, [
                t.preTitleIcon ? (s(), a("i", {
                  key: 0,
                  class: C(t.preTitleIcon)
                }, null, 2)) : h("", !0),
                y(u)["pre-title"] ? v(o.$slots, "pre-title", { key: 1 }) : t.preTitle ? (s(), a("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, A)) : h("", !0)
              ])) : h("", !0),
              t.title ? (s(), a("div", G, V(t.title), 1)) : h("", !0)
            ]),
            p("div", J, [
              (s(!0), a(x, null, I(b.value, (c) => (s(), a("div", {
                class: C("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256)),
              t.showClose ? (s(), w(m, {
                key: 0,
                class: "lkt-modal-button",
                onClick: z(d, ["prevent", "stop"]),
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : h("", !0)
            ])
          ]),
          p("section", Q, [
            v(o.$slots, "default")
          ]),
          !t.hiddenFooter && (k.value.length > 0 || y(u).footer) ? (s(), a("footer", X, [
            y(u).footer ? (s(), a("div", Y, [
              v(o.$slots, "footer")
            ])) : h("", !0),
            k.value.length > 0 ? (s(), a("div", Z, [
              (s(!0), a(x, null, I(k.value, (c) => (s(), a("div", {
                class: C("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256))
            ])) : h("", !0)
          ])) : h("", !0)
        ], 512)
      ], 6);
    };
  }
}), ie = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", D), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ee);
  }
}, ce = (t) => {
  l.canvas = t;
}, de = (t) => {
  l.defaultCloseIcon = t;
};
export {
  ae as addModal,
  H as closeModal,
  ie as default,
  se as execModal,
  ne as openModal,
  re as reOpenModal,
  le as refreshModal,
  ce as setCanvas,
  de as setDefaultModalCloseIcon
};
