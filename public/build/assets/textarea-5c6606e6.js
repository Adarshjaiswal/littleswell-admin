import{V as n}from"./VTextarea-9e000d6d.js";import{j as _,o as i,b as u,p as V,H as x,W as m,w as t,n as e,l as o,Q as l}from"./main-edf7a918.js";import{a,V as w}from"./VRow-95e48620.js";import{_ as k}from"./AppCardCode-363e1240.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./easing-6b01f2d6.js";import"./VImg-c738de9a.js";import"./forwardRefs-8f7055de.js";import"./VCounter-4c0bd440.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VDivider-1a3d52ac.js";const z={__name:"DemoTextareaValidation",setup(p){const r=_("Hello!"),d=[c=>c.length<=25||"Max 25 characters"];return(c,s)=>(i(),u(n,{modelValue:V(r),"onUpdate:modelValue":s[0]||(s[0]=h=>x(r)?r.value=h:null),label:"Validation",rules:d,rows:"2"},null,8,["modelValue"]))}},$={__name:"DemoTextareaNoResize",setup(p){const r=_("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(d,c)=>(i(),u(n,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=s=>x(r)?r.value=s:null),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"]))}},j={};function H(p,r){return i(),u(w,null,{default:t(()=>[e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const U=m(j,[["render",H]]),A={};function M(p,r){return i(),u(w,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(n,{label:"prepend-icon",rows:"1","prepend-icon":"bx-comment"})]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(n,{"append-icon":"bx-comment",label:"append-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(n,{"prepend-inner-icon":"bx-comment",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(n,{"append-inner-icon":"bx-comment",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const B=m(A,[["render",M]]),G={__name:"DemoTextareaCounter",setup(p){const r=_("Hello!");return(d,c)=>(i(),u(n,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=s=>x(r)?r.value=s:null),counter:"",label:"Text"},null,8,["modelValue"]))}},F={__name:"DemoTextareaClearable",setup(p){const r=_("This is clearable text.");return(d,c)=>(i(),u(n,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=s=>x(r)?r.value=s:null),clearable:"","clear-icon":"bx-x-circle",label:"Text"},null,8,["modelValue"]))}},N={};function O(p,r){return i(),u(n,{autocomplete:"email",label:"Email"})}const P=m(N,[["render",O]]),S={};function W(p,r){return i(),u(w,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(n,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(n,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const E=m(S,[["render",W]]),I={};function Q(p,r){return i(),u(w,null,{default:t(()=>[e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Default",rows:"2"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const Y=m(I,[["render",Q]]),q={__name:"DemoTextareaAutoGrow",setup(p){const r=_("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(d,c)=>(i(),u(n,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=s=>x(r)?r.value=s:null),label:"Auto Grow","auto-grow":""},null,8,["modelValue"]))}},J={};function K(p,r){return i(),u(n,{label:"Default"})}const L=m(J,[["render",K]]),X={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},Z={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},ee={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},te={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="bx-x-circle"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="bx-x-circle"
    label="Text"
  />
</template>
`},oe={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="bx-comment"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="bx-comment"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="bx-comment"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="bx-comment"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="bx-comment"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="bx-comment"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="bx-comment"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="bx-comment"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},ae={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},re={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},ne={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ie=o("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ue=o("p",null,[l("When using the "),o("code",null,"auto-grow"),l(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),pe=o("p",null,[l("Use "),o("code",null,"filled"),l(", "),o("code",null,"plain"),l(", "),o("code",null,"outlined"),l(", "),o("code",null,"solo"),l(" and "),o("code",null,"underlined"),l(" option of "),o("code",null,"variant"),l(" prop to change the look of file input.")],-1),de=o("p",null,[l("Use "),o("code",null,"disabled"),l(" and "),o("code",null,"readonly"),l(" prop to change the state of textarea.")],-1),me=o("p",null,[l(" The "),o("code",null,"autocomplete"),l(" prop gives you the option to enable the browser to predict user input. ")],-1),_e=o("p",null,[l("You can clear the text from a "),o("code",null,"v-textarea"),l(" by using the "),o("code",null,"clearable"),l(" prop, and customize the icon used with the "),o("code",null,"clearable-icon"),l(" prop.")],-1),Ve=o("p",null,[l(" The "),o("code",null,"counter"),l(" prop informs the user of a character limit for the "),o("code",null,"v-textarea"),l(". ")],-1),xe=o("p",null,[l("The "),o("code",null,"append-icon"),l(", "),o("code",null,"prepend-icon"),l(", "),o("code",null,"append-inner-icon"),l(" and "),o("code",null,"prepend-inner-icon"),l(" props help add context to v-textarea.")],-1),we=o("p",null,[l("The "),o("code",null,"rows"),l(" prop allows you to define how many rows the textarea has, when combined with the "),o("code",null,"row-height"),l(" prop you can further customize your rows by defining their height.")],-1),he=o("p",null,[o("code",null,"v-textarea"),l("'s have the option to remain the same size regardless of their content's size, using the "),o("code",null,"no-resize"),l(" prop.")],-1),be=o("p",null,[l("Use "),o("code",null,"rules"),l(" prop to validate the textarea.")],-1),Ge={__name:"textarea",setup(p){return(r,d)=>{const c=L,s=k,h=q,b=Y,f=E,T=P,C=F,g=G,v=B,R=U,D=$,y=z;return i(),u(w,{class:"match-height"},{default:t(()=>[e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",code:Z},{default:t(()=>[ie,e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Auto Grow",code:X},{default:t(()=>[ue,e(h)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(s,{title:"Variant",code:ce},{default:t(()=>[pe,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"States",code:ne},{default:t(()=>[de,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Browser autocomplete",code:ee},{default:t(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Clearable",code:te},{default:t(()=>[_e,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Counter",code:oe},{default:t(()=>[Ve,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icons",code:le},{default:t(()=>[xe,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Rows",code:re},{default:t(()=>[we,e(R)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"No resize",code:ae},{default:t(()=>[he,e(D)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Validation",code:se},{default:t(()=>[be,e(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ge as default};
