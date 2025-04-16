import{Q as S}from"./QPage.a2da79f2.js";import{B as x}from"./BlockRenderer.f5903b8a.js";import{X as c,Y as d,bs as L,h as B,r as v,o as D,w as m,p as V,a9 as $,q as i,Z as w,a6 as f,$ as y,a4 as p,a7 as l}from"./index.037f850d.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as b}from"./QSelect.70047d12.js";import{Q as E}from"./QBtnGroup.06ca08ed.js";import"./rtl.ad3ba425.js";import"./QItem.a6e550b6.js";import"./selection.b5503321.js";import"./format.8ac60962.js";const I={name:"CodeEditor",props:{value:String},data(){return{code:this.value}},watch:{code:"emitInput",value:"updateCode"},methods:{emitInput(){this.$emit("input",this.code)},updateCode(e){this.code=e}}};function C(e,o,n,r,t,s){return c(),d(L,{modelValue:t.code,"onUpdate:modelValue":o[0]||(o[0]=a=>t.code=a),type:"textarea",filled:"",autogrow:"",placeholder:". . ."},null,8,["modelValue"])}var q=u(I,[["render",C]]);const Q={name:"StyleSelector",props:{value:{type:String,default:"scratch3"}},data(){return{selectedStyle:this.value,styleOptions:[{label:"Scratch 2.0",value:"scratch2"},{label:"Scratch 3.0",value:"scratch3"},{label:"Scratch 3.0 (high-contrast)",value:"scratch3-high-contrast"}]}},watch:{value(e){this.selectedStyle=e},selectedStyle(e){this.$emit("input",e)}},methods:{emitStringValue(e){this.$emit("input",e.value)}}};function R(e,o,n,r,t,s){return c(),d(b,{modelValue:t.selectedStyle,"onUpdate:modelValue":o[0]||(o[0]=a=>t.selectedStyle=a),options:t.styleOptions,label:"Style",filled:"","emit-value":"","map-options":"",onInput:s.emitStringValue},null,8,["modelValue","options","onInput"])}var O=u(Q,[["render",R]]);const z=B({name:"LanguageSelector",props:{value:{type:String,default:"en"}},setup(e,{emit:o}){const n=v(e.value),r=v([]);return D(()=>{const s=V().appContext.config.globalProperties.$scratchblocks;if(s){const a=Object.keys(s.allLanguages);a.sort(),r.value=a.map(g=>{const h=s.allLanguages[g];return{label:h.name||h.altName||"English",value:g}})}else console.error("$scratchblocks is not defined")}),m(n,t=>{o("input",t)}),m(()=>e.value,t=>{n.value=t}),{selectedLanguage:n,languageOptions:r}}});function N(e,o,n,r,t,s){return c(),d(b,{modelValue:e.selectedLanguage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.selectedLanguage=a),options:e.languageOptions,label:"Language",filled:"","emit-value":"","map-options":""},null,8,["modelValue","options"])}var H=u(z,[["render",N]]);const P={name:"ExportButtons",props:{svgData:String,pngData:String}};function G(e,o,n,r,t,s){return c(),$("div",null,[i(E,{flat:"",spread:""},{default:w(()=>[n.svgData?(c(),d(f,{key:0,href:n.svgData,download:"scratchblocks.svg",label:"Export SVG",color:"green-5"},null,8,["href"])):y("",!0),n.pngData?(c(),d(f,{key:1,href:n.pngData,download:"scratchblocks.png",label:"Export PNG",color:"teal-5"},null,8,["href"])):y("",!0)]),_:1})])}var U=u(P,[["render",G]]);const j={name:"ScratchBlockEditor",components:{BlockRenderer:x,CodeEditor:q,StyleSelector:O,LanguageSelector:H,ExportButtons:U},props:{initialScript:{type:String,default:`move (10) steps
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
. . .`}},data(){return{script:this.initialScript,style:"scratch3",language:"en",fromLanguage:"en",toLanguage:"en",svgData:null,pngData:null}},methods:{updateScript(e){this.script=e,this.$emit("update:script",this.script)},updateStyle(e){this.style=e},updateLanguage(e){this.fromLanguage=this.toLanguage,this.language=e,this.toLanguage=e,this.updateTranslatedScript()},updateTranslatedScript(){if(this.script&&this.$scratchblocks.allLanguages.hasOwnProperty(this.toLanguage)){const e=this.$scratchblocks.parse(this.script,{languages:[this.fromLanguage,this.toLanguage]});e.translate(this.$scratchblocks.allLanguages[this.toLanguage]),this.script=e.stringify()}},handleRendered(e,o){console.log(o),this.svgData=e,this.pngData=o}},mounted(){}},T={class:"row q-pb-sm"},M={class:"col-3 q-px-xs"},W={class:"col-3 q-px-xs"},X={class:"col-6 q-px-xs"},Y={class:"row q-pb-sm"},Z={class:"col-6 q-px-xs"},A={class:"col-6 q-px-xs"};function F(e,o,n,r,t,s){const a=p("StyleSelector"),g=p("LanguageSelector"),h=p("ExportButtons"),_=p("CodeEditor"),k=p("BlockRenderer");return c(),d(S,{padding:""},{default:w(()=>[l("div",T,[l("div",M,[i(a,{value:t.style,onInput:s.updateStyle},null,8,["value","onInput"])]),l("div",W,[i(g,{value:t.language,onInput:s.updateLanguage},null,8,["value","onInput"])]),l("div",X,[i(h,{svgData:t.svgData,pngData:t.pngData},null,8,["svgData","pngData"])])]),l("div",Y,[l("div",Z,[i(_,{value:t.script,onInput:s.updateScript},null,8,["value","onInput"])]),l("div",A,[i(k,{script:t.script,"from-lang":t.fromLanguage,"to-lang":t.toLanguage,"block-style":t.style,onRendered:s.handleRendered},null,8,["script","from-lang","to-lang","block-style","onRendered"])])])]),_:1})}var ce=u(j,[["render",F]]);export{ce as default};
