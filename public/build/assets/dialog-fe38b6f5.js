import{_ as w}from"./DialogCloseBtn-58b7d3d9.js";import{j as g,o as k,b as C,w as a,n as e,G as c,bZ as T,b_ as j,Q as s,p as u,H as b,l as v,V as G,Z as J,c as I,F as z,y as q,c6 as O,a as M}from"./main-edf7a918.js";import{V as h,d as V,a as R,b as H}from"./VCard-168b6136.js";import{V as F,a as f}from"./VRow-95e48620.js";import{V as x}from"./VTextField-457ca700.js";import{V as W}from"./VSelect-295f5731.js";import{V as E}from"./VAutocomplete-37f46f35.js";import{V as y}from"./VDialog-c8000d93.js";import{V as Z,a as Q,b as K}from"./VToolbarItems-b329ed5c.js";import{V as X}from"./VSpacer-cd3d7120.js";import{V as $,d as U,a as _}from"./VList-c8c5940d.js";import{V as A}from"./VDivider-1a3d52ac.js";import{V as S}from"./VListItemAction-f2feabc1.js";import{V as P}from"./VCheckbox-8fbf8b3f.js";import{V as Y,a as ee}from"./VRadioGroup-c9851118.js";import{_ as ae}from"./AppCardCode-363e1240.js";import"./VAvatar-a0e54144.js";import"./VImg-c738de9a.js";import"./transition-a51ab259.js";/* empty css                   */import"./VField-45dcdeb2.js";import"./VInput-69f8a183.js";import"./form-130b39c8.js";import"./easing-6b01f2d6.js";import"./forwardRefs-8f7055de.js";import"./VCounter-4c0bd440.js";import"./dialog-transition-9ffc684e.js";import"./VMenu-2b6a4453.js";import"./VOverlay-729d98f7.js";import"./lazy-21e4bc45.js";import"./VCheckboxBtn-11469801.js";import"./VSelectionControl-e31052c4.js";import"./VChip-743205b4.js";import"./filter-83f761c0.js";import"./vue.runtime.esm-bundler-ebda2199.js";const le={__name:"DemoDialogForm",setup(D){const t=g(!1),n=g(""),o=g(""),l=g(""),i=g(""),m=g(""),p=g(),B=g([]);return(N,r)=>{const L=w;return k(),C(y,{modelValue:u(t),"onUpdate:modelValue":r[10]||(r[10]=d=>b(t)?t.value=d:null),"max-width":"600"},{activator:a(({props:d})=>[e(c,T(j(d)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(h,{title:"User Profile"},{default:a(()=>[e(L,{variant:"text",size:"small",onClick:r[0]||(r[0]=d=>t.value=!1)}),e(V,null,{default:a(()=>[e(F,null,{default:a(()=>[e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:u(n),"onUpdate:modelValue":r[1]||(r[1]=d=>b(n)?n.value=d:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:u(o),"onUpdate:modelValue":r[2]||(r[2]=d=>b(o)?o.value=d:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:u(l),"onUpdate:modelValue":r[3]||(r[3]=d=>b(l)?l.value=d:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(x,{modelValue:u(i),"onUpdate:modelValue":r[4]||(r[4]=d=>b(i)?i.value=d:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(x,{modelValue:u(m),"onUpdate:modelValue":r[5]||(r[5]=d=>b(m)?m.value=d:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(W,{modelValue:u(p),"onUpdate:modelValue":r[6]||(r[6]=d=>b(p)?p.value=d:null),items:["0-17","18-29","30-54","54+"],label:"Age"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(E,{modelValue:u(B),"onUpdate:modelValue":r[7]||(r[7]=d=>b(B)?B.value=d:null),multiple:"",items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(c,{color:"secondary",variant:"tonal",onClick:r[8]||(r[8]=d=>t.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{onClick:r[9]||(r[9]=d=>t.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};const te={__name:"DemoDialogFullscreen",setup(D){const t=g(!1);return(n,o)=>(k(),C(y,{modelValue:u(t),"onUpdate:modelValue":o[2]||(o[2]=l=>b(t)?t.value=l:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:l})=>[e(c,T(j(l)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(h,null,{default:a(()=>[v("div",null,[e(Z,{color:"primary"},{default:a(()=>[e(c,{icon:"",variant:"plain",onClick:o[0]||(o[0]=l=>t.value=!1)},{default:a(()=>[e(G,{color:"white",icon:"bx-x"})]),_:1}),e(Q,null,{default:a(()=>[s("Settings")]),_:1}),e(X),e(K,null,{default:a(()=>[e(c,{variant:"text",onClick:o[1]||(o[1]=l=>t.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),e($,{lines:"two"},{default:a(()=>[e(U,null,{default:a(()=>[s("User Controls")]),_:1}),e(_,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(_,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(A),e($,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(U,null,{default:a(()=>[s("General")]),_:1}),e(_,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:l})=>[e(S,{start:""},{default:a(()=>[e(P,{"model-value":l,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(_,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:l})=>[e(S,{start:""},{default:a(()=>[e(P,{"model-value":l,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(_,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:l})=>[e(S,{start:""},{default:a(()=>[e(P,{"model-value":l,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},oe={__name:"DemoDialogOverflowed",setup(D){const t=g(!1);return(n,o)=>{const l=w;return k(),C(y,{modelValue:u(t),"onUpdate:modelValue":o[3]||(o[3]=i=>b(t)?t.value=i:null),class:"v-dialog-sm"},{activator:a(({props:i})=>[e(c,J({color:"primary"},i),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(h,{title:"Use Google's location service?"},{default:a(()=>[e(l,{variant:"text",size:"small",onClick:o[0]||(o[0]=i=>t.value=!1)}),e(V,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(V,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(c,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=i=>t.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(c,{onClick:o[2]||(o[2]=i=>t.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},ie={__name:"DemoDialogNesting",setup(D){const t=g(!1),n=g(!1);return(o,l)=>{const i=w;return k(),I(z,null,[e(c,{onClick:l[0]||(l[0]=m=>t.value=!0)},{default:a(()=>[s(" Open Dialog ")]),_:1}),e(y,{modelValue:u(t),"onUpdate:modelValue":l[4]||(l[4]=m=>b(t)?t.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(h,{title:"Dialog"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:l[1]||(l[1]=m=>t.value=!1)}),e(V,null,{default:a(()=>[s(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(V,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(c,{color:"secondary",variant:"tonal",onClick:l[2]||(l[2]=m=>t.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{onClick:l[3]||(l[3]=m=>n.value=!u(n))},{default:a(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:u(n),"onUpdate:modelValue":l[7]||(l[7]=m=>b(n)?n.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(h,{title:"Dialog 2"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:l[5]||(l[5]=m=>n.value=!1)}),e(V,null,{default:a(()=>[s("I'm a nested dialog.")]),_:1}),e(V,{class:"text-end"},{default:a(()=>[e(c,{variant:"tonal",color:"secondary",onClick:l[6]||(l[6]=m=>n.value=!1)},{default:a(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},se={__name:"DemoDialogLoader",setup(D){const t=g(!1);return q(t,n=>{n&&setTimeout(()=>{t.value=!1},4e3)}),(n,o)=>(k(),I(z,null,[e(c,{disabled:u(t),onClick:o[0]||(o[0]=l=>t.value=!0)},{default:a(()=>[s(" Start loading ")]),_:1},8,["disabled"]),e(y,{modelValue:u(t),"onUpdate:modelValue":o[1]||(o[1]=l=>b(t)?t.value=l:null),width:"300"},{default:a(()=>[e(h,{color:"primary",width:"300"},{default:a(()=>[e(V,{class:"pt-3"},{default:a(()=>[s(" Please stand by "),e(O,{indeterminate:"",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},re={__name:"DemoDialogScrollable",setup(D){const t=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],n=g(""),o=g(!1);return(l,i)=>{const m=w;return k(),C(y,{modelValue:u(o),"onUpdate:modelValue":i[4]||(i[4]=p=>b(o)?o.value=p:null),scrollable:"","max-width":"350"},{activator:a(({props:p})=>[e(c,T(j(p)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(h,null,{default:a(()=>[e(m,{variant:"text",size:"small",onClick:i[0]||(i[0]=p=>o.value=!1)}),e(R,{class:"pb-3"},{default:a(()=>[e(H,null,{default:a(()=>[s("Select Country")]),_:1})]),_:1}),e(A),e(V,{style:{height:"300px"}},{default:a(()=>[e(Y,{modelValue:u(n),"onUpdate:modelValue":i[1]||(i[1]=p=>b(n)?n.value=p:null),inline:!1},{default:a(()=>[(k(),I(z,null,M(t,p=>e(ee,{key:p.label,label:p.label,value:p.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(A),e(V,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(c,{color:"secondary",variant:"tonal",onClick:i[2]||(i[2]=p=>o.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{onClick:i[3]||(i[3]=p=>o.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},ne={__name:"DemoDialogPersistent",setup(D){const t=g(!1);return(n,o)=>{const l=w;return k(),C(y,{modelValue:u(t),"onUpdate:modelValue":o[3]||(o[3]=i=>b(t)?t.value=i:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:i})=>[e(c,T(j(i)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(h,{title:"Use Google's location service?"},{default:a(()=>[e(l,{variant:"text",size:"small",onClick:o[0]||(o[0]=i=>t.value=!1)}),e(V,null,{default:a(()=>[s(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(V,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(c,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=i=>t.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(c,{onClick:o[2]||(o[2]=i=>t.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},ce={__name:"DemoDialogBasic",setup(D){const t=g(!1);return(n,o)=>{const l=w;return k(),C(y,{modelValue:u(t),"onUpdate:modelValue":o[2]||(o[2]=i=>b(t)?t.value=i:null),width:"500"},{activator:a(({props:i})=>[e(c,T(j(i)),{default:a(()=>[s(" Click Me ")]),_:2},1040)]),default:a(()=>[e(h,{title:"Privacy Policy"},{default:a(()=>[e(l,{variant:"text",size:"small",onClick:o[0]||(o[0]=i=>t.value=!1)}),e(V,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(V,{class:"text-end"},{default:a(()=>[e(c,{onClick:o[1]||(o[1]=i=>t.value=!1)},{default:a(()=>[s(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},de={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="text-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="text-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ue={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},pe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="bx-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="bx-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ge={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>

        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogTwoShow = false"
        >
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>

        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogTwoShow = false"
        >
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},be={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},fe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ve={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ve=v("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),ke=v("p",null,[s("Use "),v("code",null,"persistent"),s(" prop to create persistent dialog.")],-1),he=v("p",null,[s("Use "),v("code",null,"scrollable"),s(" prop to create scrollable dialog.")],-1),ye=v("p",null,[s("The "),v("code",null,"v-dialog"),s(" component makes it easy to create a customized loading experience for your application.")],-1),De=v("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),Ce=v("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),we=v("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),Be=v("p",null,"Just a simple example of a form in a dialog.",-1),ra={__name:"dialog",setup(D){return(t,n)=>{const o=ce,l=ae,i=ne,m=re,p=se,B=ie,N=oe,r=te,L=le;return k(),C(F,{class:"match-height"},{default:a(()=>[e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Basic",code:de},{default:a(()=>[ve,e(o)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Persistent",code:fe},{default:a(()=>[ke,e(i)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Scrollable",code:Ve},{default:a(()=>[he,e(m)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Loader",code:me},{default:a(()=>[ye,e(p)]),_:1},8,["code"])]),_:1}),e(f,{col:"12",md:"6"},{default:a(()=>[e(l,{title:"Nesting",code:ge},{default:a(()=>[De,e(B)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Overflowed",code:be},{default:a(()=>[Ce,e(N)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Fullscreen",code:pe},{default:a(()=>[we,e(r)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Form",code:ue},{default:a(()=>[Be,e(L)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ra as default};
