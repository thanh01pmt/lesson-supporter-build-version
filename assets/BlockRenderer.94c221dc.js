import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as f,l as k,w as h,o as y,X as b,a9 as v,x as L}from"./index.45a17209.js";const S={name:"BlockRenderer",props:{script:{type:String,default:""},blockStyle:{type:String,default:"scratch3"},fromLang:{type:String,default:"en"},toLang:{type:String,default:null}},setup(e,{emit:o}){const t=f(null),a=k("scratchblocks"),r=()=>{if(!(!t.value||!e.script)){t.value.innerHTML="";try{const n={languages:[]};e.fromLang==="en"?n.languages.push("en","vi"):e.fromLang==="vi"&&n.languages.push("vi","en"),console.log("Trying translate...");const l=a.parse(e.script,n);e.toLang&&a.allLanguages.hasOwnProperty(e.toLang)&&l.translate(a.allLanguages[e.toLang]),L(()=>{const i={style:e.blockStyle==="scratch3"?"scratch3":e.blockStyle,scale:/^scratch3($|-)/.test(e.blockStyle)?.675:1},c=a.newView(l,i),s=c.render();s.classList.add("scratchblocks-style-"+e.blockStyle),t.value.appendChild(s);const g=c.exportSVG();c.exportPNG(u=>{o("rendered",g,u)},3)})}catch(n){console.error("Error rendering blocks:",n),t.value&&(t.value.textContent="Error rendering blocks. Check the console for details.")}}};return h([()=>e.script,()=>e.blockStyle,()=>e.fromLang,()=>e.toLang],r),y(r),{blockContainer:t}}},m={ref:"blockContainer"};function _(e,o,t,a,r,n){return b(),v("div",m,null,512)}var B=d(S,[["render",_]]);export{B};