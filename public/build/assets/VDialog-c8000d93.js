import{ag as h,aq as x,j as y,bA as P,y as v,af as S,A,Z as m,am as D,n as g,aL as w}from"./main-edf7a918.js";import{m as B,u as I,f as O,a as R}from"./VOverlay-729d98f7.js";import{f as T}from"./forwardRefs-8f7055de.js";import{V as F}from"./dialog-transition-9ffc684e.js";const z=h()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...B({origin:"center center",scrollStrategy:"block",transition:{component:F},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,p){let{slots:c}=p;const n=x(r,"modelValue"),{scopeId:V}=I(),a=y();function u(o){var l,s;const e=o.relatedTarget,t=o.target;if(e!==t&&((l=a.value)!=null&&l.contentEl)&&((s=a.value)!=null&&s.globalTop)&&![document,a.value.contentEl].includes(t)&&!a.value.contentEl.contains(t)){const i=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(f=>!f.hasAttribute("disabled")&&!f.matches('[tabindex="-1"]'));if(!i.length)return;const d=i[0],E=i[i.length-1];e===d?E.focus():d.focus()}}P&&v(()=>n.value&&r.retainFocus,o=>{o?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),v(n,async o=>{var e,t;await S(),o?(e=a.value.contentEl)==null||e.focus({preventScroll:!0}):(t=a.value.activatorEl)==null||t.focus({preventScroll:!0})});const b=A(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps));return D(()=>{const[o]=O(r);return g(R,m({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},o,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:b.value},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return g(w,{root:!0},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),T({},a)}});export{z as V};
