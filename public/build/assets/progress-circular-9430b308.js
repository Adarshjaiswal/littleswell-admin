import{W as g,o as n,c as p,n as e,aH as r,j as v,ad as f,ax as h,w as s,Q as o,x as d,p as t,b as y,l as a}from"./main-edf7a918.js";import{_ as z}from"./AppCardCode-363e1240.js";import{a as m,V as w}from"./VRow-95e48620.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";import"./VDivider-1a3d52ac.js";const x={},$={class:"demo-space-x"};function I(u,i){return n(),p("div",$,[e(r,{size:30,width:"3",color:"primary",indeterminate:""}),e(r,{size:40,color:"primary",indeterminate:""}),e(r,{size:50,color:"primary",indeterminate:""}),e(r,{size:60,color:"primary",indeterminate:""})])}const B=g(x,[["render",I]]),D={class:"demo-space-x"},j={__name:"DemoProgressCircularRotate",setup(u){const i=v(),l=v(0);return f(()=>{i.value=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3)}),h(()=>{clearInterval(i.value)}),(_,c)=>(n(),p("div",D,[e(r,{rotate:360,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:170,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:-90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"])]))}},R={},U={class:"demo-space-x"};function b(u,i){return n(),p("div",U,[e(r,{indeterminate:"",color:"primary"}),e(r,{indeterminate:"",color:"secondary"}),e(r,{indeterminate:"",color:"success"}),e(r,{indeterminate:"",color:"info"}),e(r,{indeterminate:"",color:"warning"}),e(r,{indeterminate:"",color:"error"})])}const k=g(R,[["render",b]]),M={},N={class:"demo-space-x"};function S(u,i){return n(),p("div",N,[e(r,{"model-value":"50",color:"primary"}),e(r,{"model-value":"50",color:"secondary"}),e(r,{"model-value":"50",color:"success"}),e(r,{"model-value":"50",color:"info"}),e(r,{"model-value":"50",color:"warning"}),e(r,{"model-value":"50",color:"error"})])}const T=g(M,[["render",S]]),A={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},E={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},H={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},Q={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},W=a("p",null,[o("Alternate colors can be applied to "),a("code",null,"v-progress-circular"),o(" using the "),a("code",null,"color"),o(" prop.")],-1),q=a("p",null,[o("Using the "),a("code",null,"indeterminate"),o(" prop, a "),a("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),F=a("p",null,[o("The "),a("code",null,"rotate"),o(" prop gives you the ability to customize the "),a("code",null,"v-progress-circular"),o("'s origin.")],-1),G=a("p",null,[o("The "),a("code",null,"size"),o(" and "),a("code",null,"width"),o(" props allow you to easily alter the size and width of the "),a("code",null,"v-progress-circular"),o(" component.")],-1),oe={__name:"progress-circular",setup(u){return(i,l)=>{const _=T,c=z,V=k,C=j,P=B;return n(),y(w,{class:"match-height"},{default:s(()=>[e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"color",code:A},{default:s(()=>[W,e(_)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Indeterminate",code:E},{default:s(()=>[q,e(V)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Rotate",code:H},{default:s(()=>[F,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Size",code:Q},{default:s(()=>[G,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{oe as default};
