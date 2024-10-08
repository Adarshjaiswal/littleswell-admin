import{a as i,V as v}from"./VTabs-272b6a43.js";import{j as I,y as A,o as c,c as d,n as e,w as t,F as b,a as w,p as m,b as x,Q as s,x as h,H as V,l as o,G as C,W,V as k}from"./main-edf7a918.js";import{a as g,V as y}from"./VWindowItem-3adf7e6c.js";import{a as p,V as P}from"./VRow-95e48620.js";import{_ as z}from"./AppCardCode-363e1240.js";import"./easing-6b01f2d6.js";import"./lazy-21e4bc45.js";import"./transition-a51ab259.js";import"./ssrBoot-b343f022.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./VDivider-1a3d52ac.js";const O={class:"text-center mt-9"},U={__name:"DemoTabsDynamic",setup(_){const a=I(3),u=I(0);return A(a,r=>{u.value=r-1}),(r,n)=>(c(),d(b,null,[e(v,{modelValue:m(u),"onUpdate:modelValue":n[0]||(n[0]=l=>V(u)?u.value=l:null)},{default:t(()=>[(c(!0),d(b,null,w(m(a),l=>(c(),x(i,{key:l,value:l},{default:t(()=>[s(" Tab "+h(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",O,[e(C,{disabled:!m(a),variant:"text",onClick:n[1]||(n[1]=l=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(C,{variant:"text",onClick:n[2]||(n[2]=l=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},R={class:"text-center"},E={__name:"DemoTabsProgrammaticNavigation",setup(_){const a=I(0),u=["Appetizers","Entrees","Deserts","Cocktails"],r="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",n=u.length,l=()=>{a.value!==1&&(a.value-=1)},T=()=>{a.value!==n&&(a.value+=1)};return(D,q)=>(c(),d(b,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":q[0]||(q[0]=f=>V(a)?a.value=f:null),grow:""},{default:t(()=>[(c(!0),d(b,null,w(u.length,f=>(c(),x(i,{key:f,value:f},{default:t(()=>[s(h(u[f-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":q[1]||(q[1]=f=>V(a)?a.value=f:null),class:"mt-5"},{default:t(()=>[(c(!0),d(b,null,w(u.length,f=>(c(),x(g,{key:f,value:f},{default:t(()=>[s(h(r))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",R,[e(C,{variant:"text",disabled:m(a)===1,onClick:l},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(C,{variant:"text",disabled:m(a)===m(n),onClick:T},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},M={__name:"DemoTabsGrow",setup(_){const a=I("Appetizers"),u=["Appetizers","Entrees","Deserts","Cocktails"],r="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";return(n,l)=>(c(),d(b,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":l[0]||(l[0]=T=>V(a)?a.value=T:null),grow:""},{default:t(()=>[(c(),d(b,null,w(u,T=>e(i,{key:T,value:T},{default:t(()=>[s(h(T),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":l[1]||(l[1]=T=>V(a)?a.value=T:null),class:"mt-6"},{default:t(()=>[(c(),d(b,null,w(u,T=>e(g,{key:T,value:T},{default:t(()=>[s(h(r))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},H={};function G(_,a){return c(),x(v,{"fixed-tabs":""},{default:t(()=>[e(i,null,{default:t(()=>[s(" Fixed Tab 1 ")]),_:1}),e(i,null,{default:t(()=>[s(" Fixed Tab 2 ")]),_:1}),e(i,null,{default:t(()=>[s(" Fixed Tab 3 ")]),_:1}),e(i,null,{default:t(()=>[s(" Fixed Tab 4 ")]),_:1})]),_:1})}const L=W(H,[["render",G]]),Q={};function J(_,a){return c(),x(v,{"next-icon":"bx-right-arrow-alt","prev-icon":"bx-left-arrow-alt"},{default:t(()=>[(c(),d(b,null,w(10,u=>e(i,{key:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1024)),64))]),_:1})}const K=W(Q,[["render",J]]),X={};function Y(_,a){return c(),x(v,null,{default:t(()=>[(c(),d(b,null,w(10,u=>e(i,{key:u,value:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1032,["value"])),64))]),_:1})}const Z=W(X,[["render",Y]]),ee={};function te(_,a){return c(),d(b,null,[e(v,null,{default:t(()=>[e(i,null,{default:t(()=>[s("Home")]),_:1}),e(i,null,{default:t(()=>[s("Service")]),_:1}),e(i,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(v,{"align-tabs":"center"},{default:t(()=>[e(i,null,{default:t(()=>[s("Home")]),_:1}),e(i,null,{default:t(()=>[s("Service")]),_:1}),e(i,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(v,{"align-tabs":"end"},{default:t(()=>[e(i,null,{default:t(()=>[s("Home")]),_:1}),e(i,null,{default:t(()=>[s("Service")]),_:1}),e(i,null,{default:t(()=>[s("Account")]),_:1})]),_:1})],64)}const ae=W(ee,[["render",te]]),se=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),ne=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),oe=o("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),le=o("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ie=o("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),ue=o("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),ce={__name:"DemoTabsVerticalPill",setup(_){const a=I(0);return(u,r)=>(c(),x(P,null,{default:t(()=>[e(p,{cols:"12",sm:"4"},{default:t(()=>[e(v,{modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=n=>V(a)?a.value=n:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-user"}),s(" Option 1 ")]),_:1}),e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-lock-alt"}),s(" Option 2 ")]),_:1}),e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-broadcast"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":r[1]||(r[1]=n=>V(a)?a.value=n:null)},{default:t(()=>[e(g,null,{default:t(()=>[se,ne]),_:1}),e(g,null,{default:t(()=>[oe,le]),_:1}),e(g,null,{default:t(()=>[ie,ue]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},re=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),me=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),de=o("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),be=o("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),pe=o("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Ve=o("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),Te={__name:"DemoTabsVertical",setup(_){const a=I(0);return(u,r)=>(c(),x(P,null,{default:t(()=>[e(p,{cols:"12",sm:"4"},{default:t(()=>[e(v,{modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=n=>V(a)?a.value=n:null),direction:"vertical"},{default:t(()=>[e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-user"}),s(" Option 1 ")]),_:1}),e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-lock-alt"}),s(" Option 2 ")]),_:1}),e(i,null,{default:t(()=>[e(k,{start:"",icon:"bx-broadcast"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":r[1]||(r[1]=n=>V(a)?a.value=n:null)},{default:t(()=>[e(g,null,{default:t(()=>[re,me]),_:1}),e(g,null,{default:t(()=>[de,be]),_:1}),e(g,null,{default:t(()=>[pe,Ve]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ve=o("span",null,"Recent",-1),_e=o("span",null,"Favorites",-1),fe=o("span",null,"Nearby",-1),ge={__name:"DemoTabsStacked",setup(_){const a=I("tab-1"),u="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";return(r,n)=>(c(),d(b,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=l=>V(a)?a.value=l:null),grow:"",stacked:""},{default:t(()=>[e(i,{value:"tab-1"},{default:t(()=>[e(k,{icon:"bxs-phone",class:"mb-2"}),ve]),_:1}),e(i,{value:"tab-2"},{default:t(()=>[e(k,{icon:"bx-heart",class:"mb-2"}),_e]),_:1}),e(i,{value:"tab-3"},{default:t(()=>[e(k,{icon:"bxs-user-rectangle",class:"mb-2"}),fe]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=l=>V(a)?a.value=l:null),class:"mt-5"},{default:t(()=>[(c(),d(b,null,w(3,l=>e(g,{key:l,value:`tab-${l}`},{default:t(()=>[s(h(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},we={__name:"DemoTabsBasicPill",setup(_){const a=I(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,n)=>(c(),d(b,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=l=>V(a)?a.value=l:null),class:"v-tabs-pill"},{default:t(()=>[e(i,null,{default:t(()=>[s("Tab One")]),_:1}),e(i,null,{default:t(()=>[s("Tab Two")]),_:1}),e(i,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=l=>V(a)?a.value=l:null),class:"mt-5"},{default:t(()=>[(c(),d(b,null,w(3,l=>e(g,{key:l},{default:t(()=>[s(h(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},he={__name:"DemoTabsBasic",setup(_){const a=I(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,n)=>(c(),d(b,null,[e(v,{modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=l=>V(a)?a.value=l:null)},{default:t(()=>[e(i,null,{default:t(()=>[s("Tab One")]),_:1}),e(i,null,{default:t(()=>[s("Tab Two")]),_:1}),e(i,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=l=>V(a)?a.value=l:null),class:"mt-5"},{default:t(()=>[(c(),d(b,null,w(3,l=>e(g,{key:l},{default:t(()=>[s(h(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},ke={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},Ie={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},xe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},ye={ts:`<template>
  <VTabs
    next-icon="bx-right-arrow-alt"
    prev-icon="bx-left-arrow-alt"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="bx-right-arrow-alt"
    prev-icon="bx-left-arrow-alt"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},qe={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},Ce={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},We={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Pe={ts:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},De={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},je={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="bxs-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="bx-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="bxs-user-rectangle"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="bxs-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="bx-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="bxs-user-rectangle"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Se={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock-alt"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock-alt"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock-alt"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="bx-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-lock-alt"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="bx-broadcast"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},$e=o("p",null,[s("The "),o("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),Be=o("p",null,[s("Use our custom class "),o("code",null,".v-tabs-pill"),s(" along with "),o("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Ne=o("p",null,[s("Using "),o("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Ae=o("p",null,[s("The "),o("code",null,"vertical"),s(" prop allows for "),o("code",null,"v-tab"),s(" components to stack vertically.")],-1),ze=o("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Oe=o("p",null,[s("Use "),o("code",null,"align-tabs"),s(" prop to change the tabs alignment.")],-1),Ue=o("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Re=o("p",null,[o("code",null,"prev-icon"),s(" and "),o("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Ee=o("p",null,[s("The "),o("code",null,"fixed-tabs"),s(" prop forces "),o("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Me=o("p",null,[s("The "),o("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),He=o("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),o("code",null,"v-tabs"),s(" component will react.")],-1),lt={__name:"tabs",setup(_){return(a,u)=>{const r=he,n=z,l=we,T=ge,D=Te,q=ce,f=ae,j=Z,S=K,F=L,$=M,B=E,N=U;return c(),x(P,{class:"match-height"},{default:t(()=>[e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic",code:Ie},{default:t(()=>[$e,e(r)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic Pill",code:xe},{default:t(()=>[Be,e(l)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Stacked",code:je},{default:t(()=>[Ne,e(T)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical",code:Se},{default:t(()=>[Ae,e(D)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical Pill",code:Fe},{default:t(()=>[ze,e(q)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Alignment",code:ke},{default:t(()=>[Oe,e(f)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Pagination",code:Pe},{default:t(()=>[Ue,e(j)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Custom Icons",code:ye},{default:t(()=>[Re,e(S)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(n,{title:"Fixed",code:Ce},{default:t(()=>[Ee,e(F)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(n,{title:"Grow",code:We},{default:t(()=>[Me,e($)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Programmatic Navigation",code:De},{default:t(()=>[e(B)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Dynamic",code:qe},{default:t(()=>[He,e(N)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{lt as default};
