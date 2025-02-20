import { defineComponent as j, ref as T, getCurrentInstance as E, computed as f, createElementBlock as a, openBlock as r, Fragment as O, renderList as $, createBlock as x, resolveDynamicComponent as P, mergeProps as F, nextTick as H, mergeDefaults as W, useSlots as A, resolveComponent as U, normalizeStyle as q, normalizeClass as I, createElementVNode as y, withModifiers as R, createCommentVNode as d, unref as w, renderSlot as M, toDisplayString as G, normalizeProps as S } from "vue";
import { ModalCallbackAction as B, ModalType as J, getDefaultValues as Q, Modal as X } from "lkt-vue-kernel";
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
    const u = Y(o, e), i = this.findConfig(o), _ = typeof i < "u" ? i.component : "";
    let g = {
      modalName: o,
      modalKey: e,
      zIndex: this.zIndex
    };
    return {
      component: _,
      alias: o,
      index: u,
      key: e,
      props: { ...l, ...g, modalConfig: g },
      zIndex: this.zIndex
    };
  }
  open(o, e = "_", l = {}) {
    if (this.findConfig(o)) {
      ++this.zIndex;
      const i = this.getModalInfo(o, e, l);
      return this.components[i.index] ? this.focus(i) : (this.components[i.index] = i, this.components[i.index]);
    }
  }
  focus(o) {
    return this.components[o.index] = o, this.components[o.index];
  }
  close(o, e = "_") {
    if (this.findConfig(o)) {
      --this.zIndex;
      const u = this.getModalInfo(o, e, {});
      delete this.components[u.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new Z(),
  canvas: void 0,
  defaultCloseIcon: ""
}, ee = { class: "lkt-modal-canvas" }, oe = /* @__PURE__ */ j({
  __name: "LktModalCanvas",
  setup(n, { expose: o }) {
    const e = T(0), l = E(), u = T([]), i = () => {
      e.value = e.value + 1, setTimeout(() => {
        var m;
        (m = l == null ? void 0 : l.proxy) == null || m.$forceUpdate();
      }, 1);
    }, _ = f(() => (e.value, Object.values(s.controller.components)));
    return o({
      refresh: i,
      refreshModal: (m, h = "_", c = {}) => {
        u.value.forEach((v) => {
          v.modalName === m && v.modalKey === h && typeof v.doRefresh == "function" && v.doRefresh(c);
        });
      },
      execModal: (m, h = "_", c, v = {}) => {
        u.value.forEach((k) => {
          k.modalName === m && k.modalKey === h && k[c](v);
        });
      }
    }), (m, h) => (r(), a("section", ee, [
      (r(!0), a(O, null, $(_.value, (c) => (r(), x(P(c.component), F({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: u,
        key: c.index
      }, c.props), null, 16))), 128))
    ]));
  }
}), D = (n, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(n, o, e), s.canvas.refresh();
}, ne = (n, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(n, o, e), s.canvas.refresh();
}, te = (n, o = "_", e, l = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(n, o, e, l), s.canvas.refresh();
}, N = (n, o = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, o), s.canvas.refresh();
}, le = (n, o) => {
  s.controller.addWindow({ alias: n, component: o });
}, se = (n, o = "_", e = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(n, o), s.canvas.refresh(), H(() => {
    s.controller.open(n, o, e), s.canvas.refresh();
  });
}, re = (n, o = "_", e = {}) => {
  let l = n;
  typeof l == "string" && l.indexOf("confirm__") === 0 && (l = l.substring(9)), D("confirm__" + l, o, e);
}, ae = (n, o = "_") => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), N("confirm__" + e, o);
}, Me = (n, o) => {
  let e = n;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), le("confirm__" + e, o);
}, Be = (n) => {
  let o = n.modalKey ? n.modalKey : "_", e = n.args ? n.args : {};
  switch (n.action) {
    case B.ReOpen:
      return se(n.modalName, o, e);
    case B.Open:
      return D(n.modalName, o, e);
    case B.Close:
      return N(n.modalName, o);
    case B.Refresh:
      return ne(n.modalName, o, e);
    case B.Exec:
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
    closeConfirmKey: { type: [String, Number, Function] },
    showClose: { type: Boolean },
    disabledClose: { type: Boolean },
    disabledVeilClick: { type: Boolean },
    hiddenFooter: { type: Boolean },
    modalName: { type: [String, Function] },
    modalKey: { type: [String, Number, Function] },
    zIndex: {},
    beforeClose: { type: Function },
    item: {},
    confirmButton: {},
    cancelButton: {}
  }, Q(X)),
  emits: ["confirm"],
  setup(n, { emit: o }) {
    const e = n, l = T(0), u = f(() => {
      let t = [];
      return e.size && t.push(`is-${e.size}`), t.join(" ");
    }), i = o, _ = () => {
      const t = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), N(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        re(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: t
        });
        return;
      }
      t();
    }, g = () => {
      e.disabledVeilClick || _();
    }, C = A(), m = f(() => {
      l.value;
      let t = [];
      for (let p in C) p.indexOf("button-") === 0 && t.push(p);
      return t;
    }), h = f(() => {
      l.value;
      let t = [];
      for (let p in C) p.indexOf("footer-button-") === 0 && t.push(p);
      return t;
    }), c = f(() => e.type === J.Confirm), v = f(() => e.hiddenFooter ? !1 : h.value.length > 0 || !!C.footer || k.value || z.value), k = f(() => c.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), z = f(() => c.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), L = f(() => {
      if (!k.value) return {};
      let t = () => {
        typeof e.cancelButton.onClick == "function" && e.cancelButton.onClick(), ae(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        onClick: t
      };
    }), V = f(() => {
      if (!z.value) return {};
      let t = () => {
        var p;
        typeof e.confirmButton.onClick == "function" && e.confirmButton.onClick(), (p = e.confirmButton) != null && p.onConfirm && typeof e.confirmButton.onConfirm == "function" && e.confirmButton.onConfirm(), i("confirm"), N(e.modalName, e.modalKey);
      };
      return {
        ...e.confirmButton,
        onClick: t
      };
    });
    return (t, p) => {
      const K = U("lkt-button");
      return r(), a("section", {
        class: I(["lkt-modal", u.value]),
        style: q("z-index: " + t.zIndex)
      }, [
        y("div", {
          class: "lkt-modal-back",
          onClick: R(g, ["prevent", "stop"])
        }),
        y("div", ie, [
          y("header", ce, [
            y("div", de, [
              t.preTitleIcon || w(C)["pre-title"] || t.preTitle ? (r(), a("div", ue, [
                t.preTitleIcon ? (r(), a("i", {
                  key: 0,
                  class: I(t.preTitleIcon)
                }, null, 2)) : d("", !0),
                w(C)["pre-title"] ? M(t.$slots, "pre-title", { key: 1 }) : t.preTitle ? (r(), a("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, fe)) : d("", !0)
              ])) : d("", !0),
              t.title ? (r(), a("div", me, G(t.title), 1)) : d("", !0)
            ]),
            y("div", pe, [
              (r(!0), a(O, null, $(m.value, (b) => (r(), a("div", {
                class: I("lkt-modal-button lkt-modal-" + b)
              }, [
                M(t.$slots, b)
              ], 2))), 256)),
              t.showClose ? (r(), x(K, {
                key: 0,
                class: "lkt-modal-button",
                onClick: R(_, ["prevent", "stop"]),
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : d("", !0)
            ])
          ]),
          y("section", he, [
            M(t.$slots, "default")
          ]),
          v.value ? (r(), a("footer", ve, [
            w(C).footer ? (r(), a("div", Ce, [
              M(t.$slots, "footer")
            ])) : d("", !0),
            h.value.length > 0 ? (r(), a("div", ke, [
              (r(!0), a(O, null, $(h.value, (b) => (r(), a("div", {
                class: I("lkt-modal-button lkt-modal-" + b)
              }, [
                M(t.$slots, b)
              ], 2))), 256))
            ])) : d("", !0),
            c.value ? (r(), a("div", _e, [
              k.value ? (r(), x(K, S(F({ key: 0 }, L.value)), null, 16)) : d("", !0),
              z.value ? (r(), x(K, S(F({ key: 1 }, V.value)), null, 16)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ], 512)
      ], 6);
    };
  }
}), Ie = {
  install: (n) => {
    n.component("lkt-modal-canvas") === void 0 && n.component("lkt-modal-canvas", oe), n.component("lkt-modal") === void 0 && n.component("lkt-modal", ye);
  }
}, xe = (n) => {
  s.canvas = n;
}, Ne = (n) => {
  s.defaultCloseIcon = n;
};
export {
  Me as addConfirm,
  le as addModal,
  ae as closeConfirm,
  N as closeModal,
  Ie as default,
  te as execModal,
  re as openConfirm,
  D as openModal,
  se as reOpenModal,
  ne as refreshModal,
  Be as runModalCallback,
  xe as setCanvas,
  Ne as setDefaultModalCloseIcon
};
