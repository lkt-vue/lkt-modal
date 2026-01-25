import { defineComponent as Q, ref as V, getCurrentInstance as ee, computed as c, resolveComponent as j, createElementBlock as s, openBlock as n, Fragment as z, renderList as D, createBlock as b, unref as p, resolveDynamicComponent as H, mergeProps as T, withCtx as O, mergeDefaults as te, useSlots as oe, normalizeStyle as le, normalizeClass as F, createElementVNode as K, withModifiers as ne, createCommentVNode as i, normalizeProps as $, createSlots as ae, createVNode as q, guardReactiveProps as G, renderSlot as g, toDisplayString as re } from "vue";
import { ModalController as m, ModalRegisterType as W, ModalType as se, ButtonType as J, getDefaultValues as de, Modal as ie, setModalCanvas as ce } from "lkt-vue-kernel";
const me = { class: "lkt-modal-canvas" }, ue = /* @__PURE__ */ Q({
  __name: "LktModalCanvas",
  setup(t, { expose: a }) {
    const e = V(0), d = ee(), B = V([]), M = () => {
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
      const v = j("lkt-modal");
      return n(), s("section", me, [
        (n(!0), s(z, null, D(N.value, (o) => {
          var f;
          return n(), s(z, null, [
            o.modalRegister.type === p(W).Full ? (n(), b(H(o.modalRegister.component), T({
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B,
              key: o.index
            }, { ref_for: !0 }, ((f = o.legacyData) == null ? void 0 : f.props) ?? {}, {
              "modal-name": o.modalConfig.modalName,
              "modal-key": o.modalConfig.modalKey
            }), null, 16, ["modal-name", "modal-key"])) : (n(), b(v, T({
              key: 1,
              ref_for: !0,
              ref_key: "instanceReferences",
              ref: B
            }, { ref_for: !0 }, o.modalConfig, {
              key: o.index,
              title: o.modalConfig.title
            }), {
              default: O(() => [
                (n(), b(H(o.modalRegister.component), T({ ref_for: !0 }, o.componentProps, {
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
}), fe = (t, a) => {
  m.addModal({
    name: t,
    component: a,
    type: W.Full
  });
}, ye = (t, a = "_", e = {}) => {
  if (!m.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  m.open({
    modalName: t,
    modalKey: a
  }, e, !0);
}, Oe = (t, a = "_", e = {}) => {
  m.refresh({
    modalName: t,
    modalKey: a
  }, e);
}, we = (t, a = "_", e, d = {}) => {
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
}, ze = (t, a = "_", e = {}) => {
  m.reOpen({
    modalName: t,
    modalKey: a
  }, e);
}, Ee = (t, a, e) => {
  m.updateModalKey({
    modalName: t,
    modalKey: a
  }, e);
}, Ce = (t, a = "_", e = {}) => {
  let d = t;
  typeof d == "string" && d.indexOf("confirm__") === 0 && (d = d.substring(9)), ye("confirm__" + d, a, e);
}, Ue = (t, a = "_") => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), w("confirm__" + e, a);
}, Ve = (t, a) => {
  let e = t;
  typeof e == "string" && e.indexOf("confirm__") === 0 && (e = e.substring(9)), fe("confirm__" + e, a);
}, je = (t) => {
  m.runModalCallback(t);
}, ke = ["data-modal", "data-key"], pe = {
  class: "lkt-modal-inner",
  ref: "inner"
}, he = { class: "lkt-modal-header-actions" }, ve = {
  key: 1,
  class: "lkt-modal-header"
}, _e = {
  key: 0,
  class: "lkt-modal-header-actions"
}, ge = { class: "lkt-modal-header_title-container" }, be = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, Be = ["innerHTML"], Me = {
  key: 1,
  class: "lkt-modal-header_title"
}, Ke = { class: "lkt-modal-button-tray" }, Te = { class: "lkt-modal-content" }, Ne = {
  key: 2,
  class: "lkt-modal-footer"
}, xe = {
  key: 0,
  class: "lkt-modal-footer_main"
}, Se = {
  key: 1,
  class: "lkt-modal-button-tray"
}, Ie = {
  key: 2,
  class: "lkt-modal-button-tray"
}, Re = /* @__PURE__ */ Q({
  __name: "LktModal",
  props: /* @__PURE__ */ te({
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
  }, de(ie)),
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
        }), w(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        Ce(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: r
        });
        return;
      }
      r();
    }, L = (l) => {
      e.disabledVeilClick || N(l);
    }, C = oe(), u = () => {
      var l, r;
      typeof ((r = (l = e.confirmButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.confirmButton.events.click({}), M("confirm"), w(e.modalName, e.modalKey);
    }, h = () => {
      var l, r;
      typeof ((r = (l = e.cancelButton) == null ? void 0 : l.events) == null ? void 0 : r.click) == "function" && e.cancelButton.events.click({}), w(e.modalName, e.modalKey);
    }, v = c(() => {
      d.value;
      let l = [];
      for (let r in C) r.indexOf("button-") === 0 && l.push(r);
      return l;
    }), o = c(() => {
      d.value;
      let l = [];
      for (let r in C) r.indexOf("footer-button-") === 0 && l.push(r);
      return l;
    }), f = c(() => e.type === se.Confirm), _ = c(() => e.hiddenFooter ? !1 : o.value.length > 0 || !!C.footer || E.value || U.value), E = c(() => f.value && e.cancelButton && typeof e.cancelButton == "object" && Object.keys(e.cancelButton).length > 0), U = c(() => f.value && e.confirmButton && typeof e.confirmButton == "object" && Object.keys(e.confirmButton).length > 0), X = c(() => E.value ? {
      ...e.cancelButton,
      events: {
        ...e.cancelButton.events,
        click: h
      }
    } : {}), Y = c(() => U.value ? {
      ...e.confirmButton,
      events: {
        ...e.confirmButton.events,
        click: u
      }
    } : {}), x = c(() => {
      var k, A, S, I, R, y, P;
      const l = (k = e.header) != null && k.class ? `${e.header.class} lkt-modal-header` : "lkt-modal-header";
      let r = {
        ...e.header,
        class: l,
        text: ((A = e.header) == null ? void 0 : A.text) ?? e.title,
        topStartContent: [
          ...Array.isArray((S = e.header) == null ? void 0 : S.topStartContent) ? e.header.topStartContent : []
        ],
        topEndContent: [
          ...Array.isArray((I = e.header) == null ? void 0 : I.topEndContent) ? e.header.topEndContent : []
        ]
      };
      return (e.preTitle && e.preTitle !== "" || e.preTitleIcon && e.preTitleIcon !== "") && ((R = r.topStartContent) == null || R.push({
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
      })), (Array.isArray(e.headerButtons) && e.headerButtons.length > 0 || e.showClose) && ((P = r.topEndContent) == null || P.push({
        tag: "div",
        class: "lkt-modal-button-tray",
        content: [
          ...Array.isArray(e.headerButtons) ? (y = e.headerButtons) == null ? void 0 : y.map((Z, $e) => ({
            tag: "lkt-button",
            class: "lkt-modal-button",
            props: Z
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
      var S, I, R;
      const k = j("lkt-button"), A = j("lkt-header");
      return n(), s("section", {
        class: F(["lkt-modal", B.value]),
        style: le("z-index: " + t.zIndex),
        "data-modal": t.modalName,
        "data-key": t.modalKey
      }, [
        K("div", {
          class: "lkt-modal-back",
          onClick: ne(L, ["prevent", "stop"])
        }),
        K("div", pe, [
          x.value.text !== "" || (S = x.value.image) != null && S.src || ((I = x.value.topStartContent) == null ? void 0 : I.length) > 0 || ((R = x.value.topEndContent) == null ? void 0 : R.length) > 0 ? (n(), b(A, $(T({ key: 0 }, x.value)), ae({ _: 2 }, [
            p(C)["header-actions"] ? {
              name: "top-start",
              fn: O(() => [
                K("div", he, [
                  q(k, $(G({
                    ...t.headerActionsButton,
                    icon: "lkt-icn-cog",
                    type: p(J).Tooltip
                  })), {
                    tooltip: O(({ doClose: y }) => [
                      g(l.$slots, "header-actions")
                    ]),
                    _: 3
                  }, 16)
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : (n(), s("header", ve, [
            p(C)["header-actions"] ? (n(), s("div", _e, [
              q(k, $(G({
                ...t.headerActionsButton,
                icon: "lkt-icn-cog",
                type: p(J).Tooltip
              })), {
                tooltip: O(({ doClose: y }) => [
                  g(l.$slots, "header-actions")
                ]),
                _: 3
              }, 16)
            ])) : i("", !0),
            K("div", ge, [
              t.preTitleIcon || p(C)["pre-title"] || t.preTitle ? (n(), s("div", be, [
                t.preTitleIcon ? (n(), s("i", {
                  key: 0,
                  class: F(t.preTitleIcon)
                }, null, 2)) : i("", !0),
                p(C)["pre-title"] ? g(l.$slots, "pre-title", { key: 1 }) : t.preTitle ? (n(), s("div", {
                  key: 2,
                  innerHTML: t.preTitle
                }, null, 8, Be)) : i("", !0)
              ])) : i("", !0),
              t.title ? (n(), s("div", Me, re(t.title), 1)) : i("", !0)
            ]),
            K("div", Ke, [
              (n(!0), s(z, null, D(v.value, (y) => (n(), s("div", {
                class: F("lkt-modal-button lkt-modal-" + y)
              }, [
                g(l.$slots, y)
              ], 2))), 256)),
              t.showClose ? (n(), b(k, {
                key: 0,
                class: "lkt-modal-button",
                onClick: N,
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : i("", !0)
            ])
          ])),
          K("section", Te, [
            g(l.$slots, "default", {
              doConfirm: u,
              doCancel: h
            })
          ]),
          _.value ? (n(), s("footer", Ne, [
            p(C).footer ? (n(), s("div", xe, [
              g(l.$slots, "footer")
            ])) : i("", !0),
            o.value.length > 0 ? (n(), s("div", Se, [
              (n(!0), s(z, null, D(o.value, (y) => (n(), s("div", {
                class: F("lkt-modal-button lkt-modal-" + y)
              }, [
                g(l.$slots, y)
              ], 2))), 256))
            ])) : i("", !0),
            f.value ? (n(), s("div", Ie, [
              E.value ? (n(), b(k, $(T({ key: 0 }, X.value)), null, 16)) : i("", !0),
              U.value ? (n(), b(k, $(T({ key: 1 }, Y.value)), null, 16)) : i("", !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 512)
      ], 14, ke);
    };
  }
}), De = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", ue), t.component("lkt-modal") === void 0 && t.component("lkt-modal", Re);
  }
}, Le = (t) => {
  ce(t);
};
export {
  Ve as addConfirm,
  fe as addModal,
  Ue as closeConfirm,
  w as closeModal,
  De as default,
  we as execModal,
  Ce as openConfirm,
  ye as openModal,
  ze as reOpenModal,
  Oe as refreshModal,
  je as runModalCallback,
  Le as setCanvas,
  Ee as updateModalKey
};
