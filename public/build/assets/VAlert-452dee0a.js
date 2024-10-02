import{c as L}from"./VAvatar-a0e54144.js";import{ag as $,ao as D,aB as I,b3 as z,aO as O,b0 as R,by as j,aQ as w,aJ as E,ah as F,be as q,aq as G,A as s,ai as J,bg as M,aC as N,b4 as Q,aU as U,b1 as W,bz as H,aW as K,aj as X,ak as Y,az as Z,n as t,bh as p,aL as u,V as ee,G as ae}from"./main-edf7a918.js";const te=L("v-alert-title"),le=["success","info","warning","error"],oe=$()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...I(),...z(),...O(),...R(),...j(),...w(),...E(),...F(),...q({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const n=G(e,"modelValue"),l=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),v=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:m}=J(e),{colorClasses:y,colorStyles:b,variantClasses:f}=M(v),{densityClasses:V}=N(e),{dimensionStyles:C}=Q(e),{elevationClasses:k}=U(e),{locationStyles:P}=W(e),{positionClasses:g}=H(e),{roundedClasses:x}=K(e),{textColorClasses:S,textColorStyles:_}=X(Y(e,"borderColor")),{t:h}=Z(),o=s(()=>({"aria-label":h(e.closeLabel),onClick(r){n.value=!1}}));return()=>{const r=!!(a.prepend||l.value),B=!!(a.title||e.title),T=!!(e.text||a.text),A=!!(a.close||e.closable);return n.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,y.value,V.value,k.value,g.value,x.value,f.value],style:[b.value,C.value,P.value],role:"alert"},{default:()=>{var i;return[p(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",S.value],style:_.value},null),r&&t(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},{default:()=>[t("div",{class:"v-alert__prepend"},[a.prepend?a.prepend():l.value&&t(ee,null,null)])]}),t("div",{class:"v-alert__content"},[B&&t(te,{key:"title"},{default:()=>[a.title?a.title():e.title]}),T&&(a.text?a.text():e.text),(i=a.default)==null?void 0:i.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),A&&t(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[t("div",{class:"v-alert__close"},[((c=a.close)==null?void 0:c.call(a,{props:o.value}))??t(ae,o.value,null)])]}})]}})}}});export{oe as V,te as a};
