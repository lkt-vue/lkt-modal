import { defineComponent as j, ref as I, getCurrentInstance as H, computed as f, resolveComponent as D, createElementBlock as r, openBlock as a, Fragment as F, renderList as S, createBlock as M, unref as B, resolveDynamicComponent as V, mergeProps as K, withCtx as L, mergeDefaults as q, useSlots as G, normalizeStyle as J, normalizeClass as R, createElementVNode as g, withModifiers as Q, createCommentVNode as i, createVNode as W, normalizeProps as z, guardReactiveProps as X, renderSlot as b, toDisplayString as Y } from "vue";
import { ModalController as m, ModalRegisterType as P, ModalType as Z, ButtonType as x, getDefaultValues as ee, Modal as oe, setModalCanvas as te } from "lkt-vue-kernel";
const le = { class: "lkt-modal-canvas" }, ne = /* @__PURE__ */ j({
  __name: "LktModalCanvas",
  setup(t, { expose: n }) {
    const e = I(0), d = H(), v = I([]), _ = () => {
      e.value = e.value + 1, setTimeout(() => {
        var c;
        (c = d == null ? void 0 : d.proxy) == null || c.$forceUpdate();
      }, 1);
    }, N = f(() => (e.value, Object.values(m.components)));
    return n({
      refresh: _,
      refreshModal: (c, y = "_", C = {}) => {
        v.value.forEach((l) => {
          l.modalName === c && l.modalKey === y && typeof l.doRefresh == "function" && l.doRefresh(C);
        });
      },
      execModal: (c, y = "_", C, l = {}) => {
        v.value.forEach((u) => {
          u.modalName === c && u.modalKey === y && u[C](l);
        });
      }
    }), (c, y) => {
      const C = D("lkt-modal");
      return a(), r("section", le, [
        (a(!0), r(F, null, S(N.value, (l) => {
          var u;
          return a(), r(F, null, [
            l.modalRegister.type === B(P).Full ? (a(), M(V(l.modalRegister.component), K({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: v,
              key: l.index
            }, ((u = l.legacyData) == null ? void 0 : u.props) ?? {}, {
              "modal-name": l.modalConfig.modalName,
              "modal-key": l.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (a(), M(C, K({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: v
            }, l.modalConfig, {
              key: l.index,
              title: l.modalConfig.title
            }), {
              default: L(() => [
                (a(), M(V(l.modalRegister.component), K({ ref_for: !0 }, l.componentProps, {
                  "modal-name": l.modalConfig.modalName,
                  "modal-key": l.modalConfig.modalKey,
                  modalTitle: l.modalConfig.title,
                  "onUpdate:modalTitle": [(k) => l.modalConfig.title = k, _],
                  modalCloseConfirm: l.modalConfig.closeConfirm,
                  "onUpdate:modalCloseConfirm": [(k) => l.modalConfig.closeConfirm = k, _],
                  modalCloseConfirmKey: l.modalConfig.closeConfirmKey,
                  "onUpdate:modalCloseConfirmKey": [(k) => l.modalConfig.closeConfirmKey = k, _]
                }), null, 16, ["modal-name", "modal-key", "modalTitle", "onUpdate:modalTitle", "modalCloseConfirm", "onUpdate:modalCloseConfirm", "modalCloseConfirmKey", "onUpdate:modalCloseConfirmKey"]))
              ]),
              _: 2
            }, 1040, ["title"]))
          ], 64);
        }), 256))
      ]);
    };
  }
}), ae = (t, n) => {
  m.addModal({
    name: t,
    component: n,
    type: P.Full
  });
}, re = (t, n = "_", e = {}) => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.open({
    modalName: t,
    modalKey: n
  }, e, !0);
}, Ne = (t, n = "_", e = {}) => {
  m.refresh({
    modalName: t,
    modalKey: n
  }, e);
}, Te = (t, n = "_", e, d = {}) => {
  m.execModal({
    modalName: t,
    modalKey: n
  }, e, d);
}, w = (t, n = "_") => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.close({
    modalName: t,
    modalKey: n
  });
}, Re = (t, n = "_", e = {}) => {
  m.reOpen({
    modalName: t,
    modalKey: n
  }, e);
}, Fe = (t, n, e) => {
  m.updateModalKey({
    modalName: t,
    modalKey: n
  }, e);
}, se = (t, n = "_", e = {}) => {
  let d = t;
  typeof d == "string" && d.indexOf("confirm__") === 0 && (d = d.substring(9)), re("confirm__" + d, n, e);
}, de = (t, n = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), w("confirm__" + e, n);
}, Oe = (t, n) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), ae("confirm__" + e, n);
}, $e = (t) => {
  m.runModalCallback(t);
}, ie = ["data-modal", "data-key"], me = {
  class: "lkt-modal-inner",
  ref: "inner"
}, ce = { class: "lkt-modal-header" }, ue = {
  key: 0,
  class: "lkt-modal-header-actions"
}, fe = { class: "lkt-modal-header_title-container" }, pe = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, ye = ["innerHTML"], Ce = {
  key: 1,
  class: "lkt-modal-header_title"
}, ke = { class: "lkt-modal-button-tray" }, ve = { class: "lkt-modal-content" }, _e = {
  key: 0,
  class: "lkt-modal-footer"
}, he = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ge = {
  key: 1,
  class: "lkt-modal-button-tray"
}, be = {
  key: 2,
  class: "lkt-modal-button-tray"
}, Be = /* @__PURE__ */ j({
  __name: "LktModal",
  props: /* @__PURE__ */ q({
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
    cancelButton: {},
    headerActionsButton: {}
  }, ee(oe)),
  emits: [
    "confirm"
  ],
  setup(t, { emit: n }) {
    const e = t, d = I(0), v = f(() => {
      let o = [];
      return e.size && o.push(`is-${e.size}`), o.join(" ");
    }), _ = n, N = (o) => {
      if (!o) return;
      const s = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), w(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        se(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: s
        });
        return;
      }
      s();
    }, U = (o) => {
      e.disabledVeilClick || N(o);
    }, p = G(), c = () => {
      var o, s;
      typeof ((s = (o = e.confirmButton) == null ? void 0 : o.events) == null ? void 0 : s.click) == "function" && e.confirmButton.events.click({}), _("confirm"), w(e.modalName, e.modalKey);
    }, y = () => {
      var o, s;
      typeof ((s = (o = e.cancelButton) == null ? void 0 : o.events) == null ? void 0 : s.click) == "function" && e.cancelButton.events.click({}), de(e.modalName, e.modalKey);
    }, C = f(() => {
      d.value;
      let o = [];
      for (let s in p) s.indexOf("button-") === 0 && o.push(s);
      return o;
    }), l = f(() => {
      d.value;
      let o = [];
      for (let s in p) s.indexOf("footer-button-") === 0 && o.push(s);
      return o;
    }), u = f(() => e.type === Z.Confirm), k = f(() => e.hiddenFooter ? !1 : l.value.length > 0 || !!p.footer || O.value || $.value), O = f(() => u.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), $ = f(() => u.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), E = f(() => O.value ? {
      ...e.cancelButton,
      events: {
        ...e.cancelButton.events,
        click: y
      }
    } : {}), A = f(() => $.value ? {
      ...e.confirmButton,
      events: {
        ...e.confirmButton.events,
        click: c
      }
    } : {});
    return (o, s) => {
      const T = D("lkt-button");
      return a(), r("section", {
        class: R(["lkt-modal", v.value]),
        style: J("z-index: " + o.zIndex),
        "data-modal": o.modalName,
        "data-key": o.modalKey
      }, [
        g("div", {
          class: "lkt-modal-back",
          onClick: Q(U, ["prevent", "stop"])
        }),
        g("div", me, [
          g("header", ce, [
            B(p)["header-actions"] ? (a(), r("div", ue, [
              W(T, z(X({
                ...o.headerActionsButton,
                icon: "lkt-icn-cog",
                type: B(x).Tooltip
              })), {
                tooltip: L(({ doClose: h }) => [
                  b(o.$slots, "header-actions")
                ]),
                _: 3
              }, 16)
            ])) : i("", !0),
            g("div", fe, [
              o.preTitleIcon || B(p)["pre-title"] || o.preTitle ? (a(), r("div", pe, [
                o.preTitleIcon ? (a(), r("i", {
                  key: 0,
                  class: R(o.preTitleIcon)
                }, null, 2)) : i("", !0),
                B(p)["pre-title"] ? b(o.$slots, "pre-title", { key: 1 }) : o.preTitle ? (a(), r("div", {
                  key: 2,
                  innerHTML: o.preTitle
                }, null, 8, ye)) : i("", !0)
              ])) : i("", !0),
              o.title ? (a(), r("div", Ce, Y(o.title), 1)) : i("", !0)
            ]),
            g("div", ke, [
              (a(!0), r(F, null, S(C.value, (h) => (a(), r("div", {
                class: R("lkt-modal-button lkt-modal-" + h)
              }, [
                b(o.$slots, h)
              ], 2))), 256)),
              o.showClose ? (a(), M(T, {
                key: 0,
                class: "lkt-modal-button",
                onClick: N,
                disabled: o.disabledClose,
                icon: o.closeIcon
              }, null, 8, ["disabled", "icon"])) : i("", !0)
            ])
          ]),
          g("section", ve, [
            b(o.$slots, "default", {
              doConfirm: c,
              doCancel: y
            })
          ]),
          k.value ? (a(), r("footer", _e, [
            B(p).footer ? (a(), r("div", he, [
              b(o.$slots, "footer")
            ])) : i("", !0),
            l.value.length > 0 ? (a(), r("div", ge, [
              (a(!0), r(F, null, S(l.value, (h) => (a(), r("div", {
                class: R("lkt-modal-button lkt-modal-" + h)
              }, [
                b(o.$slots, h)
              ], 2))), 256))
            ])) : i("", !0),
            u.value ? (a(), r("div", be, [
              O.value ? (a(), M(T, z(K({ key: 0 }, E.value)), null, 16)) : i("", !0),
              $.value ? (a(), M(T, z(K({ key: 1 }, A.value)), null, 16)) : i("", !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 512)
      ], 14, ie);
    };
  }
}), ze = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", ne), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Be);
  }
}, Ie = (t) => {
  te(t);
};
export {
  Oe as addConfirm,
  ae as addModal,
  de as closeConfirm,
  w as closeModal,
  ze as default,
  Te as execModal,
  se as openConfirm,
  re as openModal,
  Re as reOpenModal,
  Ne as refreshModal,
  $e as runModalCallback,
  Ie as setCanvas,
  Fe as updateModalKey
};
