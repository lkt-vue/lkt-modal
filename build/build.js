import { defineComponent as J, ref as U, getCurrentInstance as Y, computed as c, resolveComponent as V, createElementBlock as s, openBlock as n, Fragment as z, renderList as D, createBlock as b, unref as k, resolveDynamicComponent as P, mergeProps as K, withCtx as O, mergeDefaults as Z, useSlots as ee, normalizeStyle as te, normalizeClass as F, createElementVNode as T, withModifiers as oe, createCommentVNode as i, normalizeProps as R, createSlots as le, createVNode as H, guardReactiveProps as q, renderSlot as g, toDisplayString as ne } from "vue";
import { ModalController as m, ModalRegisterType as Q, ModalType as ae, ButtonType as G, getDefaultValues as re, Modal as se, setModalCanvas as de } from "lkt-vue-kernel";
const ie = { class: "lkt-modal-canvas" }, ce = /* @__PURE__ */ J({
  __name: "LktModalCanvas",
  setup(t, { expose: a }) {
    const e = U(0), d = Y(), B = U([]), M = () => {
      e.value = e.value + 1, setTimeout(() => {
        var u;
        (u = d == null ? void 0 : d.proxy) == null || u.$forceUpdate();
      }, 1);
    }, N = c(() => (e.value, Object.values(m.components)));
    return a({
      refresh: M,
      refreshModal: (u, h = "_", v = {}) => {
        B.value.forEach((o) => {
          o.modalName === u && o.modalKey === h && typeof o.doRefresh == "function" && o.doRefresh(v);
        });
      },
      execModal: (u, h = "_", v, o = {}) => {
        B.value.forEach((f) => {
          f.modalName === u && f.modalKey === h && f[v](o);
        });
      }
    }), (u, h) => {
      const v = V("lkt-modal");
      return n(), s("section", ie, [
        (n(!0), s(z, null, D(N.value, (o) => {
          var f;
          return n(), s(z, null, [
            o.modalRegister.type === k(Q).Full ? (n(), b(P(o.modalRegister.component), K({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B,
              key: o.index
            }, { ref_for: !0 }, ((f = o.legacyData) == null ? void 0 : f.props) ?? {}, {
              "modal-name": o.modalConfig.modalName,
              "modal-key": o.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (n(), b(v, K({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B
            }, { ref_for: !0 }, o.modalConfig, {
              key: o.index,
              title: o.modalConfig.title
            }), {
              default: O(() => [
                (n(), b(P(o.modalRegister.component), K({ ref_for: !0 }, o.componentProps, {
                  "modal-name": o.modalConfig.modalName,
                  "modal-key": o.modalConfig.modalKey,
                  modalTitle: o.modalConfig.title,
                  "onUpdate:modalTitle": [(_) => o.modalConfig.title = _, M],
                  modalCloseConfirm: o.modalConfig.closeConfirm,
                  "onUpdate:modalCloseConfirm": [(_) => o.modalConfig.closeConfirm = _, M],
                  modalCloseConfirmKey: o.modalConfig.closeConfirmKey,
                  "onUpdate:modalCloseConfirmKey": [(_) => o.modalConfig.closeConfirmKey = _, M]
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
}, Ae = (t, a = "_", e = {}) => {
  m.refresh({
    modalName: t,
    modalKey: a
  }, e);
}, $e = (t, a = "_", e, d = {}) => {
  m.execModal({
    modalName: t,
    modalKey: a
  }, e, d);
}, w = (t, a = "_") => {
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
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), w("confirm__" + e, a);
}, ze = (t, a) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), me("confirm__" + e, a);
}, Ee = (t) => {
  m.runModalCallback(t);
}, ye = ["data-modal", "data-key"], pe = {
  class: "lkt-modal-inner",
  ref: "inner"
}, Ce = { class: "lkt-modal-header-actions" }, ke = {
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
}, Be = { class: "lkt-modal-button-tray" }, Me = { class: "lkt-modal-content" }, Te = {
  key: 2,
  class: "lkt-modal-footer"
}, Ke = {
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
    const e = t, d = U(0), B = c(() => {
      let l = [];
      return e.size && l.push(`is-${e.size}`), l.join(" ");
    }), M = a, N = (l) => {
      if (!l) return;
      const r = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose({
          modalName: e.modalName,
          modalKey: e.modalKey,
          item: e.item
        }), w(e.modalName, e.modalKey);
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
      typeof ((r = (l = e.confirmButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.confirmButton.events.click({}), M("confirm"), w(e.modalName, e.modalKey);
    }, h = () => {
      var l, r;
      typeof ((r = (l = e.cancelButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.cancelButton.events.click({}), w(e.modalName, e.modalKey);
    }, v = c(() => {
      d.value;
      let l = [];
      for (let r in y) r.indexOf("button-") === 0 && l.push(r);
      return l;
    }), o = c(() => {
      d.value;
      let l = [];
      for (let r in y) r.indexOf("footer-button-") === 0 && l.push(r);
      return l;
    }), f = c(() => e.type === ae.Confirm), _ = c(() => e.hiddenFooter ? !1 : o.value.length > 0 || !!y.footer || E.value || j.value), E = c(() => f.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), j = c(() => f.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), W = c(() => E.value ? {
      ...e.cancelButton,
      events: {
        ...e.cancelButton.events,
        click: h
      }
    } : {}), X = c(() => j.value ? {
      ...e.confirmButton,
      events: {
        ...e.confirmButton.events,
        click: u
      }
    } : {}), x = c(() => {
      var p, A, S, I;
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
      return typeof e.headerActionsButton == "object" && ((p = r.topStartContent) == null || p.push({
        tag: "div",
        class: "lkt-modal-header_title-container",
        content: [
          {
            tag: "lkt-icon",
            props: {
              icon: e.preTitleIcon,
              class: "lkt-modal-header_title-container",
              text: e.preTitle
            }
          }
        ]
      })), (e.preTitle && e.preTitle !== "" || e.preTitleIcon && e.preTitleIcon !== "") && ((A = r.topStartContent) == null || A.push({
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
      })), (Array.isArray(e.headerButtons) && e.headerButtons.length > 0 || e.showClose) && ((I = r.topEndContent) == null || I.push({
        tag: "div",
        class: "lkt-modal-button-tray",
        content: [
          ...Array.isArray(e.headerButtons) ? (S = e.headerButtons) == null ? void 0 : S.map(($, C) => ({
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
      var S, I, $;
      const p = V("lkt-button"), A = V("lkt-header");
      return n(), s("section", {
        class: F(["lkt-modal", B.value]),
        style: te("z-index: " + t.zIndex),
        "data-modal": t.modalName,
        "data-key": t.modalKey
      }, [
        T("div", {
          class: "lkt-modal-back",
          onClick: oe(L, ["prevent", "stop"])
        }),
        T("div", pe, [
          x.value.text !== "" || (S = x.value.image) != null && S.src || ((I = x.value.topStartContent) == null ? void 0 : I.length) > 0 || (($ = x.value.topEndContent) == null ? void 0 : $.length) > 0 ? (n(), b(A, R(K({ key: 0 }, x.value)), le({ _: 2 }, [
            k(y)["header-actions"] ? {
              name: "top-start",
              fn: O(() => [
                T("div", Ce, [
                  H(p, R(q({
                    ...t.headerActionsButton,
                    icon: "lkt-icn-cog",
                    type: k(G).Tooltip
                  })), {
                    tooltip: O(({ doClose: C }) => [
                      g(l.$slots, "header-actions")
                    ]),
                    _: 3
                  }, 16)
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : (n(), s("header", ke, [
            k(y)["header-actions"] ? (n(), s("div", he, [
              H(p, R(q({
                ...t.headerActionsButton,
                icon: "lkt-icn-cog",
                type: k(G).Tooltip
              })), {
                tooltip: O(({ doClose: C }) => [
                  g(l.$slots, "header-actions")
                ]),
                _: 3
              }, 16)
            ])) : i("", !0),
            T("div", ve, [
              t.preTitleIcon || k(y)["pre-title"] || t.preTitle ? (n(), s("div", _e, [
                t.preTitleIcon ? (n(), s("i", {
                  key: 0,
                  class: F(t.preTitleIcon)
                }, null, 2)) : i("", !0),
                k(y)["pre-title"] ? g(l.$slots, "pre-title", { key: 1 }) : t.preTitle ? (n(), s("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, ge)) : i("", !0)
              ])) : i("", !0),
              t.title ? (n(), s("div", be, ne(t.title), 1)) : i("", !0)
            ]),
            T("div", Be, [
              (n(!0), s(z, null, D(v.value, (C) => (n(), s("div", {
                class: F("lkt-modal-button lkt-modal-" + C)
              }, [
                g(l.$slots, C)
              ], 2))), 256)),
              t.showClose ? (n(), b(p, {
                key: 0,
                class: "lkt-modal-button",
                onClick: N,
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : i("", !0)
            ])
          ])),
          T("section", Me, [
            g(l.$slots, "default", {
              doConfirm: u,
              doCancel: h
            })
          ]),
          _.value ? (n(), s("footer", Te, [
            k(y).footer ? (n(), s("div", Ke, [
              g(l.$slots, "footer")
            ])) : i("", !0),
            o.value.length > 0 ? (n(), s("div", Ne, [
              (n(!0), s(z, null, D(o.value, (C) => (n(), s("div", {
                class: F("lkt-modal-button lkt-modal-" + C)
              }, [
                g(l.$slots, C)
              ], 2))), 256))
            ])) : i("", !0),
            f.value ? (n(), s("div", xe, [
              E.value ? (n(), b(p, R(K({ key: 0 }, W.value)), null, 16)) : i("", !0),
              j.value ? (n(), b(p, R(K({ key: 1 }, X.value)), null, 16)) : i("", !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 512)
      ], 14, ye);
    };
  }
}), je = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", ce), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Se);
  }
}, Ue = (t) => {
  de(t);
};
export {
  ze as addConfirm,
  me as addModal,
  we as closeConfirm,
  w as closeModal,
  je as default,
  $e as execModal,
  fe as openConfirm,
  ue as openModal,
  Fe as reOpenModal,
  Ae as refreshModal,
  Ee as runModalCallback,
  Ue as setCanvas,
  Oe as updateModalKey
};
