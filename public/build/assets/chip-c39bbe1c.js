import{V as o}from"./VChip-743205b4.js";import{V as $,a as E,b as W,c as w}from"./VList-c8c5940d.js";import{V as L}from"./VListItemAction-f2feabc1.js";import{j as u,r as A,o as c,b as m,w as i,n as e,bZ as M,b_ as J,Q as a,V as _,p as s,H as D,W as g,c as v,b$ as j,c0 as T,a1 as B,$ as N,l as t,D as b}from"./main-edf7a918.js";import{V as U}from"./VMenu-2b6a4453.js";import{V as F}from"./VCombobox-0049e796.js";import{V as S}from"./VAvatar-a0e54144.js";import{_ as R}from"./AppCardCode-363e1240.js";import{a as V,V as Y}from"./VRow-95e48620.js";import"./VDivider-1a3d52ac.js";import"./forwardRefs-8f7055de.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./easing-6b01f2d6.js";import"./transition-a51ab259.js";import"./dialog-transition-9ffc684e.js";import"./VSelect-295f5731.js";import"./VTextField-457ca700.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./VImg-c738de9a.js";import"./VCounter-4c0bd440.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./filter-83f761c0.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";const O={__name:"DemoChipExpandable",setup(h){const r=u(!1);return(C,d)=>{const l=A("IconBtn");return c(),m(U,{modelValue:s(r),"onUpdate:modelValue":d[1]||(d[1]=p=>D(r)?r.value=p:null),transition:"scale-transition"},{activator:i(({props:p})=>[e(o,M(J(p)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e($,null,{default:i(()=>[e(E,null,{append:i(()=>[e(L,{class:"ms-1"},{default:i(()=>[e(l,{onClick:d[0]||(d[0]=p=>r.value=!1)},{default:i(()=>[e(_,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:i(()=>[e(W,null,{default:i(()=>[a("VueJS")]),_:1}),e(w,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},H={__name:"DemoChipInSelects",setup(h){const r=u(["Programming","Playing video games","Sleeping"]),C=u(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(d,l)=>(c(),m(F,{modelValue:s(r),"onUpdate:modelValue":l[0]||(l[0]=p=>D(r)?r.value=p:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:s(C),label:"Your favorite hobbies","prepend-icon":"bx-filter"},null,8,["modelValue","items"]))}},Q={},Z={class:"demo-space-x"};function q(h,r){return c(),v("div",Z,[e(o,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(o,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(o,null,{default:i(()=>[a("Default")]),_:1}),e(o,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(o,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const G=g(Q,[["render",q]]),K={class:"demo-space-x"},X=t("span",null,"John Doe",-1),ee=t("span",null,"Darcy Nooser",-1),ie=t("span",null,"Felicia Risker",-1),ae=t("span",null,"Minnie Mostly",-1),oe={__name:"DemoChipWithAvatar",setup(h){return(r,C)=>(c(),v("div",K,[e(o,{pill:""},{default:i(()=>[e(S,{start:"",image:s(j)},null,8,["image"]),X]),_:1}),e(o,{pill:""},{default:i(()=>[e(S,{start:"",image:s(T)},null,8,["image"]),ee]),_:1}),e(o,{pill:""},{default:i(()=>[e(S,{start:"",image:s(B)},null,8,["image"]),ie]),_:1}),e(o,{pill:""},{default:i(()=>[e(S,{start:"",image:s(N)},null,8,["image"]),ae]),_:1})]))}},te={},se={class:"demo-space-x"};function re(h,r){return c(),v("div",se,[e(o,null,{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-user"}),a(" Account ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-star"}),a(" Premium ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-cake"}),a(" 1 Year ")]),_:1}),e(o,{color:"success"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-bell"}),a(" Notification ")]),_:1}),e(o,{color:"info"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-chat"}),a(" Message ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-error"}),a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[e(_,{start:"",size:"18",icon:"bx-error-circle"}),a(" Error ")]),_:1})])}const le=g(te,[["render",re]]),ce={class:"demo-space-x"},ne={__name:"DemoChipClosable",setup(h){const r=u(!0),C=u(!0),d=u(!0),l=u(!0),p=u(!0),y=u(!0),x=u(!0);return(I,n)=>(c(),v("div",ce,[s(r)?(c(),m(o,{key:0,closable:"","onClick:close":n[0]||(n[0]=f=>r.value=!s(r))},{default:i(()=>[a(" Default ")]),_:1})):b("",!0),s(C)?(c(),m(o,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=f=>C.value=!s(C))},{default:i(()=>[a(" Primary ")]),_:1})):b("",!0),s(d)?(c(),m(o,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=f=>d.value=!s(d))},{default:i(()=>[a(" Secondary ")]),_:1})):b("",!0),s(l)?(c(),m(o,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=f=>l.value=!s(l))},{default:i(()=>[a(" Success ")]),_:1})):b("",!0),s(p)?(c(),m(o,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=f=>p.value=!s(p))},{default:i(()=>[a(" Info ")]),_:1})):b("",!0),s(y)?(c(),m(o,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=f=>y.value=!s(y))},{default:i(()=>[a(" Warning ")]),_:1})):b("",!0),s(x)?(c(),m(o,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=f=>x.value=!s(x))},{default:i(()=>[a(" Error ")]),_:1})):b("",!0)]))}},pe={},de={class:"demo-space-x"};function he(h,r){return c(),v("div",de,[e(o,{label:""},{default:i(()=>[a(" Default ")]),_:1}),e(o,{label:"",color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{label:"",color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{label:"",color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{label:"",color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{label:"",color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{label:"",color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ve=g(pe,[["render",he]]),ue={},me={class:"demo-space-x"};function Ce(h,r){return c(),v("div",me,[e(o,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const fe=g(ue,[["render",Ce]]),_e={},ve={class:"demo-space-x"};function be(h,r){return c(),v("div",ve,[e(o,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ge=g(_e,[["render",be]]),ye={},xe={class:"demo-space-x"};function Se(h,r){return c(),v("div",xe,[e(o,null,{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ie=g(ye,[["render",Se]]),De={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ke={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="bx-x"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="bx-x"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$e={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter"
  />
</template>
`},Ee={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ae={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="bx-chat"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="bx-chat"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Me=t("p",null,[a("Use "),t("code",null,"color"),a(" prop to change the background color of chips.")],-1),Je=t("p",null,[a("Use "),t("code",null,"elevated"),a(" variant option to create filled chips.")],-1),je=t("p",null,[a("Use "),t("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Te=t("p",null,[a("Label chips use the "),t("code",null,"v-card"),a(" border-radius. Use "),t("code",null,"label"),a(" prop to create label chips.")],-1),Be=t("p",null,[a("Closable chips can be controlled with a "),t("code",null,"v-model"),a(".")],-1),Ne=t("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ue=t("p",null,[a("Use "),t("code",null,"pill"),a(" prop to remove the "),t("code",null,"v-avatar"),a(" padding.")],-1),Fe=t("p",null,[a("The "),t("code",null,"v-chip"),a(" component can have various sizes from "),t("code",null,"x-small"),a(" to "),t("code",null,"x-large"),a(".")],-1),Re=t("p",null,[a("Selects can use "),t("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Ye=t("p",null,[a("Chips can be combined with "),t("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),gi={__name:"chip",setup(h){return(r,C)=>{const d=Ie,l=R,p=ge,y=fe,x=Ve,I=ne,n=le,f=oe,k=G,P=H,z=O;return c(),m(Y,{class:"match-height"},{default:i(()=>[e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:ke},{default:i(()=>[Me,e(d)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:Pe},{default:i(()=>[Je,e(p)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:We},{default:i(()=>[je,e(y)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label",code:Ee},{default:i(()=>[Te,e(x)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:De},{default:i(()=>[Be,e(I)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:Ae},{default:i(()=>[Ne,e(n)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:Le},{default:i(()=>[Ue,e(f)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:we},{default:i(()=>[Fe,e(k)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:$e},{default:i(()=>[Re,e(P)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:ze},{default:i(()=>[Ye,e(z)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{gi as default};
