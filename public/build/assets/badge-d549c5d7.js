import{o as g,c as v,n as t,w as e,p as n,b$ as d,b as A,F as H,a as D,Q as o,x as $,j as _,dI as h,V as m,l as s,G as B,W as k}from"./main-edf7a918.js";import{V as i}from"./VAvatar-a0e54144.js";import{V as l}from"./VImg-c738de9a.js";import{V as a}from"./VBadge-6174332e.js";import{a as O,V as S}from"./VTabs-272b6a43.js";import{_ as W}from"./AppCardCode-363e1240.js";import{a as u,V as E}from"./VRow-95e48620.js";import"./transition-a51ab259.js";import"./easing-6b01f2d6.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VDivider-1a3d52ac.js";const C={class:"demo-space-x"},j={__name:"DemoBadgeMaximumValue",setup(p){return(c,f)=>(g(),v("div",C,[t(a,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},N={__name:"DemoBadgeTabs",setup(p){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(f,V)=>(g(),A(S,{grow:""},{default:e(()=>[(g(),v(H,null,D(c,r=>t(O,{key:r.content,value:r.content},{default:e(()=>[t(a,{content:r.badge,"offset-x":-12,"offset-y":-4},{default:e(()=>[o($(r.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},M={class:"demo-space-x"},Y={__name:"DemoBadgeShowOnHover",setup(p){const c=_(),f=_(),V=_(),r=h(f),x=h(c),b=h(V);return(I,z)=>(g(),v("div",M,[t(a,{content:"3",transition:"slide-x-transition","model-value":n(r)},{default:e(()=>[t(m,{ref_key:"tRefTwitterBadge",ref:f,size:"25",icon:"bxl-twitter"},null,512)]),_:1},8,["model-value"]),t(a,{content:"5",transition:"scale-transition","model-value":n(x)},{default:e(()=>[t(m,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"bxl-instagram"},null,512)]),_:1},8,["model-value"]),t(a,{content:"1",transition:"slide-x-transition","model-value":n(b)},{default:e(()=>[t(m,{ref_key:"tRefWhatsappBadge",ref:V,size:"25",icon:"bxl-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},P={class:"d-flex align-center"},F={class:"demo-space-x"},U={__name:"DemoBadgeDynamicNotifications",setup(p){const c=_();return(f,V)=>(g(),v("div",P,[t(a,{content:n(c),"model-value":!!n(c),color:"success",class:"me-5"},{default:e(()=>[t(m,{size:"40",icon:"mdi-vuetify"})]),_:1},8,["content","model-value"]),s("div",F,[t(B,{onClick:V[0]||(V[0]=r=>c.value=(n(c)||0)+1)},{default:e(()=>[o(" Send Message ")]),_:1}),t(B,{color:"error",onClick:V[1]||(V[1]=r=>c.value=0)},{default:e(()=>[o(" Clear Notifications ")]),_:1})])]))}},G={class:"demo-space-x"},L={__name:"DemoBadgeAvatarStatus",setup(p){return(c,f)=>(g(),v("div",G,[t(a,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},Q={class:"demo-space-x"},q={__name:"DemoBadgeIcon",setup(p){return(c,f)=>(g(),v("div",Q,[t(a,null,{badge:e(()=>[t(m,{icon:"mdi-information-variant"})]),default:e(()=>[t(i,null,{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{icon:"bx-lock-open-alt"},{default:e(()=>[t(i,null,{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},J={class:"demo-space-x"},K={__name:"DemoBadgePosition",setup(p){return(c,f)=>(g(),v("div",J,[t(a,{content:"1",location:"end top"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom start",content:"2"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom end",content:"3"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"top start",content:"4"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},X={},Z={class:"demo-space-x"};function tt(p,c){return g(),v("div",Z,[t(a,{dot:"",color:"primary"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1}),t(a,{dot:"",color:"secondary"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1}),t(a,{dot:"",color:"success"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1}),t(a,{dot:"",color:"info"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1}),t(a,{dot:"",color:"warning"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1}),t(a,{dot:"",color:"error"},{default:e(()=>[t(m,{size:"24",icon:"bxl-instagram"})]),_:1})])}const et=k(X,[["render",tt]]),at={class:"demo-space-x d-flex align-center flex-wrap"},ot={__name:"DemoBadgeStyle",setup(p){return(c,f)=>(g(),v("div",at,[t(a,{content:"1"},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[o(" Default ")]),_:1})]),_:1}),t(a,{content:"5",bordered:""},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[o(" Border ")]),_:1})]),_:1}),t(a,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{inline:"",content:"5"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{rounded:"sm",content:"5"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:n(d)},null,8,["src"])]),_:1})]),_:1})]))}},st={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},nt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="24"
        icon="bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`},rt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="mdi-vuetify"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="mdi-vuetify"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},ct={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open-alt">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open-alt">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},dt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},lt={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bxl-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bxl-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},ft=s("p",null,[o("You can use various props like "),s("code",null,"bordered"),o(", "),s("code",null,"dot"),o(", "),s("code",null,"inline"),o(", "),s("code",null,"rounded"),o(" etc. to style the badge.")],-1),Vt=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to create various background badges.")],-1),pt=s("p",null,[o("You can use "),s("code",null,"location"),o(" prop to change the position of the badge. Possible values are "),s("code",null,"top-end"),o(", "),s("code",null,"bottom-end"),o(", "),s("code",null,"bottom-start"),o(", "),s("code",null,"top-start"),o(".")],-1),ut=s("p",null,[o("You can use "),s("code",null,"icon"),o(" prop or use "),s("code",null,"slot"),o(" to render the icon")],-1),vt=s("p",null,"You can use badge with avatar as status.",-1),_t=s("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1),Bt=s("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1),xt=s("p",null,"Badges help convey information to the user in a variety of ways.",-1),bt=s("p",null,[o("Use "),s("code",null,"max"),o(" prop to cap the value of the badge content")],-1),Ot={__name:"badge",setup(p){return(c,f)=>{const V=ot,r=W,x=et,b=K,I=q,z=L,w=U,y=Y,T=N,R=j;return g(),A(E,{class:"match-height"},{default:e(()=>[t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Style",code:mt},{default:e(()=>[ft,t(V)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Color",code:nt},{default:e(()=>[Vt,t(x)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Position",code:it},{default:e(()=>[pt,t(b)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Icon",code:ct},{default:e(()=>[ut,t(I)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Avatar Status",code:st},{default:e(()=>[vt,t(z)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Dynamic notifications",code:rt},{default:e(()=>[_t,t(w)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Show on hover",code:lt},{default:e(()=>[Bt,t(y)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Tabs",code:gt},{default:e(()=>[xt,t(T)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Maximum Value",code:dt},{default:e(()=>[bt,t(R)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ot as default};
