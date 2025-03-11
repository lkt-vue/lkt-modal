import { defineComponent as S, ref as T, getCurrentInstance as V, computed as f, createElementBlock as i, openBlock as r, Fragment as O, renderList as w, createBlock as x, resolveDynamicComponent as E, mergeProps as $, nextTick as P, mergeDefaults as H, useSlots as A, resolveComponent as U, normalizeStyle as q, normalizeClass as I, createElementVNode as M, withModifiers as G, createCommentVNode as m, unref as K, renderSlot as g, toDisplayString as J, normalizeProps as R } from "vue";
import { ModalCallbackAction as B, ModalType as Q, getDefaultValues as W, Modal as X } from "lkt-vue-kernel";
const Y = (t, o = "_") => `${t}_${o}`;
class Z {
  constructor() {
    this.config = [], this.components = {}, this.zIndex = 500;
  }
  addModal(o) {
    this.config.push(o);
  }
  findConfig(o) {
    return this.config.find((e) => e.alias === o);
  }
  getModalInfo(o, e = "_", l = {}, c = "") {
    const d = Y(o, e);
    let k = {
      modalName: o,
      modalKey: e,
      zIndex: this.zIndex
    };
    return {
      component: c,
      alias: o,
      index: d,
      key: e,
      props: { ...l, ...k, modalConfig: k },
      zIndex: this.zIndex
    };
  }
  open(o, e = "_", l = {}) {
    l.modalKey && (e = l.modalKey);
    const c = this.findConfig(o);
    if (c) {
      ++this.zIndex;
      const d = this.getModalInfo(o, e, l, c.component);
      return this.components[d.index] ? this.focus(d) : (this.components[d.index] = d, this.components[d.index]);
    }
  }
  focus(o) {
    return this.components[o.index] = o, this.components[o.index];
  }
  close(o, e = "_") {
    const l = this.findConfig(o);
    if (l) {
      --this.zIndex;
      const c = this.getModalInfo(o, e, {}, l.component);
      delete this.components[c.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new Z(),
  canvas: void 0,
  defaultCloseIcon: ""
}, ee = { class: "lkt-modal-canvas" }, oe = /* @__PURE__ */ S({
  __name: "LktModalCanvas",
  setup(t, { expose: o }) {
    const e = T(0), l = V(), c = T([]), d = () => {
      e.value = e.value + 1, setTimeout(() => {
        var p;
        (p = l == null ? void 0 : l.proxy) == null || p.$forceUpdate();
      }, 1);
    }, k = f(() => (e.value, Object.values(s.controller.components)));
    return o({
      refresh: d,
      refreshModal: (p, v = "_", u = {}) => {
        c.value.forEach((_) => {
          _.modalName === p && _.modalKey === v && typeof _.doRefresh == "function" && _.doRefresh(u);
        });
      },
      execModal: (p, v = "_", u, _ = {}) => {
        c.value.forEach((C) => {
          C.modalName === p && C.modalKey === v && C[u](_);
        });
      }
    }), (p, v) => (r(), i("section", ee, [
      (r(!0), i(O, null, w(k.value, (u) => (r(), x(E(u.component), $({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: c,
        key: u.index
      }, u.props), null, 16))), 128))
    ]));
  }
}), j = (t, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(t, o, e), s.canvas.refresh();
}, te = (t, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(t, o, e), s.canvas.refresh();
}, ne = (t, o = "_", e, l = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(t, o, e, l), s.canvas.refresh();
}, N = (t, o = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, o), s.canvas.refresh();
}, le = (t, o) => {
  s.controller.addModal({ alias: t, component: o });
}, se = (t, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, o), s.canvas.refresh(), P(() => {
    s.controller.open(t, o, e), s.canvas.refresh();
  });
}, re = (t, o = "_", e = {}) => {
  let l = t;
  typeof l == "string" && l.indexOf("confirm__") === 0 && (l = l.substring(9)), j("confirm__" + l, o, e);
}, ae = (t, o = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), N("confirm__" + e, o);
}, ge = (t, o) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), le("confirm__" + e, o);
}, Be = (t) => {
  let o = t.modalKey ? t.modalKey : "_", e = t.args ? t.args : {};
  switch (t.action) {
    case B.ReOpen:
      return se(t.modalName, o, e);
    case B.Open:
      return j(t.modalName, o, e);
    case B.Close:
      return N(t.modalName, o);
    case B.Refresh:
      return te(t.modalName, o, e);
    case B.Exec:
      let l = t.method;
      return l ? ne(t.modalName, o, l, e) : void 0;
  }
}, ie = {
  class: "lkt-modal-inner",
  ref: "inner"
}, ce = { class: "lkt-modal-header" }, de = { class: "lkt-modal-header_title-container" }, ue = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, me = ["innerHTML"], fe = {
  key: 1,
  class: "lkt-modal-header_title"
}, pe = { class: "lkt-modal-button-tray" }, he = { class: "lkt-modal-content" }, ve = {
  key: 0,
  class: "lkt-modal-footer"
}, _e = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ke = {
  key: 1,
  class: "lkt-modal-button-tray"
}, ye = {
  key: 2,
  class: "lkt-modal-button-tray"
}, Ce = /* @__PURE__ */ S({
  __name: "LktModal",
  props: /* @__PURE__ */ H({
    modalName: { type: [String, Function] },
    modalKey: { type: [String, Number, Function] },
    zIndex: {},
    type: {},
    size: {},
    preTitle: {},
    preTitleIcon: {},
    title: {},
    closeIcon: {},
    closeConfirm: { type: [String, Function] },
    closeConfirmKey: { type: [String, Number, Function] },
    showClose: { type: Boolean },
    disabledClose: { type: Boolean },
    disabledVeilClick: { type: Boolean },
    hiddenFooter: { type: Boolean },
    beforeClose: { type: Function },
    item: {},
    confirmButton: {},
    cancelButton: {}
  }, W(X)),
  emits: ["confirm"],
  setup(t, { emit: o }) {
    const e = t, l = T(0), c = f(() => {
      let n = [];
      return e.size && n.push(`is-${e.size}`), n.join(" ");
    }), d = o, k = (n) => {
      if (!n) return;
      const a = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), N(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        re(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: a
        });
        return;
      }
      a();
    }, F = (n) => {
      e.disabledVeilClick || k(n);
    }, y = A(), p = f(() => {
      l.value;
      let n = [];
      for (let a in y) a.indexOf("button-") === 0 && n.push(a);
      return n;
    }), v = f(() => {
      l.value;
      let n = [];
      for (let a in y) a.indexOf("footer-button-") === 0 && n.push(a);
      return n;
    }), u = f(() => e.type === Q.Confirm), _ = f(() => e.hiddenFooter ? !1 : v.value.length > 0 || !!y.footer || C.value || z.value), C = f(() => u.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), z = f(() => u.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), D = f(() => {
      if (!C.value) return {};
      let n = () => {
        var a, h;
        typeof ((h = (a = e.cancelButton) == null ? void 0 : a.events) == null ? void 0 : h.click) == "function" && e.cancelButton.events.click(), ae(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        onClick: n
      };
    }), L = f(() => {
      if (!z.value) return {};
      let n = () => {
        var a, h;
        typeof ((h = (a = e.confirmButton) == null ? void 0 : a.events) == null ? void 0 : h.click) == "function" && e.confirmButton.events.click(), d("confirm"), N(e.modalName, e.modalKey);
      };
      return {
        ...e.confirmButton,
        onClick: n
      };
    });
    return (n, a) => {
      const h = U("lkt-button");
      return r(), i("section", {
        class: I(["lkt-modal", c.value]),
        style: q("z-index: " + n.zIndex)
      }, [
        M("div", {
          class: "lkt-modal-back",
          onClick: G(F, ["prevent", "stop"])
        }),
        M("div", ie, [
          M("header", ce, [
            M("div", de, [
              n.preTitleIcon || K(y)["pre-title"] || n.preTitle ? (r(), i("div", ue, [
                n.preTitleIcon ? (r(), i("i", {
                  key: 0,
                  class: I(n.preTitleIcon)
                }, null, 2)) : m("", !0),
                K(y)["pre-title"] ? g(n.$slots, "pre-title", { key: 1 }) : n.preTitle ? (r(), i("div", {
                  key: 2,
                  innerHTML: n.preTitle
                }, null, 8, me)) : m("", !0)
              ])) : m("", !0),
              n.title ? (r(), i("div", fe, J(n.title), 1)) : m("", !0)
            ]),
            M("div", pe, [
              (r(!0), i(O, null, w(p.value, (b) => (r(), i("div", {
                class: I("lkt-modal-button lkt-modal-" + b)
              }, [
                g(n.$slots, b)
              ], 2))), 256)),
              n.showClose ? (r(), x(h, {
                key: 0,
                class: "lkt-modal-button",
                onClick: k,
                disabled: n.disabledClose,
                icon: n.closeIcon
              }, null, 8, ["disabled", "icon"])) : m("", !0)
            ])
          ]),
          M("section", he, [
            g(n.$slots, "default")
          ]),
          _.value ? (r(), i("footer", ve, [
            K(y).footer ? (r(), i("div", _e, [
              g(n.$slots, "footer")
            ])) : m("", !0),
            v.value.length > 0 ? (r(), i("div", ke, [
              (r(!0), i(O, null, w(v.value, (b) => (r(), i("div", {
                class: I("lkt-modal-button lkt-modal-" + b)
              }, [
                g(n.$slots, b)
              ], 2))), 256))
            ])) : m("", !0),
            u.value ? (r(), i("div", ye, [
              C.value ? (r(), x(h, R($({ key: 0 }, D.value)), null, 16)) : m("", !0),
              z.value ? (r(), x(h, R($({ key: 1 }, L.value)), null, 16)) : m("", !0)
            ])) : m("", !0)
          ])) : m("", !0)
        ], 512)
      ], 6);
    };
  }
}), Ie = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", oe), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Ce);
  }
}, xe = (t) => {
  s.canvas = t;
}, Ne = (t) => {
  s.defaultCloseIcon = t;
};
export {
  ge as addConfirm,
  le as addModal,
  ae as closeConfirm,
  N as closeModal,
  Ie as default,
  ne as execModal,
  re as openConfirm,
  j as openModal,
  se as reOpenModal,
  te as refreshModal,
  Be as runModalCallback,
  xe as setCanvas,
  Ne as setDefaultModalCloseIcon
};
