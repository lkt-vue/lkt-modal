import { defineComponent as U, ref as O, getCurrentInstance as E, computed as u, resolveComponent as j, createElementBlock as r, openBlock as a, Fragment as F, renderList as z, createBlock as b, unref as R, resolveDynamicComponent as S, mergeProps as B, withCtx as P, mergeDefaults as H, useSlots as x, normalizeStyle as q, normalizeClass as T, createElementVNode as g, withModifiers as A, createCommentVNode as m, renderSlot as K, toDisplayString as G, normalizeProps as w } from "vue";
import { ModalController as i, ModalRegisterType as D, ModalType as J, getDefaultValues as Q, Modal as W, setModalCanvas as X } from "lkt-vue-kernel";
const Y = { class: "lkt-modal-canvas" }, Z = /* @__PURE__ */ U({
  __name: "LktModalCanvas",
  setup(t, { expose: n }) {
    const e = O(0), d = E(), v = O([]), h = () => {
      e.value = e.value + 1, setTimeout(() => {
        var f;
        (f = d == null ? void 0 : d.proxy) == null || f.$forceUpdate();
      }, 1);
    }, N = u(() => (e.value, Object.values(i.components)));
    return n({
      refresh: h,
      refreshModal: (f, k = "_", p = {}) => {
        v.value.forEach((l) => {
          l.modalName === f && l.modalKey === k && typeof l.doRefresh == "function" && l.doRefresh(p);
        });
      },
      execModal: (f, k = "_", p, l = {}) => {
        v.value.forEach((c) => {
          c.modalName === f && c.modalKey === k && c[p](l);
        });
      }
    }), (f, k) => {
      const p = j("lkt-modal");
      return a(), r("section", Y, [
        (a(!0), r(F, null, z(N.value, (l) => {
          var c;
          return a(), r(F, null, [
            l.modalRegister.type === R(D).Full ? (a(), b(S(l.modalRegister.component), B({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: v,
              key: l.index
            }, ((c = l.legacyData) == null ? void 0 : c.props) ?? {}, {
              "modal-name": l.modalConfig.modalName,
              "modal-key": l.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (a(), b(p, B({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: v
            }, l.modalConfig, {
              key: l.index,
              title: l.modalConfig.title
            }), {
              default: P(() => [
                (a(), b(S(l.modalRegister.component), B({ ref_for: !0 }, l.componentProps, {
                  "modal-name": l.modalConfig.modalName,
                  "modal-key": l.modalConfig.modalKey,
                  modalTitle: l.modalConfig.title,
                  "onUpdate:modalTitle": [(y) => l.modalConfig.title = y, h],
                  modalCloseConfirm: l.modalConfig.closeConfirm,
                  "onUpdate:modalCloseConfirm": [(y) => l.modalConfig.closeConfirm = y, h],
                  modalCloseConfirmKey: l.modalConfig.closeConfirmKey,
                  "onUpdate:modalCloseConfirmKey": [(y) => l.modalConfig.closeConfirmKey = y, h]
                }), null, 16, ["modal-name", "modal-key", "modalTitle", "onUpdate:modalTitle", "modalCloseConfirm", "onUpdate:modalCloseConfirm", "modalCloseConfirmKey", "onUpdate:modalCloseConfirmKey"]))
              ]),
              _: 2
            }, 1040, ["title"]))
          ], 64);
        }), 256))
      ]);
    };
  }
}), ee = (t, n) => {
  i.addModal({
    name: t,
    component: n,
    type: D.Full
  });
}, oe = (t, n = "_", e = {}) => {
  if (!i.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  i.open({
    modalName: t,
    modalKey: n
  }, e, !0);
}, he = (t, n = "_", e = {}) => {
  i.refresh({
    modalName: t,
    modalKey: n
  }, e);
}, ge = (t, n = "_", e, d = {}) => {
  i.execModal({
    modalName: t,
    modalKey: n
  }, e, d);
}, I = (t, n = "_") => {
  if (!i.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  i.close({
    modalName: t,
    modalKey: n
  });
}, be = (t, n = "_", e = {}) => {
  i.reOpen({
    modalName: t,
    modalKey: n
  }, e);
}, Me = (t, n, e) => {
  i.updateModalKey({
    modalName: t,
    modalKey: n
  }, e);
}, te = (t, n = "_", e = {}) => {
  let d = t;
  typeof d == "string" && d.indexOf("confirm__") === 0 && (d = d.substring(9)), oe("confirm__" + d, n, e);
}, le = (t, n = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), I("confirm__" + e, n);
}, Ke = (t, n) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), ee("confirm__" + e, n);
}, Be = (t) => {
  i.runModalCallback(t);
}, ne = ["data-modal", "data-key"], ae = {
  class: "lkt-modal-inner",
  ref: "inner"
}, re = { class: "lkt-modal-header" }, se = { class: "lkt-modal-header_title-container" }, de = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, me = ["innerHTML"], ie = {
  key: 1,
  class: "lkt-modal-header_title"
}, ce = { class: "lkt-modal-button-tray" }, ue = { class: "lkt-modal-content" }, fe = {
  key: 0,
  class: "lkt-modal-footer"
}, pe = {
  key: 0,
  class: "lkt-modal-footer_main"
}, ye = {
  key: 1,
  class: "lkt-modal-button-tray"
}, Ce = {
  key: 2,
  class: "lkt-modal-button-tray"
}, ke = /* @__PURE__ */ U({
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
  }, Q(W)),
  emits: [
    "confirm"
  ],
  setup(t, { emit: n }) {
    const e = t, d = O(0), v = u(() => {
      let o = [];
      return e.size && o.push(`is-${e.size}`), o.join(" ");
    }), h = n, N = (o) => {
      if (!o) return;
      const s = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), I(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        te(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: s
        });
        return;
      }
      s();
    }, $ = (o) => {
      e.disabledVeilClick || N(o);
    }, _ = x(), f = u(() => {
      d.value;
      let o = [];
      for (let s in _) s.indexOf("button-") === 0 && o.push(s);
      return o;
    }), k = u(() => {
      d.value;
      let o = [];
      for (let s in _) s.indexOf("footer-button-") === 0 && o.push(s);
      return o;
    }), p = u(() => e.type === J.Confirm), l = u(() => e.hiddenFooter ? !1 : k.value.length > 0 || !!_.footer || c.value || y.value), c = u(() => p.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), y = u(() => p.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), L = u(() => {
      if (!c.value) return {};
      let o = () => {
        var s, C;
        typeof ((C = (s = e.cancelButton) == null ? void 0 : s.events) == null ? void 0 : C.click) == "function" && e.cancelButton.events.click(), le(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        onClick: o
      };
    }), V = u(() => {
      if (!y.value) return {};
      let o = () => {
        var s, C;
        typeof ((C = (s = e.confirmButton) == null ? void 0 : s.events) == null ? void 0 : C.click) == "function" && e.confirmButton.events.click(), h("confirm"), I(e.modalName, e.modalKey);
      };
      return {
        ...e.confirmButton,
        onClick: o
      };
    });
    return (o, s) => {
      const C = j("lkt-button");
      return a(), r("section", {
        class: T(["lkt-modal", v.value]),
        style: q("z-index: " + o.zIndex),
        "data-modal": o.modalName,
        "data-key": o.modalKey
      }, [
        g("div", {
          class: "lkt-modal-back",
          onClick: A($, ["prevent", "stop"])
        }),
        g("div", ae, [
          g("header", re, [
            g("div", se, [
              o.preTitleIcon || R(_)["pre-title"] || o.preTitle ? (a(), r("div", de, [
                o.preTitleIcon ? (a(), r("i", {
                  key: 0,
                  class: T(o.preTitleIcon)
                }, null, 2)) : m("", !0),
                R(_)["pre-title"] ? K(o.$slots, "pre-title", { key: 1 }) : o.preTitle ? (a(), r("div", {
                  key: 2,
                  innerHTML: o.preTitle
                }, null, 8, me)) : m("", !0)
              ])) : m("", !0),
              o.title ? (a(), r("div", ie, G(o.title), 1)) : m("", !0)
            ]),
            g("div", ce, [
              (a(!0), r(F, null, z(f.value, (M) => (a(), r("div", {
                class: T("lkt-modal-button lkt-modal-" + M)
              }, [
                K(o.$slots, M)
              ], 2))), 256)),
              o.showClose ? (a(), b(C, {
                key: 0,
                class: "lkt-modal-button",
                onClick: N,
                disabled: o.disabledClose,
                icon: o.closeIcon
              }, null, 8, ["disabled", "icon"])) : m("", !0)
            ])
          ]),
          g("section", ue, [
            K(o.$slots, "default")
          ]),
          l.value ? (a(), r("footer", fe, [
            R(_).footer ? (a(), r("div", pe, [
              K(o.$slots, "footer")
            ])) : m("", !0),
            k.value.length > 0 ? (a(), r("div", ye, [
              (a(!0), r(F, null, z(k.value, (M) => (a(), r("div", {
                class: T("lkt-modal-button lkt-modal-" + M)
              }, [
                K(o.$slots, M)
              ], 2))), 256))
            ])) : m("", !0),
            p.value ? (a(), r("div", Ce, [
              c.value ? (a(), b(C, w(B({ key: 0 }, L.value)), null, 16)) : m("", !0),
              y.value ? (a(), b(C, w(B({ key: 1 }, V.value)), null, 16)) : m("", !0)
            ])) : m("", !0)
          ])) : m("", !0)
        ], 512)
      ], 14, ne);
    };
  }
}), Ne = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", Z), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ke);
  }
}, Te = (t) => {
  X(t);
};
export {
  Ke as addConfirm,
  ee as addModal,
  le as closeConfirm,
  I as closeModal,
  Ne as default,
  ge as execModal,
  te as openConfirm,
  oe as openModal,
  be as reOpenModal,
  he as refreshModal,
  Be as runModalCallback,
  Te as setCanvas,
  Me as updateModalKey
};
