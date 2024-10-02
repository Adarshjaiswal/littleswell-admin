import{_ as X}from"./DialogCloseBtn-58b7d3d9.js";import{j as r,a2 as N,A as Z,y as ee,o as h,c as U,n as a,w as s,p as n,b as te,Q as d,H as c,D as ae,G as P,l as t,F as le,a as se,K as oe,L as re,aH as ne,x as i,ae as ie,r as de}from"./main-edf7a918.js";import ce from"./userDrawer-57b979f0.js";import{u as ue}from"./useUserListStore-42ed9a30.js";import{V as R}from"./VSnackbar-e7b37846.js";import{a as O,V as $}from"./VRow-95e48620.js";import{V as B,d as w}from"./VCard-168b6136.js";import{V as pe}from"./VDialog-c8000d93.js";import{V as M}from"./VTextField-457ca700.js";import{V as I}from"./VDivider-1a3d52ac.js";import{V as me}from"./VSpacer-cd3d7120.js";import{V as fe}from"./VTable-9e2d2e89.js";import{V as _e}from"./VSelect-295f5731.js";import{V as ve}from"./VPagination-efdd592b.js";import{V as T}from"./VChip-743205b4.js";import"./AppDrawerHeaderSection-db9e3bc1.js";import"./validators-50c95554.js";import"./index-61e4df1a.js";import"./VForm-3ec30119.js";import"./form-130b39c8.js";import"./forwardRefs-8f7055de.js";import"./VNavigationDrawer-01c3b33a.js";import"./ssrBoot-b343f022.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./easing-6b01f2d6.js";import"./VCounter-4c0bd440.js";import"./VList-c8c5940d.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";const he={class:"app-user-search-filter d-flex align-center"},Ve=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ACTION "),t("th",{scope:"col"}," SR. NO. "),t("th",{scope:"col"}," User ID "),t("th",{scope:"col"}," NAME "),t("th",{scope:"col"}," AADHAR NUMBER "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," PHONE NUMBER "),t("th",{scope:"col"}," IS PHONE VERIFIED "),t("th",{scope:"col"}," PAYMENT STATUS "),t("th",{scope:"col"}," AADHAR VERIFICATION "),t("th",{scope:"col"}," CREATED AT ")])],-1),xe={class:"text-center",style:{"inline-size":"80px"}},ge={class:"text-capitalize text-base"},ye={class:"text-capitalize text-base"},Ue={class:"text-capitalize text-high-emphasis"},we={class:"text-capitalize text-base"},be={class:"text-capitalize text-high-emphasis"},De={class:"text-base"},Ae={class:"text-high-emphasis"},Se={class:"text-base"},Ce={class:"text-capitalize text-high-emphasis"},Ee={class:"text-base"},ke={class:"text-center"},Ne={class:"text-center text-high-emphasis"},Pe={key:0,colspan:"11",class:"text-center text-body-1"},Re={key:1,colspan:"11",class:"text-center text-body-1"},Ie={class:"d-flex align-center",style:{"inline-size":"171px"}},Te=t("span",{class:"text-no-wrap text-sm me-3"},"Rows per page:",-1),ze={class:"d-flex align-center"},Le={class:"text-sm text-no-wrap me-3"},Oe={class:"d-flex align-center"},Dt={__name:"index",setup($e){const F=ue(),b=r(""),_=r(10),p=r(1),v=r(1),z=r(1),A=r(0),V=r([]);let x=r(!1);const m=r(!1),g=r(!1),D=r(p.value);r();let S=r(!1);const f=r(!1);r(!1);const y=r(""),C=r(null),H=o=>{const l={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(o).toLocaleString("en-US",l)},Q=(o,l)=>{S.value=!0;const u=o.toString(),k={searchQuery:b.value};F.fetchUsers(u,l,k).then(e=>{V.value=e.data.users_data.data,z.value=e.data.users_data.current_page,v.value=e.data.users_data.last_page,A.value=e.data.users_data.total,e.status===200?g.value=!0:m.value=!0}).catch(e=>{m.value=!0}).finally(()=>S.value=!1)};N(()=>{Q(D.value,_.value)}),N(()=>{p.value>v.value&&(p.value=v.value)});const j=o=>o===0?"error":o===1?"success":"primary",Y=o=>o===0?"error":o===1?"success":"primary",q=o=>o===0?"warning":o===1?"success":"primary",E=r(!1);N(()=>{p.value>v.value&&(p.value=v.value)}),Z(()=>{const o=V.value.length?(p.value-1)*_.value+1:0,l=V.value.length+(p.value-1)*_.value;return`${o}-${l} of ${A.value}`});const L=r([]),G=r(!1);ee(L,()=>{L.value.length||(G.value=!1)},{deep:!0});const J=o=>{C.value=o,f.value=!0},K=async()=>{f.value=!1;const o=C.value,l=y.value;try{const u=await ie.post("/api/web/user/add-payment",{user_id:o,transactionId:l});u.status===200?(g.value=!0,console.log("Payment added successfully.")):(m.value=!0,console.error("Error adding payment:",u.data))}catch(u){m.value=!0,console.error("Error adding payment:",u)}};return(o,l)=>{const u=X,k=de("RouterLink");return h(),U("section",null,[a($,null,{default:s(()=>[n(x)?(h(),te(R,{key:0,modelValue:n(x),"onUpdate:modelValue":l[0]||(l[0]=e=>c(x)?x.value=e:x=e),location:"top end",variant:"flat",color:"error"},{default:s(()=>[d(" Please First Verify Your Adhar :( ")]),_:1},8,["modelValue"])):ae("",!0),a(R,{modelValue:n(m),"onUpdate:modelValue":l[1]||(l[1]=e=>c(m)?m.value=e:null),location:"top end",variant:"flat",color:"error"},{default:s(()=>[d(" Some Error Occured :( ")]),_:1},8,["modelValue"]),a(R,{modelValue:n(g),"onUpdate:modelValue":l[2]||(l[2]=e=>c(g)?g.value=e:null),location:"top end",variant:"flat",color:"success"},{default:s(()=>[d(" Request Sucessful :) ")]),_:1},8,["modelValue"]),a(O,{cols:"12"},{default:s(()=>[a(B,{title:"App Users"},{default:s(()=>[a(w,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[a(pe,{modelValue:n(f),"onUpdate:modelValue":l[7]||(l[7]=e=>c(f)?f.value=e:null),"max-width":"600"},{default:s(()=>[a(B,{title:"Payment"},{default:s(()=>[a(u,{variant:"text",size:"small",onClick:l[3]||(l[3]=e=>f.value=!1)}),a(w,null,{default:s(()=>[a($,null,{default:s(()=>[a(O,{cols:"12"},{default:s(()=>[a(M,{modelValue:n(y),"onUpdate:modelValue":l[4]||(l[4]=e=>c(y)?y.value=e:null),type:"text",label:"Merchant Transaction ID"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(w,{class:"d-flex justify-end gap-2"},{default:s(()=>[a(P,{color:"secondary",variant:"tonal",onClick:l[5]||(l[5]=e=>f.value=!1)},{default:s(()=>[d(" Close ")]),_:1}),a(P,{onClick:l[6]||(l[6]=e=>K(n(C),n(y)))},{default:s(()=>[d(" Check ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(I),a(w,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[a(me),t("div",he,[a(M,{modelValue:n(b),"onUpdate:modelValue":l[8]||(l[8]=e=>c(b)?b.value=e:null),placeholder:"Search User",density:"compact",class:"me-3"},null,8,["modelValue"])])]),_:1}),a(I),a(fe,{class:"text-no-wrap",height:"27rem","fixed-header":""},{default:s(()=>[Ve,t("tbody",null,[(h(!0),U(le,null,se(n(V),(e,W)=>(h(),U("tr",{key:e.id},[t("td",xe,[a(P,{color:"primary",onClick:Be=>J(e.id)},{default:s(()=>[d("Add Payment")]),_:2},1032,["onClick"]),d("    ")]),t("td",null,[t("span",ge,i((n(z)-1)*10+W+1),1)]),t("td",null,[t("span",ye,i(e.emp_id==null?`TEMP/${e.id}`:e.emp_id),1)]),t("td",Ue,[a(k,{to:{name:"apps-user-view-id",params:{id:e.id}}},{default:s(()=>[t("span",we,i(e.name),1)]),_:2},1032,["to"])]),t("td",be,[t("span",De,i(e.aadhar_number),1)]),t("td",Ae,[t("span",Se,i(e.email),1)]),t("td",Ce,[t("span",Ee,i(e.phone_number),1)]),t("td",null,[a(T,{color:j(e.is_phone_verified),density:"compact",label:"",class:"text-uppercase"},{default:s(()=>[d(i(e.is_phone_verified?"Verified":"Not Verified"),1)]),_:2},1032,["color"])]),t("td",null,[a(T,{color:q(e.payment_status),density:"compact",label:"",class:"text-uppercase"},{default:s(()=>[d(i(e.payment_status?"Successfull":"Pending"),1)]),_:2},1032,["color"])]),t("td",null,[a(T,{color:Y(e.is_verified),density:"compact",label:"",class:"text-uppercase"},{default:s(()=>[d(i(e.is_verified?"Verified":"Not Verified"),1)]),_:2},1032,["color"])]),t("td",ke,[t("span",Ne,i(H(e.created_at)),1)])]))),128))]),oe(t("tfoot",null,[t("tr",null,[n(S)?(h(),U("td",Pe,[a(ne,{size:60,color:"primary",indeterminate:"",class:"my-5"})])):(h(),U("td",Re," No data available "))])],512),[[re,!n(V).length]])]),_:1}),a(I),a(w,{class:"d-flex flex-wrap justify-end gap-4 pa-2"},{default:s(()=>[t("div",Ie,[Te,a(_e,{modelValue:n(_),"onUpdate:modelValue":l[9]||(l[9]=e=>c(_)?_.value=e:null),density:"compact",class:"per-page-select",variant:"plain",items:[10,20,30,50]},null,8,["modelValue"])]),t("div",ze,[t("span",Le,"Total Data: "+i(n(A)),1)]),t("div",Oe,[a(ve,{modelValue:n(D),"onUpdate:modelValue":l[10]||(l[10]=e=>c(D)?D.value=e:null),length:n(v),color:"primary","prev-icon":"mdi-chevron-left","next-icon":"mdi-chevron-right","first-icon":"mdi-chevron-double-left","last-icon":"mdi-chevron-double-right"},null,8,["modelValue","length"])])]),_:1})]),_:1})]),_:1})]),_:1}),a(ce,{isDrawerOpen:n(E),"onUpdate:isDrawerOpen":l[11]||(l[11]=e=>c(E)?E.value=e:null),onUserData:o.addNewUser},null,8,["isDrawerOpen","onUserData"])])}}};export{Dt as default};
