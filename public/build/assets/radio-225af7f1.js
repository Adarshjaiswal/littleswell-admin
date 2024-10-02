import{a as s,V as p}from"./VRadioGroup-c9851118.js";import{j as m,o as u,b,w as t,c as _,F as f,a as G,n as o,p as c,H as R,l,Q as i}from"./main-edf7a918.js";import{V as y}from"./VDivider-1a3d52ac.js";import{_ as h}from"./AppCardCode-363e1240.js";import{a as V,V as $}from"./VRow-95e48620.js";import"./VSelectionControl-e31052c4.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";const L={__name:"DemoRadioValidation",setup(v){const a=m(1),r=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null),inline:"",rules:r},{default:t(()=>[(u(),_(f,null,G(3,n=>o(s,{key:n,error:c(a)===3,label:`Radio ${n}`,value:n},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}},w={__name:"DemoRadioIcon",setup(v){const a=m(1);return(r,d)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null),"false-icon":"bx-bell-off","true-icon":"bx-bell"},{default:t(()=>[(u(),_(f,null,G(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}},C=l("div",null,[i("Your favorite "),l("strong",null,"search engine")],-1),U=l("div",null,[i("Of course it's "),l("strong",{class:"text-success"},"Google")],-1),S=l("div",null,[i("Definitely "),l("strong",{class:"text-primary"},"Duckduckgo")],-1),j={__name:"DemoRadioLabelSlot",setup(v){const a=m("Duckduckgo");return(r,d)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{label:t(()=>[C]),default:t(()=>[o(s,{value:"Google"},{label:t(()=>[U]),_:1}),o(s,{value:"Duckduckgo"},{label:t(()=>[S]),_:1})]),_:1},8,["modelValue"]))}},I={__name:"DemoRadioDensity",setup(v){const a=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),_(f,null,[o(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(y,{class:"my-3"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}},B={__name:"DemoRadioInline",setup(v){const a=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),_(f,null,[o(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(y,{class:"my-4"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},E={__name:"DemoRadioColors",setup(v){const a=m("primary"),r=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null),inline:""},{default:t(()=>[(u(),_(f,null,G(r,n=>o(s,{key:n,label:n,color:n.toLocaleLowerCase(),value:n.toLocaleLowerCase()},null,8,["label","color","value"])),64))]),_:1},8,["modelValue"]))}},A={class:""},F={__name:"DemoRadioBasic",setup(v){const a=m(1);return(r,d)=>(u(),_("div",A,[o(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{default:t(()=>[(u(),_(f,null,G(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}},N={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},P={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="bx-bell-off"
    true-icon="bx-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="bx-bell-off"
    true-icon="bx-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},H={ts:`<script lang="ts" setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},M={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},Q=l("p",null,[i("The "),l("code",null,"v-radio"),i(" component is a simple radio button.")],-1),q=l("p",null,[i("Radios can be colored by using any of the built-in colors and contextual names using the "),l("code",null,"color"),i(" prop.")],-1),z=l("p",null,[i("Use "),l("code",null,"inline"),i(" prop to displays radio buttons in row.")],-1),J=l("p",null,[i("Use "),l("code",null,"density"),i(" prop to adjusts the spacing within the component. Available options are: "),l("code",null,"default"),i(", "),l("code",null,"comfortable"),i(", and "),l("code",null,"compact"),i(".")],-1),K=l("p",null,[i("Radio Group labels can be defined in "),l("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),X=l("p",null,[i("Use "),l("code",null,"false-icon"),i(" and "),l("code",null,"true-icon"),i(" prop to set icon on inactive and active state.")],-1),Z=l("p",null,[i("Use "),l("code",null,"rules"),i(" prop to validate a radio. Accepts a mixed array of types "),l("code",null,"function"),i(", "),l("code",null,"boolean"),i(" and "),l("code",null,"string"),i(". Functions pass an input value as an argument and must return either "),l("code",null,"true"),i(" / "),l("code",null,"false"),i(" or a string containing an error message.")],-1),Ro={__name:"radio",setup(v){return(a,r)=>{const d=F,e=h,n=E,g=B,D=I,k=j,O=w,x=L;return u(),b($,{class:"match-height"},{default:t(()=>[o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Basic",code:N},{default:t(()=>[Q,o(d)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Colors",code:P},{default:t(()=>[q,o(n)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Inline",code:Y},{default:t(()=>[z,o(g)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Density",code:T},{default:t(()=>[J,o(D)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Label Slot",code:H},{default:t(()=>[K,o(k)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Icon",code:W},{default:t(()=>[X,o(O)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Validation",code:M},{default:t(()=>[Z,o(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ro as default};
