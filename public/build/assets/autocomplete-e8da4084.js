import{V as u}from"./VAutocomplete-37f46f35.js";import{j as _,o as h,b as f,p,H as b,w as t,n as e,dH as M,V as N,y as T,Z as V,b$ as I,c0 as D,a1 as F,$ as W,a0 as G,c1 as L,c2 as R,c3 as H,l as i,Q as l}from"./main-edf7a918.js";import{V as E}from"./VChip-743205b4.js";import{a as O}from"./VList-c8c5940d.js";import{V as q}from"./VAvatar-a0e54144.js";import{a as c,V as A}from"./VRow-95e48620.js";import{_ as z}from"./AppCardCode-363e1240.js";import"./VSelect-295f5731.js";import"./VTextField-457ca700.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./easing-6b01f2d6.js";import"./VImg-c738de9a.js";import"./forwardRefs-8f7055de.js";import"./VCounter-4c0bd440.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./filter-83f761c0.js";import"./VDivider-1a3d52ac.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";const $={__name:"DemoAutocompleteValidation",setup(g){const a=["foo","bar","fizz","buzz"],s=_(["foo"]),m=[o=>!!o.length||"Select at least one option."];return(o,n)=>(h(),f(u,{modelValue:p(s),"onUpdate:modelValue":n[0]||(n[0]=r=>b(s)?s.value=r:null),items:a,rules:m,multiple:""},null,8,["modelValue"]))}},P={__name:"DemoAutocompleteStateSelector",setup(g){const a=_(!1),s=_(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,n)=>(h(),f(u,{modelValue:p(s),"onUpdate:modelValue":n[1]||(n[1]=r=>b(s)?s.value=r:null),hint:p(a)?"Click the icon to save":"Click the icon to edit",items:m,readonly:!p(a),label:`State — ${p(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"bxs-city","menu-props":{maxHeight:"200px"}},{append:t(()=>[e(M,{mode:"out-in"},{default:t(()=>[(h(),f(N,{key:`icon-${p(a)}`,color:p(a)?"success":"info",icon:p(a)?"bx-check":"bx-edit",onClick:n[0]||(n[0]=r=>a.value=!p(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"]))}},U={__name:"DemoAutocompleteAsyncItems",setup(g){const a=_(!1),s=_(),m=_(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],n=_(o),r=v=>{a.value=!0,setTimeout(()=>{n.value=o.filter(d=>(d||"").toLowerCase().includes((v||"").toLowerCase())),a.value=!1},500)};return T(s,v=>{v&&v!==m.value&&r(v)}),(v,d)=>(h(),f(u,{modelValue:p(m),"onUpdate:modelValue":d[0]||(d[0]=C=>b(m)?m.value=C:null),search:p(s),"onUpdate:search":d[1]||(d[1]=C=>b(s)?s.value=C:null),loading:p(a),items:p(n),label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},j={__name:"DemoAutocompleteSlots",setup(g){const a=_(["Sandra Adams","Britta Holt"]),s=[{name:"Sandra Adams",avatar:I},{name:"Ali Connors",avatar:D},{name:"Trevor Hansen",avatar:F},{name:"Tucker Smith",avatar:W},{name:"Britta Holt",avatar:G},{name:"Jane Smith ",avatar:L},{name:"John Smith",avatar:R},{name:"Sandra Williams",avatar:H}];return(m,o)=>(h(),f(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>b(a)?a.value=n:null),chips:"","closable-chips":"",multiple:"",items:s,"item-title":"name","item-value":"name",label:"Select"},{chip:t(({props:n,item:r})=>[e(E,V(n,{"prepend-avatar":r.raw.avatar,text:r.raw.name}),null,16,["prepend-avatar","text"])]),item:t(({props:n,item:r})=>{var v;return[e(O,V(n,{title:(v=r==null?void 0:r.raw)==null?void 0:v.name}),{prepend:t(()=>{var d;return[e(q,{size:"30",image:(d=r==null?void 0:r.raw)==null?void 0:d.avatar},null,8,["image"])]}),_:2},1040,["title"])]}),_:1},8,["modelValue"]))}},Y={__name:"DemoAutocompleteCustomFilter",setup(g){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function s(m,o,n){const r=n.title.toLowerCase(),v=n.value.toLowerCase(),d=o.toLocaleLowerCase();return r.includes(d)||v.includes(d)}return(m,o)=>(h(),f(u,{label:"States",items:a,"custom-filter":s,"item-title":"name","item-value":"abbr"}))}},B={__name:"DemoAutocompleteChips",setup(g){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,chips:"",multiple:""}))}},J={__name:"DemoAutocompleteClearable",setup(g){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,multiple:"",clearable:""}))}},K={__name:"DemoAutocompleteMultiple",setup(g){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a,multiple:""}))}},X={__name:"DemoAutocompleteVariant",setup(g){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(A,null,{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"solo",label:"solo",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"outlined",label:"outlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"underlined",label:"underlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"filled",label:"filled",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"plain",label:"plain",items:a})]),_:1})]),_:1}))}},Q={__name:"DemoAutocompleteDensity",setup(g){const a=_(["Florida"]),s=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,o)=>(h(),f(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>b(a)?a.value=n:null),label:"States",density:"compact",items:s},null,8,["modelValue"]))}},Z={__name:"DemoAutocompleteBasic",setup(g){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(h(),f(u,{label:"States",items:a}))}},ee={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`},ie={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(item: string, queryText: string, itemText: any) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`},se={ts:`<script setup lang="ts">
const select = ref(['Florida'])
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref(['Florida'])

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`},le={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`},ne={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
  { name: 'Jane Smith ', avatar: avatar6 },
  { name: 'John Smith', avatar: avatar7 },
  { name: 'Sandra Williams', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :title="item?.raw?.name"
      >
        <template #prepend>
          <VAvatar
            size="30"
            :image="item?.raw?.avatar"
          />
        </template>
      </VListItem>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :title="item?.raw?.name"
      >
        <template #prepend>
          <VAvatar
            size="30"
            :image="item?.raw?.avatar"
          />
        </template>
      </VListItem>
    </template>
  </VAutocomplete>
</template>
`},re={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bxs-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bxs-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`},me={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`},ce={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},pe=i("p",null,[l(" The "),i("code",null," v-autocomplete "),l(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),ue=i("p",null,[l(" You can use "),i("code",null," density "),l(" prop to adjusts vertical spacing within the component. Available options are: "),i("code",null,"default"),l(", "),i("code",null,"comfortable"),l(", and "),i("code",null,"compact"),l(". ")],-1),de=i("p",null,[l("Use "),i("code",null,"solo"),l(", "),i("code",null,"outlined"),l(", "),i("code",null,"underlined"),l(", "),i("code",null,"filled"),l(" and "),i("code",null,"plain"),l(" options of "),i("code",null,"variant"),l(" prop to change the look of Autocomplete. ")],-1),ve=i("p",null,[l("Use "),i("code",null,"multiple"),l(" prop to select multiple. Accepts array for value")],-1),he=i("p",null,[l("Use "),i("code",null,"clearable"),l(" prop to add input clear functionality.")],-1),fe=i("p",null,[l("Use "),i("code",null," chips "),l(" prop to use chips in select.")],-1),ge=i("p",null,[l("The "),i("code",null," custom-filter "),l(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),_e=i("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),be=i("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),Ce=i("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),Ve=i("p",null,[l("Use "),i("code",null,"rules"),l(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Ke={__name:"autocomplete",setup(g){return(a,s)=>{const m=Z,o=z,n=Q,r=X,v=K,d=J,C=B,y=Y,x=j,S=U,w=P,k=$;return h(),f(A,{class:"match-height"},{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:ae},{default:t(()=>[pe,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:se},{default:t(()=>[ue,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"12"},{default:t(()=>[e(o,{title:"Variant",code:ce},{default:t(()=>[de,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:le},{default:t(()=>[ve,e(v)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Clearable",code:oe},{default:t(()=>[he,e(d)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:te},{default:t(()=>[fe,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom-Filter",code:ie},{default:t(()=>[ge,e(y)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Slots",code:ne},{default:t(()=>[_e,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Async items",code:ee},{default:t(()=>[be,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"State Selector",code:re},{default:t(()=>[Ce,e(w)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"validation",code:me},{default:t(()=>[Ve,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ke as default};
