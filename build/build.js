import { defineComponent as S, ref as M, getCurrentInstance as $, computed as C, openBlock as l, createElementBlock as a, Fragment as x, renderList as b, createBlock as w, resolveDynamicComponent as B, mergeProps as N, nextTick as K, useSlots as T, resolveComponent as L, normalizeClass as y, normalizeStyle as O, createElementVNode as h, withModifiers as z, unref as g, renderSlot as v, createCommentVNode as p, toDisplayString as V } from "vue";
import { openConfirm as E } from "lkt-modal-confirm";
const F = (t, e = "_") => `${t}_${e}`;
class R {
  constructor() {
    this.config = [], this.components = {}, this.zIndex = 500;
  }
  setConfig(e) {
    this.config = e;
  }
  addWindow(e) {
    this.config.push(e);
  }
  findConfig(e) {
    return this.config.find((n) => n.alias === e);
  }
  getModalInfo(e, n = "_", r = {}) {
    const i = F(e, n), d = this.findConfig(e);
    return {
      component: typeof d < "u" ? d.component : "",
      alias: e,
      index: i,
      key: n,
      props: { ...r, modalName: e, modalKey: n, zIndex: this.zIndex },
      zIndex: this.zIndex
    };
  }
  open(e, n = "_", r = {}) {
    if (this.findConfig(e)) {
      ++this.zIndex;
      const d = this.getModalInfo(e, n, r);
      return this.components[d.index] ? this.focus(d) : (this.components[d.index] = d, this.components[d.index]);
    }
  }
  focus(e) {
    return this.components[e.index] = e, this.components[e.index];
  }
  close(e, n = "_") {
    if (this.findConfig(e)) {
      --this.zIndex;
      const i = this.getModalInfo(e, n, {});
      delete this.components[i.index], Object.keys(this.components).length === 0 && (this.zIndex = 500);
    }
  }
}
const s = {
  controller: new R(),
  canvas: void 0
}, j = { class: "lkt-modal-canvas" }, D = /* @__PURE__ */ S({
  __name: "LktModalCanvas",
  setup(t, { expose: e }) {
    const n = M(0), r = $(), i = M([]), d = () => {
      n.value = n.value + 1, setTimeout(() => {
        var o;
        (o = r == null ? void 0 : r.proxy) == null || o.$forceUpdate();
      }, 1);
    }, m = C(() => (n.value, Object.values(s.controller.components)));
    return e({
      refresh: d,
      refreshModal: (o, f = "_", u = {}) => {
        i.value.forEach((c) => {
          c.modalName === o && c.modalKey === f && typeof c.doRefresh == "function" && c.doRefresh(u);
        });
      },
      execModal: (o, f = "_", u, c = {}) => {
        i.value.forEach((_) => {
          _.modalName === o && _.modalKey === f && _[u](c);
        });
      }
    }), (o, f) => (l(), a("section", j, [
      (l(!0), a(x, null, b(m.value, (u) => (l(), w(B(u.component), N({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: i,
        key: u.index
      }, u.props), null, 16))), 128))
    ]));
  }
}), ne = (t, e = "_", n = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.open(t, e, n), s.canvas.refresh();
}, se = (t, e = "_", n = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.refreshModal(t, e, n), s.canvas.refresh();
}, le = (t, e = "_", n, r = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.canvas.execModal(t, e, n, r), s.canvas.refresh();
}, H = (t, e = "_") => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh();
}, ae = (t, e) => {
  s.controller.addWindow({ alias: t, component: e });
}, re = (t, e = "_", n = {}) => {
  if (!s.canvas) {
    console.warn("ModalCanvas not defined");
    return;
  }
  s.controller.close(t, e), s.canvas.refresh(), K(() => {
    s.controller.open(t, e, n), s.canvas.refresh();
  });
}, P = {
  class: "lkt-modal-inner",
  ref: "inner"
}, W = { class: "lkt-modal-header" }, U = { class: "lkt-modal-header_title-container" }, q = {
  key: 0,
  class: "lkt-modal-header_pre-title"
}, A = ["innerHTML"], G = {
  key: 2,
  class: "lkt-modal-header_title"
}, J = { class: "lkt-modal-button-tray" }, Q = { class: "lkt-modal-content" }, X = {
  key: 0,
  class: "lkt-modal-footer"
}, Y = {
  key: 0,
  class: "lkt-modal-footer_main"
}, Z = {
  key: 1,
  class: "lkt-modal-button-tray"
}, ee = /* @__PURE__ */ S({
  __name: "LktModal",
  props: {
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    closeIcon: { type: String, default: () => s.defaultCloseIcon },
    closeConfirm: { type: String, default: "" },
    closeConfirmKey: { type: String, default: "_" },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    hiddenFooter: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: [String, Number], default: "_" },
    zIndex: { type: Number, default: 500 },
    beforeClose: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = M(0), r = C(() => {
      let o = ["lkt-modal"];
      return e.size && o.push(`is-${e.size}`), e.palette && o.push(`is-${e.palette}`), o.join(" ");
    }), i = () => {
      const o = async () => {
        typeof e.beforeClose == "function" && await e.beforeClose(), H(e.modalName, e.modalKey);
      };
      if (e.closeConfirm) {
        E(e.closeConfirm, e.closeConfirmKey, {
          onConfirm: o
        });
        return;
      }
      o();
    }, d = () => {
      e.disabledVeilClick || i();
    }, m = T(), I = C(() => {
      n.value;
      let o = [];
      for (let f in m)
        f.indexOf("button-") === 0 && o.push(f);
      return o;
    }), k = C(() => {
      n.value;
      let o = [];
      for (let f in m)
        f.indexOf("footer-button-") === 0 && o.push(f);
      return o;
    });
    return (o, f) => {
      const u = L("lkt-button");
      return l(), a("section", {
        class: y(r.value),
        style: O("z-index: " + t.zIndex)
      }, [
        h("div", {
          class: "lkt-modal-back",
          onClick: z(d, ["prevent", "stop"])
        }),
        h("div", P, [
          h("header", W, [
            h("div", U, [
              g(m)["pre-title"] ? (l(), a("div", q, [
                v(o.$slots, "pre-title")
              ])) : t.preTitle ? (l(), a("div", {
                key: 1,
                class: "lkt-modal-header_pre-title",
                innerHTML: t.preTitle
              }, null, 8, A)) : p("", !0),
              t.title ? (l(), a("div", G, V(t.title), 1)) : p("", !0)
            ]),
            h("div", J, [
              (l(!0), a(x, null, b(I.value, (c) => (l(), a("div", {
                class: y("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256)),
              t.showClose ? (l(), w(u, {
                key: 0,
                class: "lkt-modal-button",
                onClick: z(i, ["prevent", "stop"]),
                disabled: t.disabledClose,
                icon: t.closeIcon
              }, null, 8, ["disabled", "icon"])) : p("", !0)
            ])
          ]),
          h("section", Q, [
            v(o.$slots, "default")
          ]),
          !t.hiddenFooter && (k.value.length > 0 || g(m).footer) ? (l(), a("footer", X, [
            g(m).footer ? (l(), a("div", Y, [
              v(o.$slots, "footer")
            ])) : p("", !0),
            k.value.length > 0 ? (l(), a("div", Z, [
              (l(!0), a(x, null, b(k.value, (c) => (l(), a("div", {
                class: y("lkt-modal-button lkt-modal-" + c)
              }, [
                v(o.$slots, c)
              ], 2))), 256))
            ])) : p("", !0)
          ])) : p("", !0)
        ], 512)
      ], 6);
    };
  }
}), de = {
  install: (t) => {
    t.component("lkt-modal-canvas") === void 0 && t.component("lkt-modal-canvas", D), t.component("lkt-modal") === void 0 && t.component("lkt-modal", ee);
  }
}, ce = (t) => {
  s.canvas = t;
}, ie = (t) => {
  s.defaultCloseIcon = t;
};
export {
  ae as addModal,
  H as closeModal,
  de as default,
  le as execModal,
  ne as openModal,
  re as reOpenModal,
  se as refreshModal,
  ce as setCanvas,
  ie as setDefaultModalCloseIcon
};
