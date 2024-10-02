import{j as r,o as k,b as h,w as l,n as e,Q as w,Y as N,p as a,H as d,l as C,q as W,c as Q,F as X,a as ee,x as le,V as oe,K as te,L as ae,G as F}from"./main-edf7a918.js";import{a as A,b as Y,c as j,V as se}from"./VExpansionPanel-8b43e693.js";import{V as _}from"./VForm-3ec30119.js";import{V as y,a as o}from"./VRow-95e48620.js";import{V as m}from"./VTextField-457ca700.js";import{V as re}from"./VTextarea-9e000d6d.js";import{V as E}from"./VSelect-295f5731.js";import{V as ne}from"./VInput-69f8a183.js";import{V as G,a as T}from"./VRadioGroup-c9851118.js";import{V as Z}from"./VDivider-1a3d52ac.js";import{a as K,V as de}from"./VTabs-272b6a43.js";import{d as J,V as me}from"./VCard-168b6136.js";import{V as ie,a as O}from"./VWindowItem-3adf7e6c.js";import{r as U,e as ue}from"./validators-50c95554.js";import{V as R}from"./VCheckbox-8fbf8b3f.js";import{V as Ve}from"./VAutocomplete-37f46f35.js";import{_ as ce}from"./AppCardCode-363e1240.js";import"./lazy-21e4bc45.js";import"./form-130b39c8.js";import"./forwardRefs-8f7055de.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./easing-6b01f2d6.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";import"./VCounter-4c0bd440.js";import"./VList-c8c5940d.js";import"./VAvatar-a0e54144.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VOverlay-729d98f7.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./VChip-743205b4.js";import"./ssrBoot-b343f022.js";import"./index-61e4df1a.js";import"./filter-83f761c0.js";import"./vue.runtime.esm-bundler-ebda2199.js";const pe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),C("h6",{class:"text-base font-weight-bold"}," Free ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),be=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h5",{class:"text-base font-weight-medium"}," Express "),C("h6",{class:"text-base font-weight-bold"}," $5.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),fe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Overnight "),C("h6",{class:"text-base font-weight-bold"}," $10.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),Ce={class:"me-1"},ve={class:"d-flex gap-4"},we={__name:"DemoFormLayoutCollapsible",setup(g){const c=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],b=r("home"),u=r("standard"),i=r("credit-debit-card"),f=r(0),x=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"bx-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"bx-help-circle"}];return(s,t)=>(k(),h(se,{modelValue:a(f),"onUpdate:modelValue":t[7]||(t[7]=n=>d(f)?f.value=n:null)},{default:l(()=>[e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Address")]),_:1}),e(j,null,{default:l(()=>[e(_,{onSubmit:t[1]||(t[1]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Phone No",type:"number"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(re,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Pincode",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{items:c,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ne,{class:"mb-3"},{default:l(()=>[w(" Address Type ")]),_:1}),e(G,{modelValue:a(b),"onUpdate:modelValue":t[0]||(t[0]=n=>d(b)?b.value=n:null),inline:""},{default:l(()=>[C("div",null,[e(T,{label:"Home (All day delivery)",value:"home"}),e(T,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Options")]),_:1}),e(j,null,{default:l(()=>[e(G,{modelValue:a(u),"onUpdate:modelValue":t[5]||(t[5]=n=>d(u)?u.value=n:null),class:"delivery-options"},{default:l(()=>[C("div",{class:W(["delivery-option d-flex rounded-t",a(u)==="standard"?"active":""]),onClick:t[2]||(t[2]=n=>u.value="standard")},[e(T,{inline:"",value:"standard",class:"mt-n4"}),pe],2),C("div",{class:W(["delivery-option d-flex",a(u)==="express"?"active":""]),onClick:t[3]||(t[3]=n=>u.value="express")},[e(T,{inline:"",class:"mt-n4",value:"express"}),be],2),C("div",{class:W(["delivery-option d-flex rounded-b",a(u)==="overnight"?"active":""]),onClick:t[4]||(t[4]=n=>u.value="overnight")},[e(T,{inline:"",class:"mt-n4",value:"overnight"}),fe],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Payment Method")]),_:1}),e(j,null,{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(_,null,{default:l(()=>[C("div",null,[e(G,{modelValue:a(i),"onUpdate:modelValue":t[6]||(t[6]=n=>d(i)?i.value=n:null),inline:""},{default:l(()=>[C("div",null,[(k(),Q(X,null,ee(x,n=>e(T,{key:n.radioValue,value:n.radioValue},{label:l(()=>[C("span",Ce,le(n.radioLabel),1),e(oe,{size:"18",icon:n.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),te(e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{label:"Card Number",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"Expiry Date"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"CVV Code",type:"number"})]),_:1})]),_:1},512),[[ae,a(i)==="credit-debit-card"]])]),_:1})]),_:1})]),_:1}),e(Z,{class:"my-5"}),C("div",ve,[e(F,null,{default:l(()=>[w("Place Order")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},xe={__name:"DemoFormLayoutFormWithTabs",setup(g){const c=r("personal-info"),b=r(""),u=r(""),i=r(),f=r(""),x=r(),s=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],t=["English","German","French","Spanish","Portuguese","Russian","Korean"],n=r(""),v=r(""),L=r(""),P=r(""),D=r(""),S=r(""),z=r(""),H=r(""),M=r(""),q=r(""),$=r([]),I=r(!1),B=r(!1);return(Ye,V)=>(k(),Q(X,null,[e(de,{modelValue:a(c),"onUpdate:modelValue":V[0]||(V[0]=p=>d(c)?c.value=p:null)},{default:l(()=>[e(K,{value:"personal-info"},{default:l(()=>[w(" Personal Info ")]),_:1}),e(K,{value:"account-details"},{default:l(()=>[w(" Account Details ")]),_:1}),e(K,{value:"social-links"},{default:l(()=>[w(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(me,{flat:""},{default:l(()=>[e(J,null,{default:l(()=>[e(ie,{modelValue:a(c),"onUpdate:modelValue":V[19]||(V[19]=p=>d(c)?c.value=p:null)},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":V[1]||(V[1]=p=>d(b)?b.value=p:null),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":V[2]||(V[2]=p=>d(u)?u.value=p:null),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:a(i),"onUpdate:modelValue":V[3]||(V[3]=p=>d(i)?i.value=p:null),items:s,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:a($),"onUpdate:modelValue":V[4]||(V[4]=p=>d($)?$.value=p:null),items:t,multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":V[5]||(V[5]=p=>d(f)?f.value=p:null),label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(x),"onUpdate:modelValue":V[6]||(V[6]=p=>d(x)?x.value=p:null),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"account-details"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(n),"onUpdate:modelValue":V[7]||(V[7]=p=>d(n)?n.value=p:null),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(v),"onUpdate:modelValue":V[8]||(V[8]=p=>d(v)?v.value=p:null),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(L),"onUpdate:modelValue":V[9]||(V[9]=p=>d(L)?L.value=p:null),label:"Password",type:a(I)?"text":"password","append-inner-icon":a(I)?"bx-show":"bx-hide","onClick:appendInner":V[10]||(V[10]=p=>I.value=!a(I))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(P),"onUpdate:modelValue":V[11]||(V[11]=p=>d(P)?P.value=p:null),label:"Confirm Password",type:a(B)?"text":"password","append-inner-icon":a(B)?"bx-show":"bx-hide","onClick:appendInner":V[12]||(V[12]=p=>B.value=!a(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"social-links"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(D),"onUpdate:modelValue":V[13]||(V[13]=p=>d(D)?D.value=p:null),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(S),"onUpdate:modelValue":V[14]||(V[14]=p=>d(S)?S.value=p:null),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(z),"onUpdate:modelValue":V[15]||(V[15]=p=>d(z)?z.value=p:null),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(H),"onUpdate:modelValue":V[16]||(V[16]=p=>d(H)?H.value=p:null),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(M),"onUpdate:modelValue":V[17]||(V[17]=p=>d(M)?M.value=p:null),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(q),"onUpdate:modelValue":V[18]||(V[18]=p=>d(q)?q.value=p:null),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Z),e(J,{class:"d-flex gap-4"},{default:l(()=>[e(F,null,{default:l(()=>[w("Submit")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})]),_:1})]),_:1})],64))}},ye={__name:"DemoFormLayoutFormValidation",setup(g){const c=r(""),b=r(""),u=["Item 1","Item 2","Item 3","Item 4"],i=r(),f=r(!1),x=r();return(s,t)=>(k(),h(_,{ref_key:"form",ref:x,"lazy-validation":""},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":t[0]||(t[0]=n=>d(c)?c.value=n:null),rules:[a(U)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":t[1]||(t[1]=n=>d(b)?b.value=n:null),rules:[a(ue),a(U)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(E,{modelValue:a(i),"onUpdate:modelValue":t[2]||(t[2]=n=>d(i)?i.value=n:null),items:u,rules:[a(U)],label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":t[3]||(t[3]=n=>d(f)?f.value=n:null),rules:[a(U)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(F,{color:"success",onClick:t[4]||(t[4]=n=>{var v;return(v=a(x))==null?void 0:v.validate()})},{default:l(()=>[w(" Validate ")]),_:1}),e(F,{color:"error",onClick:t[5]||(t[5]=n=>{var v;return(v=a(x))==null?void 0:v.reset()})},{default:l(()=>[w(" Reset Form ")]),_:1}),e(F,{color:"warning",onClick:t[6]||(t[6]=n=>{var v;return(v=a(x))==null?void 0:v.resetValidation()})},{default:l(()=>[w(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},Fe={__name:"DemoFormLayoutFormHint",setup(g){const c=r(""),b=r(""),u=r(),i=r(!1),f=["foo","bar","fizz","buzz"],x=r([]);return(s,t)=>(k(),h(_,{onSubmit:t[5]||(t[5]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":t[0]||(t[0]=n=>d(c)?c.value=n:null),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":t[1]||(t[1]=n=>d(b)?b.value=n:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":t[2]||(t[2]=n=>d(u)?u.value=n:null),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(Ve,{modelValue:a(x),"onUpdate:modelValue":t[3]||(t[3]=n=>d(x)?x.value=n:null),items:f,chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(i),"onUpdate:modelValue":t[4]||(t[4]=n=>d(i)?i.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},_e={__name:"DemoFormLayoutMultipleColumn",setup(g){const c=r(""),b=r(""),u=r(""),i=r(""),f=r(""),x=r(""),s=r(!1);return(t,n)=>(k(),h(_,{onSubmit:n[7]||(n[7]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":n[0]||(n[0]=v=>d(c)?c.value=v:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":n[1]||(n[1]=v=>d(b)?b.value=v:null),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(x),"onUpdate:modelValue":n[2]||(n[2]=v=>d(x)?x.value=v:null),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":n[3]||(n[3]=v=>d(u)?u.value=v:null),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":n[4]||(n[4]=v=>d(i)?i.value=v:null),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":n[5]||(n[5]=v=>d(f)?f.value=v:null),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(s),"onUpdate:modelValue":n[6]||(n[6]=v=>d(s)?s.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},ke={__name:"DemoFormLayoutVerticalFormWithIcons",setup(g){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(x,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>d(c)?c.value=t:null),"prepend-inner-icon":"bx-user",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>d(b)?b.value=t:null),"prepend-inner-icon":"bx-envelope",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>d(u)?u.value=t:null),"prepend-inner-icon":"bx-mobile",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>d(i)?i.value=t:null),"prepend-inner-icon":"bx-lock-alt",label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(F,{type:"submit",class:"me-2"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},ge={__name:"DemoFormLayoutVerticalForm",setup(g){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(x,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>d(c)?c.value=t:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>d(b)?b.value=t:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>d(u)?u.value=t:null),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>d(i)?i.value=t:null),label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},he=C("label",{for:"firstNameHorizontalIcons"},"First Name",-1),Ne=C("label",{for:"emailHorizontalIcons"},"Email",-1),Re=C("label",{for:"mobileHorizontalIcons"},"Mobile",-1),Te=C("label",{for:"passwordHorizontalIcons"},"Password",-1),Le={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(g){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(x,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[he]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstNameHorizontalIcons",modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>d(c)?c.value=t:null),"prepend-inner-icon":"bx-user",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ne]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"emailHorizontalIcons",modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>d(b)?b.value=t:null),"prepend-inner-icon":"bx-envelope",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Re]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobileHorizontalIcons",modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>d(u)?u.value=t:null),type:"number","prepend-inner-icon":"bx-mobile",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Te]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"passwordHorizontalIcons",modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>d(i)?i.value=t:null),"prepend-inner-icon":"bx-lock-alt",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},Pe=C("label",{for:"firstName"},"First Name",-1),Ie=C("label",{for:"email"},"Email",-1),Be=C("label",{for:"mobile"},"Mobile",-1),Ue=C("label",{for:"password"},"Password",-1),Ee={__name:"DemoFormLayoutHorizontalForm",setup(g){const c=r(""),b=r(""),u=r(),i=r(),f=r(!1);return(x,s)=>(k(),h(_,{onSubmit:s[5]||(s[5]=N(()=>{},["prevent"]))},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Pe]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstName",modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=t=>d(c)?c.value=t:null),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ie]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"email",modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=t=>d(b)?b.value=t:null),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Be]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobile",modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=t=>d(u)?u.value=t:null),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ue]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"password",modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=t=>d(i)?i.value=t:null),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1}))}},De={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Se={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ze={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-show' : 'bx-hide'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-show' : 'bx-hide'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-show' : 'bx-hide'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-show' : 'bx-hide'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},He={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Me={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="bx-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="bx-envelope"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="bx-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="bx-lock-alt"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="bx-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="bx-envelope"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="bx-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="bx-lock-alt"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},We={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent>
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="bx-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="bx-envelope"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="bx-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="bx-lock-alt"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent>
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="bx-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="bx-envelope"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="bx-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="bx-lock-alt"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ae=C("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),Ll={__name:"form-layouts",setup(g){return(c,b)=>{const u=Ee,i=ce,f=Le,x=ge,s=ke,t=_e,n=Fe,v=ye,L=xe,P=we;return k(),Q("div",null,[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:He},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:Me},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:$e},{default:l(()=>[e(x)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:We},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:qe},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:De},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:Se},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:ze},{default:l(()=>[e(L)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Ae,e(P)]),_:1})]),_:1})])}}};export{Ll as default};
