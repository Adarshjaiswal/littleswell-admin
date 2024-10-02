import{m as G,u as J,V as K,a as O,g as W}from"./VSliderTrack-730b98a9.js";import{b as X,m as ee,u as le,f as ae,V as te,a as se}from"./VInput-69f8a183.js";import{ag as oe,j as b,aq as ue,A as Y,am as ne,n as a,F as re,Z as ie,o as g,b as S,p as k,H as $,w as i,V as de,l as d,Q as m}from"./main-edf7a918.js";import{_ as ce}from"./AppCardCode-363e1240.js";import{a as x,V as me}from"./VRow-95e48620.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./vue.runtime.esm-bundler-ebda2199.js";import"./VCard-168b6136.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./VDivider-1a3d52ac.js";const w=oe()({name:"VRangeSlider",props:{...X(),...ee(),...G(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,s){let{slots:u}=s;const e=b(),l=b(),R=b();function V(n){if(!e.value||!l.value)return;const r=W(n,e.value.$el,t.direction),f=W(n,l.value.$el,t.direction),v=Math.abs(r),c=Math.abs(f);return v<c||v===c&&r<0?e.value.$el:l.value.$el}const{activeThumbRef:p,hasLabels:C,max:M,min:P,mousePressed:q,onSliderMousedown:H,onSliderTouchstart:Q,position:j,roundValue:Z,trackContainerRef:E}=J({props:t,handleSliderMouseUp:n=>{var r;o.value=p.value===((r=e.value)==null?void 0:r.$el)?[n,o.value[1]]:[o.value[0],n]},handleMouseMove:n=>{var v,c,_,y;const[r,f]=o.value;!t.strict&&r===f&&r!==P.value&&(p.value=n>r?(v=l.value)==null?void 0:v.$el:(c=e.value)==null?void 0:c.$el,(_=p.value)==null||_.focus()),p.value===((y=e.value)==null?void 0:y.$el)?o.value=[Math.min(n,f),f]:o.value=[r,Math.max(r,n)]},getActiveThumb:V}),o=ue(t,"modelValue",void 0,n=>!n||!n.length?[0,0]:n.map(r=>Z(r))),{isFocused:B,focus:I,blur:z}=le(t),L=Y(()=>j(o.value[0])),A=Y(()=>j(o.value[1]));return ne(()=>{const[n,r]=ae(t),f=!!(t.label||u.label||u.prepend);return a(se,ie({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||C.value,"v-slider--focused":B.value,"v-slider--pressed":q.value,"v-slider--disabled":t.disabled}],ref:R},n,{focused:B.value}),{...u,prepend:f?v=>{var c,_;return a(re,null,[((c=u.label)==null?void 0:c.call(u,v))??t.label?a(te,{class:"v-slider__label",text:t.label},null):void 0,(_=u.prepend)==null?void 0:_.call(u,v)])}:void 0,default:v=>{var y,N;let{id:c,messagesId:_}=v;return a("div",{class:"v-slider__container",onMousedown:H,onTouchstartPassive:Q},[a("input",{id:`${c.value}_start`,name:t.name||c.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[0]},null),a("input",{id:`${c.value}_stop`,name:t.name||c.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[1]},null),a(K,{ref:E,start:L.value,stop:A.value},{"tick-label":u["tick-label"]}),a(O,{ref:e,"aria-describedby":_.value,focused:B&&p.value===((y=e.value)==null?void 0:y.$el),modelValue:o.value[0],"onUpdate:modelValue":h=>o.value=[h,o.value[1]],onFocus:h=>{var D,T,U,F;I(),p.value=(D=e.value)==null?void 0:D.$el,o.value[0]===o.value[1]&&o.value[1]===P.value&&h.relatedTarget!==((T=l.value)==null?void 0:T.$el)&&((U=e.value)==null||U.$el.blur(),(F=l.value)==null||F.$el.focus())},onBlur:()=>{z(),p.value=void 0},min:P.value,max:o.value[1],position:L.value},{"thumb-label":u["thumb-label"]}),a(O,{ref:l,"aria-describedby":_.value,focused:B&&p.value===((N=l.value)==null?void 0:N.$el),modelValue:o.value[1],"onUpdate:modelValue":h=>o.value=[o.value[0],h],onFocus:h=>{var D,T,U,F;I(),p.value=(D=l.value)==null?void 0:D.$el,o.value[0]===o.value[1]&&o.value[0]===M.value&&h.relatedTarget!==((T=e.value)==null?void 0:T.$el)&&((U=l.value)==null||U.$el.blur(),(F=e.value)==null||F.$el.focus())},onBlur:()=>{z(),p.value=void 0},min:o.value[0],max:M.value,position:A.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),pe={__name:"DemoRangeSliderVertical",setup(t){const s=b([20,40]);return(u,e)=>(g(),S(w,{modelValue:k(s),"onUpdate:modelValue":e[0]||(e[0]=l=>$(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},ve={__name:"DemoRangeSliderThumbLabel",setup(t){const s=["Winter","Spring","Summer","Fall"],u=["bx-wind","bx-leaf","bxs-hot","bx-water"],e=b([1,2]);return(l,R)=>(g(),S(w,{modelValue:k(e),"onUpdate:modelValue":R[0]||(R[0]=V=>$(e)?e.value=V:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:V})=>[a(de,{icon:u[V]},null,8,["icon"])]),_:1},8,["modelValue"]))}},be={__name:"DemoRangeSliderStep",setup(t){const s=b([20,40]);return(u,e)=>(g(),S(w,{modelValue:k(s),"onUpdate:modelValue":e[0]||(e[0]=l=>$(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderColor",setup(t){const s=b([10,60]);return(u,e)=>(g(),S(w,{modelValue:k(s),"onUpdate:modelValue":e[0]||(e[0]=l=>$(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},Ve={__name:"DemoRangeSliderDisabled",setup(t){const s=b([30,60]);return(u,e)=>(g(),S(w,{modelValue:k(s),"onUpdate:modelValue":e[0]||(e[0]=l=>$(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},fe={__name:"DemoRangeSliderBasic",setup(t){const s=b([10,60]);return(u,e)=>(g(),S(w,{modelValue:k(s),"onUpdate:modelValue":e[0]||(e[0]=l=>$(s)?s.value=l:null)},null,8,["modelValue"]))}},he={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ge={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},Se={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-wind', 'bx-leaf', 'bxs-hot', 'bx-water']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-wind',
  'bx-leaf',
  'bxs-hot',
  'bx-water',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},$e=d("p",null,[m("The "),d("code",null,"v-slider"),m(" component is a better visualization of the number input.")],-1),we=d("p",null,[m("You cannot interact with "),d("code",null,"disabled"),m(" sliders.")],-1),ye=d("p",null,[m("Use "),d("code",null,"color"),m(" prop to the sets the slider color. "),d("code",null,"track-color"),m(" prop to sets the color of slider's unfilled track.")],-1),De=d("p",null,[d("code",null,"v-range-slider"),m(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Te=d("p",null,[m(" Using the "),d("code",null,"tick-labels"),m(" prop along with the "),d("code",null,"thumb-label"),m(" slot, you can create a very customized solution. ")],-1),Ue=d("p",null,[m("You can use the "),d("code",null,"vertical"),m(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),We={__name:"range-slider",setup(t){return(s,u)=>{const e=fe,l=ce,R=Ve,V=_e,p=be,C=ve,M=pe;return g(),S(me,null,{default:i(()=>[a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:he},{default:i(()=>[$e,a(e)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:Se},{default:i(()=>[we,a(R)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:ge},{default:i(()=>[ye,a(V)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:Re},{default:i(()=>[De,a(p)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:xe},{default:i(()=>[Te,a(C)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:ke},{default:i(()=>[Ue,a(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{We as default};
