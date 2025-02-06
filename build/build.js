import { defineComponent as w, ref as M, getCurrentInstance as $, computed as y, createElementBlock as r, openBlock as l, Fragment as I, renderList as b, createBlock as T, resolveDynamicComponent as B, mergeProps as K, nextTick as N, mergeDefaults as S, useSlots as F, resolveComponent as L, normalizeStyle as V, normalizeClass as C, createElementVNode as h, withModifiers as x, createCommentVNode as p, unref as _, renderSlot as v, toDisplayString as D } from "vue";
import { openConfirm as O } from "lkt-modal-confirm";
import { getDefaultValues as E, Modal as R } from "lkt-vue-kernel";
const j = (n, e = "_") => `${n}_${e}`;
class H {
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
  getModalInfo(e, t = "_", a = {}) {
    const d = j(e, t), i = this.findConfig(e);
    return {
      component: typeof i < "u" ? i.component : "",
      alias: e,
      index: d,
      key: t,
      props: { ...a, modalName: e, modalKey: t, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, t = "_", a = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const i = this.getModalInfo(e, t, a);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, t = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const d = this.getModalInfo(e, t, {});
      delete this.components[d.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new H(),
  canvas: void 0,
  defaultCloseIcon: ""
}, P = { class: "lkt-modal-canvas" }, W = /* @__PURE__ */ w({
  __name: "LktModalCanvas",
  setup(n, { expose: e }) {
    const t = M(0), a = $(), d = M([]), i = () => {
      t.value = t.value + 1, setTimeout(() => {
        var o;
        (o = a == null ? void 0 : a.proxy) == null || o.$forceUpdate();
      }, 1);
    }, u = y(() => (t.value, Object.values(s.controller.components)));
    return e({
      refresh: i,
      refreshModal: (o, f = "_", m = {}) => {
        d.value.forEach((c) => {
          c.modalName === o && c.modalKey === f && typeof c.doRefresh == "function" && c.doRefresh(m);
        });
      },
      execModal: (o, f = "_", m, c = {}) => {
        d.value.forEach((g) => {
          g.modalName === o && g.modalKey === f && g[m](c);
        });
      }
    }), (o, f) => (l(), r("section", P, [
      (l(!0), r(I, null, b(u.value, (m) => (l(), T(B(m.component), K({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: d,
        key: m.index
      }, m.props), null, 16))), 128))
    ]));
  }
}), ae = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(n, e, t), s.canvas.refresh();
}, ie = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(n, e, t), s.canvas.refresh();
}, ce = (n, e = "_", t, a = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(n, e, t, a), s.canvas.refresh();
}, U = (n, e = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, e), s.canvas.refresh();
}, de = (n, e) => {
  s.controller.addWindow({ alias: n, component: e });
}, fe = (n, e = "_", t = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, e), s.canvas.refresh(), N(() => {
    s.controller.open(n, e, t), s.canvas.refresh();
  });
}, q = {
  class: "lkt-modal-inner",
  ref: "inner"
}, A = { class: "lkt-modal-header" }, G = { class: "lkt-modal-header_title-container" }, J = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, Q = ["innerHTML"], X = {
  key: 1,
  class: "lkt-modal-header_title"
}, Y = { class: "lkt-modal-button-tray" }, Z = { class: "lkt-modal-content" }, ee = {
  key: 0,
  class: "lkt-modal-footer"
}, oe = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ne = {
  key: 1,
  class: "lkt-modal-button-tray"
}, te = /* @__PURE__ */ w({
  __name: "LktModal",
  props: /* @__PURE__ */ S({
    size: {},
    preTitle: {},
    preTitleIcon: {},
    title: {},
    closeIcon: {},
    closeConfirm: { type: [String, Function] },
    closeConfirmKey: { type: [String, Function] },
    showClose: { type: Boolean },
    disabledClose: { type: Boolean },
    disabledVeilClick: { type: Boolean },
    hiddenFooter: { type: Boolean },
    modalName: { type: [String, Function] },
    modalKey: { type: [String, Function] },
    zIndex: {},
    beforeClose: { type: Function },
    item: {}
  }, E(R)),
  setup(n) {
    const e = n, t = M(0), a = y(() => {
      let o = [];
      return e.size && o.push(`is-${e.size}`), o.join(" ");
    }), d = () => {
      const o = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), U(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        O(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: o
        });
        return;
      }
      o();
    }, i = () => {
      e.disabledVeilClick || d();
    }, u = F(), z = y(() => {
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
      const m = L("lkt-button");
      return l(), r("section", {
        class: C(["lkt-modal", a.value]),
        style: V("z-index: " + o.zIndex)
      }, [
        h("div", {
          class: "lkt-modal-back",
          onClick: x(i, ["prevent", "stop"])
        }),
        h("div", q, [
          h("header", A, [
            h("div", G, [
              o.preTitleIcon || _(u)["pre-title"] || o.preTitle ? (l(), r("div", J, [
                o.preTitleIcon ? (l(), r("i", {
                  key: 0,
                  class: C(o.preTitleIcon)
                }, null, 2)) : p("", !0),
                _(u)["pre-title"] ? v(o.$slots, "pre-title", { key: 1 }) : o.preTitle ? (l(), r("div", {
                  key: 2,
                  innerHTML: o.preTitle
                }, null, 8, Q)) : p("", !0)
              ])) : p("", !0),
              o.title ? (l(), r("div", X, D(o.title), 1)) : p("", !0)
            ]),
            h("div", Y, [
              (l(!0), r(I, null, b(z.value, (c) => (l(), r("div", {
                class: C("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256)),
              o.showClose ? (l(), T(m, {
                key: 0,
                class: "lkt-modal-button",
                onClick: x(d, ["prevent", "stop"]),
                disabled: o.disabledClose,
                icon: o.closeIcon
              }, null, 8, ["disabled", "icon"])) : p("", !0)
            ])
          ]),
          h("section", Z, [
            v(o.$slots, "default")
          ]),
          !o.hiddenFooter && (k.value.length > 0 || _(u).footer) ? (l(), r("footer", ee, [
            _(u).footer ? (l(), r("div", oe, [
              v(o.$slots, "footer")
            ])) : p("", !0),
            k.value.length > 0 ? (l(), r("div", ne, [
              (l(!0), r(I, null, b(k.value, (c) => (l(), r("div", {
                class: C("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256))
            ])) : p("", !0)
          ])) : p("", !0)
        ], 512)
      ], 6);
    };
  }
}), ue = {
  install: (n) => {
    n.component("lkt-modal-canvas") === void 0 && n.component("lkt-modal-canvas", W), n.component("lkt-modal") === void 0 && n.component("lkt-modal", te);
  }
}, me = (n) => {
  s.canvas = n;
}, pe = (n) => {
  s.defaultCloseIcon = n;
};
export {
  de as addModal,
  U as closeModal,
  ue as default,
  ce as execModal,
  ae as openModal,
  fe as reOpenModal,
  ie as refreshModal,
  me as setCanvas,
  pe as setDefaultModalCloseIcon
};
