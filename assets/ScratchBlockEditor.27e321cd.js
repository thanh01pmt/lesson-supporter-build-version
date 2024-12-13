import{Q as L}from"./QPage.dd3f97b6.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{r as f,l as $,w as y,o as _,U as c,a7 as k,W as p,br as C,h as V,p as B,q as u,X as S,a4 as w,Z as b,a2 as h,a5 as d,c2 as D}from"./index.9b9d7fe8.js";import{Q as x}from"./QSelect.b25dbefc.js";import{Q as E}from"./QBtnGroup.f0b8d9b4.js";import"./rtl.0c6c3099.js";import"./QItem.c2eea8eb.js";import"./selection.bb4863da.js";import"./format.8ac60962.js";const I={name:"BlockRenderer",props:{script:{type:String,default:""},style:{type:String,default:"scratch3"},fromLang:{type:String,default:"en"},toLang:{type:String,default:null}},setup(e,{emit:s}){const o=f(null),a=$("scratchblocks"),t=()=>{if(!(!o.value||!e.script)){o.value.innerHTML="";try{const n={languages:[]};e.fromLang==="en"?n.languages.push("en","vi"):e.fromLang==="vi"&&n.languages.push("vi","en"),console.log("Trying translate...");const r=a.parse(e.script,n);e.toLang&&a.allLanguages.hasOwnProperty(e.toLang)&&r.translate(a.allLanguages[e.toLang]);const l=a.newView(r,{style:e.style,scale:/^scratch3($|-)/.test(e.style)?.675:1}),i=l.render();i.classList.add("scratchblocks-style-"+e.style),o.value.appendChild(i);const v=l.exportSVG();l.exportPNG(m=>{s("rendered",v,m)},3)}catch(n){console.error("Error rendering blocks:",n),o.value&&(o.value.textContent="Error rendering blocks. Check the console for details.")}}};return y([()=>e.script,()=>e.style,()=>e.fromLang,()=>e.toLang],t),_(t),{blockContainer:o}}},q={ref:"blockContainer"};function O(e,s,o,a,t,n){return c(),k("div",q,null,512)}var Q=g(I,[["render",O]]);const R={name:"CodeEditor",props:{value:String},data(){return{code:this.value}},watch:{code:"emitInput",value:"updateCode"},methods:{emitInput(){this.$emit("input",this.code)},updateCode(e){this.code=e}}};function z(e,s,o,a,t,n){return c(),p(C,{modelValue:t.code,"onUpdate:modelValue":s[0]||(s[0]=r=>t.code=r),type:"textarea",filled:"",autogrow:"",placeholder:". . ."},null,8,["modelValue"])}var G=g(R,[["render",z]]);const N={name:"StyleSelector",props:{value:{type:String,default:"scratch3"}},data(){return{selectedStyle:this.value,styleOptions:[{label:"Scratch 2.0",value:"scratch2"},{label:"Scratch 3.0",value:"scratch3"},{label:"Scratch 3.0 (high-contrast)",value:"scratch3-high-contrast"}]}},watch:{value(e){this.selectedStyle=e},selectedStyle(e){this.$emit("input",e)}},methods:{emitStringValue(e){this.$emit("input",e.value)}}};function P(e,s,o,a,t,n){return c(),p(x,{modelValue:t.selectedStyle,"onUpdate:modelValue":s[0]||(s[0]=r=>t.selectedStyle=r),options:t.styleOptions,label:"Style",filled:"","emit-value":"","map-options":"",onInput:n.emitStringValue},null,8,["modelValue","options","onInput"])}var H=g(N,[["render",P]]);const T=V({name:"LanguageSelector",props:{value:{type:String,default:"en"}},setup(e,{emit:s}){const o=f(e.value),a=f([]);return _(()=>{const n=B().appContext.config.globalProperties.$scratchblocks;if(n){const r=Object.keys(n.allLanguages);r.sort(),a.value=r.map(l=>{const i=n.allLanguages[l];return{label:i.name||i.altName||"English",value:l}})}else console.error("$scratchblocks is not defined")}),y(o,t=>{s("input",t)}),y(()=>e.value,t=>{o.value=t}),{selectedLanguage:o,languageOptions:a}}});function U(e,s,o,a,t,n){return c(),p(x,{modelValue:e.selectedLanguage,"onUpdate:modelValue":s[0]||(s[0]=r=>e.selectedLanguage=r),options:e.languageOptions,label:"Language",filled:"","emit-value":"","map-options":""},null,8,["modelValue","options"])}var j=g(T,[["render",U]]);const M={name:"ExportButtons",props:{svgData:String,pngData:String}};function W(e,s,o,a,t,n){return c(),k("div",null,[u(E,{flat:"",spread:""},{default:S(()=>[o.svgData?(c(),p(w,{key:0,href:o.svgData,download:"scratchblocks.svg",label:"Export SVG",color:"green-5"},null,8,["href"])):b("",!0),o.pngData?(c(),p(w,{key:1,href:o.pngData,download:"scratchblocks.png",label:"Export PNG",color:"teal-5"},null,8,["href"])):b("",!0)]),_:1})])}var X=g(M,[["render",W]]);const Z={name:"ScratchBlockEditor",components:{BlockRenderer:Q,CodeEditor:G,StyleSelector:H,LanguageSelector:j,ExportButtons:X},props:{initialScript:{type:String,default:`move (10) steps
turn cw (15) degrees
turn cw (15) degrees
turn cw (15) degrees
turn ccw (15) degrees
turn ccw (15) degrees
turn ccw (15) degrees

