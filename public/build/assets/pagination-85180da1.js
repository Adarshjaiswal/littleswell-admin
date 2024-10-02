import{V as c}from"./VPagination-efdd592b.js";import{j as p,o as g,c as v,n as t,p as d,H as m,b as P,W as C,w as i,l,Q as o}from"./main-edf7a918.js";import{_ as z}from"./AppCardCode-363e1240.js";import{a as f,V as S}from"./VRow-95e48620.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";import"./VDivider-1a3d52ac.js";const $={class:"d-flex flex-column gap-6"},j={__name:"DemoPaginationSize",setup(_){const e=p(1),s=p(1),n=p(1);return(a,r)=>(g(),v("div",$,[t(c,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),length:7,size:"small"},null,8,["modelValue"]),t(c,{modelValue:d(s),"onUpdate:modelValue":r[1]||(r[1]=u=>m(s)?s.value=u:null),length:7},null,8,["modelValue"]),t(c,{modelValue:d(n),"onUpdate:modelValue":r[2]||(r[2]=u=>m(n)?n.value=u:null),length:7,size:"large"},null,8,["modelValue"])]))}},I={class:"d-flex flex-column gap-6"},T={__name:"DemoPaginationColor",setup(_){const e=p(1),s=p(2),n=p(3);return(a,r)=>(g(),v("div",I,[t(c,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),length:7,"active-color":"success"},null,8,["modelValue"]),t(c,{modelValue:d(s),"onUpdate:modelValue":r[1]||(r[1]=u=>m(s)?s.value=u:null),length:7,"active-color":"error"},null,8,["modelValue"]),t(c,{modelValue:d(n),"onUpdate:modelValue":r[2]||(r[2]=u=>m(n)?n.value=u:null),length:7,"active-color":"info"},null,8,["modelValue"])]))}},B={__name:"DemoPaginationTotalVisible",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),length:15,"total-visible":7},null,8,["modelValue"]))}},E={__name:"DemoPaginationLength",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),length:15},null,8,["modelValue"]))}},O={__name:"DemoPaginationIcons",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),length:5,"prev-icon":"bxs-left-arrow","next-icon":"bxs-right-arrow"},null,8,["modelValue"]))}},y={};function k(_,e){return g(),P(c,{length:5,disabled:""})}const L=C(y,[["render",k]]),N={__name:"DemoPaginationOutlineCircle",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"]))}},R={__name:"DemoPaginationCircle",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),length:5,rounded:"circle"},null,8,["modelValue"]))}},A={__name:"DemoPaginationOutline",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),variant:"outlined",length:5},null,8,["modelValue"]))}},H={__name:"DemoPaginationBasic",setup(_){const e=p(1);return(s,n)=>(g(),P(c,{modelValue:d(e),"onUpdate:modelValue":n[0]||(n[0]=a=>m(e)?e.value=a:null),length:5},null,8,["modelValue"]))}},Q={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},W={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},Y={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},q={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="bxs-left-arrow"
    next-icon="bxs-right-arrow"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="bxs-left-arrow"
    next-icon="bxs-right-arrow"
  />
</template>
`},G={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},J={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},K={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},M={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(1)
const largePagination = ref(1)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(1)
const largePagination = ref(1)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`},Z=l("p",null,[o("The "),l("code",null,"v-pagination"),o(" component is used to separate long sets of data.")],-1),ee=l("p",null,[o("The "),l("code",null,"variant='outline'"),o(" prop is used to give outline to pagination item.")],-1),te=l("p",null,[o("The "),l("code",null,"rounded"),o(" prop allows you to render pagination buttons with alternative styles.")],-1),ne=l("p",null,[o("The "),l("code",null,"variant='outline'"),o(" and "),l("code",null,"rounded"),o(" prop is used to give rounded outline to pagination item.")],-1),le=l("p",null,[o("Pagination items can be manually deactivated using the "),l("code",null,"disabled"),o(" prop.")],-1),oe=l("p",null,[o("Previous and next page icons can be customized with the "),l("code",null,"prev-icon"),o(" and "),l("code",null,"next-icon"),o(" props.")],-1),ae=l("p",null,[o("Using the "),l("code",null,"length"),o(" prop you can set the length of "),l("code",null,"v-pagination"),o(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1),ie=l("p",null,[o("You can also manually set the maximum number of visible page buttons with the "),l("code",null,"total-visible"),o(" prop.")],-1),se=l("p",null,[o("Use "),l("code",null,"active-color"),o(" prop for create different color pagination.")],-1),re=l("p",null,[o("Use "),l("code",null,"size"),o(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),l("strong",null,"x-small"),o(", "),l("strong",null,"small"),o(", "),l("strong",null,"default"),o(", "),l("strong",null,"large"),o(", and "),l("strong",null,"x-large"),o(".")],-1),Ve={__name:"pagination",setup(_){return(e,s)=>{const n=H,a=z,r=A,u=R,V=N,h=L,x=O,b=E,D=B,w=T,U=j;return g(),P(S,{class:"match-height"},{default:i(()=>[t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Basic",code:Q},{default:i(()=>[Z,t(n)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Outline",code:J},{default:i(()=>[ee,t(r)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Circle",code:W},{default:i(()=>[te,t(u)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Outline Circle",code:K},{default:i(()=>[ne,t(V)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Disabled",code:q},{default:i(()=>[le,t(h)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Icons",code:F},{default:i(()=>[oe,t(x)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Length",code:G},{default:i(()=>[ae,t(b)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Total visible",code:X},{default:i(()=>[ie,t(D)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Color",code:Y},{default:i(()=>[se,t(w)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:i(()=>[t(a,{title:"Size",code:M},{default:i(()=>[re,t(U)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ve as default};
