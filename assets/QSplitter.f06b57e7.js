import{Q as p}from"./rtl.b46f6f6a.js";import{Q as D,a as g}from"./QItem.6bc26c25.js";import{h as X,X as u,Y as b,Z as t,q as a,a7 as c,a1 as n,a0 as m,ae as q,ad as S,a9 as T,aa as F,_ as I,F as R,$ as Y,r as V,a4 as Z,a6 as J,ac as K,y as W,E as ee,H as te,k as h,w as $,i as w,z as Q,M as ae,R as re,p as le,x as se}from"./index.45a17209.js";import{Q as x}from"./QList.b03fce79.js";import{Q as E}from"./QExpansionItem.cfeb4429.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{T as ne}from"./TouchPan.ee4f51ba.js";const oe=X({name:"GlossaryTerm",props:{term:{type:Object,required:!0},currentLang:{type:String,default:"vi"}}}),ie={class:"row items-center q-gutter-sm"},ue={class:"text-h6"},de={class:"q-mb-none"};function ce(e,s,r,d,C,f){return u(),b(S,{class:"glossary-term q-pa-sm",flat:"",bordered:""},{default:t(()=>[a(q,{class:"q-pb-none"},{default:t(()=>[c("div",ie,[c("div",ue,n(e.term[e.currentLang].term),1),a(p,{dense:"",color:"primary","text-color":"white",size:"sm"},{default:t(()=>[m(n(e.term[e.currentLang].category),1)]),_:1}),a(p,{dense:"",color:"secondary","text-color":"white",size:"sm"},{default:t(()=>[m(n(e.term[e.currentLang].group),1)]),_:1})])]),_:1}),a(q,{class:"q-pt-xs"},{default:t(()=>[c("p",de,n(e.term[e.currentLang].definition),1)]),_:1}),e.term[e.currentLang].examples?(u(),b(q,{key:0,class:"q-pt-none"},{default:t(()=>[a(x,{bordered:"",separator:""},{default:t(()=>[a(E,{group:"examples",icon:"code",label:"C\xE1ch s\u1EED d\u1EE5ng"},{default:t(()=>[a(S,null,{default:t(()=>[a(q,null,{default:t(()=>[a(x,null,{default:t(()=>[(u(!0),T(R,null,F(e.term[e.currentLang].examples.howto,(o,i)=>(u(),b(D,{key:i},{default:t(()=>[a(g,{avatar:""},{default:t(()=>[a(I,{color:"primary",name:"check_circle",size:"sm"})]),_:1}),a(g,null,{default:t(()=>[m(n(o),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),a(E,{group:"examples",icon:"public",label:"Ng\u1EEF c\u1EA3nh s\u1EED d\u1EE5ng"},{default:t(()=>[a(S,null,{default:t(()=>[a(q,null,{default:t(()=>[a(x,null,{default:t(()=>[(u(!0),T(R,null,F(e.term[e.currentLang].examples.context,(o,i)=>(u(),b(D,{key:i},{default:t(()=>[a(g,{avatar:""},{default:t(()=>[a(I,{color:"secondary",name:"info",size:"sm"})]),_:1}),a(g,null,{default:t(()=>[m(n(o),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):Y("",!0)]),_:1})}var me=P(oe,[["render",ce]]);const fe={name:"GlossaryItem",components:{GlossaryTerm:me},props:{term:{type:Object,required:!0},currentLang:{type:String,required:!0},displayMode:{type:String,required:!0,validator:e=>["list","chip"].includes(e)}},setup(){return{showTermDetails:V(!1)}}},_e={class:"glossary-item"},ve={class:"row items-center"},ye={class:"col"},he={class:"col-auto q-ml-sm"},ge={class:"row items-center"};function be(e,s,r,d,C,f){const o=Z("GlossaryTerm");return u(),T("div",_e,[r.displayMode==="list"?(u(),b(D,{key:0},{default:t(()=>[a(g,null,{default:t(()=>[c("div",ve,[c("div",ye,n(r.term[r.currentLang].term),1),c("div",he,[a(p,{dense:"",size:"sm",color:"primary","text-color":"white"},{default:t(()=>[m(n(r.term[r.currentLang].category),1)]),_:1}),a(p,{dense:"",size:"sm",color:"secondary","text-color":"white"},{default:t(()=>[m(n(r.term[r.currentLang].group),1)]),_:1})])])]),_:1}),a(g,{side:""},{default:t(()=>[c("div",ge,[a(J,{flat:"",round:"",color:"info",icon:"search",onClick:s[0]||(s[0]=i=>d.showTermDetails=!0)})])]),_:1})]),_:1})):(u(),b(p,{key:1,clickable:"",onClick:s[1]||(s[1]=i=>d.showTermDetails=!0)},{default:t(()=>[m(n(r.term[r.currentLang].term)+" ",1),a(I,{name:"search",class:"q-ml-sm"})]),_:1})),a(K,{modelValue:d.showTermDetails,"onUpdate:modelValue":s[2]||(s[2]=i=>d.showTermDetails=i)},{default:t(()=>[a(o,{term:r.term,"current-lang":r.currentLang},null,8,["term","current-lang"])]),_:1},8,["modelValue"])])}var Le=P(fe,[["render",be],["__scopeId","data-v-16433c32"]]),Se=W({name:"QSplitter",props:{...ee,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:s,emit:r}){const{proxy:{$q:d}}=le(),C=te(e,d),f=V(null),o={before:V(null),after:V(null)},i=h(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(C.value===!0?" q-splitter--dark":"")),k=h(()=>e.horizontal===!0?"height":"width"),B=h(()=>e.reverse!==!0?"before":"after"),_=h(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function M(l){return(e.unit==="%"?l:Math.round(l))+e.unit}const G=h(()=>({[B.value]:{[k.value]:M(e.modelValue)}}));let N,z,j,A,v;function H(l){if(l.isFirst===!0){const L=f.value.getBoundingClientRect()[k.value];N=e.horizontal===!0?"up":"left",z=e.unit==="%"?100:L,j=Math.min(z,_.value[1],Math.max(_.value[0],e.modelValue)),A=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:d.lang.rtl===!0?-1:1)*(e.unit==="%"?L===0?0:100/L:1),f.value.classList.add("q-splitter--active");return}if(l.isFinal===!0){v!==e.modelValue&&r("update:modelValue",v),f.value.classList.remove("q-splitter--active");return}const y=j+A*(l.direction===N?-1:1)*l.distance[e.horizontal===!0?"y":"x"];v=Math.min(z,_.value[1],Math.max(_.value[0],y)),o[B.value].value.style[k.value]=M(v),e.emitImmediately===!0&&e.modelValue!==v&&r("update:modelValue",v)}const U=h(()=>[[ne,H,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function O(l,y){l<y[0]?r("update:modelValue",y[0]):l>y[1]&&r("update:modelValue",y[1])}return $(()=>e.modelValue,l=>{O(l,_.value)}),$(()=>e.limits,()=>{se(()=>{O(e.modelValue,_.value)})}),()=>{const l=[w("div",{ref:o.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:G.value.before},Q(s.before)),w("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[ae("div",{class:"q-splitter__separator-area absolute-full"},Q(s.separator),"sep",e.disable!==!0,()=>U.value)]),w("div",{ref:o.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:G.value.after},Q(s.after))];return w("div",{class:i.value,ref:f},re(s.default,l))}}});export{Le as G,Se as Q,me as a};