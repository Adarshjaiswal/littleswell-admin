import{W as v,j as _,b8 as f,y,p as d,o as l,b as m,w as n,c as C,F as I,a as R,Z as V,n as c,q as W,l as i,H as p,D as x,V as S,x as g}from"./main-edf7a918.js";import{a as b,V as k}from"./VRow-95e48620.js";import{V as $}from"./VInput-69f8a183.js";import{V as j}from"./VCheckbox-8fbf8b3f.js";import{a as w,V as U}from"./VRadioGroup-c9851118.js";import{V as q}from"./VSpacer-cd3d7120.js";import{_ as E}from"./AppCardCode-363e1240.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VDivider-1a3d52ac.js";const z=["src"],O={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedCheckbox)));return y(t,()=>{r("update:selectedCheckbox",t.value)}),(a,s)=>o.checkboxContent&&d(t)?(l(),m(k,{key:0,modelValue:d(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(l(!0),C(I,null,R(o.checkboxContent,e=>(l(),m(b,V({key:e.value},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-checkbox rounded cursor-pointer",d(t).includes(e.value)?"active":""])},{default:n(()=>[i("div",null,[c(j,{modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=h=>p(t)?t.value=h:null),value:e.value},null,8,["modelValue","value"])]),i("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,z)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):x("",!0)}},L=v(O,[["__scopeId","data-v-b40e5e90"]]),D="/build/assets/background-1-ceba94e3.jpg",A="/build/assets/background-2-d22b51b2.jpg",B="/build/assets/background-3-fdf5581c.jpg",P={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(u){const r=[{bgImage:D,value:"basic"},{bgImage:A,value:"premium"},{bgImage:B,value:"enterprise"}],o=_(["basic"]);return(t,a)=>{const s=L;return l(),m(s,{"selected-checkbox":d(o),"onUpdate:selectedCheckbox":a[0]||(a[0]=e=>p(o)?o.value=e:null),"checkbox-content":r,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const N=["src"],T={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedRadio)));return y(t,()=>{r("update:selectedRadio",t.value)}),(a,s)=>o.radioContent?(l(),m(U,{key:0,modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(k,null,{default:n(()=>[(l(!0),C(I,null,R(o.radioContent,e=>(l(),m(b,V({key:e.bgImage},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-radio rounded cursor-pointer",d(t)===e.value?"active":""])},{default:n(()=>[i("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,N),c(w,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):x("",!0)}},H=v(T,[["__scopeId","data-v-250327a3"]]),Z={__name:"DemoCustomInputCustomRadiosWithImage",setup(u){const r=[{bgImage:D,value:"basic"},{bgImage:A,value:"premium"},{bgImage:B,value:"enterprise"}],o=_("basic");return(t,a)=>{const s=H;return l(),m(s,{"selected-radio":d(o),"onUpdate:selectedRadio":a[0]||(a[0]=e=>p(o)?o.value=e:null),"radio-content":r,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const J={class:"d-flex flex-column align-center text-center gap-2"},K={class:"cr-title text-base"},M={class:"text-sm mb-0"},Q={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedCheckbox)));return y(t,()=>{r("update:selectedCheckbox",t.value)}),(a,s)=>o.checkboxContent&&d(t)?(l(),m(k,{key:0,modelValue:d(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(l(!0),C(I,null,R(o.checkboxContent,e=>(l(),m(b,V({key:e.title},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-checkbox rounded cursor-pointer",d(t).includes(e.value)?"active":""])},{default:n(()=>[i("div",J,[c(S,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),i("h6",K,g(e.title),1),i("p",M,g(e.desc),1)]),i("div",null,[c(j,{modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=h=>p(t)?t.value=h:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):x("",!0)}},X=v(Q,[["__scopeId","data-v-2a428563"]]),Y={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(u){const r=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:"bx-server"},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:"bx-shield"},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:"bx-lock-alt"}],o=_(["basic"]);return(t,a)=>{const s=X;return l(),m(s,{"selected-checkbox":d(o),"onUpdate:selectedCheckbox":a[0]||(a[0]=e=>p(o)?o.value=e:null),"checkbox-content":r,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const ee={class:"d-flex flex-column align-center text-center gap-2"},te={class:"cr-title text-base"},oe={class:"text-sm mb-0"},se={__name:"CustomRadiosWithIcon",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedRadio)));return y(t,()=>{r("update:selectedRadio",t.value)}),(a,s)=>o.radioContent?(l(),m(U,{key:0,modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(k,null,{default:n(()=>[(l(!0),C(I,null,R(o.radioContent,e=>(l(),m(b,V({key:e.title},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-radio rounded cursor-pointer",d(t)===e.value?"active":""])},{default:n(()=>[i("div",ee,[c(S,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),i("h6",te,g(e.title),1),i("p",oe,g(e.desc),1)]),i("div",null,[c(w,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):x("",!0)}},ce=v(se,[["__scopeId","data-v-20656255"]]),ne={__name:"DemoCustomInputCustomRadiosWithIcon",setup(u){const r=[{title:"Starter",desc:"A simple start for everyone.",value:"starter",icon:"bx-rocket"},{title:"Standard",desc:"For small to medium businesses.",value:"standard",icon:"bx-user"},{title:"Enterprise",desc:"Solution for big organizations.",value:"enterprise",icon:"bx-crown"}],o=_("basic");return(t,a)=>{const s=ce;return l(),m(s,{"selected-radio":d(o),"onUpdate:selectedRadio":a[0]||(a[0]=e=>p(o)?o.value=e:null),"radio-content":r,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const ae={class:"flex-grow-1"},le={class:"d-flex align-center mb-1"},ue={class:"cr-title text-base"},re={key:0},de={class:"text-sm mb-0"},ie={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedCheckbox)));return y(t,()=>{r("update:selectedCheckbox",t.value)}),(a,s)=>o.checkboxContent&&d(t)?(l(),m(k,{key:0,modelValue:d(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(l(!0),C(I,null,R(o.checkboxContent,e=>(l(),m(b,V({key:e.title},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-checkbox rounded cursor-pointer",d(t).includes(e.value)?"active":""])},{default:n(()=>[i("div",null,[c(j,{modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=h=>p(t)?t.value=h:null),value:e.value},null,8,["modelValue","value"])]),i("div",ae,[i("div",le,[i("h6",ue,g(e.title),1),c(q),e.subtitle?(l(),C("span",re,g(e.subtitle),1)):x("",!0)]),i("p",de,g(e.desc),1)])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):x("",!0)}},me=v(ie,[["__scopeId","data-v-8668f6da"]]),pe={__name:"DemoCustomInputCustomCheckboxes",setup(u){const r=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=_(["basic"]);return(t,a)=>{const s=me;return l(),m(s,{"selected-checkbox":d(o),"onUpdate:selectedCheckbox":a[0]||(a[0]=e=>p(o)?o.value=e:null),"checkbox-content":r,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}};const be={class:"flex-grow-1"},_e={class:"d-flex align-center mb-1"},ge={class:"cr-title text-base"},Ce={key:0},xe={class:"text-sm mb-0"},he={__name:"CustomRadios",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(u,{emit:r}){const o=u,t=_(structuredClone(f(o.selectedRadio)));return y(t,()=>{r("update:selectedRadio",t.value)}),(a,s)=>o.radioContent?(l(),m(U,{key:0,modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(k,null,{default:n(()=>[(l(!0),C(I,null,R(o.radioContent,e=>(l(),m(b,V({key:e.title},u.gridColumn),{default:n(()=>[c($,{class:W(["custom-input custom-radio rounded cursor-pointer",d(t)===e.value?"active":""])},{default:n(()=>[i("div",null,[c(w,{value:e.value},null,8,["value"])]),i("div",be,[i("div",_e,[i("h6",ge,g(e.title),1),c(q),e.subtitle?(l(),C("span",Ce,g(e.subtitle),1)):x("",!0)]),i("p",xe,g(e.desc),1)])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):x("",!0)}},ke=v(he,[["__scopeId","data-v-16dc5ff2"]]),ve={__name:"DemoCustomInputCustomRadios",setup(u){const r=[{title:"Basic",desc:"Get 2 projects with 2 team members.",value:"basic"},{title:"Premium",subtitle:"$5.00",desc:"Get 8 projects with 8 team members.",value:"premium"}],o=_("basic");return(t,a)=>{const s=ke;return l(),m(s,{"selected-radio":d(o),"onUpdate:selectedRadio":a[0]||(a[0]=e=>p(o)?o.value=e:null),"radio-content":r,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},fe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ye={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ie={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Re={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ve={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},We={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ne={__name:"custom-input",setup(u){return(r,o)=>{const t=ve,a=E,s=pe,e=ne,h=Y,G=Z,F=P;return l(),m(k,null,{default:n(()=>[c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Radios",code:Re},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Checkboxes",code:fe},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Radios With Icon",code:Ve},{default:n(()=>[c(e)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Checkboxes With Icon",code:ye},{default:n(()=>[c(h)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Radios With Image",code:We},{default:n(()=>[c(G)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(a,{title:"Custom Checkboxes With Image",code:Ie},{default:n(()=>[c(F)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ne as default};
