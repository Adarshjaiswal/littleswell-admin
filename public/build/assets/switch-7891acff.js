import{V as r}from"./VSwitch-2dd77126.js";import{j as m,o as h,c as v,n as t,p as a,H as p,b,w as d,Q as c,aH as O,l as n,x as L,F as f,a as y}from"./main-edf7a918.js";import{_ as $}from"./AppCardCode-363e1240.js";import{a as S,V as D}from"./VRow-95e48620.js";import"./VSelectionControl-e31052c4.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./VDivider-1a3d52ac.js";const U={class:"demo-space-x"},C={__name:"DemoSwitchStates",setup(w){const e=m("on"),o=m("on"),i=m("on");return(l,s)=>(h(),v("div",U,[t(r,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),t(r,{label:"Off"}),t(r,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),t(r,{disabled:"",label:"Off disabled"}),t(r,{modelValue:a(i),"onUpdate:modelValue":s[2]||(s[2]=u=>p(i)?i.value=u:null),loading:"warning",value:"on",label:"On loading"},null,8,["modelValue"]),t(r,{loading:"warning",label:"Off loading"})]))}},J={class:"demo-space-x"},T={__name:"DemoSwitchTrueAndFalseValue",setup(w){const e=m(1),o=m("Show");return(i,l)=>(h(),v("div",J,[t(r,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),label:a(e).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),t(r,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),label:a(o).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}},A={__name:"DemoSwitchLabelSlot",setup(w){const e=m(!1);return(o,i)=>(h(),b(r,{modelValue:a(e),"onUpdate:modelValue":i[0]||(i[0]=l=>p(e)?e.value=l:null)},{label:d(()=>[c(" Turn on the progress: "),t(O,{indeterminate:a(e),size:"24",class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}},F={class:"demo-space-x"},M={class:"mt-2 mb-0"},z={__name:"DemoSwitchModelAsArray",setup(w){const e=m(["John"]);return(o,i)=>(h(),v(f,null,[n("div",F,[t(r,{modelValue:a(e),"onUpdate:modelValue":i[0]||(i[0]=l=>p(e)?e.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),t(r,{modelValue:a(e),"onUpdate:modelValue":i[1]||(i[1]=l=>p(e)?e.value=l:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),n("p",M,L(a(e)),1)],64))}},I={class:"demo-space-x"},P={__name:"DemoSwitchColors",setup(w){const e=m(["Primary","Secondary","Success","Info","Warning","Error"]),o=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(i,l)=>(h(),v("div",I,[(h(!0),v(f,null,y(a(o),s=>(h(),b(r,{key:s,modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=u=>p(e)?e.value=u:null),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}},j={class:"demo-space-x"},k={__name:"DemoSwitchInset",setup(w){const e=m(!0),o=m(!1);return(i,l)=>(h(),v("div",j,[t(r,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),inset:"",label:`Switch 1: ${a(e).toString()}`},null,8,["modelValue","label"]),t(r,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),inset:"",label:`Switch 2: ${a(o).toString()}`},null,8,["modelValue","label"])]))}},B={class:"demo-space-x"},E={__name:"DemoSwitchBasic",setup(w){const e=m(!0),o=m(!1),i=l=>{const s=l.toString();return s.charAt(0).toUpperCase()+s.slice(1)};return(l,s)=>(h(),v("div",B,[t(r,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),label:i(a(e))},null,8,["modelValue","label"]),t(r,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),label:i(a(o))},null,8,["modelValue","label"])]))}},H={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},W={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},Q={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},Y={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`},q={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},G=n("p",null,[c("A "),n("code",null,"v-switch"),c(" in its simplest form provides a toggle between 2 values.")],-1),K=n("p",null,"You can make switch render in inset mode.",-1),X=n("p",null,[c("Switches can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),c(" prop.")],-1),Z=n("p",null,[c("Multiple "),n("code",null,"v-switch"),c("'s can share the same "),n("code",null,"v-model"),c(" by using an array.")],-1),ee=n("p",null,[c("Switch labels can be defined in "),n("code",null,"label"),c(" slot - that will allow to use HTML content.")],-1),te=n("p",null,[c(" Use "),n("code",null,"false-value"),c(" and "),n("code",null,"true-value"),c(" prop to sets value for truthy and falsy state ")],-1),le=n("p",null,[n("code",null,"v-switch"),c(" can have different states such as "),n("code",null,"default"),c(", "),n("code",null,"disabled"),c(", and "),n("code",null,"loading"),c(".")],-1),Se={__name:"switch",setup(w){return(e,o)=>{const i=E,l=$,s=k,u=P,_=z,g=A,V=T,x=C;return h(),b(D,null,{default:d(()=>[t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Basic",code:H},{default:d(()=>[G,t(i)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Inset",code:N},{default:d(()=>[K,t(s)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Colors",code:W},{default:d(()=>[X,t(u)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Model as array",code:Q},{default:d(()=>[Z,t(_)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Label slot",code:R},{default:d(()=>[ee,t(g)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"True and False Value",code:q},{default:d(()=>[te,t(V)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"States",code:Y},{default:d(()=>[le,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Se as default};
