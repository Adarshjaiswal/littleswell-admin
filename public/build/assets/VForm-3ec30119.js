import{m as p,c as v}from"./form-130b39c8.js";import{f as b}from"./forwardRefs-8f7055de.js";import{ag as h,j as R,am as V,n as F}from"./main-edf7a918.js";const P=h()({name:"VForm",props:{...p()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,f){let{slots:n,emit:i}=f;const a=v(o),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const r=t,e=a.validate();r.then=e.then.bind(e),r.catch=e.catch.bind(e),r.finally=e.finally.bind(e),i("submit",r),r.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),r.preventDefault()}return V(()=>{var t;return F("form",{ref:m,class:"v-form",novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),b(a,m)}});export{P as V};
