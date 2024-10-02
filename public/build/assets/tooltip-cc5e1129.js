import{o as s,c as _,n as o,w as t,Q as n,G as e,p as v,$ as g,V as m,Z as T,l as a,W as u,j as $,b as f}from"./main-edf7a918.js";import{V as i}from"./VTooltip-fcb72b0e.js";import{V as b}from"./VImg-c738de9a.js";import{V as S}from"./VAvatar-a0e54144.js";import{_ as H}from"./AppCardCode-363e1240.js";import{a as d,V as D}from"./VRow-95e48620.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./easing-6b01f2d6.js";import"./transition-a51ab259.js";import"./forwardRefs-8f7055de.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VDivider-1a3d52ac.js";const k={class:"demo-space-x"},E=a("span",null,"Tooltip on Icon",-1),I={__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(l,V)=>(s(),_("div",k,[o(e,null,{default:t(()=>[n(" Button "),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip ")]),_:1})]),_:1}),o(S,{color:"info"},{default:t(()=>[o(b,{src:v(g)},null,8,["src"]),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),o(i,{location:"top"},{activator:t(({props:c})=>[o(m,T(c,{size:"30",icon:"bx-user"}),null,16)]),default:t(()=>[E]),_:1})]))}},A={},w={class:"demo-space-x"},j=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function C(r,l){return s(),_("div",w,[o(e,null,{default:t(()=>[n(" scale transition "),o(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:t(()=>[j]),_:1})]),_:1}),o(e,null,{default:t(()=>[n(" scroll X transition "),o(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:t(()=>[F]),_:1})]),_:1}),o(e,null,{default:t(()=>[n(" scroll y transition "),o(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:t(()=>[X]),_:1})]),_:1})])}const M=u(A,[["render",C]]),P={class:"demo-space-x"},z=a("span",null,"Programmatic tooltip",-1),N={__name:"DemoTooltipVModelSupport",setup(r){const l=$(!1);return(V,c)=>(s(),_("div",P,[o(e,{onClick:c[0]||(c[0]=p=>l.value=!v(l))},{default:t(()=>[n(" toggle tooltip ")]),_:1}),o(i,{"model-value":v(l),location:"top"},{activator:t(({props:p})=>[o(m,T(p,{icon:"bxl-instagram"}),null,16)]),default:t(()=>[z]),_:1},8,["model-value"])]))}},Y={},L=a("span",null,"Open Delay On Hover",-1),U=a("span",null,"Open Delay On Hover",-1);function G(r,l){return s(),f(e,{variant:"outlined"},{default:t(()=>[L,n(),o(i,{"open-delay":"500",location:"top",activator:"parent"},{default:t(()=>[U]),_:1})]),_:1})}const Q=u(Y,[["render",G]]),R={},W={class:"demo-space-x"},Z=a("span",null,"Open On Hover",-1),q=a("span",null,"Open On click",-1),J=a("span",null,"Open On Hover + Focus",-1);function K(r,l){return s(),_("div",W,[o(e,{variant:"outlined"},{default:t(()=>[Z,o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Open On Hover ")]),_:1})]),_:1}),o(e,{variant:"outlined",color:"primary"},{default:t(()=>[q,o(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:t(()=>[n(" Open On click ")]),_:1})]),_:1}),o(e,{variant:"outlined"},{default:t(()=>[J,o(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:t(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const oo=u(R,[["render",K]]),to={},no={class:"demo-space-x"};function ao(r,l){return s(),_("div",no,[o(e,{variant:"outlined"},{default:t(()=>[n(" Tooltip on End "),o(i,{activator:"parent",location:"end"},{default:t(()=>[n(" End Tooltip ")]),_:1})]),_:1}),o(e,{variant:"outlined"},{default:t(()=>[n(" Tooltip on Start "),o(i,{activator:"parent",location:"start"},{default:t(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),o(e,{variant:"outlined"},{default:t(()=>[n(" Tooltip on Top "),o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),o(e,{variant:"outlined"},{default:t(()=>[n(" Tooltip on Bottom "),o(i,{activator:"parent",location:"bottom"},{default:t(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const io=u(to,[["render",ao]]),eo={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},lo={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},po={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},so={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="bx-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="bx-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},ro={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},co={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="bxl-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="bxl-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},_o=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),uo=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),vo=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),Vo=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),mo=a("p",null,"Tooltips can wrap any element.",-1),Eo={__name:"tooltip",setup(r){return(l,V)=>{const c=io,p=H,B=oo,O=Q,h=N,x=M,y=I;return s(),f(D,null,{default:t(()=>[o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Location",code:po},{default:t(()=>[_o,o(c)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Events",code:lo},{default:t(()=>[o(B)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Delay On Hover",code:eo},{default:t(()=>[uo,o(O)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"V-Model Support",code:co},{default:t(()=>[vo,o(h)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Transition",code:ro},{default:t(()=>[Vo,o(x)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Tooltip on Various Elements",code:so},{default:t(()=>[mo,o(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Eo as default};
