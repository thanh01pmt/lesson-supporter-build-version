import{r as p,X as g,a9 as C,q as n,Z as r,a6 as I,ad as v,ae as T,a7 as u,a1 as P,ag as L,L as _,ac as x,bs as f,k as U,a4 as b,F as w,aa as B,Y as D,$ as S}from"./index.037f850d.js";import{u as R}from"./use-quasar.414eeb3f.js";import{Q as M}from"./QSpinnerDots.6c974946.js";import{Q as G}from"./QExpansionItem.da0e08ff.js";import{C as V}from"./ClosePopup.f7b4fda5.js";import{a as q}from"./googleAIService.c307673a.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";const O={json:{simplifiedQuiz:`
{
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "type": {
            "type": "string",
            "enum": [
                "multiple_response",
                "true_false",
                "multiple_choice"
            ]
        },
        "question": {
            "type": "string"
        },
        "image": {
            "type": "string"
        },
        "options": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "text": {
                        "type": "string"
                    },
                    "isCorrect": {
                        "type": "boolean"
                    },
                    "image": {
                        "type": "string"
                    }
                },
                "required": [
                    "text",
                    "isCorrect"
                ]
            }
        },
        "metadata": {
            "type": "object",
            "properties": {
                "bloomTaxonomy": {
                    "type": "string",
                    "enum": [
                        "remembering",
                        "understanding",
                        "applying"
                    ]
                },
                "concepts": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "conceptDescription": {
                    "type": "string"
                },
                "timeLimit": {
                    "type": "integer"
                },
                "difficulty": {
                    "type": "string",
                    "enum": [
                        "very easy",
                        "easy",
                        "medium",
                        "hard"
                    ]
                }
            },
            "required": [
                "bloomTaxonomy",
                "concepts",
                "difficulty"
            ]
        },
        "explanation": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "type",
        "question",
        "options",
        "metadata",
        "explanation"
    ]
}
`,quiz:`Vui l\xF2ng tr\u1EA3 v\u1EC1 k\u1EBFt qu\u1EA3 theo \u0111\u1ECBnh d\u1EA1ng JSON v\u1EDBi c\u1EA5u tr\xFAc sau:
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
- C\xE1c kh\u1ED1i l\u1EC7nh \u0111\u01B0\u1EE3c ph\xE2n c\xE1ch nhau b\u1EB1ng k\xFD hi\u1EC7u xu\u1ED1ng d\xF2ng \\n`}},A={base:`T\u1EA1o b\u1ED9 c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m v\u1EC1 ch\u1EE7 \u0111\u1EC1: {{topic}}
Ng\xF4n ng\u1EEF/C\xF4ng c\u1EE5: {{language}}
Th\xF4ng tin b\u1ED5 sung: {{additionalInfo}}

Y\xEAu c\u1EA7u s\u1ED1 l\u01B0\u1EE3ng c\xE2u h\u1ECFi theo t\u1EEBng c\u1EA5p \u0111\u1ED9 t\u01B0 duy:
{{bloomLevels}}

M\u1ED7i c\xE2u h\u1ECFi c\u1EA7n c\xF3:
1. N\u1ED9i dung c\xE2u h\u1ECFi
2. \u0110\xE1p \xE1n v\xE0 \u0110\xE1p \xE1n \u0111\xFAng
3. Gi\u1EA3i th\xEDch cho \u0111\xE1p \xE1n \u0111\xFAng

\u0110\xE1p \xE1n c\u1EE7a b\u1EA1n PH\u1EA2I l\xE0 m\u1ED9t valid javascript object tu\xE2n th\u1EE7 ch\u1EB7t ch\u1EBD theo schema \u0111\xE3 \u0111\u01B0\u1EE3c cung c\u1EA5p. Kh\xF4ng c\u1EA7n th\xEAm b\u1EA5t k\u1EF3 ph\u1EA7n gi\u1EDBi thi\u1EC7u ho\u1EB7c gi\u1EA3i th\xEDch n\xE0o kh\xE1c.
{{responseSchema}}

C\xE2u h\u1ECFi ch\u1EC9 \u0111\u01B0\u1EE3c g\u1EAFn t\u1ED1i \u0111a 5 tag (concept) theo danh s\xE1ch c\xE1c t\u1EEB c\u1EE5 th\u1EC3 sau, kh\xF4ng d\xF9ng c\xE1c tag/concept kh\xE1c.
{{tags}}
`,tags:"STATEMENTS, STRUCTURE, GRAMMAR, PRIMITIVE, COMPOSITE, ABSTRACT, TYPING, DECLARATION, INITIALIZATION, ASSIGNMENT, SCOPE, LIFETIME, ARITHMETIC, COMPARISON, LOGICAL, BITWISE, IDENTITY, MEMBERSHIP, CONDITIONAL, LOOP, BRANCHING, DEFINITION, PARAMETERS, ARGUMENTS, RETURN, CALLING, GLOBAL, LOCAL, ENCLOSING, BUILT-IN, CONVENTIONS, STYLE, SINGLE-LINE, MULTI-LINE, DOCSTRING, ARRAY, STRING, LIST, DICT, SET, TUPLE, STACK, QUEUE, TREE, GRAPH, CLASS, INHERITANCE, POLYMORPHISM, ENCAPSULATION, ABSTRACTION, INTERFACE, METHOD, PROPERTY, CONSTRUCTOR, DESTRUCTOR, EXCEPTION, REGEX, LAMBDA, RECURSION, ITERATOR, DECORATOR, GENERIC, REFLECTION, MEMORY, GARBAGE, THREAD, PROCESS, ASYNC, PARALLEL, SYNC, LOCK, EVENT, QUEUE_ASYNC, COROUTINE, RACE, FILE, STREAM, NETWORK, DATABASE, API, GUI, CLI, SERIALIZE, PROTOCOL, FORMAT, COMPLEXITY, OPTIMIZATION, MEMORY_PERF, CPU_PERF, CACHE, RESOURCE, BENCHMARK, PROFILE, LEAK, BOTTLENECK, SECURITY, CRYPTO, AUTH, ACCESS, INJECTION, XSS, CSRF, VALIDATION, SANITIZE, VULNERABILITY, UNIT_TEST, INTEGRATION, DEBUG, MOCK, ASSERT, LOG, ERROR, QA, COVERAGE, BUG",scratch_examples:`L\u01B0u \xFD \u0111\u1EB7c bi\u1EC7t: V\u1EDBi c\xE1c c\xE2u h\u1ECFi li\xEAn quan \u0111\u1EBFn code, h\xE3y s\u1EED d\u1EE5ng pseudo code c\u1EE7a Scratch, c\xF3 \u0111\u1ECBnh d\u1EA1ng sau:
- move (10) steps: Di chuy\u1EC3n sprite v\u1EC1 ph\xEDa tr\u01B0\u1EDBc 10 b\u01B0\u1EDBc
- turn right(90) degrees: Xoay sprite 90 \u0111\u1ED9 theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3
- say [Hello!] for (2) seconds: Hi\u1EC3n th\u1ECB bong b\xF3ng chat v\u1EDBi n\u1ED9i dung "Hello!" trong 2 gi\xE2y
- if <touching [Sprite1]?> then: Ki\u1EC3m tra n\u1EBFu ch\u1EA1m v\xE0o Sprite1
- repeat (10): L\u1EB7p l\u1EA1i 10 l\u1EA7n
- forever: L\u1EB7p v\xF4 h\u1EA1n
- when green flag clicked: Khi c\u1EDD xanh \u0111\u01B0\u1EE3c click
- wait (1) seconds: \u0110\u1EE3i 1 gi\xE2y`},Q=()=>({generateQuizPrompt:({topic:t,language:i,additionalInfo:e,bloomLevels:l})=>{let s=A.base.replace("{{topic}}",t).replace("{{language}}",i).replace("{{additionalInfo}}",e).replace("{{bloomLevels}}",l.filter(a=>a.count>0).map(a=>`- ${a.name}: ${a.count} c\xE2u`).join(`
`)).replace("{{responseSchema}}",O.json.simplifiedQuiz).replace("{{tags}}",A.tags.toLowerCase());return i.toLowerCase()==="scratch"&&(s+=`
`+A.scratch_examples,s+=`
`+O.code_rules.scratch),s}}),z={name:"CreateWithAIButton",props:{prompt:{type:String,required:!0},label:{type:String,default:""},icon:{type:String,default:""},confirmBeforeCreate:{type:Boolean,default:!0}},emits:["created","error"],setup(d,{emit:t}){const i=R(),{getAISuggestion:e}=q(),l=p(!1),s=p(!1),a=()=>{d.confirmBeforeCreate?s.value=!0:c()},c=async()=>{if(!d.prompt){i.notify({type:"warning",message:"Prompt kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng",position:"top"});return}l.value=!0;try{const o=await e(d.prompt);t("created",o),s.value=!1,i.notify({type:"positive",message:"T\u1EA1o n\u1ED9i dung th\xE0nh c\xF4ng",position:"top"})}catch(o){console.error("L\u1ED7i khi t\u1EA1o n\u1ED9i dung:",o),t("error",o),i.notify({type:"negative",message:`L\u1ED7i: ${o.message}`,position:"top"})}finally{l.value=!1}};return{loading:l,showConfirmDialog:s,handleCreate:a,createWithAI:c}}},H={class:"text-grey-8",style:{"white-space":"pre-wrap"}};function Y(d,t,i,e,l,s){return g(),C("div",null,[n(I,{color:"primary",label:i.label||"Create with AI",icon:i.icon||"smart_toy",onClick:e.handleCreate,loading:e.loading},{loading:r(()=>[n(M)]),_:1},8,["label","icon","onClick","loading"]),n(x,{modelValue:e.showConfirmDialog,"onUpdate:modelValue":t[0]||(t[0]=a=>e.showConfirmDialog=a)},{default:r(()=>[n(v,{style:{"min-width":"350px"}},{default:r(()=>[n(T,null,{default:r(()=>t[1]||(t[1]=[u("div",{class:"text-h6"},"X\xE1c nh\u1EADn t\u1EA1o n\u1ED9i dung",-1)])),_:1}),n(T,null,{default:r(()=>[t[2]||(t[2]=u("div",{class:"text-body1"},"B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EA1o n\u1ED9i dung v\u1EDBi AI kh\xF4ng?",-1)),n(G,{"switch-toggle-side":"",dense:"",label:"Xem prompt"},{default:r(()=>[n(v,null,{default:r(()=>[n(T,null,{default:r(()=>[u("pre",H,P(i.prompt),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(L,{align:"right"},{default:r(()=>[_(n(I,{flat:"",label:"H\u1EE7y",color:"grey"},null,512),[[V]]),n(I,{flat:"",label:"T\u1EA1o",color:"primary",onClick:e.createWithAI,loading:e.loading},null,8,["onClick","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var j=N(z,[["render",Y]]);const J={name:"ExportJsonButton",props:{data:{type:[Object,Array],required:!0}},setup(d){const t=R(),i=p(!1),e=p(!1),l=p("data");return{loading:i,showDialog:e,fileName:l,showExportDialog:()=>{e.value=!0},saveAsJson:async()=>{if(!l.value){t.notify({type:"warning",message:"Vui l\xF2ng nh\u1EADp t\xEAn file",position:"top"});return}i.value=!0;try{const c=JSON.stringify(d.data,null,2),o=new Blob([c],{type:"application/json"}),m=window.URL.createObjectURL(o),h=document.createElement("a");h.href=m,h.download=`${l.value}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(m),e.value=!1,t.notify({type:"positive",message:"File JSON \u0111\xE3 \u0111\u01B0\u1EE3c xu\u1EA5t th\xE0nh c\xF4ng",position:"top"})}catch(c){console.error("Error saving JSON:",c),t.notify({type:"negative",message:`L\u1ED7i khi xu\u1EA5t file: ${c.message}`,position:"top"})}finally{i.value=!1}}}}};function F(d,t,i,e,l,s){return g(),C("div",null,[n(I,{color:"primary",label:"Export JSON",icon:"download",onClick:e.showExportDialog,loading:e.loading},null,8,["onClick","loading"]),n(x,{modelValue:e.showDialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.showDialog=a)},{default:r(()=>[n(v,{style:{"min-width":"350px"}},{default:r(()=>[n(T,null,{default:r(()=>t[2]||(t[2]=[u("div",{class:"text-h6"},"Export JSON",-1)])),_:1}),n(T,null,{default:r(()=>[n(f,{modelValue:e.fileName,"onUpdate:modelValue":t[0]||(t[0]=a=>e.fileName=a),label:"T\xEAn file",rules:[a=>!!a||"Vui l\xF2ng nh\u1EADp t\xEAn file",a=>!a.includes("/")||"T\xEAn file kh\xF4ng \u0111\u01B0\u1EE3c ch\u1EE9a k\xFD t\u1EF1 /"]},{append:r(()=>t[3]||(t[3]=[u("div",{class:"text-grey-7"},".json",-1)])),_:1},8,["modelValue","rules"])]),_:1}),n(L,{align:"right"},{default:r(()=>[_(n(I,{flat:"",label:"H\u1EE7y",color:"grey"},null,512),[[V]]),n(I,{flat:"",label:"Xu\u1EA5t",color:"primary",onClick:e.saveAsJson},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var K=N(J,[["render",F]]);const X={name:"QuizGen",components:{CreateWithAIButton:j,ExportJsonButton:K},props:[],emits:["created"],setup(d,{emit:t}){const i=R(),{generateQuizPrompt:e}=Q(),l=p(""),s=p(""),a=p(""),c=p(""),o=p([{name:"Nh\u1EDB",count:0},{name:"Hi\u1EC3u",count:0},{name:"V\u1EADn d\u1EE5ng",count:0},{name:"Ph\xE2n t\xEDch",count:0},{name:"\u0110\xE1nh gi\xE1",count:0}]),m=U(()=>{const E=o.value.reduce((y,k)=>y+k.count,0);return l.value&&E>0});return{topic:l,language:s,additionalInfo:a,bloomLevels:o,result:c,isValid:m,generatePrompt:()=>e({topic:l.value,language:s.value,additionalInfo:a.value,bloomLevels:o.value}),handleQuizCreated:E=>{try{let y=E.substring(7,E.length-4).trim();console.log("Text Response",y),c.value=JSON.parse(y),t("created",c.value),i.notify({type:"positive",message:"T\u1EA1o quiz th\xE0nh c\xF4ng",position:"top"})}catch(y){console.error(y),i.notify({type:"negative",message:"Kh\xF4ng th\u1EC3 parse d\u1EEF li\u1EC7u th\xE0nh Object",position:"top"})}},handleError:E=>{console.error("L\u1ED7i khi t\u1EA1o quiz:",E),i.notify({type:"negative",message:"C\xF3 l\u1ED7i x\u1EA3y ra khi t\u1EA1o quiz",icon:"error"})}}}},W={class:"quiz-gen q-py-md"},Z={class:"col-12 row"},$={class:"col-12"},ee={class:"col-12 q-pb-md"},te={class:"col-12 q-pb-md"},ne={class:"col-12 grid-container q-pb-md"},oe={class:"row col-12 q-col-gutter-sm items-center"},ae={key:0,class:"col-12"};function ie(d,t,i,e,l,s){const a=b("CreateWithAIButton"),c=b("ExportJsonButton");return g(),C("div",W,[u("div",Z,[u("div",$,[n(f,{modelValue:e.topic,"onUpdate:modelValue":t[0]||(t[0]=o=>e.topic=o),filled:"",label:"Ch\u1EE7 \u0111\u1EC1",rules:[o=>!!o||"Vui l\xF2ng nh\u1EADp ch\u1EE7 \u0111\u1EC1"]},null,8,["modelValue","rules"])]),u("div",ee,[n(f,{modelValue:e.language,"onUpdate:modelValue":t[1]||(t[1]=o=>e.language=o),filled:"",label:"Ng\xF4n ng\u1EEF/C\xF4ng c\u1EE5"},null,8,["modelValue"])]),u("div",te,[n(f,{modelValue:e.additionalInfo,"onUpdate:modelValue":t[2]||(t[2]=o=>e.additionalInfo=o),type:"textarea",filled:"",autogrow:"",label:"Th\xF4ng tin b\u1ED5 sung"},null,8,["modelValue"])]),u("div",ne,[(g(!0),C(w,null,B(e.bloomLevels,o=>(g(),C("div",{key:o.name},[n(f,{modelValue:o.count,"onUpdate:modelValue":m=>o.count=m,modelModifiers:{number:!0},filled:"",type:"number",label:o.name,min:"0",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","label"])]))),128))]),u("div",oe,[n(a,{prompt:e.generatePrompt(),onCreated:e.handleQuizCreated,onError:e.handleError,label:"Gen Quiz",icon:"psychology",disabled:!e.isValid},null,8,["prompt","onCreated","onError","disabled"]),e.result?(g(),D(c,{key:0,data:e.result},null,8,["data"])):S("",!0)]),e.result?(g(),C("div",ae,[t[4]||(t[4]=u("div",{class:"text-h6"},"Result:",-1)),n(f,{modelValue:e.result,"onUpdate:modelValue":t[3]||(t[3]=o=>e.result=o),type:"textarea",filled:"",readonly:"",autogrow:""},null,8,["modelValue"])])):S("",!0)])])}var he=N(X,[["render",ie],["__scopeId","data-v-0f8beb6e"]]);export{he as A};
