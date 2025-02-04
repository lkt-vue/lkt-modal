import { defineComponent as w, ref as g, getCurrentInstance as $, computed as y, createElementBlock as a, openBlock as l, Fragment as I, renderList as b, createBlock as T, resolveDynamicComponent as B, mergeProps as K, nextTick as N, useSlots as L, resolveComponent as O, normalizeStyle as S, normalizeClass as C, createElementVNode as h, withModifiers as x, createCommentVNode as p, unref as _, renderSlot as v, toDisplayString as V } from "vue";
import { openConfirm as E } from "lkt-modal-confirm";
const F = (n, e = "_") => `${n}_${e}`;
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
    return this.config.find((t) => t.alias === e);
  }
  getModalInfo(e, t = "_", r = {}) {
    const c = F(e, t), d = this.findConfig(e);
    return {
      component: typeof d < "u" ? d.component : "",
      alias: e,
      index: c,
      key: t,
      props: { ...r, modalName: e, modalKey: t, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, t = "_", r = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const d = this.getModalInfo(e, t, r);
      return this.components[d.index] ? this.focus(d) : (this.components[d.index] = d, this.components[d.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, t = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const c = this.getModalInfo(e, t, {});
      delete this.components[c.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new R(),
  canvas: void 0,
  defaultCloseIcon: ""
}, j = { class: "lkt-modal-canvas" }, D = /* @__PURE__ */ w({
  __name: "LktModalCanvas",
  setup(n, { expose: e }) {
    const t = g(0), r = $(), c = g([]), d = () => {
      t.value = t.value + 1, setTimeout(() => {
        var o;
        (o = r == null ? void 0 : r.proxy) == null || o.$forceUpdate();
      }, 1);
    }, u = y(() => (t.value, Object.values(s.controller.components)));
    return e({
      refresh: d,
      refreshModal: (o, f = "_", m = {}) => {
        c.value.forEach((i) => {
          i.modalName === o && i.modalKey === f && typeof i.doRefresh == "function" && i.doRefresh(m);
        });
      },
      execModal: (o, f = "_", m, i = {}) => {
        c.value.forEach((M) => {
          M.modalName === o && M.modalKey === f && M[m](i);
        });
      }
    }), (o, f) => (l(), a("section", j, [
      (l(!0), a(I, null, b(u.value, (m) => (l(), T(B(m.component), K({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: c,
        key: m.index
      }, m.props), null, 16))), 128))
    ]));
  }
}), te = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(n, e, t), s.canvas.refresh();
}, se = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(n, e, t), s.canvas.refresh();
}, le = (n, e = "_", t, r = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(n, e, t, r), s.canvas.refresh();
}, H = (n, e = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, e), s.canvas.refresh();
}, ae = (n, e) => {
  s.controller.addWindow({ alias: n, component: e });
}, re = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, e), s.canvas.refresh(), N(() => {
    s.controller.open(n, e, t), s.canvas.refresh();
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
}, ee = /* @__PURE__ */ w({
  __name: "LktModal",
  props: {
    size: { default: "" },
    preTitle: { default: "" },
    preTitleIcon: { default: "" },
    title: { default: "" },
    closeIcon: { default: s.defaultCloseIcon },
    closeConfirm: { default: "" },
    closeConfirmKey: { default: "_" },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    hiddenFooter: { type: Boolean, default: !1 },
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    beforeClose: { type: Function, default: void 0 },
    item: { default: () => ({}) }
  },
  setup(n) {
    const e = n, t = g(0), r = y(() => {
      let o = [];
      return e.size && o.push(`is-${e.size}`), o.join(" ");
    }), c = () => {
      const o = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), H(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        E(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: o
        });
        return;
      }
      o();
    }, d = () => {
      e.disabledVeilClick || c();
    }, u = L(), z = y(() => {
      t.value;
      let o = [];
      for (let f in u) f.indexOf("button-") === 0 && o.push(f);
      return o;
    }), k = y(() => {
      t.value;
      let o = [];
      for (let f in u) f.indexOf("footer-button-") === 0 && o.push(f);
      return o;
    });
    return (o, f) => {
      const m = O("lkt-button");
      return l(), a("section", {
        class: C(["lkt-modal", r.value]),
        style: S("z-index: " + o.zIndex)
      }, [
        h("div", {
          class: "lkt-modal-back",
          onClick: x(d, ["prevent", "stop"])
        }),
        h("div", P, [
          h("header", W, [
            h("div", U, [
              o.preTitleIcon || _(u)["pre-title"] || o.preTitle ? (l(), a("div", q, [
                o.preTitleIcon ? (l(), a("i", {
                  key: 0,
                  class: C(o.preTitleIcon)
                }, null, 2)) : p("", !0),
                _(u)["pre-title"] ? v(o.$slots, "pre-title", { key: 1 }) : o.preTitle ? (l(), a("div", {
                  key: 2,
                  innerHTML: o.preTitle
                }, null, 8, A)) : p("", !0)
              ])) : p("", !0),
              o.title ? (l(), a("div", G, V(o.title), 1)) : p("", !0)
            ]),
            h("div", J, [
              (l(!0), a(I, null, b(z.value, (i) => (l(), a("div", {
                class: C("lkt-modal-button lkt-modal-" + i)
              }, [
                v(o.$slots, i)
              ], 2))), 256)),
              o.showClose ? (l(), T(m, {
                key: 0,
                class: "lkt-modal-button",
                onClick: x(c, ["prevent", "stop"]),
                disabled: o.disabledClose,
                icon: o.closeIcon
              }, null, 8, ["disabled", "icon"])) : p("", !0)
            ])
          ]),
          h("section", Q, [
            v(o.$slots, "default")
          ]),
          !o.hiddenFooter && (k.value.length > 0 || _(u).footer) ? (l(), a("footer", X, [
            _(u).footer ? (l(), a("div", Y, [
              v(o.$slots, "footer")
            ])) : p("", !0),
            k.value.length > 0 ? (l(), a("div", Z, [
              (l(!0), a(I, null, b(k.value, (i) => (l(), a("div", {
                class: C("lkt-modal-button lkt-modal-" + i)
              }, [
                v(o.$slots, i)
              ], 2))), 256))
            ])) : p("", !0)
          ])) : p("", !0)
        ], 512)
      ], 6);
    };
  }
}), de = {
  install: (n) => {
    n.component("lkt-modal-canvas") === void 0 && n.component("lkt-modal-canvas", D), n.component("lkt-modal") === void 0 && n.component("lkt-modal", ee);
  }
}, ie = (n) => {
  s.canvas = n;
}, ce = (n) => {
  s.defaultCloseIcon = n;
};
export {
  ae as addModal,
  H as closeModal,
  de as default,
  le as execModal,
  te as openModal,
  re as reOpenModal,
  se as refreshModal,
  ie as setCanvas,
  ce as setDefaultModalCloseIcon
};
