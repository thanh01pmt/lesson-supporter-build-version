import{Q as N}from"./QPage.dd3f97b6.js";import{r as g,U as m,a7 as f,q as o,X as s,a4 as y,ab as C,ac as b,a5 as d,$ as D,ae as q,J as A,aa as z,br as h,k as P,a2 as w,F as U,a8 as J,W as L,Z as V}from"./index.9b9d7fe8.js";import{u as k}from"./use-quasar.f1bd7afb.js";import{Q as G}from"./QSpinnerDots.2e29e449.js";import{Q as j}from"./QExpansionItem.231d7d4d.js";import{C as E}from"./ClosePopup.94dfda30.js";import{u as O}from"./googleAIService.d0f8bbae.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./QItem.c2eea8eb.js";const Q={json:{quiz:`Vui l\xF2ng tr\u1EA3 v\u1EC1 k\u1EBFt qu\u1EA3 theo \u0111\u1ECBnh d\u1EA1ng JSON v\u1EDBi c\u1EA5u tr\xFAc sau:
{
  "questions": [
    {
      "level": "C\u1EA5p \u0111\u1ED9 t\u01B0 duy",
      "question": {
        "text": "N\u1ED9i dung c\xE2u h\u1ECFi",
        "image": "URL c\u1EE7a h\xECnh \u1EA3nh (t\xF9y ch\u1ECDn)",
        "code": "Pseudo code ho\u1EB7c code m\u1EABu (t\xF9y ch\u1ECDn)"
      },
      "options": [
        {
          "text": "N\u1ED9i dung \u0111\xE1p \xE1n (b\u1EAFt bu\u1ED9c)",
          "image": "URL c\u1EE7a h\xECnh \u1EA3nh (t\xF9y ch\u1ECDn)",
          "code": "Pseudo code ho\u1EB7c code m\u1EABu (t\xF9y ch\u1ECDn)"
        },
        {
          "text": "\u0110\xE1p \xE1n ch\u1EC9 c\xF3 ch\u1EEF"
        },
        {
          "text": "",
          "code": "move (10) steps"
        },
        {
          "text": "",
          "image": "https://example.com/image.png"
        }
      ],
      "correctAnswer": 0,
      "explanation": "Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n"
    }
  ]
}

L\u01B0u \xFD:
1. M\u1ED7i c\xE2u h\u1ECFi ph\u1EA3i c\xF3 ph\u1EA7n text trong question
2. image v\xE0 code l\xE0 t\xF9y ch\u1ECDn, c\xF3 th\u1EC3 b\u1ECF tr\u1ED1ng
3. M\u1ED7i \u0111\xE1p \xE1n (option) ph\u1EA3i c\xF3 \xEDt nh\u1EA5t m\u1ED9t trong ba tr\u01B0\u1EDDng: text, image ho\u1EB7c code
4. Khi c\xE2u h\u1ECFi li\xEAn quan \u0111\u1EBFn code, \u01B0u ti\xEAn s\u1EED d\u1EE5ng tr\u01B0\u1EDDng code thay v\xEC image
5. Ch\u1EC9 s\u1EED d\u1EE5ng image khi th\u1EF1c s\u1EF1 c\u1EA7n thi\u1EBFt (v\xED d\u1EE5: h\xECnh \u1EA3nh giao di\u1EC7n, s\u01A1 \u0111\u1ED3, etc.)
6. correctAnswer l\xE0 index c\u1EE7a \u0111\xE1p \xE1n \u0111\xFAng (0-3)`},code_rules:{scratch:`L\u01B0u \xFD:
- D\xF9ng ngo\u1EB7c () khi n\u1ED9i dung b\xEAn trong l\xE0 m\u1ED9t bi\u1EBFn, m\u1ED9t s\u1ED1 ho\u1EB7c sprite.
- D\xF9ng ngo\u1EB7c [] khi n\u1ED9i dung b\xEAn trong l\xE0 m\u1ED9t chu\u1ED7i.
- D\xF9ng ngo\u1EB7c <> khi n\u1ED9i dung b\xEAn trong l\xE0 m\u1ED9t \u0111i\u1EC1u ki\u1EC7n.
- C\xE1c kh\u1ED1i l\u1EC7nh \u0111\u01B0\u1EE3c ph\xE2n c\xE1ch nhau b\u1EB1ng k\xFD hi\u1EC7u xu\u1ED1ng d\xF2ng \\n`}},I={base:`T\u1EA1o b\u1ED9 c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m v\u1EC1 ch\u1EE7 \u0111\u1EC1: {{topic}}
Ng\xF4n ng\u1EEF/C\xF4ng c\u1EE5: {{language}}
Th\xF4ng tin b\u1ED5 sung: {{additionalInfo}}

Y\xEAu c\u1EA7u s\u1ED1 l\u01B0\u1EE3ng c\xE2u h\u1ECFi theo t\u1EEBng c\u1EA5p \u0111\u1ED9 t\u01B0 duy:
{{bloomLevels}}

M\u1ED7i c\xE2u h\u1ECFi c\u1EA7n c\xF3:
1. N\u1ED9i dung c\xE2u h\u1ECFi
2. 4 \u0111\xE1p \xE1n (trong \u0111\xF3 c\xF3 1 \u0111\xE1p \xE1n \u0111\xFAng)
3. Gi\u1EA3i th\xEDch cho \u0111\xE1p \xE1n \u0111\xFAng`,scratch_examples:`L\u01B0u \xFD \u0111\u1EB7c bi\u1EC7t: V\u1EDBi c\xE1c c\xE2u h\u1ECFi li\xEAn quan \u0111\u1EBFn code, h\xE3y s\u1EED d\u1EE5ng pseudo code c\u1EE7a Scratch, c\xF3 \u0111\u1ECBnh d\u1EA1ng sau:
- move (10) steps: Di chuy\u1EC3n sprite v\u1EC1 ph\xEDa tr\u01B0\u1EDBc 10 b\u01B0\u1EDBc
- turn right(90) degrees: Xoay sprite 90 \u0111\u1ED9 theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3
- say [Hello!] for (2) seconds: Hi\u1EC3n th\u1ECB bong b\xF3ng chat v\u1EDBi n\u1ED9i dung "Hello!" trong 2 gi\xE2y
- if <touching [Sprite1]?> then: Ki\u1EC3m tra n\u1EBFu ch\u1EA1m v\xE0o Sprite1
- repeat (10): L\u1EB7p l\u1EA1i 10 l\u1EA7n
- forever: L\u1EB7p v\xF4 h\u1EA1n
- when green flag clicked: Khi c\u1EDD xanh \u0111\u01B0\u1EE3c click
- wait (1) seconds: \u0110\u1EE3i 1 gi\xE2y`},T=()=>({generateQuizPrompt:({topic:n,language:l,additionalInfo:e,bloomLevels:i})=>{let r=I.base.replace("{{topic}}",n).replace("{{language}}",l).replace("{{additionalInfo}}",e).replace("{{bloomLevels}}",i.filter(t=>t.count>0).map(t=>`- ${t.name}: ${t.count} c\xE2u`).join(`
`));return l.toLowerCase()==="scratch"&&(r+=`
`+I.scratch_examples,r+=`
`+Q.code_rules.scratch),r+=`
`+Q.json.quiz,r}}),R={name:"CreateWithAIButton",props:{prompt:{type:String,required:!0},label:{type:String,default:""},icon:{type:String,default:""},confirmBeforeCreate:{type:Boolean,default:!0}},emits:["created","error"],setup(c,{emit:n}){const l=k(),{getAISuggestion:e}=O(),i=g(!1),r=g(!1),t=()=>{c.confirmBeforeCreate?r.value=!0:u()},u=async()=>{if(!c.prompt){l.notify({type:"warning",message:"Prompt kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng",position:"top"});return}i.value=!0;try{const a=await e(c.prompt);n("created",a),r.value=!1,l.notify({type:"positive",message:"T\u1EA1o n\u1ED9i dung th\xE0nh c\xF4ng",position:"top"})}catch(a){console.error("L\u1ED7i khi t\u1EA1o n\u1ED9i dung:",a),n("error",a),l.notify({type:"negative",message:`L\u1ED7i: ${a.message}`,position:"top"})}finally{i.value=!1}};return{loading:i,showConfirmDialog:r,handleCreate:t,createWithAI:u}}},W={class:"text-grey-8",style:{"white-space":"pre-wrap"}};function H(c,n,l,e,i,r){return m(),f("div",null,[o(y,{color:"primary",label:l.label||"Create with AI",icon:l.icon||"smart_toy",onClick:e.handleCreate,loading:e.loading},{loading:s(()=>[o(G)]),_:1},8,["label","icon","onClick","loading"]),o(z,{modelValue:e.showConfirmDialog,"onUpdate:modelValue":n[0]||(n[0]=t=>e.showConfirmDialog=t)},{default:s(()=>[o(C,{style:{"min-width":"350px"}},{default:s(()=>[o(b,null,{default:s(()=>n[1]||(n[1]=[d("div",{class:"text-h6"},"X\xE1c nh\u1EADn t\u1EA1o n\u1ED9i dung",-1)])),_:1}),o(b,null,{default:s(()=>[n[2]||(n[2]=d("div",{class:"text-body1"},"B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EA1o n\u1ED9i dung v\u1EDBi AI kh\xF4ng?",-1)),o(j,{"switch-toggle-side":"",dense:"",label:"Xem prompt"},{default:s(()=>[o(C,null,{default:s(()=>[o(b,null,{default:s(()=>[d("pre",W,D(l.prompt),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{align:"right"},{default:s(()=>[A(o(y,{flat:"",label:"H\u1EE7y",color:"grey"},null,512),[[E]]),o(y,{flat:"",label:"T\u1EA1o",color:"primary",onClick:e.createWithAI,loading:e.loading},null,8,["onClick","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var X=x(R,[["render",H]]);const M={name:"ExportJsonButton",props:{data:{type:[Object,Array],required:!0}},setup(c){const n=k(),l=g(!1),e=g(!1),i=g("data");return{loading:l,showDialog:e,fileName:i,showExportDialog:()=>{e.value=!0},saveAsJson:async()=>{if(!i.value){n.notify({type:"warning",message:"Vui l\xF2ng nh\u1EADp t\xEAn file",position:"top"});return}l.value=!0;try{const u=JSON.stringify(c.data,null,2),a=new Blob([u],{type:"application/json"}),v=window.URL.createObjectURL(a),p=document.createElement("a");p.href=v,p.download=`${i.value}.json`,document.body.appendChild(p),p.click(),document.body.removeChild(p),window.URL.revokeObjectURL(v),e.value=!1,n.notify({type:"positive",message:"File JSON \u0111\xE3 \u0111\u01B0\u1EE3c xu\u1EA5t th\xE0nh c\xF4ng",position:"top"})}catch(u){console.error("Error saving JSON:",u),n.notify({type:"negative",message:`L\u1ED7i khi xu\u1EA5t file: ${u.message}`,position:"top"})}finally{l.value=!1}}}}};function F(c,n,l,e,i,r){return m(),f("div",null,[o(y,{color:"primary",label:"Export JSON",icon:"download",onClick:e.showExportDialog,loading:e.loading},null,8,["onClick","loading"]),o(z,{modelValue:e.showDialog,"onUpdate:modelValue":n[1]||(n[1]=t=>e.showDialog=t)},{default:s(()=>[o(C,{style:{"min-width":"350px"}},{default:s(()=>[o(b,null,{default:s(()=>n[2]||(n[2]=[d("div",{class:"text-h6"},"Export JSON",-1)])),_:1}),o(b,null,{default:s(()=>[o(h,{modelValue:e.fileName,"onUpdate:modelValue":n[0]||(n[0]=t=>e.fileName=t),label:"T\xEAn file",rules:[t=>!!t||"Vui l\xF2ng nh\u1EADp t\xEAn file",t=>!t.includes("/")||"T\xEAn file kh\xF4ng \u0111\u01B0\u1EE3c ch\u1EE9a k\xFD t\u1EF1 /"]},{append:s(()=>n[3]||(n[3]=[d("div",{class:"text-grey-7"},".json",-1)])),_:1},8,["modelValue","rules"])]),_:1}),o(q,{align:"right"},{default:s(()=>[A(o(y,{flat:"",label:"H\u1EE7y",color:"grey"},null,512),[[E]]),o(y,{flat:"",label:"Xu\u1EA5t",color:"primary",onClick:e.saveAsJson},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var K=x(M,[["render",F]]);const Y={name:"QuizGen",components:{CreateWithAIButton:X,ExportJsonButton:K},setup(){const c=k(),{generateQuizPrompt:n}=T(),l=g(""),e=g(""),i=g(""),r=g(""),t=g([{name:"Nh\u1EDB",count:0},{name:"Hi\u1EC3u",count:0},{name:"V\u1EADn d\u1EE5ng",count:0},{name:"Ph\xE2n t\xEDch",count:0},{name:"\u0110\xE1nh gi\xE1",count:0}]),u=P(()=>{const _=t.value.reduce((S,B)=>S+B.count,0);return l.value&&_>0});return{topic:l,language:e,additionalInfo:i,bloomLevels:t,result:r,isValid:u,generatePrompt:()=>n({topic:l.value,language:e.value,additionalInfo:i.value,bloomLevels:t.value}),handleQuizCreated:_=>{r.value=_,c.notify({type:"positive",message:"T\u1EA1o quiz th\xE0nh c\xF4ng",position:"top"})},handleError:_=>{console.error("L\u1ED7i khi t\u1EA1o quiz:",_),c.notify({type:"negative",message:"C\xF3 l\u1ED7i x\u1EA3y ra khi t\u1EA1o quiz",icon:"error"})}}}},Z={class:"quiz-gen q-py-md"},$={class:"col-12 row"},ee={class:"col-12"},ne={class:"col-12 q-pb-md"},oe={class:"col-12 q-pb-md"},te={class:"col-12 grid-container q-pb-md"},ae={class:"row col-12 q-col-gutter-sm items-center"},le={key:0,class:"col-12"};function ie(c,n,l,e,i,r){const t=w("CreateWithAIButton"),u=w("ExportJsonButton");return m(),f("div",Z,[d("div",$,[d("div",ee,[o(h,{modelValue:e.topic,"onUpdate:modelValue":n[0]||(n[0]=a=>e.topic=a),filled:"",label:"Ch\u1EE7 \u0111\u1EC1",rules:[a=>!!a||"Vui l\xF2ng nh\u1EADp ch\u1EE7 \u0111\u1EC1"]},null,8,["modelValue","rules"])]),d("div",ne,[o(h,{modelValue:e.language,"onUpdate:modelValue":n[1]||(n[1]=a=>e.language=a),filled:"",label:"Ng\xF4n ng\u1EEF/C\xF4ng c\u1EE5"},null,8,["modelValue"])]),d("div",oe,[o(h,{modelValue:e.additionalInfo,"onUpdate:modelValue":n[2]||(n[2]=a=>e.additionalInfo=a),type:"textarea",filled:"",autogrow:"",label:"Th\xF4ng tin b\u1ED5 sung"},null,8,["modelValue"])]),d("div",te,[(m(!0),f(U,null,J(e.bloomLevels,a=>(m(),f("div",{key:a.name},[o(h,{modelValue:a.count,"onUpdate:modelValue":v=>a.count=v,modelModifiers:{number:!0},filled:"",type:"number",label:a.name,min:"0",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","label"])]))),128))]),d("div",ae,[o(t,{prompt:e.generatePrompt(),onCreated:e.handleQuizCreated,onError:e.handleError,label:"Gen Quiz",icon:"psychology",disabled:!e.isValid},null,8,["prompt","onCreated","onError","disabled"]),e.result?(m(),L(u,{key:0,data:e.result},null,8,["data"])):V("",!0)]),e.result?(m(),f("div",le,[n[4]||(n[4]=d("div",{class:"text-h6"},"Result:",-1)),o(h,{modelValue:e.result,"onUpdate:modelValue":n[3]||(n[3]=a=>e.result=a),type:"textarea",filled:"",readonly:"",autogrow:""},null,8,["modelValue"])])):V("",!0)])])}var re=x(Y,[["render",ie],["__scopeId","data-v-7bbed0ea"]]);const se={name:"AIQuizGenPage",components:{AIQuizGen:re}},ce={class:"col-12 col-md-8"};function de(c,n,l,e,i,r){const t=w("AIQuizGen");return m(),L(N,{class:"row justify-center"},{default:s(()=>[d("div",ce,[o(t)])]),_:1})}var be=x(se,[["render",de],["__scopeId","data-v-c114f476"]]);export{be as default};
