import{m as T,u as _,V as I,a as C}from"./VSliderTrack-730b98a9.js";import{b as R,m as w,u as A,f as L,V as N,a as U}from"./VInput-69f8a183.js";import{ag as j,j as q,aq as B,A as Z,am as $,n as u,F as z,Z as D}from"./main-edf7a918.js";const J=j()({name:"VSlider",props:{...R(),...T(),...w(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{slots:l}=f;const o=q(),{min:m,max:V,mousePressed:p,roundValue:r,onSliderMousedown:h,onSliderTouchstart:S,trackContainerRef:k,position:g,hasLabels:P,readonly:v}=_({props:e,handleSliderMouseUp:a=>d.value=r(a),handleMouseMove:a=>d.value=r(a),getActiveThumb:()=>{var a;return(a=o.value)==null?void 0:a.$el}}),d=B(e,"modelValue",void 0,a=>{const b=typeof a=="string"?parseFloat(a):a??m.value;return r(b)}),{isFocused:i,focus:F,blur:x}=A(e),c=Z(()=>g(d.value));return $(()=>{const[a,b]=L(e),y=!!(e.label||l.label||l.prepend);return u(U,D({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||P.value,"v-slider--focused":i.value,"v-slider--pressed":p.value,"v-slider--disabled":e.disabled}]},a,{focused:i.value}),{...l,prepend:y?n=>{var s,t;return u(z,null,[((s=l.label)==null?void 0:s.call(l,n))??e.label?u(N,{id:n.id,class:"v-slider__label",text:e.label},null):void 0,(t=l.prepend)==null?void 0:t.call(l,n)])}:void 0,default:n=>{let{id:s,messagesId:t}=n;return u("div",{class:"v-slider__container",onMousedown:v.value?void 0:h,onTouchstartPassive:v.value?void 0:S},[u("input",{id:s.value,name:e.name||s.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:d.value},null),u(I,{ref:k,start:0,stop:c.value},{"tick-label":l["tick-label"]}),u(C,{ref:o,"aria-describedby":t.value,focused:i.value,min:m.value,max:V.value,modelValue:d.value,"onUpdate:modelValue":M=>d.value=M,position:c.value,elevation:e.elevation,onFocus:F,onBlur:x},{"thumb-label":l["thumb-label"]})])}})}),{}}});export{J as V};
