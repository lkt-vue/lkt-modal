import { defineComponent as j, ref as w, getCurrentInstance as E, computed as h, createElementBlock as i, openBlock as s, Fragment as K, renderList as T, createBlock as I, resolveDynamicComponent as P, mergeProps as O, nextTick as H, mergeDefaults as W, useSlots as A, resolveComponent as U, normalizeStyle as q, normalizeClass as B, createElementVNode as y, withModifiers as R, createCommentVNode as m, unref as N, renderSlot as M, toDisplayString as G, normalizeProps as S } from "vue";
import { ModalCallbackAction as b, ModalType as J, getDefaultValues as Q, Modal as X } from "lkt-vue-kernel";
const Y = (n, o = "_") => `${n}_${o}`;
class Z {
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
  getModalInfo(o, e = "_", l = {}) {
    const p = Y(o, e), u = this.findConfig(o);
    return {
      component: typeof u < "u" ? u.component : "",
      alias: o,
      index: p,
      key: e,
      props: { ...l, modalName: o, modalKey: e, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(o, e = "_", l = {}) {
    if (this.findConfig(o)) {
      ++this.zIndex;
      const u = this.getModalInfo(o, e, l);
      return this.components[u.index] ? this.focus(u) : (this.components[u.index] = u, this.components[u.index]);
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
const r = {
  controller: new Z(),
  canvas: void 0,
  defaultCloseIcon: ""
}, ee = { class: "lkt-modal-canvas" }, oe = /* @__PURE__ */ j({
  __name: "LktModalCanvas",
  setup(n, { expose: o }) {
    const e = w(0), l = E(), p = w([]), u = () => {
      e.value = e.value + 1, setTimeout(() => {
        var a;
        (a = l == null ? void 0 : l.proxy) == null || a.$forceUpdate();
      }, 1);
    }, k = h(() => (e.value, Object.values(r.controller.components)));
    o({
      refresh: u,
      refreshModal: (a, f = "_", c = {}) => {
        p.value.forEach((d) => {
          d.modalName === a && d.modalKey === f && typeof d.doRefresh == "function" && d.doRefresh(c);
        });
      },
      execModal: (a, f = "_", c, d = {}) => {
        p.value.forEach((C) => {
          C.modalName === a && C.modalKey === f && C[c](d);
        });
      }
    });
    const x = (a) => {
      var f, c, d;
      if ((c = (f = a.props) == null ? void 0 : f.confirmButton) != null && c.onClick && typeof a.props.confirmButton.onClick == "function") {
        a.props.confirmButton.onClick();
        return;
      }
      if ((d = a.props) != null && d.onConfirm && typeof a.props.onConfirm == "function") {
        a.props.onConfirm();
        return;
      }
    };
    return (a, f) => (s(), i("section", ee, [
      (s(!0), i(K, null, T(k.value, (c) => (s(), I(P(c.component), O({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: p,
        key: c.index
      }, c.props, {
        onConfirm: () => x(c)
      }), null, 16, ["onConfirm"]))), 128))
    ]));
  }
}), D = (n, o = "_", e = {}) => {
  if (!r.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  r.controller.open(n, o, e), r.canvas.refresh();
}, ne = (n, o = "_", e = {}) => {
  if (!r.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  r.canvas.refreshModal(n, o, e), r.canvas.refresh();
}, te = (n, o = "_", e, l = {}) => {
  if (!r.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  r.canvas.execModal(n, o, e, l), r.canvas.refresh();
}, $ = (n, o = "_") => {
  if (!r.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  r.controller.close(n, o), r.canvas.refresh();
}, le = (n, o) => {
  r.controller.addWindow({ alias: n, component: o });
}, re = (n, o = "_", e = {}) => {
  if (!r.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  r.controller.close(n, o), r.canvas.refresh(), H(() => {
    r.controller.open(n, o, e), r.canvas.refresh();
  });
}, se = (n, o = "_", e = {}) => {
  let l = n;
  typeof l == "string" && l.indexOf("confirm__") === 0 && (l = l.substring(9)), D("confirm__" + l, o, e);
}, ae = (n, o = "_") => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), $("confirm__" + e, o);
}, be = (n, o) => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), le("confirm__" + e, o);
}, Be = (n) => {
  let o = n.modalKey ? n.modalKey : "_", e = n.args ? n.args : {};
  switch (n.action) {
    case b.ReOpen:
      return re(n.modalName, o, e);
    case b.Open:
      return D(n.modalName, o, e);
    case b.Close:
      return $(n.modalName, o);
    case b.Refresh:
      return ne(n.modalName, o, e);
    case b.Exec:
      let l = n.method;
      return l ? te(n.modalName, o, l, e) : void 0;
  }
}, ie = {
  class: "lkt-modal-inner",
  ref: "inner"
}, ce = { class: "lkt-modal-header" }, de = { class: "lkt-modal-header_title-container" }, ue = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, fe = ["innerHTML"], me = {
  key: 1,
  class: "lkt-modal-header_title"
}, pe = { class: "lkt-modal-button-tray" }, he = { class: "lkt-modal-content" }, ve = {
  key: 0,
  class: "lkt-modal-footer"
}, Ce = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ke = {
  key: 1,
  class: "lkt-modal-button-tray"
}, _e = {
  key: 2,
  class: "lkt-modal-button-tray"
}, ye = /* @__PURE__ */ j({
  __name: "LktModal",
  props: /* @__PURE__ */ W({
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
  }, Q(X)),
  emits: ["confirm"],
  setup(n, { emit: o }) {
    const e = n, l = w(0), p = h(() => {
      let t = [];
      return e.size && t.push(`is-${e.size}`), t.join(" ");
    }), u = o, k = () => {
      const t = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), $(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        se(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: t
        });
        return;
      }
      t();
    }, F = () => {
      e.disabledVeilClick || k();
    }, v = A(), x = h(() => {
      l.value;
      let t = [];
      for (let _ in v) _.indexOf("button-") === 0 && t.push(_);
      return t;
    }), a = h(() => {
      l.value;
      let t = [];
      for (let _ in v) _.indexOf("footer-button-") === 0 && t.push(_);
      return t;
    }), f = h(() => e.type === J.Confirm), c = h(() => e.hiddenFooter ? !1 : a.value.length > 0 || !!v.footer || d.value || C.value), d = h(() => f.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), C = h(() => f.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), L = h(() => {
      if (!d.value) return {};
      let t = () => {
        typeof e.cancelButton.onClick == "function" && e.cancelButton.onClick(), ae(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        onClick: t
      };
    }), V = h(() => {
      if (!C.value) return {};
      let t = () => {
        typeof e.confirmButton.onClick == "function" && e.confirmButton.onClick(), u("confirm"), k();
      };
      return {
        ...e.confirmButton,
        onClick: t
      };
    });
    return (t, _) => {
      const z = U("lkt-button");
      return s(), i("section", {
        class: B(["lkt-modal", p.value]),
        style: q("z-index: " + t.zIndex)
      }, [
        y("div", {
          class: "lkt-modal-back",
          onClick: R(F, ["prevent", "stop"])
        }),
        y("div", ie, [
          y("header", ce, [
            y("div", de, [
              t.preTitleIcon || N(v)["pre-title"] || t.preTitle ? (s(), i("div", ue, [
                t.preTitleIcon ? (s(), i("i", {
                  key: 0,
                  class: B(t.preTitleIcon)
                }, null, 2)) : m("", !0),
                N(v)["pre-title"] ? M(t.$slots, "pre-title", { key: 1 }) : t.preTitle ? (s(), i("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, fe)) : m("", !0)
              ])) : m("", !0),
              t.title ? (s(), i("div", me, G(t.title), 1)) : m("", !0)
            ]),
            y("div", pe, [
              (s(!0), i(K, null, T(x.value, (g) => (s(), i("div", {
                class: B("lkt-modal-button lkt-modal-" + g)
              }, [
                M(t.$slots, g)
              ], 2))), 256)),
              t.showClose ? (s(), I(z, {
                key: 0,
                class: "lkt-modal-button",
                onClick: R(k, ["prevent", "stop"]),
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : m("", !0)
            ])
          ]),
          y("section", he, [
            M(t.$slots, "default")
          ]),
          c.value ? (s(), i("footer", ve, [
            N(v).footer ? (s(), i("div", Ce, [
              M(t.$slots, "footer")
            ])) : m("", !0),
            a.value.length > 0 ? (s(), i("div", ke, [
              (s(!0), i(K, null, T(a.value, (g) => (s(), i("div", {
                class: B("lkt-modal-button lkt-modal-" + g)
              }, [
                M(t.$slots, g)
              ], 2))), 256))
            ])) : m("", !0),
            f.value ? (s(), i("div", _e, [
              d.value ? (s(), I(z, S(O({ key: 0 }, L.value)), null, 16)) : m("", !0),
              C.value ? (s(), I(z, S(O({ key: 1 }, V.value)), null, 16)) : m("", !0)
            ])) : m("", !0)
          ])) : m("", !0)
        ], 512)
      ], 6);
    };
  }
}), Ie = {
  install: (n) => {
    n.component("lkt-modal-canvas") === void 0 && n.component("lkt-modal-canvas", oe), n.component("lkt-modal") === void 0 && n.component("lkt-modal", ye);
  }
}, xe = (n) => {
  r.canvas = n;
}, ze = (n) => {
  r.defaultCloseIcon = n;
};
export {
  be as addConfirm,
  le as addModal,
  ae as closeConfirm,
  $ as closeModal,
  Ie as default,
  te as execModal,
  se as openConfirm,
  D as openModal,
  re as reOpenModal,
  ne as refreshModal,
  Be as runModalCallback,
  xe as setCanvas,
  ze as setDefaultModalCloseIcon
};