point in direction (90 v)
point towards [ v]

go to x: (0) y: (0)
go to [mouse-pointer v]
glide (1) secs to x: (0) y: (0)

change x by (10)
set x to (0)
change y by (10)
set y to (0)

if on edge, bounce

set rotation style [left-right v]

(x position)

(y position)

(direction)

say [Hello!] for (2) seconds
say [Hello!]
think [Hmm...] for (2) seconds
think [Hmm...]

show
hide

switch costume to [costume1 v]
next costume
switch backdrop to [backdrop1 v]

change [color v] effect by (25)
set [color v] effect to (0)
clear graphic effects

change size by (10)
set size to (100) %

go to front
go back (1) layers

(costume #)

(backdrop name)

(size)

switch backdrop to [backdrop1 v] and wait
next backdrop

(backdrop #)

start sound [pop v]
play sound [pop v] until done
stop all sounds

play drum (1 v) for (0.2) beats
rest for (0.2) beats

play note (60 v) for (0.5) beats
set instrument to (1 v)

change volume by (-10)
set volume to (100) %

(volume)

change tempo by (20)
set tempo to (60) bpm

(tempo)

erase all

stamp

pen down
pen up

set pen color to [#f0f]
change pen color by (10)
set pen color to (0)

change pen shade by (10)
set pen shade to (50)

change pen size by (1)
set pen size to (1)

set [var v] to [0]
change [var v] by (1)
show variable [var v]
hide variable [var v]

add [thing] to [list v]

delete (1 v) of [list v]
insert [thing] at (1 v) of [list v]
replace item (1 v) of [list v] with [thing]

(item (1 v) of [list v])

(length of [list v])

<[list v] contains [thing] ?>

show list [list v]
hide list [list v]

when flag clicked

when flag clicked

when flag clicked

when flag clicked

when [space v] key pressed

when this sprite clicked

when backdrop switches to [backdrop1 v]

when [loudness v] > (10)

when I receive [message1 v]
broadcast [message1 v]
broadcast [message1 v] and wait

wait (1) seconds

repeat (10)
end

forever
end

if <> then
end

if <> then 
  
else
end

wait until <>

repeat until <>
end

stop [all v]

stop [this script v]

stop [other scripts in sprite v]

stop [other scripts in stage v]

when I start as a clone
create clone of [myself v]
delete this clone

<touching [ v] ?>

<touching color [#f0f] ?>

<color [#f0f] is touching [#0f0] ?>

(distance to [ v])

ask [What's your name?] and wait

(answer)

<key [space v] pressed?>

<mouse down?>

(mouse x)

(mouse y)

(loudness)

(video [motion v] on [this sprite v])

turn video [on v]
set video transparency to (50) %

(timer)

reset timer

([x position v] of [Sprite1 v])

(current [minute v])

(days since 2000)

(username)

(user id)

(() + ())

(() - ())

(() * ())

(() / ())

(pick random (1) to (10))

<[] < []>

<[] = []>

<[] > []>

<[] < []>

<[] > []>

<<> and <>>

<<> or <>>

<not <>>

(join [hello ] [world])

(letter (1) of [world])

(length of [world])

(() mod ())

(round ())

([sqrt v] of (9))

when [button pressed v]

when [slider v] [> v] (50)

<sensor [button pressed v] ?>

([slider v] sensor value)

turn [motor v] on for (1) secs

turn [motor v] on

turn [motor v] off

set [motor v] power to (100)

set [motor v] direction to [this way v]

when distance [< v] (20)

when tilt [= v] (20)

(distance)

(tilt)

turn [motor v] on for (1) seconds

turn [motor v] on

turn [motor v] off

set [motor v] power to (100)

set [motor v] direction to [this way v]

set light color to (50)

play note (60 v) for (0.5) seconds

when distance [< v] (50)

when tilted

(distance)

(tilt [up-down v])

switch to costume [costume1 v]

switch to background [background1 v]
next background

(background #)

if <>
end

forever if <>
end

stop script

stop all

when Sprite1 clicked

<loud?>

. . .
. . .
. . .`}},data(){return{script:this.initialScript,style:"scratch3",language:"en",fromLanguage:"en",toLanguage:"en",svgData:null,pngData:null}},methods:{updateScript(e){this.script=e,this.$emit("update:script",this.script)},updateStyle(e){this.style=e},updateLanguage(e){this.fromLanguage=this.toLanguage,this.language=e,this.toLanguage=e,this.updateTranslatedScript()},updateTranslatedScript(){if(this.script&&this.$scratchblocks.allLanguages.hasOwnProperty(this.toLanguage)){const e=this.$scratchblocks.parse(this.script,{languages:[this.fromLanguage,this.toLanguage]});e.translate(this.$scratchblocks.allLanguages[this.toLanguage]),this.script=e.stringify()}},handleRendered(e,s){console.log(s),this.svgData=e,this.pngData=s}},mounted(){}},A={class:"row q-pb-sm"},F={class:"col-3 q-px-xs"},J={class:"col-3 q-px-xs"},K={class:"col-6 q-px-xs"},Y={class:"row q-pb-sm"},ee={class:"col-6 q-px-xs"},te={class:"col-6 q-px-xs"};function oe(e,s,o,a,t,n){const r=h("StyleSelector"),l=h("LanguageSelector"),i=h("ExportButtons"),v=h("CodeEditor"),m=h("BlockRenderer");return c(),p(L,{padding:""},{default:S(()=>[d("div",A,[d("div",F,[u(r,{value:t.style,onInput:n.updateStyle},null,8,["value","onInput"])]),d("div",J,[u(l,{value:t.language,onInput:n.updateLanguage},null,8,["value","onInput"])]),d("div",K,[u(i,{svgData:t.svgData,pngData:t.pngData},null,8,["svgData","pngData"])])]),d("div",Y,[d("div",ee,[u(v,{value:t.script,onInput:n.updateScript},null,8,["value","onInput"])]),d("div",te,[u(m,{script:t.script,"from-lang":t.fromLanguage,"to-lang":t.toLanguage,style:D(t.style),onRendered:n.handleRendered},null,8,["script","from-lang","to-lang","style","onRendered"])])])]),_:1})}var pe=g(Z,[["render",oe]]);export{pe as default};
