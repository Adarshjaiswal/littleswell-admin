import{ab as $,ae as P,j as o,a2 as C,A as z,o as x,c as g,n as s,w as r,p as n,H as V,Q as R,l as e,F as I,a as Q,K as q,L as B,aH as F,x as h,G as L}from"./main-edf7a918.js";import{V as D}from"./VSnackbar-e7b37846.js";import{a as M,V as O}from"./VRow-95e48620.js";import{V as j,d as U}from"./VCard-168b6136.js";import{V as T}from"./VDivider-1a3d52ac.js";import{V as H}from"./VSpacer-cd3d7120.js";import{V as G}from"./VTextField-457ca700.js";import{V as K}from"./VTable-9e2d2e89.js";import{V as J}from"./VSelect-295f5731.js";import{V as W}from"./VPagination-efdd592b.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./easing-6b01f2d6.js";import"./transition-a51ab259.js";import"./forwardRefs-8f7055de.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./VCounter-4c0bd440.js";import"./VList-c8c5940d.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./VChip-743205b4.js";const X=$("useAcc",{actions:{fetchRequests(y,m,i){return new Promise((l,d)=>{P.get(`/api/web/account/deactivation-requests/${m}/?page=${y}`,{params:i}).then(c=>l(c)).catch(c=>d(c))})},toggleStatus(y){return new Promise((m,i)=>{P.put(`/api/web/account/change-status/${y}`).then(l=>m(l)).catch(l=>i(l))})}}});const Y={class:"app-user-search-filter d-flex align-center"},Z=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"48px"}}," SR. NO. "),e("th",{scope:"col"}," EMP ID "),e("th",{scope:"col"}," USER NAME "),e("th",{scope:"col"}," CURRENT STATUS "),e("th",{scope:"col"}," REQUEST DATE TIME "),e("th",{scope:"col"}," ACTIONS ")])],-1),ee={class:"text-capitalize text-base"},te={class:"text-capitalize text-base"},ae={class:"text-capitalize text-base"},se={class:"text-capitalize text-base"},le={class:"text-capitalize text-base"},oe={class:"text-center",style:{width:"80px"}},ne=e("span",null,"  ",-1),re={key:0,colspan:"11",class:"text-center text-body-1"},ie={key:1,colspan:"11",class:"text-center text-body-1"},ce={class:"d-flex align-center",style:{width:"171px"}},ue=e("span",{class:"text-no-wrap text-sm me-3"},"Rows per page:",-1),de={class:"d-flex align-center"},pe={class:"text-sm text-no-wrap me-3"},me={class:"d-flex align-center"},Le={__name:"index",setup(y){const m=X(),i=o(""),l=o(10),d=o(1),c=o(1),A=o(0),w=o([]),p=o(!1),v=o(!1),_=o(d.value);let S=o(!1);const k=u=>{const a={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(u).toLocaleString("en-US",a)},E=(u,a)=>{S.value=!0;const t=u.toString(),b={searchQuery:i.value};m.fetchRequests(t,a,b).then(f=>{w.value=f.data.requests_data.data,c.value=f.data.requests_data.last_page,A.value=f.data.requests_data.total,f.status===200?v.value=!0:p.value=!0}).catch(f=>{p.value=!0}).finally(()=>S.value=!1)};C(()=>{E(_.value,l.value)}),C(()=>{d.value>c.value&&(d.value=c.value)}),z(()=>{const u=roles.value.length?(d.value-1)*l.value+1:0,a=roles.value.length+(d.value-1)*l.value;return`${u}-${a} of ${totalroles.value}`});const N=async u=>{if(confirm("Are you sure you want to Change the status ?"))try{(await m.toggleStatus(u)).status===200?(v.value=!0,E(_.value,l.value)):p.value=!0}catch{p.value=!0}};return(u,a)=>(x(),g("section",null,[s(O,null,{default:r(()=>[s(D,{modelValue:n(p),"onUpdate:modelValue":a[0]||(a[0]=t=>V(p)?p.value=t:null),location:"top end",variant:"flat",color:"error"},{default:r(()=>[R(" Some Error Occured :( ")]),_:1},8,["modelValue"]),s(D,{modelValue:n(v),"onUpdate:modelValue":a[1]||(a[1]=t=>V(v)?v.value=t:null),location:"top end",variant:"flat",color:"success"},{default:r(()=>[R(" Request Sucessful :) ")]),_:1},8,["modelValue"]),s(M,{cols:"12"},{default:r(()=>[s(j,{title:"All Account Deactivation Requests"},{default:r(()=>[s(T),s(U,{class:"d-flex flex-wrap gap-4"},{default:r(()=>[s(H),e("div",Y,[s(G,{modelValue:n(i),"onUpdate:modelValue":a[2]||(a[2]=t=>V(i)?i.value=t:null),placeholder:"Search For user ",density:"compact",class:"me-3"},null,8,["modelValue"])])]),_:1}),s(T),s(K,{class:"text-no-wrap",height:"27rem","fixed-header":""},{default:r(()=>[Z,e("tbody",null,[(x(!0),g(I,null,Q(n(w),(t,b)=>(x(),g("tr",{key:t.id},[e("td",null,[e("span",ee,h(b+1),1)]),e("td",null,[e("span",te,h(t.emp_id?t.emp_id:`TEMP/${t.user_id}`),1)]),e("td",null,[e("span",ae,h(t.user_name),1)]),e("td",null,[e("span",se,h(t.status?"Deactive":"Active"),1)]),e("td",null,[e("span",le,h(k(t.created_at)),1)]),e("td",oe,[ne,s(L,{variant:"outlined",onClick:f=>N(t.id),color:"primary","prepend-icon":"bx-recycle"},{default:r(()=>[R(" change status ")]),_:2},1032,["onClick"])])]))),128))]),q(e("tfoot",null,[e("tr",null,[n(S)?(x(),g("td",re,[s(F,{size:60,color:"primary",indeterminate:"",class:"my-5"})])):(x(),g("td",ie," No data available "))])],512),[[B,!n(w).length]])]),_:1}),s(T),s(U,{class:"d-flex flex-wrap justify-end gap-4 pa-2"},{default:r(()=>[e("div",ce,[ue,s(J,{modelValue:n(l),"onUpdate:modelValue":a[3]||(a[3]=t=>V(l)?l.value=t:null),density:"compact",class:"per-page-select",variant:"plain",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",de,[e("span",pe,"Total Data: "+h(n(A)),1)]),e("div",me,[s(W,{modelValue:n(_),"onUpdate:modelValue":a[4]||(a[4]=t=>V(_)?_.value=t:null),length:n(c),color:"primary","prev-icon":"mdi-chevron-left","next-icon":"mdi-chevron-right","first-icon":"mdi-chevron-double-left","last-icon":"mdi-chevron-double-right"},null,8,["modelValue","length"])])]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{Le as default};
