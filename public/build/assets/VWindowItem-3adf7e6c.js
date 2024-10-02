import{dA as Y,ag as _,aJ as W,ah as A,ai as M,aR as P,az as j,bs as G,j as y,A as h,y as O,n as m,G as S,am as H,K as L,b5 as z,b7 as D,bt as F,b6 as J,bu as K,L as U,al as X,af as q}from"./main-edf7a918.js";import{m as Q,u as Z}from"./lazy-21e4bc45.js";import{M as N}from"./transition-a51ab259.js";import{u as p}from"./ssrBoot-b343f022.js";const tt=t=>{const{touchstartX:o,touchendX:e,touchstartY:n,touchendY:i}=t,u=.5,s=16;t.offsetX=e-o,t.offsetY=i-n,Math.abs(t.offsetY)<u*Math.abs(t.offsetX)&&(t.left&&e<o-s&&t.left(t),t.right&&e>o+s&&t.right(t)),Math.abs(t.offsetX)<u*Math.abs(t.offsetY)&&(t.up&&i<n-s&&t.up(t),t.down&&i>n+s&&t.down(t))};function et(t,o){var n;const e=t.changedTouches[0];o.touchstartX=e.clientX,o.touchstartY=e.clientY,(n=o.start)==null||n.call(o,{originalEvent:t,...o})}function nt(t,o){var n;const e=t.changedTouches[0];o.touchendX=e.clientX,o.touchendY=e.clientY,(n=o.end)==null||n.call(o,{originalEvent:t,...o}),tt(o)}function ot(t,o){var n;const e=t.changedTouches[0];o.touchmoveX=e.clientX,o.touchmoveY=e.clientY,(n=o.move)==null||n.call(o,{originalEvent:t,...o})}function st(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:e=>et(e,o),touchend:e=>nt(e,o),touchmove:e=>ot(e,o)}}function it(t,o){var v;const e=o.value,n=e!=null&&e.parent?t.parentElement:t,i=(e==null?void 0:e.options)??{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=st(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,Y(s).forEach(r=>{n.addEventListener(r,s[r],i)})}function at(t,o){var u,s;const e=(u=o.value)!=null&&u.parent?t.parentElement:t,n=(s=o.instance)==null?void 0:s.$.uid;if(!(e!=null&&e._touchHandlers)||!n)return;const i=e._touchHandlers[n];Y(i).forEach(v=>{e.removeEventListener(v,i[v])}),delete e._touchHandlers[n]}const R={mounted:it,unmounted:at},ut=R,$=Symbol.for("vuetify:v-window"),w=Symbol.for("vuetify:v-window-group"),dt=_()({name:"VWindow",directives:{Touch:R},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:t=>typeof t=="boolean"||t==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...W(),...A()},emits:{"update:modelValue":t=>!0},setup(t,o){let{slots:e}=o;const{themeClasses:n}=M(t),{isRtl:i}=P(),{t:u}=j(),s=G(t,w),v=y(),r=h(()=>i.value?!t.reverse:t.reverse),d=y(!1),b=h(()=>{const a=t.direction==="vertical"?"y":"x",f=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${a}${f}-transition`}),x=y(0),T=y(void 0),g=h(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));O(g,(a,l)=>{const f=s.items.value.length,I=f-1;f<=2?d.value=a<l:a===I&&l===0?d.value=!0:a===0&&l===I?d.value=!1:d.value=a<l}),D($,{transition:b,isReversed:d,transitionCount:x,transitionHeight:T,rootRef:v});const c=h(()=>t.continuous||g.value!==0),B=h(()=>t.continuous||g.value!==s.items.value.length-1);function C(){c.value&&s.prev()}function E(){B.value&&s.next()}const k=h(()=>{const a=[],l={icon:i.value?t.nextIcon:t.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};a.push(c.value?e.prev?e.prev({props:l}):m(S,l,null):m("div",null,null));const f={icon:i.value?t.prevIcon:t.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return a.push(B.value?e.next?e.next({props:f}):m(S,f,null):m("div",null,null)),a}),V=h(()=>t.touch===!1?t.touch:{...{left:()=>{r.value?C():E()},right:()=>{r.value?E():C()},start:l=>{let{originalEvent:f}=l;f.stopPropagation()}},...t.touch===!0?{}:t.touch});return H(()=>L(m(t.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":t.showArrows==="hover"},n.value]},{default:()=>{var a,l;return[m("div",{class:"v-window__container",style:{height:T.value}},[(a=e.default)==null?void 0:a.call(e,{group:s}),t.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(l=e.additional)==null?void 0:l.call(e,{group:s})]}}),[[z("touch"),V.value]])),{group:s}}}),ft=_()({name:"VWindowItem",directives:{Touch:ut},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...F(),...Q()},emits:{"group:selected":t=>!0},setup(t,o){let{slots:e}=o;const n=J($),i=K(t,w),{isBooted:u}=p();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=y(!1),v=h(()=>n.isReversed.value?t.reverseTransition!==!1:t.transition!==!1);function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var c;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function b(){r()}function x(c){s.value&&q(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=X(c.clientHeight))})}const T=h(()=>{const c=n.isReversed.value?t.reverseTransition:t.transition;return v.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:b,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:b,onEnter:x}:!1}),{hasContent:g}=Z(t,i.isSelected);return H(()=>m(N,{transition:u.value&&T.value},{default:()=>{var c;return[L(m("div",{class:["v-window-item",i.selectedClass.value]},[g.value&&((c=e.default)==null?void 0:c.call(e))]),[[U,i.isSelected.value]])]}})),{}}});export{dt as V,ft as a};
