import{a as P,Q as O}from"./QTable.9a95a612.js";import{h as V,ck as M,aF as x,k as v,o as H,X as g,a9 as y,q as a,Z as d,a0 as C,a1 as w,F as A,aa as B,Y as q,a6 as $,$ as Y,a7 as n,_ as N,ad as L,ae as D,a4 as T}from"./index.45a17209.js";import{Q as K}from"./QTr.a0b76876.js";import{u as U}from"./use-quasar.91c97ee6.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{Q}from"./QSelect.98935f96.js";import{Q as z}from"./QSpinnerHourglass.bb02cb90.js";import"./QList.b03fce79.js";import"./QMarkupTable.b1422104.js";import"./QLinearProgress.3eb9fb70.js";import"./use-fullscreen.9e013b55.js";import"./rtl.b46f6f6a.js";import"./QItem.6bc26c25.js";import"./selection.eae1b1a4.js";import"./format.8ac60962.js";const j=V({name:"SoTPackageVersionTable",setup(){const e=M(),o=U(),{filters:u,sotPackageVersionByLesson:m,uniqueCourseId:c,uniqueModuleId:p}=x(e),s=["lessonProject","lessonInfo","lessonPlan","lessonSlide","lessonQuiz"],r=[{name:"lessonId",label:"Lesson ID",align:"left",style:"width: 20%;",headerStyle:"width: 20%;",field:l=>l.lessonId,sortable:!0},...s.map(l=>({name:l,label:l.charAt(0).toUpperCase()+l.slice(1),align:"center",style:`width: ${80/s.length}%;`,headerStyle:`width: ${80/s.length}%;`,field:_=>{var f;return(f=_[l])==null?void 0:f.latestVersion}}))],t=v(()=>Array.from(c.value).map(l=>({label:l,value:l}))),i=v(()=>Array.from(p.value).map(l=>({label:l,value:l}))),S=v(()=>m.value.filter(l=>{var b,E,R,F;const _=!((b=u.value)!=null&&b.courseId)||l.courseId.toLowerCase().includes((E=u.value.courseId)==null?void 0:E.value.toLowerCase()),f=!((R=u.value)!=null&&R.moduleId)||l.moduleId.toLowerCase().includes((F=u.value.moduleId)==null?void 0:F.value.toLowerCase());return _&&f})),h=(l,_)=>{var f;return((f=l[_])==null?void 0:f.highestVersion)>0},I=async()=>{try{if(!u.value.schoolId)throw new Error("School ID cannot be empty!");await e.getSoTPackageData(u.value.schoolId.value),e.resetFilters(),o.notify({type:"positive",message:"T\u1EA3i d\u1EEF li\u1EC7u th\xE0nh c\xF4ng"})}catch(l){console.error("L\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u:",l),o.notify({type:"negative",message:`L\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u: ${l.message}`})}};return H(async()=>{await I()}),{filters:u,displayedRows:S,loadSoTData:I,courseOptions:t,moduleOptions:i,reportStore:e,columns:r,documentTypes:s,shouldShowVersion:h,schoolOptions:[{label:"ESH",value:"ESH"},{label:"TEKY",value:"TEKY"}]}}}),X={key:0,class:"row full-width"},Z={class:"full-width row flex-center q-gutter-sm q-pa-lg text-grey-7"};function G(e,o,u,m,c,p){return g(),y("div",null,[a(O,{title:"Package Version",class:"my-sticky-header-table",rows:e.displayedRows,columns:e.columns,"row-key":"lessonId",loading:e.reportStore.isLoading,flat:"",bordered:"","virtual-scroll":"","rows-per-page-options":[0,20]},{body:d(s=>[a(K,{props:s},{default:d(()=>[a(P,{key:"lessonId",class:"text-left"},{default:d(()=>[C(w(s.row.lessonId),1)]),_:2},1024),(g(!0),y(A,null,B(e.documentTypes,r=>(g(),q(P,{key:r,class:"text-center"},{default:d(()=>{var t;return[e.shouldShowVersion(s.row,r)?(g(),y("div",X,[a($,{class:"col-6",color:"purple-3","text-color":"white",dense:"","no-caps":"",unelevated:""},{default:d(()=>{var i;return[C(w((i=s.row[r])==null?void 0:i.highestVersion),1)]}),_:2},1024),a($,{class:"col-6",color:(t=s.row[r])!=null&&t.latestVersion?"green-3":"grey-3",dense:"","no-caps":"",unelevated:""},{default:d(()=>{var i;return[C(w(((i=s.row[r])==null?void 0:i.latestVersion)||"0"),1)]}),_:2},1032,["color"])])):Y("",!0)]}),_:2},1024))),128))]),_:2},1032,["props"])]),"no-data":d(()=>[n("div",Z,[a(N,{size:"2em",name:"warning"}),o[0]||(o[0]=n("span",null,"Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u",-1))])]),_:1},8,["rows","columns","loading"])])}var J=k(j,[["render",G]]);const W={name:"SoTPackageInfo",setup(){const e=M(),{filters:o,uniqueCourseId:u,uniqueModuleId:m}=x(e),c=["lessonProject","lessonInfo","lessonPlan","lessonSlide","lessonQuiz"],p=v(()=>{const t=e.docLatestInfo,i=e.docHighestInfo,S=[];for(const h in t)for(const I in t[h]){const l=`${h}-${I}`,_={},f={};c.forEach(b=>{_[b]=t[h][I][b]||0,f[b]=i[h][I][b]||0}),S.push({fullModuleId:l,highestDocCount:f,latestDocCount:_})}return S.length>0?S:[]}),s=v(()=>p.value.filter(t=>{var l,_,f;const[i,S]=t.fullModuleId.split("-"),h=!((l=o.value)!=null&&l.courseId)||i.toLowerCase().includes(o.value.courseId.value.toLowerCase());if(!((_=o.value)!=null&&_.moduleId))return h;const I=!((f=o.value)!=null&&f.moduleId)||S.toLowerCase().includes(o.value.moduleId.value.toLowerCase());return h&&I})),r=[{name:"fullModuleId",label:"Module Id",align:"left",field:t=>t.fullModuleId,style:"width: 20%;",headerStyle:"width: 20%;",sortable:!0},...c.map(t=>({name:t,label:t.charAt(0).toUpperCase()+t.slice(1),align:"center",style:`width: ${80/c.length}%;`,headerStyle:`width: ${80/c.length}%;`,field:i=>({highest:i.highestDocCount[t]||0,latest:i.latestDocCount[t]||0})}))];return{docTypes:c,reportStore:e,filters:o,tableRows:p,displayedRows:s,columns:r}}},ee={class:"row full-width"};function oe(e,o,u,m,c,p){return g(),q(O,{title:"Package Count",class:"my-sticky-header-table",rows:m.displayedRows,columns:m.columns,"row-key":"fullModuleId",loading:m.reportStore.isLoading,flat:"",bordered:"","virtual-scroll":"","rows-per-page-options":[0,20]},{body:d(s=>[a(K,{props:s},{default:d(()=>[a(P,{key:"fullModuleId",class:"text-left"},{default:d(()=>[C(w(s.row.fullModuleId),1)]),_:2},1024),(g(!0),y(A,null,B(m.docTypes,r=>(g(),q(P,{key:r,class:"text-center"},{default:d(()=>[n("div",ee,[a($,{class:"col-6",color:s.row.highestDocCount[r]?"pink-3":"grey-3",dense:"","no-caps":"",unelevated:""},{default:d(()=>[C(w(s.row.highestDocCount[r]||0),1)]),_:2},1032,["color"]),a($,{class:"col-6",color:s.row.latestDocCount[r]?"cyan-3":"grey-3",dense:"","no-caps":"",unelevated:""},{default:d(()=>[C(w(s.row.latestDocCount[r]||0),1)]),_:2},1032,["color"])])]),_:2},1024))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])}var se=k(W,[["render",oe],["__scopeId","data-v-3651f0b5"]]);const te=V({name:"SoTPackageFilter",setup(){const e=M(),o=U(),{filters:u,uniqueCourseId:m,uniqueModuleId:c}=x(e),p=v(()=>Array.from(m.value).map(t=>({label:t,value:t}))),s=v(()=>Array.from(c.value).map(t=>({label:t,value:t}))),r=async()=>{try{if(!u.value.schoolId)throw new Error("School ID cannot be empty!");await e.getSoTPackageData(u.value.schoolId.value),e.resetFilters(),o.notify({type:"positive",message:"T\u1EA3i d\u1EEF li\u1EC7u th\xE0nh c\xF4ng"})}catch(t){console.error("L\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u:",t),o.notify({type:"negative",message:`L\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u: ${t.message}`})}};return H(async()=>{await r()}),{filters:u,loadSoTData:r,courseOptions:p,moduleOptions:s,reportStore:e,schoolOptions:[{label:"ESH",value:"ESH"},{label:"TEKY",value:"TEKY"}]}}}),le={class:"row q-col-gutter-md items-center q-mb-sm"},ae={class:"col-12 col-sm-4"},ne={class:"col-12 col-sm-4"},re={class:"row q-col-gutter-md items-center q-mb-sm"},de={class:"col-12 col-sm-4"},ue={class:"col-12 col-sm-4"};function ie(e,o,u,m,c,p){return g(),y("div",null,[n("div",le,[n("div",ae,[a(Q,{modelValue:e.filters.schoolId,"onUpdate:modelValue":o[0]||(o[0]=s=>e.filters.schoolId=s),options:e.schoolOptions,label:"M\xE3 Tr\u01B0\u1EDDng",outlined:"",dense:"",clearable:""},null,8,["modelValue","options"])]),n("div",ne,[a($,{color:"primary",icon:"refresh",label:"T\u1EA3i d\u1EEF li\u1EC7u",loading:e.reportStore.isLoading,onClick:e.loadSoTData,class:"full-width",flat:""},{loading:d(()=>[a(z,{class:"on-left"}),o[3]||(o[3]=C(" \u0110ang t\u1EA3i... "))]),_:1},8,["loading","onClick"])])]),n("div",re,[n("div",de,[a(Q,{modelValue:e.filters.courseId,"onUpdate:modelValue":o[1]||(o[1]=s=>e.filters.courseId=s),options:e.courseOptions,label:"Course ID",outlined:"",dense:"",clearable:""},null,8,["modelValue","options"])]),n("div",ue,[a(Q,{modelValue:e.filters.moduleId,"onUpdate:modelValue":o[2]||(o[2]=s=>e.filters.moduleId=s),options:e.moduleOptions,label:"Module ID",outlined:"",dense:"",clearable:""},null,8,["modelValue","options"])])])])}var ce=k(te,[["render",ie]]);const me=V({name:"SoTPackageStatCourse",setup(){const e=M(),o=v(()=>e.uniqueCourseId.length),u=v(()=>e.uniqueModuleId.length);return{uniqueCourseCount:o,uniqueModuleCount:u}}}),fe={class:"stats-grid q-mt-md"},pe={class:"text-h4 text-center"},_e={class:"text-h4 text-center"};function ge(e,o,u,m,c,p){return g(),q(L,{class:"stat-card"},{default:d(()=>[a(D,null,{default:d(()=>[o[2]||(o[2]=n("div",{class:"text-h6"},"Course & Module Statistics",-1)),n("div",fe,[a(L,{class:"stat-box"},{default:d(()=>[a(D,null,{default:d(()=>[o[0]||(o[0]=n("div",{class:"text-subtitle2"},"#Courses",-1)),n("div",pe,w(e.uniqueCourseCount),1)]),_:1})]),_:1}),a(L,{class:"stat-box"},{default:d(()=>[a(D,null,{default:d(()=>[o[1]||(o[1]=n("div",{class:"text-subtitle2"},"#Modules",-1)),n("div",_e,w(e.uniqueModuleCount),1)]),_:1})]),_:1})])]),_:1})]),_:1})}var he=k(me,[["render",ge],["__scopeId","data-v-bc5056c0"]]);const ve=V({name:"ReportPage",components:{SoTPackageVersionTable:J,SoTPackageInfo:se,SoTPackageFilter:ce,SoTPackageStatCourse:he}}),Ie={class:"report-container q-pa-md"},we={class:"row q-col-gutter-md"},Se={class:"col-12 col-md-9"},be={class:"q-mb-sm"},Ce={class:"q-mb-sm"},ye={class:"q-mb-sm"},$e={class:"col-12 col-md-3"};function ke(e,o,u,m,c,p){const s=T("SoTPackageFilter"),r=T("SoTPackageInfo"),t=T("SoTPackageVersionTable"),i=T("SoTPackageStatCourse");return g(),y("div",Ie,[o[0]||(o[0]=n("h2",{class:"text-h4 q-mb-sm"},"Report Page",-1)),n("div",we,[n("div",Se,[n("div",be,[a(s)]),n("div",Ce,[a(r)]),n("div",ye,[a(t)])]),n("div",$e,[a(i)])])])}var Be=k(ve,[["render",ke],["__scopeId","data-v-23c8fc94"]]);export{Be as default};