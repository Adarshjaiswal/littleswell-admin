import{_ as g}from"./TwoFactorAuthDialog-6e3f56e7.js";import{a as T,V as x}from"./VRow-95e48620.js";import{V as D}from"./VCard-168b6136.js";import{V as S}from"./VDivider-1a3d52ac.js";import{V as b}from"./VTable-9e2d2e89.js";import{j as r,o as c,c as l,n as o,w as a,l as t,F as d,a as w,p,H as A,x as s}from"./main-edf7a918.js";import"./DialogCloseBtn-58b7d3d9.js";import"./VForm-3ec30119.js";import"./form-130b39c8.js";import"./forwardRefs-8f7055de.js";import"./VTextField-457ca700.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./transition-a51ab259.js";import"./easing-6b01f2d6.js";import"./VImg-c738de9a.js";import"./VCounter-4c0bd440.js";import"./VDialog-c8000d93.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./dialog-transition-9ffc684e.js";import"./VList-c8c5940d.js";import"./VAvatar-a0e54144.js";const C=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ID "),t("th",{scope:"col"}," STATUS "),t("th",{scope:"col"}," TRANSACTION ID "),t("th",{scope:"col"}," MESSAGE "),t("th",{scope:"col"}," RECENT ACTIVITY ")])],-1),I={class:"text-medium-emphasis"},N={class:"text-medium-emphasis"},E={class:"text-medium-emphasis"},R={class:"text-medium-emphasis"},y={class:"text-medium-emphasis"},ot={__name:"UserTabSecurity",props:{userPayment:{type:Object,required:!0}},setup(u){const _=u;r(!1),r(!1);const h=r("+1(968) 819-2547"),m=r(!1),f=n=>{const i={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(n).toLocaleString("en-US",i)};return(n,i)=>{const V=g;return c(),l(d,null,[o(x,null,{default:a(()=>[o(T,{cols:"12"},{default:a(()=>[o(D,{title:"Recent devices"},{default:a(()=>[o(S),o(b,{class:"text-no-wrap",height:"27rem","fixed-header":""},{default:a(()=>[C,t("tbody",null,[(c(!0),l(d,null,w(_.userPayment,e=>(c(),l("tr",{key:e.id},[t("td",I,s(e.id),1),t("td",N,s(e.code),1),t("td",E,s(e.merchantTransactionId),1),t("td",R,s(e.message),1),t("td",y,s(f(e.created_at)),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),o(V,{isDialogVisible:p(m),"onUpdate:isDialogVisible":i[0]||(i[0]=e=>A(m)?m.value=e:null),"sms-code":p(h)},null,8,["isDialogVisible","sms-code"])],64)}}};export{ot as default};
