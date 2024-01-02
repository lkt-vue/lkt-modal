(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("lkt-modal-confirm")):typeof define=="function"&&define.amd?define(["exports","vue","lkt-modal-confirm"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.LktModal={},s.Vue,s.lktModalConfirm))})(this,function(s,e,a){"use strict";var A=Object.defineProperty;var H=(s,e,a)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var h=(s,e,a)=>(H(s,typeof e!="symbol"?e+"":e,a),a);const g=(o,t="_")=>`${o}_${t}`;class B{constructor(){h(this,"config",[]);h(this,"components",{});h(this,"zIndex",500)}setConfig(t){this.config=t}addWindow(t){this.config.push(t)}findConfig(t){return this.config.find(n=>n.alias===t)}getModalInfo(t,n="_",c={}){const i=g(t,n);return{component:this.findConfig(t).component,alias:t,index:i,key:n,props:{...c,modalName:t,modalKey:n,zIndex:(()=>this.zIndex)()},zIndex:this.zIndex}}open(t,n="_",c={}){if(this.findConfig(t)){++this.zIndex;const r=this.getModalInfo(t,n,c);return this.components[r.index]?this.focus(r):(this.components[r.index]=r,this.components[r.index])}}focus(t){return this.components[t.index]=t,this.components[t.index]}close(t,n="_"){if(this.findConfig(t)){--this.zIndex;const i=this.getModalInfo(t,n,{});delete this.components[i.index],Object.keys(this.components).length===0&&(this.zIndex=500)}}}const d={controller:new B,canvas:void 0},y=(o,t="_",n={})=>{d.controller.open(o,t,n),d.canvas.refresh()},C=(o,t="_")=>{d.controller.close(o,t),d.canvas.refresh()},u=(o,t)=>{d.controller.addWindow({alias:o,component:t})},M={class:"lkt-modal-canvas"},S={name:"LktModalCanvas",inheritAttrs:!1},E=e.defineComponent({...S,setup(o,{expose:t}){const n=e.ref(0),{ctx:c}=e.getCurrentInstance(),i=()=>{n.value=n.value+1,setTimeout(()=>{c.$forceUpdate()},1)},r=e.computed(()=>(n.value,Object.values(d.controller.components)));return t({refresh:i}),(f,_)=>(e.openBlock(),e.createElementBlock("section",M,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value,m=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(m.component),e.mergeProps({key:m.index},m.props),null,16))),128))]))}}),b={class:"lkt-modal-inner",ref:"inner"},x={class:"lkt-modal-header"},z={class:"lkt-modal-header_title-container"},N={key:0,class:"lkt-modal-header_pre-title"},V=["innerHTML"],I={key:2,class:"lkt-modal-header_title"},w={class:"lkt-modal-button-tray"},$=["disabled"],L={"data-role":"loader"},T={class:"lkt-modal-content"},j={key:0,class:"lkt-modal-footer"},D={key:0,class:"lkt-modal-footer_main"},K={key:1,class:"lkt-modal-button-tray"},O={name:"LktModal",inheritAttrs:!1},F=e.defineComponent({...O,props:{palette:{type:String,default:""},size:{type:String,default:""},preTitle:{type:String,default:""},title:{type:String,default:""},loading:{type:Boolean,default:!1},closeConfirm:{type:String,default:""},closeConfirmKey:{type:String,default:"_"},showClose:{type:Boolean,default:!0},disabledClose:{type:Boolean,default:!1},disabledVeilClick:{type:Boolean,default:!1},modalName:{type:String,default:""},modalKey:{type:String,default:"_"},zIndex:{type:Number,default:500}},setup(o){const t=o,n=e.ref(0),c=e.computed(()=>{let l=["lkt-modal"];return t.size&&l.push(`is-${t.size}`),t.palette&&l.push(`is-${t.palette}`),l.join(" ")}),i=()=>{const l=()=>C(t.modalName,t.modalKey);if(t.closeConfirm){a.openConfirm(t.closeConfirm,t.closeConfirmKey,{onConfirm:l});return}l()},r=()=>{t.disabledVeilClick||i()},f=e.useSlots(),_=e.computed(()=>{n.value;let l=[];for(let p in f)p.indexOf("button-")===0&&l.push(p);return l}),m=e.computed(()=>{n.value;let l=[];for(let p in f)p.indexOf("footer-button-")===0&&l.push(p);return l});return(l,p)=>{const q=e.resolveComponent("lkt-loader");return e.openBlock(),e.createElementBlock("section",{class:e.normalizeClass(c.value),style:e.normalizeStyle("z-index: "+o.zIndex)},[e.createElementVNode("div",{class:"lkt-modal-back",onClick:e.withModifiers(r,["prevent","stop"])}),e.createElementVNode("div",b,[e.createElementVNode("header",x,[e.createElementVNode("div",z,[e.unref(f)["pre-title"]?(e.openBlock(),e.createElementBlock("div",N,[e.renderSlot(l.$slots,"pre-title")])):o.preTitle?(e.openBlock(),e.createElementBlock("div",{key:1,class:"lkt-modal-header_pre-title",innerHTML:o.preTitle},null,8,V)):e.createCommentVNode("",!0),o.title?(e.openBlock(),e.createElementBlock("div",I,e.toDisplayString(o.title),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",w,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(_.value,k=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass("lkt-modal-button lkt-modal-"+k)},[e.renderSlot(l.$slots,k)],2))),256)),o.showClose?(e.openBlock(),e.createElementBlock("button",{key:0,class:"lkt-modal-button lkt-modal-button-close",onClick:e.withModifiers(i,["prevent","stop"]),disabled:o.disabledClose},null,8,$)):e.createCommentVNode("",!0)])]),e.withDirectives(e.createElementVNode("section",L,[e.createVNode(q)],512),[[e.vShow,o.loading]]),e.withDirectives(e.createElementVNode("section",T,[e.renderSlot(l.$slots,"default")],512),[[e.vShow,!o.loading]]),m.value.length>0||!!e.unref(f).footer?e.withDirectives((e.openBlock(),e.createElementBlock("footer",j,[e.unref(f).footer?(e.openBlock(),e.createElementBlock("div",D,[e.renderSlot(l.$slots,"footer")])):e.createCommentVNode("",!0),m.value.length>0?(e.openBlock(),e.createElementBlock("div",K,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,k=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass("lkt-modal-button lkt-modal-"+k)},[e.renderSlot(l.$slots,k)],2))),256))])):e.createCommentVNode("",!0)],512)),[[e.vShow,!o.loading]]):e.createCommentVNode("",!0)],512)],6)}}}),W="",P={install:(o,t)=>{o.component("lkt-modal-canvas",E).component("lkt-modal",F)},setCanvas:o=>{d.canvas=o}};s.addModal=u,s.closeModal=C,s.default=P,s.openModal=y,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
