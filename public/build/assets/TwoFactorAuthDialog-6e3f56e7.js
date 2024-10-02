import{_ as y}from"./DialogCloseBtn-58b7d3d9.js";import{j as g,b8 as _,o as v,b as B,w as t,n as e,Y as M,p as c,H as h,l as b,G as V,Q as m,V as D,c as w,q as S,F as k,a as E,x as $}from"./main-edf7a918.js";import{V as C,d as x,a as N,b as q,e as P}from"./VCard-168b6136.js";import{V as T}from"./VForm-3ec30119.js";import{V as U}from"./VTextField-457ca700.js";import{V as A}from"./VDialog-c8000d93.js";import{V as G}from"./VImg-c738de9a.js";import{V as L,a as j,b as Q}from"./VList-c8c5940d.js";const R={class:"d-flex flex-wrap justify-end gap-3"},Y={__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{type:String,required:!1},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(f,{emit:u}){const i=f,a=g(structuredClone(_(i.mobileNumber))),r=()=>{a.value&&(u("submit",a.value),u("update:isDialogVisible",!1))},n=()=>{a.value=structuredClone(_(i.mobileNumber)),u("update:isDialogVisible",!1)};return(d,o)=>{const p=y;return v(),B(A,{"max-width":"600","model-value":i.isDialogVisible,"onUpdate:modelValue":o[2]||(o[2]=l=>d.$emit("update:isDialogVisible",l))},{default:t(()=>[e(C,{title:"Verify Your Mobile Number for SMS",subtitle:"Enter your mobile phone number with country code and  we will send you a verification code.",class:"pa-5 pa-sm-8"},{default:t(()=>[e(p,{variant:"text",size:"small",onClick:n}),e(x,null,{default:t(()=>[e(T,{onSubmit:o[1]||(o[1]=M(()=>{},["prevent"]))},{default:t(()=>[e(U,{modelValue:c(a),"onUpdate:modelValue":o[0]||(o[0]=l=>h(a)?a.value=l:null),name:"mobile",label:"Phone Number",type:"number",class:"mb-4"},null,8,["modelValue"]),b("div",R,[e(V,{color:"secondary",variant:"tonal",onClick:n},{default:t(()=>[m(" Cancel ")]),_:1}),e(V,{type:"submit",onClick:r},{default:t(()=>[m(" continue "),e(D,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},O="/build/assets/themeselection-qr-05c27a74.png",H=b("h6",{class:"text-h6 font-weight-medium mb-3"}," Authenticator Apps ",-1),W=b("p",{class:"mb-6"}," Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. ",-1),J={class:"my-6"},K={class:"d-flex justify-end flex-wrap gap-3"},X={__name:"AddAuthenticatorAppDialog",props:{authCode:{type:String,required:!1},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(f,{emit:u}){const i=f,a=g(structuredClone(_(i.authCode))),r=()=>{a.value&&(u("submit",a.value),u("update:isDialogVisible",!1))},n=()=>{a.value=structuredClone(_(i.authCode)),u("update:isDialogVisible",!1)};return(d,o)=>{const p=y;return v(),B(A,{"max-width":"600","model-value":i.isDialogVisible,"onUpdate:modelValue":o[2]||(o[2]=l=>d.$emit("update:isDialogVisible",l))},{default:t(()=>[e(C,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(p,{variant:"text",size:"small",onClick:n}),e(N,null,{default:t(()=>[e(q,{class:"text-h5 font-weight-medium text-center"},{default:t(()=>[m(" Add Authenticator App ")]),_:1})]),_:1}),e(x,{class:"pt-6"},{default:t(()=>[H,W,b("div",J,[e(G,{width:"122",src:c(O),class:"mx-auto"},null,8,["src"])]),e(T,{onSubmit:o[1]||(o[1]=M(()=>{},["prevent"]))},{default:t(()=>[e(U,{modelValue:c(a),"onUpdate:modelValue":o[0]||(o[0]=l=>h(a)?a.value=l:null),name:"auth-code",label:"Enter Authentication Code",class:"mb-4"},null,8,["modelValue"]),b("div",K,[e(V,{color:"secondary",variant:"tonal",onClick:n},{default:t(()=>[m(" Cancel ")]),_:1}),e(V,{type:"submit",onClick:r},{default:t(()=>[m(" Continue "),e(D,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};const Z={class:"text-base mb-0"},ee={class:"text-end"},re={__name:"TwoFactorAuthDialog",props:{isDialogVisible:{type:Boolean,required:!0,default:!1},smsCode:{type:String,required:!1,default:""},authAppCode:{type:String,required:!1,default:""}},emits:["update:isDialogVisible"],setup(f,{emit:u}){const i=f,a=[{icon:"bx-cog",title:"Authenticator Apps",subtitle:"Get code from an app like Google Authenticator or Microsoft Authenticator.",method:"authApp"},{icon:"bx-message",title:"SMS",subtitle:"We will send a code via SMS if you need to use your backup login method.",method:"sms"}],r=g(["authApp"]),n=g(!1),d=g(!1),o=()=>{r.value[0]==="authApp"&&(n.value=!0,d.value=!1,u("update:isDialogVisible",!1)),r.value[0]==="sms"&&(n.value=!1,d.value=!0,u("update:isDialogVisible",!1))};return(p,l)=>{const F=y,I=X,z=Y;return v(),w(k,null,[e(A,{"max-width":"900","model-value":i.isDialogVisible,"onUpdate:modelValue":l[2]||(l[2]=s=>p.$emit("update:isDialogVisible",s))},{default:t(()=>[e(C,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(F,{variant:"text",size:"small",onClick:l[0]||(l[0]=s=>p.$emit("update:isDialogVisible",!1))}),e(N,{class:"text-center"},{default:t(()=>[e(q,{class:"text-h5 mb-2"},{default:t(()=>[m(" Select Authentication Method ")]),_:1}),e(P,null,{default:t(()=>[m(" You also need to select a method by which the proxy authenticates to the directory serve. ")]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(L,{selected:c(r),"onUpdate:selected":l[1]||(l[1]=s=>h(r)?r.value=s:null),mandatory:"",class:S(["card-list auth-method-card",p.$vuetify.display.xs?"responsive-card":""])},{default:t(()=>[(v(),w(k,null,E(a,s=>e(j,{key:s.title,rounded:"",border:"",value:s.method,class:S(["py-5 px-6 my-6",c(r)[0]===s.method?"bg-light-primary border-primary border-opacity-100":"bg-var-theme-background"])},{prepend:t(()=>[e(D,{icon:s.icon,size:"38",class:"me-4"},null,8,["icon"])]),default:t(()=>[e(Q,{class:"text-xl font-weight-medium mb-1"},{default:t(()=>[m($(s.title),1)]),_:2},1024),b("p",Z,$(s.subtitle),1)]),_:2},1032,["value","class"])),64))]),_:1},8,["selected","class"]),b("div",ee,[e(V,{onClick:o},{default:t(()=>[m(" continue "),e(D,{end:"",icon:"bx-chevron-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"]),e(I,{isDialogVisible:c(n),"onUpdate:isDialogVisible":l[3]||(l[3]=s=>h(n)?n.value=s:null),"auth-code":i.authAppCode},null,8,["isDialogVisible","auth-code"]),e(z,{isDialogVisible:c(d),"onUpdate:isDialogVisible":l[4]||(l[4]=s=>h(d)?d.value=s:null),"mobile-number":i.smsCode},null,8,["isDialogVisible","mobile-number"])],64)}}};export{re as _};
