import { defineComponent as S, ref as T, getCurrentInstance as L, computed as h, createElementBlock as c, openBlock as r, Fragment as w, renderList as $, createBlock as B, resolveDynamicComponent as V, mergeProps as K, nextTick as E, mergeDefaults as P, useSlots as H, resolveComponent as W, normalizeStyle as U, normalizeClass as b, createElementVNode as y, withModifiers as O, createCommentVNode as m, unref as z, renderSlot as M, toDisplayString as q, normalizeProps as F } from "vue";
import { ModalType as A, getDefaultValues as G, Modal as J } from "lkt-vue-kernel";
const Q = (n, o = "_") => `${n}_${o}`;
class X {
  constructor() {
    this.config = [], this.components = {}, this.zIndex = 500;
  }
  setConfig(o) {
    this.config = o;
  }
  addWindow(o) {
    this.config.push(o);
  }
  findConfig(o) {
    return this.config.find((e) => e.alias === o);
  }
  getModalInfo(o, e = "_", s = {}) {
    const p = Q(o, e), f = this.findConfig(o);
    return {
      component: typeof f < "u" ? f.component : "",
      alias: o,
      index: p,
      key: e,
      props: { ...s, modalName: o, modalKey: e, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(o, e = "_", s = {}) {
    if (this.findConfig(o)) {
      ++this.zIndex;
      const f = this.getModalInfo(o, e, s);
      return this.components[f.index] ? this.focus(f) : (this.components[f.index] = f, this.components[f.index]);
    }
  }
  focus(o) {
    return this.components[o.index] = o, this.components[o.index];
  }
  close(o, e = "_") {
    if (this.findConfig(o)) {
      --this.zIndex;
      const p = this.getModalInfo(o, e, {});
      delete this.components[p.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const l = {
  controller: new X(),
  canvas: void 0,
  defaultCloseIcon: ""
}, Y = { class: "lkt-modal-canvas" }, Z = /* @__PURE__ */ S({
  __name: "LktModalCanvas",
  setup(n, { expose: o }) {
    const e = T(0), s = L(), p = T([]), f = () => {
      e.value = e.value + 1, setTimeout(() => {
        var i;
        (i = s == null ? void 0 : s.proxy) == null || i.$forceUpdate();
      }, 1);
    }, k = h(() => (e.value, Object.values(l.controller.components)));
    o({
      refresh: f,
      refreshModal: (i, u = "_", a = {}) => {
        p.value.forEach((d) => {
          d.modalName === i && d.modalKey === u && typeof d.doRefresh == "function" && d.doRefresh(a);
        });
      },
      execModal: (i, u = "_", a, d = {}) => {
        p.value.forEach((C) => {
          C.modalName === i && C.modalKey === u && C[a](d);
        });
      }
    });
    const I = (i) => {
      var u, a, d;
      if ((a = (u = i.props) == null ? void 0 : u.confirmButton) != null && a.onClick && typeof i.props.confirmButton.onClick == "function") {
        i.props.confirmButton.onClick();
        return;
      }
      if ((d = i.props) != null && d.onConfirm && typeof i.props.onConfirm == "function") {
        i.props.onConfirm();
        return;
      }
    };
    return (i, u) => (r(), c("section", Y, [
      (r(!0), c(w, null, $(k.value, (a) => (r(), B(V(a.component), K({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: p,
        key: a.index
      }, a.props, {
        onConfirm: () => I(a)
      }), null, 16, ["onConfirm"]))), 128))
    ]));
  }
}), ee = (n, o = "_", e = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.open(n, o, e), l.canvas.refresh();
}, _e = (n, o = "_", e = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.canvas.refreshModal(n, o, e), l.canvas.refresh();
}, ye = (n, o = "_", e, s = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.canvas.execModal(n, o, e, s), l.canvas.refresh();
}, j = (n, o = "_") => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.close(n, o), l.canvas.refresh();
}, oe = (n, o) => {
  l.controller.addWindow({ alias: n, component: o });
}, ge = (n, o = "_", e = {}) => {
  if (!l.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  l.controller.close(n, o), l.canvas.refresh(), E(() => {
    l.controller.open(n, o, e), l.canvas.refresh();
  });
}, ne = (n, o = "_", e = {}) => {
  let s = n;
  typeof s == "string" && s.indexOf("confirm__") === 0 && (s = s.substring(9)), ee("confirm__" + s, o, e);
}, te = (n, o = "_") => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), j("confirm__" + e, o);
}, Me = (n, o) => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), oe("confirm__" + e, o);
}, le = {
  class: "lkt-modal-inner",
  ref: "inner"
}, se = { class: "lkt-modal-header" }, re = { class: "lkt-modal-header_title-container" }, ie = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, ce = ["innerHTML"], ae = {
  key: 1,
  class: "lkt-modal-header_title"
}, de = { class: "lkt-modal-button-tray" }, fe = { class: "lkt-modal-content" }, ue = {
  key: 0,
  class: "lkt-modal-footer"
}, me = {
  key: 0,
  class: "lkt-modal-footer_main"
}, pe = {
  key: 1,
  class: "lkt-modal-button-tray"
}, he = {
  key: 2,
  class: "lkt-modal-button-tray"
}, ve = /* @__PURE__ */ S({
  __name: "LktModal",
  props: /* @__PURE__ */ P({
    type: {},
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
    item: {},
    confirmButton: {},
    cancelButton: {}
  }, G(J)),
  emits: ["confirm"],
  setup(n, { emit: o }) {
    const e = n, s = T(0), p = h(() => {
      let t = [];
      return e.size && t.push(`is-${e.size}`), t.join(" ");
    }), f = o, k = () => {
      const t = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), j(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        ne(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: t
        });
        return;
      }
      t();
    }, N = () => {
      e.disabledVeilClick || k();
    }, v = H(), I = h(() => {
      s.value;
      let t = [];
      for (let _ in v) _.indexOf("button-") === 0 && t.push(_);
      return t;
    }), i = h(() => {
      s.value;
      let t = [];
      for (let _ in v) _.indexOf("footer-button-") === 0 && t.push(_);
      return t;
    }), u = h(() => e.type === A.Confirm), a = h(() => e.hiddenFooter ? !1 : i.value.length > 0 || !!v.footer || d.value || C.value), d = h(() => u.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), C = h(() => u.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), R = h(() => {
      if (!d.value) return {};
      let t = () => {
        typeof e.cancelButton.onClick == "function" && e.cancelButton.onClick(), te(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        onClick: t
      };
    }), D = h(() => {
      if (!C.value) return {};
      let t = () => {
        typeof e.confirmButton.onClick == "function" && e.confirmButton.onClick(), f("confirm"), k();
      };
      return {
        ...e.confirmButton,
        onClick: t
      };
    });
    return (t, _) => {
      const x = W("lkt-button");
      return r(), c("section", {
        class: b(["lkt-modal", p.value]),
        style: U("z-index: " + t.zIndex)
      }, [
        y("div", {
          class: "lkt-modal-back",
          onClick: O(N, ["prevent", "stop"])
        }),
        y("div", le, [
          y("header", se, [
            y("div", re, [
              t.preTitleIcon || z(v)["pre-title"] || t.preTitle ? (r(), c("div", ie, [
                t.preTitleIcon ? (r(), c("i", {
                  key: 0,
                  class: b(t.preTitleIcon)
                }, null, 2)) : m("", !0),
                z(v)["pre-title"] ? M(t.$slots, "pre-title", { key: 1 }) : t.preTitle ? (r(), c("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, ce)) : m("", !0)
              ])) : m("", !0),
              t.title ? (r(), c("div", ae, q(t.title), 1)) : m("", !0)
            ]),
            y("div", de, [
              (r(!0), c(w, null, $(I.value, (g) => (r(), c("div", {
                class: b("lkt-modal-button lkt-modal-" + g)
              }, [
                M(t.$slots, g)
              ], 2))), 256)),
              t.showClose ? (r(), B(x, {
                key: 0,
                class: "lkt-modal-button",
                onClick: O(k, ["prevent", "stop"]),
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : m("", !0)
            ])
          ]),
          y("section", fe, [
            M(t.$slots, "default")
          ]),
          a.value ? (r(), c("footer", ue, [
            z(v).footer ? (r(), c("div", me, [
              M(t.$slots, "footer")
            ])) : m("", !0),
            i.value.length > 0 ? (r(), c("div", pe, [
              (r(!0), c(w, null, $(i.value, (g) => (r(), c("div", {
                class: b("lkt-modal-button lkt-modal-" + g)
              }, [
                M(t.$slots, g)
              ], 2))), 256))
            ])) : m("", !0),
            u.value ? (r(), c("div", he, [
              d.value ? (r(), B(x, F(K({ key: 0 }, R.value)), null, 16)) : m("", !0),
              C.value ? (r(), B(x, F(K({ key: 1 }, D.value)), null, 16)) : m("", !0)
            ])) : m("", !0)
          ])) : m("", !0)
        ], 512)
      ], 6);
    };
  }
}), be = {
  install: (n) => {
    n.component("lkt-modal-canvas") === void 0 && n.component("lkt-modal-canvas", Z), n.component("lkt-modal") === void 0 && n.component("lkt-modal", ve);
  }
}, Be = (n) => {
  l.canvas = n;
}, Ie = (n) => {
  l.defaultCloseIcon = n;
};
export {
  Me as addConfirm,
  oe as addModal,
  te as closeConfirm,
  j as closeModal,
  be as default,
  ye as execModal,
  ne as openConfirm,
  ee as openModal,
  ge as reOpenModal,
  _e as refreshModal,
  Be as setCanvas,
  Ie as setDefaultModalCloseIcon
};
