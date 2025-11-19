import { defineComponent as J, ref as V, getCurrentInstance as Y, computed as c, resolveComponent as j, createElementBlock as s, openBlock as n, Fragment as w, renderList as D, createBlock as b, unref as k, resolveDynamicComponent as P, mergeProps as T, withCtx as F, mergeDefaults as Z, useSlots as ee, normalizeStyle as te, normalizeClass as A, createElementVNode as K, withModifiers as oe, createCommentVNode as i, normalizeProps as I, createSlots as le, createVNode as H, guardReactiveProps as q, renderSlot as g, toDisplayString as ne } from "vue";
import { ModalController as m, ModalRegisterType as Q, ModalType as ae, ButtonType as G, getDefaultValues as re, Modal as se, setModalCanvas as de } from "lkt-vue-kernel";
const ie = { class: "lkt-modal-canvas" }, ce = /* @__PURE__ */ J({
  __name: "LktModalCanvas",
  setup(t, { expose: a }) {
    const e = V(0), d = Y(), B = V([]), M = () => {
      e.value = e.value + 1, setTimeout(() => {
        var u;
        (u = d == null ? void 0 : d.proxy) == null || u.$forceUpdate();
      }, 1);
    }, N = c(() => (e.value, Object.values(m.components)));
    return a({
      refresh: M,
      refreshModal: (u, p = "_", h = {}) => {
        B.value.forEach((o) => {
          o.modalName === u && o.modalKey === p && typeof o.doRefresh == "function" && o.doRefresh(h);
        });
      },
      execModal: (u, p = "_", h, o = {}) => {
        B.value.forEach((f) => {
          f.modalName === u && f.modalKey === p && f[h](o);
        });
      }
    }), (u, p) => {
      const h = j("lkt-modal");
      return n(), s("section", ie, [
        (n(!0), s(w, null, D(N.value, (o) => {
          var f;
          return n(), s(w, null, [
            o.modalRegister.type === k(Q).Full ? (n(), b(P(o.modalRegister.component), T({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B,
              key: o.index
            }, { ref_for: !0 }, ((f = o.legacyData) == null ? void 0 : f.props) ?? {}, {
              "modal-name": o.modalConfig.modalName,
              "modal-key": o.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (n(), b(h, T({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B
            }, { ref_for: !0 }, o.modalConfig, {
              key: o.index,
              title: o.modalConfig.title
            }), {
              default: F(() => [
                (n(), b(P(o.modalRegister.component), T({ ref_for: !0 }, o.componentProps, {
                  "modal-name": o.modalConfig.modalName,
                  "modal-key": o.modalConfig.modalKey,
                  modalTitle: o.modalConfig.title,
                  "onUpdate:modalTitle": [(v) => o.modalConfig.title = v, M],
                  modalCloseConfirm: o.modalConfig.closeConfirm,
                  "onUpdate:modalCloseConfirm": [(v) => o.modalConfig.closeConfirm = v, M],
                  modalCloseConfirmKey: o.modalConfig.closeConfirmKey,
                  "onUpdate:modalCloseConfirmKey": [(v) => o.modalConfig.closeConfirmKey = v, M]
                }), null, 16, ["modal-name", "modal-key", "modalTitle", "onUpdate:modalTitle", "modalCloseConfirm", "onUpdate:modalCloseConfirm", "modalCloseConfirmKey", "onUpdate:modalCloseConfirmKey"]))
              ]),
              _: 2
            }, 1040, ["title"]))
          ], 64);
        }), 256))
      ]);
    };
  }
}), me = (t, a) => {
  m.addModal({
    name: t,
    component: a,
    type: Q.Full
  });
}, ue = (t, a = "_", e = {}) => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.open({
    modalName: t,
    modalKey: a
  }, e, !0);
}, $e = (t, a = "_", e = {}) => {
  m.refresh({
    modalName: t,
    modalKey: a
  }, e);
}, Ae = (t, a = "_", e, d = {}) => {
  m.execModal({
    modalName: t,
    modalKey: a
  }, e, d);
}, O = (t, a = "_") => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.close({
    modalName: t,
    modalKey: a
  });
}, Fe = (t, a = "_", e = {}) => {
  m.reOpen({
    modalName: t,
    modalKey: a
  }, e);
}, Oe = (t, a, e) => {
  m.updateModalKey({
    modalName: t,
    modalKey: a
  }, e);
}, fe = (t, a = "_", e = {}) => {
  let d = t;
  typeof d == "string" && d.indexOf("confirm__") === 0 && (d = d.substring(9)), ue("confirm__" + d, a, e);
}, we = (t, a = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), O("confirm__" + e, a);
}, ze = (t, a) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), me("confirm__" + e, a);
}, Ee = (t) => {
  m.runModalCallback(t);
}, ye = ["data-modal", "data-key"], Ce = {
  class: "lkt-modal-inner",
  ref: "inner"
}, ke = { class: "lkt-modal-header-actions" }, pe = {
  key: 1,
  class: "lkt-modal-header"
}, he = {
  key: 0,
  class: "lkt-modal-header-actions"
}, ve = { class: "lkt-modal-header_title-container" }, _e = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, ge = ["innerHTML"], be = {
  key: 1,
  class: "lkt-modal-header_title"
}, Be = { class: "lkt-modal-button-tray" }, Me = { class: "lkt-modal-content" }, Ke = {
  key: 2,
  class: "lkt-modal-footer"
}, Te = {
  key: 0,
  class: "lkt-modal-footer_main"
}, Ne = {
  key: 1,
  class: "lkt-modal-button-tray"
}, xe = {
  key: 2,
  class: "lkt-modal-button-tray"
}, Se = /* @__PURE__ */ J({
  __name: "LktModal",
  props: /* @__PURE__ */ Z({
    modalName: { type: [String, Function] },
    modalKey: { type: [String, Number, Function] },
    zIndex: {},
    type: {},
    size: {},
    header: {},
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
  }, re(se)),
  emits: [
    "confirm"
  ],
  setup(t, { emit: a }) {
    const e = t, d = V(0), B = c(() => {
      let l = [];
      return e.size && l.push(`is-${e.size}`), l.join(" ");
    }), M = a, N = (l) => {
      if (!l) return;
      const r = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), O(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        fe(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: r
        });
        return;
      }
      r();
    }, L = (l) => {
      e.disabledVeilClick || N(l);
    }, y = ee(), u = () => {
      var l, r;
      typeof ((r = (l = e.confirmButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.confirmButton.events.click({}), M("confirm"), O(e.modalName, e.modalKey);
    }, p = () => {
      var l, r;
      typeof ((r = (l = e.cancelButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.cancelButton.events.click({}), O(e.modalName, e.modalKey);
    }, h = c(() => {
      d.value;
      let l = [];
      for (let r in y) r.indexOf("button-") === 0 && l.push(r);
      return l;
    }), o = c(() => {
      d.value;
      let l = [];
      for (let r in y) r.indexOf("footer-button-") === 0 && l.push(r);
      return l;
    }), f = c(() => e.type === ae.Confirm), v = c(() => e.hiddenFooter ? !1 : o.value.length > 0 || !!y.footer || z.value || E.value), z = c(() => f.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), E = c(() => f.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), W = c(() => z.value ? {
      ...e.cancelButton,
      events: {
        ...e.cancelButton.events,
        click: p
      }
    } : {}), X = c(() => E.value ? {
      ...e.confirmButton,
      events: {
        ...e.confirmButton.events,
        click: u
      }
    } : {}), x = c(() => {
      var C, R, S;
      const l = e.header.class ? `${e.header.class} lkt-modal-header` : "lkt-modal-header";
      let r = {
        ...e.header,
        class: l,
        text: e.header.text ?? e.title,
        topStartContent: [
          ...Array.isArray(e.header.topStartContent) ? e.header.topStartContent : []
        ],
        topEndContent: [
          ...Array.isArray(e.header.topEndContent) ? e.header.topEndContent : []
        ]
      };
      return (e.preTitle && e.preTitle !== "" || e.preTitleIcon && e.preTitleIcon !== "") && ((C = r.topStartContent) == null || C.push({
        tag: "div",
        class: "lkt-modal-header_title-container",
        content: [
          {
            tag: "lkt-icon",
            props: {
              icon: e.preTitleIcon,
              class: "lkt-modal-header_pre-title",
              text: e.preTitle
            }
          }
        ]
      })), (Array.isArray(e.headerButtons) && e.headerButtons.length > 0 || e.showClose) && ((S = r.topEndContent) == null || S.push({
        tag: "div",
        class: "lkt-modal-button-tray",
        content: [
          ...Array.isArray(e.headerButtons) ? (R = e.headerButtons) == null ? void 0 : R.map(($, U) => ({
            tag: "lkt-button",
            class: "lkt-modal-button",
            props: $
          })) : [],
          ...e.showClose ? [
            {
              tag: "lkt-button",
              class: "lkt-modal-button",
              props: {
                disabled: e.disabledClose,
                icon: e.closeIcon,
                events: {
                  click: N
                }
              }
            }
          ] : []
        ]
      })), r;
    });
    return (l, r) => {
      var S, $, U;
      const C = j("lkt-button"), R = j("lkt-header");
      return n(), s("section", {
        class: A(["lkt-modal", B.value]),
        style: te("z-index: " + t.zIndex),
        "data-modal": t.modalName,
        "data-key": t.modalKey
      }, [
        K("div", {
          class: "lkt-modal-back",
          onClick: oe(L, ["prevent", "stop"])
        }),
        K("div", Ce, [
          x.value.text !== "" || (S = x.value.image) != null && S.src || (($ = x.value.topStartContent) == null ? void 0 : $.length) > 0 || ((U = x.value.topEndContent) == null ? void 0 : U.length) > 0 ? (n(), b(R, I(T({ key: 0 }, x.value)), le({ _: 2 }, [
            k(y)["header-actions"] ? {
              name: "top-start",
              fn: F(() => [
                K("div", ke, [
                  H(C, I(q({
                    ...t.headerActionsButton,
                    icon: "lkt-icn-cog",
                    type: k(G).Tooltip
                  })), {
                    tooltip: F(({ doClose: _ }) => [
                      g(l.$slots, "header-actions")
                    ]),
                    _: 3
                  }, 16)
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : (n(), s("header", pe, [
            k(y)["header-actions"] ? (n(), s("div", he, [
              H(C, I(q({
                ...t.headerActionsButton,
                icon: "lkt-icn-cog",
                type: k(G).Tooltip
              })), {
                tooltip: F(({ doClose: _ }) => [
                  g(l.$slots, "header-actions")
                ]),
                _: 3
              }, 16)
            ])) : i("", !0),
            K("div", ve, [
              t.preTitleIcon || k(y)["pre-title"] || t.preTitle ? (n(), s("div", _e, [
                t.preTitleIcon ? (n(), s("i", {
                  key: 0,
                  class: A(t.preTitleIcon)
                }, null, 2)) : i("", !0),
                k(y)["pre-title"] ? g(l.$slots, "pre-title", { key: 1 }) : t.preTitle ? (n(), s("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, ge)) : i("", !0)
              ])) : i("", !0),
              t.title ? (n(), s("div", be, ne(t.title), 1)) : i("", !0)
            ]),
            K("div", Be, [
              (n(!0), s(w, null, D(h.value, (_) => (n(), s("div", {
                class: A("lkt-modal-button lkt-modal-" + _)
              }, [
                g(l.$slots, _)
              ], 2))), 256)),
              t.showClose ? (n(), b(C, {
                key: 0,
                class: "lkt-modal-button",
                onClick: N,
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : i("", !0)
            ])
          ])),
          K("section", Me, [
            g(l.$slots, "default", {
              doConfirm: u,
              doCancel: p
            })
          ]),
          v.value ? (n(), s("footer", Ke, [
            k(y).footer ? (n(), s("div", Te, [
              g(l.$slots, "footer")
            ])) : i("", !0),
            o.value.length > 0 ? (n(), s("div", Ne, [
              (n(!0), s(w, null, D(o.value, (_) => (n(), s("div", {
                class: A("lkt-modal-button lkt-modal-" + _)
              }, [
                g(l.$slots, _)
              ], 2))), 256))
            ])) : i("", !0),
            f.value ? (n(), s("div", xe, [
              z.value ? (n(), b(C, I(T({ key: 0 }, W.value)), null, 16)) : i("", !0),
              E.value ? (n(), b(C, I(T({ key: 1 }, X.value)), null, 16)) : i("", !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 512)
      ], 14, ye);
    };
  }
}), Ue = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", ce), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Se);
  }
}, Ve = (t) => {
  de(t);
};
export {
  ze as addConfirm,
  me as addModal,
  we as closeConfirm,
  O as closeModal,
  Ue as default,
  Ae as execModal,
  fe as openConfirm,
  ue as openModal,
  Fe as reOpenModal,
  $e as refreshModal,
  Ee as runModalCallback,
  Ve as setCanvas,
  Oe as updateModalKey
};
