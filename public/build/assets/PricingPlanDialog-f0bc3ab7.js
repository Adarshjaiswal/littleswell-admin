import{_ as m}from"./AppPricing-a8d3a0af.js";import{_ as c}from"./DialogCloseBtn-58b7d3d9.js";import{V as _,d}from"./VCard-168b6136.js";import{V as u}from"./VDialog-c8000d93.js";import{o as g,b as V,w as a,n as i}from"./main-edf7a918.js";const B={__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(s,{emit:o}){const t=s,n=e=>{o("update:isDialogVisible",e)};return(e,l)=>{const r=c,p=m;return g(),V(u,{"model-value":t.isDialogVisible,class:"v-dialog-xl","onUpdate:modelValue":n},{default:a(()=>[i(_,{class:"pricing-dialog pa-5 pa-sm-8"},{default:a(()=>[i(r,{variant:"text",size:"small",onClick:l[0]||(l[0]=f=>o("update:isDialogVisible",!1))}),i(d,null,{default:a(()=>[i(p,{title:"Subscription Plan",lg:"4"})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{B as _};
