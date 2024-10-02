import{j as v,o as d,c as g,n as e,p as f,H as _,c6 as s,w as l,l as o,x as L,W as h,b as y,ad as w,ax as B,y as k,Q as t}from"./main-edf7a918.js";import{_ as M}from"./AppCardCode-363e1240.js";import{a as p,V as $}from"./VRow-95e48620.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";import"./VDivider-1a3d52ac.js";const x={class:"demo-space-y"},I={__name:"DemoProgressLinearSlots",setup(m){const r=v(20),c=v(33),i=v(78);return(n,u)=>(d(),g("div",x,[e(s,{modelValue:f(i),"onUpdate:modelValue":u[0]||(u[0]=a=>_(i)?i.value=a:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:f(r),"onUpdate:modelValue":u[1]||(u[1]=a=>_(r)?r.value=a:null),color:"primary",height:"20"},{default:l(({value:a})=>[o("strong",null,L(Math.ceil(a))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:f(c),"onUpdate:modelValue":u[2]||(u[2]=a=>_(c)?c.value=a:null),height:"20",color:"primary"},{default:l(()=>[o("strong",null,L(Math.ceil(f(c)))+"%",1)]),_:1},8,["modelValue"])]))}},D={},U={class:"demo-space-y"};function j(m,r){return d(),g("div",U,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:""}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:""}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:""})])}const R=h(D,[["render",j]]),C={};function T(m,r){return d(),y(s,{color:"primary",indeterminate:"",reverse:""})}const S=h(C,[["render",T]]),N={};function A(m,r){return d(),y(s,{indeterminate:"",color:"primary"})}const E=h(N,[["render",A]]),H={class:"demo-space-y"},Q={__name:"DemoProgressLinearBuffering",setup(m){const r=v(10),c=v(20),i=v(),n=()=>{clearInterval(i.value),i.value=setInterval(()=>{r.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return w(n),B(()=>{clearInterval(i.value)}),k(r,()=>{if(r.value<100)return!1;r.value=0,c.value=10,n()}),(u,a)=>(d(),g("div",H,[e(s,{modelValue:f(r),"onUpdate:modelValue":a[0]||(a[0]=V=>_(r)?r.value=V:null),color:"primary",height:"8","buffer-value":f(c)},null,8,["modelValue","buffer-value"])]))}},W={},Y={class:"demo-space-y"};function q(m,r){return d(),g("div",Y,[e(s,{"model-value":"15","bg-color":"primary",color:"primary"}),e(s,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(s,{"model-value":"45","bg-color":"success",color:"success"})])}const z=h(W,[["render",q]]),F={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},G={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},J={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},K={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},O={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`},X={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},Z=o("p",null,[t("Use the props "),o("code",null,"color"),t(" and "),o("code",null,"background-color"),t(" to set colors.")],-1),ee=o("p",null,[t("The primary value is controlled by "),o("code",null,"v-model"),t(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),t(" prop.")],-1),re=o("p",null,[t("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),t(". This indicates continuous process. ")],-1),oe=o("p",null,[t("Use prop "),o("code",null,"reverse"),t(" to animate continuously in reverse direction. The component also has RTL support.")],-1),le=o("p",null,[t("The "),o("code",null," rounded "),t(" prop is used to apply a border radius to the v-progress-linear component.")],-1),te=o("p",null,[t("we can bind user input using "),o("code",null,"v-model"),t(".You can also use the default slot for the same.")],-1),fe={__name:"progress-linear",setup(m){return(r,c)=>{const i=z,n=M,u=Q,a=E,V=S,P=R,b=I;return d(),y($,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Color",code:G},{default:l(()=>[Z,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Buffering",code:F},{default:l(()=>[ee,e(u)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Indeterminate",code:J},{default:l(()=>[re,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Reversed",code:K},{default:l(()=>[oe,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rounded",code:O},{default:l(()=>[le,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Slots",code:X},{default:l(()=>[te,e(b)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{fe as default};
