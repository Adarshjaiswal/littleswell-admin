import{_ as h}from"./TheCustomizer-579b5a4a.js";import{t as v,i as x,j as y,y as M,z as A,A as R,o as l,b as m,w as o,p as e,B as C,l as k,n as t,T as S,e as V,C as N,r as D}from"./main-edf7a918.js";import P from"./Footer-93b61885.js";/* empty css                                                      */import T from"./NavbarThemeSwitcher-6c5ab95b.js";import"./NavSearchBar-1a6c1070.js";import w from"./UserProfile-980e9ed9.js";import{V as B}from"./VSpacer-cd3d7120.js";import"./VDivider-1a3d52ac.js";import"./VRadioGroup-c9851118.js";import"./VSelectionControl-e31052c4.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./transition-a51ab259.js";import"./VSwitch-2dd77126.js";import"./VRow-95e48620.js";import"./VSelect-295f5731.js";import"./VTextField-457ca700.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./easing-6b01f2d6.js";import"./VImg-c738de9a.js";import"./forwardRefs-8f7055de.js";import"./VCounter-4c0bd440.js";import"./VList-c8c5940d.js";import"./VAvatar-a0e54144.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./VCheckboxBtn-11469801.js";import"./VChip-743205b4.js";import"./VNavigationDrawer-01c3b33a.js";import"./ssrBoot-b343f022.js";import"./VTooltip-fcb72b0e.js";import"./useAppAbility-51117fdd.js";import"./VBadge-6174332e.js";import"./VListItemAction-f2feabc1.js";const n=JSON.parse(localStorage.getItem("userData")||"{}"),a=n&&n.role?n.role:null;console.log("=====",n,a);let i=[];a==="admin"?i=[{title:"Manage Vaccine",icon:{icon:"bx-doughnut-chart"},to:"apps-vaccine"},{title:"Manage Users",icon:{icon:"bxs-user-detail"},children:[{title:"Manage Users",to:"apps-users"}]},{title:"Manage Acc. Deactivation",icon:{icon:"bxs-user-x"},to:"apps-acc_deactivation"},{title:"Manage Payments",icon:{icon:"bx-rupee"},children:[]},{title:"Manage Reports",icon:{icon:"bxs-report"},children:[]}]:a==="recruitment"?i=[{heading:"Apps & Pages"},{title:"Manage Skills",icon:{icon:"bx-certification"},children:[{title:"Job-Skill",to:"apps-skill"},{title:"Prefered-Job-Skill",to:"apps-manage_prefered_job_skills"}]},{title:"Manage Job",icon:{icon:"bx-doughnut-chart"},to:"apps-job"},{title:"Manage Users",icon:{icon:"bxs-user-detail"},children:[{title:"Manage Users",to:"apps-users"},{title:"Add Bulk Employee",to:"apps-addemployee"}]},{title:"Manage Concerns",icon:{icon:"bxs-coupon"},to:"apps-concern"},{title:"Manage Locations",icon:{icon:"bx-current-location"},children:[{title:"Manage State",to:"apps-state"},{title:"Manage City",to:"apps-city"}]},{title:"Manage Candidates",icon:{icon:"bxs-food-menu"},to:"apps-jobapplication"},{title:"Manage Acc. Deactivation",icon:{icon:"bxs-user-x"},to:"apps-acc_deactivation"},{title:"Salary Slip",icon:{icon:"bxs-receipt"},to:"apps-salaryslip"},{title:"Manage Reports",icon:{icon:"bxs-report"},children:[{title:"Application Reports",to:"apps-application_reports"},{title:"User Reports",to:"apps-user_reports"},{title:"Employees Report",to:"apps-employees_report"},{title:"Non Applicant Report",to:"apps-non_applicant_user_report"}]}]:a==="account"?i=[{heading:"Apps & Pages"},{title:"Manage Concerns",icon:{icon:"bxs-coupon"},to:"apps-concern"},{title:"Manage Payments",icon:{icon:"bx-rupee"},children:[{title:"Manage Amount",to:"apps-paymentamount"},{title:"All Payments",to:"apps-allpayment"},{title:"Refund Requests",to:"apps-refundrequest"},{title:"Refund payments",to:"apps-refundpayment"}]}]:a==="compliances"&&(i=[{heading:"Apps & Pages"},{title:"Manage Concerns",icon:{icon:"bxs-coupon"},to:"apps-concern"},{title:"Salary Slip",icon:{icon:"bxs-receipt"},to:"apps-salaryslip"}]);const U=i,j=[{title:"Dashboard",icon:{icon:"bx-home"},to:"dashboards"}],J=[...j,...U];const L={class:"d-flex h-100 align-center"},kt={__name:"DefaultLayoutWithVerticalNav",setup($){N(s=>({cada7f5a:e(_),b13ef800:e(p),efa790a0:e(d)}));const{appRouteTransition:u,isLessThanOverlayNavBreakpoint:z,isVerticalNavCollapsed:r}=v();x();const p=y(null);M(r,s=>{p.value=s?"rotate-180":"rotate-back-180"});const d=r.value?"180deg":"0deg",{global:g}=A(),_=R(()=>g.current.value.colors.background);return(s,I)=>{const f=D("RouterView"),b=h;return l(),m(e(C),{"nav-items":e(J)},{navbar:o(({toggleVerticalOverlayNavActive:c})=>[k("div",L,[t(B),t(T),t(w)])]),footer:o(()=>[t(P)]),default:o(()=>[t(f,null,{default:o(({Component:c})=>[t(S,{name:e(u),mode:"out-in"},{default:o(()=>[(l(),m(V(c)))]),_:2},1032,["name"])]),_:1}),t(b)]),_:1},8,["nav-items"])}}};export{kt as default};
