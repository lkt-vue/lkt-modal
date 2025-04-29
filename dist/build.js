import { defineComponent as U, ref as $, getCurrentInstance as E, computed as f, resolveComponent as V, createElementBlock as r, openBlock as a, Fragment as F, renderList as z, createBlock as K, unref as M, resolveDynamicComponent as w, mergeProps as N, withCtx as j, mergeDefaults as A, useSlots as H, normalizeStyle as q, normalizeClass as R, createElementVNode as b, withModifiers as G, createCommentVNode as i, createVNode as J, normalizeProps as O, guardReactiveProps as Q, renderSlot as B, toDisplayString as W } from "vue";
import { ModalController as m, ModalRegisterType as D, ModalType as X, ButtonType as Y, getDefaultValues as Z, Modal as x, setModalCanvas as ee } from "lkt-vue-kernel";
const oe = { class: "lkt-modal-canvas" }, te = /* @__PURE__ */ U({
  __name: "LktModalCanvas",
  setup(t, { expose: n }) {
    const e = $(0), d = E(), _ = $([]), h = () => {
      e.value = e.value + 1, setTimeout(() => {
        var p;
        (p = d == null ? void 0 : d.proxy) == null || p.$forceUpdate();
      }, 1);
    }, T = f(() => (e.value, Object.values(m.components)));
    return n({
      refresh: h,
      refreshModal: (p, v = "_", y = {}) => {
        _.value.forEach((l) => {
          l.modalName === p && l.modalKey === v && typeof l.doRefresh == "function" && l.doRefresh(y);
        });
      },
      execModal: (p, v = "_", y, l = {}) => {
        _.value.forEach((c) => {
          c.modalName === p && c.modalKey === v && c[y](l);
        });
      }
    }), (p, v) => {
      const y = V("lkt-modal");
      return a(), r("section", oe, [
        (a(!0), r(F, null, z(T.value, (l) => {
          var c;
          return a(), r(F, null, [
            l.modalRegister.type === M(D).Full ? (a(), K(w(l.modalRegister.component), N({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: _,
              key: l.index
            }, ((c = l.legacyData) == null ? void 0 : c.props) ?? {}, {
              "modal-name": l.modalConfig.modalName,
              "modal-key": l.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (a(), K(y, N({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: _
            }, l.modalConfig, {
              key: l.index,
              title: l.modalConfig.title
            }), {
              default: j(() => [
                (a(), K(w(l.modalRegister.component), N({ ref_for: !0 }, l.componentProps, {
                  "modal-name": l.modalConfig.modalName,
                  "modal-key": l.modalConfig.modalKey,
                  modalTitle: l.modalConfig.title,
                  "onUpdate:modalTitle": [(C) => l.modalConfig.title = C, h],
                  modalCloseConfirm: l.modalConfig.closeConfirm,
                  "onUpdate:modalCloseConfirm": [(C) => l.modalConfig.closeConfirm = C, h],
                  modalCloseConfirmKey: l.modalConfig.closeConfirmKey,
                  "onUpdate:modalCloseConfirmKey": [(C) => l.modalConfig.closeConfirmKey = C, h]
                }), null, 16, ["modal-name", "modal-key", "modalTitle", "onUpdate:modalTitle", "modalCloseConfirm", "onUpdate:modalCloseConfirm", "modalCloseConfirmKey", "onUpdate:modalCloseConfirmKey"]))
              ]),
              _: 2
            }, 1040, ["title"]))
          ], 64);
        }), 256))
      ]);
    };
  }
}), le = (t, n) => {
  m.addModal({
    name: t,
    component: n,
    type: D.Full
  });
}, ne = (t, n = "_", e = {}) => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.open({
    modalName: t,
    modalKey: n
  }, e, !0);
}, Me = (t, n = "_", e = {}) => {
  m.refresh({
    modalName: t,
    modalKey: n
  }, e);
}, Ke = (t, n = "_", e, d = {}) => {
  m.execModal({
    modalName: t,
    modalKey: n
  }, e, d);
}, I = (t, n = "_") => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.close({
    modalName: t,
    modalKey: n
  });
}, Ne = (t, n = "_", e = {}) => {
  m.reOpen({
    modalName: t,
    modalKey: n
  }, e);
}, Te = (t, n, e) => {
  m.updateModalKey({
    modalName: t,
    modalKey: n
  }, e);
}, ae = (t, n = "_", e = {}) => {
  let d = t;
  typeof d == "string" && d.indexOf("confirm__") === 0 && (d = d.substring(9)), ne("confirm__" + d, n, e);
}, re = (t, n = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), I("confirm__" + e, n);
}, Re = (t, n) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), le("confirm__" + e, n);
}, Fe = (t) => {
  m.runModalCallback(t);
}, se = ["data-modal", "data-key"], de = {
  class: "lkt-modal-inner",
  ref: "inner"
}, ie = { class: "lkt-modal-header" }, me = {
  key: 0,
  class: "lkt-modal-header-actions"
}, ce = { class: "lkt-modal-header_title-container" }, ue = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, fe = ["innerHTML"], pe = {
  key: 1,
  class: "lkt-modal-header_title"
}, ye = { class: "lkt-modal-button-tray" }, Ce = { class: "lkt-modal-content" }, ke = {
  key: 0,
  class: "lkt-modal-footer"
}, ve = {
  key: 0,
  class: "lkt-modal-footer_main"
}, _e = {
  key: 1,
  class: "lkt-modal-button-tray"
}, he = {
  key: 2,
  class: "lkt-modal-button-tray"
}, ge = /* @__PURE__ */ U({
  __name: "LktModal",
  props: /* @__PURE__ */ A({
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
  }, Z(x)),
  emits: [
    "confirm"
  ],
  setup(t, { emit: n }) {
    const e = t, d = $(0), _ = f(() => {
      let o = [];
      return e.size && o.push(`is-${e.size}`), o.join(" ");
    }), h = n, T = (o) => {
      if (!o) return;
      const s = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), I(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        ae(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: s
        });
        return;
      }
      s();
    }, S = (o) => {
      e.disabledVeilClick || T(o);
    }, k = H(), p = f(() => {
      d.value;
      let o = [];
      for (let s in k) s.indexOf("button-") === 0 && o.push(s);
      return o;
    }), v = f(() => {
      d.value;
      let o = [];
      for (let s in k) s.indexOf("footer-button-") === 0 && o.push(s);
      return o;
    }), y = f(() => e.type === X.Confirm), l = f(() => e.hiddenFooter ? !1 : v.value.length > 0 || !!k.footer || c.value || C.value), c = f(() => y.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), C = f(() => y.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), L = f(() => {
      if (!c.value) return {};
      let o = () => {
        var s, u;
        typeof ((u = (s = e.cancelButton) == null ? void 0 : s.events) == null ? void 0 : u.click) == "function" && e.cancelButton.events.click(), re(e.modalName, e.modalKey);
      };
      return {
        ...e.cancelButton,
        events: {
          ...e.cancelButton.events,
          click: o
        }
      };
    }), P = f(() => {
      if (!C.value) return {};
      let o = () => {
        var s, u;
        typeof ((u = (s = e.confirmButton) == null ? void 0 : s.events) == null ? void 0 : u.click) == "function" && e.confirmButton.events.click({}), h("confirm"), I(e.modalName, e.modalKey);
      };
      return {
        ...e.confirmButton,
        events: {
          ...e.confirmButton.events,
          click: o
        }
      };
    });
    return (o, s) => {
      const u = V("lkt-button");
      return a(), r("section", {
        class: R(["lkt-modal", _.value]),
        style: q("z-index: " + o.zIndex),
        "data-modal": o.modalName,
        "data-key": o.modalKey
      }, [
        b("div", {
          class: "lkt-modal-back",
          onClick: G(S, ["prevent", "stop"])
        }),
        b("div", de, [
          b("header", ie, [
            M(k)["header-actions"] ? (a(), r("div", me, [
              J(u, O(Q({
                ...o.headerActionsButton,
                icon: "lkt-icn-cog",
                type: M(Y).Tooltip
              })), {
                tooltip: j(({ doClose: g }) => [
                  B(o.$slots, "header-actions")
                ]),
                _: 3
              }, 16)
            ])) : i("", !0),
            b("div", ce, [
              o.preTitleIcon || M(k)["pre-title"] || o.preTitle ? (a(), r("div", ue, [
                o.preTitleIcon ? (a(), r("i", {
                  key: 0,
                  class: R(o.preTitleIcon)
                }, null, 2)) : i("", !0),
                M(k)["pre-title"] ? B(o.$slots, "pre-title", { key: 1 }) : o.preTitle ? (a(), r("div", {
                  key: 2,
                  innerHTML: o.preTitle
                }, null, 8, fe)) : i("", !0)
              ])) : i("", !0),
              o.title ? (a(), r("div", pe, W(o.title), 1)) : i("", !0)
            ]),
            b("div", ye, [
              (a(!0), r(F, null, z(p.value, (g) => (a(), r("div", {
                class: R("lkt-modal-button lkt-modal-" + g)
              }, [
                B(o.$slots, g)
              ], 2))), 256)),
              o.showClose ? (a(), K(u, {
                key: 0,
                class: "lkt-modal-button",
                onClick: T,
                disabled: o.disabledClose,
                icon: o.closeIcon
              }, null, 8, ["disabled", "icon"])) : i("", !0)
            ])
          ]),
          b("section", Ce, [
            B(o.$slots, "default")
          ]),
          l.value ? (a(), r("footer", ke, [
            M(k).footer ? (a(), r("div", ve, [
              B(o.$slots, "footer")
            ])) : i("", !0),
            v.value.length > 0 ? (a(), r("div", _e, [
              (a(!0), r(F, null, z(v.value, (g) => (a(), r("div", {
                class: R("lkt-modal-button lkt-modal-" + g)
              }, [
                B(o.$slots, g)
              ], 2))), 256))
            ])) : i("", !0),
            y.value ? (a(), r("div", he, [
              c.value ? (a(), K(u, O(N({ key: 0 }, L.value)), null, 16)) : i("", !0),
              C.value ? (a(), K(u, O(N({ key: 1 }, P.value)), null, 16)) : i("", !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 512)
      ], 14, se);
    };
  }
}), Oe = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", te), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ge);
  }
}, $e = (t) => {
  ee(t);
};
export {
  Re as addConfirm,
  le as addModal,
  re as closeConfirm,
  I as closeModal,
  Oe as default,
  Ke as execModal,
  ae as openConfirm,
  ne as openModal,
  Ne as reOpenModal,
  Me as refreshModal,
  Fe as runModalCallback,
  $e as setCanvas,
  Te as updateModalKey
};
