const l2=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),tT={},r2="/",ge=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${r2}${n}`,n in tT)return;tT[n]=!0;const a=n.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":l2,a||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),a)return new Promise((l,r)=>{i.addEventListener("load",l),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rm(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const Je={},Co=[],Cs=()=>{},c2=()=>!1,fp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cm=t=>t.startsWith("onUpdate:"),ht=Object.assign,pm=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},p2=Object.prototype.hasOwnProperty,Oe=(t,e)=>p2.call(t,e),Ie=Array.isArray,Ao=t=>zl(t)==="[object Map]",lI=t=>zl(t)==="[object Set]",u2=t=>zl(t)==="[object RegExp]",Be=t=>typeof t=="function",nt=t=>typeof t=="string",da=t=>typeof t=="symbol",Ze=t=>t!==null&&typeof t=="object",rI=t=>(Ze(t)||Be(t))&&Be(t.then)&&Be(t.catch),cI=Object.prototype.toString,zl=t=>cI.call(t),d2=t=>zl(t).slice(8,-1),pI=t=>zl(t)==="[object Object]",um=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,el=rm(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tp=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},h2=/-(\w)/g,Ns=Tp(t=>t.replace(h2,(e,s)=>s?s.toUpperCase():"")),m2=/\B([A-Z])/g,to=Tp(t=>t.replace(m2,"-$1").toLowerCase()),Pp=Tp(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lu=Tp(t=>t?`on${Pp(t)}`:""),ea=(t,e)=>!Object.is(t,e),tl=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},uI=(t,e,s,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:s})},g2=t=>{const e=parseFloat(t);return isNaN(e)?t:e},f2=t=>{const e=nt(t)?Number(t):NaN;return isNaN(e)?t:e};let sT;const Ip=()=>sT||(sT=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function yp(t){if(Ie(t)){const e={};for(let s=0;s<t.length;s++){const n=t[s],a=nt(n)?y2(n):yp(n);if(a)for(const o in a)e[o]=a[o]}return e}else if(nt(t)||Ze(t))return t}const T2=/;(?![^(]*\))/g,P2=/:([^]+)/,I2=/\/\*[^]*?\*\//g;function y2(t){const e={};return t.replace(I2,"").split(T2).forEach(s=>{if(s){const n=s.split(P2);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ep(t){let e="";if(nt(t))e=t;else if(Ie(t))for(let s=0;s<t.length;s++){const n=Ep(t[s]);n&&(e+=n+" ")}else if(Ze(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function BR(t){if(!t)return null;let{class:e,style:s}=t;return e&&!nt(e)&&(t.class=Ep(e)),s&&(t.style=yp(s)),t}const E2="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B2=rm(E2);function dI(t){return!!t||t===""}const hI=t=>!!(t&&t.__v_isRef===!0),N2=t=>nt(t)?t:t==null?"":Ie(t)||Ze(t)&&(t.toString===cI||!Be(t.toString))?hI(t)?N2(t.value):JSON.stringify(t,mI,2):String(t),mI=(t,e)=>hI(e)?mI(t,e.value):Ao(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[n,a],o)=>(s[Mu(n,o)+" =>"]=a,s),{})}:lI(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>Mu(s))}:da(e)?Mu(e):Ze(e)&&!Ie(e)&&!pI(e)?String(e):e,Mu=(t,e="")=>{var s;return da(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class gI{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=Xt;try{return Xt=this,e()}finally{Xt=s}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Bp(t){return new gI(t)}function dm(){return Xt}function fI(t,e=!1){Xt&&Xt.cleanups.push(t)}let $e;const Cu=new WeakSet;class TI{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cu.has(this)&&(Cu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||II(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nT(this),yI(this);const e=$e,s=As;$e=this,As=!0;try{return this.fn()}finally{EI(this),$e=e,As=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gm(e);this.deps=this.depsTail=void 0,nT(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Md(this)&&this.run()}get dirty(){return Md(this)}}let PI=0,sl,nl;function II(t,e=!1){if(t.flags|=8,e){t.next=nl,nl=t;return}t.next=sl,sl=t}function hm(){PI++}function mm(){if(--PI>0)return;if(nl){let e=nl;for(nl=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;sl;){let e=sl;for(sl=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=s}}if(t)throw t}function yI(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function EI(t){let e,s=t.depsTail,n=s;for(;n;){const a=n.prevDep;n.version===-1?(n===s&&(s=a),gm(n),k2(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}t.deps=e,t.depsTail=s}function Md(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(BI(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function BI(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Il))return;t.globalVersion=Il;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Md(t)){t.flags&=-3;return}const s=$e,n=As;$e=t,As=!0;try{yI(t);const a=t.fn(t._value);(e.version===0||ea(a,t._value))&&(t._value=a,e.version++)}catch(a){throw e.version++,a}finally{$e=s,As=n,EI(t),t.flags&=-3}}function gm(t,e=!1){const{dep:s,prevSub:n,nextSub:a}=t;if(n&&(n.nextSub=a,t.prevSub=void 0),a&&(a.prevSub=n,t.nextSub=void 0),s.subs===t&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)gm(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function k2(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let As=!0;const NI=[];function ha(){NI.push(As),As=!1}function ma(){const t=NI.pop();As=t===void 0?!0:t}function nT(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=$e;$e=void 0;try{e()}finally{$e=s}}}let Il=0;class S2{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fm{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!As||$e===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==$e)s=this.activeLink=new S2($e,this),$e.deps?(s.prevDep=$e.depsTail,$e.depsTail.nextDep=s,$e.depsTail=s):$e.deps=$e.depsTail=s,kI(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=$e.depsTail,s.nextDep=void 0,$e.depsTail.nextDep=s,$e.depsTail=s,$e.deps===s&&($e.deps=n)}return s}trigger(e){this.version++,Il++,this.notify(e)}notify(e){hm();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{mm()}}}function kI(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)kI(n)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const Bc=new WeakMap,ba=Symbol(""),Cd=Symbol(""),yl=Symbol("");function Ot(t,e,s){if(As&&$e){let n=Bc.get(t);n||Bc.set(t,n=new Map);let a=n.get(s);a||(n.set(s,a=new fm),a.map=n,a.key=s),a.track()}}function mn(t,e,s,n,a,o){const i=Bc.get(t);if(!i){Il++;return}const l=r=>{r&&r.trigger()};if(hm(),e==="clear")i.forEach(l);else{const r=Ie(t),p=r&&um(s);if(r&&s==="length"){const u=Number(n);i.forEach((d,m)=>{(m==="length"||m===yl||!da(m)&&m>=u)&&l(d)})}else switch((s!==void 0||i.has(void 0))&&l(i.get(s)),p&&l(i.get(yl)),e){case"add":r?p&&l(i.get("length")):(l(i.get(ba)),Ao(t)&&l(i.get(Cd)));break;case"delete":r||(l(i.get(ba)),Ao(t)&&l(i.get(Cd)));break;case"set":Ao(t)&&l(i.get(ba));break}}mm()}function _2(t,e){const s=Bc.get(t);return s&&s.get(e)}function Io(t){const e=ke(t);return e===t?e:(Ot(e,"iterate",yl),Es(t)?e:e.map(jt))}function Np(t){return Ot(t=ke(t),"iterate",yl),t}const V2={__proto__:null,[Symbol.iterator](){return Au(this,Symbol.iterator,jt)},concat(...t){return Io(this).concat(...t.map(e=>Ie(e)?Io(e):e))},entries(){return Au(this,"entries",t=>(t[1]=jt(t[1]),t))},every(t,e){return pn(this,"every",t,e,void 0,arguments)},filter(t,e){return pn(this,"filter",t,e,s=>s.map(jt),arguments)},find(t,e){return pn(this,"find",t,e,jt,arguments)},findIndex(t,e){return pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pn(this,"findLast",t,e,jt,arguments)},findLastIndex(t,e){return pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return wu(this,"includes",t)},indexOf(...t){return wu(this,"indexOf",t)},join(t){return Io(this).join(t)},lastIndexOf(...t){return wu(this,"lastIndexOf",t)},map(t,e){return pn(this,"map",t,e,void 0,arguments)},pop(){return Hi(this,"pop")},push(...t){return Hi(this,"push",t)},reduce(t,...e){return aT(this,"reduce",t,e)},reduceRight(t,...e){return aT(this,"reduceRight",t,e)},shift(){return Hi(this,"shift")},some(t,e){return pn(this,"some",t,e,void 0,arguments)},splice(...t){return Hi(this,"splice",t)},toReversed(){return Io(this).toReversed()},toSorted(t){return Io(this).toSorted(t)},toSpliced(...t){return Io(this).toSpliced(...t)},unshift(...t){return Hi(this,"unshift",t)},values(){return Au(this,"values",jt)}};function Au(t,e,s){const n=Np(t),a=n[e]();return n!==t&&!Es(t)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.value&&(o.value=s(o.value)),o}),a}const v2=Array.prototype;function pn(t,e,s,n,a,o){const i=Np(t),l=i!==t&&!Es(t),r=i[e];if(r!==v2[e]){const d=r.apply(t,o);return l?jt(d):d}let p=s;i!==t&&(l?p=function(d,m){return s.call(this,jt(d),m,t)}:s.length>2&&(p=function(d,m){return s.call(this,d,m,t)}));const u=r.call(i,p,n);return l&&a?a(u):u}function aT(t,e,s,n){const a=Np(t);let o=s;return a!==t&&(Es(t)?s.length>3&&(o=function(i,l,r){return s.call(this,i,l,r,t)}):o=function(i,l,r){return s.call(this,i,jt(l),r,t)}),a[e](o,...n)}function wu(t,e,s){const n=ke(t);Ot(n,"iterate",yl);const a=n[e](...s);return(a===-1||a===!1)&&Im(s[0])?(s[0]=ke(s[0]),n[e](...s)):a}function Hi(t,e,s=[]){ha(),hm();const n=ke(t)[e].apply(t,s);return mm(),ma(),n}const x2=rm("__proto__,__v_isRef,__isVue"),SI=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(da));function H2(t){da(t)||(t=String(t));const e=ke(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class _I{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,n){if(s==="__v_skip")return e.__v_skip;const a=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return o;if(s==="__v_raw")return n===(a?o?R2:HI:o?xI:vI).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const i=Ie(e);if(!a){let r;if(i&&(r=V2[s]))return r;if(s==="hasOwnProperty")return H2}const l=Reflect.get(e,s,it(e)?e:n);return(da(s)?SI.has(s):x2(s))||(a||Ot(e,"get",s),o)?l:it(l)?i&&um(s)?l:l.value:Ze(l)?a?YI(l):so(l):l}}class VI extends _I{constructor(e=!1){super(!1,e)}set(e,s,n,a){let o=e[s];if(!this._isShallow){const r=Ua(o);if(!Es(n)&&!Ua(n)&&(o=ke(o),n=ke(n)),!Ie(e)&&it(o)&&!it(n))return r?!1:(o.value=n,!0)}const i=Ie(e)&&um(s)?Number(s)<e.length:Oe(e,s),l=Reflect.set(e,s,n,it(e)?e:a);return e===ke(a)&&(i?ea(n,o)&&mn(e,"set",s,n):mn(e,"add",s,n)),l}deleteProperty(e,s){const n=Oe(e,s);e[s];const a=Reflect.deleteProperty(e,s);return a&&n&&mn(e,"delete",s,void 0),a}has(e,s){const n=Reflect.has(e,s);return(!da(s)||!SI.has(s))&&Ot(e,"has",s),n}ownKeys(e){return Ot(e,"iterate",Ie(e)?"length":ba),Reflect.ownKeys(e)}}class K2 extends _I{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Y2=new VI,L2=new K2,M2=new VI(!0);const Ad=t=>t,Mr=t=>Reflect.getPrototypeOf(t);function C2(t,e,s){return function(...n){const a=this.__v_raw,o=ke(a),i=Ao(o),l=t==="entries"||t===Symbol.iterator&&i,r=t==="keys"&&i,p=a[t](...n),u=s?Ad:e?wd:jt;return!e&&Ot(o,"iterate",r?Cd:ba),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:l?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function Cr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function A2(t,e){const s={get(a){const o=this.__v_raw,i=ke(o),l=ke(a);t||(ea(a,l)&&Ot(i,"get",a),Ot(i,"get",l));const{has:r}=Mr(i),p=e?Ad:t?wd:jt;if(r.call(i,a))return p(o.get(a));if(r.call(i,l))return p(o.get(l));o!==i&&o.get(a)},get size(){const a=this.__v_raw;return!t&&Ot(ke(a),"iterate",ba),Reflect.get(a,"size",a)},has(a){const o=this.__v_raw,i=ke(o),l=ke(a);return t||(ea(a,l)&&Ot(i,"has",a),Ot(i,"has",l)),a===l?o.has(a):o.has(a)||o.has(l)},forEach(a,o){const i=this,l=i.__v_raw,r=ke(l),p=e?Ad:t?wd:jt;return!t&&Ot(r,"iterate",ba),l.forEach((u,d)=>a.call(o,p(u),p(d),i))}};return ht(s,t?{add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear")}:{add(a){!e&&!Es(a)&&!Ua(a)&&(a=ke(a));const o=ke(this);return Mr(o).has.call(o,a)||(o.add(a),mn(o,"add",a,a)),this},set(a,o){!e&&!Es(o)&&!Ua(o)&&(o=ke(o));const i=ke(this),{has:l,get:r}=Mr(i);let p=l.call(i,a);p||(a=ke(a),p=l.call(i,a));const u=r.call(i,a);return i.set(a,o),p?ea(o,u)&&mn(i,"set",a,o):mn(i,"add",a,o),this},delete(a){const o=ke(this),{has:i,get:l}=Mr(o);let r=i.call(o,a);r||(a=ke(a),r=i.call(o,a)),l&&l.call(o,a);const p=o.delete(a);return r&&mn(o,"delete",a,void 0),p},clear(){const a=ke(this),o=a.size!==0,i=a.clear();return o&&mn(a,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=C2(a,t,e)}),s}function Tm(t,e){const s=A2(t,e);return(n,a,o)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?n:Reflect.get(Oe(s,a)&&a in n?s:n,a,o)}const w2={get:Tm(!1,!1)},D2={get:Tm(!1,!0)},b2={get:Tm(!0,!1)};const vI=new WeakMap,xI=new WeakMap,HI=new WeakMap,R2=new WeakMap;function Q2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O2(t){return t.__v_skip||!Object.isExtensible(t)?0:Q2(d2(t))}function so(t){return Ua(t)?t:Pm(t,!1,Y2,w2,vI)}function KI(t){return Pm(t,!1,M2,D2,xI)}function YI(t){return Pm(t,!0,L2,b2,HI)}function Pm(t,e,s,n,a){if(!Ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=a.get(t);if(o)return o;const i=O2(t);if(i===0)return t;const l=new Proxy(t,i===2?n:s);return a.set(t,l),l}function yn(t){return Ua(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ua(t){return!!(t&&t.__v_isReadonly)}function Es(t){return!!(t&&t.__v_isShallow)}function Im(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function no(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&uI(t,"__v_skip",!0),t}const jt=t=>Ze(t)?so(t):t,wd=t=>Ze(t)?YI(t):t;function it(t){return t?t.__v_isRef===!0:!1}function xe(t){return MI(t,!1)}function LI(t){return MI(t,!0)}function MI(t,e){return it(t)?t:new j2(t,e)}class j2{constructor(e,s){this.dep=new fm,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:ke(e),this._value=s?e:jt(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,n=this.__v_isShallow||Es(e)||Ua(e);e=n?e:ke(e),ea(e,s)&&(this._rawValue=e,this._value=n?e:jt(e),this.dep.trigger())}}function ta(t){return it(t)?t.value:t}function dn(t){return Be(t)?t():ta(t)}const G2={get:(t,e,s)=>e==="__v_raw"?t:ta(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const a=t[e];return it(a)&&!it(s)?(a.value=s,!0):Reflect.set(t,e,s,n)}};function CI(t){return yn(t)?t:new Proxy(t,G2)}function U2(t){const e=Ie(t)?new Array(t.length):{};for(const s in t)e[s]=wI(t,s);return e}class z2{constructor(e,s,n){this._object=e,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _2(ke(this._object),this._key)}}class q2{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function AI(t,e,s){return it(t)?t:Be(t)?new q2(t):Ze(t)&&arguments.length>1?wI(t,e,s):xe(t)}function wI(t,e,s){const n=t[e];return it(n)?n:new z2(t,e,s)}class F2{constructor(e,s,n){this.fn=e,this.setter=s,this._value=void 0,this.dep=new fm(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Il-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return II(this,!0),!0}get value(){const e=this.dep.track();return BI(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function J2(t,e,s=!1){let n,a;return Be(t)?n=t:(n=t.get,a=t.set),new F2(n,a,s)}const Ar={},Nc=new WeakMap;let Ha;function $2(t,e=!1,s=Ha){if(s){let n=Nc.get(s);n||Nc.set(s,n=[]),n.push(t)}}function W2(t,e,s=Je){const{immediate:n,deep:a,once:o,scheduler:i,augmentJob:l,call:r}=s,p=K=>a?K:Es(K)||a===!1||a===0?gn(K,1):gn(K);let u,d,m,f,P=!1,_=!1;if(it(t)?(d=()=>t.value,P=Es(t)):yn(t)?(d=()=>p(t),P=!0):Ie(t)?(_=!0,P=t.some(K=>yn(K)||Es(K)),d=()=>t.map(K=>{if(it(K))return K.value;if(yn(K))return p(K);if(Be(K))return r?r(K,2):K()})):Be(t)?e?d=r?()=>r(t,2):t:d=()=>{if(m){ha();try{m()}finally{ma()}}const K=Ha;Ha=u;try{return r?r(t,3,[f]):t(f)}finally{Ha=K}}:d=Cs,e&&a){const K=d,A=a===!0?1/0:a;d=()=>gn(K(),A)}const v=dm(),L=()=>{u.stop(),v&&v.active&&pm(v.effects,u)};if(o&&e){const K=e;e=(...A)=>{K(...A),L()}}let x=_?new Array(t.length).fill(Ar):Ar;const Y=K=>{if(!(!(u.flags&1)||!u.dirty&&!K))if(e){const A=u.run();if(a||P||(_?A.some((R,S)=>ea(R,x[S])):ea(A,x))){m&&m();const R=Ha;Ha=u;try{const S=[A,x===Ar?void 0:_&&x[0]===Ar?[]:x,f];r?r(e,3,S):e(...S),x=A}finally{Ha=R}}}else u.run()};return l&&l(Y),u=new TI(d),u.scheduler=i?()=>i(Y,!1):Y,f=K=>$2(K,!1,u),m=u.onStop=()=>{const K=Nc.get(u);if(K){if(r)r(K,4);else for(const A of K)A();Nc.delete(u)}},e?n?Y(!0):x=u.run():i?i(Y.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function gn(t,e=1/0,s){if(e<=0||!Ze(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,it(t))gn(t.value,e,s);else if(Ie(t))for(let n=0;n<t.length;n++)gn(t[n],e,s);else if(lI(t)||Ao(t))t.forEach(n=>{gn(n,e,s)});else if(pI(t)){for(const n in t)gn(t[n],e,s);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&gn(t[n],e,s)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ql(t,e,s,n){try{return n?t(...n):t()}catch(a){kp(a,e,s)}}function Ds(t,e,s,n){if(Be(t)){const a=ql(t,e,s,n);return a&&rI(a)&&a.catch(o=>{kp(o,e,s)}),a}if(Ie(t)){const a=[];for(let o=0;o<t.length;o++)a.push(Ds(t[o],e,s,n));return a}}function kp(t,e,s,n=!0){const a=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||Je;if(e){let l=e.parent;const r=e.proxy,p=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,r,p)===!1)return}l=l.parent}if(o){ha(),ql(o,null,10,[t,r,p]),ma();return}}Z2(t,s,a,n,i)}function Z2(t,e,s,n=!0,a=!1){if(a)throw t;console.error(t)}const es=[];let zs=-1;const wo=[];let On=null,_o=0;const DI=Promise.resolve();let kc=null;function is(t){const e=kc||DI;return t?e.then(this?t.bind(this):t):e}function X2(t){let e=zs+1,s=es.length;for(;e<s;){const n=e+s>>>1,a=es[n],o=El(a);o<t||o===t&&a.flags&2?e=n+1:s=n}return e}function ym(t){if(!(t.flags&1)){const e=El(t),s=es[es.length-1];!s||!(t.flags&2)&&e>=El(s)?es.push(t):es.splice(X2(e),0,t),t.flags|=1,bI()}}function bI(){kc||(kc=DI.then(QI))}function e_(t){Ie(t)?wo.push(...t):On&&t.id===-1?On.splice(_o+1,0,t):t.flags&1||(wo.push(t),t.flags|=1),bI()}function oT(t,e,s=zs+1){for(;s<es.length;s++){const n=es[s];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;es.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function RI(t){if(wo.length){const e=[...new Set(wo)].sort((s,n)=>El(s)-El(n));if(wo.length=0,On){On.push(...e);return}for(On=e,_o=0;_o<On.length;_o++){const s=On[_o];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}On=null,_o=0}}const El=t=>t.id==null?t.flags&2?-1:1/0:t.id;function QI(t){const e=Cs;try{for(zs=0;zs<es.length;zs++){const s=es[zs];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),ql(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;zs<es.length;zs++){const s=es[zs];s&&(s.flags&=-2)}zs=-1,es.length=0,RI(),kc=null,(es.length||wo.length)&&QI()}}let ss=null,OI=null;function Sc(t){const e=ss;return ss=t,OI=t&&t.type.__scopeId||null,e}function t_(t,e=ss,s){if(!e||t._n)return t;const n=(...a)=>{n._d&&TT(-1);const o=Sc(e);let i;try{i=t(...a)}finally{Sc(o),n._d&&TT(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function jI(t,e){if(ss===null)return t;const s=Hp(ss),n=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,i,l,r=Je]=e[a];o&&(Be(o)&&(o={mounted:o,updated:o}),o.deep&&gn(i),n.push({dir:o,instance:s,value:i,oldValue:void 0,arg:l,modifiers:r}))}return t}function _a(t,e,s,n){const a=t.dirs,o=e&&e.dirs;for(let i=0;i<a.length;i++){const l=a[i];o&&(l.oldValue=o[i].value);let r=l.dir[n];r&&(ha(),Ds(r,s,8,[t.el,l,t,e]),ma())}}const GI=Symbol("_vte"),UI=t=>t.__isTeleport,al=t=>t&&(t.disabled||t.disabled===""),iT=t=>t&&(t.defer||t.defer===""),lT=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,rT=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Dd=(t,e)=>{const s=t&&t.to;return nt(s)?e?e(s):null:s},zI={name:"Teleport",__isTeleport:!0,process(t,e,s,n,a,o,i,l,r,p){const{mc:u,pc:d,pbc:m,o:{insert:f,querySelector:P,createText:_,createComment:v}}=p,L=al(e.props);let{shapeFlag:x,children:Y,dynamicChildren:K}=e;if(t==null){const A=e.el=_(""),R=e.anchor=_("");f(A,s,n),f(R,s,n);const S=(T,E)=>{x&16&&(a&&a.isCE&&(a.ce._teleportTarget=T),u(Y,T,E,a,o,i,l,r))},y=()=>{const T=e.target=Dd(e.props,P),E=qI(T,e,_,f);T&&(i!=="svg"&&lT(T)?i="svg":i!=="mathml"&&rT(T)&&(i="mathml"),L||(S(T,E),oc(e,!1)))};L&&(S(s,R),oc(e,!0)),iT(e.props)?yt(()=>{y(),e.el.__isMounted=!0},o):y()}else{if(iT(e.props)&&!t.el.__isMounted){yt(()=>{zI.process(t,e,s,n,a,o,i,l,r,p),delete t.el.__isMounted},o);return}e.el=t.el,e.targetStart=t.targetStart;const A=e.anchor=t.anchor,R=e.target=t.target,S=e.targetAnchor=t.targetAnchor,y=al(t.props),T=y?s:R,E=y?A:S;if(i==="svg"||lT(R)?i="svg":(i==="mathml"||rT(R))&&(i="mathml"),K?(m(t.dynamicChildren,K,T,a,o,i,l),xm(t,e,!0)):r||d(t,e,T,E,a,o,i,l,!1),L)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wr(e,s,A,p,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const k=e.target=Dd(e.props,P);k&&wr(e,k,null,p,0)}else y&&wr(e,R,S,p,1);oc(e,L)}},remove(t,e,s,{um:n,o:{remove:a}},o){const{shapeFlag:i,children:l,anchor:r,targetStart:p,targetAnchor:u,target:d,props:m}=t;if(d&&(a(p),a(u)),o&&a(r),i&16){const f=o||!al(m);for(let P=0;P<l.length;P++){const _=l[P];n(_,e,s,f,!!_.dynamicChildren)}}},move:wr,hydrate:s_};function wr(t,e,s,{o:{insert:n},m:a},o=2){o===0&&n(t.targetAnchor,e,s);const{el:i,anchor:l,shapeFlag:r,children:p,props:u}=t,d=o===2;if(d&&n(i,e,s),(!d||al(u))&&r&16)for(let m=0;m<p.length;m++)a(p[m],e,s,2);d&&n(l,e,s)}function s_(t,e,s,n,a,o,{o:{nextSibling:i,parentNode:l,querySelector:r,insert:p,createText:u}},d){const m=e.target=Dd(e.props,r);if(m){const f=al(e.props),P=m._lpa||m.firstChild;if(e.shapeFlag&16)if(f)e.anchor=d(i(t),e,l(t),s,n,a,o),e.targetStart=P,e.targetAnchor=P&&i(P);else{e.anchor=i(t);let _=P;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,m._lpa=e.targetAnchor&&i(e.targetAnchor);break}}_=i(_)}e.targetAnchor||qI(m,e,u,p),d(P&&i(P),e,m,s,n,a,o)}oc(e,f)}return e.anchor&&i(e.anchor)}const n_=zI;function oc(t,e){const s=t.ctx;if(s&&s.ut){let n,a;for(e?(n=t.el,a=t.anchor):(n=t.targetStart,a=t.targetAnchor);n&&n!==a;)n.nodeType===1&&n.setAttribute("data-v-owner",s.uid),n=n.nextSibling;s.ut()}}function qI(t,e,s,n){const a=e.targetStart=s(""),o=e.targetAnchor=s("");return a[GI]=o,t&&(n(a,t),n(o,t)),o}const jn=Symbol("_leaveCb"),Dr=Symbol("_enterCb");function FI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ga(()=>{t.isMounted=!0}),_s(()=>{t.isUnmounting=!0}),t}const fs=[Function,Array],JI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fs,onEnter:fs,onAfterEnter:fs,onEnterCancelled:fs,onBeforeLeave:fs,onLeave:fs,onAfterLeave:fs,onLeaveCancelled:fs,onBeforeAppear:fs,onAppear:fs,onAfterAppear:fs,onAppearCancelled:fs},$I=t=>{const e=t.subTree;return e.component?$I(e.component):e},a_={name:"BaseTransition",props:JI,setup(t,{slots:e}){const s=rt(),n=FI();return()=>{const a=e.default&&Em(e.default(),!0);if(!a||!a.length)return;const o=WI(a),i=ke(t),{mode:l}=i;if(n.isLeaving)return Du(o);const r=cT(o);if(!r)return Du(o);let p=Bl(r,i,n,s,d=>p=d);r.type!==ts&&ia(r,p);let u=s.subTree&&cT(s.subTree);if(u&&u.type!==ts&&!qn(r,u)&&$I(s).type!==ts){let d=Bl(u,i,n,s);if(ia(u,d),l==="out-in"&&r.type!==ts)return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete d.afterLeave,u=void 0},Du(o);l==="in-out"&&r.type!==ts?d.delayLeave=(m,f,P)=>{const _=ZI(n,u);_[String(u.key)]=u,m[jn]=()=>{f(),m[jn]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{P(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function WI(t){let e=t[0];if(t.length>1){for(const s of t)if(s.type!==ts){e=s;break}}return e}const o_=a_;function ZI(t,e){const{leavingVNodes:s}=t;let n=s.get(e.type);return n||(n=Object.create(null),s.set(e.type,n)),n}function Bl(t,e,s,n,a){const{appear:o,mode:i,persisted:l=!1,onBeforeEnter:r,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:P,onLeaveCancelled:_,onBeforeAppear:v,onAppear:L,onAfterAppear:x,onAppearCancelled:Y}=e,K=String(t.key),A=ZI(s,t),R=(T,E)=>{T&&Ds(T,n,9,E)},S=(T,E)=>{const k=E[1];R(T,E),Ie(T)?T.every(I=>I.length<=1)&&k():T.length<=1&&k()},y={mode:i,persisted:l,beforeEnter(T){let E=r;if(!s.isMounted)if(o)E=v||r;else return;T[jn]&&T[jn](!0);const k=A[K];k&&qn(t,k)&&k.el[jn]&&k.el[jn](),R(E,[T])},enter(T){let E=p,k=u,I=d;if(!s.isMounted)if(o)E=L||p,k=x||u,I=Y||d;else return;let N=!1;const D=T[Dr]=le=>{N||(N=!0,le?R(I,[T]):R(k,[T]),y.delayedLeave&&y.delayedLeave(),T[Dr]=void 0)};E?S(E,[T,D]):D()},leave(T,E){const k=String(t.key);if(T[Dr]&&T[Dr](!0),s.isUnmounting)return E();R(m,[T]);let I=!1;const N=T[jn]=D=>{I||(I=!0,E(),D?R(_,[T]):R(P,[T]),T[jn]=void 0,A[k]===t&&delete A[k])};A[k]=t,f?S(f,[T,N]):N()},clone(T){const E=Bl(T,e,s,n,a);return a&&a(E),E}};return y}function Du(t){if(Sp(t))return t=kn(t),t.children=null,t}function cT(t){if(!Sp(t))return UI(t.type)&&t.children?WI(t.children):t;const{shapeFlag:e,children:s}=t;if(s){if(e&16)return s[0];if(e&32&&Be(s.default))return s.default()}}function ia(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ia(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Em(t,e=!1,s){let n=[],a=0;for(let o=0;o<t.length;o++){let i=t[o];const l=s==null?i.key:String(s)+String(i.key!=null?i.key:o);i.type===xs?(i.patchFlag&128&&a++,n=n.concat(Em(i.children,e,l))):(e||i.type!==ts)&&n.push(l!=null?kn(i,{key:l}):i)}if(a>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Bm(t,e){return Be(t)?(()=>ht({name:t.name},e,{setup:t}))():t}function XI(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _c(t,e,s,n,a=!1){if(Ie(t)){t.forEach((P,_)=>_c(P,e&&(Ie(e)?e[_]:e),s,n,a));return}if(Do(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&_c(t,e,s,n.component.subTree);return}const o=n.shapeFlag&4?Hp(n.component):n.el,i=a?null:o,{i:l,r}=t,p=e&&e.r,u=l.refs===Je?l.refs={}:l.refs,d=l.setupState,m=ke(d),f=d===Je?()=>!1:P=>Oe(m,P);if(p!=null&&p!==r&&(nt(p)?(u[p]=null,f(p)&&(d[p]=null)):it(p)&&(p.value=null)),Be(r))ql(r,l,12,[i,u]);else{const P=nt(r),_=it(r);if(P||_){const v=()=>{if(t.f){const L=P?f(r)?d[r]:u[r]:r.value;a?Ie(L)&&pm(L,o):Ie(L)?L.includes(o)||L.push(o):P?(u[r]=[o],f(r)&&(d[r]=u[r])):(r.value=[o],t.k&&(u[t.k]=r.value))}else P?(u[r]=i,f(r)&&(d[r]=i)):_&&(r.value=i,t.k&&(u[t.k]=i))};i?(v.id=-1,yt(v,s)):v()}}}Ip().requestIdleCallback;Ip().cancelIdleCallback;const Do=t=>!!t.type.__asyncLoader,Sp=t=>t.type.__isKeepAlive,i_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const s=rt(),n=s.ctx;if(!n.renderer)return()=>{const x=e.default&&e.default();return x&&x.length===1?x[0]:x};const a=new Map,o=new Set;let i=null;const l=s.suspense,{renderer:{p:r,m:p,um:u,o:{createElement:d}}}=n,m=d("div");n.activate=(x,Y,K,A,R)=>{const S=x.component;p(x,Y,K,0,l),r(S.vnode,x,Y,K,S,l,A,x.slotScopeIds,R),yt(()=>{S.isDeactivated=!1,S.a&&tl(S.a);const y=x.props&&x.props.onVnodeMounted;y&&Ps(y,S.parent,x)},l)},n.deactivate=x=>{const Y=x.component;vc(Y.m),vc(Y.a),p(x,m,null,1,l),yt(()=>{Y.da&&tl(Y.da);const K=x.props&&x.props.onVnodeUnmounted;K&&Ps(K,Y.parent,x),Y.isDeactivated=!0},l)};function f(x){bu(x),u(x,s,l,!0)}function P(x){a.forEach((Y,K)=>{const A=Gd(Y.type);A&&!x(A)&&_(K)})}function _(x){const Y=a.get(x);Y&&(!i||!qn(Y,i))?f(Y):i&&bu(i),a.delete(x),o.delete(x)}ze(()=>[t.include,t.exclude],([x,Y])=>{x&&P(K=>Gi(x,K)),Y&&P(K=>!Gi(Y,K))},{flush:"post",deep:!0});let v=null;const L=()=>{v!=null&&(xc(s.subTree.type)?yt(()=>{a.set(v,br(s.subTree))},s.subTree.suspense):a.set(v,br(s.subTree)))};return ga(L),Nm(L),_s(()=>{a.forEach(x=>{const{subTree:Y,suspense:K}=s,A=br(Y);if(x.type===A.type&&x.key===A.key){bu(A);const R=A.component.da;R&&yt(R,K);return}f(x)})}),()=>{if(v=null,!e.default)return i=null;const x=e.default(),Y=x[0];if(x.length>1)return i=null,x;if(!kl(Y)||!(Y.shapeFlag&4)&&!(Y.shapeFlag&128))return i=null,Y;let K=br(Y);if(K.type===ts)return i=null,K;const A=K.type,R=Gd(Do(K)?K.type.__asyncResolved||{}:A),{include:S,exclude:y,max:T}=t;if(S&&(!R||!Gi(S,R))||y&&R&&Gi(y,R))return K.shapeFlag&=-257,i=K,Y;const E=K.key==null?A:K.key,k=a.get(E);return K.el&&(K=kn(K),Y.shapeFlag&128&&(Y.ssContent=K)),v=E,k?(K.el=k.el,K.component=k.component,K.transition&&ia(K,K.transition),K.shapeFlag|=512,o.delete(E),o.add(E)):(o.add(E),T&&o.size>parseInt(T,10)&&_(o.values().next().value)),K.shapeFlag|=256,i=K,xc(Y.type)?Y:K}}},NR=i_;function Gi(t,e){return Ie(t)?t.some(s=>Gi(s,e)):nt(t)?t.split(",").includes(e):u2(t)?(t.lastIndex=0,t.test(e)):!1}function ey(t,e){ty(t,"a",e)}function _p(t,e){ty(t,"da",e)}function ty(t,e,s=St){const n=t.__wdc||(t.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Vp(e,n,s),s){let a=s.parent;for(;a&&a.parent;)Sp(a.parent.vnode)&&l_(n,e,s,a),a=a.parent}}function l_(t,e,s,n){const a=Vp(e,t,n,!0);km(()=>{pm(n[e],a)},s)}function bu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function br(t){return t.shapeFlag&128?t.ssContent:t}function Vp(t,e,s=St,n=!1){if(s){const a=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...i)=>{ha();const l=Fl(s),r=Ds(e,s,t,i);return l(),ma(),r});return n?a.unshift(o):a.push(o),o}}const Kn=t=>(e,s=St)=>{(!Sl||t==="sp")&&Vp(t,(...n)=>e(...n),s)},r_=Kn("bm"),ga=Kn("m"),sy=Kn("bu"),Nm=Kn("u"),_s=Kn("bum"),km=Kn("um"),ny=Kn("sp"),c_=Kn("rtg"),p_=Kn("rtc");function u_(t,e=St){Vp("ec",t,e)}const Sm="components",d_="directives";function h_(t,e){return _m(Sm,t,!0,e)||t}const ay=Symbol.for("v-ndc");function kR(t){return nt(t)?_m(Sm,t,!1)||t:t||ay}function SR(t){return _m(d_,t)}function _m(t,e,s=!0,n=!1){const a=ss||St;if(a){const o=a.type;if(t===Sm){const l=Gd(o,!1);if(l&&(l===e||l===Ns(e)||l===Pp(Ns(e))))return o}const i=pT(a[t]||o[t],e)||pT(a.appContext[t],e);return!i&&n?o:i}}function pT(t,e){return t&&(t[e]||t[Ns(e)]||t[Pp(Ns(e))])}function _R(t,e,s,n){let a;const o=s&&s[n],i=Ie(t);if(i||nt(t)){const l=i&&yn(t);let r=!1;l&&(r=!Es(t),t=Np(t)),a=new Array(t.length);for(let p=0,u=t.length;p<u;p++)a[p]=e(r?jt(t[p]):t[p],p,void 0,o&&o[p])}else if(typeof t=="number"){a=new Array(t);for(let l=0;l<t;l++)a[l]=e(l+1,l,void 0,o&&o[l])}else if(Ze(t))if(t[Symbol.iterator])a=Array.from(t,(l,r)=>e(l,r,void 0,o&&o[r]));else{const l=Object.keys(t);a=new Array(l.length);for(let r=0,p=l.length;r<p;r++){const u=l[r];a[r]=e(t[u],u,r,o&&o[r])}}else a=[];return s&&(s[n]=a),a}const bd=t=>t?ky(t)?Hp(t):bd(t.parent):null,ol=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bd(t.parent),$root:t=>bd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vm(t),$forceUpdate:t=>t.f||(t.f=()=>{ym(t.update)}),$nextTick:t=>t.n||(t.n=is.bind(t.proxy)),$watch:t=>A_.bind(t)}),Ru=(t,e)=>t!==Je&&!t.__isScriptSetup&&Oe(t,e),m_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:n,data:a,props:o,accessCache:i,type:l,appContext:r}=t;let p;if(e[0]!=="$"){const f=i[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return a[e];case 4:return s[e];case 3:return o[e]}else{if(Ru(n,e))return i[e]=1,n[e];if(a!==Je&&Oe(a,e))return i[e]=2,a[e];if((p=t.propsOptions[0])&&Oe(p,e))return i[e]=3,o[e];if(s!==Je&&Oe(s,e))return i[e]=4,s[e];Rd&&(i[e]=0)}}const u=ol[e];let d,m;if(u)return e==="$attrs"&&Ot(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(s!==Je&&Oe(s,e))return i[e]=4,s[e];if(m=r.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,s){const{data:n,setupState:a,ctx:o}=t;return Ru(a,e)?(a[e]=s,!0):n!==Je&&Oe(n,e)?(n[e]=s,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:n,appContext:a,propsOptions:o}},i){let l;return!!s[i]||t!==Je&&Oe(t,i)||Ru(e,i)||(l=o[0])&&Oe(l,i)||Oe(n,i)||Oe(ol,i)||Oe(a.config.globalProperties,i)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:Oe(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function uT(t){return Ie(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Rd=!0;function g_(t){const e=Vm(t),s=t.proxy,n=t.ctx;Rd=!1,e.beforeCreate&&dT(e.beforeCreate,t,"bc");const{data:a,computed:o,methods:i,watch:l,provide:r,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:f,updated:P,activated:_,deactivated:v,beforeDestroy:L,beforeUnmount:x,destroyed:Y,unmounted:K,render:A,renderTracked:R,renderTriggered:S,errorCaptured:y,serverPrefetch:T,expose:E,inheritAttrs:k,components:I,directives:N,filters:D}=e;if(p&&f_(p,n,null),i)for(const W in i){const z=i[W];Be(z)&&(n[W]=z.bind(s))}if(a){const W=a.call(s,s);Ze(W)&&(t.data=so(W))}if(Rd=!0,o)for(const W in o){const z=o[W],he=Be(z)?z.bind(s,s):Be(z.get)?z.get.bind(s,s):Cs,Ve=!Be(z)&&Be(z.set)?z.set.bind(s):Cs,He=Q({get:he,set:Ve});Object.defineProperty(n,W,{enumerable:!0,configurable:!0,get:()=>He.value,set:U=>He.value=U})}if(l)for(const W in l)oy(l[W],n,s,W);if(r){const W=Be(r)?r.call(s):r;Reflect.ownKeys(W).forEach(z=>{ic(z,W[z])})}u&&dT(u,t,"c");function oe(W,z){Ie(z)?z.forEach(he=>W(he.bind(s))):z&&W(z.bind(s))}if(oe(r_,d),oe(ga,m),oe(sy,f),oe(Nm,P),oe(ey,_),oe(_p,v),oe(u_,y),oe(p_,R),oe(c_,S),oe(_s,x),oe(km,K),oe(ny,T),Ie(E))if(E.length){const W=t.exposed||(t.exposed={});E.forEach(z=>{Object.defineProperty(W,z,{get:()=>s[z],set:he=>s[z]=he})})}else t.exposed||(t.exposed={});A&&t.render===Cs&&(t.render=A),k!=null&&(t.inheritAttrs=k),I&&(t.components=I),N&&(t.directives=N),T&&XI(t)}function f_(t,e,s=Cs){Ie(t)&&(t=Qd(t));for(const n in t){const a=t[n];let o;Ze(a)?"default"in a?o=Ft(a.from||n,a.default,!0):o=Ft(a.from||n):o=Ft(a),it(o)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):e[n]=o}}function dT(t,e,s){Ds(Ie(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,s)}function oy(t,e,s,n){let a=n.includes(".")?Ty(s,n):()=>s[n];if(nt(t)){const o=e[t];Be(o)&&ze(a,o)}else if(Be(t))ze(a,t.bind(s));else if(Ze(t))if(Ie(t))t.forEach(o=>oy(o,e,s,n));else{const o=Be(t.handler)?t.handler.bind(s):e[t.handler];Be(o)&&ze(a,o,t)}}function Vm(t){const e=t.type,{mixins:s,extends:n}=e,{mixins:a,optionsCache:o,config:{optionMergeStrategies:i}}=t.appContext,l=o.get(e);let r;return l?r=l:!a.length&&!s&&!n?r=e:(r={},a.length&&a.forEach(p=>Vc(r,p,i,!0)),Vc(r,e,i)),Ze(e)&&o.set(e,r),r}function Vc(t,e,s,n=!1){const{mixins:a,extends:o}=e;o&&Vc(t,o,s,!0),a&&a.forEach(i=>Vc(t,i,s,!0));for(const i in e)if(!(n&&i==="expose")){const l=T_[i]||s&&s[i];t[i]=l?l(t[i],e[i]):e[i]}return t}const T_={data:hT,props:mT,emits:mT,methods:Ui,computed:Ui,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Ui,directives:Ui,watch:I_,provide:hT,inject:P_};function hT(t,e){return e?t?function(){return ht(Be(t)?t.call(this,this):t,Be(e)?e.call(this,this):e)}:e:t}function P_(t,e){return Ui(Qd(t),Qd(e))}function Qd(t){if(Ie(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ui(t,e){return t?ht(Object.create(null),t,e):e}function mT(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:ht(Object.create(null),uT(t),uT(e!=null?e:{})):e}function I_(t,e){if(!t)return e;if(!e)return t;const s=ht(Object.create(null),t);for(const n in e)s[n]=Zt(t[n],e[n]);return s}function iy(){return{app:null,config:{isNativeTag:c2,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y_=0;function E_(t,e){return function(n,a=null){Be(n)||(n=ht({},n)),a!=null&&!Ze(a)&&(a=null);const o=iy(),i=new WeakSet,l=[];let r=!1;const p=o.app={_uid:y_++,_component:n,_props:a,_container:null,_context:o,_instance:null,version:nV,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&Be(u.install)?(i.add(u),u.install(p,...d)):Be(u)&&(i.add(u),u(p,...d))),p},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),p},component(u,d){return d?(o.components[u]=d,p):o.components[u]},directive(u,d){return d?(o.directives[u]=d,p):o.directives[u]},mount(u,d,m){if(!r){const f=p._ceVNode||rs(n,a);return f.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(f,u):t(f,u,m),r=!0,p._container=u,u.__vue_app__=p,Hp(f.component)}},onUnmount(u){l.push(u)},unmount(){r&&(Ds(l,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(u,d){return o.provides[u]=d,p},runWithContext(u){const d=Ra;Ra=p;try{return u()}finally{Ra=d}}};return p}}let Ra=null;function ic(t,e){if(St){let s=St.provides;const n=St.parent&&St.parent.provides;n===s&&(s=St.provides=Object.create(n)),s[t]=e}}function Ft(t,e,s=!1){const n=St||ss;if(n||Ra){const a=Ra?Ra._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&t in a)return a[t];if(arguments.length>1)return s&&Be(e)?e.call(n&&n.proxy):e}}function B_(){return!!(St||ss||Ra)}const ly={},ry=()=>Object.create(ly),cy=t=>Object.getPrototypeOf(t)===ly;function N_(t,e,s,n=!1){const a={},o=ry();t.propsDefaults=Object.create(null),py(t,e,a,o);for(const i in t.propsOptions[0])i in a||(a[i]=void 0);s?t.props=n?a:KI(a):t.type.props?t.props=a:t.props=o,t.attrs=o}function k_(t,e,s,n){const{props:a,attrs:o,vnode:{patchFlag:i}}=t,l=ke(a),[r]=t.propsOptions;let p=!1;if((n||i>0)&&!(i&16)){if(i&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(vp(t.emitsOptions,m))continue;const f=e[m];if(r)if(Oe(o,m))f!==o[m]&&(o[m]=f,p=!0);else{const P=Ns(m);a[P]=Od(r,l,P,f,t,!1)}else f!==o[m]&&(o[m]=f,p=!0)}}}else{py(t,e,a,o)&&(p=!0);let u;for(const d in l)(!e||!Oe(e,d)&&((u=to(d))===d||!Oe(e,u)))&&(r?s&&(s[d]!==void 0||s[u]!==void 0)&&(a[d]=Od(r,l,d,void 0,t,!0)):delete a[d]);if(o!==l)for(const d in o)(!e||!Oe(e,d)&&!0)&&(delete o[d],p=!0)}p&&mn(t.attrs,"set","")}function py(t,e,s,n){const[a,o]=t.propsOptions;let i=!1,l;if(e)for(let r in e){if(el(r))continue;const p=e[r];let u;a&&Oe(a,u=Ns(r))?!o||!o.includes(u)?s[u]=p:(l||(l={}))[u]=p:vp(t.emitsOptions,r)||(!(r in n)||p!==n[r])&&(n[r]=p,i=!0)}if(o){const r=ke(s),p=l||Je;for(let u=0;u<o.length;u++){const d=o[u];s[d]=Od(a,r,d,p[d],t,!Oe(p,d))}}return i}function Od(t,e,s,n,a,o){const i=t[s];if(i!=null){const l=Oe(i,"default");if(l&&n===void 0){const r=i.default;if(i.type!==Function&&!i.skipFactory&&Be(r)){const{propsDefaults:p}=a;if(s in p)n=p[s];else{const u=Fl(a);n=p[s]=r.call(null,e),u()}}else n=r;a.ce&&a.ce._setProp(s,n)}i[0]&&(o&&!l?n=!1:i[1]&&(n===""||n===to(s))&&(n=!0))}return n}const S_=new WeakMap;function uy(t,e,s=!1){const n=s?S_:e.propsCache,a=n.get(t);if(a)return a;const o=t.props,i={},l=[];let r=!1;if(!Be(t)){const u=d=>{r=!0;const[m,f]=uy(d,e,!0);ht(i,m),f&&l.push(...f)};!s&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!r)return Ze(t)&&n.set(t,Co),Co;if(Ie(o))for(let u=0;u<o.length;u++){const d=Ns(o[u]);gT(d)&&(i[d]=Je)}else if(o)for(const u in o){const d=Ns(u);if(gT(d)){const m=o[u],f=i[d]=Ie(m)||Be(m)?{type:m}:ht({},m),P=f.type;let _=!1,v=!0;if(Ie(P))for(let L=0;L<P.length;++L){const x=P[L],Y=Be(x)&&x.name;if(Y==="Boolean"){_=!0;break}else Y==="String"&&(v=!1)}else _=Be(P)&&P.name==="Boolean";f[0]=_,f[1]=v,(_||Oe(f,"default"))&&l.push(d)}}const p=[i,l];return Ze(t)&&n.set(t,p),p}function gT(t){return t[0]!=="$"&&!el(t)}const dy=t=>t[0]==="_"||t==="$stable",vm=t=>Ie(t)?t.map(qs):[qs(t)],__=(t,e,s)=>{if(e._n)return e;const n=t_((...a)=>vm(e(...a)),s);return n._c=!1,n},hy=(t,e,s)=>{const n=t._ctx;for(const a in t){if(dy(a))continue;const o=t[a];if(Be(o))e[a]=__(a,o,n);else if(o!=null){const i=vm(o);e[a]=()=>i}}},my=(t,e)=>{const s=vm(e);t.slots.default=()=>s},gy=(t,e,s)=>{for(const n in e)(s||n!=="_")&&(t[n]=e[n])},V_=(t,e,s)=>{const n=t.slots=ry();if(t.vnode.shapeFlag&32){const a=e._;a?(gy(n,e,s),s&&uI(n,"_",a,!0)):hy(e,n)}else e&&my(t,e)},v_=(t,e,s)=>{const{vnode:n,slots:a}=t;let o=!0,i=Je;if(n.shapeFlag&32){const l=e._;l?s&&l===1?o=!1:gy(a,e,s):(o=!e.$stable,hy(e,a)),i=e}else e&&(my(t,e),i={default:1});if(o)for(const l in a)!dy(l)&&i[l]==null&&delete a[l]},yt=j_;function x_(t){return H_(t)}function H_(t,e){const s=Ip();s.__VUE__=!0;const{insert:n,remove:a,patchProp:o,createElement:i,createText:l,createComment:r,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:f=Cs,insertStaticContent:P}=t,_=(V,H,C,q=null,j=null,J=null,se=void 0,X=null,Z=!!H.dynamicChildren)=>{if(V===H)return;V&&!qn(V,H)&&(q=w(V),U(V,j,J,!0),V=null),H.patchFlag===-2&&(Z=!1,H.dynamicChildren=null);const{type:$,ref:fe,shapeFlag:ie}=H;switch($){case xp:v(V,H,C,q);break;case ts:L(V,H,C,q);break;case ju:V==null&&x(H,C,q,se);break;case xs:I(V,H,C,q,j,J,se,X,Z);break;default:ie&1?A(V,H,C,q,j,J,se,X,Z):ie&6?N(V,H,C,q,j,J,se,X,Z):(ie&64||ie&128)&&$.process(V,H,C,q,j,J,se,X,Z,ce)}fe!=null&&j&&_c(fe,V&&V.ref,J,H||V,!H)},v=(V,H,C,q)=>{if(V==null)n(H.el=l(H.children),C,q);else{const j=H.el=V.el;H.children!==V.children&&p(j,H.children)}},L=(V,H,C,q)=>{V==null?n(H.el=r(H.children||""),C,q):H.el=V.el},x=(V,H,C,q)=>{[V.el,V.anchor]=P(V.children,H,C,q,V.el,V.anchor)},Y=({el:V,anchor:H},C,q)=>{let j;for(;V&&V!==H;)j=m(V),n(V,C,q),V=j;n(H,C,q)},K=({el:V,anchor:H})=>{let C;for(;V&&V!==H;)C=m(V),a(V),V=C;a(H)},A=(V,H,C,q,j,J,se,X,Z)=>{H.type==="svg"?se="svg":H.type==="math"&&(se="mathml"),V==null?R(H,C,q,j,J,se,X,Z):T(V,H,j,J,se,X,Z)},R=(V,H,C,q,j,J,se,X)=>{let Z,$;const{props:fe,shapeFlag:ie,transition:de,dirs:Pe}=V;if(Z=V.el=i(V.type,J,fe&&fe.is,fe),ie&8?u(Z,V.children):ie&16&&y(V.children,Z,null,q,j,Qu(V,J),se,X),Pe&&_a(V,null,q,"created"),S(Z,V,V.scopeId,se,q),fe){for(const ve in fe)ve!=="value"&&!el(ve)&&o(Z,ve,null,fe[ve],J,q);"value"in fe&&o(Z,"value",null,fe.value,J),($=fe.onVnodeBeforeMount)&&Ps($,q,V)}Pe&&_a(V,null,q,"beforeMount");const Te=K_(j,de);Te&&de.beforeEnter(Z),n(Z,H,C),(($=fe&&fe.onVnodeMounted)||Te||Pe)&&yt(()=>{$&&Ps($,q,V),Te&&de.enter(Z),Pe&&_a(V,null,q,"mounted")},j)},S=(V,H,C,q,j)=>{if(C&&f(V,C),q)for(let J=0;J<q.length;J++)f(V,q[J]);if(j){let J=j.subTree;if(H===J||xc(J.type)&&(J.ssContent===H||J.ssFallback===H)){const se=j.vnode;S(V,se,se.scopeId,se.slotScopeIds,j.parent)}}},y=(V,H,C,q,j,J,se,X,Z=0)=>{for(let $=Z;$<V.length;$++){const fe=V[$]=X?Gn(V[$]):qs(V[$]);_(null,fe,H,C,q,j,J,se,X)}},T=(V,H,C,q,j,J,se)=>{const X=H.el=V.el;let{patchFlag:Z,dynamicChildren:$,dirs:fe}=H;Z|=V.patchFlag&16;const ie=V.props||Je,de=H.props||Je;let Pe;if(C&&Va(C,!1),(Pe=de.onVnodeBeforeUpdate)&&Ps(Pe,C,H,V),fe&&_a(H,V,C,"beforeUpdate"),C&&Va(C,!0),(ie.innerHTML&&de.innerHTML==null||ie.textContent&&de.textContent==null)&&u(X,""),$?E(V.dynamicChildren,$,X,C,q,Qu(H,j),J):se||z(V,H,X,null,C,q,Qu(H,j),J,!1),Z>0){if(Z&16)k(X,ie,de,C,j);else if(Z&2&&ie.class!==de.class&&o(X,"class",null,de.class,j),Z&4&&o(X,"style",ie.style,de.style,j),Z&8){const Te=H.dynamicProps;for(let ve=0;ve<Te.length;ve++){const Ce=Te[ve],At=ie[Ce],Pt=de[Ce];(Pt!==At||Ce==="value")&&o(X,Ce,At,Pt,j,C)}}Z&1&&V.children!==H.children&&u(X,H.children)}else!se&&$==null&&k(X,ie,de,C,j);((Pe=de.onVnodeUpdated)||fe)&&yt(()=>{Pe&&Ps(Pe,C,H,V),fe&&_a(H,V,C,"updated")},q)},E=(V,H,C,q,j,J,se)=>{for(let X=0;X<H.length;X++){const Z=V[X],$=H[X],fe=Z.el&&(Z.type===xs||!qn(Z,$)||Z.shapeFlag&70)?d(Z.el):C;_(Z,$,fe,null,q,j,J,se,!0)}},k=(V,H,C,q,j)=>{if(H!==C){if(H!==Je)for(const J in H)!el(J)&&!(J in C)&&o(V,J,H[J],null,j,q);for(const J in C){if(el(J))continue;const se=C[J],X=H[J];se!==X&&J!=="value"&&o(V,J,X,se,j,q)}"value"in C&&o(V,"value",H.value,C.value,j)}},I=(V,H,C,q,j,J,se,X,Z)=>{const $=H.el=V?V.el:l(""),fe=H.anchor=V?V.anchor:l("");let{patchFlag:ie,dynamicChildren:de,slotScopeIds:Pe}=H;Pe&&(X=X?X.concat(Pe):Pe),V==null?(n($,C,q),n(fe,C,q),y(H.children||[],C,fe,j,J,se,X,Z)):ie>0&&ie&64&&de&&V.dynamicChildren?(E(V.dynamicChildren,de,C,j,J,se,X),(H.key!=null||j&&H===j.subTree)&&xm(V,H,!0)):z(V,H,C,fe,j,J,se,X,Z)},N=(V,H,C,q,j,J,se,X,Z)=>{H.slotScopeIds=X,V==null?H.shapeFlag&512?j.ctx.activate(H,C,q,se,Z):D(H,C,q,j,J,se,Z):le(V,H,Z)},D=(V,H,C,q,j,J,se)=>{const X=V.component=W_(V,q,j);if(Sp(V)&&(X.ctx.renderer=ce),Z_(X,!1,se),X.asyncDep){if(j&&j.registerDep(X,oe,se),!V.el){const Z=X.subTree=rs(ts);L(null,Z,H,C)}}else oe(X,V,H,C,j,J,se)},le=(V,H,C)=>{const q=H.component=V.component;if(Q_(V,H,C))if(q.asyncDep&&!q.asyncResolved){W(q,H,C);return}else q.next=H,q.update();else H.el=V.el,q.vnode=H},oe=(V,H,C,q,j,J,se)=>{const X=()=>{if(V.isMounted){let{next:ie,bu:de,u:Pe,parent:Te,vnode:ve}=V;{const It=fy(V);if(It){ie&&(ie.el=ve.el,W(V,ie,se)),It.asyncDep.then(()=>{V.isUnmounted||X()});return}}let Ce=ie,At;Va(V,!1),ie?(ie.el=ve.el,W(V,ie,se)):ie=ve,de&&tl(de),(At=ie.props&&ie.props.onVnodeBeforeUpdate)&&Ps(At,Te,ie,ve),Va(V,!0);const Pt=Ou(V),ps=V.subTree;V.subTree=Pt,_(ps,Pt,d(ps.el),w(ps),V,j,J),ie.el=Pt.el,Ce===null&&O_(V,Pt.el),Pe&&yt(Pe,j),(At=ie.props&&ie.props.onVnodeUpdated)&&yt(()=>Ps(At,Te,ie,ve),j)}else{let ie;const{el:de,props:Pe}=H,{bm:Te,m:ve,parent:Ce,root:At,type:Pt}=V,ps=Do(H);if(Va(V,!1),Te&&tl(Te),!ps&&(ie=Pe&&Pe.onVnodeBeforeMount)&&Ps(ie,Ce,H),Va(V,!0),de&&Ue){const It=()=>{V.subTree=Ou(V),Ue(de,V.subTree,V,j,null)};ps&&Pt.__asyncHydrate?Pt.__asyncHydrate(de,V,It):It()}else{At.ce&&At.ce._injectChildStyle(Pt);const It=V.subTree=Ou(V);_(null,It,C,q,V,j,J),H.el=It.el}if(ve&&yt(ve,j),!ps&&(ie=Pe&&Pe.onVnodeMounted)){const It=H;yt(()=>Ps(ie,Ce,It),j)}(H.shapeFlag&256||Ce&&Do(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&V.a&&yt(V.a,j),V.isMounted=!0,H=C=q=null}};V.scope.on();const Z=V.effect=new TI(X);V.scope.off();const $=V.update=Z.run.bind(Z),fe=V.job=Z.runIfDirty.bind(Z);fe.i=V,fe.id=V.uid,Z.scheduler=()=>ym(fe),Va(V,!0),$()},W=(V,H,C)=>{H.component=V;const q=V.vnode.props;V.vnode=H,V.next=null,k_(V,H.props,q,C),v_(V,H.children,C),ha(),oT(V),ma()},z=(V,H,C,q,j,J,se,X,Z=!1)=>{const $=V&&V.children,fe=V?V.shapeFlag:0,ie=H.children,{patchFlag:de,shapeFlag:Pe}=H;if(de>0){if(de&128){Ve($,ie,C,q,j,J,se,X,Z);return}else if(de&256){he($,ie,C,q,j,J,se,X,Z);return}}Pe&8?(fe&16&&pe($,j,J),ie!==$&&u(C,ie)):fe&16?Pe&16?Ve($,ie,C,q,j,J,se,X,Z):pe($,j,J,!0):(fe&8&&u(C,""),Pe&16&&y(ie,C,q,j,J,se,X,Z))},he=(V,H,C,q,j,J,se,X,Z)=>{V=V||Co,H=H||Co;const $=V.length,fe=H.length,ie=Math.min($,fe);let de;for(de=0;de<ie;de++){const Pe=H[de]=Z?Gn(H[de]):qs(H[de]);_(V[de],Pe,C,null,j,J,se,X,Z)}$>fe?pe(V,j,J,!0,!1,ie):y(H,C,q,j,J,se,X,Z,ie)},Ve=(V,H,C,q,j,J,se,X,Z)=>{let $=0;const fe=H.length;let ie=V.length-1,de=fe-1;for(;$<=ie&&$<=de;){const Pe=V[$],Te=H[$]=Z?Gn(H[$]):qs(H[$]);if(qn(Pe,Te))_(Pe,Te,C,null,j,J,se,X,Z);else break;$++}for(;$<=ie&&$<=de;){const Pe=V[ie],Te=H[de]=Z?Gn(H[de]):qs(H[de]);if(qn(Pe,Te))_(Pe,Te,C,null,j,J,se,X,Z);else break;ie--,de--}if($>ie){if($<=de){const Pe=de+1,Te=Pe<fe?H[Pe].el:q;for(;$<=de;)_(null,H[$]=Z?Gn(H[$]):qs(H[$]),C,Te,j,J,se,X,Z),$++}}else if($>de)for(;$<=ie;)U(V[$],j,J,!0),$++;else{const Pe=$,Te=$,ve=new Map;for($=Te;$<=de;$++){const Vt=H[$]=Z?Gn(H[$]):qs(H[$]);Vt.key!=null&&ve.set(Vt.key,$)}let Ce,At=0;const Pt=de-Te+1;let ps=!1,It=0;const Ln=new Array(Pt);for($=0;$<Pt;$++)Ln[$]=0;for($=Pe;$<=ie;$++){const Vt=V[$];if(At>=Pt){U(Vt,j,J,!0);continue}let gs;if(Vt.key!=null)gs=ve.get(Vt.key);else for(Ce=Te;Ce<=de;Ce++)if(Ln[Ce-Te]===0&&qn(Vt,H[Ce])){gs=Ce;break}gs===void 0?U(Vt,j,J,!0):(Ln[gs-Te]=$+1,gs>=It?It=gs:ps=!0,_(Vt,H[gs],C,null,j,J,se,X,Z),At++)}const Ti=ps?Y_(Ln):Co;for(Ce=Ti.length-1,$=Pt-1;$>=0;$--){const Vt=Te+$,gs=H[Vt],Pr=Vt+1<fe?H[Vt+1].el:q;Ln[$]===0?_(null,gs,C,Pr,j,J,se,X,Z):ps&&(Ce<0||$!==Ti[Ce]?He(gs,C,Pr,2):Ce--)}}},He=(V,H,C,q,j=null)=>{const{el:J,type:se,transition:X,children:Z,shapeFlag:$}=V;if($&6){He(V.component.subTree,H,C,q);return}if($&128){V.suspense.move(H,C,q);return}if($&64){se.move(V,H,C,ce);return}if(se===xs){n(J,H,C);for(let ie=0;ie<Z.length;ie++)He(Z[ie],H,C,q);n(V.anchor,H,C);return}if(se===ju){Y(V,H,C);return}if(q!==2&&$&1&&X)if(q===0)X.beforeEnter(J),n(J,H,C),yt(()=>X.enter(J),j);else{const{leave:ie,delayLeave:de,afterLeave:Pe}=X,Te=()=>n(J,H,C),ve=()=>{ie(J,()=>{Te(),Pe&&Pe()})};de?de(J,Te,ve):ve()}else n(J,H,C)},U=(V,H,C,q=!1,j=!1)=>{const{type:J,props:se,ref:X,children:Z,dynamicChildren:$,shapeFlag:fe,patchFlag:ie,dirs:de,cacheIndex:Pe}=V;if(ie===-2&&(j=!1),X!=null&&_c(X,null,C,V,!0),Pe!=null&&(H.renderCache[Pe]=void 0),fe&256){H.ctx.deactivate(V);return}const Te=fe&1&&de,ve=!Do(V);let Ce;if(ve&&(Ce=se&&se.onVnodeBeforeUnmount)&&Ps(Ce,H,V),fe&6)ot(V.component,C,q);else{if(fe&128){V.suspense.unmount(C,q);return}Te&&_a(V,null,H,"beforeUnmount"),fe&64?V.type.remove(V,H,C,ce,q):$&&!$.hasOnce&&(J!==xs||ie>0&&ie&64)?pe($,H,C,!1,!0):(J===xs&&ie&384||!j&&fe&16)&&pe(Z,H,C),q&&ye(V)}(ve&&(Ce=se&&se.onVnodeUnmounted)||Te)&&yt(()=>{Ce&&Ps(Ce,H,V),Te&&_a(V,null,H,"unmounted")},C)},ye=V=>{const{type:H,el:C,anchor:q,transition:j}=V;if(H===xs){pt(C,q);return}if(H===ju){K(V);return}const J=()=>{a(C),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(V.shapeFlag&1&&j&&!j.persisted){const{leave:se,delayLeave:X}=j,Z=()=>se(C,J);X?X(V.el,J,Z):Z()}else J()},pt=(V,H)=>{let C;for(;V!==H;)C=m(V),a(V),V=C;a(H)},ot=(V,H,C)=>{const{bum:q,scope:j,job:J,subTree:se,um:X,m:Z,a:$}=V;vc(Z),vc($),q&&tl(q),j.stop(),J&&(J.flags|=8,U(se,V,H,C)),X&&yt(X,H),yt(()=>{V.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&V.asyncDep&&!V.asyncResolved&&V.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},pe=(V,H,C,q=!1,j=!1,J=0)=>{for(let se=J;se<V.length;se++)U(V[se],H,C,q,j)},w=V=>{if(V.shapeFlag&6)return w(V.component.subTree);if(V.shapeFlag&128)return V.suspense.next();const H=m(V.anchor||V.el),C=H&&H[GI];return C?m(C):H};let ne=!1;const te=(V,H,C)=>{V==null?H._vnode&&U(H._vnode,null,null,!0):_(H._vnode||null,V,H,null,null,null,C),H._vnode=V,ne||(ne=!0,oT(),RI(),ne=!1)},ce={p:_,um:U,m:He,r:ye,mt:D,mc:y,pc:z,pbc:E,n:w,o:t};let Le,Ue;return e&&([Le,Ue]=e(ce)),{render:te,hydrate:Le,createApp:E_(te,Le)}}function Qu({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Va({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function K_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xm(t,e,s=!1){const n=t.children,a=e.children;if(Ie(n)&&Ie(a))for(let o=0;o<n.length;o++){const i=n[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=Gn(a[o]),l.el=i.el),!s&&l.patchFlag!==-2&&xm(i,l)),l.type===xp&&(l.el=i.el)}}function Y_(t){const e=t.slice(),s=[0];let n,a,o,i,l;const r=t.length;for(n=0;n<r;n++){const p=t[n];if(p!==0){if(a=s[s.length-1],t[a]<p){e[n]=a,s.push(n);continue}for(o=0,i=s.length-1;o<i;)l=o+i>>1,t[s[l]]<p?o=l+1:i=l;p<t[s[o]]&&(o>0&&(e[n]=s[o-1]),s[o]=n)}}for(o=s.length,i=s[o-1];o-- >0;)s[o]=i,i=e[i];return s}function fy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fy(e)}function vc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const L_=Symbol.for("v-scx"),M_=()=>Ft(L_);function C_(t,e){return Hm(t,null,e)}function ze(t,e,s){return Hm(t,e,s)}function Hm(t,e,s=Je){const{immediate:n,deep:a,flush:o,once:i}=s,l=ht({},s),r=e&&n||!e&&o!=="post";let p;if(Sl){if(o==="sync"){const f=M_();p=f.__watcherHandles||(f.__watcherHandles=[])}else if(!r){const f=()=>{};return f.stop=Cs,f.resume=Cs,f.pause=Cs,f}}const u=St;l.call=(f,P,_)=>Ds(f,u,P,_);let d=!1;o==="post"?l.scheduler=f=>{yt(f,u&&u.suspense)}:o!=="sync"&&(d=!0,l.scheduler=(f,P)=>{P?f():ym(f)}),l.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const m=W2(t,e,l);return Sl&&(p?p.push(m):r&&m()),m}function A_(t,e,s){const n=this.proxy,a=nt(t)?t.includes(".")?Ty(n,t):()=>n[t]:t.bind(n,n);let o;Be(e)?o=e:(o=e.handler,s=e);const i=Fl(this),l=Hm(a,o.bind(n),s);return i(),l}function Ty(t,e){const s=e.split(".");return()=>{let n=t;for(let a=0;a<s.length&&n;a++)n=n[s[a]];return n}}const w_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ns(e)}Modifiers`]||t[`${to(e)}Modifiers`];function D_(t,e,...s){if(t.isUnmounted)return;const n=t.vnode.props||Je;let a=s;const o=e.startsWith("update:"),i=o&&w_(n,e.slice(7));i&&(i.trim&&(a=s.map(u=>nt(u)?u.trim():u)),i.number&&(a=s.map(g2)));let l,r=n[l=Lu(e)]||n[l=Lu(Ns(e))];!r&&o&&(r=n[l=Lu(to(e))]),r&&Ds(r,t,6,a);const p=n[l+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ds(p,t,6,a)}}function Py(t,e,s=!1){const n=e.emitsCache,a=n.get(t);if(a!==void 0)return a;const o=t.emits;let i={},l=!1;if(!Be(t)){const r=p=>{const u=Py(p,e,!0);u&&(l=!0,ht(i,u))};!s&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return!o&&!l?(Ze(t)&&n.set(t,null),null):(Ie(o)?o.forEach(r=>i[r]=null):ht(i,o),Ze(t)&&n.set(t,i),i)}function vp(t,e){return!t||!fp(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,to(e))||Oe(t,e))}function Ou(t){const{type:e,vnode:s,proxy:n,withProxy:a,propsOptions:[o],slots:i,attrs:l,emit:r,render:p,renderCache:u,props:d,data:m,setupState:f,ctx:P,inheritAttrs:_}=t,v=Sc(t);let L,x;try{if(s.shapeFlag&4){const K=a||n,A=K;L=qs(p.call(A,K,u,d,f,m,P)),x=l}else{const K=e;L=qs(K.length>1?K(d,{attrs:l,slots:i,emit:r}):K(d,null)),x=e.props?l:b_(l)}}catch(K){il.length=0,kp(K,t,1),L=rs(ts)}let Y=L;if(x&&_!==!1){const K=Object.keys(x),{shapeFlag:A}=Y;K.length&&A&7&&(o&&K.some(cm)&&(x=R_(x,o)),Y=kn(Y,x,!1,!0))}return s.dirs&&(Y=kn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(s.dirs):s.dirs),s.transition&&ia(Y,s.transition),L=Y,Sc(v),L}const b_=t=>{let e;for(const s in t)(s==="class"||s==="style"||fp(s))&&((e||(e={}))[s]=t[s]);return e},R_=(t,e)=>{const s={};for(const n in t)(!cm(n)||!(n.slice(9)in e))&&(s[n]=t[n]);return s};function Q_(t,e,s){const{props:n,children:a,component:o}=t,{props:i,children:l,patchFlag:r}=e,p=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&r>=0){if(r&1024)return!0;if(r&16)return n?fT(n,i,p):!!i;if(r&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(i[m]!==n[m]&&!vp(p,m))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:n===i?!1:n?i?fT(n,i,p):!0:!!i;return!1}function fT(t,e,s){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let a=0;a<n.length;a++){const o=n[a];if(e[o]!==t[o]&&!vp(s,o))return!0}return!1}function O_({vnode:t,parent:e},s){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=s,e=e.parent;else break}}const xc=t=>t.__isSuspense;function j_(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):e_(t)}const xs=Symbol.for("v-fgt"),xp=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),ju=Symbol.for("v-stc"),il=[];let ds=null;function Iy(t=!1){il.push(ds=t?null:[])}function G_(){il.pop(),ds=il[il.length-1]||null}let Nl=1;function TT(t,e=!1){Nl+=t,t<0&&ds&&e&&(ds.hasOnce=!0)}function yy(t){return t.dynamicChildren=Nl>0?ds||Co:null,G_(),Nl>0&&ds&&ds.push(t),t}function VR(t,e,s,n,a,o){return yy(Ny(t,e,s,n,a,o,!0))}function Ey(t,e,s,n,a){return yy(rs(t,e,s,n,a,!0))}function kl(t){return t?t.__v_isVNode===!0:!1}function qn(t,e){return t.type===e.type&&t.key===e.key}const By=({key:t})=>t!=null?t:null,lc=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||it(t)||Be(t)?{i:ss,r:t,k:e,f:!!s}:t:null);function Ny(t,e=null,s=null,n=0,a=null,o=t===xs?0:1,i=!1,l=!1){const r={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&By(e),ref:e&&lc(e),scopeId:OI,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ss};return l?(Km(r,s),o&128&&t.normalize(r)):s&&(r.shapeFlag|=nt(s)?8:16),Nl>0&&!i&&ds&&(r.patchFlag>0||o&6)&&r.patchFlag!==32&&ds.push(r),r}const rs=U_;function U_(t,e=null,s=null,n=0,a=null,o=!1){if((!t||t===ay)&&(t=ts),kl(t)){const l=kn(t,e,!0);return s&&Km(l,s),Nl>0&&!o&&ds&&(l.shapeFlag&6?ds[ds.indexOf(t)]=l:ds.push(l)),l.patchFlag=-2,l}if(sV(t)&&(t=t.__vccOpts),e){e=z_(e);let{class:l,style:r}=e;l&&!nt(l)&&(e.class=Ep(l)),Ze(r)&&(Im(r)&&!Ie(r)&&(r=ht({},r)),e.style=yp(r))}const i=nt(t)?1:xc(t)?128:UI(t)?64:Ze(t)?4:Be(t)?2:0;return Ny(t,e,s,n,a,i,o,!0)}function z_(t){return t?Im(t)||cy(t)?ht({},t):t:null}function kn(t,e,s=!1,n=!1){const{props:a,ref:o,patchFlag:i,children:l,transition:r}=t,p=e?F_(a||{},e):a,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&By(p),ref:e&&e.ref?s&&o?Ie(o)?o.concat(lc(e)):[o,lc(e)]:lc(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xs?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:r,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return r&&n&&ia(u,r.clone(u)),u}function q_(t=" ",e=0){return rs(xp,null,t,e)}function vR(t="",e=!1){return e?(Iy(),Ey(ts,null,t)):rs(ts,null,t)}function qs(t){return t==null||typeof t=="boolean"?rs(ts):Ie(t)?rs(xs,null,t.slice()):kl(t)?Gn(t):rs(xp,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function Km(t,e){let s=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(Ie(e))s=16;else if(typeof e=="object")if(n&65){const a=e.default;a&&(a._c&&(a._d=!1),Km(t,a()),a._c&&(a._d=!0));return}else{s=32;const a=e._;!a&&!cy(e)?e._ctx=ss:a===3&&ss&&(ss.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:ss},s=32):(e=String(e),n&64?(s=16,e=[q_(e)]):s=8);t.children=e,t.shapeFlag|=s}function F_(...t){const e={};for(let s=0;s<t.length;s++){const n=t[s];for(const a in n)if(a==="class")e.class!==n.class&&(e.class=Ep([e.class,n.class]));else if(a==="style")e.style=yp([e.style,n.style]);else if(fp(a)){const o=e[a],i=n[a];i&&o!==i&&!(Ie(o)&&o.includes(i))&&(e[a]=o?[].concat(o,i):i)}else a!==""&&(e[a]=n[a])}return e}function Ps(t,e,s,n=null){Ds(t,e,7,[s,n])}const J_=iy();let $_=0;function W_(t,e,s){const n=t.type,a=(e?e.appContext:t.appContext)||J_,o={uid:$_++,vnode:t,type:n,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uy(n,a),emitsOptions:Py(n,a),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=D_.bind(null,o),t.ce&&t.ce(o),o}let St=null;const rt=()=>St||ss;let Hc,jd;{const t=Ip(),e=(s,n)=>{let a;return(a=t[s])||(a=t[s]=[]),a.push(n),o=>{a.length>1?a.forEach(i=>i(o)):a[0](o)}};Hc=e("__VUE_INSTANCE_SETTERS__",s=>St=s),jd=e("__VUE_SSR_SETTERS__",s=>Sl=s)}const Fl=t=>{const e=St;return Hc(t),t.scope.on(),()=>{t.scope.off(),Hc(e)}},PT=()=>{St&&St.scope.off(),Hc(null)};function ky(t){return t.vnode.shapeFlag&4}let Sl=!1;function Z_(t,e=!1,s=!1){e&&jd(e);const{props:n,children:a}=t.vnode,o=ky(t);N_(t,n,o,e),V_(t,a,s);const i=o?X_(t,e):void 0;return e&&jd(!1),i}function X_(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,m_);const{setup:n}=s;if(n){ha();const a=t.setupContext=n.length>1?tV(t):null,o=Fl(t),i=ql(n,t,0,[t.props,a]),l=rI(i);if(ma(),o(),(l||t.sp)&&!Do(t)&&XI(t),l){if(i.then(PT,PT),e)return i.then(r=>{IT(t,r,e)}).catch(r=>{kp(r,t,0)});t.asyncDep=i}else IT(t,i,e)}else Sy(t,e)}function IT(t,e,s){Be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ze(e)&&(t.setupState=CI(e)),Sy(t,s)}let yT;function Sy(t,e,s){const n=t.type;if(!t.render){if(!e&&yT&&!n.render){const a=n.template||Vm(t).template;if(a){const{isCustomElement:o,compilerOptions:i}=t.appContext.config,{delimiters:l,compilerOptions:r}=n,p=ht(ht({isCustomElement:o,delimiters:l},i),r);n.render=yT(a,p)}}t.render=n.render||Cs}{const a=Fl(t);ha();try{g_(t)}finally{ma(),a()}}}const eV={get(t,e){return Ot(t,"get",""),t[e]}};function tV(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,eV),slots:t.slots,emit:t.emit,expose:e}}function Hp(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(CI(no(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in ol)return ol[s](t)},has(e,s){return s in e||s in ol}})):t.proxy}function Gd(t,e=!0){return Be(t)?t.displayName||t.name:t.name||e&&t.__name}function sV(t){return Be(t)&&"__vccOpts"in t}const Q=(t,e)=>J2(t,e,Sl);function O(t,e,s){const n=arguments.length;return n===2?Ze(e)&&!Ie(e)?kl(e)?rs(t,null,[e]):rs(t,e):rs(t,null,e):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&kl(s)&&(s=[s]),rs(t,e,s))}const nV="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ud;const ET=typeof window!="undefined"&&window.trustedTypes;if(ET)try{Ud=ET.createPolicy("vue",{createHTML:t=>t})}catch{}const _y=Ud?t=>Ud.createHTML(t):t=>t,aV="http://www.w3.org/2000/svg",oV="http://www.w3.org/1998/Math/MathML",hn=typeof document!="undefined"?document:null,BT=hn&&hn.createElement("template"),iV={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,n)=>{const a=e==="svg"?hn.createElementNS(aV,t):e==="mathml"?hn.createElementNS(oV,t):s?hn.createElement(t,{is:s}):hn.createElement(t);return t==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,n,a,o){const i=s?s.previousSibling:e.lastChild;if(a&&(a===o||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),s),!(a===o||!(a=a.nextSibling)););else{BT.innerHTML=_y(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const l=BT.content;if(n==="svg"||n==="mathml"){const r=l.firstChild;for(;r.firstChild;)l.appendChild(r.firstChild);l.removeChild(r)}e.insertBefore(l,s)}return[i?i.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},wn="transition",Ki="animation",Uo=Symbol("_vtc"),Vy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vy=ht({},JI,Vy),lV=t=>(t.displayName="Transition",t.props=vy,t),Kc=lV((t,{slots:e})=>O(o_,xy(t),e)),va=(t,e=[])=>{Ie(t)?t.forEach(s=>s(...e)):t&&t(...e)},NT=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function xy(t){const e={};for(const I in t)I in Vy||(e[I]=t[I]);if(t.css===!1)return e;const{name:s="v",type:n,duration:a,enterFromClass:o=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:r=o,appearActiveClass:p=i,appearToClass:u=l,leaveFromClass:d=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=t,P=rV(a),_=P&&P[0],v=P&&P[1],{onBeforeEnter:L,onEnter:x,onEnterCancelled:Y,onLeave:K,onLeaveCancelled:A,onBeforeAppear:R=L,onAppear:S=x,onAppearCancelled:y=Y}=e,T=(I,N,D,le)=>{I._enterCancelled=le,Rn(I,N?u:l),Rn(I,N?p:i),D&&D()},E=(I,N)=>{I._isLeaving=!1,Rn(I,d),Rn(I,f),Rn(I,m),N&&N()},k=I=>(N,D)=>{const le=I?S:x,oe=()=>T(N,I,D);va(le,[N,oe]),kT(()=>{Rn(N,I?r:o),Us(N,I?u:l),NT(le)||ST(N,n,_,oe)})};return ht(e,{onBeforeEnter(I){va(L,[I]),Us(I,o),Us(I,i)},onBeforeAppear(I){va(R,[I]),Us(I,r),Us(I,p)},onEnter:k(!1),onAppear:k(!0),onLeave(I,N){I._isLeaving=!0;const D=()=>E(I,N);Us(I,d),I._enterCancelled?(Us(I,m),zd()):(zd(),Us(I,m)),kT(()=>{!I._isLeaving||(Rn(I,d),Us(I,f),NT(K)||ST(I,n,v,D))}),va(K,[I,D])},onEnterCancelled(I){T(I,!1,void 0,!0),va(Y,[I])},onAppearCancelled(I){T(I,!0,void 0,!0),va(y,[I])},onLeaveCancelled(I){E(I),va(A,[I])}})}function rV(t){if(t==null)return null;if(Ze(t))return[Gu(t.enter),Gu(t.leave)];{const e=Gu(t);return[e,e]}}function Gu(t){return f2(t)}function Us(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t[Uo]||(t[Uo]=new Set)).add(e)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.remove(n));const s=t[Uo];s&&(s.delete(e),s.size||(t[Uo]=void 0))}function kT(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cV=0;function ST(t,e,s,n){const a=t._endId=++cV,o=()=>{a===t._endId&&n()};if(s!=null)return setTimeout(o,s);const{type:i,timeout:l,propCount:r}=Hy(t,e);if(!i)return n();const p=i+"end";let u=0;const d=()=>{t.removeEventListener(p,m),o()},m=f=>{f.target===t&&++u>=r&&d()};setTimeout(()=>{u<r&&d()},l+1),t.addEventListener(p,m)}function Hy(t,e){const s=window.getComputedStyle(t),n=P=>(s[P]||"").split(", "),a=n(`${wn}Delay`),o=n(`${wn}Duration`),i=_T(a,o),l=n(`${Ki}Delay`),r=n(`${Ki}Duration`),p=_T(l,r);let u=null,d=0,m=0;e===wn?i>0&&(u=wn,d=i,m=o.length):e===Ki?p>0&&(u=Ki,d=p,m=r.length):(d=Math.max(i,p),u=d>0?i>p?wn:Ki:null,m=u?u===wn?o.length:r.length:0);const f=u===wn&&/\b(transform|all)(,|$)/.test(n(`${wn}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:f}}function _T(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((s,n)=>VT(s)+VT(t[n])))}function VT(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zd(){return document.body.offsetHeight}function pV(t,e,s){const n=t[Uo];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const Yc=Symbol("_vod"),Ky=Symbol("_vsh"),xR={beforeMount(t,{value:e},{transition:s}){t[Yc]=t.style.display==="none"?"":t.style.display,s&&e?s.beforeEnter(t):Yi(t,e)},mounted(t,{value:e},{transition:s}){s&&e&&s.enter(t)},updated(t,{value:e,oldValue:s},{transition:n}){!e!=!s&&(n?e?(n.beforeEnter(t),Yi(t,!0),n.enter(t)):n.leave(t,()=>{Yi(t,!1)}):Yi(t,e))},beforeUnmount(t,{value:e}){Yi(t,e)}};function Yi(t,e){t.style.display=e?t[Yc]:"none",t[Ky]=!e}const uV=Symbol(""),dV=/(^|;)\s*display\s*:/;function hV(t,e,s){const n=t.style,a=nt(s);let o=!1;if(s&&!a){if(e)if(nt(e))for(const i of e.split(";")){const l=i.slice(0,i.indexOf(":")).trim();s[l]==null&&rc(n,l,"")}else for(const i in e)s[i]==null&&rc(n,i,"");for(const i in s)i==="display"&&(o=!0),rc(n,i,s[i])}else if(a){if(e!==s){const i=n[uV];i&&(s+=";"+i),n.cssText=s,o=dV.test(s)}}else e&&t.removeAttribute("style");Yc in t&&(t[Yc]=o?n.display:"",t[Ky]&&(n.display="none"))}const vT=/\s*!important$/;function rc(t,e,s){if(Ie(s))s.forEach(n=>rc(t,e,n));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const n=mV(t,e);vT.test(s)?t.setProperty(to(n),s.replace(vT,""),"important"):t[n]=s}}const xT=["Webkit","Moz","ms"],Uu={};function mV(t,e){const s=Uu[e];if(s)return s;let n=Ns(e);if(n!=="filter"&&n in t)return Uu[e]=n;n=Pp(n);for(let a=0;a<xT.length;a++){const o=xT[a]+n;if(o in t)return Uu[e]=o}return e}const HT="http://www.w3.org/1999/xlink";function KT(t,e,s,n,a,o=B2(e)){n&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(HT,e.slice(6,e.length)):t.setAttributeNS(HT,e,s):s==null||o&&!dI(s)?t.removeAttribute(e):t.setAttribute(e,o?"":da(s)?String(s):s)}function YT(t,e,s,n,a){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?_y(s):s);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,r=s==null?t.type==="checkbox"?"on":"":String(s);(l!==r||!("_value"in t))&&(t.value=r),s==null&&t.removeAttribute(e),t._value=s;return}let i=!1;if(s===""||s==null){const l=typeof t[e];l==="boolean"?s=dI(s):s==null&&l==="string"?(s="",i=!0):l==="number"&&(s=0,i=!0)}try{t[e]=s}catch{}i&&t.removeAttribute(a||e)}function gV(t,e,s,n){t.addEventListener(e,s,n)}function fV(t,e,s,n){t.removeEventListener(e,s,n)}const LT=Symbol("_vei");function TV(t,e,s,n,a=null){const o=t[LT]||(t[LT]={}),i=o[e];if(n&&i)i.value=n;else{const[l,r]=PV(e);if(n){const p=o[e]=EV(n,a);gV(t,l,p,r)}else i&&(fV(t,l,i,r),o[e]=void 0)}}const MT=/(?:Once|Passive|Capture)$/;function PV(t){let e;if(MT.test(t)){e={};let n;for(;n=t.match(MT);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):to(t.slice(2)),e]}let zu=0;const IV=Promise.resolve(),yV=()=>zu||(IV.then(()=>zu=0),zu=Date.now());function EV(t,e){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Ds(BV(n,s.value),e,5,[n])};return s.value=t,s.attached=yV(),s}function BV(t,e){if(Ie(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(n=>a=>!a._stopped&&n&&n(a))}else return e}const CT=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NV=(t,e,s,n,a,o)=>{const i=a==="svg";e==="class"?pV(t,n,i):e==="style"?hV(t,s,n):fp(e)?cm(e)||TV(t,e,s,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kV(t,e,n,i))?(YT(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&KT(t,e,n,i,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(n))?YT(t,Ns(e),n,o,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),KT(t,e,n,i))};function kV(t,e,s,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&CT(e)&&Be(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return CT(e)&&nt(s)?!1:e in t}const Yy=new WeakMap,Ly=new WeakMap,Lc=Symbol("_moveCb"),AT=Symbol("_enterCb"),SV=t=>(delete t.props.mode,t),_V=SV({name:"TransitionGroup",props:ht({},vy,{tag:String,moveClass:String}),setup(t,{slots:e}){const s=rt(),n=FI();let a,o;return Nm(()=>{if(!a.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!KV(a[0].el,s.vnode.el,i))return;a.forEach(vV),a.forEach(xV);const l=a.filter(HV);zd(),l.forEach(r=>{const p=r.el,u=p.style;Us(p,i),u.transform=u.webkitTransform=u.transitionDuration="";const d=p[Lc]=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",d),p[Lc]=null,Rn(p,i))};p.addEventListener("transitionend",d)})}),()=>{const i=ke(t),l=xy(i);let r=i.tag||xs;if(a=[],o)for(let p=0;p<o.length;p++){const u=o[p];u.el&&u.el instanceof Element&&(a.push(u),ia(u,Bl(u,l,n,s)),Yy.set(u,u.el.getBoundingClientRect()))}o=e.default?Em(e.default()):[];for(let p=0;p<o.length;p++){const u=o[p];u.key!=null&&ia(u,Bl(u,l,n,s))}return rs(r,null,o)}}}),VV=_V;function vV(t){const e=t.el;e[Lc]&&e[Lc](),e[AT]&&e[AT]()}function xV(t){Ly.set(t,t.el.getBoundingClientRect())}function HV(t){const e=Yy.get(t),s=Ly.get(t),n=e.left-s.left,a=e.top-s.top;if(n||a){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${n}px,${a}px)`,o.transitionDuration="0s",t}}function KV(t,e,s){const n=t.cloneNode(),a=t[Uo];a&&a.forEach(l=>{l.split(/\s+/).forEach(r=>r&&n.classList.remove(r))}),s.split(/\s+/).forEach(l=>l&&n.classList.add(l)),n.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(n);const{hasTransform:i}=Hy(n);return o.removeChild(n),i}const YV=["ctrl","shift","alt","meta"],LV={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YV.some(s=>t[`${s}Key`]&&!e.includes(s))},HR=(t,e)=>{const s=t._withMods||(t._withMods={}),n=e.join(".");return s[n]||(s[n]=(a,...o)=>{for(let i=0;i<e.length;i++){const l=LV[e[i]];if(l&&l(a,e))return}return t(a,...o)})},MV=ht({patchProp:NV},iV);let wT;function CV(){return wT||(wT=x_(MV))}const My=(...t)=>{const e=CV().createApp(...t),{mount:s}=e;return e.mount=n=>{const a=wV(n);if(!a)return;const o=e._component;!Be(o)&&!o.render&&!o.template&&(o.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const i=s(a,!1,AV(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),i},e};function AV(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wV(t){return nt(t)?document.querySelector(t):t}function ao(t,e,s,n){return Object.defineProperty(t,e,{get:s,set:n,enumerable:!0}),t}function KR(t,e){for(const s in e)ao(t,s,e[s]);return t}const la=xe(!1);let qd;function DV(t,e){const s=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:s[5]||s[3]||s[1]||"",version:s[4]||s[2]||"0",platform:e[0]||""}}function bV(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Cy="ontouchstart"in window||window.navigator.maxTouchPoints>0;function RV(t){const e=t.toLowerCase(),s=bV(e),n=DV(e,s),a={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};n.browser&&(a[n.browser]=!0,a.version=n.version,a.versionNumber=parseInt(n.version,10)),n.platform&&(a[n.platform]=!0);const o=a.android||a.ios||a.bb||a.blackberry||a.ipad||a.iphone||a.ipod||a.kindle||a.playbook||a.silk||a["windows phone"];if(o===!0||e.indexOf("mobile")!==-1?a.mobile=!0:a.desktop=!0,a["windows phone"]&&(a.winphone=!0,delete a["windows phone"]),a.edga||a.edgios||a.edg?(a.edge=!0,n.browser="edge"):a.crios?(a.chrome=!0,n.browser="chrome"):a.fxios&&(a.firefox=!0,n.browser="firefox"),(a.ipod||a.ipad||a.iphone)&&(a.ios=!0),a.vivaldi&&(n.browser="vivaldi",a.vivaldi=!0),(a.chrome||a.opr||a.safari||a.vivaldi||a.mobile===!0&&a.ios!==!0&&o!==!0)&&(a.webkit=!0),a.opr&&(n.browser="opera",a.opera=!0),a.safari&&(a.blackberry||a.bb?(n.browser="blackberry",a.blackberry=!0):a.playbook?(n.browser="playbook",a.playbook=!0):a.android?(n.browser="android",a.android=!0):a.kindle?(n.browser="kindle",a.kindle=!0):a.silk&&(n.browser="silk",a.silk=!0)),a.name=n.browser,a.platform=n.platform,e.indexOf("electron")!==-1)a.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)a.bex=!0;else{if(window.Capacitor!==void 0?(a.capacitor=!0,a.nativeMobile=!0,a.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(a.cordova=!0,a.nativeMobile=!0,a.nativeMobileWrapper="cordova"),la.value===!0&&(qd={is:{...a}}),Cy===!0&&a.mac===!0&&(a.desktop===!0&&a.safari===!0||a.nativeMobile===!0&&a.android!==!0&&a.ios!==!0&&a.ipad!==!0)){delete a.mac,delete a.desktop;const i=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(a,{mobile:!0,ios:!0,platform:i,[i]:!0})}a.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete a.desktop,a.mobile=!0)}return a}const DT=navigator.userAgent||navigator.vendor||window.opera,QV={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Et={userAgent:DT,is:RV(DT),has:{touch:Cy},within:{iframe:window.self!==window.top}},Fd={install(t){const{$q:e}=t;la.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Et),la.value=!1}),e.platform=so(this)):e.platform=this}};{let t;ao(Et.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(Fd,Et),la.value===!0&&(Object.assign(Fd,qd,QV),qd=null)}function Ct(t){return no(Bm(t))}function OV(t){return no(t)}const Kp=(t,e)=>{const s=so(t);for(const n in t)ao(e,n,()=>s[n],a=>{s[n]=a});return e},os={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(os,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function _l(){}function YR(t){return t.button===0}function jV(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function GV(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let s=t.target;for(;s;){if(e.push(s),s.tagName==="HTML")return e.push(document),e.push(window),e;s=s.parentElement}}function Mc(t){t.stopPropagation()}function Fn(t){t.cancelable!==!1&&t.preventDefault()}function Is(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function LR(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const s=e===!0?n=>{n.__dragPrevented=!0,n.addEventListener("dragstart",Fn,os.notPassiveCapture)}:n=>{delete n.__dragPrevented,n.removeEventListener("dragstart",Fn,os.notPassiveCapture)};t.querySelectorAll("a, img").forEach(s)}function UV(t,e,s){const n=`__q_${e}_evt`;t[n]=t[n]!==void 0?t[n].concat(s):s,s.forEach(a=>{a[0].addEventListener(a[1],t[a[2]],os[a[3]])})}function zV(t,e){const s=`__q_${e}_evt`;t[s]!==void 0&&(t[s].forEach(n=>{n[0].removeEventListener(n[1],t[n[2]],os[n[3]])}),t[s]=void 0)}function Ay(t,e=250,s){let n=null;function a(){const o=arguments,i=()=>{n=null,s!==!0&&t.apply(this,o)};n!==null?clearTimeout(n):s===!0&&t.apply(this,o),n=setTimeout(i,e)}return a.cancel=()=>{n!==null&&clearTimeout(n)},a}const qu=["sm","md","lg","xl"],{passive:bT}=os;var qV=Kp({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:_l,setDebounce:_l,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:s}=window,n=s||window,a=document.scrollingElement||document.documentElement,o=s===void 0||Et.is.mobile===!0?()=>[Math.max(window.innerWidth,a.clientWidth),Math.max(window.innerHeight,a.clientHeight)]:()=>[s.width*s.scale+window.innerWidth-a.clientWidth,s.height*s.scale+window.innerHeight-a.clientHeight],i=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=d=>{const[m,f]=o();if(f!==this.height&&(this.height=f),m!==this.width)this.width=m;else if(d!==!0)return;let P=this.sizes;this.gt.xs=m>=P.sm,this.gt.sm=m>=P.md,this.gt.md=m>=P.lg,this.gt.lg=m>=P.xl,this.lt.sm=m<P.sm,this.lt.md=m<P.md,this.lt.lg=m<P.lg,this.lt.xl=m<P.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,P=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",P!==this.name&&(i===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${P}`)),this.name=P)};let l,r={},p=16;this.setSizes=d=>{qu.forEach(m=>{d[m]!==void 0&&(r[m]=d[m])})},this.setDebounce=d=>{p=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&qu.forEach(m=>{this.sizes[m]=parseInt(d.getPropertyValue(`--q-size-${m}`),10)}),this.setSizes=m=>{qu.forEach(f=>{m[f]&&(this.sizes[f]=m[f])}),this.__update(!0)},this.setDebounce=m=>{l!==void 0&&n.removeEventListener("resize",l,bT),l=m>0?Ay(this.__update,m):this.__update,n.addEventListener("resize",l,bT)},this.setDebounce(p),Object.keys(r).length!==0?(this.setSizes(r),r=void 0):this.__update(),i===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};la.value===!0?e.push(u):u()}});const Rt=Kp({isActive:!1,mode:!1},{__media:void 0,set(t){Rt.mode=t,t==="auto"?(Rt.__media===void 0&&(Rt.__media=window.matchMedia("(prefers-color-scheme: dark)"),Rt.__updateMedia=()=>{Rt.set("auto")},Rt.__media.addListener(Rt.__updateMedia)),t=Rt.__media.matches):Rt.__media!==void 0&&(Rt.__media.removeListener(Rt.__updateMedia),Rt.__media=void 0),Rt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Rt.set(Rt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:s}=t.config;t.dark=this,this.__installed!==!0&&this.set(s!==void 0?s:!1)}});function FV(t,e,s=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(s instanceof Element))throw new TypeError("Expected a DOM element");s.style.setProperty(`--q-${t}`,e)}let wy=!1;function JV(t){wy=t.isComposing===!0}function Dy(t){return wy===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Vl(t,e){return Dy(t)===!0?!1:[].concat(e).includes(t.keyCode)}function by(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function $V({is:t,has:e,within:s},n){const a=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const o=by(t);o!==void 0&&a.push("platform-"+o)}if(t.nativeMobile===!0){const o=t.nativeMobileWrapper;a.push(o),a.push("native-mobile"),t.ios===!0&&(n[o]===void 0||n[o].iosStatusBarPadding!==!1)&&a.push("q-ios-padding")}else t.electron===!0?a.push("electron"):t.bex===!0&&a.push("bex");return s.iframe===!0&&a.push("within-iframe"),a}function WV(){const{is:t}=Et,e=document.body.className,s=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)s.delete("mobile"),s.delete("platform-ios"),s.delete("platform-android"),s.add("desktop");else if(t.mobile===!0){s.delete("desktop"),s.add("mobile"),s.delete("platform-ios"),s.delete("platform-android");const a=by(t);a!==void 0&&s.add(`platform-${a}`)}}Et.has.touch===!0&&(s.delete("no-touch"),s.add("touch")),Et.within.iframe===!0&&s.add("within-iframe");const n=Array.from(s).join(" ");e!==n&&(document.body.className=n)}function ZV(t){for(const e in t)FV(e,t[e])}var XV={install(t){if(this.__installed!==!0){if(la.value===!0)WV();else{const{$q:e}=t;e.config.brand!==void 0&&ZV(e.config.brand);const s=$V(Et,e.config);document.body.classList.add.apply(document.body.classList,s)}Et.is.ios===!0&&document.body.addEventListener("touchstart",_l),window.addEventListener("keydown",JV,!0)}}};const Ry=()=>!0;function ev(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function tv(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function sv(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Ry;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(ev).map(tv)),()=>e.includes(window.location.hash)}var Jd={__history:[],add:_l,remove:_l,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:s}=Et.is;if(e!==!0&&s!==!0)return;const n=t.config[e===!0?"cordova":"capacitor"];if(n!==void 0&&n.backButton===!1||s===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=i=>{i.condition===void 0&&(i.condition=Ry),this.__history.push(i)},this.remove=i=>{const l=this.__history.indexOf(i);l>=0&&this.__history.splice(l,1)};const a=sv(Object.assign({backButtonExit:!0},n)),o=()=>{if(this.__history.length){const i=this.__history[this.__history.length-1];i.condition()===!0&&(this.__history.pop(),i.handler())}else a()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",o,!1)}):window.Capacitor.Plugins.App.addListener("backButton",o)}},RT={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,s)=>t+"-"+e+" of "+s,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function QT(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,s)=>s===0?e.toLowerCase():s>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Un=Kp({__qLang:{}},{getLocale:QT,set(t=RT,e){const s={...t,rtl:t.rtl===!0,getLocale:QT};{if(s.set=Un.set,Un.__langConfig===void 0||Un.__langConfig.noHtmlAttrs!==!0){const n=document.documentElement;n.setAttribute("dir",s.rtl===!0?"rtl":"ltr"),n.setAttribute("lang",s.isoName)}Object.assign(Un.__qLang,s)}},install({$q:t,lang:e,ssrContext:s}){t.lang=Un.__qLang,Un.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(a=>a!=="set"&&a!=="getLocale")}}),this.set(e||RT))}});var nv={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Cc=Kp({iconMapFn:null,__qIconSet:{}},{set(t,e){const s={...t};s.set=Cc.set,Object.assign(Cc.__qIconSet,s)},install({$q:t,iconSet:e,ssrContext:s}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,ao(t,"iconMapFn",()=>this.iconMapFn,n=>{this.iconMapFn=n}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(a=>a!=="set")}}),this.set(e||nv))}}),av="_q_",MR="_q_l_",CR="_q_pc_",AR="_q_f_",ov="_q_fo_",wR="_q_tabs_";function DR(){}const Ac={};let Qy=!1;function iv(){Qy=!0}function Fu(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let s,n;if(t.constructor===Array){if(s=t.length,s!==e.length)return!1;for(n=s;n--!==0;)if(Fu(t[n],e[n])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let o=t.entries();for(n=o.next();n.done!==!0;){if(e.has(n.value[0])!==!0)return!1;n=o.next()}for(o=t.entries(),n=o.next();n.done!==!0;){if(Fu(n.value[1],e.get(n.value[0]))!==!0)return!1;n=o.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const o=t.entries();for(n=o.next();n.done!==!0;){if(e.has(n.value[0])!==!0)return!1;n=o.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(s=t.length,s!==e.length)return!1;for(n=s;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const a=Object.keys(t).filter(o=>t[o]!==void 0);if(s=a.length,s!==Object.keys(e).filter(o=>e[o]!==void 0).length)return!1;for(n=s;n--!==0;){const o=a[n];if(Fu(t[o],e[o])!==!0)return!1}return!0}return t!==t&&e!==e}function Hs(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function bR(t){return Object.prototype.toString.call(t)==="[object Date]"}function RR(t){return typeof t=="number"&&isFinite(t)}const OT=[Fd,XV,Rt,qV,Jd,Un,Cc];function Oy(t,e){const s=My(t);s.config.globalProperties=e.config.globalProperties;const{reload:n,...a}=e._context;return Object.assign(s._context,a),s}function jT(t,e){e.forEach(s=>{s.install(t),s.__installed=!0})}function lv(t,e,s){t.config.globalProperties.$q=s.$q,t.provide(av,s.$q),jT(s,OT),e.components!==void 0&&Object.values(e.components).forEach(n=>{Hs(n)===!0&&n.name!==void 0&&t.component(n.name,n)}),e.directives!==void 0&&Object.values(e.directives).forEach(n=>{Hs(n)===!0&&n.name!==void 0&&t.directive(n.name,n)}),e.plugins!==void 0&&jT(s,Object.values(e.plugins).filter(n=>typeof n.install=="function"&&OT.includes(n)===!1)),la.value===!0&&(s.$q.onSSRHydrated=()=>{s.onSSRHydrated.forEach(n=>{n()}),s.$q.onSSRHydrated=()=>{}})}var rv=function(t,e={}){const s={version:"2.17.4"};Qy===!1?(e.config!==void 0&&Object.assign(Ac,e.config),s.config={...Ac},iv()):s.config=e.config||{},lv(t,e,{parentApp:t,$q:s,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},cv={name:"Quasar",version:"2.17.4",install:rv,lang:Un,iconSet:Cc};const pv=Object.assign({name:"App"},{__name:"App",setup(t){return(e,s)=>{const n=h_("router-view");return Iy(),Ey(n)}}});function QR(t){return t}var uv=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let jy;const Yp=t=>jy=t,Gy=Symbol();function $d(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ll;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ll||(ll={}));function dv(){const t=Bp(!0),e=t.run(()=>xe({}));let s=[],n=[];const a=no({install(o){Yp(a),a._a=o,o.provide(Gy,a),o.config.globalProperties.$pinia=a,n.forEach(i=>s.push(i)),n=[]},use(o){return!this._a&&!uv?n.push(o):s.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return a}const Uy=()=>{};function GT(t,e,s,n=Uy){t.push(e);const a=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),n())};return!s&&dm()&&fI(a),a}function yo(t,...e){t.slice().forEach(s=>{s(...e)})}const hv=t=>t(),UT=Symbol(),Ju=Symbol();function Wd(t,e){t instanceof Map&&e instanceof Map?e.forEach((s,n)=>t.set(n,s)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const n=e[s],a=t[s];$d(a)&&$d(n)&&t.hasOwnProperty(s)&&!it(n)&&!yn(n)?t[s]=Wd(a,n):t[s]=n}return t}const mv=Symbol();function gv(t){return!$d(t)||!t.hasOwnProperty(mv)}const{assign:Qn}=Object;function fv(t){return!!(it(t)&&t.effect)}function Tv(t,e,s,n){const{state:a,actions:o,getters:i}=e,l=s.state.value[t];let r;function p(){l||(s.state.value[t]=a?a():{});const u=U2(s.state.value[t]);return Qn(u,o,Object.keys(i||{}).reduce((d,m)=>(d[m]=no(Q(()=>{Yp(s);const f=s._s.get(t);return i[m].call(f,f)})),d),{}))}return r=zy(t,p,e,s,n,!0),r}function zy(t,e,s={},n,a,o){let i;const l=Qn({actions:{}},s),r={deep:!0};let p,u,d=[],m=[],f;const P=n.state.value[t];!o&&!P&&(n.state.value[t]={}),xe({});let _;function v(y){let T;p=u=!1,typeof y=="function"?(y(n.state.value[t]),T={type:ll.patchFunction,storeId:t,events:f}):(Wd(n.state.value[t],y),T={type:ll.patchObject,payload:y,storeId:t,events:f});const E=_=Symbol();is().then(()=>{_===E&&(p=!0)}),u=!0,yo(d,T,n.state.value[t])}const L=o?function(){const{state:T}=s,E=T?T():{};this.$patch(k=>{Qn(k,E)})}:Uy;function x(){i.stop(),d=[],m=[],n._s.delete(t)}const Y=(y,T="")=>{if(UT in y)return y[Ju]=T,y;const E=function(){Yp(n);const k=Array.from(arguments),I=[],N=[];function D(W){I.push(W)}function le(W){N.push(W)}yo(m,{args:k,name:E[Ju],store:A,after:D,onError:le});let oe;try{oe=y.apply(this&&this.$id===t?this:A,k)}catch(W){throw yo(N,W),W}return oe instanceof Promise?oe.then(W=>(yo(I,W),W)).catch(W=>(yo(N,W),Promise.reject(W))):(yo(I,oe),oe)};return E[UT]=!0,E[Ju]=T,E},K={_p:n,$id:t,$onAction:GT.bind(null,m),$patch:v,$reset:L,$subscribe(y,T={}){const E=GT(d,y,T.detached,()=>k()),k=i.run(()=>ze(()=>n.state.value[t],I=>{(T.flush==="sync"?u:p)&&y({storeId:t,type:ll.direct,events:f},I)},Qn({},r,T)));return E},$dispose:x},A=so(K);n._s.set(t,A);const S=(n._a&&n._a.runWithContext||hv)(()=>n._e.run(()=>(i=Bp()).run(()=>e({action:Y}))));for(const y in S){const T=S[y];if(it(T)&&!fv(T)||yn(T))o||(P&&gv(T)&&(it(T)?T.value=P[y]:Wd(T,P[y])),n.state.value[t][y]=T);else if(typeof T=="function"){const E=Y(T,y);S[y]=E,l.actions[y]=T}}return Qn(A,S),Qn(ke(A),S),Object.defineProperty(A,"$state",{get:()=>n.state.value[t],set:y=>{v(T=>{Qn(T,y)})}}),n._p.forEach(y=>{Qn(A,i.run(()=>y({store:A,app:n._a,pinia:n,options:l})))}),P&&o&&s.hydrate&&s.hydrate(A.$state,P),p=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function fa(t,e,s){let n,a;const o=typeof e=="function";typeof t=="string"?(n=t,a=o?s:e):(a=t,n=t.id);function i(l,r){const p=B_();return l=l||(p?Ft(Gy,null):null),l&&Yp(l),l=jy,l._s.has(n)||(o?zy(n,e,a,l):Tv(n,a,l)),l._s.get(n)}return i.$id=n,i}function OR(t){{const e=ke(t),s={};for(const n in e){const a=e[n];a.effect?s[n]=Q({get:()=>t[n],set(o){t[n]=o}}):(it(a)||yn(a))&&(s[n]=AI(t,n))}return s}}var $u=()=>dv();/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vo=typeof document!="undefined";function qy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&qy(t.default)}const Qe=Object.assign;function Wu(t,e){const s={};for(const n in e){const a=e[n];s[n]=bs(a)?a.map(t):t(a)}return s}const rl=()=>{},bs=Array.isArray,Fy=/#/g,Iv=/&/g,yv=/\//g,Ev=/=/g,Bv=/\?/g,Jy=/\+/g,Nv=/%5B/g,kv=/%5D/g,$y=/%5E/g,Sv=/%60/g,Wy=/%7B/g,_v=/%7C/g,Zy=/%7D/g,Vv=/%20/g;function Ym(t){return encodeURI(""+t).replace(_v,"|").replace(Nv,"[").replace(kv,"]")}function vv(t){return Ym(t).replace(Wy,"{").replace(Zy,"}").replace($y,"^")}function Zd(t){return Ym(t).replace(Jy,"%2B").replace(Vv,"+").replace(Fy,"%23").replace(Iv,"%26").replace(Sv,"`").replace(Wy,"{").replace(Zy,"}").replace($y,"^")}function xv(t){return Zd(t).replace(Ev,"%3D")}function Hv(t){return Ym(t).replace(Fy,"%23").replace(Bv,"%3F")}function Kv(t){return t==null?"":Hv(t).replace(yv,"%2F")}function vl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Yv=/\/$/,Lv=t=>t.replace(Yv,"");function Zu(t,e,s="/"){let n,a={},o="",i="";const l=e.indexOf("#");let r=e.indexOf("?");return l<r&&l>=0&&(r=-1),r>-1&&(n=e.slice(0,r),o=e.slice(r+1,l>-1?l:e.length),a=t(o)),l>-1&&(n=n||e.slice(0,l),i=e.slice(l,e.length)),n=wv(n!=null?n:e,s),{fullPath:n+(o&&"?")+o+i,path:n,query:a,hash:vl(i)}}function Mv(t,e){const s=e.query?t(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function zT(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cv(t,e,s){const n=e.matched.length-1,a=s.matched.length-1;return n>-1&&n===a&&zo(e.matched[n],s.matched[a])&&Xy(e.params,s.params)&&t(e.query)===t(s.query)&&e.hash===s.hash}function zo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(!Av(t[s],e[s]))return!1;return!0}function Av(t,e){return bs(t)?qT(t,e):bs(e)?qT(e,t):t===e}function qT(t,e){return bs(e)?t.length===e.length&&t.every((s,n)=>s===e[n]):t.length===1&&t[0]===e}function wv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const s=e.split("/"),n=t.split("/"),a=n[n.length-1];(a===".."||a===".")&&n.push("");let o=s.length-1,i,l;for(i=0;i<n.length;i++)if(l=n[i],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+n.slice(i).join("/")}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xl;(function(t){t.pop="pop",t.push="push"})(xl||(xl={}));var cl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cl||(cl={}));function Dv(t){if(!t)if(Vo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lv(t)}const bv=/^[^#]+#/;function Rv(t,e){return t.replace(bv,"#")+e}function Qv(t,e){const s=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-s.left-(e.left||0),top:n.top-s.top-(e.top||0)}}const Lp=()=>({left:window.scrollX,top:window.scrollY});function Ov(t){let e;if("el"in t){const s=t.el,n=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;e=Qv(a,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function FT(t,e){return(history.state?history.state.position-e:-1)+t}const Xd=new Map;function jv(t,e){Xd.set(t,e)}function Gv(t){const e=Xd.get(t);return Xd.delete(t),e}let Uv=()=>location.protocol+"//"+location.host;function eE(t,e){const{pathname:s,search:n,hash:a}=e,o=t.indexOf("#");if(o>-1){let l=a.includes(t.slice(o))?t.slice(o).length:1,r=a.slice(l);return r[0]!=="/"&&(r="/"+r),zT(r,"")}return zT(s,t)+n+a}function zv(t,e,s,n){let a=[],o=[],i=null;const l=({state:m})=>{const f=eE(t,location),P=s.value,_=e.value;let v=0;if(m){if(s.value=f,e.value=m,i&&i===P){i=null;return}v=_?m.position-_.position:0}else n(f);a.forEach(L=>{L(s.value,P,{delta:v,type:xl.pop,direction:v?v>0?cl.forward:cl.back:cl.unknown})})};function r(){i=s.value}function p(m){a.push(m);const f=()=>{const P=a.indexOf(m);P>-1&&a.splice(P,1)};return o.push(f),f}function u(){const{history:m}=window;!m.state||m.replaceState(Qe({},m.state,{scroll:Lp()}),"")}function d(){for(const m of o)m();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:r,listen:p,destroy:d}}function JT(t,e,s,n=!1,a=!1){return{back:t,current:e,forward:s,replaced:n,position:window.history.length,scroll:a?Lp():null}}function qv(t){const{history:e,location:s}=window,n={value:eE(t,s)},a={value:e.state};a.value||o(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(r,p,u){const d=t.indexOf("#"),m=d>-1?(s.host&&document.querySelector("base")?t:t.slice(d))+r:Uv()+t+r;try{e[u?"replaceState":"pushState"](p,"",m),a.value=p}catch(f){console.error(f),s[u?"replace":"assign"](m)}}function i(r,p){const u=Qe({},e.state,JT(a.value.back,r,a.value.forward,!0),p,{position:a.value.position});o(r,u,!0),n.value=r}function l(r,p){const u=Qe({},a.value,e.state,{forward:r,scroll:Lp()});o(u.current,u,!0);const d=Qe({},JT(n.value,r,null),{position:u.position+1},p);o(r,d,!1),n.value=r}return{location:n,state:a,push:l,replace:i}}function Fv(t){t=Dv(t);const e=qv(t),s=zv(t,e.state,e.location,e.replace);function n(o,i=!0){i||s.pauseListeners(),history.go(o)}const a=Qe({location:"",base:t,go:n,createHref:Rv.bind(null,t)},e,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function Jv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Fv(t)}function $v(t){return typeof t=="string"||t&&typeof t=="object"}function tE(t){return typeof t=="string"||typeof t=="symbol"}const sE=Symbol("");var $T;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($T||($T={}));function qo(t,e){return Qe(new Error,{type:t,[sE]:!0},e)}function un(t,e){return t instanceof Error&&sE in t&&(e==null||!!(t.type&e))}const WT="[^/]+?",Wv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function Xv(t,e){const s=Qe({},Wv,e),n=[];let a=s.start?"^":"";const o=[];for(const p of t){const u=p.length?[]:[90];s.strict&&!p.length&&(a+="/");for(let d=0;d<p.length;d++){const m=p[d];let f=40+(s.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(Zv,"\\$&"),f+=40;else if(m.type===1){const{value:P,repeatable:_,optional:v,regexp:L}=m;o.push({name:P,repeatable:_,optional:v});const x=L||WT;if(x!==WT){f+=10;try{new RegExp(`(${x})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${P}" (${x}): `+K.message)}}let Y=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(Y=v&&p.length<2?`(?:/${Y})`:"/"+Y),v&&(Y+="?"),a+=Y,f+=20,v&&(f+=-8),_&&(f+=-20),x===".*"&&(f+=-50)}u.push(f)}n.push(u)}if(s.strict&&s.end){const p=n.length-1;n[p][n[p].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const i=new RegExp(a,s.sensitive?"":"i");function l(p){const u=p.match(i),d={};if(!u)return null;for(let m=1;m<u.length;m++){const f=u[m]||"",P=o[m-1];d[P.name]=f&&P.repeatable?f.split("/"):f}return d}function r(p){let u="",d=!1;for(const m of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of m)if(f.type===0)u+=f.value;else if(f.type===1){const{value:P,repeatable:_,optional:v}=f,L=P in p?p[P]:"";if(bs(L)&&!_)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const x=bs(L)?L.join("/"):L;if(!x)if(v)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);u+=x}}return u||"/"}return{re:i,score:n,keys:o,parse:l,stringify:r}}function ex(t,e){let s=0;for(;s<t.length&&s<e.length;){const n=e[s]-t[s];if(n)return n;s++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nE(t,e){let s=0;const n=t.score,a=e.score;for(;s<n.length&&s<a.length;){const o=ex(n[s],a[s]);if(o)return o;s++}if(Math.abs(a.length-n.length)===1){if(ZT(n))return 1;if(ZT(a))return-1}return a.length-n.length}function ZT(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tx={type:0,value:""},sx=/[a-zA-Z0-9_]/;function nx(t){if(!t)return[[]];if(t==="/")return[[tx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${s})/"${p}": ${f}`)}let s=0,n=s;const a=[];let o;function i(){o&&a.push(o),o=[]}let l=0,r,p="",u="";function d(){!p||(s===0?o.push({type:0,value:p}):s===1||s===2||s===3?(o.length>1&&(r==="*"||r==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:u,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):e("Invalid state to consume buffer"),p="")}function m(){p+=r}for(;l<t.length;){if(r=t[l++],r==="\\"&&s!==2){n=s,s=4;continue}switch(s){case 0:r==="/"?(p&&d(),i()):r===":"?(d(),s=1):m();break;case 4:m(),s=n;break;case 1:r==="("?s=2:sx.test(r)?m():(d(),s=0,r!=="*"&&r!=="?"&&r!=="+"&&l--);break;case 2:r===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+r:s=3:u+=r;break;case 3:d(),s=0,r!=="*"&&r!=="?"&&r!=="+"&&l--,u="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${p}"`),d(),i(),a}function ax(t,e,s){const n=Xv(nx(t.path),s),a=Qe(n,{record:t,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function ox(t,e){const s=[],n=new Map;e=s0({strict:!1,end:!0,sensitive:!1},e);function a(d){return n.get(d)}function o(d,m,f){const P=!f,_=e0(d);_.aliasOf=f&&f.record;const v=s0(e,d),L=[_];if("alias"in d){const K=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of K)L.push(e0(Qe({},_,{components:f?f.record.components:_.components,path:A,aliasOf:f?f.record:_})))}let x,Y;for(const K of L){const{path:A}=K;if(m&&A[0]!=="/"){const R=m.record.path,S=R[R.length-1]==="/"?"":"/";K.path=m.record.path+(A&&S+A)}if(x=ax(K,m,v),f?f.alias.push(x):(Y=Y||x,Y!==x&&Y.alias.push(x),P&&d.name&&!t0(x)&&i(d.name)),aE(x)&&r(x),_.children){const R=_.children;for(let S=0;S<R.length;S++)o(R[S],x,f&&f.children[S])}f=f||x}return Y?()=>{i(Y)}:rl}function i(d){if(tE(d)){const m=n.get(d);m&&(n.delete(d),s.splice(s.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=s.indexOf(d);m>-1&&(s.splice(m,1),d.record.name&&n.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return s}function r(d){const m=rx(d,s);s.splice(m,0,d),d.record.name&&!t0(d)&&n.set(d.record.name,d)}function p(d,m){let f,P={},_,v;if("name"in d&&d.name){if(f=n.get(d.name),!f)throw qo(1,{location:d});v=f.record.name,P=Qe(XT(m.params,f.keys.filter(Y=>!Y.optional).concat(f.parent?f.parent.keys.filter(Y=>Y.optional):[]).map(Y=>Y.name)),d.params&&XT(d.params,f.keys.map(Y=>Y.name))),_=f.stringify(P)}else if(d.path!=null)_=d.path,f=s.find(Y=>Y.re.test(_)),f&&(P=f.parse(_),v=f.record.name);else{if(f=m.name?n.get(m.name):s.find(Y=>Y.re.test(m.path)),!f)throw qo(1,{location:d,currentLocation:m});v=f.record.name,P=Qe({},m.params,d.params),_=f.stringify(P)}const L=[];let x=f;for(;x;)L.unshift(x.record),x=x.parent;return{name:v,path:_,params:P,matched:L,meta:lx(L)}}t.forEach(d=>o(d));function u(){s.length=0,n.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:u,getRoutes:l,getRecordMatcher:a}}function XT(t,e){const s={};for(const n of e)n in t&&(s[n]=t[n]);return s}function e0(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ix(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ix(t){const e={},s=t.props||!1;if("component"in t)e.default=s;else for(const n in t.components)e[n]=typeof s=="object"?s[n]:s;return e}function t0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lx(t){return t.reduce((e,s)=>Qe(e,s.meta),{})}function s0(t,e){const s={};for(const n in t)s[n]=n in e?e[n]:t[n];return s}function rx(t,e){let s=0,n=e.length;for(;s!==n;){const o=s+n>>1;nE(t,e[o])<0?n=o:s=o+1}const a=cx(t);return a&&(n=e.lastIndexOf(a,n-1)),n}function cx(t){let e=t;for(;e=e.parent;)if(aE(e)&&nE(t,e)===0)return e}function aE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function px(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<n.length;++a){const o=n[a].replace(Jy," "),i=o.indexOf("="),l=vl(i<0?o:o.slice(0,i)),r=i<0?null:vl(o.slice(i+1));if(l in e){let p=e[l];bs(p)||(p=e[l]=[p]),p.push(r)}else e[l]=r}return e}function n0(t){let e="";for(let s in t){const n=t[s];if(s=xv(s),n==null){n!==void 0&&(e+=(e.length?"&":"")+s);continue}(bs(n)?n.map(o=>o&&Zd(o)):[n&&Zd(n)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+s,o!=null&&(e+="="+o))})}return e}function ux(t){const e={};for(const s in t){const n=t[s];n!==void 0&&(e[s]=bs(n)?n.map(a=>a==null?null:""+a):n==null?n:""+n)}return e}const dx=Symbol(""),a0=Symbol(""),Mp=Symbol(""),Lm=Symbol(""),eh=Symbol("");function Li(){let t=[];function e(n){return t.push(n),()=>{const a=t.indexOf(n);a>-1&&t.splice(a,1)}}function s(){t=[]}return{add:e,list:()=>t.slice(),reset:s}}function zn(t,e,s,n,a,o=i=>i()){const i=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return()=>new Promise((l,r)=>{const p=m=>{m===!1?r(qo(4,{from:s,to:e})):m instanceof Error?r(m):$v(m)?r(qo(2,{from:e,to:m})):(i&&n.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),l())},u=o(()=>t.call(n&&n.instances[a],e,s,p));let d=Promise.resolve(u);t.length<3&&(d=d.then(p)),d.catch(m=>r(m))})}function Xu(t,e,s,n,a=o=>o()){const o=[];for(const i of t)for(const l in i.components){let r=i.components[l];if(!(e!=="beforeRouteEnter"&&!i.instances[l]))if(qy(r)){const u=(r.__vccOpts||r)[e];u&&o.push(zn(u,s,n,i,l,a))}else{let p=r();o.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=Pv(u)?u.default:u;i.mods[l]=u,i.components[l]=d;const f=(d.__vccOpts||d)[e];return f&&zn(f,s,n,i,l,a)()}))}}return o}function o0(t){const e=Ft(Mp),s=Ft(Lm),n=Q(()=>{const r=ta(t.to);return e.resolve(r)}),a=Q(()=>{const{matched:r}=n.value,{length:p}=r,u=r[p-1],d=s.matched;if(!u||!d.length)return-1;const m=d.findIndex(zo.bind(null,u));if(m>-1)return m;const f=i0(r[p-2]);return p>1&&i0(u)===f&&d[d.length-1].path!==f?d.findIndex(zo.bind(null,r[p-2])):m}),o=Q(()=>a.value>-1&&Tx(s.params,n.value.params)),i=Q(()=>a.value>-1&&a.value===s.matched.length-1&&Xy(s.params,n.value.params));function l(r={}){if(fx(r)){const p=e[ta(t.replace)?"replace":"push"](ta(t.to)).catch(rl);return t.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:n,href:Q(()=>n.value.href),isActive:o,isExactActive:i,navigate:l}}function hx(t){return t.length===1?t[0]:t}const mx=Bm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:o0,setup(t,{slots:e}){const s=so(o0(t)),{options:n}=Ft(Mp),a=Q(()=>({[l0(t.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[l0(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=e.default&&hx(e.default(s));return t.custom?o:O("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},o)}}}),gx=mx;function fx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Tx(t,e){for(const s in e){const n=e[s],a=t[s];if(typeof n=="string"){if(n!==a)return!1}else if(!bs(a)||a.length!==n.length||n.some((o,i)=>o!==a[i]))return!1}return!0}function i0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const l0=(t,e,s)=>t!=null?t:e!=null?e:s,Px=Bm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:s}){const n=Ft(eh),a=Q(()=>t.route||n.value),o=Ft(a0,0),i=Q(()=>{let p=ta(o);const{matched:u}=a.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),l=Q(()=>a.value.matched[i.value]);ic(a0,Q(()=>i.value+1)),ic(dx,l),ic(eh,a);const r=xe();return ze(()=>[r.value,l.value,t.name],([p,u,d],[m,f,P])=>{u&&(u.instances[d]=p,f&&f!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),p&&u&&(!f||!zo(u,f)||!m)&&(u.enterCallbacks[d]||[]).forEach(_=>_(p))},{flush:"post"}),()=>{const p=a.value,u=t.name,d=l.value,m=d&&d.components[u];if(!m)return r0(s.default,{Component:m,route:p});const f=d.props[u],P=f?f===!0?p.params:typeof f=="function"?f(p):f:null,v=O(m,Qe({},P,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:r}));return r0(s.default,{Component:v,route:p})||v}}});function r0(t,e){if(!t)return null;const s=t(e);return s.length===1?s[0]:s}const Ix=Px;function yx(t){const e=ox(t.routes,t),s=t.parseQuery||px,n=t.stringifyQuery||n0,a=t.history,o=Li(),i=Li(),l=Li(),r=LI(Dn);let p=Dn;Vo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wu.bind(null,w=>""+w),d=Wu.bind(null,Kv),m=Wu.bind(null,vl);function f(w,ne){let te,ce;return tE(w)?(te=e.getRecordMatcher(w),ce=ne):ce=w,e.addRoute(ce,te)}function P(w){const ne=e.getRecordMatcher(w);ne&&e.removeRoute(ne)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function L(w,ne){if(ne=Qe({},ne||r.value),typeof w=="string"){const H=Zu(s,w,ne.path),C=e.resolve({path:H.path},ne),q=a.createHref(H.fullPath);return Qe(H,C,{params:m(C.params),hash:vl(H.hash),redirectedFrom:void 0,href:q})}let te;if(w.path!=null)te=Qe({},w,{path:Zu(s,w.path,ne.path).path});else{const H=Qe({},w.params);for(const C in H)H[C]==null&&delete H[C];te=Qe({},w,{params:d(H)}),ne.params=d(ne.params)}const ce=e.resolve(te,ne),Le=w.hash||"";ce.params=u(m(ce.params));const Ue=Mv(n,Qe({},w,{hash:vv(Le),path:ce.path})),V=a.createHref(Ue);return Qe({fullPath:Ue,hash:Le,query:n===n0?ux(w.query):w.query||{}},ce,{redirectedFrom:void 0,href:V})}function x(w){return typeof w=="string"?Zu(s,w,r.value.path):Qe({},w)}function Y(w,ne){if(p!==w)return qo(8,{from:ne,to:w})}function K(w){return S(w)}function A(w){return K(Qe(x(w),{replace:!0}))}function R(w){const ne=w.matched[w.matched.length-1];if(ne&&ne.redirect){const{redirect:te}=ne;let ce=typeof te=="function"?te(w):te;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=x(ce):{path:ce},ce.params={}),Qe({query:w.query,hash:w.hash,params:ce.path!=null?{}:w.params},ce)}}function S(w,ne){const te=p=L(w),ce=r.value,Le=w.state,Ue=w.force,V=w.replace===!0,H=R(te);if(H)return S(Qe(x(H),{state:typeof H=="object"?Qe({},Le,H.state):Le,force:Ue,replace:V}),ne||te);const C=te;C.redirectedFrom=ne;let q;return!Ue&&Cv(n,ce,te)&&(q=qo(16,{to:C,from:ce}),He(ce,ce,!0,!1)),(q?Promise.resolve(q):E(C,ce)).catch(j=>un(j)?un(j,2)?j:Ve(j):z(j,C,ce)).then(j=>{if(j){if(un(j,2))return S(Qe({replace:V},x(j.to),{state:typeof j.to=="object"?Qe({},Le,j.to.state):Le,force:Ue}),ne||C)}else j=I(C,ce,!0,V,Le);return k(C,ce,j),j})}function y(w,ne){const te=Y(w,ne);return te?Promise.reject(te):Promise.resolve()}function T(w){const ne=pt.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(w):w()}function E(w,ne){let te;const[ce,Le,Ue]=Ex(w,ne);te=Xu(ce.reverse(),"beforeRouteLeave",w,ne);for(const H of ce)H.leaveGuards.forEach(C=>{te.push(zn(C,w,ne))});const V=y.bind(null,w,ne);return te.push(V),pe(te).then(()=>{te=[];for(const H of o.list())te.push(zn(H,w,ne));return te.push(V),pe(te)}).then(()=>{te=Xu(Le,"beforeRouteUpdate",w,ne);for(const H of Le)H.updateGuards.forEach(C=>{te.push(zn(C,w,ne))});return te.push(V),pe(te)}).then(()=>{te=[];for(const H of Ue)if(H.beforeEnter)if(bs(H.beforeEnter))for(const C of H.beforeEnter)te.push(zn(C,w,ne));else te.push(zn(H.beforeEnter,w,ne));return te.push(V),pe(te)}).then(()=>(w.matched.forEach(H=>H.enterCallbacks={}),te=Xu(Ue,"beforeRouteEnter",w,ne,T),te.push(V),pe(te))).then(()=>{te=[];for(const H of i.list())te.push(zn(H,w,ne));return te.push(V),pe(te)}).catch(H=>un(H,8)?H:Promise.reject(H))}function k(w,ne,te){l.list().forEach(ce=>T(()=>ce(w,ne,te)))}function I(w,ne,te,ce,Le){const Ue=Y(w,ne);if(Ue)return Ue;const V=ne===Dn,H=Vo?history.state:{};te&&(ce||V?a.replace(w.fullPath,Qe({scroll:V&&H&&H.scroll},Le)):a.push(w.fullPath,Le)),r.value=w,He(w,ne,te,V),Ve()}let N;function D(){N||(N=a.listen((w,ne,te)=>{if(!ot.listening)return;const ce=L(w),Le=R(ce);if(Le){S(Qe(Le,{replace:!0,force:!0}),ce).catch(rl);return}p=ce;const Ue=r.value;Vo&&jv(FT(Ue.fullPath,te.delta),Lp()),E(ce,Ue).catch(V=>un(V,12)?V:un(V,2)?(S(Qe(x(V.to),{force:!0}),ce).then(H=>{un(H,20)&&!te.delta&&te.type===xl.pop&&a.go(-1,!1)}).catch(rl),Promise.reject()):(te.delta&&a.go(-te.delta,!1),z(V,ce,Ue))).then(V=>{V=V||I(ce,Ue,!1),V&&(te.delta&&!un(V,8)?a.go(-te.delta,!1):te.type===xl.pop&&un(V,20)&&a.go(-1,!1)),k(ce,Ue,V)}).catch(rl)}))}let le=Li(),oe=Li(),W;function z(w,ne,te){Ve(w);const ce=oe.list();return ce.length?ce.forEach(Le=>Le(w,ne,te)):console.error(w),Promise.reject(w)}function he(){return W&&r.value!==Dn?Promise.resolve():new Promise((w,ne)=>{le.add([w,ne])})}function Ve(w){return W||(W=!w,D(),le.list().forEach(([ne,te])=>w?te(w):ne()),le.reset()),w}function He(w,ne,te,ce){const{scrollBehavior:Le}=t;if(!Vo||!Le)return Promise.resolve();const Ue=!te&&Gv(FT(w.fullPath,0))||(ce||!te)&&history.state&&history.state.scroll||null;return is().then(()=>Le(w,ne,Ue)).then(V=>V&&Ov(V)).catch(V=>z(V,w,ne))}const U=w=>a.go(w);let ye;const pt=new Set,ot={currentRoute:r,listening:!0,addRoute:f,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:v,getRoutes:_,resolve:L,options:t,push:K,replace:A,go:U,back:()=>U(-1),forward:()=>U(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:oe.add,isReady:he,install(w){const ne=this;w.component("RouterLink",gx),w.component("RouterView",Ix),w.config.globalProperties.$router=ne,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ta(r)}),Vo&&!ye&&r.value===Dn&&(ye=!0,K(a.location).catch(Le=>{}));const te={};for(const Le in Dn)Object.defineProperty(te,Le,{get:()=>r.value[Le],enumerable:!0});w.provide(Mp,ne),w.provide(Lm,KI(te)),w.provide(eh,r);const ce=w.unmount;pt.add(w),w.unmount=function(){pt.delete(w),pt.size<1&&(p=Dn,N&&N(),N=null,r.value=Dn,ye=!1,W=!1),ce()}}};function pe(w){return w.reduce((ne,te)=>ne.then(()=>T(te)),Promise.resolve())}return ot}function Ex(t,e){const s=[],n=[],a=[],o=Math.max(e.matched.length,t.matched.length);for(let i=0;i<o;i++){const l=e.matched[i];l&&(t.matched.find(p=>zo(p,l))?n.push(l):s.push(l));const r=t.matched[i];r&&(e.matched.find(p=>zo(p,r))||a.push(r))}return[s,n,a]}function jR(){return Ft(Mp)}function GR(t){return Ft(Lm)}const Bx=[{path:"/",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./IndexPage.7ee0be9f.js"),["assets/IndexPage.7ee0be9f.js","assets/QPage.b2fc8c31.js","assets/LessonPreview.de420a15.js","assets/LessonPreview.acfbe7d5.css","assets/QItem.6bc26c25.js","assets/QSplitter.f06b57e7.js","assets/QSplitter.5a9d2fdc.css","assets/rtl.b46f6f6a.js","assets/QList.b03fce79.js","assets/QExpansionItem.cfeb4429.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/QImg.a061c7a7.js","assets/ClosePopup.dc754c2b.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/QCarousel.70e63d20.js","assets/use-fullscreen.9e013b55.js","assets/QSpace.dc4182fe.js","assets/marked.esm.ee94f6d8.js","assets/use-quasar.91c97ee6.js"])},{path:"lesson-shortener",component:()=>ge(()=>import("./LessonShortenerPage.29bf1bee.js"),["assets/LessonShortenerPage.29bf1bee.js","assets/QPage.b2fc8c31.js","assets/LessonContentShortener.86bbd365.js","assets/LessonContentShortener.9a6adad5.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QList.b03fce79.js","assets/QResizeObserver.511e3680.js","assets/QScrollObserver.496983d7.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/use-quasar.91c97ee6.js","assets/googleAIService.c307673a.js","assets/lessonPlanSample-Sach.5074cbc5.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],meta:{requiresAuth:!0}},{path:"/editor",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./LessonEditor.7aecc986.js"),["assets/LessonEditor.7aecc986.js","assets/LessonEditor.dcc31cbf.css","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/ajv.cfcedc4f.js","assets/QBtnGroup.ce88d5cc.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpace.dc4182fe.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/touch.9135741d.js","assets/QToolbar.27e667b2.js","assets/ClosePopup.dc754c2b.js","assets/use-quasar.91c97ee6.js","assets/schemaValidation.563faeb6.js","assets/GlossaryCreator.17c7fd10.js","assets/GlossaryCreator.099e47c6.css","assets/QBtnToggle.73c7362e.js","assets/QFile.45acdfbb.js","assets/QExpansionItem.cfeb4429.js","assets/QTooltip.a7560b08.js","assets/use-fullscreen.9e013b55.js","assets/QSplitter.f06b57e7.js","assets/QSplitter.5a9d2fdc.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/TouchPan.ee4f51ba.js","assets/googleAIService.c307673a.js","assets/marked.esm.ee94f6d8.js","assets/LessonPreview.de420a15.js","assets/LessonPreview.acfbe7d5.css","assets/QImg.a061c7a7.js","assets/QCarousel.70e63d20.js","assets/scratch.364a90c2.js"])}],meta:{requiresAuth:!0}},{path:"/text-code-editor",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./CodeEditor.b201644c.js").then(function(t){return t.C}),["assets/CodeEditor.b201644c.js","assets/CodeEditor.d2c1f02e.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QPage.b2fc8c31.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],meta:{requiresAuth:!0}},{path:"/review",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./ReviewPage.060c503e.js"),["assets/ReviewPage.060c503e.js","assets/ReviewPage.05f9344e.css","assets/QuizPreview.vue_vue_type_style_index_0_scoped_true_lang.2447d9a6.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpinnerHourglass.bb02cb90.js","assets/QTable.9a95a612.js","assets/QList.b03fce79.js","assets/QMarkupTable.b1422104.js","assets/QLinearProgress.3eb9fb70.js","assets/use-fullscreen.9e013b55.js","assets/QTooltip.a7560b08.js","assets/ClosePopup.dc754c2b.js","assets/LessonPreview.de420a15.js","assets/LessonPreview.acfbe7d5.css","assets/QSplitter.f06b57e7.js","assets/QSplitter.5a9d2fdc.css","assets/QExpansionItem.cfeb4429.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/QImg.a061c7a7.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/QCarousel.70e63d20.js","assets/QSpace.dc4182fe.js","assets/marked.esm.ee94f6d8.js","assets/QuizPreviewPage.2c68b516.js","assets/QuizPreviewPage.df11ea79.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/GeneralQuestion.c378645b.js","assets/GeneralQuestion.d0511812.css","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/QSpinnerDots.c7c22d7a.js","assets/NumericQuestion.40007b62.js","assets/NumericQuestion.45a13412.css","assets/index.597e99e0.js","assets/QForm.b018e14b.js","assets/NumberCard.cdd83b32.js","assets/NumberCard.837f6e48.css"])}],meta:{requiresAuth:!0,role:["admin"]}},{path:"/present",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./SlideShow.ba6e2d4c.js"),["assets/SlideShow.ba6e2d4c.js","assets/SlideShow.8989a46b.css","assets/QPage.b2fc8c31.js","assets/QCarousel.70e63d20.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/rtl.b46f6f6a.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/use-fullscreen.9e013b55.js","assets/QPageSticky.25228b71.js","assets/QSpace.dc4182fe.js","assets/QImg.a061c7a7.js","assets/QSpinnerTail.0b6931df.js","assets/ClosePopup.dc754c2b.js","assets/IntroductionSlide-Sach.cee056e6.js","assets/IntroductionSlide-Sach.510d98e2.css","assets/SlideFooter-Sach.1ee9305a.js","assets/SlideFooter-Sach.20204d73.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/lessonPlanSample-Sach.5074cbc5.js","assets/ContentSlide-Sach.32b5ae29.js","assets/ContentSlide-Sach.e670a0c8.css","assets/SlideHeader-Sach.b5f0b408.js","assets/SlideHeader-Sach.8448c4b1.css","assets/ExerciseSlide-Sach.ee45d745.js","assets/ExerciseSlide-Sach.acf7268a.css","assets/marked.esm.ee94f6d8.js","assets/SummarySlide-Sach.3b0e160b.js","assets/SummarySlide-Sach.6b1f5d9f.css","assets/AssessmentSlide-Sach.a038655a.js","assets/AssessmentSlide-Sach.891bb361.css","assets/LessonContentShortener.86bbd365.js","assets/LessonContentShortener.9a6adad5.css","assets/QSelect.98935f96.js","assets/QItem.6bc26c25.js","assets/format.8ac60962.js","assets/QList.b03fce79.js","assets/QScrollObserver.496983d7.js","assets/TouchPan.ee4f51ba.js","assets/use-quasar.91c97ee6.js","assets/googleAIService.c307673a.js"])}],meta:{requiresAuth:!0}},{path:"/quiz",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizPage.3da4bfca.js"),["assets/QuizPage.3da4bfca.js","assets/QuizPage.8e474f8a.css","assets/MultipleChoiceQuestion.vue_vue_type_style_index_0_scoped_true_lang.5a7bb4f3.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/MultipleChoiceQuestion.ed31ffcd.js","assets/QSpinnerDots.c7c22d7a.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/QImg.a061c7a7.js","assets/BackToTopQuiz.e71f711d.js","assets/BackToTopQuiz.045421e3.css","assets/rtl.b46f6f6a.js","assets/QLinearProgress.3eb9fb70.js","assets/format.8ac60962.js","assets/QExpansionItem.cfeb4429.js","assets/QTooltip.a7560b08.js","assets/QSelect.98935f96.js","assets/selection.eae1b1a4.js","assets/QPageSticky.25228b71.js","assets/TestFilter.d09516f6.js","assets/TestFilter.19ae2551.css","assets/QForm.b018e14b.js","assets/ClosePopup.dc754c2b.js","assets/QuizOverview.ff0001a7.js","assets/QuizOverview.1db99bb0.css"])}],meta:{requiresAuth:!1}},{path:"/quiz-new",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizPageNew.2d40e633.js"),["assets/QuizPageNew.2d40e633.js","assets/QuizPageNew.cec16d6a.css","assets/MultipleChoiceQuestion.vue_vue_type_style_index_0_scoped_true_lang.5a7bb4f3.css","assets/QuizPreview.vue_vue_type_style_index_0_scoped_true_lang.2447d9a6.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/QSpinnerDots.c7c22d7a.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/QImg.a061c7a7.js","assets/GeneralQuestion.c378645b.js","assets/GeneralQuestion.d0511812.css","assets/NumericQuestion.40007b62.js","assets/NumericQuestion.45a13412.css","assets/index.597e99e0.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/BackToTopQuiz.e71f711d.js","assets/BackToTopQuiz.045421e3.css","assets/QLinearProgress.3eb9fb70.js","assets/QExpansionItem.cfeb4429.js","assets/QTooltip.a7560b08.js","assets/QPageSticky.25228b71.js","assets/TestFilter.d09516f6.js","assets/TestFilter.19ae2551.css","assets/QForm.b018e14b.js","assets/ClosePopup.dc754c2b.js","assets/QuizOverview.ff0001a7.js","assets/QuizOverview.1db99bb0.css"])}],meta:{requiresAuth:!1}},{path:"/quiz-new-min",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizPageNew_Simplified.b8f39c35.js"),["assets/QuizPageNew_Simplified.b8f39c35.js","assets/QuizPageNew_Simplified.a572d481.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/GeneralQuestion.c378645b.js","assets/GeneralQuestion.d0511812.css","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/QSpinnerDots.c7c22d7a.js","assets/QImg.a061c7a7.js","assets/NumericQuestion.40007b62.js","assets/NumericQuestion.45a13412.css","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/index.597e99e0.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/BackToTopQuiz.e71f711d.js","assets/BackToTopQuiz.045421e3.css","assets/QLinearProgress.3eb9fb70.js","assets/QExpansionItem.cfeb4429.js","assets/QTooltip.a7560b08.js","assets/QPageSticky.25228b71.js","assets/QForm.b018e14b.js","assets/QuizOverview.ff0001a7.js","assets/QuizOverview.1db99bb0.css","assets/ClosePopup.dc754c2b.js"])}],meta:{requiresAuth:!1}},{path:"/ai-quiz-gen",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./AIQuizGenPage.e0b061bc.js"),["assets/AIQuizGenPage.e0b061bc.js","assets/AIQuizGenPage.18ec53e7.css","assets/QPage.b2fc8c31.js","assets/AIQuizGen.3ea89dda.js","assets/AIQuizGen.a9894fc9.css","assets/use-quasar.91c97ee6.js","assets/QSpinnerDots.c7c22d7a.js","assets/QExpansionItem.cfeb4429.js","assets/QItem.6bc26c25.js","assets/ClosePopup.dc754c2b.js","assets/googleAIService.c307673a.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],meta:{requiresAuth:!0}},{path:"/quiz-editor",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizEditorPage.6344be32.js"),["assets/QuizEditorPage.6344be32.js","assets/QuizEditorPage.bdebafc1.css","assets/MultipleChoiceQuestion.vue_vue_type_style_index_0_scoped_true_lang.5a7bb4f3.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/QSpace.dc4182fe.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/rtl.b46f6f6a.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/ClosePopup.dc754c2b.js","assets/MultipleChoiceQuestion.ed31ffcd.js","assets/QSpinnerDots.c7c22d7a.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/QImg.a061c7a7.js","assets/ImportDataButton.5c4be367.js","assets/QBtnToggle.73c7362e.js","assets/QBtnGroup.ce88d5cc.js","assets/QSelect.98935f96.js","assets/format.8ac60962.js","assets/QFile.45acdfbb.js","assets/QMarkupTable.b1422104.js","assets/QForm.b018e14b.js","assets/QuizOverview.ff0001a7.js","assets/QuizOverview.1db99bb0.css","assets/QLinearProgress.3eb9fb70.js"])}],meta:{requiresAuth:!0}},{path:"/question-editor",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuestionEditor.918d71dd.js"),["assets/QuestionEditor.918d71dd.js","assets/QuestionEditor.226936f6.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpace.dc4182fe.js","assets/QPage.b2fc8c31.js","assets/ClosePopup.dc754c2b.js","assets/quizStore.aec6adb7.js","assets/QTable.9a95a612.js","assets/QList.b03fce79.js","assets/QMarkupTable.b1422104.js","assets/QLinearProgress.3eb9fb70.js","assets/use-fullscreen.9e013b55.js","assets/QTr.a0b76876.js","assets/ajv.cfcedc4f.js","assets/QBtnGroup.ce88d5cc.js","assets/use-quasar.91c97ee6.js","assets/AIQuizGen.3ea89dda.js","assets/AIQuizGen.a9894fc9.css","assets/QSpinnerDots.c7c22d7a.js","assets/QExpansionItem.cfeb4429.js","assets/googleAIService.c307673a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/QImg.a061c7a7.js","assets/ContentRenderer.3bc70f26.js","assets/ContentRenderer.0bc20efd.css","assets/index.597e99e0.js","assets/BlockRenderer.94c221dc.js","assets/NumericQuestion.40007b62.js","assets/NumericQuestion.45a13412.css","assets/QForm.b018e14b.js","assets/ImportDataButton.5c4be367.js","assets/QBtnToggle.73c7362e.js","assets/QFile.45acdfbb.js","assets/schemaValidation.563faeb6.js","assets/NumberCard.cdd83b32.js","assets/NumberCard.837f6e48.css"])}],meta:{requiresAuth:!0}},{path:"/glossary",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./GlossaryPage.c727c135.js"),["assets/GlossaryPage.c727c135.js","assets/GlossaryPage.ae68965a.css","assets/QBtnToggle.73c7362e.js","assets/QBtnGroup.ce88d5cc.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpinnerDots.c7c22d7a.js","assets/QList.b03fce79.js","assets/GlossaryCreator.17c7fd10.js","assets/GlossaryCreator.099e47c6.css","assets/QFile.45acdfbb.js","assets/ClosePopup.dc754c2b.js","assets/QExpansionItem.cfeb4429.js","assets/ajv.cfcedc4f.js","assets/QTooltip.a7560b08.js","assets/use-fullscreen.9e013b55.js","assets/QSplitter.f06b57e7.js","assets/QSplitter.5a9d2fdc.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/use-quasar.91c97ee6.js","assets/googleAIService.c307673a.js","assets/marked.esm.ee94f6d8.js","assets/QSpace.dc4182fe.js"])}],meta:{requiresAuth:!0}},{path:"/config-slide",name:"ConfigSlide",component:()=>ge(()=>import("./ConfigSlide.63065033.js"),["assets/ConfigSlide.63065033.js","assets/ConfigSlide.88a5a199.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpinnerTail.0b6931df.js","assets/lessonPlanSample-Sach.5074cbc5.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}},{path:"/login",name:"LoginPage",component:()=>ge(()=>import("./LoginPage.e8d04b58.js"),["assets/LoginPage.e8d04b58.js","assets/LoginPage.b84ff742.css","assets/QForm.b018e14b.js","assets/use-quasar.91c97ee6.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!1}},{path:"/statistics",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./StatisticsPage.d0b20add.js"),["assets/StatisticsPage.d0b20add.js","assets/StatisticsPage.a52ecb38.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QTabPanels.18c2149c.js","assets/QResizeObserver.511e3680.js","assets/touch.9135741d.js","assets/QTable.9a95a612.js","assets/QList.b03fce79.js","assets/QMarkupTable.b1422104.js","assets/QLinearProgress.3eb9fb70.js","assets/use-fullscreen.9e013b55.js","assets/QSpace.dc4182fe.js","assets/QTr.a0b76876.js","assets/QExpansionItem.cfeb4429.js","assets/ClosePopup.dc754c2b.js","assets/scratch.364a90c2.js","assets/auto.01ee0c75.js","assets/use-quasar.91c97ee6.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}}]},{path:"/report",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./ReportPage.69870144.js"),["assets/ReportPage.69870144.js","assets/ReportPage.9685c22d.css","assets/QTable.9a95a612.js","assets/QList.b03fce79.js","assets/QMarkupTable.b1422104.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QLinearProgress.3eb9fb70.js","assets/use-fullscreen.9e013b55.js","assets/QTr.a0b76876.js","assets/use-quasar.91c97ee6.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/QSpinnerHourglass.bb02cb90.js"])}],meta:{requiresAuth:!0,role:["admin"]}},{path:"/code",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./CodePlayground.d7146a81.js"),["assets/CodePlayground.d7146a81.js","assets/CodePlayground.925851b4.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QPage.b2fc8c31.js","assets/axios.0283b0ef.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],meta:{requiresAuth:!0}},{path:"/test",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./TestPage.af268c1f.js"),["assets/TestPage.af268c1f.js","assets/TestPage.7d837c99.css","assets/QPage.b2fc8c31.js","assets/use-quasar.91c97ee6.js","assets/ContentRenderer.3bc70f26.js","assets/ContentRenderer.0bc20efd.css","assets/index.597e99e0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/QSpinnerDots.c7c22d7a.js","assets/QImg.a061c7a7.js","assets/BlockRenderer.94c221dc.js","assets/quizStore.aec6adb7.js"])}],meta:{requiresAuth:!0,role:["dev"]}},{path:"/block-code-extract",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./ScratchBlockEditor.096b9e73.js"),["assets/ScratchBlockEditor.096b9e73.js","assets/QPage.b2fc8c31.js","assets/BlockRenderer.94c221dc.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QBtnGroup.ce88d5cc.js"])}],meta:{requiresAuth:!0}},{path:"/firestore-api-test",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./FirestoreApiTestPage.63a002c2.js"),["assets/FirestoreApiTestPage.63a002c2.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QFile.45acdfbb.js","assets/QForm.b018e14b.js","assets/ClosePopup.dc754c2b.js","assets/use-quasar.91c97ee6.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],meta:{requiresAuth:!0,role:["dev"]}},{path:"/quizReport",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizReport.c8e238f6.js"),["assets/QuizReport.c8e238f6.js","assets/QuizReport.188e061b.css","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/QItem.6bc26c25.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QSpinnerDots.c7c22d7a.js","assets/quizStore.aec6adb7.js","assets/auto.01ee0c75.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/QLinearProgress.3eb9fb70.js","assets/QTable.9a95a612.js","assets/QList.b03fce79.js","assets/QMarkupTable.b1422104.js","assets/use-fullscreen.9e013b55.js","assets/QTr.a0b76876.js"])}],meta:{requiresAuth:!0}},{path:"/quiz-preview",component:()=>ge(()=>import("./MainLayout.52add762.js"),["assets/MainLayout.52add762.js","assets/MainLayout.50dd997b.css","assets/QToolbar.27e667b2.js","assets/QResizeObserver.511e3680.js","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/TouchPan.ee4f51ba.js","assets/touch.9135741d.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QScrollObserver.496983d7.js","assets/ClosePopup.dc754c2b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/use-quasar.91c97ee6.js"]),children:[{path:"",component:()=>ge(()=>import("./QuizPreviewPage.2c68b516.js"),["assets/QuizPreviewPage.2c68b516.js","assets/QuizPreviewPage.df11ea79.css","assets/QuizPreview.vue_vue_type_style_index_0_scoped_true_lang.2447d9a6.css","assets/use-quasar.91c97ee6.js","assets/quizStore.aec6adb7.js","assets/GeneralQuestion.c378645b.js","assets/GeneralQuestion.d0511812.css","assets/CustomImage.0ea15567.js","assets/CustomImage.5cf45140.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/QSpinnerDots.c7c22d7a.js","assets/QImg.a061c7a7.js","assets/NumericQuestion.40007b62.js","assets/NumericQuestion.45a13412.css","assets/QItem.6bc26c25.js","assets/QList.b03fce79.js","assets/index.597e99e0.js","assets/QSelect.98935f96.js","assets/rtl.b46f6f6a.js","assets/selection.eae1b1a4.js","assets/format.8ac60962.js","assets/QExpansionItem.cfeb4429.js","assets/QForm.b018e14b.js","assets/NumberCard.cdd83b32.js","assets/NumberCard.837f6e48.css"])}],meta:{requiresAuth:!0}},{path:"/:catchAll(.*)*",component:()=>ge(()=>import("./ErrorNotFound.b3c887ee.js"),[])}],Ma=fa("auth",{state:()=>({isAuthenticated:!1,user:null}),getters:{getUid:t=>t.user?t.user.uid:"",getName:t=>t.user?t.user.displayName:"",getEmail:t=>t.user?t.user.email:"",getIsAuthenticated:t=>t.isAuthenticated},actions:{setAuthState(t){this.isAuthenticated=t.isAuthenticated,this.uid=t.uid},setAuthenticated(t){this.isAuthenticated=t},setUser(t){this.user=t},setRole(t){this.role=t},routeUserToAuth(){this.$router.push({path:"/auth/login"})}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(t,e){if(!t)throw ii(e)},ii=function(t){return new Error("Firebase Database ("+oE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);a<128?e[s++]=a:a<2048?(e[s++]=a>>6|192,e[s++]=a&63|128):(a&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++n)&1023),e[s++]=a>>18|240,e[s++]=a>>12&63|128,e[s++]=a>>6&63|128,e[s++]=a&63|128):(e[s++]=a>>12|224,e[s++]=a>>6&63|128,e[s++]=a&63|128)}return e},Nx=function(t){const e=[];let s=0,n=0;for(;s<t.length;){const a=t[s++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[s++];e[n++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[s++],i=t[s++],l=t[s++],r=((a&7)<<18|(o&63)<<12|(i&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(r>>10)),e[n++]=String.fromCharCode(56320+(r&1023))}else{const o=t[s++],i=t[s++];e[n++]=String.fromCharCode((a&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<t.length;a+=3){const o=t[a],i=a+1<t.length,l=i?t[a+1]:0,r=a+2<t.length,p=r?t[a+2]:0,u=o>>2,d=(o&3)<<4|l>>4;let m=(l&15)<<2|p>>6,f=p&63;r||(f=64,i||(m=64)),n.push(s[u],s[d],s[m],s[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<t.length;){const o=s[t.charAt(a++)],l=a<t.length?s[t.charAt(a)]:0;++a;const p=a<t.length?s[t.charAt(a)]:64;++a;const d=a<t.length?s[t.charAt(a)]:64;if(++a,o==null||l==null||p==null||d==null)throw new kx;const m=o<<2|l>>4;if(n.push(m),p!==64){const f=l<<4&240|p>>2;if(n.push(f),d!==64){const P=p<<6&192|d;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lE=function(t){const e=iE(t);return Cp.encodeByteArray(e,!0)},wc=function(t){return lE(t).replace(/\./g,"")},Dc=function(t){try{return Cp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){return rE(void 0,t)}function rE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const s=e;return new Date(s.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const s in e)!e.hasOwnProperty(s)||!_x(s)||(t[s]=rE(t[s],e[s]));return t}function _x(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=()=>Vx().__FIREBASE_DEFAULTS__,xx=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hx=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dc(t[1]);return e&&JSON.parse(e)},Ap=()=>{try{return vx()||xx()||Hx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cE=t=>{var e,s;return(s=(e=Ap())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[t]},pE=t=>{const e=cE(t);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),n]:[e.substring(0,s),n]},uE=()=>{var t;return(t=Ap())===null||t===void 0?void 0:t.config},dE=t=>{var e;return(e=Ap())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,n)=>{s?this.reject(s):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},n=e||"demo-project",a=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[wc(JSON.stringify(s)),wc(JSON.stringify(i)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mm(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Yx(){var t;const e=(t=Ap())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lx(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cx(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){return oE.NODE_ADMIN===!0}function Ax(){return!Yx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gE(){try{return typeof indexedDB=="object"}catch{return!1}}function wx(){return new Promise((t,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),s||self.indexedDB.deleteDatabase(n),t(!0)},a.onupgradeneeded=()=>{s=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(s){e(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="FirebaseError";class an extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Dx,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},a=`${this.service}/${e}`,o=this.errors[e],i=o?bx(o,n):"Error",l=`${this.serviceName}: ${i} (${a}).`;return new an(a,l,n)}}function bx(t,e){return t.replace(Rx,(s,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const Rx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t){return JSON.parse(t)}function Kt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(t){let e={},s={},n={},a="";try{const o=t.split(".");e=Kl(Dc(o[0])||""),s=Kl(Dc(o[1])||""),a=o[2],n=s.d||{},delete s.d}catch{}return{header:e,claims:s,data:n,signature:a}},Qx=function(t){const e=fE(t),s=e.claims;return!!s&&typeof s=="object"&&s.hasOwnProperty("iat")},Ox=function(t){const e=fE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function th(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bc(t,e,s){const n={};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=e.call(s,t[a],a,t));return n}function Rc(t,e){if(t===e)return!0;const s=Object.keys(t),n=Object.keys(e);for(const a of s){if(!n.includes(a))return!1;const o=t[a],i=e[a];if(c0(o)&&c0(i)){if(!Rc(o,i))return!1}else if(o!==i)return!1}for(const a of n)if(!s.includes(a))return!1;return!0}function c0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[s,n]of Object.entries(t))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,o]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const s=t.indexOf("#",e);return t.substring(e,s>0?s:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,s){s||(s=0);const n=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)n[d]=e.charCodeAt(s)<<24|e.charCodeAt(s+1)<<16|e.charCodeAt(s+2)<<8|e.charCodeAt(s+3),s+=4;else for(let d=0;d<16;d++)n[d]=e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3],s+=4;for(let d=16;d<80;d++){const m=n[d-3]^n[d-8]^n[d-14]^n[d-16];n[d]=(m<<1|m>>>31)&4294967295}let a=this.chain_[0],o=this.chain_[1],i=this.chain_[2],l=this.chain_[3],r=this.chain_[4],p,u;for(let d=0;d<80;d++){d<40?d<20?(p=l^o&(i^l),u=1518500249):(p=o^i^l,u=1859775393):d<60?(p=o&i|l&(o|i),u=2400959708):(p=o^i^l,u=3395469782);const m=(a<<5|a>>>27)+p+r+u+n[d]&4294967295;r=l,l=i,i=(o<<30|o>>>2)&4294967295,o=a,a=m}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+r&4294967295}update(e,s){if(e==null)return;s===void 0&&(s=e.length);const n=s-this.blockSize;let a=0;const o=this.buf_;let i=this.inbuf_;for(;a<s;){if(i===0)for(;a<=n;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<s;)if(o[i]=e.charCodeAt(a),++i,++a,i===this.blockSize){this.compress_(o),i=0;break}}else for(;a<s;)if(o[i]=e[a],++i,++a,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=s}digest(){const e=[];let s=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=s&255,s/=256;this.compress_(this.buf_);let n=0;for(let a=0;a<5;a++)for(let o=24;o>=0;o-=8)e[n]=this.chain_[a]>>o&255,++n;return e}}function Gx(t,e){const s=new Ux(t,e);return s.subscribe.bind(s)}class Ux{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,n){let a;if(e===void 0&&s===void 0&&n===void 0)throw new Error("Missing Observer.");zx(e,["next","error","complete"])?a=e:a={next:e,error:s,complete:n},a.next===void 0&&(a.next=ed),a.error===void 0&&(a.error=ed),a.complete===void 0&&(a.complete=ed);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zx(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function ed(){}function qx(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=function(t){const e=[];let s=0;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);if(a>=55296&&a<=56319){const o=a-55296;n++,ae(n<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(n)-56320;a=65536+(o<<10)+i}a<128?e[s++]=a:a<2048?(e[s++]=a>>6|192,e[s++]=a&63|128):a<65536?(e[s++]=a>>12|224,e[s++]=a>>6&63|128,e[s++]=a&63|128):(e[s++]=a>>18|240,e[s++]=a>>12&63|128,e[s++]=a>>6&63|128,e[s++]=a&63|128)}return e},wp=function(t){let e=0;for(let s=0;s<t.length;s++){const n=t.charCodeAt(s);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,s++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class ks{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const n=new Hl;if(this.instancesDeferred.set(s,n),this.isInitialized(s)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:s});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wx(e))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[s,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);try{const o=this.getOrInitializeService({instanceIdentifier:a});n.resolve(o)}catch{}}}}clearInstance(e=Ka){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ka){return this.instances.has(e)}getOptions(e=Ka){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:s});for(const[o,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&i.resolve(a)}return a}onInit(e,s){var n;const a=this.normalizeInstanceIdentifier(s),o=(n=this.onInitCallbacks.get(a))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(a,o);const i=this.instances.get(a);return i&&e(i,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,s){const n=this.onInitCallbacks.get(s);if(!!n)for(const a of n)try{a(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:$x(e),options:s}),this.instances.set(e,n),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ka){return this.component?this.component.multipleInstances?e:Ka:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $x(t){return t===Ka?void 0:t}function Wx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Jx(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ke||(Ke={}));const Xx={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},eH=Ke.INFO,tH={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},sH=(t,e,...s)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),a=tH[e];if(a)console[a](`[${n}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=eH,this._logHandler=sH,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const nH=(t,e)=>e.some(s=>t instanceof s);let p0,u0;function aH(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oH(){return u0||(u0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TE=new WeakMap,sh=new WeakMap,PE=new WeakMap,td=new WeakMap,Cm=new WeakMap;function iH(t){const e=new Promise((s,n)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{s(sa(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(s=>{s instanceof IDBCursor&&TE.set(s,t)}).catch(()=>{}),Cm.set(e,t),e}function lH(t){if(sh.has(t))return;const e=new Promise((s,n)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{s(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});sh.set(t,e)}let nh={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PE.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return sa(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rH(t){nh=t(nh)}function cH(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(sd(this),e,...s);return PE.set(n,e.sort?e.sort():[e]),sa(n)}:oH().includes(t)?function(...e){return t.apply(sd(this),e),sa(TE.get(this))}:function(...e){return sa(t.apply(sd(this),e))}}function pH(t){return typeof t=="function"?cH(t):(t instanceof IDBTransaction&&lH(t),nH(t,aH())?new Proxy(t,nh):t)}function sa(t){if(t instanceof IDBRequest)return iH(t);if(td.has(t))return td.get(t);const e=pH(t);return e!==t&&(td.set(t,e),Cm.set(e,t)),e}const sd=t=>Cm.get(t);function uH(t,e,{blocked:s,upgrade:n,blocking:a,terminated:o}={}){const i=indexedDB.open(t,e),l=sa(i);return n&&i.addEventListener("upgradeneeded",r=>{n(sa(i.result),r.oldVersion,r.newVersion,sa(i.transaction),r)}),s&&i.addEventListener("blocked",r=>s(r.oldVersion,r.newVersion,r)),l.then(r=>{o&&r.addEventListener("close",()=>o()),a&&r.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const dH=["get","getKey","getAll","getAllKeys","count"],hH=["put","add","delete","clear"],nd=new Map;function d0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,a=hH.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(a||dH.includes(s)))return;const o=async function(i,...l){const r=this.transaction(i,a?"readwrite":"readonly");let p=r.store;return n&&(p=p.index(l.shift())),(await Promise.all([p[s](...l),a&&r.done]))[0]};return nd.set(e,o),o}rH(t=>({...t,get:(e,s,n)=>d0(e,s)||t.get(e,s,n),has:(e,s)=>!!d0(e,s)||t.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mH{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(gH(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function gH(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",h0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Jl("@firebase/app"),fH="@firebase/app-compat",TH="@firebase/analytics-compat",PH="@firebase/analytics",IH="@firebase/app-check-compat",yH="@firebase/app-check",EH="@firebase/auth",BH="@firebase/auth-compat",NH="@firebase/database",kH="@firebase/data-connect",SH="@firebase/database-compat",_H="@firebase/functions",VH="@firebase/functions-compat",vH="@firebase/installations",xH="@firebase/installations-compat",HH="@firebase/messaging",KH="@firebase/messaging-compat",YH="@firebase/performance",LH="@firebase/performance-compat",MH="@firebase/remote-config",CH="@firebase/remote-config-compat",AH="@firebase/storage",wH="@firebase/storage-compat",DH="@firebase/firestore",bH="@firebase/vertexai-preview",RH="@firebase/firestore-compat",QH="firebase",OH="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="[DEFAULT]",jH={[ah]:"fire-core",[fH]:"fire-core-compat",[PH]:"fire-analytics",[TH]:"fire-analytics-compat",[yH]:"fire-app-check",[IH]:"fire-app-check-compat",[EH]:"fire-auth",[BH]:"fire-auth-compat",[NH]:"fire-rtdb",[kH]:"fire-data-connect",[SH]:"fire-rtdb-compat",[_H]:"fire-fn",[VH]:"fire-fn-compat",[vH]:"fire-iid",[xH]:"fire-iid-compat",[HH]:"fire-fcm",[KH]:"fire-fcm-compat",[YH]:"fire-perf",[LH]:"fire-perf-compat",[MH]:"fire-rc",[CH]:"fire-rc-compat",[AH]:"fire-gcs",[wH]:"fire-gcs-compat",[DH]:"fire-fst",[RH]:"fire-fst-compat",[bH]:"fire-vertex","fire-js":"fire-js",[QH]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,GH=new Map,ih=new Map;function m0(t,e){try{t.container.addComponent(e)}catch(s){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function Rs(t){const e=t.name;if(ih.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;ih.set(e,t);for(const s of Qc.values())m0(s,t);for(const s of GH.values())m0(s,t);return!0}function Dp(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function Fs(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UH={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},na=new li("app","Firebase",UH);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zH{constructor(e,s,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw na.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=OH;function IE(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:oh,automaticDataCollectionEnabled:!1},e),a=n.name;if(typeof a!="string"||!a)throw na.create("bad-app-name",{appName:String(a)});if(s||(s=uE()),!s)throw na.create("no-options");const o=Qc.get(a);if(o){if(Rc(s,o.options)&&Rc(n,o.config))return o;throw na.create("duplicate-app",{appName:a})}const i=new Zx(a);for(const r of ih.values())i.addComponent(r);const l=new zH(s,n,i);return Qc.set(a,l),l}function bp(t=oh){const e=Qc.get(t);if(!e&&t===oh&&uE())return IE();if(!e)throw na.create("no-app",{appName:t});return e}function ns(t,e,s){var n;let a=(n=jH[t])!==null&&n!==void 0?n:t;s&&(a+=`-${s}`);const o=a.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const l=[`Unable to register library "${a}" with version "${e}":`];o&&l.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&i&&l.push("and"),i&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}Rs(new ks(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qH="firebase-heartbeat-database",FH=1,Yl="firebase-heartbeat-store";let ad=null;function yE(){return ad||(ad=uH(qH,FH,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yl)}catch(s){console.warn(s)}}}}).catch(t=>{throw na.create("idb-open",{originalErrorMessage:t.message})})),ad}async function JH(t){try{const s=(await yE()).transaction(Yl),n=await s.objectStore(Yl).get(EE(t));return await s.done,n}catch(e){if(e instanceof an)Sn.warn(e.message);else{const s=na.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(s.message)}}}async function g0(t,e){try{const n=(await yE()).transaction(Yl,"readwrite");await n.objectStore(Yl).put(e,EE(t)),await n.done}catch(s){if(s instanceof an)Sn.warn(s.message);else{const n=na.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});Sn.warn(n.message)}}}function EE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $H=1024,WH=30*24*60*60*1e3;class ZH{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new e3(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=f0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const l=new Date(i.date).valueOf();return Date.now()-l<=WH}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Sn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=f0(),{heartbeatsToSend:n,unsentEntries:a}=XH(this._heartbeatsCache.heartbeats),o=wc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(s){return Sn.warn(s),""}}}function f0(){return new Date().toISOString().substring(0,10)}function XH(t,e=$H){const s=[];let n=t.slice();for(const a of t){const o=s.find(i=>i.agent===a.agent);if(o){if(o.dates.push(a.date),T0(s)>e){o.dates.pop();break}}else if(s.push({agent:a.agent,dates:[a.date]}),T0(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class e3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gE()?wx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await JH(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return g0(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return g0(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function T0(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(t){Rs(new ks("platform-logger",e=>new mH(e),"PRIVATE")),Rs(new ks("heartbeat",e=>new ZH(e),"PRIVATE")),ns(ah,h0,t),ns(ah,h0,"esm2017"),ns("fire-js","")}t3("");function Am(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(s[n[a]]=t[n[a]]);return s}function BE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s3=BE,NE=new li("auth","Firebase",BE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Jl("@firebase/auth");function n3(t,...e){Oc.logLevel<=Ke.WARN&&Oc.warn(`Auth (${Ta}): ${t}`,...e)}function cc(t,...e){Oc.logLevel<=Ke.ERROR&&Oc.error(`Auth (${Ta}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,...e){throw wm(t,...e)}function Ws(t,...e){return wm(t,...e)}function kE(t,e,s){const n=Object.assign(Object.assign({},s3()),{[e]:s});return new li("auth","Firebase",n).create(e,{appName:t.name})}function En(t){return kE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(t,...e){if(typeof t!="string"){const s=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(s,...n)}return NE.create(t,...e)}function Ee(t,e,...s){if(!t)throw wm(e,...s)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function _n(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function a3(){return P0()==="http:"||P0()==="https:"}function P0(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a3()||Mx()||"connection"in navigator)?navigator.onLine:!0}function i3(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,s){this.shortDelay=e,this.longDelay=s,_n(s>e,"Short delay should be less than long delay!"),this.isMobile=Mm()||hE()}get(){return o3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){_n(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{static initialize(e,s,n){this.fetchImpl=e,s&&(this.headersImpl=s),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=new $l(3e4,6e4);function Pa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ia(t,e,s,n,a={}){return _E(t,a,async()=>{let o={},i={};n&&(e==="GET"?i=n:o={body:JSON.stringify(n)});const l=ri(Object.assign({key:t.config.apiKey},i)).slice(1),r=await t._getAdditionalHeaders();r["Content-Type"]="application/json",t.languageCode&&(r["X-Firebase-Locale"]=t.languageCode);const p=Object.assign({method:e,headers:r},o);return Lx()||(p.referrerPolicy="no-referrer"),SE.fetch()(VE(t,t.config.apiHost,s,l),p)})}async function _E(t,e,s){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},l3),e);try{const a=new p3(t),o=await Promise.race([s(),a.promise]);a.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw Rr(t,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const l=o.ok?i.errorMessage:i.error.message,[r,p]=l.split(" : ");if(r==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(t,"credential-already-in-use",i);if(r==="EMAIL_EXISTS")throw Rr(t,"email-already-in-use",i);if(r==="USER_DISABLED")throw Rr(t,"user-disabled",i);const u=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw kE(t,u,p);Qs(t,u)}}catch(a){if(a instanceof an)throw a;Qs(t,"network-request-failed",{message:String(a)})}}async function Wl(t,e,s,n,a={}){const o=await Ia(t,e,s,n,a);return"mfaPendingCredential"in o&&Qs(t,"multi-factor-auth-required",{_serverResponse:o}),o}function VE(t,e,s,n){const a=`${e}${s}?${n}`;return t.config.emulator?Dm(t.config,a):`${t.config.apiScheme}://${a}`}function c3(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class p3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,n)=>{this.timer=setTimeout(()=>n(Ws(this.auth,"network-request-failed")),r3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(t,e,s){const n={appName:t.name};s.email&&(n.email=s.email),s.phoneNumber&&(n.phoneNumber=s.phoneNumber);const a=Ws(t,e,n);return a.customData._tokenResponse=s,a}function I0(t){return t!==void 0&&t.enterprise!==void 0}class u3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===e)return c3(s.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function d3(t,e){return Ia(t,"GET","/v2/recaptchaConfig",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h3(t,e){return Ia(t,"POST","/v1/accounts:delete",e)}async function vE(t,e){return Ia(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m3(t,e=!1){const s=mt(t),n=await s.getIdToken(e),a=bm(n);Ee(a&&a.exp&&a.auth_time&&a.iat,s.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,i=o==null?void 0:o.sign_in_provider;return{claims:a,token:n,authTime:pl(od(a.auth_time)),issuedAtTime:pl(od(a.iat)),expirationTime:pl(od(a.exp)),signInProvider:i||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function od(t){return Number(t)*1e3}function bm(t){const[e,s,n]=t.split(".");if(e===void 0||s===void 0||n===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const a=Dc(s);return a?JSON.parse(a):(cc("Failed to decode base64 JWT payload"),null)}catch(a){return cc("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function y0(t){const e=bm(t);return Ee(e,"internal-error"),Ee(typeof e.exp!="undefined","internal-error"),Ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t,e,s=!1){if(s)return e;try{return await e}catch(n){throw n instanceof an&&g3(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function g3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var s;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=((s=this.user.stsTokenManager.expirationTime)!==null&&s!==void 0?s:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(t){var e;const s=t.auth,n=await t.getIdToken(),a=await Ll(t,vE(s,{idToken:n}));Ee(a==null?void 0:a.users.length,s,"internal-error");const o=a.users[0];t._notifyReloadListener(o);const i=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?xE(o.providerUserInfo):[],l=P3(t.providerData,i),r=t.isAnonymous,p=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),u=r?p:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rh(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function T3(t){const e=mt(t);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P3(t,e){return[...t.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function xE(t){return t.map(e=>{var{providerId:s}=e,n=Am(e,["providerId"]);return{providerId:s,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I3(t,e){const s=await _E(t,{},async()=>{const n=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=t.config,i=VE(t,a,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",SE.fetch()(i,{method:"POST",headers:l,body:n})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function y3(t,e){return Ia(t,"POST","/v2/accounts:revokeToken",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken!="undefined","internal-error"),Ee(typeof e.refreshToken!="undefined","internal-error");const s="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):y0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const s=y0(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:n,refreshToken:a,expiresIn:o}=await I3(e,s);this.updateTokensAndExpiration(n,a,Number(o))}updateTokensAndExpiration(e,s,n){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,s){const{refreshToken:n,accessToken:a,expirationTime:o}=s,i=new bo;return n&&(Ee(typeof n=="string","internal-error",{appName:e}),i.refreshToken=n),a&&(Ee(typeof a=="string","internal-error",{appName:e}),i.accessToken=a),o&&(Ee(typeof o=="number","internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){Ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Tn{constructor(e){var{uid:s,auth:n,stsTokenManager:a}=e,o=Am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new f3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=s,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const s=await Ll(this,this.stsTokenManager.getToken(this.auth,e));return Ee(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return m3(this,e)}reload(){return T3(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>Object.assign({},s)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return s.metadata._copy(this.metadata),s}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),s&&await jc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fs(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Ll(this,h3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){var n,a,o,i,l,r,p,u;const d=(n=s.displayName)!==null&&n!==void 0?n:void 0,m=(a=s.email)!==null&&a!==void 0?a:void 0,f=(o=s.phoneNumber)!==null&&o!==void 0?o:void 0,P=(i=s.photoURL)!==null&&i!==void 0?i:void 0,_=(l=s.tenantId)!==null&&l!==void 0?l:void 0,v=(r=s._redirectEventId)!==null&&r!==void 0?r:void 0,L=(p=s.createdAt)!==null&&p!==void 0?p:void 0,x=(u=s.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Y,emailVerified:K,isAnonymous:A,providerData:R,stsTokenManager:S}=s;Ee(Y&&S,e,"internal-error");const y=bo.fromJSON(this.name,S);Ee(typeof Y=="string",e,"internal-error"),bn(d,e.name),bn(m,e.name),Ee(typeof K=="boolean",e,"internal-error"),Ee(typeof A=="boolean",e,"internal-error"),bn(f,e.name),bn(P,e.name),bn(_,e.name),bn(v,e.name),bn(L,e.name),bn(x,e.name);const T=new Tn({uid:Y,auth:e,email:m,emailVerified:K,displayName:d,isAnonymous:A,photoURL:P,phoneNumber:f,tenantId:_,stsTokenManager:y,createdAt:L,lastLoginAt:x});return R&&Array.isArray(R)&&(T.providerData=R.map(E=>Object.assign({},E))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,s,n=!1){const a=new bo;a.updateFromServerResponse(s);const o=new Tn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await jc(o),o}static async _fromGetAccountInfoResponse(e,s,n){const a=s.users[0];Ee(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?xE(a.providerUserInfo):[],i=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),l=new bo;l.updateFromIdToken(n);const r=new Tn({uid:a.localId,auth:e,stsTokenManager:l,isAnonymous:i}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new rh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(r,p),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Map;function Pn(t){_n(t instanceof Function,"Expected a class definition");let e=E0.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,E0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}HE.type="NONE";const B0=HE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e,s){return`firebase:${t}:${e}:${s}`}class Ro{constructor(e,s,n){this.persistence=e,this.auth=s,this.userKey=n;const{config:a,name:o}=this.auth;this.fullUserKey=pc(this.userKey,a.apiKey,o),this.fullPersistenceKey=pc("persistence",a.apiKey,o),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,s,n="authUser"){if(!s.length)return new Ro(Pn(B0),e,n);const a=(await Promise.all(s.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=a[0]||Pn(B0);const i=pc(n,e.config.apiKey,e.name);let l=null;for(const p of s)try{const u=await p._get(i);if(u){const d=Tn._fromJSON(e,u);p!==o&&(l=d),o=p;break}}catch{}const r=a.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!r.length?new Ro(o,e,n):(o=r[0],l&&await o._set(i,l.toJSON()),await Promise.all(s.map(async p=>{if(p!==o)try{await p._remove(i)}catch{}})),new Ro(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ME(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AE(e))return"Blackberry";if(wE(e))return"Webos";if(YE(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(CE(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(s);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function KE(t=$t()){return/firefox\//i.test(t)}function YE(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=$t()){return/crios\//i.test(t)}function ME(t=$t()){return/iemobile/i.test(t)}function CE(t=$t()){return/android/i.test(t)}function AE(t=$t()){return/blackberry/i.test(t)}function wE(t=$t()){return/webos/i.test(t)}function Rm(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E3(t=$t()){var e;return Rm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B3(){return Cx()&&document.documentMode===10}function DE(t=$t()){return Rm(t)||CE(t)||wE(t)||AE(t)||/windows phone/i.test(t)||ME(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t,e=[]){let s;switch(t){case"Browser":s=N0($t());break;case"Worker":s=`${N0($t())}-${t}`;break;default:s=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${Ta}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const n=o=>new Promise((i,l)=>{try{const r=e(o);i(r)}catch(r){l(r)}});n.onAbort=s,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const n of this.queue)await n(e),n.onAbort&&s.push(n.onAbort)}catch(n){s.reverse();for(const a of s)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k3(t,e={}){return Ia(t,"GET","/v2/passwordPolicy",Pa(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3=6;class _3{constructor(e){var s,n,a,o;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=i.minPasswordLength)!==null&&s!==void 0?s:S3,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var s,n,a,o,i,l;const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=(s=r.meetsMinPasswordLength)!==null&&s!==void 0?s:!0),r.isValid&&(r.isValid=(n=r.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),r.isValid&&(r.isValid=(a=r.containsLowercaseLetter)!==null&&a!==void 0?a:!0),r.isValid&&(r.isValid=(o=r.containsUppercaseLetter)!==null&&o!==void 0?o:!0),r.isValid&&(r.isValid=(i=r.containsNumericCharacter)!==null&&i!==void 0?i:!0),r.isValid&&(r.isValid=(l=r.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),r}validatePasswordLengthOptions(e,s){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(s.meetsMinPasswordLength=e.length>=n),a&&(s.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(s,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,s,n,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e,s,n,a){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k0(this),this.idTokenSubscription=new k0(this),this.beforeStateQueue=new N3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=Pn(s)),this._initializationPromise=this.queue(async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await vE(this,{idToken:e}),n=await Tn._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(n)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Fs(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId,l=a==null?void 0:a._redirectEventId,r=await this.tryRedirectSignIn(e);(!i||i===l)&&(r==null?void 0:r.user)&&(a=r.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fs(this.app))return Promise.reject(En(this));const s=e?mt(e):null;return s&&Ee(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fs(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fs(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k3(this),s=new _3(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,s,n){return this.registerStateListener(this.authStateSubscription,e,s,n)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,n){return this.registerStateListener(this.idTokenSubscription,e,s,n)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(n.tenantId=this.tenantId),await y3(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,s){const n=await this.getOrInitRedirectPersistenceManager(s);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&Pn(e)||this._popupRedirectResolver;Ee(s,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[Pn(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,n;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)===null||s===void 0?void 0:s._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(s=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&s!==void 0?s:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,n,a){if(this._deleted)return()=>{};const o=typeof s=="function"?s:s.next.bind(s);let i=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(l,this,"internal-error"),l.then(()=>{i||o(this.currentUser)}),typeof s=="function"){const r=e.addObserver(s,n,a);return()=>{i=!0,r()}}else{const r=e.addObserver(s);return()=>{i=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const s={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(s["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(s["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(s["X-Firebase-AppCheck"]=a),s}async _getAppCheckToken(){var e;const s=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return s!=null&&s.error&&n3(`Error while retrieving App Check token: ${s.error}`),s==null?void 0:s.token}}function oo(t){return mt(t)}class k0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gx(s=>this.observer=s)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v3(t){Rp=t}function RE(t){return Rp.loadJS(t)}function x3(){return Rp.recaptchaEnterpriseScript}function H3(){return Rp.gapiScript}function K3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Y3="recaptcha-enterprise",L3="NO_RECAPTCHA";class M3{constructor(e){this.type=Y3,this.auth=oo(e)}async verify(e="verify",s=!1){async function n(o){if(!s){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(i,l)=>{d3(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(r.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const p=new u3(r);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,i(p.siteKey)}}).catch(r=>{l(r)})})}function a(o,i,l){const r=window.grecaptcha;I0(r)?r.enterprise.ready(()=>{r.enterprise.execute(o,{action:e}).then(p=>{i(p)}).catch(()=>{i(L3)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,i)=>{n(this.auth).then(l=>{if(!s&&I0(window.grecaptcha))a(l,o,i);else{if(typeof window=="undefined"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let r=x3();r.length!==0&&(r+=l),RE(r).then(()=>{a(l,o,i)}).catch(p=>{i(p)})}}).catch(l=>{i(l)})})}}async function S0(t,e,s,n=!1){const a=new M3(t);let o;try{o=await a.verify(s)}catch{o=await a.verify(s,!0)}const i=Object.assign({},e);return n?Object.assign(i,{captchaResp:o}):Object.assign(i,{captchaResponse:o}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}async function ch(t,e,s,n){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await S0(t,e,s,s==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await S0(t,e,s,s==="getOobCode");return n(t,i)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t,e){const s=Dp(t,"auth");if(s.isInitialized()){const a=s.getImmediate(),o=s.getOptions();if(Rc(o,e!=null?e:{}))return a;Qs(a,"already-initialized")}return s.initialize({options:e})}function C3(t,e){const s=(e==null?void 0:e.persistence)||[],n=(Array.isArray(s)?s:[s]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function A3(t,e,s){const n=oo(t);Ee(n._canInitEmulator,n,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(s!=null&&s.disableWarnings),o=OE(e),{host:i,port:l}=w3(e),r=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${i}${r}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:i,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||D3()}function OE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w3(t){const e=OE(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const n=s[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const o=a[1];return{host:o,port:_0(n.substr(o.length+1))}}else{const[o,i]=n.split(":");return{host:o,port:_0(i)}}}function _0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function D3(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,s){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function b3(t,e){return Ia(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R3(t,e){return Wl(t,"POST","/v1/accounts:signInWithPassword",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q3(t,e){return Wl(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}async function O3(t,e){return Wl(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Qm{constructor(e,s,n,a=null){super("password",n),this._email=e,this._password=s,this._tenantId=a}static _fromEmailAndPassword(e,s){return new Ml(e,s,"password")}static _fromEmailAndCode(e,s,n=null){return new Ml(e,s,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if((s==null?void 0:s.email)&&(s==null?void 0:s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ch(e,s,"signInWithPassword",R3);case"emailLink":return Q3(e,{email:this._email,oobCode:this._password});default:Qs(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":const n={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ch(e,n,"signUpPassword",b3);case"emailLink":return O3(e,{idToken:s,email:this._email,oobCode:this._password});default:Qs(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t,e){return Wl(t,"POST","/v1/accounts:signInWithIdp",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3="http://localhost";class za extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new za(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):Qs("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a}=s,o=Am(s,["providerId","signInMethod"]);if(!n||!a)return null;const i=new za(n,a);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const s=this.buildRequest();return Qo(e,s)}_linkToIdToken(e,s){const n=this.buildRequest();return n.idToken=s,Qo(e,n)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,Qo(e,s)}buildRequest(){const e={requestUri:j3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=ri(s)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U3(t){const e=zi(qi(t)).link,s=e?zi(qi(e)).deep_link_id:null,n=zi(qi(t)).deep_link_id;return(n?zi(qi(n)).link:null)||n||s||e||t}class Om{constructor(e){var s,n,a,o,i,l;const r=zi(qi(e)),p=(s=r.apiKey)!==null&&s!==void 0?s:null,u=(n=r.oobCode)!==null&&n!==void 0?n:null,d=G3((a=r.mode)!==null&&a!==void 0?a:null);Ee(p&&u&&d,"argument-error"),this.apiKey=p,this.operation=d,this.code=u,this.continueUrl=(o=r.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(i=r.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(l=r.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const s=U3(e);try{return new Om(s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,s){return Ml._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const n=Om.parseLink(s);return Ee(n,"argument-error"),Ml._fromEmailAndCode(e,n.code,n.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends jE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Zl{constructor(){super("facebook.com")}static credential(e){return za._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return za._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:n}=e;if(!s&&!n)return null;try{return $n.credential(s,n)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Zl{constructor(){super("github.com")}static credential(e){return za._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Zl{constructor(){super("twitter.com")}static credential(e,s){return za._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:n}=e;if(!s||!n)return null;try{return Zn.credential(s,n)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z3(t,e){return Wl(t,"POST","/v1/accounts:signUp",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,n,a=!1){const o=await Tn._fromIdTokenResponse(e,n,a),i=V0(n);return new qa({user:o,providerId:i,_tokenResponse:n,operationType:s})}static async _forOperation(e,s,n){await e._updateTokensIfNecessary(n,!0);const a=V0(n);return new qa({user:e,providerId:a,_tokenResponse:n,operationType:s})}}function V0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends an{constructor(e,s,n,a){var o;super(s.code,s.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:s.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,s,n,a){return new Gc(e,s,n,a)}}function GE(t,e,s,n){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,o,e,n):o})}async function q3(t,e,s=!1){const n=await Ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return qa._forOperation(t,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F3(t,e,s=!1){const{auth:n}=t;if(Fs(n.app))return Promise.reject(En(n));const a="reauthenticate";try{const o=await Ll(t,GE(n,a,e,t),s);Ee(o.idToken,n,"internal-error");const i=bm(o.idToken);Ee(i,n,"internal-error");const{sub:l}=i;return Ee(t.uid===l,n,"user-mismatch"),qa._forOperation(t,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Qs(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e,s=!1){if(Fs(t.app))return Promise.reject(En(t));const n="signIn",a=await GE(t,n,e),o=await qa._fromIdTokenResponse(t,n,a);return s||await t._updateCurrentUser(o.user),o}async function J3(t,e){return UE(oo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t){const e=oo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $3(t,e,s){if(Fs(t.app))return Promise.reject(En(t));const n=oo(t),i=await ch(n,{returnSecureToken:!0,email:e,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z3).catch(r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zE(t),r}),l=await qa._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(l.user),l}function v0(t,e,s){return Fs(t.app)?Promise.reject(En(t)):J3(mt(t),ci.credential(e,s)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&zE(t),n})}function qE(t,e,s,n){return mt(t).onIdTokenChanged(e,s,n)}function W3(t,e,s){return mt(t).beforeAuthStateChanged(e,s)}function x0(t){return mt(t).signOut()}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3=1e3,X3=10;class JE extends FE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=DE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const n=this.storage.getItem(s),a=this.localCache[s];n!==a&&e(s,a,n)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((i,l,r)=>{this.notifyListeners(i,r)});return}const n=e.key;s?this.detachListener():this.stopPolling();const a=()=>{const i=this.storage.getItem(n);!s&&this.localCache[n]===i||this.notifyListeners(n,i)},o=this.storage.getItem(n);B3()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,X3):a()}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:n}),!0)})},Z3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}JE.type="LOCAL";const $E=JE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends FE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}WE.type="SESSION";const jm=WE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eK(t){return Promise.all(t.map(async e=>{try{const s=await e;return{fulfilled:!0,value:s}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(a=>a.isListeningto(e));if(s)return s;const n=new Qp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:n,eventType:a,data:o}=s.data,i=this.handlersMap[a];if(!(i!=null&&i.size))return;s.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const l=Array.from(i).map(async p=>p(s.origin,o)),r=await eK(l);s.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:r})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t="",e=10){let s="";for(let n=0;n<e;n++)s+=Math.floor(Math.random()*10);return t+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,n=50){const a=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,i;return new Promise((l,r)=>{const p=Gm("",20);a.port1.start();const u=setTimeout(()=>{r(new Error("unsupported_event"))},n);i={messageChannel:a,onMessage(d){const m=d;if(m.data.eventId===p)switch(m.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{r(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(u),clearTimeout(o),r(new Error("invalid_response"));break}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:p,data:s},[a.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return window}function sK(t){Zs().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof Zs().WorkerGlobalScope!="undefined"&&typeof Zs().importScripts=="function"}async function nK(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aK(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oK(){return ZE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",iK=1,zc="firebaseLocalStorage",eB="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Op(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function lK(){const t=indexedDB.deleteDatabase(XE);return new Xl(t).toPromise()}function ph(){const t=indexedDB.open(XE,iK);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(zc,{keyPath:eB})}catch(a){s(a)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(zc)?e(n):(n.close(),await lK(),e(await ph()))})})}async function H0(t,e,s){const n=Op(t,!0).put({[eB]:e,value:s});return new Xl(n).toPromise()}async function rK(t,e){const s=Op(t,!1).get(e),n=await new Xl(s).toPromise();return n===void 0?null:n.value}function K0(t,e){const s=Op(t,!0).delete(e);return new Xl(s).toPromise()}const cK=800,pK=3;class tB{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(e){let s=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(s++>pK)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qp._getInstance(oK()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var e,s;if(this.activeServiceWorker=await nK(),!this.activeServiceWorker)return;this.sender=new tK(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((s=n[0])===null||s===void 0?void 0:s.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aK()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ph();return await H0(e,Uc,"1"),await K0(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(n=>rK(n,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>K0(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Op(a,!1).getAll();return new Xl(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),s.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),s.push(a));return s}notifyListeners(e,s){this.localCache[e]=s;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cK)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tB.type="LOCAL";const sB=tB;new $l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uK(t,e){return e?Pn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,s){return Qo(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function dK(t){return UE(t.auth,new Um(t),t.bypassAuthState)}function hK(t){const{auth:e,user:s}=t;return Ee(s,e,"internal-error"),F3(s,new Um(t),t.bypassAuthState)}async function mK(t){const{auth:e,user:s}=t;return Ee(s,e,"internal-error"),q3(s,new Um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,s,n,a,o=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:n,postBody:a,tenantId:o,error:i,type:l}=e;if(i){this.reject(i);return}const r={auth:this.auth,requestUri:s,sessionId:n,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(r))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dK;case"linkViaPopup":case"linkViaRedirect":return mK;case"reauthViaPopup":case"reauthViaRedirect":return hK;default:Qs(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gK=new $l(2e3,1e4);class Yo extends nB{constructor(e,s,n,a,o){super(e,s,a,o),this.provider=n,this.authWindow=null,this.pollId=null,Yo.currentPopupAction&&Yo.currentPopupAction.cancel(),Yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(Ws(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ws(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,n;if(!((n=(s=this.authWindow)===null||s===void 0?void 0:s.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ws(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gK.get())};e()}}Yo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fK="pendingRedirect",uc=new Map;class TK extends nB{constructor(e,s,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,n),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const n=await PK(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(s){e=()=>Promise.reject(s)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PK(t,e){const s=EK(e),n=yK(t);if(!await n._isAvailable())return!1;const a=await n._get(s)==="true";return await n._remove(s),a}function IK(t,e){uc.set(t._key(),e)}function yK(t){return Pn(t._redirectPersistence)}function EK(t){return pc(fK,t.config.apiKey,t.name)}async function BK(t,e,s=!1){if(Fs(t.app))return Promise.reject(En(t));const n=oo(t),a=uK(n,e),i=await new TK(n,a,s).execute();return i&&!s&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NK=10*60*1e3;class kK{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(s=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SK(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var n;if(e.error&&!aB(e)){const a=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";s.onError(Ws(this.auth,a))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const n=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NK&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y0(e))}saveEventToCache(e){this.cachedEventUids.add(Y0(e)),this.lastProcessedEventTime=Date.now()}}function Y0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aB({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SK(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aB(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _K(t,e={}){return Ia(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VK=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vK=/^https?/;async function xK(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _K(t);for(const s of e)try{if(HK(s))return}catch{}Qs(t,"unauthorized-domain")}function HK(t){const e=lh(),{protocol:s,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&n===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&i.hostname===n}if(!vK.test(s))return!1;if(VK.test(t))return n===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KK=new $l(3e4,6e4);function L0(){const t=Zs().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function YK(t){return new Promise((e,s)=>{var n,a,o;function i(){L0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L0(),s(Ws(t,"network-request-failed"))},timeout:KK.get()})}if(!((a=(n=Zs().gapi)===null||n===void 0?void 0:n.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Zs().gapi)===null||o===void 0)&&o.load)i();else{const l=K3("iframefcb");return Zs()[l]=()=>{gapi.load?i():s(Ws(t,"network-request-failed"))},RE(`${H3()}?onload=${l}`).catch(r=>s(r))}}).catch(e=>{throw dc=null,e})}let dc=null;function LK(t){return dc=dc||YK(t),dc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MK=new $l(5e3,15e3),CK="__/auth/iframe",AK="emulator/auth/iframe",wK={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DK=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bK(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?Dm(e,AK):`https://${t.config.authDomain}/${CK}`,n={apiKey:e.apiKey,appName:t.name,v:Ta},a=DK.get(t.config.apiHost);a&&(n.eid=a);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${s}?${ri(n).slice(1)}`}async function RK(t){const e=await LK(t),s=Zs().gapi;return Ee(s,t,"internal-error"),e.open({where:document.body,url:bK(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wK,dontclear:!0},n=>new Promise(async(a,o)=>{await n.restyle({setHideOnLeave:!1});const i=Ws(t,"network-request-failed"),l=Zs().setTimeout(()=>{o(i)},MK.get());function r(){Zs().clearTimeout(l),a(n)}n.ping(r).then(r,()=>{o(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QK={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OK=500,jK=600,GK="_blank",UK="http://localhost";class M0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zK(t,e,s,n=OK,a=jK){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),i=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const r=Object.assign(Object.assign({},QK),{width:n.toString(),height:a.toString(),top:o,left:i}),p=$t().toLowerCase();s&&(l=LE(p)?GK:s),KE(p)&&(e=e||UK,r.scrollbars="yes");const u=Object.entries(r).reduce((m,[f,P])=>`${m}${f}=${P},`,"");if(E3(p)&&l!=="_self")return qK(e||"",l),new M0(null);const d=window.open(e||"",l,u);Ee(d,t,"popup-blocked");try{d.focus()}catch{}return new M0(d)}function qK(t,e){const s=document.createElement("a");s.href=t,s.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FK="__/auth/handler",JK="emulator/auth/handler",$K=encodeURIComponent("fac");async function C0(t,e,s,n,a,o){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:n,v:Ta,eventId:a};if(e instanceof jE){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",th(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(o||{}))i[u]=d}if(e instanceof Zl){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(i.scopes=u.join(","))}t.tenantId&&(i.tid=t.tenantId);const l=i;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const r=await t._getAppCheckToken(),p=r?`#${$K}=${encodeURIComponent(r)}`:"";return`${WK(t)}?${ri(l).slice(1)}${p}`}function WK({config:t}){return t.emulator?Dm(t,JK):`https://${t.authDomain}/${FK}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="webStorageSupport";class ZK{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jm,this._completeRedirectFn=BK,this._overrideRedirectResult=IK}async _openPopup(e,s,n,a){var o;_n((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await C0(e,s,n,lh(),a);return zK(e,i,Gm())}async _openRedirect(e,s,n,a){await this._originValidation(e);const o=await C0(e,s,n,lh(),a);return sK(o),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:a,promise:o}=this.eventManagers[s];return a?Promise.resolve(a):(_n(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[s]={promise:n},n.catch(()=>{delete this.eventManagers[s]}),n}async initAndGetManager(e){const s=await RK(e),n=new kK(e);return s.register("authEvent",a=>(Ee(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=s,n}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(id,{type:id},a=>{var o;const i=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[id];i!==void 0&&s(!!i),Qs(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=xK(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return DE()||YE()||Rm()}}const oB=ZK;var A0="@firebase/auth",w0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XK{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);!s||(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eY(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tY(t){Rs(new ks("auth",(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:i,authDomain:l}=n.options;Ee(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const r={apiKey:i,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bE(t)},p=new V3(n,a,o,r);return C3(p,s),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,n)=>{e.getProvider("auth-internal").initialize()})),Rs(new ks("auth-internal",e=>{const s=oo(e.getProvider("auth").getImmediate());return(n=>new XK(n))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),ns(A0,w0,eY(t)),ns(A0,w0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sY=5*60,nY=dE("authIdTokenMaxAge")||sY;let D0=null;const aY=t=>async e=>{const s=e&&await e.getIdTokenResult(),n=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(n&&n>nY)return;const a=s==null?void 0:s.token;D0!==a&&(D0=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function oY(t=bp()){const e=Dp(t,"auth");if(e.isInitialized())return e.getImmediate();const s=QE(t,{popupRedirectResolver:oB,persistence:[sB,$E,jm]}),n=dE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const i=aY(o.toString());W3(s,i,()=>i(s.currentUser)),qE(s,l=>i(l))}}const a=cE("auth");return a&&A3(s,`http://${a}`),s}function iY(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}v3({loadJS(t){return new Promise((e,s)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=a=>{const o=Ws("internal-error");o.customData=a,s(o)},n.type="text/javascript",n.charset="UTF-8",iY().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tY("Browser");var lY="firebase",rY="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns(lY,rY,"app");var b0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,iB;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function T(){}T.prototype=y.prototype,S.D=y.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(E,k,I){for(var N=Array(arguments.length-2),D=2;D<arguments.length;D++)N[D-2]=arguments[D];return y.prototype[k].apply(E,N)}}function s(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,s),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(S,y,T){T||(T=0);var E=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)E[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)E[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=S.g[0],T=S.g[1],k=S.g[2];var I=S.g[3],N=y+(I^T&(k^I))+E[0]+3614090360&4294967295;y=T+(N<<7&4294967295|N>>>25),N=I+(k^y&(T^k))+E[1]+3905402710&4294967295,I=y+(N<<12&4294967295|N>>>20),N=k+(T^I&(y^T))+E[2]+606105819&4294967295,k=I+(N<<17&4294967295|N>>>15),N=T+(y^k&(I^y))+E[3]+3250441966&4294967295,T=k+(N<<22&4294967295|N>>>10),N=y+(I^T&(k^I))+E[4]+4118548399&4294967295,y=T+(N<<7&4294967295|N>>>25),N=I+(k^y&(T^k))+E[5]+1200080426&4294967295,I=y+(N<<12&4294967295|N>>>20),N=k+(T^I&(y^T))+E[6]+2821735955&4294967295,k=I+(N<<17&4294967295|N>>>15),N=T+(y^k&(I^y))+E[7]+4249261313&4294967295,T=k+(N<<22&4294967295|N>>>10),N=y+(I^T&(k^I))+E[8]+1770035416&4294967295,y=T+(N<<7&4294967295|N>>>25),N=I+(k^y&(T^k))+E[9]+2336552879&4294967295,I=y+(N<<12&4294967295|N>>>20),N=k+(T^I&(y^T))+E[10]+4294925233&4294967295,k=I+(N<<17&4294967295|N>>>15),N=T+(y^k&(I^y))+E[11]+2304563134&4294967295,T=k+(N<<22&4294967295|N>>>10),N=y+(I^T&(k^I))+E[12]+1804603682&4294967295,y=T+(N<<7&4294967295|N>>>25),N=I+(k^y&(T^k))+E[13]+4254626195&4294967295,I=y+(N<<12&4294967295|N>>>20),N=k+(T^I&(y^T))+E[14]+2792965006&4294967295,k=I+(N<<17&4294967295|N>>>15),N=T+(y^k&(I^y))+E[15]+1236535329&4294967295,T=k+(N<<22&4294967295|N>>>10),N=y+(k^I&(T^k))+E[1]+4129170786&4294967295,y=T+(N<<5&4294967295|N>>>27),N=I+(T^k&(y^T))+E[6]+3225465664&4294967295,I=y+(N<<9&4294967295|N>>>23),N=k+(y^T&(I^y))+E[11]+643717713&4294967295,k=I+(N<<14&4294967295|N>>>18),N=T+(I^y&(k^I))+E[0]+3921069994&4294967295,T=k+(N<<20&4294967295|N>>>12),N=y+(k^I&(T^k))+E[5]+3593408605&4294967295,y=T+(N<<5&4294967295|N>>>27),N=I+(T^k&(y^T))+E[10]+38016083&4294967295,I=y+(N<<9&4294967295|N>>>23),N=k+(y^T&(I^y))+E[15]+3634488961&4294967295,k=I+(N<<14&4294967295|N>>>18),N=T+(I^y&(k^I))+E[4]+3889429448&4294967295,T=k+(N<<20&4294967295|N>>>12),N=y+(k^I&(T^k))+E[9]+568446438&4294967295,y=T+(N<<5&4294967295|N>>>27),N=I+(T^k&(y^T))+E[14]+3275163606&4294967295,I=y+(N<<9&4294967295|N>>>23),N=k+(y^T&(I^y))+E[3]+4107603335&4294967295,k=I+(N<<14&4294967295|N>>>18),N=T+(I^y&(k^I))+E[8]+1163531501&4294967295,T=k+(N<<20&4294967295|N>>>12),N=y+(k^I&(T^k))+E[13]+2850285829&4294967295,y=T+(N<<5&4294967295|N>>>27),N=I+(T^k&(y^T))+E[2]+4243563512&4294967295,I=y+(N<<9&4294967295|N>>>23),N=k+(y^T&(I^y))+E[7]+1735328473&4294967295,k=I+(N<<14&4294967295|N>>>18),N=T+(I^y&(k^I))+E[12]+2368359562&4294967295,T=k+(N<<20&4294967295|N>>>12),N=y+(T^k^I)+E[5]+4294588738&4294967295,y=T+(N<<4&4294967295|N>>>28),N=I+(y^T^k)+E[8]+2272392833&4294967295,I=y+(N<<11&4294967295|N>>>21),N=k+(I^y^T)+E[11]+1839030562&4294967295,k=I+(N<<16&4294967295|N>>>16),N=T+(k^I^y)+E[14]+4259657740&4294967295,T=k+(N<<23&4294967295|N>>>9),N=y+(T^k^I)+E[1]+2763975236&4294967295,y=T+(N<<4&4294967295|N>>>28),N=I+(y^T^k)+E[4]+1272893353&4294967295,I=y+(N<<11&4294967295|N>>>21),N=k+(I^y^T)+E[7]+4139469664&4294967295,k=I+(N<<16&4294967295|N>>>16),N=T+(k^I^y)+E[10]+3200236656&4294967295,T=k+(N<<23&4294967295|N>>>9),N=y+(T^k^I)+E[13]+681279174&4294967295,y=T+(N<<4&4294967295|N>>>28),N=I+(y^T^k)+E[0]+3936430074&4294967295,I=y+(N<<11&4294967295|N>>>21),N=k+(I^y^T)+E[3]+3572445317&4294967295,k=I+(N<<16&4294967295|N>>>16),N=T+(k^I^y)+E[6]+76029189&4294967295,T=k+(N<<23&4294967295|N>>>9),N=y+(T^k^I)+E[9]+3654602809&4294967295,y=T+(N<<4&4294967295|N>>>28),N=I+(y^T^k)+E[12]+3873151461&4294967295,I=y+(N<<11&4294967295|N>>>21),N=k+(I^y^T)+E[15]+530742520&4294967295,k=I+(N<<16&4294967295|N>>>16),N=T+(k^I^y)+E[2]+3299628645&4294967295,T=k+(N<<23&4294967295|N>>>9),N=y+(k^(T|~I))+E[0]+4096336452&4294967295,y=T+(N<<6&4294967295|N>>>26),N=I+(T^(y|~k))+E[7]+1126891415&4294967295,I=y+(N<<10&4294967295|N>>>22),N=k+(y^(I|~T))+E[14]+2878612391&4294967295,k=I+(N<<15&4294967295|N>>>17),N=T+(I^(k|~y))+E[5]+4237533241&4294967295,T=k+(N<<21&4294967295|N>>>11),N=y+(k^(T|~I))+E[12]+1700485571&4294967295,y=T+(N<<6&4294967295|N>>>26),N=I+(T^(y|~k))+E[3]+2399980690&4294967295,I=y+(N<<10&4294967295|N>>>22),N=k+(y^(I|~T))+E[10]+4293915773&4294967295,k=I+(N<<15&4294967295|N>>>17),N=T+(I^(k|~y))+E[1]+2240044497&4294967295,T=k+(N<<21&4294967295|N>>>11),N=y+(k^(T|~I))+E[8]+1873313359&4294967295,y=T+(N<<6&4294967295|N>>>26),N=I+(T^(y|~k))+E[15]+4264355552&4294967295,I=y+(N<<10&4294967295|N>>>22),N=k+(y^(I|~T))+E[6]+2734768916&4294967295,k=I+(N<<15&4294967295|N>>>17),N=T+(I^(k|~y))+E[13]+1309151649&4294967295,T=k+(N<<21&4294967295|N>>>11),N=y+(k^(T|~I))+E[4]+4149444226&4294967295,y=T+(N<<6&4294967295|N>>>26),N=I+(T^(y|~k))+E[11]+3174756917&4294967295,I=y+(N<<10&4294967295|N>>>22),N=k+(y^(I|~T))+E[2]+718787259&4294967295,k=I+(N<<15&4294967295|N>>>17),N=T+(I^(k|~y))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+I&4294967295}n.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var T=y-this.blockSize,E=this.B,k=this.h,I=0;I<y;){if(k==0)for(;I<=T;)a(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<y;)if(E[k++]=S.charCodeAt(I++),k==this.blockSize){a(this,E),k=0;break}}else for(;I<y;)if(E[k++]=S[I++],k==this.blockSize){a(this,E),k=0;break}}this.h=k,this.o+=y},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var T=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=T&255,T/=256;for(this.u(S),S=Array(16),y=T=0;4>y;++y)for(var E=0;32>E;E+=8)S[T++]=this.g[y]>>>E&255;return S};function o(S,y){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=y(S)}function i(S,y){this.h=y;for(var T=[],E=!0,k=S.length-1;0<=k;k--){var I=S[k]|0;E&&I==y||(T[k]=I,E=!1)}this.g=T}var l={};function r(S){return-128<=S&&128>S?o(S,function(y){return new i([y|0],0>y?-1:0)}):new i([S|0],0>S?-1:0)}function p(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return v(p(-S));for(var y=[],T=1,E=0;S>=T;E++)y[E]=S/T|0,T*=4294967296;return new i(y,0)}function u(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return v(u(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=p(Math.pow(y,8)),E=d,k=0;k<S.length;k+=8){var I=Math.min(8,S.length-k),N=parseInt(S.substring(k,k+I),y);8>I?(I=p(Math.pow(y,I)),E=E.j(I).add(p(N))):(E=E.j(T),E=E.add(p(N)))}return E}var d=r(0),m=r(1),f=r(16777216);t=i.prototype,t.m=function(){if(_(this))return-v(this).m();for(var S=0,y=1,T=0;T<this.g.length;T++){var E=this.i(T);S+=(0<=E?E:4294967296+E)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(_(this))return"-"+v(this).toString(S);for(var y=p(Math.pow(S,6)),T=this,E="";;){var k=K(T,y).g;T=L(T,k.j(y));var I=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=k,P(T))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function _(S){return S.h==-1}t.l=function(S){return S=L(this,S),_(S)?-1:P(S)?0:1};function v(S){for(var y=S.g.length,T=[],E=0;E<y;E++)T[E]=~S.g[E];return new i(T,~S.h).add(m)}t.abs=function(){return _(this)?v(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],E=0,k=0;k<=y;k++){var I=E+(this.i(k)&65535)+(S.i(k)&65535),N=(I>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);E=N>>>16,I&=65535,N&=65535,T[k]=N<<16|I}return new i(T,T[T.length-1]&-2147483648?-1:0)};function L(S,y){return S.add(v(y))}t.j=function(S){if(P(this)||P(S))return d;if(_(this))return _(S)?v(this).j(v(S)):v(v(this).j(S));if(_(S))return v(this.j(v(S)));if(0>this.l(f)&&0>S.l(f))return p(this.m()*S.m());for(var y=this.g.length+S.g.length,T=[],E=0;E<2*y;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<S.g.length;k++){var I=this.i(E)>>>16,N=this.i(E)&65535,D=S.i(k)>>>16,le=S.i(k)&65535;T[2*E+2*k]+=N*le,x(T,2*E+2*k),T[2*E+2*k+1]+=I*le,x(T,2*E+2*k+1),T[2*E+2*k+1]+=N*D,x(T,2*E+2*k+1),T[2*E+2*k+2]+=I*D,x(T,2*E+2*k+2)}for(E=0;E<y;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=y;E<2*y;E++)T[E]=0;return new i(T,0)};function x(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function Y(S,y){this.g=S,this.h=y}function K(S,y){if(P(y))throw Error("division by zero");if(P(S))return new Y(d,d);if(_(S))return y=K(v(S),y),new Y(v(y.g),v(y.h));if(_(y))return y=K(S,v(y)),new Y(v(y.g),y.h);if(30<S.g.length){if(_(S)||_(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,E=y;0>=E.l(S);)T=A(T),E=A(E);var k=R(T,1),I=R(E,1);for(E=R(E,2),T=R(T,2);!P(E);){var N=I.add(E);0>=N.l(S)&&(k=k.add(T),I=N),E=R(E,1),T=R(T,1)}return y=L(S,k.j(y)),new Y(k,y)}for(k=d;0<=S.l(y);){for(T=Math.max(1,Math.floor(S.m()/y.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=p(T),N=I.j(y);_(N)||0<N.l(S);)T-=E,I=p(T),N=I.j(y);P(I)&&(I=m),k=k.add(I),S=L(S,N)}return new Y(k,S)}t.A=function(S){return K(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)&S.i(E);return new i(T,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)|S.i(E);return new i(T,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)^S.i(E);return new i(T,this.h^S.h)};function A(S){for(var y=S.g.length+1,T=[],E=0;E<y;E++)T[E]=S.i(E)<<1|S.i(E-1)>>>31;return new i(T,S.h)}function R(S,y){var T=y>>5;y%=32;for(var E=S.g.length-T,k=[],I=0;I<E;I++)k[I]=0<y?S.i(I+T)>>>y|S.i(I+T+1)<<32-y:S.i(I+T);return new i(k,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,iB=n,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=p,i.fromString=u,Qa=i}).apply(typeof b0!="undefined"?b0:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Qr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lB,Fi,rB,hc,uh,cB,pB,uB;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,g){return c==Array.prototype||c==Object.prototype||(c[h]=g.value),c};function s(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var h=0;h<c.length;++h){var g=c[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var n=s(this);function a(c,h){if(h)e:{var g=n;c=c.split(".");for(var B=0;B<c.length-1;B++){var M=c[B];if(!(M in g))break e;g=g[M]}c=c[c.length-1],B=g[c],h=h(B),h!=B&&h!=null&&e(g,c,{configurable:!0,writable:!0,value:h})}}function o(c,h){c instanceof String&&(c+="");var g=0,B=!1,M={next:function(){if(!B&&g<c.length){var b=g++;return{value:h(b,c[b]),done:!1}}return B=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}a("Array.prototype.values",function(c){return c||function(){return o(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},l=this||self;function r(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function p(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function u(c,h,g){return c.call.apply(c.bind,arguments)}function d(c,h,g){if(!c)throw Error();if(2<arguments.length){var B=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,B),c.apply(h,M)}}return function(){return c.apply(h,arguments)}}function m(c,h,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,m.apply(null,arguments)}function f(c,h){var g=Array.prototype.slice.call(arguments,1);return function(){var B=g.slice();return B.push.apply(B,arguments),c.apply(this,B)}}function P(c,h){function g(){}g.prototype=h.prototype,c.aa=h.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(B,M,b){for(var ee=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)ee[Fe-2]=arguments[Fe];return h.prototype[M].apply(B,ee)}}function _(c){const h=c.length;if(0<h){const g=Array(h);for(let B=0;B<h;B++)g[B]=c[B];return g}return[]}function v(c,h){for(let g=1;g<arguments.length;g++){const B=arguments[g];if(r(B)){const M=c.length||0,b=B.length||0;c.length=M+b;for(let ee=0;ee<b;ee++)c[M+ee]=B[ee]}else c.push(B)}}class L{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(c){return/^[\s\xa0]*$/.test(c)}function Y(){var c=l.navigator;return c&&(c=c.userAgent)?c:""}function K(c){return K[" "](c),c}K[" "]=function(){};var A=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function R(c,h,g){for(const B in c)h.call(g,c[B],B,c)}function S(c,h){for(const g in c)h.call(void 0,c[g],g,c)}function y(c){const h={};for(const g in c)h[g]=c[g];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,h){let g,B;for(let M=1;M<arguments.length;M++){B=arguments[M];for(g in B)c[g]=B[g];for(let b=0;b<T.length;b++)g=T[b],Object.prototype.hasOwnProperty.call(B,g)&&(c[g]=B[g])}}function k(c){var h=1;c=c.split(":");const g=[];for(;0<h&&c.length;)g.push(c.shift()),h--;return c.length&&g.push(c.join(":")),g}function I(c){l.setTimeout(()=>{throw c},0)}function N(){var c=he;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class D{constructor(){this.h=this.g=null}add(h,g){const B=le.get();B.set(h,g),this.h?this.h.next=B:this.g=B,this.h=B}}var le=new L(()=>new oe,c=>c.reset());class oe{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let W,z=!1,he=new D,Ve=()=>{const c=l.Promise.resolve(void 0);W=()=>{c.then(He)}};var He=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(g){I(g)}var h=le;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}z=!1};function U(){this.s=this.s,this.C=this.C}U.prototype.s=!1,U.prototype.ma=function(){this.s||(this.s=!0,this.N())},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var pt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};l.addEventListener("test",g,h),l.removeEventListener("test",g,h)}catch{}return c}();function ot(c,h){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,B=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(A){e:{try{K(h.nodeName);var M=!0;break e}catch{}M=!1}M||(h=null)}}else g=="mouseover"?h=c.fromElement:g=="mouseout"&&(h=c.toElement);this.relatedTarget=h,B?(this.clientX=B.clientX!==void 0?B.clientX:B.pageX,this.clientY=B.clientY!==void 0?B.clientY:B.pageY,this.screenX=B.screenX||0,this.screenY=B.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:pe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ot.aa.h.call(this)}}P(ot,ye);var pe={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var w="closure_listenable_"+(1e6*Math.random()|0),ne=0;function te(c,h,g,B,M){this.listener=c,this.proxy=null,this.src=h,this.type=g,this.capture=!!B,this.ha=M,this.key=++ne,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Le(c){this.src=c,this.g={},this.h=0}Le.prototype.add=function(c,h,g,B,M){var b=c.toString();c=this.g[b],c||(c=this.g[b]=[],this.h++);var ee=V(c,h,B,M);return-1<ee?(h=c[ee],g||(h.fa=!1)):(h=new te(h,this.src,b,!!B,M),h.fa=g,c.push(h)),h};function Ue(c,h){var g=h.type;if(g in c.g){var B=c.g[g],M=Array.prototype.indexOf.call(B,h,void 0),b;(b=0<=M)&&Array.prototype.splice.call(B,M,1),b&&(ce(h),c.g[g].length==0&&(delete c.g[g],c.h--))}}function V(c,h,g,B){for(var M=0;M<c.length;++M){var b=c[M];if(!b.da&&b.listener==h&&b.capture==!!g&&b.ha==B)return M}return-1}var H="closure_lm_"+(1e6*Math.random()|0),C={};function q(c,h,g,B,M){if(B&&B.once)return se(c,h,g,B,M);if(Array.isArray(h)){for(var b=0;b<h.length;b++)q(c,h[b],g,B,M);return null}return g=Pe(g),c&&c[w]?c.K(h,g,p(B)?!!B.capture:!!B,M):j(c,h,g,!1,B,M)}function j(c,h,g,B,M,b){if(!h)throw Error("Invalid event type");var ee=p(M)?!!M.capture:!!M,Fe=ie(c);if(Fe||(c[H]=Fe=new Le(c)),g=Fe.add(h,g,B,ee,b),g.proxy)return g;if(B=J(),g.proxy=B,B.src=c,B.listener=g,c.addEventListener)pt||(M=ee),M===void 0&&(M=!1),c.addEventListener(h.toString(),B,M);else if(c.attachEvent)c.attachEvent($(h.toString()),B);else if(c.addListener&&c.removeListener)c.addListener(B);else throw Error("addEventListener and attachEvent are unavailable.");return g}function J(){function c(g){return h.call(c.src,c.listener,g)}const h=fe;return c}function se(c,h,g,B,M){if(Array.isArray(h)){for(var b=0;b<h.length;b++)se(c,h[b],g,B,M);return null}return g=Pe(g),c&&c[w]?c.L(h,g,p(B)?!!B.capture:!!B,M):j(c,h,g,!0,B,M)}function X(c,h,g,B,M){if(Array.isArray(h))for(var b=0;b<h.length;b++)X(c,h[b],g,B,M);else B=p(B)?!!B.capture:!!B,g=Pe(g),c&&c[w]?(c=c.i,h=String(h).toString(),h in c.g&&(b=c.g[h],g=V(b,g,B,M),-1<g&&(ce(b[g]),Array.prototype.splice.call(b,g,1),b.length==0&&(delete c.g[h],c.h--)))):c&&(c=ie(c))&&(h=c.g[h.toString()],c=-1,h&&(c=V(h,g,B,M)),(g=-1<c?h[c]:null)&&Z(g))}function Z(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[w])Ue(h.i,c);else{var g=c.type,B=c.proxy;h.removeEventListener?h.removeEventListener(g,B,c.capture):h.detachEvent?h.detachEvent($(g),B):h.addListener&&h.removeListener&&h.removeListener(B),(g=ie(h))?(Ue(g,c),g.h==0&&(g.src=null,h[H]=null)):ce(c)}}}function $(c){return c in C?C[c]:C[c]="on"+c}function fe(c,h){if(c.da)c=!0;else{h=new ot(h,this);var g=c.listener,B=c.ha||c.src;c.fa&&Z(c),c=g.call(B,h)}return c}function ie(c){return c=c[H],c instanceof Le?c:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pe(c){return typeof c=="function"?c:(c[de]||(c[de]=function(h){return c.handleEvent(h)}),c[de])}function Te(){U.call(this),this.i=new Le(this),this.M=this,this.F=null}P(Te,U),Te.prototype[w]=!0,Te.prototype.removeEventListener=function(c,h,g,B){X(this,c,h,g,B)};function ve(c,h){var g,B=c.F;if(B)for(g=[];B;B=B.F)g.push(B);if(c=c.M,B=h.type||h,typeof h=="string")h=new ye(h,c);else if(h instanceof ye)h.target=h.target||c;else{var M=h;h=new ye(B,c),E(h,M)}if(M=!0,g)for(var b=g.length-1;0<=b;b--){var ee=h.g=g[b];M=Ce(ee,B,!0,h)&&M}if(ee=h.g=c,M=Ce(ee,B,!0,h)&&M,M=Ce(ee,B,!1,h)&&M,g)for(b=0;b<g.length;b++)ee=h.g=g[b],M=Ce(ee,B,!1,h)&&M}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var g=c.g[h],B=0;B<g.length;B++)ce(g[B]);delete c.g[h],c.h--}}this.F=null},Te.prototype.K=function(c,h,g,B){return this.i.add(String(c),h,!1,g,B)},Te.prototype.L=function(c,h,g,B){return this.i.add(String(c),h,!0,g,B)};function Ce(c,h,g,B){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var M=!0,b=0;b<h.length;++b){var ee=h[b];if(ee&&!ee.da&&ee.capture==g){var Fe=ee.listener,vt=ee.ha||ee.src;ee.fa&&Ue(c.i,ee),M=Fe.call(vt,B)!==!1&&M}}return M&&!B.defaultPrevented}function At(c,h,g){if(typeof c=="function")g&&(c=m(c,g));else if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(c,h||0)}function Pt(c){c.g=At(()=>{c.g=null,c.i&&(c.i=!1,Pt(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class ps extends U{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(c){U.call(this),this.h=c,this.g={}}P(It,U);var Ln=[];function Ti(c){R(c.g,function(h,g){this.g.hasOwnProperty(g)&&Z(h)},c),c.g={}}It.prototype.N=function(){It.aa.N.call(this),Ti(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vt=l.JSON.stringify,gs=l.JSON.parse,Pr=class{stringify(c){return l.JSON.stringify(c,void 0)}parse(c){return l.JSON.parse(c,void 0)}};function Pu(){}Pu.prototype.h=null;function pf(c){return c.h||(c.h=c.i())}function uf(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Iu(){ye.call(this,"d")}P(Iu,ye);function yu(){ye.call(this,"c")}P(yu,ye);var Ba={},df=null;function Ir(){return df=df||new Te}Ba.La="serverreachability";function hf(c){ye.call(this,Ba.La,c)}P(hf,ye);function Ii(c){const h=Ir();ve(h,new hf(h))}Ba.STAT_EVENT="statevent";function mf(c,h){ye.call(this,Ba.STAT_EVENT,c),this.stat=h}P(mf,ye);function Wt(c){const h=Ir();ve(h,new mf(h,c))}Ba.Ma="timingevent";function gf(c,h){ye.call(this,Ba.Ma,c),this.size=h}P(gf,ye);function yi(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){c()},h)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function DS(c,h,g,B,M,b){c.info(function(){if(c.g)if(b)for(var ee="",Fe=b.split("&"),vt=0;vt<Fe.length;vt++){var be=Fe[vt].split("=");if(1<be.length){var wt=be[0];be=be[1];var Dt=wt.split("_");ee=2<=Dt.length&&Dt[1]=="type"?ee+(wt+"="+be+"&"):ee+(wt+"=redacted&")}}else ee=null;else ee=b;return"XMLHTTP REQ ("+B+") [attempt "+M+"]: "+h+`
`+g+`
`+ee})}function bS(c,h,g,B,M,b,ee){c.info(function(){return"XMLHTTP RESP ("+B+") [ attempt "+M+"]: "+h+`
`+g+`
`+b+" "+ee})}function go(c,h,g,B){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+QS(c,g)+(B?" "+B:"")})}function RS(c,h){c.info(function(){return"TIMEOUT: "+h})}Ei.prototype.info=function(){};function QS(c,h){if(!c.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var B=g[c];if(!(2>B.length)){var M=B[1];if(Array.isArray(M)&&!(1>M.length)){var b=M[0];if(b!="noop"&&b!="stop"&&b!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Vt(g)}catch{return h}}var yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ff={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eu;function Er(){}P(Er,Pu),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},Eu=new Er;function Mn(c,h,g,B){this.j=c,this.i=h,this.l=g,this.R=B||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tf}function Tf(){this.i=null,this.g="",this.h=!1}var Pf={},Bu={};function Nu(c,h,g){c.L=1,c.v=Sr(rn(h)),c.m=g,c.P=!0,If(c,null)}function If(c,h){c.F=Date.now(),Br(c),c.A=rn(c.v);var g=c.A,B=c.R;Array.isArray(B)||(B=[String(B)]),Lf(g.i,"t",B),c.C=0,g=c.j.J,c.h=new Tf,c.g=Wf(c.j,g?h:null,!c.m),0<c.O&&(c.M=new ps(m(c.Y,c,c.g),c.O)),h=c.U,g=c.g,B=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ln[0]=M.toString()),M=Ln);for(var b=0;b<M.length;b++){var ee=q(g,M[b],B||h.handleEvent,!1,h.h||h);if(!ee)break;h.g[ee.key]=ee}h=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),Ii(),DS(c.i,c.u,c.A,c.l,c.R,c.m)}Mn.prototype.ca=function(c){c=c.target;const h=this.M;h&&cn(c)==3?h.j():this.Y(c)},Mn.prototype.Y=function(c){try{if(c==this.g)e:{const Dt=cn(this.g);var h=this.g.Ba();const Po=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Rf(this.g)))){this.J||Dt!=4||h==7||(h==8||0>=Po?Ii(3):Ii(2)),ku(this);var g=this.g.Z();this.X=g;t:if(yf(this)){var B=Rf(this.g);c="";var M=B.length,b=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Na(this),Bi(this);var ee="";break t}this.h.i=new l.TextDecoder}for(h=0;h<M;h++)this.h.h=!0,c+=this.h.i.decode(B[h],{stream:!(b&&h==M-1)});B.length=0,this.h.g+=c,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=g==200,bS(this.i,this.u,this.A,this.l,this.R,Dt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,vt=this.g;if((Fe=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Fe)){var be=Fe;break t}}be=null}if(g=be)go(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Su(this,g);else{this.o=!1,this.s=3,Wt(12),Na(this),Bi(this);break e}}if(this.P){g=!0;let Vs;for(;!this.J&&this.C<ee.length;)if(Vs=OS(this,ee),Vs==Bu){Dt==4&&(this.s=4,Wt(14),g=!1),go(this.i,this.l,null,"[Incomplete Response]");break}else if(Vs==Pf){this.s=4,Wt(15),go(this.i,this.l,ee,"[Invalid Chunk]"),g=!1;break}else go(this.i,this.l,Vs,null),Su(this,Vs);if(yf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||ee.length!=0||this.h.h||(this.s=1,Wt(16),g=!1),this.o=this.o&&g,!g)go(this.i,this.l,ee,"[Invalid Chunked Response]"),Na(this),Bi(this);else if(0<ee.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Ku(wt),wt.M=!0,Wt(11))}}else go(this.i,this.l,ee,null),Su(this,ee);Dt==4&&Na(this),this.o&&!this.J&&(Dt==4?qf(this.j,this):(this.o=!1,Br(this)))}else o2(this.g),g==400&&0<ee.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),Na(this),Bi(this)}}}catch{}finally{}};function yf(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function OS(c,h){var g=c.C,B=h.indexOf(`
`,g);return B==-1?Bu:(g=Number(h.substring(g,B)),isNaN(g)?Pf:(B+=1,B+g>h.length?Bu:(h=h.slice(B,B+g),c.C=B+g,h)))}Mn.prototype.cancel=function(){this.J=!0,Na(this)};function Br(c){c.S=Date.now()+c.I,Ef(c,c.I)}function Ef(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=yi(m(c.ba,c),h)}function ku(c){c.B&&(l.clearTimeout(c.B),c.B=null)}Mn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(RS(this.i,this.A),this.L!=2&&(Ii(),Wt(17)),Na(this),this.s=2,Bi(this)):Ef(this,this.S-c)};function Bi(c){c.j.G==0||c.J||qf(c.j,c)}function Na(c){ku(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Ti(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Su(c,h){try{var g=c.j;if(g.G!=0&&(g.g==c||_u(g.h,c))){if(!c.K&&_u(g.h,c)&&g.G==3){try{var B=g.Da.g.parse(h)}catch{B=null}if(Array.isArray(B)&&B.length==3){var M=B;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)Kr(g),xr(g);else break e;Hu(g),Wt(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=yi(m(g.Za,g),6e3));if(1>=kf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Sa(g,11)}else if((c.K||g.g==c)&&Kr(g),!x(h))for(M=g.Da.g.parse(h),h=0;h<M.length;h++){let be=M[h];if(g.T=be[0],be=be[1],g.G==2)if(be[0]=="c"){g.K=be[1],g.ia=be[2];const wt=be[3];wt!=null&&(g.la=wt,g.j.info("VER="+g.la));const Dt=be[4];Dt!=null&&(g.Aa=Dt,g.j.info("SVER="+g.Aa));const Po=be[5];Po!=null&&typeof Po=="number"&&0<Po&&(B=1.5*Po,g.L=B,g.j.info("backChannelRequestTimeoutMs_="+B)),B=g;const Vs=c.g;if(Vs){const Lr=Vs.g?Vs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var b=B.h;b.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Vu(b,b.h),b.h=null))}if(B.D){const Yu=Vs.g?Vs.g.getResponseHeader("X-HTTP-Session-Id"):null;Yu&&(B.ya=Yu,Xe(B.I,B.D,Yu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),B=g;var ee=c;if(B.qa=$f(B,B.J?B.ia:null,B.W),ee.K){Sf(B.h,ee);var Fe=ee,vt=B.L;vt&&(Fe.I=vt),Fe.B&&(ku(Fe),Br(Fe)),B.g=ee}else Uf(B);0<g.i.length&&Hr(g)}else be[0]!="stop"&&be[0]!="close"||Sa(g,7);else g.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Sa(g,7):xu(g):be[0]!="noop"&&g.l&&g.l.ta(be),g.v=0)}}Ii(4)}catch{}}var jS=class{constructor(c,h){this.g=c,this.map=h}};function Bf(c){this.l=c||10,l.PerformanceNavigationTiming?(c=l.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function kf(c){return c.h?1:c.g?c.g.size:0}function _u(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Vu(c,h){c.g?c.g.add(h):c.h=h}function Sf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Bf.prototype.cancel=function(){if(this.i=_f(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _f(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const g of c.g.values())h=h.concat(g.D);return h}return _(c.i)}function GS(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map!="undefined"&&c instanceof Map||typeof Set!="undefined"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(r(c)){for(var h=[],g=c.length,B=0;B<g;B++)h.push(c[B]);return h}h=[],g=0;for(B in c)h[g++]=c[B];return h}function US(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map!="undefined"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set!="undefined"&&c instanceof Set)){if(r(c)||typeof c=="string"){var h=[];c=c.length;for(var g=0;g<c;g++)h.push(g);return h}h=[],g=0;for(const B in c)h[g++]=B;return h}}}function Vf(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(r(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var g=US(c),B=GS(c),M=B.length,b=0;b<M;b++)h.call(void 0,B[b],g&&g[b],c)}var vf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zS(c,h){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var B=c[g].indexOf("="),M=null;if(0<=B){var b=c[g].substring(0,B);M=c[g].substring(B+1)}else b=c[g];h(b,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ka(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ka){this.h=c.h,Nr(this,c.j),this.o=c.o,this.g=c.g,kr(this,c.s),this.l=c.l;var h=c.i,g=new Si;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),xf(this,g),this.m=c.m}else c&&(h=String(c).match(vf))?(this.h=!1,Nr(this,h[1]||"",!0),this.o=Ni(h[2]||""),this.g=Ni(h[3]||"",!0),kr(this,h[4]),this.l=Ni(h[5]||"",!0),xf(this,h[6]||"",!0),this.m=Ni(h[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}ka.prototype.toString=function(){var c=[],h=this.j;h&&c.push(ki(h,Hf,!0),":");var g=this.g;return(g||h=="file")&&(c.push("//"),(h=this.o)&&c.push(ki(h,Hf,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ki(g,g.charAt(0)=="/"?JS:FS,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ki(g,WS)),c.join("")};function rn(c){return new ka(c)}function Nr(c,h,g){c.j=g?Ni(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function kr(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function xf(c,h,g){h instanceof Si?(c.i=h,ZS(c.i,c.h)):(g||(h=ki(h,$S)),c.i=new Si(h,c.h))}function Xe(c,h,g){c.i.set(h,g)}function Sr(c){return Xe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ni(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,h,g){return typeof c=="string"?(c=encodeURI(c).replace(h,qS),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function qS(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Hf=/[#\/\?@]/g,FS=/[#\?:]/g,JS=/[#\?]/g,$S=/[#\?@]/g,WS=/#/g;function Si(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Cn(c){c.g||(c.g=new Map,c.h=0,c.i&&zS(c.i,function(h,g){c.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=Si.prototype,t.add=function(c,h){Cn(this),this.i=null,c=fo(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(h),this.h+=1,this};function Kf(c,h){Cn(c),h=fo(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Yf(c,h){return Cn(c),h=fo(c,h),c.g.has(h)}t.forEach=function(c,h){Cn(this),this.g.forEach(function(g,B){g.forEach(function(M){c.call(h,M,B,this)},this)},this)},t.na=function(){Cn(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let B=0;B<h.length;B++){const M=c[B];for(let b=0;b<M.length;b++)g.push(h[B])}return g},t.V=function(c){Cn(this);let h=[];if(typeof c=="string")Yf(this,c)&&(h=h.concat(this.g.get(fo(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)h=h.concat(c[g])}return h},t.set=function(c,h){return Cn(this),this.i=null,c=fo(this,c),Yf(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function Lf(c,h,g){Kf(c,h),0<g.length&&(c.i=null,c.g.set(fo(c,h),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var B=h[g];const b=encodeURIComponent(String(B)),ee=this.V(B);for(B=0;B<ee.length;B++){var M=b;ee[B]!==""&&(M+="="+encodeURIComponent(String(ee[B]))),c.push(M)}}return this.i=c.join("&")};function fo(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function ZS(c,h){h&&!c.j&&(Cn(c),c.i=null,c.g.forEach(function(g,B){var M=B.toLowerCase();B!=M&&(Kf(this,B),Lf(this,M,g))},c)),c.j=h}function XS(c,h){const g=new Ei;if(l.Image){const B=new Image;B.onload=f(An,g,"TestLoadImage: loaded",!0,h,B),B.onerror=f(An,g,"TestLoadImage: error",!1,h,B),B.onabort=f(An,g,"TestLoadImage: abort",!1,h,B),B.ontimeout=f(An,g,"TestLoadImage: timeout",!1,h,B),l.setTimeout(function(){B.ontimeout&&B.ontimeout()},1e4),B.src=c}else h(!1)}function e2(c,h){const g=new Ei,B=new AbortController,M=setTimeout(()=>{B.abort(),An(g,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:B.signal}).then(b=>{clearTimeout(M),b.ok?An(g,"TestPingServer: ok",!0,h):An(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(M),An(g,"TestPingServer: error",!1,h)})}function An(c,h,g,B,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),B(g)}catch{}}function t2(){this.g=new Pr}function s2(c,h,g){const B=g||"";try{Vf(c,function(M,b){let ee=M;p(M)&&(ee=Vt(M)),h.push(B+b+"="+encodeURIComponent(ee))})}catch(M){throw h.push(B+"type="+encodeURIComponent("_badmap")),M}}function _r(c){this.l=c.Ub||null,this.j=c.eb||!1}P(_r,Pu),_r.prototype.g=function(){return new Vr(this.l,this.j)},_r.prototype.i=function(c){return function(){return c}}({});function Vr(c,h){Te.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Vr,Te),t=Vr.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,Vi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream!="undefined"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mf(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mf(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?_i(this):Vi(this),this.readyState==3&&Mf(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,_i(this))},t.Qa=function(c){this.g&&(this.response=c,_i(this))},t.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Vi(c)}t.setRequestHeader=function(c,h){this.u.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=h.next();return c.join(`\r
`)};function Vi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Cf(c){let h="";return R(c,function(g,B){h+=B,h+=":",h+=g,h+=`\r
`}),h}function vu(c,h,g){e:{for(B in g){var B=!1;break e}B=!0}B||(g=Cf(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):Xe(c,h,g))}function ut(c){Te.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ut,Te);var n2=/^https?$/i,a2=["POST","PUT"];t=ut.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,h,g,B){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eu.g(),this.v=this.o?pf(this.o):pf(Eu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(b){Af(this,b);return}if(c=g||"",g=new Map(this.headers),B)if(Object.getPrototypeOf(B)===Object.prototype)for(var M in B)g.set(M,B[M]);else if(typeof B.keys=="function"&&typeof B.get=="function")for(const b of B.keys())g.set(b,B.get(b));else throw Error("Unknown input type for opt_headers: "+String(B));B=Array.from(g.keys()).find(b=>b.toLowerCase()=="content-type"),M=l.FormData&&c instanceof l.FormData,!(0<=Array.prototype.indexOf.call(a2,h,void 0))||B||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,ee]of g)this.g.setRequestHeader(b,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bf(this),this.u=!0,this.g.send(c),this.u=!1}catch(b){Af(this,b)}};function Af(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,wf(c),vr(c)}function wf(c){c.A||(c.A=!0,ve(c,"complete"),ve(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ve(this,"complete"),ve(this,"abort"),vr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Df(this):this.bb())},t.bb=function(){Df(this)};function Df(c){if(c.h&&typeof i!="undefined"&&(!c.v[1]||cn(c)!=4||c.Z()!=2)){if(c.u&&cn(c)==4)At(c.Ea,0,c);else if(ve(c,"readystatechange"),cn(c)==4){c.h=!1;try{const ee=c.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var B;if(B=ee===0){var M=String(c.D).match(vf)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),B=!n2.test(M?M.toLowerCase():"")}g=B}if(g)ve(c,"complete"),ve(c,"success");else{c.m=6;try{var b=2<cn(c)?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.Z()+"]",wf(c)}}finally{vr(c)}}}}function vr(c,h){if(c.g){bf(c);const g=c.g,B=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||ve(c,"ready");try{g.onreadystatechange=B}catch{}}}function bf(c){c.I&&(l.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function cn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),gs(h)}};function Rf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function o2(c){const h={};c=(c.g&&2<=cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let B=0;B<c.length;B++){if(x(c[B]))continue;var g=k(c[B]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const b=h[M]||[];h[M]=b,b.push(g)}S(h,function(B){return B.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(c,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||h}function Qf(c){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,c),this.cb=vi("retryDelaySeedMs",1e4,c),this.Wa=vi("forwardChannelMaxRetries",2,c),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Bf(c&&c.concurrentRequestLimit),this.Da=new t2,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(c,h,g,B){Wt(0),this.W=c,this.H=h||{},g&&B!==void 0&&(this.H.OSID=g,this.H.OAID=B),this.F=this.X,this.I=$f(this,null,this.W),Hr(this)};function xu(c){if(Of(c),c.G==3){var h=c.U++,g=rn(c.I);if(Xe(g,"SID",c.K),Xe(g,"RID",h),Xe(g,"TYPE","terminate"),xi(c,g),h=new Mn(c,c.j,h),h.L=2,h.v=Sr(rn(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=h.v,g=!0),g||(h.g=Wf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Br(h)}Jf(c)}function xr(c){c.g&&(Ku(c),c.g.cancel(),c.g=null)}function Of(c){xr(c),c.u&&(l.clearTimeout(c.u),c.u=null),Kr(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&l.clearTimeout(c.s),c.s=null)}function Hr(c){if(!Nf(c.h)&&!c.s){c.s=!0;var h=c.Ga;W||Ve(),z||(W(),z=!0),he.add(h,c),c.B=0}}function i2(c,h){return kf(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=yi(m(c.Ga,c,h),Ff(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new Mn(this,this.j,c);let b=this.o;if(this.S&&(b?(b=y(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(M.H=b,b=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var B=this.i[g];if("__data__"in B.map&&(B=B.map.__data__,typeof B=="string")){B=B.length;break t}B=void 0}if(B===void 0)break;if(h+=B,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=Gf(this,M,h),g=rn(this.I),Xe(g,"RID",c),Xe(g,"CVER",22),this.D&&Xe(g,"X-HTTP-Session-Id",this.D),xi(this,g),b&&(this.O?h="headers="+encodeURIComponent(String(Cf(b)))+"&"+h:this.m&&vu(g,this.m,b)),Vu(this.h,M),this.Ua&&Xe(g,"TYPE","init"),this.P?(Xe(g,"$req",h),Xe(g,"SID","null"),M.T=!0,Nu(M,g,null)):Nu(M,g,h),this.G=2}}else this.G==3&&(c?jf(this,c):this.i.length==0||Nf(this.h)||jf(this))};function jf(c,h){var g;h?g=h.l:g=c.U++;const B=rn(c.I);Xe(B,"SID",c.K),Xe(B,"RID",g),Xe(B,"AID",c.T),xi(c,B),c.m&&c.o&&vu(B,c.m,c.o),g=new Mn(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),h&&(c.i=h.D.concat(c.i)),h=Gf(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Vu(c.h,g),Nu(g,B,h)}function xi(c,h){c.H&&R(c.H,function(g,B){Xe(h,B,g)}),c.l&&Vf({},function(g,B){Xe(h,B,g)})}function Gf(c,h,g){g=Math.min(c.i.length,g);var B=c.l?m(c.l.Na,c.l,c):null;e:{var M=c.i;let b=-1;for(;;){const ee=["count="+g];b==-1?0<g?(b=M[0].g,ee.push("ofs="+b)):b=0:ee.push("ofs="+b);let Fe=!0;for(let vt=0;vt<g;vt++){let be=M[vt].g;const wt=M[vt].map;if(be-=b,0>be)b=Math.max(0,M[vt].g-100),Fe=!1;else try{s2(wt,ee,"req"+be+"_")}catch{B&&B(wt)}}if(Fe){B=ee.join("&");break e}}}return c=c.i.splice(0,g),h.D=c,B}function Uf(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;W||Ve(),z||(W(),z=!0),he.add(h,c),c.v=0}}function Hu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=yi(m(c.Fa,c),Ff(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,zf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=yi(m(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Wt(10),xr(this),zf(this))};function Ku(c){c.A!=null&&(l.clearTimeout(c.A),c.A=null)}function zf(c){c.g=new Mn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=rn(c.qa);Xe(h,"RID","rpc"),Xe(h,"SID",c.K),Xe(h,"AID",c.T),Xe(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xe(h,"TO",c.ja),Xe(h,"TYPE","xmlhttp"),xi(c,h),c.m&&c.o&&vu(h,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Sr(rn(h)),g.m=null,g.P=!0,If(g,c)}t.Za=function(){this.C!=null&&(this.C=null,xr(this),Hu(this),Wt(19))};function Kr(c){c.C!=null&&(l.clearTimeout(c.C),c.C=null)}function qf(c,h){var g=null;if(c.g==h){Kr(c),Ku(c),c.g=null;var B=2}else if(_u(c.h,h))g=h.D,Sf(c.h,h),B=1;else return;if(c.G!=0){if(h.o)if(B==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var M=c.B;B=Ir(),ve(B,new gf(B,g)),Hr(c)}else Uf(c);else if(M=h.s,M==3||M==0&&0<h.X||!(B==1&&i2(c,h)||B==2&&Hu(c)))switch(g&&0<g.length&&(h=c.h,h.i=h.i.concat(g)),M){case 1:Sa(c,5);break;case 4:Sa(c,10);break;case 3:Sa(c,6);break;default:Sa(c,2)}}}function Ff(c,h){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*h}function Sa(c,h){if(c.j.info("Error code "+h),h==2){var g=m(c.fb,c),B=c.Xa;const M=!B;B=new ka(B||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Nr(B,"https"),Sr(B),M?XS(B.toString(),g):e2(B.toString(),g)}else Wt(2);c.G=0,c.l&&c.l.sa(h),Jf(c),Of(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function Jf(c){if(c.G=0,c.ka=[],c.l){const h=_f(c.h);(h.length!=0||c.i.length!=0)&&(v(c.ka,h),v(c.ka,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.ra()}}function $f(c,h,g){var B=g instanceof ka?rn(g):new ka(g);if(B.g!="")h&&(B.g=h+"."+B.g),kr(B,B.s);else{var M=l.location;B=M.protocol,h=h?h+"."+M.hostname:M.hostname,M=+M.port;var b=new ka(null);B&&Nr(b,B),h&&(b.g=h),M&&kr(b,M),g&&(b.l=g),B=b}return g=c.D,h=c.ya,g&&h&&Xe(B,g,h),Xe(B,"VER",c.la),xi(c,B),B}function Wf(c,h,g){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new ut(new _r({eb:g})):new ut(c.pa),h.Ha(c.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zf(){}t=Zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yr(){}Yr.prototype.g=function(c,h){return new us(c,h)};function us(c,h){Te.call(this),this.g=new Qf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!x(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new To(this)}P(us,Te),us.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},us.prototype.close=function(){xu(this.g)},us.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=Vt(c),c=g);h.i.push(new jS(h.Ya++,c)),h.G==3&&Hr(h)},us.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,us.aa.N.call(this)};function Xf(c){Iu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const g in h){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}P(Xf,Iu);function eT(){yu.call(this),this.status=1}P(eT,yu);function To(c){this.g=c}P(To,Zf),To.prototype.ua=function(){ve(this.g,"a")},To.prototype.ta=function(c){ve(this.g,new Xf(c))},To.prototype.sa=function(c){ve(this.g,new eT)},To.prototype.ra=function(){ve(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,us.prototype.send=us.prototype.o,us.prototype.open=us.prototype.m,us.prototype.close=us.prototype.close,uB=function(){return new Yr},pB=function(){return Ir()},cB=Ba,uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,hc=yr,ff.COMPLETE="complete",rB=ff,uf.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Fi=uf,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,lB=ut}).apply(typeof Qr!="undefined"?Qr:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const R0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Jl("@firebase/firestore");function Mi(){return Fa.logLevel}function ue(t,...e){if(Fa.logLevel<=Ke.DEBUG){const s=e.map(zm);Fa.debug(`Firestore (${pi}): ${t}`,...s)}}function Vn(t,...e){if(Fa.logLevel<=Ke.ERROR){const s=e.map(zm);Fa.error(`Firestore (${pi}): ${t}`,...s)}}function Jo(t,...e){if(Fa.logLevel<=Ke.WARN){const s=e.map(zm);Fa.warn(`Firestore (${pi}): ${t}`,...s)}}function zm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t="Unexpected state"){const e=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Ge(t,e){t||Ne()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends an{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cY{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(Qt.UNAUTHENTICATED))}shutdown(){}}class pY{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class uY{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Ge(this.o===void 0);let n=this.i;const a=r=>this.i!==n?(n=this.i,s(r)):Promise.resolve();let o=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bn,e.enqueueRetryable(()=>a(this.currentUser))};const i=()=>{const r=o;e.enqueueRetryable(async()=>{await r.promise,await a(this.currentUser)})},l=r=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=r,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(r=>l(r)),setTimeout(()=>{if(!this.auth){const r=this.t.getImmediate({optional:!0});r?l(r):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bn)}},0),i()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(n=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ge(typeof n.accessToken=="string"),new dB(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Qt(e)}}class dY{constructor(e,s,n){this.l=e,this.h=s,this.P=n,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hY{constructor(e,s,n){this.l=e,this.h=s,this.P=n}getToken(){return Promise.resolve(new dY(this.l,this.h,this.P))}start(e,s){e.enqueueRetryable(()=>s(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mY{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gY{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,s){Ge(this.o===void 0);const n=o=>{o.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const i=o.token!==this.R;return this.R=o.token,ue("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?s(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const a=o=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Ge(typeof s.token=="string"),this.R=s.token,new mY(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fY(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),s=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let n=0;n<t;n++)s[n]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const a=fY(40);for(let o=0;o<a.length;++o)n.length<20&&a[o]<s&&(n+=e.charAt(a[o]%e.length))}return n}}function Re(t,e){return t<e?-1:t>e?1:0}function $o(t,e,s){return t.length===e.length&&t.every((n,a)=>s(n,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,s){if(this.seconds=e,this.nanoseconds=s,s<0)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(s>=1e9)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(e<-62135596800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const s=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*s));return new lt(s,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new lt(0,0))}static max(){return new Se(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,s,n){s===void 0?s=0:s>e.length&&Ne(),n===void 0?n=e.length-s:n>e.length-s&&Ne(),this.segments=e,this.offset=s,this.len=n}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const s=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(n=>{s.push(n)}):s.push(e),this.construct(s)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}forEach(e){for(let s=this.offset,n=this.limit();s<n;s++)e(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,s){const n=Math.min(e.length,s.length);for(let a=0;a<n;a++){const o=e.get(a),i=s.get(a);if(o<i)return-1;if(o>i)return 1}return e.length<s.length?-1:e.length>s.length?1:0}}class We extends Cl{construct(e,s,n){return new We(e,s,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const s=[];for(const n of e){if(n.indexOf("//")>=0)throw new re(G.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);s.push(...n.split("/").filter(a=>a.length>0))}return new We(s)}static emptyPath(){return new We([])}}const TY=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends Cl{construct(e,s,n){return new Yt(e,s,n)}static isValidIdentifier(e){return TY.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Yt(["__name__"])}static fromServerFormat(e){const s=[];let n="",a=0;const o=()=>{if(n.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);s.push(n),n=""};let i=!1;for(;a<e.length;){const l=e[a];if(l==="\\"){if(a+1===e.length)throw new re(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const r=e[a+1];if(r!=="\\"&&r!=="."&&r!=="`")throw new re(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=r,a+=2}else l==="`"?(i=!i,a++):l!=="."||i?(n+=l,a++):(o(),a++)}if(o(),i)throw new re(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(s)}static emptyPath(){return new Yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(We.fromString(e))}static fromName(e){return new me(We.fromString(e).popFirst(5))}static empty(){return new me(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,s){return We.comparator(e.path,s.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new We(e.slice()))}}function PY(t,e){const s=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,a=Se.fromTimestamp(n===1e9?new lt(s+1,0):new lt(s,n));return new ra(a,me.empty(),e)}function IY(t){return new ra(t.readTime,t.key,-1)}class ra{constructor(e,s,n){this.readTime=e,this.documentKey=s,this.largestBatchId=n}static min(){return new ra(Se.min(),me.empty(),-1)}static max(){return new ra(Se.max(),me.empty(),-1)}}function yY(t,e){let s=t.readTime.compareTo(e.readTime);return s!==0?s:(s=me.comparator(t.documentKey,e.documentKey),s!==0?s:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EY="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BY{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==EY)throw t;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(s=>{this.isDone=!0,this.result=s,this.nextCallback&&this.nextCallback(s)},s=>{this.isDone=!0,this.error=s,this.catchCallback&&this.catchCallback(s)})}catch(e){return this.next(void 0,e)}next(e,s){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(s,this.error):this.wrapSuccess(e,this.result):new F((n,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,a)},this.catchCallback=o=>{this.wrapFailure(s,o).next(n,a)}})}toPromise(){return new Promise((e,s)=>{this.next(e,s)})}wrapUserFunction(e){try{const s=e();return s instanceof F?s:F.resolve(s)}catch(s){return F.reject(s)}}wrapSuccess(e,s){return e?this.wrapUserFunction(()=>e(s)):F.resolve(s)}wrapFailure(e,s){return e?this.wrapUserFunction(()=>e(s)):F.reject(s)}static resolve(e){return new F((s,n)=>{s(e)})}static reject(e){return new F((s,n)=>{n(e)})}static waitFor(e){return new F((s,n)=>{let a=0,o=0,i=!1;e.forEach(l=>{++a,l.next(()=>{++o,i&&o===a&&s()},r=>n(r))}),i=!0,o===a&&s()})}static or(e){let s=F.resolve(!1);for(const n of e)s=s.next(a=>a?F.resolve(a):n());return s}static forEach(e,s){const n=[];return e.forEach((a,o)=>{n.push(s.call(this,a,o))}),this.waitFor(n)}static mapArray(e,s){return new F((n,a)=>{const o=e.length,i=new Array(o);let l=0;for(let r=0;r<o;r++){const p=r;s(e[p]).next(u=>{i[p]=u,++l,l===o&&n(i)},u=>a(u))}})}static doWhile(e,s){return new F((n,a)=>{const o=()=>{e()===!0?s().next(()=>{o()},a):n()};o()})}}function NY(t){const e=t.match(/Android ([\d.]+)/i),s=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(s)}function tr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,s){this.previousValue=e,s&&(s.sequenceNumberHandler=n=>this.ie(n),this.se=n=>s.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qm.oe=-1;function jp(t){return t==null}function qc(t){return t===0&&1/t==-1/0}function kY(t){return typeof t=="number"&&Number.isInteger(t)&&!qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){let e=0;for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&e++;return e}function io(t,e){for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&e(s,t[s])}function mB(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,s){this.comparator=e,this.root=s||Ht.EMPTY}insert(e,s){return new ct(this.comparator,this.root.insert(e,s,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let s=this.root;for(;!s.isEmpty();){const n=this.comparator(e,s.key);if(n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}indexOf(e){let s=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return s+n.left.size;a<0?n=n.left:(s+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((s,n)=>(e(s,n),!1))}toString(){const e=[];return this.inorderTraversal((s,n)=>(e.push(`${s}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,s,n,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=s?n(e.key,s):1,s&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const s={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return s}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,s,n,a,o){this.key=e,this.value=s,this.color=n!=null?n:Ht.RED,this.left=a!=null?a:Ht.EMPTY,this.right=o!=null?o:Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,s,n,a,o){return new Ht(e!=null?e:this.key,s!=null?s:this.value,n!=null?n:this.color,a!=null?a:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,s,n){let a=this;const o=n(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,s,n),null):o===0?a.copy(null,s,null,null,null):a.copy(null,null,null,null,a.right.insert(e,s,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,s){let n,a=this;if(s(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,s),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),s(e,a.key)===0){if(a.right.isEmpty())return Ht.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,s))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),s=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,s)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(e,s,n,a,o){return this}insert(e,s,n){return new Ht(e,s)}remove(e,s){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((s,n)=>(e(s),!1))}forEachInRange(e,s){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;s(a.key)}}forEachWhile(e,s){let n;for(n=s!==void 0?this.data.getIteratorFrom(s):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const s=this.data.getIteratorFrom(e);return s.hasNext()?s.getNext().key:null}getIterator(){return new O0(this.data.getIterator())}getIteratorFrom(e){return new O0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let s=this;return s.size<e.size&&(s=e,e=this),e.forEach(n=>{s=s.add(n)}),s}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const s=this.data.getIterator(),n=e.data.getIterator();for(;s.hasNext();){const a=s.getNext().key,o=n.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(s=>{e.push(s)}),e}toString(){const e=[];return this.forEach(s=>e.push(s)),"SortedSet("+e.toString()+")"}copy(e){const s=new Lt(this.comparator);return s.data=e,s}}class O0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new hs([])}unionWith(e){let s=new Lt(Yt.comparator);for(const n of this.fields)s=s.add(n);for(const n of e)s=s.add(n);return new hs(s.toArray())}covers(e){for(const s of this.fields)if(s.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(s,n)=>s.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const s=function(a){try{return atob(a)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new gB("Invalid base64 string: "+o):o}}(e);return new Mt(s)}static fromUint8Array(e){const s=function(a){let o="";for(let i=0;i<a.length;++i)o+=String.fromCharCode(a[i]);return o}(e);return new Mt(s)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(s){return btoa(s)}(this.binaryString)}toUint8Array(){return function(s){const n=new Uint8Array(s.length);for(let a=0;a<s.length;a++)n[a]=s.charCodeAt(a);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const SY=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ca(t){if(Ge(!!t),typeof t=="string"){let e=0;const s=SY.exec(t);if(Ge(!!s),s[1]){let a=s[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ja(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){var e,s;return((s=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="server_timestamp"}function Jm(t){const e=t.mapValue.fields.__previous_value__;return Fm(e)?Jm(e):e}function Al(t){const e=ca(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _Y{constructor(e,s,n,a,o,i,l,r,p){this.databaseId=e,this.appId=s,this.persistenceKey=n,this.host=a,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=l,this.longPollingOptions=r,this.useFetchStreams=p}}class wl{constructor(e,s){this.projectId=e,this.database=s||"(default)"}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $a(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fm(t)?4:vY(t)?9007199254740991:VY(t)?10:11:Ne()}function tn(t,e){if(t===e)return!0;const s=$a(t);if(s!==$a(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const i=ca(a.timestampValue),l=ca(o.timestampValue);return i.seconds===l.seconds&&i.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,o){return Ja(a.bytesValue).isEqual(Ja(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(t,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const i=dt(a.doubleValue),l=dt(o.doubleValue);return i===l?qc(i)===qc(l):isNaN(i)&&isNaN(l)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(a,o){const i=a.mapValue.fields||{},l=o.mapValue.fields||{};if(Q0(i)!==Q0(l))return!1;for(const r in i)if(i.hasOwnProperty(r)&&(l[r]===void 0||!tn(i[r],l[r])))return!1;return!0}(t,e);default:return Ne()}}function Dl(t,e){return(t.values||[]).find(s=>tn(s,e))!==void 0}function Wo(t,e){if(t===e)return 0;const s=$a(t),n=$a(e);if(s!==n)return Re(s,n);switch(s){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(o,i){const l=dt(o.integerValue||o.doubleValue),r=dt(i.integerValue||i.doubleValue);return l<r?-1:l>r?1:l===r?0:isNaN(l)?isNaN(r)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(Al(t),Al(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(o,i){const l=Ja(o),r=Ja(i);return l.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(o,i){const l=o.split("/"),r=i.split("/");for(let p=0;p<l.length&&p<r.length;p++){const u=Re(l[p],r[p]);if(u!==0)return u}return Re(l.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,i){const l=Re(dt(o.latitude),dt(i.latitude));return l!==0?l:Re(dt(o.longitude),dt(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return G0(t.arrayValue,e.arrayValue);case 10:return function(o,i){var l,r,p,u;const d=o.fields||{},m=i.fields||{},f=(l=d.value)===null||l===void 0?void 0:l.arrayValue,P=(r=m.value)===null||r===void 0?void 0:r.arrayValue,_=Re(((p=f==null?void 0:f.values)===null||p===void 0?void 0:p.length)||0,((u=P==null?void 0:P.values)===null||u===void 0?void 0:u.length)||0);return _!==0?_:G0(f,P)}(t.mapValue,e.mapValue);case 11:return function(o,i){if(o===jr.mapValue&&i===jr.mapValue)return 0;if(o===jr.mapValue)return 1;if(i===jr.mapValue)return-1;const l=o.fields||{},r=Object.keys(l),p=i.fields||{},u=Object.keys(p);r.sort(),u.sort();for(let d=0;d<r.length&&d<u.length;++d){const m=Re(r[d],u[d]);if(m!==0)return m;const f=Wo(l[r[d]],p[u[d]]);if(f!==0)return f}return Re(r.length,u.length)}(t.mapValue,e.mapValue);default:throw Ne()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const s=ca(t),n=ca(e),a=Re(s.seconds,n.seconds);return a!==0?a:Re(s.nanos,n.nanos)}function G0(t,e){const s=t.values||[],n=e.values||[];for(let a=0;a<s.length&&a<n.length;++a){const o=Wo(s[a],n[a]);if(o)return o}return Re(s.length,n.length)}function Zo(t){return dh(t)}function dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const n=ca(s);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(s){return Ja(s).toBase64()}(t.bytesValue):"referenceValue"in t?function(s){return me.fromName(s).toString()}(t.referenceValue):"geoPointValue"in t?function(s){return`geo(${s.latitude},${s.longitude})`}(t.geoPointValue):"arrayValue"in t?function(s){let n="[",a=!0;for(const o of s.values||[])a?a=!1:n+=",",n+=dh(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(s){const n=Object.keys(s.fields||{}).sort();let a="{",o=!0;for(const i of n)o?o=!1:a+=",",a+=`${i}:${dh(s.fields[i])}`;return a+"}"}(t.mapValue):Ne()}function U0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hh(t){return!!t&&"integerValue"in t}function $m(t){return!!t&&"arrayValue"in t}function z0(t){return!!t&&"nullValue"in t}function q0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mc(t){return!!t&&"mapValue"in t}function VY(t){var e,s;return((s=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="__vector__"}function ul(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return io(t.mapValue.fields,(s,n)=>e.mapValue.fields[s]=ul(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let s=0;s<(t.arrayValue.values||[]).length;++s)e.arrayValue.values[s]=ul(t.arrayValue.values[s]);return e}return Object.assign({},t)}function vY(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.value=e}static empty(){return new ls({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let s=this.value;for(let n=0;n<e.length-1;++n)if(s=(s.mapValue.fields||{})[e.get(n)],!mc(s))return null;return s=(s.mapValue.fields||{})[e.lastSegment()],s||null}}set(e,s){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(s)}setAll(e){let s=Yt.emptyPath(),n={},a=[];e.forEach((i,l)=>{if(!s.isImmediateParentOf(l)){const r=this.getFieldsMap(s);this.applyChanges(r,n,a),n={},a=[],s=l.popLast()}i?n[l.lastSegment()]=ul(i):a.push(l.lastSegment())});const o=this.getFieldsMap(s);this.applyChanges(o,n,a)}delete(e){const s=this.field(e.popLast());mc(s)&&s.mapValue.fields&&delete s.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let s=this.value;s.mapValue.fields||(s.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=s.mapValue.fields[e.get(n)];mc(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},s.mapValue.fields[e.get(n)]=a),s=a}return s.mapValue.fields}applyChanges(e,s,n){io(s,(a,o)=>e[a]=o);for(const a of n)delete e[a]}clone(){return new ls(ul(this.value))}}function fB(t){const e=[];return io(t.fields,(s,n)=>{const a=new Yt([s]);if(mc(n)){const o=fB(n.mapValue).fields;if(o.length===0)e.push(a);else for(const i of o)e.push(a.child(i))}else e.push(a)}),new hs(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,s,n,a,o,i,l){this.key=e,this.documentType=s,this.version=n,this.readTime=a,this.createTime=o,this.data=i,this.documentState=l}static newInvalidDocument(e){return new Gt(e,0,Se.min(),Se.min(),Se.min(),ls.empty(),0)}static newFoundDocument(e,s,n,a){return new Gt(e,1,s,Se.min(),n,a,0)}static newNoDocument(e,s){return new Gt(e,2,s,Se.min(),Se.min(),ls.empty(),0)}static newUnknownDocument(e,s){return new Gt(e,3,s,Se.min(),Se.min(),ls.empty(),2)}convertToFoundDocument(e,s){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=s,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ls.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ls.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,s){this.position=e,this.inclusive=s}}function F0(t,e,s){let n=0;for(let a=0;a<t.position.length;a++){const o=e[a],i=t.position[a];if(o.field.isKeyField()?n=me.comparator(me.fromName(i.referenceValue),s.key):n=Wo(i,s.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function J0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let s=0;s<t.position.length;s++)if(!tn(t.position[s],e.position[s]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,s="asc"){this.field=e,this.dir=s}}function xY(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{}class Tt extends TB{constructor(e,s,n){super(),this.field=e,this.op=s,this.value=n}static create(e,s,n){return e.isKeyField()?s==="in"||s==="not-in"?this.createKeyFieldInFilter(e,s,n):new KY(e,s,n):s==="array-contains"?new MY(e,n):s==="in"?new CY(e,n):s==="not-in"?new AY(e,n):s==="array-contains-any"?new wY(e,n):new Tt(e,s,n)}static createKeyFieldInFilter(e,s,n){return s==="in"?new YY(e,n):new LY(e,n)}matches(e){const s=e.data.field(this.field);return this.op==="!="?s!==null&&this.matchesComparison(Wo(s,this.value)):s!==null&&$a(this.value)===$a(s)&&this.matchesComparison(Wo(s,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Os extends TB{constructor(e,s){super(),this.filters=e,this.op=s,this.ae=null}static create(e,s){return new Os(e,s)}matches(e){return PB(this)?this.filters.find(s=>!s.matches(e))===void 0:this.filters.find(s=>s.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,s)=>e.concat(s.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function PB(t){return t.op==="and"}function IB(t){return HY(t)&&PB(t)}function HY(t){for(const e of t.filters)if(e instanceof Os)return!1;return!0}function mh(t){if(t instanceof Tt)return t.field.canonicalString()+t.op.toString()+Zo(t.value);if(IB(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(s=>mh(s)).join(",");return`${t.op}(${e})`}}function yB(t,e){return t instanceof Tt?function(n,a){return a instanceof Tt&&n.op===a.op&&n.field.isEqual(a.field)&&tn(n.value,a.value)}(t,e):t instanceof Os?function(n,a){return a instanceof Os&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce((o,i,l)=>o&&yB(i,a.filters[l]),!0):!1}(t,e):void Ne()}function EB(t){return t instanceof Tt?function(s){return`${s.field.canonicalString()} ${s.op} ${Zo(s.value)}`}(t):t instanceof Os?function(s){return s.op.toString()+" {"+s.getFilters().map(EB).join(" ,")+"}"}(t):"Filter"}class KY extends Tt{constructor(e,s,n){super(e,s,n),this.key=me.fromName(n.referenceValue)}matches(e){const s=me.comparator(e.key,this.key);return this.matchesComparison(s)}}class YY extends Tt{constructor(e,s){super(e,"in",s),this.keys=BB("in",s)}matches(e){return this.keys.some(s=>s.isEqual(e.key))}}class LY extends Tt{constructor(e,s){super(e,"not-in",s),this.keys=BB("not-in",s)}matches(e){return!this.keys.some(s=>s.isEqual(e.key))}}function BB(t,e){var s;return(((s=e.arrayValue)===null||s===void 0?void 0:s.values)||[]).map(n=>me.fromName(n.referenceValue))}class MY extends Tt{constructor(e,s){super(e,"array-contains",s)}matches(e){const s=e.data.field(this.field);return $m(s)&&Dl(s.arrayValue,this.value)}}class CY extends Tt{constructor(e,s){super(e,"in",s)}matches(e){const s=e.data.field(this.field);return s!==null&&Dl(this.value.arrayValue,s)}}class AY extends Tt{constructor(e,s){super(e,"not-in",s)}matches(e){if(Dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const s=e.data.field(this.field);return s!==null&&!Dl(this.value.arrayValue,s)}}class wY extends Tt{constructor(e,s){super(e,"array-contains-any",s)}matches(e){const s=e.data.field(this.field);return!(!$m(s)||!s.arrayValue.values)&&s.arrayValue.values.some(n=>Dl(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DY{constructor(e,s=null,n=[],a=[],o=null,i=null,l=null){this.path=e,this.collectionGroup=s,this.orderBy=n,this.filters=a,this.limit=o,this.startAt=i,this.endAt=l,this.ue=null}}function $0(t,e=null,s=[],n=[],a=null,o=null,i=null){return new DY(t,e,s,n,a,o,i)}function Wm(t){const e=_e(t);if(e.ue===null){let s=e.path.canonicalString();e.collectionGroup!==null&&(s+="|cg:"+e.collectionGroup),s+="|f:",s+=e.filters.map(n=>mh(n)).join(","),s+="|ob:",s+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),jp(e.limit)||(s+="|l:",s+=e.limit),e.startAt&&(s+="|lb:",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(n=>Zo(n)).join(",")),e.endAt&&(s+="|ub:",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(n=>Zo(n)).join(",")),e.ue=s}return e.ue}function Zm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!xY(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(!yB(t.filters[s],e.filters[s]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J0(t.startAt,e.startAt)&&J0(t.endAt,e.endAt)}function gh(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,s=null,n=[],a=[],o=null,i="F",l=null,r=null){this.path=e,this.collectionGroup=s,this.explicitOrderBy=n,this.filters=a,this.limit=o,this.limitType=i,this.startAt=l,this.endAt=r,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bY(t,e,s,n,a,o,i,l){return new lo(t,e,s,n,a,o,i,l)}function Gp(t){return new lo(t)}function W0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NB(t){return t.collectionGroup!==null}function dl(t){const e=_e(t);if(e.ce===null){e.ce=[];const s=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),s.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let l=new Lt(Yt.comparator);return i.filters.forEach(r=>{r.getFlattenedFilters().forEach(p=>{p.isInequality()&&(l=l.add(p.field))})}),l})(e).forEach(o=>{s.has(o.canonicalString())||o.isKeyField()||e.ce.push(new bl(o,n))}),s.has(Yt.keyField().canonicalString())||e.ce.push(new bl(Yt.keyField(),n))}return e.ce}function Xs(t){const e=_e(t);return e.le||(e.le=RY(e,dl(t))),e.le}function RY(t,e){if(t.limitType==="F")return $0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new bl(a.field,o)});const s=t.endAt?new Fc(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new Fc(t.startAt.position,t.startAt.inclusive):null;return $0(t.path,t.collectionGroup,e,t.filters,t.limit,s,n)}}function fh(t,e){const s=t.filters.concat([e]);return new lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),s,t.limit,t.limitType,t.startAt,t.endAt)}function Jc(t,e,s){return new lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,s,t.startAt,t.endAt)}function Up(t,e){return Zm(Xs(t),Xs(e))&&t.limitType===e.limitType}function kB(t){return`${Wm(Xs(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(s){let n=s.path.canonicalString();return s.collectionGroup!==null&&(n+=" collectionGroup="+s.collectionGroup),s.filters.length>0&&(n+=`, filters: [${s.filters.map(a=>EB(a)).join(", ")}]`),jp(s.limit)||(n+=", limit: "+s.limit),s.orderBy.length>0&&(n+=`, orderBy: [${s.orderBy.map(a=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(a)).join(", ")}]`),s.startAt&&(n+=", startAt: ",n+=s.startAt.inclusive?"b:":"a:",n+=s.startAt.position.map(a=>Zo(a)).join(",")),s.endAt&&(n+=", endAt: ",n+=s.endAt.inclusive?"a:":"b:",n+=s.endAt.position.map(a=>Zo(a)).join(",")),`Target(${n})`}(Xs(t))}; limitType=${t.limitType})`}function zp(t,e){return e.isFoundDocument()&&function(n,a){const o=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):me.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,a){for(const o of dl(n))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,a){for(const o of n.filters)if(!o.matches(a))return!1;return!0}(t,e)&&function(n,a){return!(n.startAt&&!function(i,l,r){const p=F0(i,l,r);return i.inclusive?p<=0:p<0}(n.startAt,dl(n),a)||n.endAt&&!function(i,l,r){const p=F0(i,l,r);return i.inclusive?p>=0:p>0}(n.endAt,dl(n),a))}(t,e)}function QY(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SB(t){return(e,s)=>{let n=!1;for(const a of dl(t)){const o=OY(a,e,s);if(o!==0)return o;n=n||a.field.isKeyField()}return 0}}function OY(t,e,s){const n=t.field.isKeyField()?me.comparator(e.key,s.key):function(o,i,l){const r=i.data.field(o),p=l.data.field(o);return r!==null&&p!==null?Wo(r,p):Ne()}(t.field,e,s);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return Ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,s){this.mapKeyFn=e,this.equalsFn=s,this.inner={},this.innerSize=0}get(e){const s=this.mapKeyFn(e),n=this.inner[s];if(n!==void 0){for(const[a,o]of n)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,s){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,s]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,s]);a.push([e,s]),this.innerSize++}delete(e){const s=this.mapKeyFn(e),n=this.inner[s];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[s]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(s,n)=>{for(const[a,o]of n)e(a,o)})}isEmpty(){return mB(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jY=new ct(me.comparator);function vn(){return jY}const _B=new ct(me.comparator);function Ji(...t){let e=_B;for(const s of t)e=e.insert(s.key,s);return e}function VB(t){let e=_B;return t.forEach((s,n)=>e=e.insert(s,n.overlayedDocument)),e}function Ca(){return hl()}function vB(){return hl()}function hl(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const GY=new ct(me.comparator),UY=new Lt(me.comparator);function Ye(...t){let e=UY;for(const s of t)e=e.add(s);return e}const zY=new Lt(Re);function qY(){return zY}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function xB(t){return{integerValue:""+t}}function FY(t,e){return kY(e)?xB(e):Xm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this._=void 0}}function JY(t,e,s){return t instanceof $c?function(a,o){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Fm(o)&&(o=Jm(o)),o&&(i.fields.__previous_value__=o),{mapValue:i}}(s,e):t instanceof Rl?KB(t,e):t instanceof Ql?YB(t,e):function(a,o){const i=HB(a,o),l=Z0(i)+Z0(a.Pe);return hh(i)&&hh(a.Pe)?xB(l):Xm(a.serializer,l)}(t,e)}function $Y(t,e,s){return t instanceof Rl?KB(t,e):t instanceof Ql?YB(t,e):s}function HB(t,e){return t instanceof Wc?function(n){return hh(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class $c extends qp{}class Rl extends qp{constructor(e){super(),this.elements=e}}function KB(t,e){const s=LB(e);for(const n of t.elements)s.some(a=>tn(a,n))||s.push(n);return{arrayValue:{values:s}}}class Ql extends qp{constructor(e){super(),this.elements=e}}function YB(t,e){let s=LB(e);for(const n of t.elements)s=s.filter(a=>!tn(a,n));return{arrayValue:{values:s}}}class Wc extends qp{constructor(e,s){super(),this.serializer=e,this.Pe=s}}function Z0(t){return dt(t.integerValue||t.doubleValue)}function LB(t){return $m(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WY(t,e){return t.field.isEqual(e.field)&&function(n,a){return n instanceof Rl&&a instanceof Rl||n instanceof Ql&&a instanceof Ql?$o(n.elements,a.elements,tn):n instanceof Wc&&a instanceof Wc?tn(n.Pe,a.Pe):n instanceof $c&&a instanceof $c}(t.transform,e.transform)}class ZY{constructor(e,s){this.version=e,this.transformResults=s}}class Bs{constructor(e,s){this.updateTime=e,this.exists=s}static none(){return new Bs}static exists(e){return new Bs(void 0,e)}static updateTime(e){return new Bs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fp{}function MB(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eg(t.key,Bs.none()):new sr(t.key,t.data,Bs.none());{const s=t.data,n=ls.empty();let a=new Lt(Yt.comparator);for(let o of e.fields)if(!a.has(o)){let i=s.field(o);i===null&&o.length>1&&(o=o.popLast(),i=s.field(o)),i===null?n.delete(o):n.set(o,i),a=a.add(o)}return new ya(t.key,n,new hs(a.toArray()),Bs.none())}}function XY(t,e,s){t instanceof sr?function(a,o,i){const l=a.value.clone(),r=eP(a.fieldTransforms,o,i.transformResults);l.setAll(r),o.convertToFoundDocument(i.version,l).setHasCommittedMutations()}(t,e,s):t instanceof ya?function(a,o,i){if(!gc(a.precondition,o))return void o.convertToUnknownDocument(i.version);const l=eP(a.fieldTransforms,o,i.transformResults),r=o.data;r.setAll(CB(a)),r.setAll(l),o.convertToFoundDocument(i.version,r).setHasCommittedMutations()}(t,e,s):function(a,o,i){o.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,s)}function ml(t,e,s,n){return t instanceof sr?function(o,i,l,r){if(!gc(o.precondition,i))return l;const p=o.value.clone(),u=tP(o.fieldTransforms,r,i);return p.setAll(u),i.convertToFoundDocument(i.version,p).setHasLocalMutations(),null}(t,e,s,n):t instanceof ya?function(o,i,l,r){if(!gc(o.precondition,i))return l;const p=tP(o.fieldTransforms,r,i),u=i.data;return u.setAll(CB(o)),u.setAll(p),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(d=>d.field))}(t,e,s,n):function(o,i,l){return gc(o.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):l}(t,e,s)}function eL(t,e){let s=null;for(const n of t.fieldTransforms){const a=e.data.field(n.field),o=HB(n.transform,a||null);o!=null&&(s===null&&(s=ls.empty()),s.set(n.field,o))}return s||null}function X0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&$o(n,a,(o,i)=>WY(o,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sr extends Fp{constructor(e,s,n,a=[]){super(),this.key=e,this.value=s,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ya extends Fp{constructor(e,s,n,a,o=[]){super(),this.key=e,this.data=s,this.fieldMask=n,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function CB(t){const e=new Map;return t.fieldMask.fields.forEach(s=>{if(!s.isEmpty()){const n=t.data.field(s);e.set(s,n)}}),e}function eP(t,e,s){const n=new Map;Ge(t.length===s.length);for(let a=0;a<s.length;a++){const o=t[a],i=o.transform,l=e.data.field(o.field);n.set(o.field,$Y(i,l,s[a]))}return n}function tP(t,e,s){const n=new Map;for(const a of t){const o=a.transform,i=s.data.field(a.field);n.set(a.field,JY(o,i,e))}return n}class eg extends Fp{constructor(e,s){super(),this.key=e,this.precondition=s,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tL extends Fp{constructor(e,s){super(),this.key=e,this.precondition=s,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,s,n,a){this.batchId=e,this.localWriteTime=s,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,s){const n=s.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&XY(o,e,n[a])}}applyToLocalView(e,s){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(s=ml(n,e,s,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(s=ml(n,e,s,this.localWriteTime));return s}applyToLocalDocumentSet(e,s){const n=vB();return this.mutations.forEach(a=>{const o=e.get(a.key),i=o.overlayedDocument;let l=this.applyToLocalView(i,o.mutatedFields);l=s.has(a.key)?null:l;const r=MB(i,l);r!==null&&n.set(a.key,r),i.isValidDocument()||i.convertToNoDocument(Se.min())}),n}keys(){return this.mutations.reduce((e,s)=>e.add(s.key),Ye())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(s,n)=>X0(s,n))&&$o(this.baseMutations,e.baseMutations,(s,n)=>X0(s,n))}}class tg{constructor(e,s,n,a){this.batch=e,this.commitVersion=s,this.mutationResults=n,this.docVersions=a}static from(e,s,n){Ge(e.mutations.length===n.length);let a=function(){return GY}();const o=e.mutations;for(let i=0;i<o.length;i++)a=a.insert(o[i].key,n[i].version);return new tg(e,s,n,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,s){this.largestBatchId=e,this.mutation=s}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,s){this.count=e,this.unchangedNames=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ae;function oL(t){switch(t){default:return Ne();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function AB(t){if(t===void 0)return Vn("GRPC error has no .code"),G.UNKNOWN;switch(t){case ft.OK:return G.OK;case ft.CANCELLED:return G.CANCELLED;case ft.UNKNOWN:return G.UNKNOWN;case ft.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ft.INTERNAL:return G.INTERNAL;case ft.UNAVAILABLE:return G.UNAVAILABLE;case ft.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ft.NOT_FOUND:return G.NOT_FOUND;case ft.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ft.ABORTED:return G.ABORTED;case ft.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ft.DATA_LOSS:return G.DATA_LOSS;default:return Ne()}}(Ae=ft||(ft={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=new Qa([4294967295,4294967295],0);function sP(t){const e=iL().encode(t),s=new iB;return s.update(e),new Uint8Array(s.digest())}function nP(t){const e=new DataView(t.buffer),s=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Qa([s,n],0),new Qa([a,o],0)]}class sg{constructor(e,s,n){if(this.bitmap=e,this.padding=s,this.hashCount=n,s<0||s>=8)throw new $i(`Invalid padding: ${s}`);if(n<0)throw new $i(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $i(`Invalid hash count: ${n}`);if(e.length===0&&s!==0)throw new $i(`Invalid padding when bitmap length is 0: ${s}`);this.Ie=8*e.length-s,this.Te=Qa.fromNumber(this.Ie)}Ee(e,s,n){let a=e.add(s.multiply(Qa.fromNumber(n)));return a.compare(lL)===1&&(a=new Qa([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const s=sP(e),[n,a]=nP(s);for(let o=0;o<this.hashCount;o++){const i=this.Ee(n,a,o);if(!this.de(i))return!1}return!0}static create(e,s,n){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new sg(o,a,s);return n.forEach(l=>i.insert(l)),i}insert(e){if(this.Ie===0)return;const s=sP(e),[n,a]=nP(s);for(let o=0;o<this.hashCount;o++){const i=this.Ee(n,a,o);this.Ae(i)}}Ae(e){const s=Math.floor(e/8),n=e%8;this.bitmap[s]|=1<<n}}class $i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,s,n,a,o){this.snapshotVersion=e,this.targetChanges=s,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,s,n){const a=new Map;return a.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,s,n)),new Jp(Se.min(),a,new ct(Re),vn(),Ye())}}class nr{constructor(e,s,n,a,o){this.resumeToken=e,this.current=s,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,s,n){return new nr(n,s,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,s,n,a){this.Re=e,this.removedTargetIds=s,this.key=n,this.Ve=a}}class wB{constructor(e,s){this.targetId=e,this.me=s}}class DB{constructor(e,s,n=Mt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=s,this.resumeToken=n,this.cause=a}}class aP{constructor(){this.fe=0,this.ge=iP(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ye(),s=Ye(),n=Ye();return this.ge.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:s=s.add(a);break;case 1:n=n.add(a);break;default:Ne()}}),new nr(this.pe,this.ye,e,s,n)}Ce(){this.we=!1,this.ge=iP()}Fe(e,s){this.we=!0,this.ge=this.ge.insert(e,s)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rL{constructor(e){this.Le=e,this.Be=new Map,this.ke=vn(),this.qe=oP(),this.Qe=new ct(Re)}Ke(e){for(const s of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(s,e.Ve):this.Ue(s,e.key,e.Ve);for(const s of e.removedTargetIds)this.Ue(s,e.key,e.Ve)}We(e){this.forEachTarget(e,s=>{const n=this.Ge(s);switch(e.state){case 0:this.ze(s)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(s);break;case 3:this.ze(s)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(s)&&(this.je(s),n.De(e.resumeToken));break;default:Ne()}})}forEachTarget(e,s){e.targetIds.length>0?e.targetIds.forEach(s):this.Be.forEach((n,a)=>{this.ze(a)&&s(a)})}He(e){const s=e.targetId,n=e.me.count,a=this.Je(s);if(a){const o=a.target;if(gh(o))if(n===0){const i=new me(o.path);this.Ue(s,i,Gt.newNoDocument(i,Se.min()))}else Ge(n===1);else{const i=this.Ye(s);if(i!==n){const l=this.Ze(e),r=l?this.Xe(l,e,i):1;if(r!==0){this.je(s);const p=r===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(s,p)}}}}}Ze(e){const s=e.me.unchangedNames;if(!s||!s.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:o=0}=s;let i,l;try{i=Ja(n).toUint8Array()}catch(r){if(r instanceof gB)return Jo("Decoding the base64 bloom filter in existence filter failed ("+r.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw r}try{l=new sg(i,a,o)}catch(r){return Jo(r instanceof $i?"BloomFilter error: ":"Applying bloom filter failed: ",r),null}return l.Ie===0?null:l}Xe(e,s,n){return s.me.count===n-this.nt(e,s.targetId)?0:2}nt(e,s){const n=this.Le.getRemoteKeysForTarget(s);let a=0;return n.forEach(o=>{const i=this.Le.tt(),l=`projects/${i.projectId}/databases/${i.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(s,o,null),a++)}),a}rt(e){const s=new Map;this.Be.forEach((o,i)=>{const l=this.Je(i);if(l){if(o.current&&gh(l.target)){const r=new me(l.target.path);this.ke.get(r)!==null||this.it(i,r)||this.Ue(i,r,Gt.newNoDocument(r,e))}o.be&&(s.set(i,o.ve()),o.Ce())}});let n=Ye();this.qe.forEach((o,i)=>{let l=!0;i.forEachWhile(r=>{const p=this.Je(r);return!p||p.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,i)=>i.setReadTime(e));const a=new Jp(e,s,this.Qe,this.ke,n);return this.ke=vn(),this.qe=oP(),this.Qe=new ct(Re),a}$e(e,s){if(!this.ze(e))return;const n=this.it(e,s.key)?2:0;this.Ge(e).Fe(s.key,n),this.ke=this.ke.insert(s.key,s),this.qe=this.qe.insert(s.key,this.st(s.key).add(e))}Ue(e,s,n){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,s)?a.Fe(s,1):a.Me(s),this.qe=this.qe.insert(s,this.st(s).delete(e)),n&&(this.ke=this.ke.insert(s,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const s=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let s=this.Be.get(e);return s||(s=new aP,this.Be.set(e,s)),s}st(e){let s=this.qe.get(e);return s||(s=new Lt(Re),this.qe=this.qe.insert(e,s)),s}ze(e){const s=this.Je(e)!==null;return s||ue("WatchChangeAggregator","Detected inactive target",e),s}Je(e){const s=this.Be.get(e);return s&&s.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new aP),this.Le.getRemoteKeysForTarget(e).forEach(s=>{this.Ue(e,s,null)})}it(e,s){return this.Le.getRemoteKeysForTarget(e).has(s)}}function oP(){return new ct(me.comparator)}function iP(){return new ct(me.comparator)}const cL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uL=(()=>({and:"AND",or:"OR"}))();class dL{constructor(e,s){this.databaseId=e,this.useProto3Json=s}}function Th(t,e){return t.useProto3Json||jp(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bB(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hL(t,e){return Zc(t,e.toTimestamp())}function en(t){return Ge(!!t),Se.fromTimestamp(function(s){const n=ca(s);return new lt(n.seconds,n.nanos)}(t))}function ng(t,e){return Ph(t,e).canonicalString()}function Ph(t,e){const s=function(a){return new We(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?s:s.child(e)}function RB(t){const e=We.fromString(t);return Ge(UB(e)),e}function Ih(t,e){return ng(t.databaseId,e.path)}function ld(t,e){const s=RB(e);if(s.get(1)!==t.databaseId.projectId)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+s.get(1)+" vs "+t.databaseId.projectId);if(s.get(3)!==t.databaseId.database)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+s.get(3)+" vs "+t.databaseId.database);return new me(OB(s))}function QB(t,e){return ng(t.databaseId,e)}function mL(t){const e=RB(t);return e.length===4?We.emptyPath():OB(e)}function yh(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OB(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lP(t,e,s){return{name:Ih(t,e),fields:s.value.mapValue.fields}}function gL(t,e){let s;if("targetChange"in e){e.targetChange;const n=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(p,u){return p.useProto3Json?(Ge(u===void 0||typeof u=="string"),Mt.fromBase64String(u||"")):(Ge(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),i=e.targetChange.cause,l=i&&function(p){const u=p.code===void 0?G.UNKNOWN:AB(p.code);return new re(u,p.message||"")}(i);s=new DB(n,a,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=ld(t,n.document.name),o=en(n.document.updateTime),i=n.document.createTime?en(n.document.createTime):Se.min(),l=new ls({mapValue:{fields:n.document.fields}}),r=Gt.newFoundDocument(a,o,i,l),p=n.targetIds||[],u=n.removedTargetIds||[];s=new fc(p,u,r.key,r)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=ld(t,n.document),o=n.readTime?en(n.readTime):Se.min(),i=Gt.newNoDocument(a,o),l=n.removedTargetIds||[];s=new fc([],l,i.key,i)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=ld(t,n.document),o=n.removedTargetIds||[];s=new fc([],o,a,null)}else{if(!("filter"in e))return Ne();{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:o}=n,i=new aL(a,o),l=n.targetId;s=new wB(l,i)}}return s}function fL(t,e){let s;if(e instanceof sr)s={update:lP(t,e.key,e.value)};else if(e instanceof eg)s={delete:Ih(t,e.key)};else if(e instanceof ya)s={update:lP(t,e.key,e.data),updateMask:SL(e.fieldMask)};else{if(!(e instanceof tL))return Ne();s={verify:Ih(t,e.key)}}return e.fieldTransforms.length>0&&(s.updateTransforms=e.fieldTransforms.map(n=>function(o,i){const l=i.transform;if(l instanceof $c)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Rl)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ql)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wc)return{fieldPath:i.field.canonicalString(),increment:l.Pe};throw Ne()}(0,n))),e.precondition.isNone||(s.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:hL(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Ne()}(t,e.precondition)),s}function TL(t,e){return t&&t.length>0?(Ge(e!==void 0),t.map(s=>function(a,o){let i=a.updateTime?en(a.updateTime):en(o);return i.isEqual(Se.min())&&(i=en(o)),new ZY(i,a.transformResults||[])}(s,e))):[]}function PL(t,e){return{documents:[QB(t,e.path)]}}function IL(t,e){const s={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,s.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),s.structuredQuery.from=[{collectionId:n.lastSegment()}]),s.parent=QB(t,a);const o=function(p){if(p.length!==0)return GB(Os.create(p,"and"))}(e.filters);o&&(s.structuredQuery.where=o);const i=function(p){if(p.length!==0)return p.map(u=>function(m){return{field:xo(m.field),direction:BL(m.dir)}}(u))}(e.orderBy);i&&(s.structuredQuery.orderBy=i);const l=Th(t,e.limit);return l!==null&&(s.structuredQuery.limit=l),e.startAt&&(s.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(s.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{_t:s,parent:a}}function yL(t){let e=mL(t.parent);const s=t.structuredQuery,n=s.from?s.from.length:0;let a=null;if(n>0){Ge(n===1);const u=s.from[0];u.allDescendants?a=u.collectionId:e=e.child(u.collectionId)}let o=[];s.where&&(o=function(d){const m=jB(d);return m instanceof Os&&IB(m)?m.getFilters():[m]}(s.where));let i=[];s.orderBy&&(i=function(d){return d.map(m=>function(P){return new bl(Ho(P.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(s.orderBy));let l=null;s.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,jp(m)?null:m}(s.limit));let r=null;s.startAt&&(r=function(d){const m=!!d.before,f=d.values||[];return new Fc(f,m)}(s.startAt));let p=null;return s.endAt&&(p=function(d){const m=!d.before,f=d.values||[];return new Fc(f,m)}(s.endAt)),bY(e,a,i,o,l,"F",r,p)}function EL(t,e){const s=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne()}}(e.purpose);return s==null?null:{"goog-listen-tags":s}}function jB(t){return t.unaryFilter!==void 0?function(s){switch(s.unaryFilter.op){case"IS_NAN":const n=Ho(s.unaryFilter.field);return Tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=Ho(s.unaryFilter.field);return Tt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ho(s.unaryFilter.field);return Tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ho(s.unaryFilter.field);return Tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}(t):t.fieldFilter!==void 0?function(s){return Tt.create(Ho(s.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(s.fieldFilter.op),s.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(s){return Os.create(s.compositeFilter.filters.map(n=>jB(n)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ne()}}(s.compositeFilter.op))}(t):Ne()}function BL(t){return cL[t]}function NL(t){return pL[t]}function kL(t){return uL[t]}function xo(t){return{fieldPath:t.canonicalString()}}function Ho(t){return Yt.fromServerFormat(t.fieldPath)}function GB(t){return t instanceof Tt?function(s){if(s.op==="=="){if(q0(s.value))return{unaryFilter:{field:xo(s.field),op:"IS_NAN"}};if(z0(s.value))return{unaryFilter:{field:xo(s.field),op:"IS_NULL"}}}else if(s.op==="!="){if(q0(s.value))return{unaryFilter:{field:xo(s.field),op:"IS_NOT_NAN"}};if(z0(s.value))return{unaryFilter:{field:xo(s.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(s.field),op:NL(s.op),value:s.value}}}(t):t instanceof Os?function(s){const n=s.getFilters().map(a=>GB(a));return n.length===1?n[0]:{compositeFilter:{op:kL(s.op),filters:n}}}(t):Ne()}function SL(t){const e=[];return t.fields.forEach(s=>e.push(s.canonicalString())),{fieldPaths:e}}function UB(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,s,n,a,o=Se.min(),i=Se.min(),l=Mt.EMPTY_BYTE_STRING,r=null){this.target=e,this.targetId=s,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=l,this.expectedCount=r}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,s){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,s,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.ct=e}}function VL(t){const e=yL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this.un=new xL}addToCollectionParentIndex(e,s){return this.un.add(s),F.resolve()}getCollectionParents(e,s){return F.resolve(this.un.getEntries(s))}addFieldIndex(e,s){return F.resolve()}deleteFieldIndex(e,s){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,s){return F.resolve()}getDocumentsMatchingTarget(e,s){return F.resolve(null)}getIndexType(e,s){return F.resolve(0)}getFieldIndexes(e,s){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,s){return F.resolve(ra.min())}getMinOffsetFromCollectionGroup(e,s){return F.resolve(ra.min())}updateCollectionGroup(e,s,n){return F.resolve()}updateIndexEntries(e,s){return F.resolve()}}class xL{constructor(){this.index={}}add(e){const s=e.lastSegment(),n=e.popLast(),a=this.index[s]||new Lt(We.comparator),o=!a.has(n);return this.index[s]=a.add(n),o}has(e){const s=e.lastSegment(),n=e.popLast(),a=this.index[s];return a&&a.has(n)}getEntries(e){return(this.index[e]||new Lt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xo(0)}static kn(){return new Xo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(){this.changes=new ui(e=>e.toString(),(e,s)=>e.isEqual(s)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,s){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(s))}getEntry(e,s){this.assertNotApplied();const n=this.changes.get(s);return n!==void 0?F.resolve(n):this.getFromCache(e,s)}getEntries(e,s){return this.getAllFromCache(e,s)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,s){this.overlayedDocument=e,this.mutatedFields=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,s,n,a){this.remoteDocumentCache=e,this.mutationQueue=s,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,s){let n=null;return this.documentOverlayCache.getOverlay(e,s).next(a=>(n=a,this.remoteDocumentCache.getEntry(e,s))).next(a=>(n!==null&&ml(n.mutation,a,hs.empty(),lt.now()),a))}getDocuments(e,s){return this.remoteDocumentCache.getEntries(e,s).next(n=>this.getLocalViewOfDocuments(e,n,Ye()).next(()=>n))}getLocalViewOfDocuments(e,s,n=Ye()){const a=Ca();return this.populateOverlays(e,a,s).next(()=>this.computeViews(e,s,a,n).next(o=>{let i=Ji();return o.forEach((l,r)=>{i=i.insert(l,r.overlayedDocument)}),i}))}getOverlayedDocuments(e,s){const n=Ca();return this.populateOverlays(e,n,s).next(()=>this.computeViews(e,s,n,Ye()))}populateOverlays(e,s,n){const a=[];return n.forEach(o=>{s.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((i,l)=>{s.set(i,l)})})}computeViews(e,s,n,a){let o=vn();const i=hl(),l=function(){return hl()}();return s.forEach((r,p)=>{const u=n.get(p.key);a.has(p.key)&&(u===void 0||u.mutation instanceof ya)?o=o.insert(p.key,p):u!==void 0?(i.set(p.key,u.mutation.getFieldMask()),ml(u.mutation,p,u.mutation.getFieldMask(),lt.now())):i.set(p.key,hs.empty())}),this.recalculateAndSaveOverlays(e,o).next(r=>(r.forEach((p,u)=>i.set(p,u)),s.forEach((p,u)=>{var d;return l.set(p,new KL(u,(d=i.get(p))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,s){const n=hl();let a=new ct((i,l)=>i-l),o=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,s).next(i=>{for(const l of i)l.keys().forEach(r=>{const p=s.get(r);if(p===null)return;let u=n.get(r)||hs.empty();u=l.applyToLocalView(p,u),n.set(r,u);const d=(a.get(l.batchId)||Ye()).add(r);a=a.insert(l.batchId,d)})}).next(()=>{const i=[],l=a.getReverseIterator();for(;l.hasNext();){const r=l.getNext(),p=r.key,u=r.value,d=vB();u.forEach(m=>{if(!o.has(m)){const f=MB(s.get(m),n.get(m));f!==null&&d.set(m,f),o=o.add(m)}}),i.push(this.documentOverlayCache.saveOverlays(e,p,d))}return F.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,s){return this.remoteDocumentCache.getEntries(e,s).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,s,n,a){return function(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(s)?this.getDocumentsMatchingDocumentQuery(e,s.path):NB(s)?this.getDocumentsMatchingCollectionGroupQuery(e,s,n,a):this.getDocumentsMatchingCollectionQuery(e,s,n,a)}getNextDocuments(e,s,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,s,n,a).next(o=>{const i=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,s,n.largestBatchId,a-o.size):F.resolve(Ca());let l=-1,r=o;return i.next(p=>F.forEach(p,(u,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),o.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(m=>{r=r.insert(u,m)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,r,p,Ye())).next(u=>({batchId:l,changes:VB(u)})))})}getDocumentsMatchingDocumentQuery(e,s){return this.getDocument(e,new me(s)).next(n=>{let a=Ji();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a})}getDocumentsMatchingCollectionGroupQuery(e,s,n,a){const o=s.collectionGroup;let i=Ji();return this.indexManager.getCollectionParents(e,o).next(l=>F.forEach(l,r=>{const p=function(d,m){return new lo(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(s,r.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,n,a).next(u=>{u.forEach((d,m)=>{i=i.insert(d,m)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,s,n,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,s.path,n.largestBatchId).next(i=>(o=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,s,n,o,a))).next(i=>{o.forEach((r,p)=>{const u=p.getKey();i.get(u)===null&&(i=i.insert(u,Gt.newInvalidDocument(u)))});let l=Ji();return i.forEach((r,p)=>{const u=o.get(r);u!==void 0&&ml(u.mutation,p,hs.empty(),lt.now()),zp(s,p)&&(l=l.insert(r,p))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,s){return F.resolve(this.hr.get(s))}saveBundleMetadata(e,s){return this.hr.set(s.id,function(a){return{id:a.id,version:a.version,createTime:en(a.createTime)}}(s)),F.resolve()}getNamedQuery(e,s){return F.resolve(this.Pr.get(s))}saveNamedQuery(e,s){return this.Pr.set(s.name,function(a){return{name:a.name,query:VL(a.bundledQuery),readTime:en(a.readTime)}}(s)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(){this.overlays=new ct(me.comparator),this.Ir=new Map}getOverlay(e,s){return F.resolve(this.overlays.get(s))}getOverlays(e,s){const n=Ca();return F.forEach(s,a=>this.getOverlay(e,a).next(o=>{o!==null&&n.set(a,o)})).next(()=>n)}saveOverlays(e,s,n){return n.forEach((a,o)=>{this.ht(e,s,o)}),F.resolve()}removeOverlaysForBatchId(e,s,n){const a=this.Ir.get(n);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),F.resolve()}getOverlaysForCollection(e,s,n){const a=Ca(),o=s.length+1,i=new me(s.child("")),l=this.overlays.getIteratorFrom(i);for(;l.hasNext();){const r=l.getNext().value,p=r.getKey();if(!s.isPrefixOf(p.path))break;p.path.length===o&&r.largestBatchId>n&&a.set(r.getKey(),r)}return F.resolve(a)}getOverlaysForCollectionGroup(e,s,n,a){let o=new ct((p,u)=>p-u);const i=this.overlays.getIterator();for(;i.hasNext();){const p=i.getNext().value;if(p.getKey().getCollectionGroup()===s&&p.largestBatchId>n){let u=o.get(p.largestBatchId);u===null&&(u=Ca(),o=o.insert(p.largestBatchId,u)),u.set(p.getKey(),p)}}const l=Ca(),r=o.getIterator();for(;r.hasNext()&&(r.getNext().value.forEach((p,u)=>l.set(p,u)),!(l.size()>=a)););return F.resolve(l)}ht(e,s,n){const a=this.overlays.get(n.key);if(a!==null){const i=this.Ir.get(a.largestBatchId).delete(n.key);this.Ir.set(a.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new nL(s,n));let o=this.Ir.get(s);o===void 0&&(o=Ye(),this.Ir.set(s,o)),this.Ir.set(s,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,s){return this.sessionToken=s,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Tr=new Lt(Nt.Er),this.dr=new Lt(Nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,s){const n=new Nt(e,s);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,s){e.forEach(n=>this.addReference(n,s))}removeReference(e,s){this.Vr(new Nt(e,s))}mr(e,s){e.forEach(n=>this.removeReference(n,s))}gr(e){const s=new me(new We([])),n=new Nt(s,e),a=new Nt(s,e+1),o=[];return this.dr.forEachInRange([n,a],i=>{this.Vr(i),o.push(i.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const s=new me(new We([])),n=new Nt(s,e),a=new Nt(s,e+1);let o=Ye();return this.dr.forEachInRange([n,a],i=>{o=o.add(i.key)}),o}containsKey(e){const s=new Nt(e,0),n=this.Tr.firstAfterOrEqual(s);return n!==null&&e.isEqual(n.key)}}class Nt{constructor(e,s){this.key=e,this.wr=s}static Er(e,s){return me.comparator(e.key,s.key)||Re(e.wr,s.wr)}static Ar(e,s){return Re(e.wr,s.wr)||me.comparator(e.key,s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,s){this.indexManager=e,this.referenceDelegate=s,this.mutationQueue=[],this.Sr=1,this.br=new Lt(Nt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,s,n,a){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new sL(o,s,n,a);this.mutationQueue.push(i);for(const l of a)this.br=this.br.add(new Nt(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(i)}lookupMutationBatch(e,s){return F.resolve(this.Dr(s))}getNextMutationBatchAfterBatchId(e,s){const n=s+1,a=this.vr(n),o=a<0?0:a;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,s){const n=new Nt(s,0),a=new Nt(s,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,a],i=>{const l=this.Dr(i.wr);o.push(l)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,s){let n=new Lt(Re);return s.forEach(a=>{const o=new Nt(a,0),i=new Nt(a,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,i],l=>{n=n.add(l.wr)})}),F.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,s){const n=s.path,a=n.length+1;let o=n;me.isDocumentKey(o)||(o=o.child(""));const i=new Nt(new me(o),0);let l=new Lt(Re);return this.br.forEachWhile(r=>{const p=r.key.path;return!!n.isPrefixOf(p)&&(p.length===a&&(l=l.add(r.wr)),!0)},i),F.resolve(this.Cr(l))}Cr(e){const s=[];return e.forEach(n=>{const a=this.Dr(n);a!==null&&s.push(a)}),s}removeMutationBatch(e,s){Ge(this.Fr(s.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return F.forEach(s.mutations,a=>{const o=new Nt(a.key,s.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,s){const n=new Nt(s,0),a=this.br.firstAfterOrEqual(n);return F.resolve(s.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,s){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const s=this.vr(e);return s<0||s>=this.mutationQueue.length?null:this.mutationQueue[s]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.Mr=e,this.docs=function(){return new ct(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,s){const n=s.key,a=this.docs.get(n),o=a?a.size:0,i=this.Mr(s);return this.docs=this.docs.insert(n,{document:s.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const s=this.docs.get(e);s&&(this.docs=this.docs.remove(e),this.size-=s.size)}getEntry(e,s){const n=this.docs.get(s);return F.resolve(n?n.document.mutableCopy():Gt.newInvalidDocument(s))}getEntries(e,s){let n=vn();return s.forEach(a=>{const o=this.docs.get(a);n=n.insert(a,o?o.document.mutableCopy():Gt.newInvalidDocument(a))}),F.resolve(n)}getDocumentsMatchingQuery(e,s,n,a){let o=vn();const i=s.path,l=new me(i.child("")),r=this.docs.getIteratorFrom(l);for(;r.hasNext();){const{key:p,value:{document:u}}=r.getNext();if(!i.isPrefixOf(p.path))break;p.path.length>i.length+1||yY(IY(u),n)<=0||(a.has(u.key)||zp(s,u))&&(o=o.insert(u.key,u.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,s,n,a){Ne()}Or(e,s){return F.forEach(this.docs,n=>s(n))}newChangeBuffer(e){return new DL(this)}getSize(e){return F.resolve(this.size)}}class DL extends HL{constructor(e){super(),this.cr=e}applyChanges(e){const s=[];return this.changes.forEach((n,a)=>{a.isValidDocument()?s.push(this.cr.addEntry(e,a)):this.cr.removeEntry(n)}),F.waitFor(s)}getFromCache(e,s){return this.cr.getEntry(e,s)}getAllFromCache(e,s){return this.cr.getEntries(e,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.persistence=e,this.Nr=new ui(s=>Wm(s),Zm),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ag,this.targetCount=0,this.kr=Xo.Bn()}forEachTarget(e,s){return this.Nr.forEach((n,a)=>s(a)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,s,n){return n&&(this.lastRemoteSnapshotVersion=n),s>this.Lr&&(this.Lr=s),F.resolve()}Kn(e){this.Nr.set(e.target,e);const s=e.targetId;s>this.highestTargetId&&(this.kr=new Xo(s),this.highestTargetId=s),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,s){return this.Kn(s),this.targetCount+=1,F.resolve()}updateTargetData(e,s){return this.Kn(s),F.resolve()}removeTargetData(e,s){return this.Nr.delete(s.target),this.Br.gr(s.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,s,n){let a=0;const o=[];return this.Nr.forEach((i,l)=>{l.sequenceNumber<=s&&n.get(l.targetId)===null&&(this.Nr.delete(i),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),a++)}),F.waitFor(o).next(()=>a)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,s){const n=this.Nr.get(s)||null;return F.resolve(n)}addMatchingKeys(e,s,n){return this.Br.Rr(s,n),F.resolve()}removeMatchingKeys(e,s,n){this.Br.mr(s,n);const a=this.persistence.referenceDelegate,o=[];return a&&s.forEach(i=>{o.push(a.markPotentiallyOrphaned(e,i))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,s){return this.Br.gr(s),F.resolve()}getMatchingKeysForTargetId(e,s){const n=this.Br.yr(s);return F.resolve(n)}containsKey(e,s){return F.resolve(this.Br.containsKey(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,s){this.qr={},this.overlays={},this.Qr=new qm(0),this.Kr=!1,this.Kr=!0,this.$r=new CL,this.referenceDelegate=e(this),this.Ur=new bL(this),this.indexManager=new vL,this.remoteDocumentCache=function(a){return new wL(a)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new _L(s),this.Gr=new LL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let s=this.overlays[e.toKey()];return s||(s=new ML,this.overlays[e.toKey()]=s),s}getMutationQueue(e,s){let n=this.qr[e.toKey()];return n||(n=new AL(s,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,s,n){ue("MemoryPersistence","Starting transaction:",e);const a=new QL(this.Qr.next());return this.referenceDelegate.zr(),n(a).next(o=>this.referenceDelegate.jr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}Hr(e,s){return F.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,s)))}}class QL extends BY{constructor(e){super(),this.currentSequenceNumber=e}}class og{constructor(e){this.persistence=e,this.Jr=new ag,this.Yr=null}static Zr(e){return new og(e)}get Xr(){if(this.Yr)return this.Yr;throw Ne()}addReference(e,s,n){return this.Jr.addReference(n,s),this.Xr.delete(n.toString()),F.resolve()}removeReference(e,s,n){return this.Jr.removeReference(n,s),this.Xr.add(n.toString()),F.resolve()}markPotentiallyOrphaned(e,s){return this.Xr.add(s.toString()),F.resolve()}removeTarget(e,s){this.Jr.gr(s.targetId).forEach(a=>this.Xr.add(a.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,s.targetId).next(a=>{a.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,s))}zr(){this.Yr=new Set}jr(e){const s=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,n=>{const a=me.fromPath(n);return this.ei(e,a).next(o=>{o||s.removeEntry(a,Se.min())})}).next(()=>(this.Yr=null,s.apply(e)))}updateLimboDocument(e,s){return this.ei(e,s).next(n=>{n?this.Xr.delete(s.toString()):this.Xr.add(s.toString())})}Wr(e){return 0}ei(e,s){return F.or([()=>F.resolve(this.Jr.containsKey(s)),()=>this.persistence.getTargetCache().containsKey(e,s),()=>this.persistence.Hr(e,s)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,s,n,a){this.targetId=e,this.fromCache=s,this.$i=n,this.Ui=a}static Wi(e,s){let n=Ye(),a=Ye();for(const o of s.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new ig(e,s.fromCache,n,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ax()?8:NY($t())>0?6:4}()}initialize(e,s){this.Ji=e,this.indexManager=s,this.Gi=!0}getDocumentsMatchingQuery(e,s,n,a){const o={result:null};return this.Yi(e,s).next(i=>{o.result=i}).next(()=>{if(!o.result)return this.Zi(e,s,a,n).next(i=>{o.result=i})}).next(()=>{if(o.result)return;const i=new OL;return this.Xi(e,s,i).next(l=>{if(o.result=l,this.zi)return this.es(e,s,i,l.size)})}).next(()=>o.result)}es(e,s,n,a){return n.documentReadCount<this.ji?(Mi()<=Ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",vo(s),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Mi()<=Ke.DEBUG&&ue("QueryEngine","Query:",vo(s),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.Hi*a?(Mi()<=Ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",vo(s),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xs(s))):F.resolve())}Yi(e,s){if(W0(s))return F.resolve(null);let n=Xs(s);return this.indexManager.getIndexType(e,n).next(a=>a===0?null:(s.limit!==null&&a===1&&(s=Jc(s,null,"F"),n=Xs(s)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const i=Ye(...o);return this.Ji.getDocuments(e,i).next(l=>this.indexManager.getMinOffset(e,n).next(r=>{const p=this.ts(s,l);return this.ns(s,p,i,r.readTime)?this.Yi(e,Jc(s,null,"F")):this.rs(e,p,s,r)}))})))}Zi(e,s,n,a){return W0(s)||a.isEqual(Se.min())?F.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const i=this.ts(s,o);return this.ns(s,i,n,a)?F.resolve(null):(Mi()<=Ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),vo(s)),this.rs(e,i,s,PY(a,-1)).next(l=>l))})}ts(e,s){let n=new Lt(SB(e));return s.forEach((a,o)=>{zp(e,o)&&(n=n.add(o))}),n}ns(e,s,n,a){if(e.limit===null)return!1;if(n.size!==s.size)return!0;const o=e.limitType==="F"?s.last():s.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}Xi(e,s,n){return Mi()<=Ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",vo(s)),this.Ji.getDocumentsMatchingQuery(e,s,ra.min(),n)}rs(e,s,n,a){return this.Ji.getDocumentsMatchingQuery(e,n,a).next(o=>(s.forEach(i=>{o=o.insert(i.key,i)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,s,n,a){this.persistence=e,this.ss=s,this.serializer=a,this.os=new ct(Re),this._s=new ui(o=>Wm(o),Zm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",s=>e.collect(s,this.os))}}function UL(t,e,s,n){return new GL(t,e,s,n)}async function zB(t,e){const s=_e(t);return await s.persistence.runTransaction("Handle user change","readonly",n=>{let a;return s.mutationQueue.getAllMutationBatches(n).next(o=>(a=o,s.ls(e),s.mutationQueue.getAllMutationBatches(n))).next(o=>{const i=[],l=[];let r=Ye();for(const p of a){i.push(p.batchId);for(const u of p.mutations)r=r.add(u.key)}for(const p of o){l.push(p.batchId);for(const u of p.mutations)r=r.add(u.key)}return s.localDocuments.getDocuments(n,r).next(p=>({hs:p,removedBatchIds:i,addedBatchIds:l}))})})}function zL(t,e){const s=_e(t);return s.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const a=e.batch.keys(),o=s.cs.newChangeBuffer({trackRemovals:!0});return function(l,r,p,u){const d=p.batch,m=d.keys();let f=F.resolve();return m.forEach(P=>{f=f.next(()=>u.getEntry(r,P)).next(_=>{const v=p.docVersions.get(P);Ge(v!==null),_.version.compareTo(v)<0&&(d.applyToRemoteDocument(_,p),_.isValidDocument()&&(_.setReadTime(p.commitVersion),u.addEntry(_)))})}),f.next(()=>l.mutationQueue.removeMutationBatch(r,d))}(s,n,e,o).next(()=>o.apply(n)).next(()=>s.mutationQueue.performConsistencyCheck(n)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let r=Ye();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(r=r.add(l.batch.mutations[p].key));return r}(e))).next(()=>s.localDocuments.getDocuments(n,a))})}function qB(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",s=>e.Ur.getLastRemoteSnapshotVersion(s))}function qL(t,e){const s=_e(t),n=e.snapshotVersion;let a=s.os;return s.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const i=s.cs.newChangeBuffer({trackRemovals:!0});a=s.os;const l=[];e.targetChanges.forEach((u,d)=>{const m=a.get(d);if(!m)return;l.push(s.Ur.removeMatchingKeys(o,u.removedDocuments,d).next(()=>s.Ur.addMatchingKeys(o,u.addedDocuments,d)));let f=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(Mt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,n)),a=a.insert(d,f),function(_,v,L){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,f,u)&&l.push(s.Ur.updateTargetData(o,f))});let r=vn(),p=Ye();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&l.push(s.persistence.referenceDelegate.updateLimboDocument(o,u))}),l.push(FL(o,i,e.documentUpdates).next(u=>{r=u.Ps,p=u.Is})),!n.isEqual(Se.min())){const u=s.Ur.getLastRemoteSnapshotVersion(o).next(d=>s.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(u)}return F.waitFor(l).next(()=>i.apply(o)).next(()=>s.localDocuments.getLocalViewOfDocuments(o,r,p)).next(()=>r)}).then(o=>(s.os=a,o))}function FL(t,e,s){let n=Ye(),a=Ye();return s.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let i=vn();return s.forEach((l,r)=>{const p=o.get(l);r.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(l)),r.isNoDocument()&&r.version.isEqual(Se.min())?(e.removeEntry(l,r.readTime),i=i.insert(l,r)):!p.isValidDocument()||r.version.compareTo(p.version)>0||r.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(r),i=i.insert(l,r)):ue("LocalStore","Ignoring outdated watch update for ",l,". Current version:",p.version," Watch version:",r.version)}),{Ps:i,Is:a}})}function JL(t,e){const s=_e(t);return s.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),s.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function $L(t,e){const s=_e(t);return s.persistence.runTransaction("Allocate target","readwrite",n=>{let a;return s.Ur.getTargetData(n,e).next(o=>o?(a=o,F.resolve(a)):s.Ur.allocateTargetId(n).next(i=>(a=new Xn(e,i,"TargetPurposeListen",n.currentSequenceNumber),s.Ur.addTargetData(n,a).next(()=>a))))}).then(n=>{const a=s.os.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(s.os=s.os.insert(n.targetId,n),s._s.set(e,n.targetId)),n})}async function Eh(t,e,s){const n=_e(t),a=n.os.get(e),o=s?"readwrite":"readwrite-primary";try{s||await n.persistence.runTransaction("Release target",o,i=>n.persistence.referenceDelegate.removeTarget(i,a))}catch(i){if(!tr(i))throw i;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${i}`)}n.os=n.os.remove(e),n._s.delete(a.target)}function rP(t,e,s){const n=_e(t);let a=Se.min(),o=Ye();return n.persistence.runTransaction("Execute query","readwrite",i=>function(r,p,u){const d=_e(r),m=d._s.get(u);return m!==void 0?F.resolve(d.os.get(m)):d.Ur.getTargetData(p,u)}(n,i,Xs(e)).next(l=>{if(l)return a=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(i,l.targetId).next(r=>{o=r})}).next(()=>n.ss.getDocumentsMatchingQuery(i,e,s?a:Se.min(),s?o:Ye())).next(l=>(WL(n,QY(e),l),{documents:l,Ts:o})))}function WL(t,e,s){let n=t.us.get(e)||Se.min();s.forEach((a,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class cP{constructor(){this.activeTargetIds=qY()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZL{constructor(){this.so=new cP,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,s,n){}addLocalQueryTarget(e,s=!0){return s&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,s,n){this.oo[e]=s}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cP,Promise.resolve()}handleUserChange(e,s,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr=null;function rd(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class sM extends class{constructor(s){this.databaseInfo=s,this.databaseId=s.databaseId;const n=s.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+s.host,this.vo=`projects/${a}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${o}`}get Fo(){return!1}Mo(s,n,a,o,i){const l=rd(),r=this.xo(s,n.toUriEncodedString());ue("RestConnection",`Sending RPC '${s}' ${l}:`,r,a);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,o,i),this.No(s,r,p,a).then(u=>(ue("RestConnection",`Received RPC '${s}' ${l}: `,u),u),u=>{throw Jo("RestConnection",`RPC '${s}' ${l} failed with error: `,u,"url: ",r,"request:",a),u})}Lo(s,n,a,o,i,l){return this.Mo(s,n,a,o,i)}Oo(s,n,a){s["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pi}(),s["Content-Type"]="text/plain",this.databaseInfo.appId&&(s["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,i)=>s[i]=o),a&&a.headers.forEach((o,i)=>s[i]=o)}xo(s,n){const a=eM[s];return`${this.Do}/v1/${n}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,s,n,a){const o=rd();return new Promise((i,l)=>{const r=new lB;r.setWithCredentials(!0),r.listenOnce(rB.COMPLETE,()=>{try{switch(r.getLastErrorCode()){case hc.NO_ERROR:const u=r.getResponseJson();ue(bt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(u)),i(u);break;case hc.TIMEOUT:ue(bt,`RPC '${e}' ${o} timed out`),l(new re(G.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const d=r.getStatus();if(ue(bt,`RPC '${e}' ${o} failed with status:`,d,"response text:",r.getResponseText()),d>0){let m=r.getResponseJson();Array.isArray(m)&&(m=m[0]);const f=m==null?void 0:m.error;if(f&&f.status&&f.message){const P=function(v){const L=v.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(L)>=0?L:G.UNKNOWN}(f.status);l(new re(P,f.message))}else l(new re(G.UNKNOWN,"Server responded with status "+r.getStatus()))}else l(new re(G.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{ue(bt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(a);ue(bt,`RPC '${e}' ${o} sending request:`,a),r.send(s,"POST",p,n,15)})}Bo(e,s,n){const a=rd(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=uB(),l=pB(),r={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(r.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(r.useFetchStreams=!0),this.Oo(r.initMessageHeaders,s,n),r.encodeInitMessageHeaders=!0;const u=o.join("");ue(bt,`Creating RPC '${e}' stream ${a}: ${u}`,r);const d=i.createWebChannel(u,r);let m=!1,f=!1;const P=new tM({Io:v=>{f?ue(bt,`Not sending because RPC '${e}' stream ${a} is closed:`,v):(m||(ue(bt,`Opening RPC '${e}' stream ${a} transport.`),d.open(),m=!0),ue(bt,`RPC '${e}' stream ${a} sending:`,v),d.send(v))},To:()=>d.close()}),_=(v,L,x)=>{v.listen(L,Y=>{try{x(Y)}catch(K){setTimeout(()=>{throw K},0)}})};return _(d,Fi.EventType.OPEN,()=>{f||(ue(bt,`RPC '${e}' stream ${a} transport opened.`),P.yo())}),_(d,Fi.EventType.CLOSE,()=>{f||(f=!0,ue(bt,`RPC '${e}' stream ${a} transport closed`),P.So())}),_(d,Fi.EventType.ERROR,v=>{f||(f=!0,Jo(bt,`RPC '${e}' stream ${a} transport errored:`,v),P.So(new re(G.UNAVAILABLE,"The operation could not be completed")))}),_(d,Fi.EventType.MESSAGE,v=>{var L;if(!f){const x=v.data[0];Ge(!!x);const Y=x,K=Y.error||((L=Y[0])===null||L===void 0?void 0:L.error);if(K){ue(bt,`RPC '${e}' stream ${a} received error:`,K);const A=K.status;let R=function(T){const E=ft[T];if(E!==void 0)return AB(E)}(A),S=K.message;R===void 0&&(R=G.INTERNAL,S="Unknown error status: "+A+" with message "+K.message),f=!0,P.So(new re(R,S)),d.close()}else ue(bt,`RPC '${e}' stream ${a} received:`,x),P.bo(x)}}),_(l,cB.STAT_EVENT,v=>{v.stat===uh.PROXY?ue(bt,`RPC '${e}' stream ${a} detected buffering proxy`):v.stat===uh.NOPROXY&&ue(bt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function cd(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){return new dL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{constructor(e,s,n=1e3,a=1.5,o=6e4){this.ui=e,this.timerId=s,this.ko=n,this.qo=a,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const s=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),a=Math.max(0,s-n);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${s} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,a,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e,s,n,a,o,i,l,r){this.ui=e,this.Ho=n,this.Jo=a,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=l,this.listener=r,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FB(e,s)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,s){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():s&&s.code===G.RESOURCE_EXHAUSTED?(Vn(s.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):s&&s.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(s)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),s=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,a])=>{this.Yo===s&&this.P_(n,a)},n=>{e(()=>{const a=new re(G.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(a)})})}P_(e,s){const n=this.h_(this.Yo);this.stream=this.T_(e,s),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(a=>{n(()=>this.I_(a))}),this.stream.onMessage(a=>{n(()=>++this.e_==1?this.E_(a):this.onNext(a))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return s=>{this.ui.enqueueAndForget(()=>this.Yo===e?s():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nM extends JB{constructor(e,s,n,a,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",s,n,a,i),this.serializer=o}T_(e,s){return this.connection.Bo("Listen",e,s)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const s=gL(this.serializer,e),n=function(o){if(!("targetChange"in o))return Se.min();const i=o.targetChange;return i.targetIds&&i.targetIds.length?Se.min():i.readTime?en(i.readTime):Se.min()}(e);return this.listener.d_(s,n)}A_(e){const s={};s.database=yh(this.serializer),s.addTarget=function(o,i){let l;const r=i.target;if(l=gh(r)?{documents:PL(o,r)}:{query:IL(o,r)._t},l.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){l.resumeToken=bB(o,i.resumeToken);const p=Th(o,i.expectedCount);p!==null&&(l.expectedCount=p)}else if(i.snapshotVersion.compareTo(Se.min())>0){l.readTime=Zc(o,i.snapshotVersion.toTimestamp());const p=Th(o,i.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,e);const n=EL(this.serializer,e);n&&(s.labels=n),this.a_(s)}R_(e){const s={};s.database=yh(this.serializer),s.removeTarget=e,this.a_(s)}}class aM extends JB{constructor(e,s,n,a,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",s,n,a,i),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,s){return this.connection.Bo("Write",e,s)}E_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const s=TL(e.writeResults,e.commitTime),n=en(e.commitTime);return this.listener.g_(n,s)}p_(){const e={};e.database=yh(this.serializer),this.a_(e)}m_(e){const s={streamToken:this.lastStreamToken,writes:e.map(n=>fL(this.serializer,n))};this.a_(s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM extends class{}{constructor(e,s,n,a){super(),this.authCredentials=e,this.appCheckCredentials=s,this.connection=n,this.serializer=a,this.y_=!1}w_(){if(this.y_)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,s,n,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,i])=>this.connection.Mo(e,Ph(s,n),a,o,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(G.UNKNOWN,o.toString())})}Lo(e,s,n,a,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,l])=>this.connection.Lo(e,Ph(s,n),a,i,l,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(G.UNKNOWN,i.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iM{constructor(e,s){this.asyncQueue=e,this.onlineStateHandler=s,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const s=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(s),this.D_=!1):ue("OnlineStateTracker",s)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,s,n,a,o){this.localStore=e,this.datastore=s,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(i=>{n.enqueueAndForget(async()=>{ro(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(r){const p=_e(r);p.L_.add(4),await ar(p),p.q_.set("Unknown"),p.L_.delete(4),await Wp(p)}(this))})}),this.q_=new iM(n,a)}}async function Wp(t){if(ro(t))for(const e of t.B_)await e(!0)}async function ar(t){for(const e of t.B_)await e(!1)}function $B(t,e){const s=_e(t);s.N_.has(e.targetId)||(s.N_.set(e.targetId,e),pg(s)?cg(s):di(s).r_()&&rg(s,e))}function lg(t,e){const s=_e(t),n=di(s);s.N_.delete(e),n.r_()&&WB(s,e),s.N_.size===0&&(n.r_()?n.o_():ro(s)&&s.q_.set("Unknown"))}function rg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const s=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(s)}di(t).A_(e)}function WB(t,e){t.Q_.xe(e),di(t).R_(e)}function cg(t){t.Q_=new rL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.q_.v_()}function pg(t){return ro(t)&&!di(t).n_()&&t.N_.size>0}function ro(t){return _e(t).L_.size===0}function ZB(t){t.Q_=void 0}async function rM(t){t.q_.set("Online")}async function cM(t){t.N_.forEach((e,s)=>{rg(t,e)})}async function pM(t,e){ZB(t),pg(t)?(t.q_.M_(e),cg(t)):t.q_.set("Unknown")}async function uM(t,e,s){if(t.q_.set("Online"),e instanceof DB&&e.state===2&&e.cause)try{await async function(a,o){const i=o.cause;for(const l of o.targetIds)a.N_.has(l)&&(await a.remoteSyncer.rejectListen(l,i),a.N_.delete(l),a.Q_.removeTarget(l))}(t,e)}catch(n){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xc(t,n)}else if(e instanceof fc?t.Q_.Ke(e):e instanceof wB?t.Q_.He(e):t.Q_.We(e),!s.isEqual(Se.min()))try{const n=await qB(t.localStore);s.compareTo(n)>=0&&await function(o,i){const l=o.Q_.rt(i);return l.targetChanges.forEach((r,p)=>{if(r.resumeToken.approximateByteSize()>0){const u=o.N_.get(p);u&&o.N_.set(p,u.withResumeToken(r.resumeToken,i))}}),l.targetMismatches.forEach((r,p)=>{const u=o.N_.get(r);if(!u)return;o.N_.set(r,u.withResumeToken(Mt.EMPTY_BYTE_STRING,u.snapshotVersion)),WB(o,r);const d=new Xn(u.target,r,p,u.sequenceNumber);rg(o,d)}),o.remoteSyncer.applyRemoteEvent(l)}(t,s)}catch(n){ue("RemoteStore","Failed to raise snapshot:",n),await Xc(t,n)}}async function Xc(t,e,s){if(!tr(e))throw e;t.L_.add(1),await ar(t),t.q_.set("Offline"),s||(s=()=>qB(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await s(),t.L_.delete(1),await Wp(t)})}function XB(t,e){return e().catch(s=>Xc(t,s,e))}async function Zp(t){const e=_e(t),s=pa(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dM(e);)try{const a=await JL(e.localStore,n);if(a===null){e.O_.length===0&&s.o_();break}n=a.batchId,hM(e,a)}catch(a){await Xc(e,a)}eN(e)&&tN(e)}function dM(t){return ro(t)&&t.O_.length<10}function hM(t,e){t.O_.push(e);const s=pa(t);s.r_()&&s.V_&&s.m_(e.mutations)}function eN(t){return ro(t)&&!pa(t).n_()&&t.O_.length>0}function tN(t){pa(t).start()}async function mM(t){pa(t).p_()}async function gM(t){const e=pa(t);for(const s of t.O_)e.m_(s.mutations)}async function fM(t,e,s){const n=t.O_.shift(),a=tg.from(n,e,s);await XB(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await Zp(t)}async function TM(t,e){e&&pa(t).V_&&await async function(n,a){if(function(i){return oL(i)&&i!==G.ABORTED}(a.code)){const o=n.O_.shift();pa(n).s_(),await XB(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Zp(n)}}(t,e),eN(t)&&tN(t)}async function uP(t,e){const s=_e(t);s.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const n=ro(s);s.L_.add(3),await ar(s),n&&s.q_.set("Unknown"),await s.remoteSyncer.handleCredentialChange(e),s.L_.delete(3),await Wp(s)}async function PM(t,e){const s=_e(t);e?(s.L_.delete(2),await Wp(s)):e||(s.L_.add(2),await ar(s),s.q_.set("Unknown"))}function di(t){return t.K_||(t.K_=function(s,n,a){const o=_e(s);return o.w_(),new nM(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(t.datastore,t.asyncQueue,{Eo:rM.bind(null,t),Ro:cM.bind(null,t),mo:pM.bind(null,t),d_:uM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),pg(t)?cg(t):t.q_.set("Unknown")):(await t.K_.stop(),ZB(t))})),t.K_}function pa(t){return t.U_||(t.U_=function(s,n,a){const o=_e(s);return o.w_(),new aM(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mM.bind(null,t),mo:TM.bind(null,t),f_:gM.bind(null,t),g_:fM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zp(t)):(await t.U_.stop(),t.O_.length>0&&(ue("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,s,n,a,o){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=n,this.op=a,this.removalCallback=o,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,n,a,o){const i=Date.now()+n,l=new ug(e,s,i,a,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),tr(t))return new re(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.comparator=e?(s,n)=>e(s,n)||me.comparator(s.key,n.key):(s,n)=>me.comparator(s.key,n.key),this.keyedMap=Ji(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const s=this.keyedMap.get(e);return s?this.sortedSet.indexOf(s):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((s,n)=>(e(s),!1))}add(e){const s=this.delete(e.key);return s.copy(s.keyedMap.insert(e.key,e),s.sortedSet.insert(e,null))}delete(e){const s=this.get(e);return s?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(s)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const s=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;s.hasNext();){const a=s.getNext().key,o=n.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(s=>{e.push(s.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,s){const n=new Oo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=s,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.W_=new ct(me.comparator)}track(e){const s=e.doc.key,n=this.W_.get(s);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(s,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(s,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(s,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(s,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(s):e.type===1&&n.type===2?this.W_=this.W_.insert(s,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(s,{type:2,doc:e.doc}):Ne():this.W_=this.W_.insert(s,e)}G_(){const e=[];return this.W_.inorderTraversal((s,n)=>{e.push(n)}),e}}class ei{constructor(e,s,n,a,o,i,l,r,p){this.query=e,this.docs=s,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=l,this.excludesMetadataChanges=r,this.hasCachedResults=p}static fromInitialDocuments(e,s,n,a,o){const i=[];return s.forEach(l=>{i.push({type:0,doc:l})}),new ei(e,s,Oo.emptySet(s),i,n,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Up(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const s=this.docChanges,n=e.docChanges;if(s.length!==n.length)return!1;for(let a=0;a<s.length;a++)if(s[a].type!==n[a].type||!s[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yM{constructor(){this.queries=hP(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(s,n){const a=_e(s),o=a.queries;a.queries=hP(),o.forEach((i,l)=>{for(const r of l.j_)r.onError(n)})})(this,new re(G.ABORTED,"Firestore shutting down"))}}function hP(){return new ui(t=>kB(t),Up)}async function hg(t,e){const s=_e(t);let n=3;const a=e.query;let o=s.queries.get(a);o?!o.H_()&&e.J_()&&(n=2):(o=new IM,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await s.onListen(a,!0);break;case 1:o.z_=await s.onListen(a,!1);break;case 2:await s.onFirstRemoteStoreListen(a)}}catch(i){const l=dg(i,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(l)}s.queries.set(a,o),o.j_.push(e),e.Z_(s.onlineState),o.z_&&e.X_(o.z_)&&gg(s)}async function mg(t,e){const s=_e(t),n=e.query;let a=3;const o=s.queries.get(n);if(o){const i=o.j_.indexOf(e);i>=0&&(o.j_.splice(i,1),o.j_.length===0?a=e.J_()?0:1:!o.H_()&&e.J_()&&(a=2))}switch(a){case 0:return s.queries.delete(n),s.onUnlisten(n,!0);case 1:return s.queries.delete(n),s.onUnlisten(n,!1);case 2:return s.onLastRemoteStoreUnlisten(n);default:return}}function EM(t,e){const s=_e(t);let n=!1;for(const a of e){const o=a.query,i=s.queries.get(o);if(i){for(const l of i.j_)l.X_(a)&&(n=!0);i.z_=a}}n&&gg(s)}function BM(t,e,s){const n=_e(t),a=n.queries.get(e);if(a)for(const o of a.j_)o.onError(s);n.queries.delete(e)}function gg(t){t.Y_.forEach(e=>{e.next()})}var Bh,mP;(mP=Bh||(Bh={})).ea="default",mP.Cache="cache";class fg{constructor(e,s,n){this.query=e,this.ta=s,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new ei(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let s=!1;return this.na?this.ia(e)&&(this.ta.next(e),s=!0):this.sa(e,this.onlineState)&&(this.oa(e),s=!0),this.ra=e,s}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let s=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),s=!0),s}sa(e,s){if(!e.fromCache||!this.J_())return!0;const n=s!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||s==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const s=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!s)&&this.options.includeMetadataChanges===!0}oa(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.key=e}}class nN{constructor(e){this.key=e}}class NM{constructor(e,s){this.query=e,this.Ta=s,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ye(),this.mutatedKeys=Ye(),this.Aa=SB(e),this.Ra=new Oo(this.Aa)}get Va(){return this.Ta}ma(e,s){const n=s?s.fa:new dP,a=s?s.Ra:this.Ra;let o=s?s.mutatedKeys:this.mutatedKeys,i=a,l=!1;const r=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((u,d)=>{const m=a.get(u),f=zp(this.query,d)?d:null,P=!!m&&this.mutatedKeys.has(m.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;m&&f?m.data.isEqual(f.data)?P!==_&&(n.track({type:3,doc:f}),v=!0):this.ga(m,f)||(n.track({type:2,doc:f}),v=!0,(r&&this.Aa(f,r)>0||p&&this.Aa(f,p)<0)&&(l=!0)):!m&&f?(n.track({type:0,doc:f}),v=!0):m&&!f&&(n.track({type:1,doc:m}),v=!0,(r||p)&&(l=!0)),v&&(f?(i=i.add(f),o=_?o.add(u):o.delete(u)):(i=i.delete(u),o=o.delete(u)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const u=this.query.limitType==="F"?i.last():i.first();i=i.delete(u.key),o=o.delete(u.key),n.track({type:1,doc:u})}return{Ra:i,fa:n,ns:l,mutatedKeys:o}}ga(e,s){return e.hasLocalMutations&&s.hasCommittedMutations&&!s.hasLocalMutations}applyChanges(e,s,n,a){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const i=e.fa.G_();i.sort((u,d)=>function(f,P){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne()}};return _(f)-_(P)}(u.type,d.type)||this.Aa(u.doc,d.doc)),this.pa(n),a=a!=null&&a;const l=s&&!a?this.ya():[],r=this.da.size===0&&this.current&&!a?1:0,p=r!==this.Ea;return this.Ea=r,i.length!==0||p?{snapshot:new ei(this.query,e.Ra,o,i,e.mutatedKeys,r===0,p,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dP,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(s=>this.Ta=this.Ta.add(s)),e.modifiedDocuments.forEach(s=>{}),e.removedDocuments.forEach(s=>this.Ta=this.Ta.delete(s)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ye(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const s=[];return e.forEach(n=>{this.da.has(n)||s.push(new nN(n))}),this.da.forEach(n=>{e.has(n)||s.push(new sN(n))}),s}ba(e){this.Ta=e.Ts,this.da=Ye();const s=this.ma(e.documents);return this.applyChanges(s,!0)}Da(){return ei.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kM{constructor(e,s,n){this.query=e,this.targetId=s,this.view=n}}class SM{constructor(e){this.key=e,this.va=!1}}class _M{constructor(e,s,n,a,o,i){this.localStore=e,this.remoteStore=s,this.eventManager=n,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new ui(l=>kB(l),Up),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(me.comparator),this.Na=new Map,this.La=new ag,this.Ba={},this.ka=new Map,this.qa=Xo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function VM(t,e,s=!0){const n=cN(t);let a;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Da()):a=await aN(n,e,s,!0),a}async function vM(t,e){const s=cN(t);await aN(s,e,!0,!1)}async function aN(t,e,s,n){const a=await $L(t.localStore,Xs(e)),o=a.targetId,i=t.sharedClientState.addLocalQueryTarget(o,s);let l;return n&&(l=await xM(t,e,o,i==="current",a.resumeToken)),t.isPrimaryClient&&s&&$B(t.remoteStore,a),l}async function xM(t,e,s,n,a){t.Ka=(d,m,f)=>async function(_,v,L,x){let Y=v.view.ma(L);Y.ns&&(Y=await rP(_.localStore,v.query,!1).then(({documents:S})=>v.view.ma(S,Y)));const K=x&&x.targetChanges.get(v.targetId),A=x&&x.targetMismatches.get(v.targetId)!=null,R=v.view.applyChanges(Y,_.isPrimaryClient,K,A);return fP(_,v.targetId,R.wa),R.snapshot}(t,d,m,f);const o=await rP(t.localStore,e,!0),i=new NM(e,o.Ts),l=i.ma(o.documents),r=nr.createSynthesizedTargetChangeForCurrentChange(s,n&&t.onlineState!=="Offline",a),p=i.applyChanges(l,t.isPrimaryClient,r);fP(t,s,p.wa);const u=new kM(e,s,i);return t.Fa.set(e,u),t.Ma.has(s)?t.Ma.get(s).push(e):t.Ma.set(s,[e]),p.snapshot}async function HM(t,e,s){const n=_e(t),a=n.Fa.get(e),o=n.Ma.get(a.targetId);if(o.length>1)return n.Ma.set(a.targetId,o.filter(i=>!Up(i,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Eh(n.localStore,a.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(a.targetId),s&&lg(n.remoteStore,a.targetId),Nh(n,a.targetId)}).catch(er)):(Nh(n,a.targetId),await Eh(n.localStore,a.targetId,!0))}async function KM(t,e){const s=_e(t),n=s.Fa.get(e),a=s.Ma.get(n.targetId);s.isPrimaryClient&&a.length===1&&(s.sharedClientState.removeLocalQueryTarget(n.targetId),lg(s.remoteStore,n.targetId))}async function YM(t,e,s){const n=bM(t);try{const a=await function(i,l){const r=_e(i),p=lt.now(),u=l.reduce((f,P)=>f.add(P.key),Ye());let d,m;return r.persistence.runTransaction("Locally write mutations","readwrite",f=>{let P=vn(),_=Ye();return r.cs.getEntries(f,u).next(v=>{P=v,P.forEach((L,x)=>{x.isValidDocument()||(_=_.add(L))})}).next(()=>r.localDocuments.getOverlayedDocuments(f,P)).next(v=>{d=v;const L=[];for(const x of l){const Y=eL(x,d.get(x.key).overlayedDocument);Y!=null&&L.push(new ya(x.key,Y,fB(Y.value.mapValue),Bs.exists(!0)))}return r.mutationQueue.addMutationBatch(f,p,L,l)}).next(v=>{m=v;const L=v.applyToLocalDocumentSet(d,_);return r.documentOverlayCache.saveOverlays(f,v.batchId,L)})}).then(()=>({batchId:m.batchId,changes:VB(d)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),function(i,l,r){let p=i.Ba[i.currentUser.toKey()];p||(p=new ct(Re)),p=p.insert(l,r),i.Ba[i.currentUser.toKey()]=p}(n,a.batchId,s),await or(n,a.changes),await Zp(n.remoteStore)}catch(a){const o=dg(a,"Failed to persist write");s.reject(o)}}async function oN(t,e){const s=_e(t);try{const n=await qL(s.localStore,e);e.targetChanges.forEach((a,o)=>{const i=s.Na.get(o);i&&(Ge(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?i.va=!0:a.modifiedDocuments.size>0?Ge(i.va):a.removedDocuments.size>0&&(Ge(i.va),i.va=!1))}),await or(s,n,e)}catch(n){await er(n)}}function gP(t,e,s){const n=_e(t);if(n.isPrimaryClient&&s===0||!n.isPrimaryClient&&s===1){const a=[];n.Fa.forEach((o,i)=>{const l=i.view.Z_(e);l.snapshot&&a.push(l.snapshot)}),function(i,l){const r=_e(i);r.onlineState=l;let p=!1;r.queries.forEach((u,d)=>{for(const m of d.j_)m.Z_(l)&&(p=!0)}),p&&gg(r)}(n.eventManager,e),a.length&&n.Ca.d_(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function LM(t,e,s){const n=_e(t);n.sharedClientState.updateQueryState(e,"rejected",s);const a=n.Na.get(e),o=a&&a.key;if(o){let i=new ct(me.comparator);i=i.insert(o,Gt.newNoDocument(o,Se.min()));const l=Ye().add(o),r=new Jp(Se.min(),new Map,new ct(Re),i,l);await oN(n,r),n.Oa=n.Oa.remove(o),n.Na.delete(e),Tg(n)}else await Eh(n.localStore,e,!1).then(()=>Nh(n,e,s)).catch(er)}async function MM(t,e){const s=_e(t),n=e.batch.batchId;try{const a=await zL(s.localStore,e);lN(s,n,null),iN(s,n),s.sharedClientState.updateMutationState(n,"acknowledged"),await or(s,a)}catch(a){await er(a)}}async function CM(t,e,s){const n=_e(t);try{const a=await function(i,l){const r=_e(i);return r.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let u;return r.mutationQueue.lookupMutationBatch(p,l).next(d=>(Ge(d!==null),u=d.keys(),r.mutationQueue.removeMutationBatch(p,d))).next(()=>r.mutationQueue.performConsistencyCheck(p)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(p,u,l)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,u)).next(()=>r.localDocuments.getDocuments(p,u))})}(n.localStore,e);lN(n,e,s),iN(n,e),n.sharedClientState.updateMutationState(e,"rejected",s),await or(n,a)}catch(a){await er(a)}}function iN(t,e){(t.ka.get(e)||[]).forEach(s=>{s.resolve()}),t.ka.delete(e)}function lN(t,e,s){const n=_e(t);let a=n.Ba[n.currentUser.toKey()];if(a){const o=a.get(e);o&&(s?o.reject(s):o.resolve(),a=a.remove(e)),n.Ba[n.currentUser.toKey()]=a}}function Nh(t,e,s=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),s&&t.Ca.$a(n,s);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||rN(t,n)})}function rN(t,e){t.xa.delete(e.path.canonicalString());const s=t.Oa.get(e);s!==null&&(lg(t.remoteStore,s),t.Oa=t.Oa.remove(e),t.Na.delete(s),Tg(t))}function fP(t,e,s){for(const n of s)n instanceof sN?(t.La.addReference(n.key,e),AM(t,n)):n instanceof nN?(ue("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||rN(t,n.key)):Ne()}function AM(t,e){const s=e.key,n=s.path.canonicalString();t.Oa.get(s)||t.xa.has(n)||(ue("SyncEngine","New document in limbo: "+s),t.xa.add(n),Tg(t))}function Tg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const s=new me(We.fromString(e)),n=t.qa.next();t.Na.set(n,new SM(s)),t.Oa=t.Oa.insert(s,n),$B(t.remoteStore,new Xn(Xs(Gp(s.path)),n,"TargetPurposeLimboResolution",qm.oe))}}async function or(t,e,s){const n=_e(t),a=[],o=[],i=[];n.Fa.isEmpty()||(n.Fa.forEach((l,r)=>{i.push(n.Ka(r,e,s).then(p=>{var u;if((p||s)&&n.isPrimaryClient){const d=p?!p.fromCache:(u=s==null?void 0:s.targetChanges.get(r.targetId))===null||u===void 0?void 0:u.current;n.sharedClientState.updateQueryState(r.targetId,d?"current":"not-current")}if(p){a.push(p);const d=ig.Wi(r.targetId,p);o.push(d)}}))}),await Promise.all(i),n.Ca.d_(a),await async function(r,p){const u=_e(r);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(p,m=>F.forEach(m.$i,f=>u.persistence.referenceDelegate.addReference(d,m.targetId,f)).next(()=>F.forEach(m.Ui,f=>u.persistence.referenceDelegate.removeReference(d,m.targetId,f)))))}catch(d){if(!tr(d))throw d;ue("LocalStore","Failed to update sequence numbers: "+d)}for(const d of p){const m=d.targetId;if(!d.fromCache){const f=u.os.get(m),P=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(P);u.os=u.os.insert(m,_)}}}(n.localStore,o))}async function wM(t,e){const s=_e(t);if(!s.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const n=await zB(s.localStore,e);s.currentUser=e,function(o,i){o.ka.forEach(l=>{l.forEach(r=>{r.reject(new re(G.CANCELLED,i))})}),o.ka.clear()}(s,"'waitForPendingWrites' promise is rejected due to a user change."),s.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await or(s,n.hs)}}function DM(t,e){const s=_e(t),n=s.Na.get(e);if(n&&n.va)return Ye().add(n.key);{let a=Ye();const o=s.Ma.get(e);if(!o)return a;for(const i of o){const l=s.Fa.get(i);a=a.unionWith(l.view.Va)}return a}}function cN(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LM.bind(null,e),e.Ca.d_=EM.bind(null,e.eventManager),e.Ca.$a=BM.bind(null,e.eventManager),e}function bM(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CM.bind(null,e),e}class ep{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$p(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,s){return null}Ha(e,s){return null}za(e){return UL(this.persistence,new jL,e.initialUser,this.serializer)}Ga(e){return new RL(og.Zr,this.serializer)}Wa(e){return new ZL}async terminate(){var e,s;(e=this.gcScheduler)===null||e===void 0||e.stop(),(s=this.indexBackfillerScheduler)===null||s===void 0||s.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ep.provider={build:()=>new ep};class kh{async initialize(e,s){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(s),this.remoteStore=this.createRemoteStore(s),this.eventManager=this.createEventManager(s),this.syncEngine=this.createSyncEngine(s,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gP(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=wM.bind(null,this.syncEngine),await PM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yM}()}createDatastore(e){const s=$p(e.databaseInfo.databaseId),n=function(o){return new sM(o)}(e.databaseInfo);return function(o,i,l,r){return new oM(o,i,l,r)}(e.authCredentials,e.appCheckCredentials,n,s)}createRemoteStore(e){return function(n,a,o,i,l){return new lM(n,a,o,i,l)}(this.localStore,this.datastore,e.asyncQueue,s=>gP(this.syncEngine,s,0),function(){return pP.D()?new pP:new XL}())}createSyncEngine(e,s){return function(a,o,i,l,r,p,u){const d=new _M(a,o,i,l,r,p);return u&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,s)}async terminate(){var e,s;await async function(a){const o=_e(a);ue("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await ar(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(s=this.eventManager)===null||s===void 0||s.terminate()}}kh.provider={build:()=>new kh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,s){setTimeout(()=>{this.muted||e(s)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,s,n,a,o){this.authCredentials=e,this.appCheckCredentials=s,this.asyncQueue=n,this.databaseInfo=a,this.user=Qt.UNAUTHENTICATED,this.clientId=hB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async i=>{ue("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(n,i=>(ue("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){const n=dg(s,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function pd(t,e){t.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const s=t.configuration;await e.initialize(s);let n=s.initialUser;t.setCredentialChangeListener(async a=>{n.isEqual(a)||(await zB(e.localStore,a),n=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function TP(t,e){t.asyncQueue.verifyOperationInProgress();const s=await QM(t);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(s,t.configuration),t.setCredentialChangeListener(n=>uP(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,a)=>uP(e.remoteStore,a)),t._onlineComponents=e}async function QM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!function(a){return a.name==="FirebaseError"?a.code===G.FAILED_PRECONDITION||a.code===G.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(s))throw s;Jo("Error using user provided cache. Falling back to memory cache: "+s),await pd(t,new ep)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await pd(t,new ep);return t._offlineComponents}async function pN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await TP(t,t._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await TP(t,new kh))),t._onlineComponents}function OM(t){return pN(t).then(e=>e.syncEngine)}async function tp(t){const e=await pN(t),s=e.eventManager;return s.onListen=VM.bind(null,e.syncEngine),s.onUnlisten=HM.bind(null,e.syncEngine),s.onFirstRemoteStoreListen=vM.bind(null,e.syncEngine),s.onLastRemoteStoreUnlisten=KM.bind(null,e.syncEngine),s}function jM(t,e,s={}){const n=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(o,i,l,r,p){const u=new Pg({next:m=>{u.Za(),i.enqueueAndForget(()=>mg(o,d));const f=m.docs.has(l);!f&&m.fromCache?p.reject(new re(G.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&m.fromCache&&r&&r.source==="server"?p.reject(new re(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(m)},error:m=>p.reject(m)}),d=new fg(Gp(l.path),u,{includeMetadataChanges:!0,_a:!0});return hg(o,d)}(await tp(t),t.asyncQueue,e,s,n)),n.promise}function GM(t,e,s={}){const n=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(o,i,l,r,p){const u=new Pg({next:m=>{u.Za(),i.enqueueAndForget(()=>mg(o,d)),m.fromCache&&r.source==="server"?p.reject(new re(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(m)},error:m=>p.reject(m)}),d=new fg(l,u,{includeMetadataChanges:!0,_a:!0});return hg(o,d)}(await tp(t),t.asyncQueue,e,s,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e,s){if(!s)throw new re(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UM(t,e,s,n){if(e===!0&&n===!0)throw new re(G.INVALID_ARGUMENT,`${t} and ${s} cannot be used together.`)}function IP(t){if(!me.isDocumentKey(t))throw new re(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yP(t){if(me.isDocumentKey(t))throw new re(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ne()}function as(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Xp(t);throw new re(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return t}function zM(t,e){if(e<=0)throw new re(G.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){var s,n;if(e.host===void 0){if(e.ssl!==void 0)throw new re(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(s=e.ssl)===null||s===void 0||s;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uN((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,a){return n.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ir{constructor(e,s,n,a){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EP({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EP(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cY;switch(n.type){case"firstParty":return new hY(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new re(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const n=PP.get(s);n&&(ue("ComponentProvider","Removing Datastore"),PP.delete(s),n.terminate())}(this),Promise.resolve()}}function qM(t,e,s,n={}){var a;const o=(t=as(t,ir))._getSettings(),i=`${e}:${s}`;if(o.host!=="firestore.googleapis.com"&&o.host!==i&&Jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:i,ssl:!1})),n.mockUserToken){let l,r;if(typeof n.mockUserToken=="string")l=n.mockUserToken,r=Qt.MOCK_USER;else{l=Kx(n.mockUserToken,(a=t._app)===null||a===void 0?void 0:a.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new re(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new Qt(p)}t._authCredentials=new pY(new dB(l,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,s,n){this.converter=s,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new on(this.firestore,e,this._query)}}class Jt{constructor(e,s,n){this.converter=s,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class aa extends on{constructor(e,s,n){super(e,s,Gp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new me(e))}withConverter(e){return new aa(this.firestore,e,this._path)}}function eu(t,e,...s){if(t=mt(t),Ig("collection","path",e),t instanceof ir){const n=We.fromString(e,...s);return yP(n),new aa(t,null,n)}{if(!(t instanceof Jt||t instanceof aa))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(We.fromString(e,...s));return yP(n),new aa(t.firestore,null,n)}}function FR(t,e){if(t=as(t,ir),Ig("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new re(G.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new on(t,null,function(n){return new lo(We.emptyPath(),n)}(e))}function sn(t,e,...s){if(t=mt(t),arguments.length===1&&(e=hB.newId()),Ig("doc","path",e),t instanceof ir){const n=We.fromString(e,...s);return IP(n),new Jt(t,null,new me(n))}{if(!(t instanceof Jt||t instanceof aa))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(We.fromString(e,...s));return IP(n),new Jt(t.firestore,t instanceof aa?t.converter:null,new me(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new FB(this,"async_queue_retry"),this.Vu=()=>{const n=cd();n&&ue("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const s=cd();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const s=cd();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const s=new Bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!tr(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const s=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const a=function(i){let l=i.message||"";return i.stack&&(l=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),l}(n);throw Vn("INTERNAL UNHANDLED ERROR: ",a),n}).then(n=>(this.du=!1,n))));return this.mu=s,s}enqueueAfterDelay(e,s,n){this.fu(),this.Ru.indexOf(e)>-1&&(s=0);const a=ug.createAndSchedule(this,e,s,n,o=>this.yu(o));return this.Tu.push(a),a}fu(){this.Eu&&Ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const s of this.Tu)if(s.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((s,n)=>s.targetTimeMs-n.targetTimeMs);for(const s of this.Tu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const s=this.Tu.indexOf(e);this.Tu.splice(s,1)}}function NP(t){return function(s,n){if(typeof s!="object"||s===null)return!1;const a=s;for(const o of n)if(o in a&&typeof a[o]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends ir{constructor(e,s,n,a){super(e,s,n,a),this.type="firestore",this._queue=new BP,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new BP(e),this._firestoreClient=void 0,await e}}}function dN(t,e){const s=typeof t=="object"?t:bp(),n=typeof t=="string"?t:e||"(default)",a=Dp(s,"firestore").getImmediate({identifier:n});if(!a._initialized){const o=pE("firestore");o&&qM(a,...o)}return a}function tu(t){if(t._terminated)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||FM(t),t._firestoreClient}function FM(t){var e,s,n;const a=t._freezeSettings(),o=function(l,r,p,u){return new _Y(l,r,p,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uN(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,a);t._componentsProvider||((s=a.localCache)===null||s===void 0?void 0:s._offlineComponentProvider)&&((n=a.localCache)===null||n===void 0?void 0:n._onlineComponentProvider)&&(t._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),t._firestoreClient=new RM(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const r=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(r),_online:r}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(Mt.fromBase64String(e))}catch(s){throw new re(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(e){return new ti(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(...e){for(let s=0;s<e.length;++s)if(e[s].length===0)throw new re(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,s){if(!isFinite(e)||e<-90||e>90)throw new re(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(s)||s<-180||s>180)throw new re(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+s);this._lat=e,this._long=s}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this._values=(e||[]).map(s=>s)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,a){if(n.length!==a.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/^__.*__$/;class $M{constructor(e,s,n){this.data=e,this.fieldMask=s,this.fieldTransforms=n}toMutation(e,s){return this.fieldMask!==null?new ya(e,this.data,this.fieldMask,s,this.fieldTransforms):new sr(e,this.data,s,this.fieldTransforms)}}class hN{constructor(e,s,n){this.data=e,this.fieldMask=s,this.fieldTransforms=n}toMutation(e,s){return new ya(e,this.data,this.fieldMask,s,this.fieldTransforms)}}function mN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class Bg{constructor(e,s,n,a,o,i){this.settings=e,this.databaseId=s,this.serializer=n,this.ignoreUndefinedProperties=a,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var s;const n=(s=this.path)===null||s===void 0?void 0:s.child(e),a=this.Fu({path:n,xu:!1});return a.Ou(e),a}Nu(e){var s;const n=(s=this.path)===null||s===void 0?void 0:s.child(e),a=this.Fu({path:n,xu:!1});return a.vu(),a}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sp(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(s=>e.isPrefixOf(s))!==void 0||this.fieldTransforms.find(s=>e.isPrefixOf(s.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mN(this.Cu)&&JM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class WM{constructor(e,s,n){this.databaseId=e,this.ignoreUndefinedProperties=s,this.serializer=n||$p(e)}Qu(e,s,n,a=!1){return new Bg({Cu:e,methodName:s,qu:n,path:Yt.emptyPath(),xu:!1,ku:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function au(t){const e=t._freezeSettings(),s=$p(t._databaseId);return new WM(t._databaseId,!!e.ignoreUndefinedProperties,s)}function gN(t,e,s,n,a,o={}){const i=t.Qu(o.merge||o.mergeFields?2:0,e,s,a);Ng("Data must be an object, but it was:",i,n);const l=fN(n,i);let r,p;if(o.merge)r=new hs(i.fieldMask),p=i.fieldTransforms;else if(o.mergeFields){const u=[];for(const d of o.mergeFields){const m=Sh(e,d,s);if(!i.contains(m))throw new re(G.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);PN(u,m)||u.push(m)}r=new hs(u),p=i.fieldTransforms.filter(d=>r.covers(d.field))}else r=null,p=i.fieldTransforms;return new $M(new ls(l),r,p)}class ou extends yg{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ou}}function ZM(t,e,s,n){const a=t.Qu(1,e,s);Ng("Data must be an object, but it was:",a,n);const o=[],i=ls.empty();io(n,(r,p)=>{const u=kg(e,r,s);p=mt(p);const d=a.Nu(u);if(p instanceof ou)o.push(u);else{const m=lr(p,d);m!=null&&(o.push(u),i.set(u,m))}});const l=new hs(o);return new hN(i,l,a.fieldTransforms)}function XM(t,e,s,n,a,o){const i=t.Qu(1,e,s),l=[Sh(e,n,s)],r=[a];if(o.length%2!=0)throw new re(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(Sh(e,o[m])),r.push(o[m+1]);const p=[],u=ls.empty();for(let m=l.length-1;m>=0;--m)if(!PN(p,l[m])){const f=l[m];let P=r[m];P=mt(P);const _=i.Nu(f);if(P instanceof ou)p.push(f);else{const v=lr(P,_);v!=null&&(p.push(f),u.set(f,v))}}const d=new hs(p);return new hN(u,d,i.fieldTransforms)}function eC(t,e,s,n=!1){return lr(s,t.Qu(n?4:3,e))}function lr(t,e){if(TN(t=mt(t)))return Ng("Unsupported field value:",e,t),fN(t,e);if(t instanceof yg)return function(n,a){if(!mN(a.Cu))throw a.Bu(`${n._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,a){const o=[];let i=0;for(const l of n){let r=lr(l,a.Lu(i));r==null&&(r={nullValue:"NULL_VALUE"}),o.push(r),i++}return{arrayValue:{values:o}}}(t,e)}return function(n,a){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return FY(a.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=lt.fromDate(n);return{timestampValue:Zc(a.serializer,o)}}if(n instanceof lt){const o=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zc(a.serializer,o)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ti)return{bytesValue:bB(a.serializer,n._byteString)};if(n instanceof Jt){const o=a.databaseId,i=n.firestore._databaseId;if(!i.isEqual(o))throw a.Bu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ng(n.firestore._databaseId||a.databaseId,n._key.path)}}if(n instanceof Eg)return function(i,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:i.toArray().map(r=>{if(typeof r!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xm(l.serializer,r)})}}}}}}(n,a);throw a.Bu(`Unsupported field value: ${Xp(n)}`)}(t,e)}function fN(t,e){const s={};return mB(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(t,(n,a)=>{const o=lr(a,e.Mu(n));o!=null&&(s[n]=o)}),{mapValue:{fields:s}}}function TN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof nu||t instanceof ti||t instanceof Jt||t instanceof yg||t instanceof Eg)}function Ng(t,e,s){if(!TN(s)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(s)){const n=Xp(s);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function Sh(t,e,s){if((e=mt(e))instanceof su)return e._internalPath;if(typeof e=="string")return kg(t,e);throw sp("Field path arguments must be of type string or ",t,!1,void 0,s)}const tC=new RegExp("[~\\*/\\[\\]]");function kg(t,e,s){if(e.search(tC)>=0)throw sp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,s);try{return new su(...e.split("."))._internalPath}catch{throw sp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,s)}}function sp(t,e,s,n,a){const o=n&&!n.isEmpty(),i=a!==void 0;let l=`Function ${e}() called with invalid data`;s&&(l+=" (via `toFirestore()`)"),l+=". ";let r="";return(o||i)&&(r+=" (found",o&&(r+=` in field ${n}`),i&&(r+=` in document ${a}`),r+=")"),new re(G.INVALID_ARGUMENT,l+t+r)}function PN(t,e){return t.some(s=>s.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,s,n,a,o){this._firestore=e,this._userDataWriter=s,this._key=n,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const s=this._document.data.field(iu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s)}}}class sC extends IN{data(){return super.data()}}function iu(t,e){return typeof e=="string"?kg(t,e):e instanceof su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sg{}class _g extends Sg{}function ud(t,e,...s){let n=[];e instanceof Sg&&n.push(e),n=n.concat(s),function(o){const i=o.filter(r=>r instanceof Vg).length,l=o.filter(r=>r instanceof lu).length;if(i>1||i>0&&l>0)throw new re(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const a of n)t=a._apply(t);return t}class lu extends _g{constructor(e,s,n){super(),this._field=e,this._op=s,this._value=n,this.type="where"}static _create(e,s,n){return new lu(e,s,n)}_apply(e){const s=this._parse(e);return EN(e._query,s),new on(e.firestore,e.converter,fh(e._query,s))}_parse(e){const s=au(e.firestore);return function(o,i,l,r,p,u,d){let m;if(p.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new re(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){SP(d,u);const f=[];for(const P of d)f.push(kP(r,o,P));m={arrayValue:{values:f}}}else m=kP(r,o,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||SP(d,u),m=eC(l,i,d,u==="in"||u==="not-in");return Tt.create(p,u,m)}(e._query,"where",s,e.firestore._databaseId,this._field,this._op,this._value)}}function nC(t,e,s){const n=e,a=iu("where",t);return lu._create(a,n,s)}class Vg extends Sg{constructor(e,s){super(),this.type=e,this._queryConstraints=s}static _create(e,s){return new Vg(e,s)}_parse(e){const s=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return s.length===1?s[0]:Os.create(s,this._getOperator())}_apply(e){const s=this._parse(e);return s.getFilters().length===0?e:(function(a,o){let i=a;const l=o.getFlattenedFilters();for(const r of l)EN(i,r),i=fh(i,r)}(e._query,s),new on(e.firestore,e.converter,fh(e._query,s)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vg extends _g{constructor(e,s){super(),this._field=e,this._direction=s,this.type="orderBy"}static _create(e,s){return new vg(e,s)}_apply(e){const s=function(a,o,i){if(a.startAt!==null)throw new re(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bl(o,i)}(e._query,this._field,this._direction);return new on(e.firestore,e.converter,function(a,o){const i=a.explicitOrderBy.concat([o]);return new lo(a.path,a.collectionGroup,i,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,s))}}function aC(t,e="asc"){const s=e,n=iu("orderBy",t);return vg._create(n,s)}class xg extends _g{constructor(e,s,n){super(),this.type=e,this._limit=s,this._limitType=n}static _create(e,s,n){return new xg(e,s,n)}_apply(e){return new on(e.firestore,e.converter,Jc(e._query,this._limit,this._limitType))}}function oC(t){return zM("limit",t),xg._create("limit",t,"F")}function kP(t,e,s){if(typeof(s=mt(s))=="string"){if(s==="")throw new re(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NB(e)&&s.indexOf("/")!==-1)throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${s}' contains a '/' character.`);const n=e.path.child(We.fromString(s));if(!me.isDocumentKey(n))throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return U0(t,new me(n))}if(s instanceof Jt)return U0(t,s._key);throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xp(s)}.`)}function SP(t,e){if(!Array.isArray(t)||t.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function EN(t,e){const s=function(a,o){for(const i of a)for(const l of i.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(s!==null)throw s===e.op?new re(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${s.toString()}' filters.`)}class iC{convertValue(e,s="none"){switch($a(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,s);case 5:return e.stringValue;case 6:return this.convertBytes(Ja(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,s);case 11:return this.convertObject(e.mapValue,s);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne()}}convertObject(e,s){return this.convertObjectMap(e.fields,s)}convertObjectMap(e,s="none"){const n={};return io(e,(a,o)=>{n[a]=this.convertValue(o,s)}),n}convertVectorValue(e){var s,n,a;const o=(a=(n=(s=e.fields)===null||s===void 0?void 0:s.value.arrayValue)===null||n===void 0?void 0:n.values)===null||a===void 0?void 0:a.map(i=>dt(i.doubleValue));return new Eg(o)}convertGeoPoint(e){return new nu(dt(e.latitude),dt(e.longitude))}convertArray(e,s){return(e.values||[]).map(n=>this.convertValue(n,s))}convertServerTimestamp(e,s){switch(s){case"previous":const n=Jm(e);return n==null?null:this.convertValue(n,s);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const s=ca(e);return new lt(s.seconds,s.nanos)}convertDocumentKey(e,s){const n=We.fromString(e);Ge(UB(n));const a=new wl(n.get(1),n.get(3)),o=new me(n.popFirst(5));return a.isEqual(s)||Vn(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${s.projectId}/${s.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,s){let n;return n=t?s&&(s.merge||s.mergeFields)?t.toFirestore(e,s):t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,s){this.hasPendingWrites=e,this.fromCache=s}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NN extends IN{constructor(e,s,n,a,o,i){super(e,s,n,a,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const s=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(s,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,s={}){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,s.serverTimestamps)}}}class Tc extends NN{data(e={}){return super.data(e)}}class kN{constructor(e,s,n,a){this._firestore=e,this._userDataWriter=s,this._snapshot=a,this.metadata=new Wi(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach(s=>e.push(s)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,s){this._snapshot.docs.forEach(n=>{e.call(s,new Tc(this._firestore,this._userDataWriter,n.key,n,new Wi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const s=!!e.includeMetadataChanges;if(s&&this._snapshot.excludesMetadataChanges)throw new re(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===s||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let i=0;return a._snapshot.docChanges.map(l=>{const r=new Tc(a._firestore,a._userDataWriter,l.doc.key,l.doc,new Wi(a._snapshot.mutatedKeys.has(l.doc.key),a._snapshot.fromCache),a.query.converter);return l.doc,{type:"added",doc:r,oldIndex:-1,newIndex:i++}})}{let i=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const r=new Tc(a._firestore,a._userDataWriter,l.doc.key,l.doc,new Wi(a._snapshot.mutatedKeys.has(l.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,u=-1;return l.type!==0&&(p=i.indexOf(l.doc.key),i=i.delete(l.doc.key)),l.type!==1&&(i=i.add(l.doc),u=i.indexOf(l.doc.key)),{type:lC(l.type),doc:r,oldIndex:p,newIndex:u}})}}(this,s),this._cachedChangesIncludeMetadataChanges=s),this._cachedChanges}}function lC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){t=as(t,Jt);const e=as(t.firestore,xn);return jM(tu(e),t._key).then(s=>_N(e,t,s))}class Hg extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const s=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,s)}}function ru(t){t=as(t,on);const e=as(t.firestore,xn),s=tu(e),n=new Hg(e);return yN(t._query),GM(s,t._query).then(a=>new kN(e,n,t,a))}function SN(t,e,s){t=as(t,Jt);const n=as(t.firestore,xn),a=BN(t.converter,e,s);return cu(n,[gN(au(n),"setDoc",t._key,a,t.converter!==null,s).toMutation(t._key,Bs.none())])}function JR(t,e,s,...n){t=as(t,Jt);const a=as(t.firestore,xn),o=au(a);let i;return i=typeof(e=mt(e))=="string"||e instanceof su?XM(o,"updateDoc",t._key,e,s,n):ZM(o,"updateDoc",t._key,e),cu(a,[i.toMutation(t._key,Bs.exists(!0))])}function $R(t){return cu(as(t.firestore,xn),[new eg(t._key,Bs.none())])}function rC(t,e){const s=as(t.firestore,xn),n=sn(t),a=BN(t.converter,e);return cu(s,[gN(au(t.firestore),"addDoc",n._key,a,t.converter!==null,{}).toMutation(n._key,Bs.exists(!1))]).then(()=>n)}function si(t,...e){var s,n,a;t=mt(t);let o={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||NP(e[i])||(o=e[i],i++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(NP(e[i])){const d=e[i];e[i]=(s=d.next)===null||s===void 0?void 0:s.bind(d),e[i+1]=(n=d.error)===null||n===void 0?void 0:n.bind(d),e[i+2]=(a=d.complete)===null||a===void 0?void 0:a.bind(d)}let r,p,u;if(t instanceof Jt)p=as(t.firestore,xn),u=Gp(t._key.path),r={next:d=>{e[i]&&e[i](_N(p,t,d))},error:e[i+1],complete:e[i+2]};else{const d=as(t,on);p=as(d.firestore,xn),u=d._query;const m=new Hg(p);r={next:f=>{e[i]&&e[i](new kN(p,m,d,f))},error:e[i+1],complete:e[i+2]},yN(t._query)}return function(m,f,P,_){const v=new Pg(_),L=new fg(f,v,P);return m.asyncQueue.enqueueAndForget(async()=>hg(await tp(m),L)),()=>{v.Za(),m.asyncQueue.enqueueAndForget(async()=>mg(await tp(m),L))}}(tu(p),u,l,r)}function cu(t,e){return function(n,a){const o=new Bn;return n.asyncQueue.enqueueAndForget(async()=>YM(await OM(n),a,o)),o.promise}(tu(t),e)}function _N(t,e,s){const n=s.docs.get(e._key),a=new Hg(t);return new NN(t,a,e._key,n,new Wi(s.hasPendingWrites,s.fromCache),e.converter)}(function(e,s=!0){(function(a){pi=a})(Ta),Rs(new ks("firestore",(n,{instanceIdentifier:a,options:o})=>{const i=n.getProvider("app").getImmediate(),l=new xn(new uY(n.getProvider("auth-internal")),new gY(n.getProvider("app-check-internal")),function(p,u){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new re(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(p.options.projectId,u)}(i,a),i);return o=Object.assign({useFetchStreams:s},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ns(R0,"4.7.3",e),ns(R0,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,s,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||e.get().then(a=>this.auth=a,()=>{}),this.messaging||s.get().then(a=>this.messaging=a,()=>{}),this.appCheck||n.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const s=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return s.error?null:s.token}return null}async getContext(e){const s=await this.getAuthToken(),n=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:s,messagingToken:n,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="us-central1";class pC{constructor(e,s,n,a,o=_h,i){this.app=e,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new cC(s,n,a),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(o);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=_h}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const s=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${s}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${s}.cloudfunctions.net/${e}`}}function uC(t,e,s){t.emulatorOrigin=`http://${e}:${s}`}const _P="@firebase/functions",VP="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="auth-internal",hC="app-check-internal",mC="messaging-internal";function gC(t,e){const s=(n,{instanceIdentifier:a})=>{const o=n.getProvider("app").getImmediate(),i=n.getProvider(dC),l=n.getProvider(mC),r=n.getProvider(hC);return new pC(o,i,l,r,a,t)};Rs(new ks(VN,s,"PUBLIC").setMultipleInstances(!0)),ns(_P,VP,e),ns(_P,VP,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t=bp(),e=_h){const n=Dp(mt(t),VN).getImmediate({identifier:e}),a=pE("functions");return a&&TC(n,...a),n}function TC(t,e,s){uC(mt(t),e,s)}gC(fetch.bind(self));const PC={apiKey:"AIzaSyC9o-3l0G4_fi05xCuqAuj2qAk9Xp4gXdw",authDomain:"generate-ai-docs.firebaseapp.com",databaseURL:"https://generate-ai-docs-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"generate-ai-docs",storageBucket:"generate-ai-docs.appspot.com",messagingSenderId:"946100770332",appId:"1:946100770332:web:4286d2cd38893d4121f1d9",measurementId:"G-F3ZFBGL649"},Kg=IE(PC),js=dN(Kg),WR=fC(Kg),ZR=oY(Kg),vN=async t=>{if(!t)throw console.error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng h\u1EE3p l\u1EC7."),new Error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");try{const e=sn(js,t),s=await rr(e);return s.exists()?{id:s.id,...s.data()}:(console.log(`Kh\xF4ng t\xECm th\u1EA5y document t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn: ${t}`),null)}catch(e){throw console.error(`L\u1ED7i khi l\u1EA5y document t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn ${t}:`,e),new Error(`Kh\xF4ng th\u1EC3 l\u1EA5y document: ${e.message}`)}},pu=async(t,e={})=>{const{sortField:s=null,limitCount:n=10,filters:a={}}=e;if(!t)throw console.error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng h\u1EE3p l\u1EC7."),new Error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");if(typeof n!="number"||n<=0)throw console.error("Limit ph\u1EA3i l\xE0 m\u1ED9t s\u1ED1 d\u01B0\u01A1ng."),new Error("Limit ph\u1EA3i l\xE0 m\u1ED9t s\u1ED1 d\u01B0\u01A1ng.");try{let i=eu(js,t);for(const[r,p]of Object.entries(a))i=ud(i,nC(r,"==",p));return s&&(i=ud(i,aC(s,"desc"))),i=ud(i,oC(n)),(await ru(i)).docs.map(r=>({id:r.id,...r.data()}))}catch(o){throw console.error("Error getting documents:",o),o}},uu=async(t,e,s)=>{if(!t)throw console.error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng h\u1EE3p l\u1EC7."),new Error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");if(!e||typeof e!="object")throw console.error("D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7."),new Error("D\u1EEF li\u1EC7u ph\u1EA3i l\xE0 m\u1ED9t object.");try{const n=eu(js,...t.split("/"));if(s)return await SN(sn(n,s),e),console.log("Document added with name: ",s),s;{const a=await rC(n,e);return console.log("Document added with ID: ",a.id),a.id}}catch(n){throw console.error("L\u1ED7i khi th\xEAm document v\xE0o subcollection:",n),new Error(`Kh\xF4ng th\u1EC3 th\xEAm document v\xE0o subcollection: ${n.message}`)}},xN=async(t,e,s={})=>{if(!t)throw console.error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng h\u1EE3p l\u1EC7."),new Error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");if(!e||typeof e!="object")throw console.error("D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7."),new Error("D\u1EEF li\u1EC7u ph\u1EA3i l\xE0 m\u1ED9t object.");try{const n=sn(js,...t.split("/"));await SN(n,e,{merge:!0,...s}),console.log(`Document t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn ${t} \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt/t\u1EA1o m\u1EDBi th\xE0nh c\xF4ng.`)}catch(n){throw console.error(`L\u1ED7i khi c\u1EADp nh\u1EADt document t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn ${t}:`,n),n.code==="permission-denied"?new Error(`T\u1EEB ch\u1ED1i quy\u1EC1n truy c\u1EADp: ${n.message}`):new Error(`Kh\xF4ng th\u1EC3 c\u1EADp nh\u1EADt document: ${n.message}`)}},IC=(t,e)=>{if(!t)throw console.error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng h\u1EE3p l\u1EC7."),new Error("\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");if(typeof e!="function")throw console.error("Callback kh\xF4ng h\u1EE3p l\u1EC7."),new Error("Callback ph\u1EA3i l\xE0 m\u1ED9t h\xE0m.");const s=sn(js,t);return si(s,a=>{a.exists()?e({id:a.id,...a.data()}):(console.log(`Document t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn ${t} kh\xF4ng t\u1ED3n t\u1EA1i.`),e(null))},a=>{console.error("L\u1ED7i khi l\u1EAFng nghe document:",a)})},gl=()=>lt.now(),yC=t=>{if(typeof t!="number")throw console.error("epochTime ph\u1EA3i l\xE0 m\u1ED9t s\u1ED1."),new Error("epochTime ph\u1EA3i l\xE0 m\u1ED9t s\u1ED1.");return lt.fromMillis(t)},EC=t=>{const[e,s,n]=t.split("/").map(Number),a=new Date(n,s-1,e);return lt.fromDate(a)},HN=t=>{const e={...t};for(const s in e){const n=e[s];typeof n=="object"&&n!==null?e[s]=HN(n):(s.toLowerCase().includes("time")||s.toLowerCase().includes("timestamp"))&&(typeof n=="string"&&/^\d{2}\/\d{2}\/\d{4}$/.test(n)?e[s]=EC(n):typeof n=="number"&&(e[s]=yC(n)))}return e},XR=async(t,e)=>{try{if(!t||typeof t!="string")throw new Error("CollectionPath ph\u1EA3i l\xE0 m\u1ED9t string h\u1EE3p l\u1EC7");if(!e||typeof e!="object")throw new Error("DemoPackages ph\u1EA3i l\xE0 m\u1ED9t object ho\u1EB7c array h\u1EE3p l\u1EC7");const s=Array.isArray(e)?e:Object.entries(e).map(([n,a])=>({...a,id:n}));s.forEach((n,a)=>{if(!n||typeof n!="object"||Object.keys(n).length===0)throw new Error(`Package t\u1EA1i v\u1ECB tr\xED ${a} kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c r\u1ED7ng`)});for(const n of s){const{id:a,...o}=n,i=a||null;await uu(t,HN(o),i)}return{success:!0,message:`\u0110\xE3 th\xEAm th\xE0nh c\xF4ng ${s.length} packages v\xE0o collection ${t}`}}catch(s){throw console.error("L\u1ED7i khi th\xEAm demo data:",s),s}},BC=async t=>{if(t!=="")try{const e=sn(js,"users",t),s=await rr(e);if(s.exists()){let n=s.data();return console.log(`Fetch user with email: ${n.email}`),n}else return console.log("No such user!"),!1}catch(e){console.error("Error getting subcollections:",e)}},eQ=async()=>{try{console.log("B\u1EAFt \u0111\u1EA7u l\u1EA5y danh s\xE1ch document t\u1EEB collection 'glossary'");const t=eu(js,"glossary"),e=await ru(t);console.log("S\u1ED1 l\u01B0\u1EE3ng documents:",e.size);const s=e.docs.map(n=>({id:n.id,label:n.id}));return console.log("Danh s\xE1ch documents:",s),s}catch(t){throw console.error("L\u1ED7i khi l\u1EA5y danh s\xE1ch document trong glossary: ",t),t}},tQ=async t=>{try{const e=sn(js,"glossary",t),s=await rr(e);if(console.log("docSnap: ",s),s.exists()){const n=s.data();return console.log("data: ",n),n.subcollections||[]}else return[]}catch(e){throw console.error("L\u1ED7i khi l\u1EA5y danh s\xE1ch subcollection: ",e),e}},sQ=async(t,e)=>{try{const s=eu(js,"glossary",t,e),n=await ru(s);return console.log("snapshot: ",n),n.docs.map(a=>{const o=a.data();return{id:a.id,en:o.en||{},vi:o.vi||{}}})}catch(s){throw console.error("L\u1ED7i khi l\u1EA5y c\xE1c term trong subcollection: ",s),s}},Yg=fa("user",{state:()=>({user:null,isReady:!1}),getters:{getRole:t=>t.user?t.user.role:""},actions:{setIsReady(t){this.isReady=t},setUser(t){this.user=t},async fetchUser(t){let e=await BC(t);return e?(this.user=e,e):!1}}});function NC(){const t=Ma(),e=Yg(),s=Ft("auth");if(!s){console.error("Auth instance is not provided. Make sure to inject it properly.");return}const n=xe(null),a=Q(()=>!!n.value);let o=null;return{user:n,signIn:(f,P)=>v0(s,f,P),signOut:()=>x0(s),signUp:(f,P)=>$3(s,f,P),isAuthenticated:a,login:async f=>{try{const _=(await v0(s,f.email,f.password)).user;return t.setAuthenticated(!0),t.setUser(_),!0}catch(P){return console.error("Login error:",P),!1}},logout:async()=>{console.log("Logout function called");try{return console.log("Resetting store states"),t.setAuthenticated(!1),t.setUser(null),e.setUser(null),e.setIsReady(!1),console.log("Calling signOut"),await x0(s),console.log("SignOut completed"),!0}catch(f){return console.error("Logout error:",f),!1}},checkAuth:()=>new Promise(f=>{const P=s.onAuthStateChanged(_=>{P(),_?(t.setAuthenticated(!0),t.setUser(_),f(!0)):(t.setAuthenticated(!1),t.setUser(null),f(!1))})}),initAuthListener:()=>(o&&o(),o=s.onAuthStateChanged(f=>{n.value=f}),()=>{o&&o()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new Map,SC={activated:!1,tokenObservers:[]};function Gs(t){return kC.get(t)||Object.assign({},SC)}const vP={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,s,n,a,o){if(this.operation=e,this.retryPolicy=s,this.getWaitDuration=n,this.lowerBound=a,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=a,a>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Hl,this.pending.promise.catch(s=>{}),await VC(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Hl,this.pending.promise.catch(s=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(s){this.retryPolicy(s)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const s=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),s}}}function VC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},np=new li("appCheck","AppCheck",vC);function KN(t){if(!Gs(t).activated)throw np.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebase-app-check-database",HC=1,Vh="firebase-app-check-store";let Ur=null;function KC(){return Ur||(Ur=new Promise((t,e)=>{try{const s=indexedDB.open(xC,HC);s.onsuccess=n=>{t(n.target.result)},s.onerror=n=>{var a;e(np.create("storage-open",{originalErrorMessage:(a=n.target.error)===null||a===void 0?void 0:a.message}))},s.onupgradeneeded=n=>{const a=n.target.result;switch(n.oldVersion){case 0:a.createObjectStore(Vh,{keyPath:"compositeKey"})}}}catch(s){e(np.create("storage-open",{originalErrorMessage:s==null?void 0:s.message}))}}),Ur)}function YC(t,e){return LC(MC(t),e)}async function LC(t,e){const n=(await KC()).transaction(Vh,"readwrite"),o=n.objectStore(Vh).put({compositeKey:t,value:e});return new Promise((i,l)=>{o.onsuccess=r=>{i()},n.onerror=r=>{var p;l(np.create("storage-set",{originalErrorMessage:(p=r.target.error)===null||p===void 0?void 0:p.message}))}})}function MC(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new Jl("@firebase/app-check");function xP(t,e){return gE()?YC(t,e).catch(s=>{vh.warn(`Failed to write token to IndexedDB. Error: ${s}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={error:"UNKNOWN_ERROR"};function AC(t){return Cp.encodeString(JSON.stringify(t),!1)}async function xh(t,e=!1){const s=t.app;KN(s);const n=Gs(s);let a=n.token,o;if(a&&!Zi(a)&&(n.token=void 0,a=void 0),!a){const r=await n.cachedTokenPromise;r&&(Zi(r)?a=r:await xP(s,void 0))}if(!e&&a&&Zi(a))return{token:a.token};let i=!1;try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally(()=>{n.exchangeTokenPromise=void 0}),i=!0),a=await Gs(s).exchangeTokenPromise}catch(r){r.code==="appCheck/throttled"?vh.warn(r.message):vh.error(r),o=r}let l;return a?o?Zi(a)?l={token:a.token,internalError:o}:l=KP(o):(l={token:a.token},n.token=a,await xP(s,a)):l=KP(o),i&&RC(s,l),l}async function wC(t){const e=t.app;KN(e);const{provider:s}=Gs(e);{const{token:n}=await s.getToken();return{token:n}}}function DC(t,e,s,n){const{app:a}=t,o=Gs(a),i={next:s,error:n,type:e};if(o.tokenObservers=[...o.tokenObservers,i],o.token&&Zi(o.token)){const l=o.token;Promise.resolve().then(()=>{s({token:l.token}),HP(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>HP(t))}function YN(t,e){const s=Gs(t),n=s.tokenObservers.filter(a=>a.next!==e);n.length===0&&s.tokenRefresher&&s.tokenRefresher.isRunning()&&s.tokenRefresher.stop(),s.tokenObservers=n}function HP(t){const{app:e}=t,s=Gs(e);let n=s.tokenRefresher;n||(n=bC(t),s.tokenRefresher=n),!n.isRunning()&&s.isTokenAutoRefreshEnabled&&n.start()}function bC(t){const{app:e}=t;return new _C(async()=>{const s=Gs(e);let n;if(s.token?n=await xh(t,!0):n=await xh(t),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const s=Gs(e);if(s.token){let n=s.token.issuedAtTimeMillis+(s.token.expireTimeMillis-s.token.issuedAtTimeMillis)*.5+3e5;const a=s.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,a),Math.max(0,n-Date.now())}else return 0},vP.RETRIAL_MIN_WAIT,vP.RETRIAL_MAX_WAIT)}function RC(t,e){const s=Gs(t).tokenObservers;for(const n of s)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function Zi(t){return t.expireTimeMillis-Date.now()>0}function KP(t){return{token:AC(CC),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,s){this.app=e,this.heartbeatServiceProvider=s}_delete(){const{tokenObservers:e}=Gs(this.app);for(const s of e)YN(this.app,s.next);return Promise.resolve()}}function OC(t,e){return new QC(t,e)}function jC(t){return{getToken:e=>xh(t,e),getLimitedUseToken:()=>wC(t),addTokenListener:e=>DC(t,"INTERNAL",e),removeTokenListener:e=>YN(t.app,e)}}const GC="@firebase/app-check",UC="0.8.8",zC="app-check",YP="app-check-internal";function qC(){Rs(new ks(zC,t=>{const e=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat");return OC(e,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider(YP).initialize()})),Rs(new ks(YP,t=>{const e=t.getProvider("app-check").getImmediate();return jC(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ns(GC,UC)}qC();const FC=Symbol("firebaseApp");function cr(t){return rt()&&Ft(FC,null)||bp(t)}const Js=()=>{};function Lg(t,e){return e.split(".").reduce((s,n)=>s&&s[n],t)}function JC(t,e,s){const n=(""+e).split("."),a=n.pop(),o=n.reduce((i,l)=>i&&i[l],t);if(o!=null)return Array.isArray(o)?o.splice(Number(a),1,s):o[a]=s}function co(t){return!!t&&typeof t=="object"}const $C=Object.prototype;function WC(t){return co(t)&&Object.getPrototypeOf(t)===$C}function Mg(t){return co(t)&&t.type==="document"}function ZC(t){return co(t)&&t.type==="collection"}function XC(t){return Mg(t)||ZC(t)}function eA(t){return co(t)&&t.type==="query"}function tA(t){return co(t)&&"ref"in t}function sA(t){return co(t)&&typeof t.bucket=="string"}function nA(t,e){let s;return()=>{if(!s)return s=!0,t(e())}}const aA=Symbol.for("v-scx");function oA(){return!!Ft(aA,0)}const zr=new WeakMap;function LN(t,e){if(!zr.has(t)){const s=Bp(!0);zr.set(t,s);const{unmount:n}=e;e.unmount=()=>{n.call(e),s.stop(),zr.delete(t)}}return zr.get(t)}const iA=new WeakMap,qr=new WeakMap;function lA(t){const e=cr(t);if(!qr.has(e)){let s;const a=[new Promise(o=>{s=o}),o=>{qr.set(e,o),s(o.value)}];qr.set(e,a)}return qr.get(e)}function rA(t,e){qE(e,s=>{const n=lA();t.value=s,Array.isArray(n)&&n[1](t)})}const LP="@firebase/database",MP="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MN="";function cA(t){MN=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,s){s==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Kt(s))}get(e){const s=this.domStorage_.getItem(this.prefixedName_(e));return s==null?null:Kl(s)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,s){s==null?delete this.cache_[e]:this.cache_[e]=s}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pA(e)}}catch{}return new uA},Aa=CN("localStorage"),Hh=CN("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Jl("@firebase/database"),dA=function(){let t=1;return function(){return t++}}(),AN=function(t){const e=Fx(t),s=new jx;s.update(e);const n=s.digest();return Cp.encodeByteArray(n)},pr=function(...t){let e="";for(let s=0;s<t.length;s++){const n=t[s];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=pr.apply(null,n):typeof n=="object"?e+=Kt(n):e+=n,e+=" "}return e};let Oa=null,CP=!0;const hA=function(t,e){ae(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(jo.logLevel=Ke.VERBOSE,Oa=jo.log.bind(jo),e&&Hh.set("logging_enabled",!0)):typeof t=="function"?Oa=t:(Oa=null,Hh.remove("logging_enabled"))},Ut=function(...t){if(CP===!0&&(CP=!1,Oa===null&&Hh.get("logging_enabled")===!0&&hA(!0)),Oa){const e=pr.apply(null,t);Oa(e)}},ur=function(t){return function(...e){Ut(t,...e)}},Kh=function(...t){const e="FIREBASE INTERNAL ERROR: "+pr(...t);jo.error(e)},Wa=function(...t){const e=`FIREBASE FATAL ERROR: ${pr(...t)}`;throw jo.error(e),new Error(e)},ms=function(...t){const e="FIREBASE WARNING: "+pr(...t);jo.warn(e)},mA=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ms("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wN=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gA=function(t){if(document.readyState==="complete")t();else{let e=!1;const s=function(){if(!document.body){setTimeout(s,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",s,!1),window.addEventListener("load",s,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&s()}),window.attachEvent("onload",s))}},ni="[MIN_NAME]",Za="[MAX_NAME]",hi=function(t,e){if(t===e)return 0;if(t===ni||e===Za)return-1;if(e===ni||t===Za)return 1;{const s=AP(t),n=AP(e);return s!==null?n!==null?s-n===0?t.length-e.length:s-n:-1:n!==null?1:t<e?-1:1}},fA=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Kt(e))},Cg=function(t){if(typeof t!="object"||t===null)return Kt(t);const e=[];for(const n in t)e.push(n);e.sort();let s="{";for(let n=0;n<e.length;n++)n!==0&&(s+=","),s+=Kt(e[n]),s+=":",s+=Cg(t[e[n]]);return s+="}",s},DN=function(t,e){const s=t.length;if(s<=e)return[t];const n=[];for(let a=0;a<s;a+=e)a+e>s?n.push(t.substring(a,s)):n.push(t.substring(a,a+e));return n};function Ss(t,e){for(const s in t)t.hasOwnProperty(s)&&e(s,t[s])}const bN=function(t){ae(!wN(t),"Invalid JSON number");const e=11,s=52,n=(1<<e-1)-1;let a,o,i,l,r;t===0?(o=0,i=0,a=1/t===-1/0?1:0):(a=t<0,t=Math.abs(t),t>=Math.pow(2,1-n)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),n),o=l+n,i=Math.round(t*Math.pow(2,s-l)-Math.pow(2,s))):(o=0,i=Math.round(t/Math.pow(2,1-n-s))));const p=[];for(r=s;r;r-=1)p.push(i%2?1:0),i=Math.floor(i/2);for(r=e;r;r-=1)p.push(o%2?1:0),o=Math.floor(o/2);p.push(a?1:0),p.reverse();const u=p.join("");let d="";for(r=0;r<64;r+=8){let m=parseInt(u.substr(r,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},TA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},IA=new RegExp("^-?(0*)\\d{1,10}$"),yA=-2147483648,EA=2147483647,AP=function(t){if(IA.test(t)){const e=Number(t);if(e>=yA&&e<=EA)return e}return null},dr=function(t){try{t()}catch(e){setTimeout(()=>{const s=e.stack||"";throw ms("Exception was thrown by user callback.",s),e},Math.floor(0))}},BA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(t,e){const s=setTimeout(t,e);return typeof s=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(s):typeof s=="object"&&s.unref&&s.unref(),s};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,s){this.appName_=e,this.appCheckProvider=s,this.appCheck=s==null?void 0:s.getImmediate({optional:!0}),this.appCheck||s==null||s.get().then(n=>this.appCheck=n)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((s,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(s,n):s(null)},0)})}addTokenChangeListener(e){var s;(s=this.appCheckProvider)===null||s===void 0||s.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){ms(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,s,n){this.appName_=e,this.firebaseOptions_=s,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(s=>s&&s.code==="auth/token-not-initialized"?(Ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(s)):new Promise((s,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(s,n):s(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(s=>s.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(s=>s.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ms(e)}}class Yh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="5",RN="v",QN="s",ON="r",jN="f",GN=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UN="ls",zN="p",Lh="ac",qN="websocket",FN="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,s,n,a,o=!1,i="",l=!1,r=!1){this.secure=s,this.namespace=n,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=i,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=r,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Aa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Aa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",s=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${s}`}}function _A(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function JN(t,e,s){ae(typeof e=="string","typeof type must == string"),ae(typeof s=="object","typeof params must == object");let n;if(e===qN)n=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FN)n=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_A(t)&&(s.ns=t.namespace);const a=[];return Ss(s,(o,i)=>{a.push(o+"="+i)}),n+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.counters_={}}incrementCounter(e,s=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=s}get(){return Sx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={},hd={};function wg(t){const e=t.toString();return dd[e]||(dd[e]=new VA),dd[e]}function vA(t,e){const s=t.toString();return hd[s]||(hd[s]=e()),hd[s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,s){this.closeAfterResponse=e,this.onClose=s,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,s){for(this.pendingResponses[e]=s;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<n.length;++a)n[a]&&dr(()=>{this.onMessage_(n[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="start",HA="close",KA="pLPCommand",YA="pRTLPCB",$N="id",WN="pw",ZN="ser",LA="cb",MA="seg",CA="ts",AA="d",wA="dframe",XN=1870,ek=30,DA=XN-ek,bA=25e3,RA=3e4;class Lo{constructor(e,s,n,a,o,i,l){this.connId=e,this.repoInfo=s,this.applicationId=n,this.appCheckToken=a,this.authToken=o,this.transportSessionId=i,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ur(e),this.stats_=wg(s),this.urlFn=r=>(this.appCheckToken&&(r[Lh]=this.appCheckToken),JN(s,FN,r))}open(e,s){this.curSegmentNum=0,this.onDisconnect_=s,this.myPacketOrderer=new xA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RA)),gA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dg((...o)=>{const[i,l,r,p,u]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===wP)this.id=l,this.password=r;else if(i===HA)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...o)=>{const[i,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(i,l)},()=>{this.onClosed_()},this.urlFn);const n={};n[wP]="t",n[ZN]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[LA]=this.scriptTagHolder.uniqueCallbackIdentifier),n[RN]=Ag,this.transportSessionId&&(n[QN]=this.transportSessionId),this.lastSessionId&&(n[UN]=this.lastSessionId),this.applicationId&&(n[zN]=this.applicationId),this.appCheckToken&&(n[Lh]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&GN.test(location.hostname)&&(n[ON]=jN);const a=this.urlFn(n);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lo.forceAllow_=!0}static forceDisallow(){Lo.forceDisallow_=!0}static isAvailable(){return Lo.forceAllow_?!0:!Lo.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!TA()&&!PA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const s=Kt(e);this.bytesSent+=s.length,this.stats_.incrementCounter("bytes_sent",s.length);const n=lE(s),a=DN(n,DA);for(let o=0;o<a.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[o]),this.curSegmentNum++}addDisconnectPingFrame(e,s){this.myDisconnFrame=document.createElement("iframe");const n={};n[wA]="t",n[$N]=e,n[WN]=s,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const s=Kt(e).length;this.bytesReceived+=s,this.stats_.incrementCounter("bytes_received",s)}}class Dg{constructor(e,s,n,a){this.onDisconnect=n,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dA(),window[KA+this.uniqueCallbackIdentifier]=e,window[YA+this.uniqueCallbackIdentifier]=s,this.myIFrame=Dg.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;o='<script>document.domain="'+l+'";<\/script>'}const i="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(l){Ut("frame writing exception"),l.stack&&Ut(l.stack),Ut(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ut("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,s){for(this.myID=e,this.myPW=s,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$N]=this.myID,e[WN]=this.myPW,e[ZN]=this.currentSerial;let s=this.urlFn(e),n="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ek+n.length<=XN;){const i=this.pendingSegs.shift();n=n+"&"+MA+a+"="+i.seg+"&"+CA+a+"="+i.ts+"&"+AA+a+"="+i.d,a++}return s=s+n,this.addLongPollTag_(s,this.currentSerial),!0}else return!1}enqueueSegment(e,s,n){this.pendingSegs.push({seg:e,ts:s,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,s){this.outstandingRequests.add(s);const n=()=>{this.outstandingRequests.delete(s),this.newRequest_()},a=setTimeout(n,Math.floor(bA)),o=()=>{clearTimeout(a),n()};this.addTag(e,o)}addTag(e,s){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const a=n.readyState;(!a||a==="loaded"||a==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),s())},n.onerror=()=>{Ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=16384,OA=45e3;let ap=null;typeof MozWebSocket!="undefined"?ap=MozWebSocket:typeof WebSocket!="undefined"&&(ap=WebSocket);class Ks{constructor(e,s,n,a,o,i,l){this.connId=e,this.applicationId=n,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ur(this.connId),this.stats_=wg(s),this.connURL=Ks.connectionURL_(s,i,l,a,n),this.nodeAdmin=s.nodeAdmin}static connectionURL_(e,s,n,a,o){const i={};return i[RN]=Ag,typeof location!="undefined"&&location.hostname&&GN.test(location.hostname)&&(i[ON]=jN),s&&(i[QN]=s),n&&(i[UN]=n),a&&(i[Lh]=a),o&&(i[zN]=o),JN(e,qN,i)}open(e,s){this.onDisconnect=s,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Aa.set("previous_websocket_failure",!0);try{let n;mE(),this.mySock=new ap(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const a=n.message||n.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const a=n.message||n.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ks.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const s=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(s);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&ap!==null&&!Ks.forceDisallow_}static previouslyFailed(){return Aa.isInMemoryStorage||Aa.get("previous_websocket_failure")===!0}markConnectionHealthy(){Aa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const s=this.frames.join("");this.frames=null;const n=Kl(s);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const s=Number(e);if(!isNaN(s))return this.handleNewFrameCount_(s),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const s=e.data;if(this.bytesReceived+=s.length,this.stats_.incrementCounter("bytes_received",s.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(s);else{const n=this.extractFrameCount_(s);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const s=Kt(e);this.bytesSent+=s.length,this.stats_.incrementCounter("bytes_sent",s.length);const n=DN(s,QA);n.length>1&&this.sendString_(String(n.length));for(let a=0;a<n.length;a++)this.sendString_(n[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OA))}sendString_(e){try{this.mySock.send(e)}catch(s){this.log_("Exception thrown from WebSocket.send():",s.message||s.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ks.responsesRequiredToBeHealthy=2;Ks.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lo,Ks]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const s=Ks&&Ks.isAvailable();let n=s&&!Ks.previouslyFailed();if(e.webSocketOnly&&(s||ms("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ks];else{const a=this.transports_=[];for(const o of Ol.ALL_TRANSPORTS)o&&o.isAvailable()&&a.push(o);Ol.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ol.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=6e4,GA=5e3,UA=10*1024,zA=100*1024,md="t",DP="d",qA="s",bP="r",FA="e",RP="o",QP="a",OP="n",jP="p",JA="h";class $A{constructor(e,s,n,a,o,i,l,r,p,u){this.id=e,this.repoInfo_=s,this.applicationId_=n,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=i,this.onReady_=l,this.onDisconnect_=r,this.onKill_=p,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ur("c:"+this.id+":"),this.transportManager_=new Ol(s),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const s=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(s,n)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return s=>{e===this.conn_?this.onConnectionLost_(s):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return s=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(s):e===this.secondaryConn_?this.onSecondaryMessageReceived_(s):this.log_("message on old connection"))}}sendRequest(e){const s={t:"d",d:e};this.sendData_(s)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(md in e){const s=e[md];s===QP?this.upgradeIfSecondaryHealthy_():s===bP?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):s===RP&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const s=Ci("t",e),n=Ci("d",e);if(s==="c")this.onSecondaryControl_(n);else if(s==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+s)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jP,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:QP,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:OP,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const s=Ci("t",e),n=Ci("d",e);s==="c"?this.onControl_(n):s==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const s=Ci(md,e);if(DP in e){const n=e[DP];if(s===JA){const a=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(s===OP){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else s===qA?this.onConnectionShutdown_(n):s===bP?this.onReset_(n):s===FA?Kh("Server Error: "+n):s===RP?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kh("Unknown control packet command: "+s)}}onHandshake_(e){const s=e.ts,n=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,s),Ag!==n&&ms("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const s=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(s,n),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,s){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(s,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jP,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Aa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{put(e,s,n,a){}merge(e,s,n,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,s,n){}onDisconnectMerge(e,s,n){}onDisconnectCancel(e,s){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...s){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let a=0;a<n.length;a++)n[a].callback.apply(n[a].context,s)}}on(e,s,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:s,context:n});const a=this.getInitialEvent(e);a&&s.apply(n,a)}off(e,s,n){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let o=0;o<a.length;o++)if(a[o].callback===s&&(!n||n===a[o].context)){a.splice(o,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(s=>s===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends sk{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Mm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new op}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=32,UP=768;class at{constructor(e,s){if(s===void 0){this.pieces_=e.split("/");let n=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[n]=this.pieces_[a],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=s}toString(){let e="";for(let s=this.pieceNum_;s<this.pieces_.length;s++)this.pieces_[s]!==""&&(e+="/"+this.pieces_[s]);return e||"/"}}function qe(){return new at("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ua(t){return t.pieces_.length-t.pieceNum_}function st(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new at(t.pieces_,e)}function nk(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WA(t){let e="";for(let s=t.pieceNum_;s<t.pieces_.length;s++)t.pieces_[s]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[s])));return e||"/"}function ak(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ok(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let s=t.pieceNum_;s<t.pieces_.length-1;s++)e.push(t.pieces_[s]);return new at(e,0)}function _t(t,e){const s=[];for(let n=t.pieceNum_;n<t.pieces_.length;n++)s.push(t.pieces_[n]);if(e instanceof at)for(let n=e.pieceNum_;n<e.pieces_.length;n++)s.push(e.pieces_[n]);else{const n=e.split("/");for(let a=0;a<n.length;a++)n[a].length>0&&s.push(n[a])}return new at(s,0)}function Me(t){return t.pieceNum_>=t.pieces_.length}function ys(t,e){const s=we(t),n=we(e);if(s===null)return e;if(s===n)return ys(st(t),st(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ik(t,e){if(ua(t)!==ua(e))return!1;for(let s=t.pieceNum_,n=e.pieceNum_;s<=t.pieces_.length;s++,n++)if(t.pieces_[s]!==e.pieces_[n])return!1;return!0}function Ys(t,e){let s=t.pieceNum_,n=e.pieceNum_;if(ua(t)>ua(e))return!1;for(;s<t.pieces_.length;){if(t.pieces_[s]!==e.pieces_[n])return!1;++s,++n}return!0}class ZA{constructor(e,s){this.errorPrefix_=s,this.parts_=ak(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=wp(this.parts_[n]);lk(this)}}function XA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wp(e),lk(t)}function ew(t){const e=t.parts_.pop();t.byteLength_-=wp(e),t.parts_.length>0&&(t.byteLength_-=1)}function lk(t){if(t.byteLength_>UP)throw new Error(t.errorPrefix_+"has a key path longer than "+UP+" bytes ("+t.byteLength_+").");if(t.parts_.length>GP)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+GP+") or object contains a cycle "+Ya(t))}function Ya(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends sk{constructor(){super(["visible"]);let e,s;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(s="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(s="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(s="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(s="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,s&&document.addEventListener(s,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}static getInstance(){return new bg}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=1e3,tw=60*5*1e3,zP=30*1e3,sw=1.3,nw=3e4,aw="server_kill",qP=3;class Nn extends tk{constructor(e,s,n,a,o,i,l,r){if(super(),this.repoInfo_=e,this.applicationId_=s,this.onDataUpdate_=n,this.onConnectStatus_=a,this.onServerInfoUpdate_=o,this.authTokenProvider_=i,this.appCheckTokenProvider_=l,this.authOverride_=r,this.id=Nn.nextPersistentConnectionId_++,this.log_=ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ai,this.maxReconnectDelay_=tw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,r&&!mE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&op.getInstance().on("online",this.onOnline_,this)}sendRequest(e,s,n){const a=++this.requestNumber_,o={r:a,a:e,b:s};this.log_(Kt(o)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),n&&(this.requestCBHash_[a]=n)}get(e){this.initConnection_();const s=new Hl,n={p:e._path.toString(),q:e._queryObject},a={action:"g",request:n,onComplete:i=>{const l=i.d;i.s==="ok"?s.resolve(l):s.reject(l)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),s.promise}listen(e,s,n,a){this.initConnection_();const o=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+o),this.listens.has(i)||this.listens.set(i,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(i).has(o),"listen() called twice for same path/queryId.");const l={onComplete:a,hashFn:s,query:e,tag:n};this.listens.get(i).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const s=this.outstandingGets_[e];this.sendRequest("g",s.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),s.onComplete&&s.onComplete(n)})}sendListen_(e){const s=e.query,n=s._path.toString(),a=s._queryIdentifier;this.log_("Listen on "+n+" for "+a);const o={p:n},i="q";e.tag&&(o.q=s._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(i,o,l=>{const r=l.d,p=l.s;Nn.warnOnListenWarnings_(r,s),(this.listens.get(n)&&this.listens.get(n).get(a))===e&&(this.log_("listen response",l),p!=="ok"&&this.removeListen_(n,a),e.onComplete&&e.onComplete(p,r))})}static warnOnListenWarnings_(e,s){if(e&&typeof e=="object"&&Yn(e,"w")){const n=Fo(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const a='".indexOn": "'+s._queryParams.getIndex().toString()+'"',o=s._path.toString();ms(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ox(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zP)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,s=Qx(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(s,n,a=>{const o=a.s,i=a.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const s=e.s,n=e.d||"error";s==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(s,n)})}unlisten(e,s){const n=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+a),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,a)&&this.connected_&&this.sendUnlisten_(n,a,e._queryObject,s)}sendUnlisten_(e,s,n,a){this.log_("Unlisten on "+e+" for "+s);const o={p:e},i="n";a&&(o.q=n,o.t=a),this.sendRequest(i,o)}onDisconnectPut(e,s,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,s,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:s,onComplete:n})}onDisconnectMerge(e,s,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,s,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:s,onComplete:n})}onDisconnectCancel(e,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:s})}sendOnDisconnect_(e,s,n,a){const o={p:s,d:n};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,i=>{a&&setTimeout(()=>{a(i.s,i.d)},Math.floor(0))})}put(e,s,n,a){this.putInternal("p",e,s,n,a)}merge(e,s,n,a){this.putInternal("m",e,s,n,a)}putInternal(e,s,n,a,o){this.initConnection_();const i={p:s,d:n};o!==void 0&&(i.h=o),this.outstandingPuts_.push({action:e,request:i,onComplete:a}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+s)}sendPut_(e){const s=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(s,n,o=>{this.log_(s+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(o.s,o.d)})}reportStats(e){if(this.connected_){const s={c:e};this.log_("reportStats",s),this.sendRequest("s",s,n=>{if(n.s!=="ok"){const o=n.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Kt(e));const s=e.r,n=this.requestCBHash_[s];n&&(delete this.requestCBHash_[s],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,s){this.log_("handleServerMessage",e,s),e==="d"?this.onDataUpdate_(s.p,s.d,!1,s.t):e==="m"?this.onDataUpdate_(s.p,s.d,!0,s.t):e==="c"?this.onListenRevoked_(s.p,s.q):e==="ac"?this.onAuthRevoked_(s.s,s.d):e==="apc"?this.onAppCheckRevoked_(s.s,s.d):e==="sd"?this.onSecurityDebugPacket_(s):Kh("Unrecognized action received from server: "+Kt(e)+`
Are you using the latest client?`)}onReady_(e,s){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=s,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nw&&(this.reconnectDelay_=Ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let s=Math.max(0,this.reconnectDelay_-e);s=Math.random()*s,this.log_("Trying to reconnect in "+s+"ms"),this.scheduleConnect_(s),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),s=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Nn.nextConnectionId_++,o=this.lastSessionId;let i=!1,l=null;const r=function(){l?l.close():(i=!0,n())},p=function(d){ae(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:r,sendRequest:p};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);i?Ut("getToken() completed but was canceled"):(Ut("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,l=new $A(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,s,n,f=>{ms(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(aw)},o))}catch(d){this.log_("Failed to get token: "+d),i||(this.repoInfo_.nodeAdmin&&ms(d),r())}}}interrupt(e){Ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],th(this.interruptReasons_)&&(this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const s=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:s})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const s=this.outstandingPuts_[e];s&&"h"in s.request&&s.queued&&(s.onComplete&&s.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,s){let n;s?n=s.map(o=>Cg(o)).join("$"):n="default";const a=this.removeListen_(e,n);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,s){const n=new at(e).toString();let a;if(this.listens.has(n)){const o=this.listens.get(n);a=o.get(s),o.delete(s),o.size===0&&this.listens.delete(n)}else a=void 0;return a}onAuthRevoked_(e,s){Ut("Auth token revoked: "+e+"/"+s),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qP&&(this.reconnectDelay_=zP,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,s){Ut("App check token revoked: "+e+"/"+s),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qP&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const s of e.values())this.sendListen_(s);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let s="js";e["sdk."+s+"."+MN.replace(/\./g,"-")]=1,Mm()?e["framework.cordova"]=1:hE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=op.getInstance().currentlyOnline();return th(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,s){this.name=e,this.node=s}static Wrap(e,s){return new De(e,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,s){const n=new De(ni,e),a=new De(ni,s);return this.compare(n,a)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;class rk extends du{static get __EMPTY_NODE(){return Fr}static set __EMPTY_NODE(e){Fr=e}compare(e,s){return hi(e.name,s.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,s){return!1}minPost(){return De.MIN}maxPost(){return new De(Za,Fr)}makePost(e,s){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,Fr)}toString(){return".key"}}const Go=new rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,s,n,a,o=null){this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(e=e,i=s?n(e.key,s):1,a&&(i*=-1),i<0)this.isReverse_?e=e.left:e=e.right;else if(i===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),s;if(this.resultGenerator_?s=this.resultGenerator_(e.key,e.value):s={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return s}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class kt{constructor(e,s,n,a,o){this.key=e,this.value=s,this.color=n!=null?n:kt.RED,this.left=a!=null?a:cs.EMPTY_NODE,this.right=o!=null?o:cs.EMPTY_NODE}copy(e,s,n,a,o){return new kt(e!=null?e:this.key,s!=null?s:this.value,n!=null?n:this.color,a!=null?a:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,s,n){let a=this;const o=n(e,a.key);return o<0?a=a.copy(null,null,null,a.left.insert(e,s,n),null):o===0?a=a.copy(null,s,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,s,n)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return cs.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,s){let n,a;if(n=this,s(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,s),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),s(e,n.key)===0){if(n.right.isEmpty())return cs.EMPTY_NODE;a=n.right.min_(),n=n.copy(a.key,a.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,s))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),s=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,s)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}kt.RED=!0;kt.BLACK=!1;class ow{copy(e,s,n,a,o){return this}insert(e,s,n){return new kt(e,s,null)}remove(e,s){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class cs{constructor(e,s=cs.EMPTY_NODE){this.comparator_=e,this.root_=s}insert(e,s){return new cs(this.comparator_,this.root_.insert(e,s,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new cs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let s,n=this.root_;for(;!n.isEmpty();){if(s=this.comparator_(e,n.key),s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}getPredecessorKey(e){let s,n=this.root_,a=null;for(;!n.isEmpty();)if(s=this.comparator_(e,n.key),s===0){if(n.left.isEmpty())return a?a.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else s<0?n=n.left:s>0&&(a=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,s){return new Jr(this.root_,e,this.comparator_,!1,s)}getReverseIteratorFrom(e,s){return new Jr(this.root_,e,this.comparator_,!0,s)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}cs.EMPTY_NODE=new ow;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e){return hi(t.name,e.name)}function Rg(t,e){return hi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh;function lw(t){Mh=t}const ck=function(t){return typeof t=="number"?"number:"+bN(t):"string:"+t},pk=function(t){if(t.isLeafNode()){const e=t.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else ae(t===Mh||t.isEmpty(),"priority of unexpected type.");ae(t===Mh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FP;class Bt{constructor(e,s=Bt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=s,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pk(this.priorityNode_)}static set __childrenNodeConstructor(e){FP=e}static get __childrenNodeConstructor(){return FP}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Me(e)?this:we(e)===".priority"?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,s){return null}updateImmediateChild(e,s){return e===".priority"?this.updatePriority(s):s.isEmpty()&&e!==".priority"?this:Bt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,s).updatePriority(this.priorityNode_)}updateChild(e,s){const n=we(e);return n===null?s:s.isEmpty()&&n!==".priority"?this:(ae(n!==".priority"||ua(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Bt.__childrenNodeConstructor.EMPTY_NODE.updateChild(st(e),s)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,s){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ck(this.priorityNode_.val())+":");const s=typeof this.value_;e+=s+":",s==="number"?e+=bN(this.value_):e+=this.value_,this.lazyHash_=AN(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bt.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const s=typeof e.value_,n=typeof this.value_,a=Bt.VALUE_TYPE_ORDER.indexOf(s),o=Bt.VALUE_TYPE_ORDER.indexOf(n);return ae(a>=0,"Unknown leaf type: "+s),ae(o>=0,"Unknown leaf type: "+n),a===o?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const s=e;return this.value_===s.value_&&this.priorityNode_.equals(s.priorityNode_)}else return!1}}Bt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uk,dk;function rw(t){uk=t}function cw(t){dk=t}class pw extends du{compare(e,s){const n=e.node.getPriority(),a=s.node.getPriority(),o=n.compareTo(a);return o===0?hi(e.name,s.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,s){return!e.getPriority().equals(s.getPriority())}minPost(){return De.MIN}maxPost(){return new De(Za,new Bt("[PRIORITY-POST]",dk))}makePost(e,s){const n=uk(e);return new De(s,new Bt("[PRIORITY-POST]",n))}toString(){return".priority"}}const qt=new pw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=Math.log(2);class dw{constructor(e){const s=o=>parseInt(Math.log(o)/uw,10),n=o=>parseInt(Array(o+1).join("1"),2);this.count=s(e+1),this.current_=this.count-1;const a=n(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ip=function(t,e,s,n){t.sort(e);const a=function(r,p){const u=p-r;let d,m;if(u===0)return null;if(u===1)return d=t[r],m=s?s(d):d,new kt(m,d.node,kt.BLACK,null,null);{const f=parseInt(u/2,10)+r,P=a(r,f),_=a(f+1,p);return d=t[f],m=s?s(d):d,new kt(m,d.node,kt.BLACK,P,_)}},o=function(r){let p=null,u=null,d=t.length;const m=function(P,_){const v=d-P,L=d;d-=P;const x=a(v+1,L),Y=t[v],K=s?s(Y):Y;f(new kt(K,Y.node,_,null,x))},f=function(P){p?(p.left=P,p=P):(u=P,p=P)};for(let P=0;P<r.count;++P){const _=r.nextBitIsOne(),v=Math.pow(2,r.count-(P+1));_?m(v,kt.BLACK):(m(v,kt.BLACK),m(v,kt.RED))}return u},i=new dw(t.length),l=o(i);return new cs(n||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;const Eo={};class In{constructor(e,s){this.indexes_=e,this.indexSet_=s}static get Default(){return ae(Eo&&qt,"ChildrenNode.ts has not been loaded"),gd=gd||new In({".priority":Eo},{".priority":qt}),gd}get(e){const s=Fo(this.indexes_,e);if(!s)throw new Error("No index defined for "+e);return s instanceof cs?s:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,s){ae(e!==Go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let a=!1;const o=s.getIterator(De.Wrap);let i=o.getNext();for(;i;)a=a||e.isDefinedOn(i.node),n.push(i),i=o.getNext();let l;a?l=ip(n,e.getCompare()):l=Eo;const r=e.toString(),p=Object.assign({},this.indexSet_);p[r]=e;const u=Object.assign({},this.indexes_);return u[r]=l,new In(u,p)}addToIndexes(e,s){const n=bc(this.indexes_,(a,o)=>{const i=Fo(this.indexSet_,o);if(ae(i,"Missing index implementation for "+o),a===Eo)if(i.isDefinedOn(e.node)){const l=[],r=s.getIterator(De.Wrap);let p=r.getNext();for(;p;)p.name!==e.name&&l.push(p),p=r.getNext();return l.push(e),ip(l,i.getCompare())}else return Eo;else{const l=s.get(e.name);let r=a;return l&&(r=r.remove(new De(e.name,l))),r.insert(e,e.node)}});return new In(n,this.indexSet_)}removeFromIndexes(e,s){const n=bc(this.indexes_,a=>{if(a===Eo)return a;{const o=s.get(e.name);return o?a.remove(new De(e.name,o)):a}});return new In(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class je{constructor(e,s,n){this.children_=e,this.priorityNode_=s,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&pk(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wi||(wi=new je(new cs(Rg),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const s=this.children_.get(e);return s===null?wi:s}}getChild(e){const s=we(e);return s===null?this:this.getImmediateChild(s).getChild(st(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,s){if(ae(s,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(s);{const n=new De(e,s);let a,o;s.isEmpty()?(a=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(n,this.children_)):(a=this.children_.insert(e,s),o=this.indexMap_.addToIndexes(n,this.children_));const i=a.isEmpty()?wi:this.priorityNode_;return new je(a,i,o)}}updateChild(e,s){const n=we(e);if(n===null)return s;{ae(we(e)!==".priority"||ua(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(n).updateChild(st(e),s);return this.updateImmediateChild(n,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const s={};let n=0,a=0,o=!0;if(this.forEachChild(qt,(i,l)=>{s[i]=l.val(e),n++,o&&je.INTEGER_REGEXP_.test(i)?a=Math.max(a,Number(i)):o=!1}),!e&&o&&a<2*n){const i=[];for(const l in s)i[l]=s[l];return i}else return e&&!this.getPriority().isEmpty()&&(s[".priority"]=this.getPriority().val()),s}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ck(this.getPriority().val())+":"),this.forEachChild(qt,(s,n)=>{const a=n.hash();a!==""&&(e+=":"+s+":"+a)}),this.lazyHash_=e===""?"":AN(e)}return this.lazyHash_}getPredecessorChildName(e,s,n){const a=this.resolveIndex_(n);if(a){const o=a.getPredecessorKey(new De(e,s));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const s=this.resolveIndex_(e);if(s){const n=s.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const s=this.getFirstChildName(e);return s?new De(s,this.children_.get(s)):null}getLastChildName(e){const s=this.resolveIndex_(e);if(s){const n=s.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const s=this.getLastChildName(e);return s?new De(s,this.children_.get(s)):null}forEachChild(e,s){const n=this.resolveIndex_(e);return n?n.inorderTraversal(a=>s(a.name,a.node)):this.children_.inorderTraversal(s)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,s){const n=this.resolveIndex_(s);if(n)return n.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,De.Wrap);let o=a.peek();for(;o!=null&&s.compare(o,e)<0;)a.getNext(),o=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,s){const n=this.resolveIndex_(s);if(n)return n.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let o=a.peek();for(;o!=null&&s.compare(o,e)>0;)a.getNext(),o=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hr?-1:0}withIndex(e){if(e===Go||this.indexMap_.hasIndex(e))return this;{const s=this.indexMap_.addIndex(e,this.children_);return new je(this.children_,this.priorityNode_,s)}}isIndexed(e){return e===Go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const s=e;if(this.getPriority().equals(s.getPriority()))if(this.children_.count()===s.children_.count()){const n=this.getIterator(qt),a=s.getIterator(qt);let o=n.getNext(),i=a.getNext();for(;o&&i;){if(o.name!==i.name||!o.node.equals(i.node))return!1;o=n.getNext(),i=a.getNext()}return o===null&&i===null}else return!1;else return!1}}resolveIndex_(e){return e===Go?null:this.indexMap_.get(e.toString())}}je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hw extends je{constructor(){super(new cs(Rg),je.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return je.EMPTY_NODE}isEmpty(){return!1}}const hr=new hw;Object.defineProperties(De,{MIN:{value:new De(ni,je.EMPTY_NODE)},MAX:{value:new De(Za,hr)}});rk.__EMPTY_NODE=je.EMPTY_NODE;Bt.__childrenNodeConstructor=je;lw(hr);cw(hr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=!0;function zt(t,e=null){if(t===null)return je.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const s=t;return new Bt(s,zt(e))}if(!(t instanceof Array)&&mw){const s=[];let n=!1;if(Ss(t,(i,l)=>{if(i.substring(0,1)!=="."){const r=zt(l);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),s.push(new De(i,r)))}}),s.length===0)return je.EMPTY_NODE;const o=ip(s,iw,i=>i.name,Rg);if(n){const i=ip(s,qt.getCompare());return new je(o,zt(e),new In({".priority":i},{".priority":qt}))}else return new je(o,zt(e),In.Default)}else{let s=je.EMPTY_NODE;return Ss(t,(n,a)=>{if(Yn(t,n)&&n.substring(0,1)!=="."){const o=zt(a);(o.isLeafNode()||!o.isEmpty())&&(s=s.updateImmediateChild(n,o))}}),s.updatePriority(zt(e))}}rw(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw extends du{constructor(e){super(),this.indexPath_=e,ae(!Me(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,s){const n=this.extractChild(e.node),a=this.extractChild(s.node),o=n.compareTo(a);return o===0?hi(e.name,s.name):o}makePost(e,s){const n=zt(e),a=je.EMPTY_NODE.updateChild(this.indexPath_,n);return new De(s,a)}maxPost(){const e=je.EMPTY_NODE.updateChild(this.indexPath_,hr);return new De(Za,e)}toString(){return ak(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw extends du{compare(e,s){const n=e.node.compareTo(s.node);return n===0?hi(e.name,s.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,s){return!e.equals(s)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,s){const n=zt(e);return new De(s,n)}toString(){return".value"}}const Tw=new fw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){return{type:"value",snapshotNode:t}}function Iw(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yw(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function JP(t,e,s){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:s}}function Ew(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ni}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Za}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qt}copy(){const e=new Qg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $P(t){const e={};if(t.isDefault())return e;let s;if(t.index_===qt?s="$priority":t.index_===Tw?s="$value":t.index_===Go?s="$key":(ae(t.index_ instanceof gw,"Unrecognized index type!"),s=t.index_.toString()),e.orderBy=Kt(s),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=Kt(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+Kt(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=Kt(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+Kt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function WP(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let s=t.viewFrom_;s===""&&(t.isViewFromLeft()?s="l":s="r"),e.vf=s}return t.index_!==qt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends tk{constructor(e,s,n,a){super(),this.repoInfo_=e,this.onDataUpdate_=s,this.authTokenProvider_=n,this.appCheckTokenProvider_=a,this.log_=ur("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,s){return s!==void 0?"tag$"+s:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,s,n,a){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const i=lp.getListenId_(e,n),l={};this.listens_[i]=l;const r=$P(e._queryParams);this.restRequest_(o+".json",r,(p,u)=>{let d=u;if(p===404&&(d=null,p=null),p===null&&this.onDataUpdate_(o,d,!1,n),Fo(this.listens_,i)===l){let m;p?p===401?m="permission_denied":m="rest_error:"+p:m="ok",a(m,null)}})}unlisten(e,s){const n=lp.getListenId_(e,s);delete this.listens_[n]}get(e){const s=$P(e._queryParams),n=e._path.toString(),a=new Hl;return this.restRequest_(n+".json",s,(o,i)=>{let l=i;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(n,l,!1,null),a.resolve(l)):a.reject(new Error(l))}),a.promise}refreshAuthToken(e){}restRequest_(e,s={},n){return s.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,o])=>{a&&a.accessToken&&(s.auth=a.accessToken),o&&o.token&&(s.ac=o.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(s);this.log_("Sending REST request for "+i);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(n&&l.readyState===4){this.log_("REST Response for "+i+" received. status:",l.status,"response:",l.responseText);let r=null;if(l.status>=200&&l.status<300){try{r=Kl(l.responseText)}catch{ms("Failed to parse JSON response for "+i+": "+l.responseText)}n(null,r)}else l.status!==401&&l.status!==404&&ms("Got unsuccessful REST response for "+i+" Status: "+l.status),n(l.status);n=null}},l.open("GET",i,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.rootNode_=je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,s){this.rootNode_=this.rootNode_.updateChild(e,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return{value:null,children:new Map}}function hk(t,e,s){if(Me(e))t.value=s,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,s);else{const n=we(e);t.children.has(n)||t.children.set(n,rp());const a=t.children.get(n);e=st(e),hk(a,e,s)}}function Ch(t,e,s){t.value!==null?s(e,t.value):Nw(t,(n,a)=>{const o=new at(e.toString()+"/"+n);Ch(a,o,s)})}function Nw(t,e){t.children.forEach((s,n)=>{e(n,s)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),s=Object.assign({},e);return this.last_&&Ss(this.last_,(n,a)=>{s[n]=s[n]-a}),this.last_=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=10*1e3,Sw=30*1e3,_w=5*60*1e3;class Vw{constructor(e,s){this.server_=s,this.statsToReport_={},this.statsListener_=new kw(e);const n=ZP+(Sw-ZP)*Math.random();fl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),s={};let n=!1;Ss(e,(a,o)=>{o>0&&Yn(this.statsToReport_,a)&&(s[a]=o,n=!0)}),n&&this.server_.reportStats(s),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*_w))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $s;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($s||($s={}));function mk(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gk(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fk(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,s,n){this.path=e,this.affectedTree=s,this.revert=n,this.type=$s.ACK_USER_WRITE,this.source=mk()}operationForChild(e){if(Me(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const s=this.affectedTree.subtree(new at(e));return new cp(qe(),s,this.revert)}}else return ae(we(this.path)===e,"operationForChild called for unrelated child."),new cp(st(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,s,n){this.source=e,this.path=s,this.snap=n,this.type=$s.OVERWRITE}operationForChild(e){return Me(this.path)?new Xa(this.source,qe(),this.snap.getImmediateChild(e)):new Xa(this.source,st(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,s,n){this.source=e,this.path=s,this.children=n,this.type=$s.MERGE}operationForChild(e){if(Me(this.path)){const s=this.children.subtree(new at(e));return s.isEmpty()?null:s.value?new Xa(this.source,qe(),s.value):new jl(this.source,qe(),s)}else return ae(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jl(this.source,st(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,s,n){this.node_=e,this.fullyInitialized_=s,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Me(e))return this.isFullyInitialized()&&!this.filtered_;const s=we(e);return this.isCompleteForChild(s)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function vw(t,e,s,n){const a=[],o=[];return e.forEach(i=>{i.type==="child_changed"&&t.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&o.push(Ew(i.childName,i.snapshotNode))}),Di(t,a,"child_removed",e,n,s),Di(t,a,"child_added",e,n,s),Di(t,a,"child_moved",o,n,s),Di(t,a,"child_changed",e,n,s),Di(t,a,"value",e,n,s),a}function Di(t,e,s,n,a,o){const i=n.filter(l=>l.type===s);i.sort((l,r)=>Hw(t,l,r)),i.forEach(l=>{const r=xw(t,l,o);a.forEach(p=>{p.respondsTo(l.type)&&e.push(p.createEvent(r,t.query_))})})}function xw(t,e,s){return e.type==="value"||e.type==="child_removed"||(e.prevName=s.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hw(t,e,s){if(e.childName==null||s.childName==null)throw ii("Should only compare child_ events.");const n=new De(e.childName,e.snapshotNode),a=new De(s.childName,s.snapshotNode);return t.index_.compare(n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e){return{eventCache:t,serverCache:e}}function Tl(t,e,s,n){return Tk(new Og(e,s,n),t.serverCache)}function Pk(t,e,s,n){return Tk(t.eventCache,new Og(e,s,n))}function Ah(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function eo(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;const Kw=()=>(fd||(fd=new cs(fA)),fd);class tt{constructor(e,s=Kw()){this.value=e,this.children=s}static fromObject(e){let s=new tt(null);return Ss(e,(n,a)=>{s=s.set(new at(n),a)}),s}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,s){if(this.value!=null&&s(this.value))return{path:qe(),value:this.value};if(Me(e))return null;{const n=we(e),a=this.children.get(n);if(a!==null){const o=a.findRootMostMatchingPathAndValue(st(e),s);return o!=null?{path:_t(new at(n),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Me(e))return this;{const s=we(e),n=this.children.get(s);return n!==null?n.subtree(st(e)):new tt(null)}}set(e,s){if(Me(e))return new tt(s,this.children);{const n=we(e),o=(this.children.get(n)||new tt(null)).set(st(e),s),i=this.children.insert(n,o);return new tt(this.value,i)}}remove(e){if(Me(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const s=we(e),n=this.children.get(s);if(n){const a=n.remove(st(e));let o;return a.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,a),this.value===null&&o.isEmpty()?new tt(null):new tt(this.value,o)}else return this}}get(e){if(Me(e))return this.value;{const s=we(e),n=this.children.get(s);return n?n.get(st(e)):null}}setTree(e,s){if(Me(e))return s;{const n=we(e),o=(this.children.get(n)||new tt(null)).setTree(st(e),s);let i;return o.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,o),new tt(this.value,i)}}fold(e){return this.fold_(qe(),e)}fold_(e,s){const n={};return this.children.inorderTraversal((a,o)=>{n[a]=o.fold_(_t(e,a),s)}),s(e,this.value,n)}findOnPath(e,s){return this.findOnPath_(e,qe(),s)}findOnPath_(e,s,n){const a=this.value?n(s,this.value):!1;if(a)return a;if(Me(e))return null;{const o=we(e),i=this.children.get(o);return i?i.findOnPath_(st(e),_t(s,o),n):null}}foreachOnPath(e,s){return this.foreachOnPath_(e,qe(),s)}foreachOnPath_(e,s,n){if(Me(e))return this;{this.value&&n(s,this.value);const a=we(e),o=this.children.get(a);return o?o.foreachOnPath_(st(e),_t(s,a),n):new tt(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,s){this.children.inorderTraversal((n,a)=>{a.foreach_(_t(e,n),s)}),this.value&&s(e,this.value)}foreachChild(e){this.children.inorderTraversal((s,n)=>{n.value&&e(s,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.writeTree_=e}static empty(){return new ws(new tt(null))}}function Pl(t,e,s){if(Me(e))return new ws(new tt(s));{const n=t.writeTree_.findRootMostValueAndPath(e);if(n!=null){const a=n.path;let o=n.value;const i=ys(a,e);return o=o.updateChild(i,s),new ws(t.writeTree_.set(a,o))}else{const a=new tt(s),o=t.writeTree_.setTree(e,a);return new ws(o)}}}function XP(t,e,s){let n=t;return Ss(s,(a,o)=>{n=Pl(n,_t(e,a),o)}),n}function e1(t,e){if(Me(e))return ws.empty();{const s=t.writeTree_.setTree(e,new tt(null));return new ws(s)}}function wh(t,e){return po(t,e)!=null}function po(t,e){const s=t.writeTree_.findRootMostValueAndPath(e);return s!=null?t.writeTree_.get(s.path).getChild(ys(s.path,e)):null}function t1(t){const e=[],s=t.writeTree_.value;return s!=null?s.isLeafNode()||s.forEachChild(qt,(n,a)=>{e.push(new De(n,a))}):t.writeTree_.children.inorderTraversal((n,a)=>{a.value!=null&&e.push(new De(n,a.value))}),e}function oa(t,e){if(Me(e))return t;{const s=po(t,e);return s!=null?new ws(new tt(s)):new ws(t.writeTree_.subtree(e))}}function Dh(t){return t.writeTree_.isEmpty()}function ai(t,e){return Ik(qe(),t.writeTree_,e)}function Ik(t,e,s){if(e.value!=null)return s.updateChild(t,e.value);{let n=null;return e.children.inorderTraversal((a,o)=>{a===".priority"?(ae(o.value!==null,"Priority writes must always be leaf nodes"),n=o.value):s=Ik(_t(t,a),o,s)}),!s.getChild(t).isEmpty()&&n!==null&&(s=s.updateChild(_t(t,".priority"),n)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t,e){return Sk(e,t)}function Yw(t,e,s,n,a){ae(n>t.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),t.allWrites.push({path:e,snap:s,writeId:n,visible:a}),a&&(t.visibleWrites=Pl(t.visibleWrites,e,s)),t.lastWriteId=n}function Lw(t,e){for(let s=0;s<t.allWrites.length;s++){const n=t.allWrites[s];if(n.writeId===e)return n}return null}function Mw(t,e){const s=t.allWrites.findIndex(l=>l.writeId===e);ae(s>=0,"removeWrite called with nonexistent writeId.");const n=t.allWrites[s];t.allWrites.splice(s,1);let a=n.visible,o=!1,i=t.allWrites.length-1;for(;a&&i>=0;){const l=t.allWrites[i];l.visible&&(i>=s&&Cw(l,n.path)?a=!1:Ys(n.path,l.path)&&(o=!0)),i--}if(a){if(o)return Aw(t),!0;if(n.snap)t.visibleWrites=e1(t.visibleWrites,n.path);else{const l=n.children;Ss(l,r=>{t.visibleWrites=e1(t.visibleWrites,_t(n.path,r))})}return!0}else return!1}function Cw(t,e){if(t.snap)return Ys(t.path,e);for(const s in t.children)if(t.children.hasOwnProperty(s)&&Ys(_t(t.path,s),e))return!0;return!1}function Aw(t){t.visibleWrites=Ek(t.allWrites,ww,qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ww(t){return t.visible}function Ek(t,e,s){let n=ws.empty();for(let a=0;a<t.length;++a){const o=t[a];if(e(o)){const i=o.path;let l;if(o.snap)Ys(s,i)?(l=ys(s,i),n=Pl(n,l,o.snap)):Ys(i,s)&&(l=ys(i,s),n=Pl(n,qe(),o.snap.getChild(l)));else if(o.children){if(Ys(s,i))l=ys(s,i),n=XP(n,l,o.children);else if(Ys(i,s))if(l=ys(i,s),Me(l))n=XP(n,qe(),o.children);else{const r=Fo(o.children,we(l));if(r){const p=r.getChild(st(l));n=Pl(n,qe(),p)}}}else throw ii("WriteRecord should have .snap or .children")}}return n}function Bk(t,e,s,n,a){if(!n&&!a){const o=po(t.visibleWrites,e);if(o!=null)return o;{const i=oa(t.visibleWrites,e);if(Dh(i))return s;if(s==null&&!wh(i,qe()))return null;{const l=s||je.EMPTY_NODE;return ai(i,l)}}}else{const o=oa(t.visibleWrites,e);if(!a&&Dh(o))return s;if(!a&&s==null&&!wh(o,qe()))return null;{const i=function(p){return(p.visible||a)&&(!n||!~n.indexOf(p.writeId))&&(Ys(p.path,e)||Ys(e,p.path))},l=Ek(t.allWrites,i,e),r=s||je.EMPTY_NODE;return ai(l,r)}}}function Dw(t,e,s){let n=je.EMPTY_NODE;const a=po(t.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(qt,(o,i)=>{n=n.updateImmediateChild(o,i)}),n;if(s){const o=oa(t.visibleWrites,e);return s.forEachChild(qt,(i,l)=>{const r=ai(oa(o,new at(i)),l);n=n.updateImmediateChild(i,r)}),t1(o).forEach(i=>{n=n.updateImmediateChild(i.name,i.node)}),n}else{const o=oa(t.visibleWrites,e);return t1(o).forEach(i=>{n=n.updateImmediateChild(i.name,i.node)}),n}}function bw(t,e,s,n,a){ae(n||a,"Either existingEventSnap or existingServerSnap must exist");const o=_t(e,s);if(wh(t.visibleWrites,o))return null;{const i=oa(t.visibleWrites,o);return Dh(i)?a.getChild(s):ai(i,a.getChild(s))}}function Rw(t,e,s,n){const a=_t(e,s),o=po(t.visibleWrites,a);if(o!=null)return o;if(n.isCompleteForChild(s)){const i=oa(t.visibleWrites,a);return ai(i,n.getNode().getImmediateChild(s))}else return null}function Qw(t,e){return po(t.visibleWrites,e)}function Ow(t,e,s,n,a,o,i){let l;const r=oa(t.visibleWrites,e),p=po(r,qe());if(p!=null)l=p;else if(s!=null)l=ai(r,s);else return[];if(l=l.withIndex(i),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=i.getCompare(),m=o?l.getReverseIteratorFrom(n,i):l.getIteratorFrom(n,i);let f=m.getNext();for(;f&&u.length<a;)d(f,n)!==0&&u.push(f),f=m.getNext();return u}else return[]}function jw(){return{visibleWrites:ws.empty(),allWrites:[],lastWriteId:-1}}function bh(t,e,s,n){return Bk(t.writeTree,t.treePath,e,s,n)}function Nk(t,e){return Dw(t.writeTree,t.treePath,e)}function s1(t,e,s,n){return bw(t.writeTree,t.treePath,e,s,n)}function pp(t,e){return Qw(t.writeTree,_t(t.treePath,e))}function Gw(t,e,s,n,a,o){return Ow(t.writeTree,t.treePath,e,s,n,a,o)}function jg(t,e,s){return Rw(t.writeTree,t.treePath,e,s)}function kk(t,e){return Sk(_t(t.treePath,e),t.writeTree)}function Sk(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.changeMap=new Map}trackChildChange(e){const s=e.type,n=e.childName;ae(s==="child_added"||s==="child_changed"||s==="child_removed","Only child changes supported for tracking"),ae(n!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(n);if(a){const o=a.type;if(s==="child_added"&&o==="child_removed")this.changeMap.set(n,JP(n,e.snapshotNode,a.snapshotNode));else if(s==="child_removed"&&o==="child_added")this.changeMap.delete(n);else if(s==="child_removed"&&o==="child_changed")this.changeMap.set(n,yw(n,a.oldSnap));else if(s==="child_changed"&&o==="child_added")this.changeMap.set(n,Iw(n,e.snapshotNode));else if(s==="child_changed"&&o==="child_changed")this.changeMap.set(n,JP(n,e.snapshotNode,a.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{getCompleteChild(e){return null}getChildAfterChild(e,s,n){return null}}const _k=new zw;class Gg{constructor(e,s,n=null){this.writes_=e,this.viewCache_=s,this.optCompleteServerCache_=n}getCompleteChild(e){const s=this.viewCache_.eventCache;if(s.isCompleteForChild(e))return s.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Og(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jg(this.writes_,e,n)}}getChildAfterChild(e,s,n){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:eo(this.viewCache_),o=Gw(this.writes_,a,s,1,n,e);return o.length===0?null:o[0]}}function qw(t,e){ae(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fw(t,e,s,n,a){const o=new Uw;let i,l;if(s.type===$s.OVERWRITE){const p=s;p.source.fromUser?i=Rh(t,e,p.path,p.snap,n,a,o):(ae(p.source.fromServer,"Unknown source."),l=p.source.tagged||e.serverCache.isFiltered()&&!Me(p.path),i=up(t,e,p.path,p.snap,n,a,l,o))}else if(s.type===$s.MERGE){const p=s;p.source.fromUser?i=$w(t,e,p.path,p.children,n,a,o):(ae(p.source.fromServer,"Unknown source."),l=p.source.tagged||e.serverCache.isFiltered(),i=Qh(t,e,p.path,p.children,n,a,l,o))}else if(s.type===$s.ACK_USER_WRITE){const p=s;p.revert?i=Xw(t,e,p.path,n,a,o):i=Ww(t,e,p.path,p.affectedTree,n,a,o)}else if(s.type===$s.LISTEN_COMPLETE)i=Zw(t,e,s.path,n,o);else throw ii("Unknown operation type: "+s.type);const r=o.getChanges();return Jw(e,i,r),{viewCache:i,changes:r}}function Jw(t,e,s){const n=e.eventCache;if(n.isFullyInitialized()){const a=n.getNode().isLeafNode()||n.getNode().isEmpty(),o=Ah(t);(s.length>0||!t.eventCache.isFullyInitialized()||a&&!n.getNode().equals(o)||!n.getNode().getPriority().equals(o.getPriority()))&&s.push(Pw(Ah(e)))}}function Vk(t,e,s,n,a,o){const i=e.eventCache;if(pp(n,s)!=null)return e;{let l,r;if(Me(s))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=eo(e),u=p instanceof je?p:je.EMPTY_NODE,d=Nk(n,u);l=t.filter.updateFullNode(e.eventCache.getNode(),d,o)}else{const p=bh(n,eo(e));l=t.filter.updateFullNode(e.eventCache.getNode(),p,o)}else{const p=we(s);if(p===".priority"){ae(ua(s)===1,"Can't have a priority with additional path components");const u=i.getNode();r=e.serverCache.getNode();const d=s1(n,s,u,r);d!=null?l=t.filter.updatePriority(u,d):l=i.getNode()}else{const u=st(s);let d;if(i.isCompleteForChild(p)){r=e.serverCache.getNode();const m=s1(n,s,i.getNode(),r);m!=null?d=i.getNode().getImmediateChild(p).updateChild(u,m):d=i.getNode().getImmediateChild(p)}else d=jg(n,p,e.serverCache);d!=null?l=t.filter.updateChild(i.getNode(),p,d,u,a,o):l=i.getNode()}}return Tl(e,l,i.isFullyInitialized()||Me(s),t.filter.filtersNodes())}}function up(t,e,s,n,a,o,i,l){const r=e.serverCache;let p;const u=i?t.filter:t.filter.getIndexedFilter();if(Me(s))p=u.updateFullNode(r.getNode(),n,null);else if(u.filtersNodes()&&!r.isFiltered()){const f=r.getNode().updateChild(s,n);p=u.updateFullNode(r.getNode(),f,null)}else{const f=we(s);if(!r.isCompleteForPath(s)&&ua(s)>1)return e;const P=st(s),v=r.getNode().getImmediateChild(f).updateChild(P,n);f===".priority"?p=u.updatePriority(r.getNode(),v):p=u.updateChild(r.getNode(),f,v,P,_k,null)}const d=Pk(e,p,r.isFullyInitialized()||Me(s),u.filtersNodes()),m=new Gg(a,d,o);return Vk(t,d,s,a,m,l)}function Rh(t,e,s,n,a,o,i){const l=e.eventCache;let r,p;const u=new Gg(a,e,o);if(Me(s))p=t.filter.updateFullNode(e.eventCache.getNode(),n,i),r=Tl(e,p,!0,t.filter.filtersNodes());else{const d=we(s);if(d===".priority")p=t.filter.updatePriority(e.eventCache.getNode(),n),r=Tl(e,p,l.isFullyInitialized(),l.isFiltered());else{const m=st(s),f=l.getNode().getImmediateChild(d);let P;if(Me(m))P=n;else{const _=u.getCompleteChild(d);_!=null?nk(m)===".priority"&&_.getChild(ok(m)).isEmpty()?P=_:P=_.updateChild(m,n):P=je.EMPTY_NODE}if(f.equals(P))r=e;else{const _=t.filter.updateChild(l.getNode(),d,P,m,u,i);r=Tl(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return r}function n1(t,e){return t.eventCache.isCompleteForChild(e)}function $w(t,e,s,n,a,o,i){let l=e;return n.foreach((r,p)=>{const u=_t(s,r);n1(e,we(u))&&(l=Rh(t,l,u,p,a,o,i))}),n.foreach((r,p)=>{const u=_t(s,r);n1(e,we(u))||(l=Rh(t,l,u,p,a,o,i))}),l}function a1(t,e,s){return s.foreach((n,a)=>{e=e.updateChild(n,a)}),e}function Qh(t,e,s,n,a,o,i,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let r=e,p;Me(s)?p=n:p=new tt(null).setTree(s,n);const u=e.serverCache.getNode();return p.children.inorderTraversal((d,m)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),P=a1(t,f,m);r=up(t,r,new at(d),P,a,o,i,l)}}),p.children.inorderTraversal((d,m)=>{const f=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!u.hasChild(d)&&!f){const P=e.serverCache.getNode().getImmediateChild(d),_=a1(t,P,m);r=up(t,r,new at(d),_,a,o,i,l)}}),r}function Ww(t,e,s,n,a,o,i){if(pp(a,s)!=null)return e;const l=e.serverCache.isFiltered(),r=e.serverCache;if(n.value!=null){if(Me(s)&&r.isFullyInitialized()||r.isCompleteForPath(s))return up(t,e,s,r.getNode().getChild(s),a,o,l,i);if(Me(s)){let p=new tt(null);return r.getNode().forEachChild(Go,(u,d)=>{p=p.set(new at(u),d)}),Qh(t,e,s,p,a,o,l,i)}else return e}else{let p=new tt(null);return n.foreach((u,d)=>{const m=_t(s,u);r.isCompleteForPath(m)&&(p=p.set(u,r.getNode().getChild(m)))}),Qh(t,e,s,p,a,o,l,i)}}function Zw(t,e,s,n,a){const o=e.serverCache,i=Pk(e,o.getNode(),o.isFullyInitialized()||Me(s),o.isFiltered());return Vk(t,i,s,n,_k,a)}function Xw(t,e,s,n,a,o){let i;if(pp(n,s)!=null)return e;{const l=new Gg(n,e,a),r=e.eventCache.getNode();let p;if(Me(s)||we(s)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bh(n,eo(e));else{const d=e.serverCache.getNode();ae(d instanceof je,"serverChildren would be complete if leaf node"),u=Nk(n,d)}u=u,p=t.filter.updateFullNode(r,u,o)}else{const u=we(s);let d=jg(n,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=r.getImmediateChild(u)),d!=null?p=t.filter.updateChild(r,u,d,st(s),l,o):e.eventCache.getNode().hasChild(u)?p=t.filter.updateChild(r,u,je.EMPTY_NODE,st(s),l,o):p=r,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(i=bh(n,eo(e)),i.isLeafNode()&&(p=t.filter.updateFullNode(p,i,o)))}return i=e.serverCache.isFullyInitialized()||pp(n,qe())!=null,Tl(e,p,i,t.filter.filtersNodes())}}function eD(t,e){const s=eo(t.viewCache_);return s&&(t.query._queryParams.loadsAllData()||!Me(e)&&!s.getImmediateChild(we(e)).isEmpty())?s.getChild(e):null}function o1(t,e,s,n){e.type===$s.MERGE&&e.source.queryId!==null&&(ae(eo(t.viewCache_),"We should always have a full cache before handling merges"),ae(Ah(t.viewCache_),"Missing event cache, even though we have a server cache"));const a=t.viewCache_,o=Fw(t.processor_,a,e,s,n);return qw(t.processor_,o.viewCache),ae(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,tD(t,o.changes,o.viewCache.eventCache.getNode(),null)}function tD(t,e,s,n){const a=n?[n]:t.eventRegistrations_;return vw(t.eventGenerator_,e,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i1;function sD(t){ae(!i1,"__referenceConstructor has already been defined"),i1=t}function Ug(t,e,s,n){const a=e.source.queryId;if(a!==null){const o=t.views.get(a);return ae(o!=null,"SyncTree gave us an op for an invalid query."),o1(o,e,s,n)}else{let o=[];for(const i of t.views.values())o=o.concat(o1(i,e,s,n));return o}}function zg(t,e){let s=null;for(const n of t.views.values())s=s||eD(n,e);return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l1;function nD(t){ae(!l1,"__referenceConstructor has already been defined"),l1=t}class r1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=jw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aD(t,e,s,n,a){return Yw(t.pendingWriteTree_,e,s,n,a),a?mu(t,new Xa(mk(),e,s)):[]}function Mo(t,e,s=!1){const n=Lw(t.pendingWriteTree_,e);if(Mw(t.pendingWriteTree_,e)){let o=new tt(null);return n.snap!=null?o=o.set(qe(),!0):Ss(n.children,i=>{o=o.set(new at(i),!0)}),mu(t,new cp(n.path,o,s))}else return[]}function hu(t,e,s){return mu(t,new Xa(gk(),e,s))}function oD(t,e,s){const n=tt.fromObject(s);return mu(t,new jl(gk(),e,n))}function iD(t,e,s,n){const a=Kk(t,n);if(a!=null){const o=Yk(a),i=o.path,l=o.queryId,r=ys(i,e),p=new Xa(fk(l),r,s);return Lk(t,i,p)}else return[]}function lD(t,e,s,n){const a=Kk(t,n);if(a){const o=Yk(a),i=o.path,l=o.queryId,r=ys(i,e),p=tt.fromObject(s),u=new jl(fk(l),r,p);return Lk(t,i,u)}else return[]}function vk(t,e,s){const a=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(i,l)=>{const r=ys(i,e),p=zg(l,r);if(p)return p});return Bk(a,e,o,s,!0)}function mu(t,e){return xk(e,t.syncPointTree_,null,yk(t.pendingWriteTree_,qe()))}function xk(t,e,s,n){if(Me(t.path))return Hk(t,e,s,n);{const a=e.get(qe());s==null&&a!=null&&(s=zg(a,qe()));let o=[];const i=we(t.path),l=t.operationForChild(i),r=e.children.get(i);if(r&&l){const p=s?s.getImmediateChild(i):null,u=kk(n,i);o=o.concat(xk(l,r,p,u))}return a&&(o=o.concat(Ug(a,t,n,s))),o}}function Hk(t,e,s,n){const a=e.get(qe());s==null&&a!=null&&(s=zg(a,qe()));let o=[];return e.children.inorderTraversal((i,l)=>{const r=s?s.getImmediateChild(i):null,p=kk(n,i),u=t.operationForChild(i);u&&(o=o.concat(Hk(u,l,r,p)))}),a&&(o=o.concat(Ug(a,t,n,s))),o}function Kk(t,e){return t.tagToQueryMap.get(e)}function Yk(t){const e=t.indexOf("$");return ae(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new at(t.substr(0,e))}}function Lk(t,e,s){const n=t.syncPointTree_.get(e);ae(n,"Missing sync point for query tag that we're tracking");const a=yk(t.pendingWriteTree_,e);return Ug(n,s,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.node_=e}getImmediateChild(e){const s=this.node_.getImmediateChild(e);return new qg(s)}node(){return this.node_}}class Fg{constructor(e,s){this.syncTree_=e,this.path_=s}getImmediateChild(e){const s=_t(this.path_,e);return new Fg(this.syncTree_,s)}node(){return vk(this.syncTree_,this.path_)}}const rD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},c1=function(t,e,s){if(!t||typeof t!="object")return t;if(ae(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cD(t[".sv"],e,s);if(typeof t[".sv"]=="object")return pD(t[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cD=function(t,e,s){switch(t){case"timestamp":return s.timestamp;default:ae(!1,"Unexpected server value: "+t)}},pD=function(t,e,s){t.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const n=t.increment;typeof n!="number"&&ae(!1,"Unexpected increment value: "+n);const a=e.node();if(ae(a!==null&&typeof a!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return n;const i=a.getValue();return typeof i!="number"?n:i+n},uD=function(t,e,s,n){return Jg(e,new Fg(s,t),n)},dD=function(t,e,s){return Jg(t,new qg(e),s)};function Jg(t,e,s){const n=t.getPriority().val(),a=c1(n,e.getImmediateChild(".priority"),s);let o;if(t.isLeafNode()){const i=t,l=c1(i.getValue(),e,s);return l!==i.getValue()||a!==i.getPriority().val()?new Bt(l,zt(a)):t}else{const i=t;return o=i,a!==i.getPriority().val()&&(o=o.updatePriority(new Bt(a))),i.forEachChild(qt,(l,r)=>{const p=Jg(r,e.getImmediateChild(l),s);p!==r&&(o=o.updateImmediateChild(l,p))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e="",s=null,n={children:{},childCount:0}){this.name=e,this.parent=s,this.node=n}}function Wg(t,e){let s=e instanceof at?e:new at(e),n=t,a=we(s);for(;a!==null;){const o=Fo(n.node.children,a)||{children:{},childCount:0};n=new $g(a,n,o),s=st(s),a=we(s)}return n}function mi(t){return t.node.value}function Mk(t,e){t.node.value=e,Oh(t)}function Ck(t){return t.node.childCount>0}function hD(t){return mi(t)===void 0&&!Ck(t)}function gu(t,e){Ss(t.node.children,(s,n)=>{e(new $g(s,t,n))})}function Ak(t,e,s,n){s&&!n&&e(t),gu(t,a=>{Ak(a,e,!0,n)}),s&&n&&e(t)}function mD(t,e,s){let n=s?t:t.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function mr(t){return new at(t.parent===null?t.name:mr(t.parent)+"/"+t.name)}function Oh(t){t.parent!==null&&gD(t.parent,t.name,t)}function gD(t,e,s){const n=hD(s),a=Yn(t.node.children,e);n&&a?(delete t.node.children[e],t.node.childCount--,Oh(t)):!n&&!a&&(t.node.children[e]=s.node,t.node.childCount++,Oh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=/[\[\].#$\/\u0000-\u001F\u007F]/,TD=/[\[\].#$\u0000-\u001F\u007F]/,Td=10*1024*1024,wk=function(t){return typeof t=="string"&&t.length!==0&&!fD.test(t)},PD=function(t){return typeof t=="string"&&t.length!==0&&!TD.test(t)},ID=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),PD(t)},Dk=function(t,e,s){const n=s instanceof at?new ZA(s,t):s;if(e===void 0)throw new Error(t+"contains undefined "+Ya(n));if(typeof e=="function")throw new Error(t+"contains a function "+Ya(n)+" with contents = "+e.toString());if(wN(e))throw new Error(t+"contains "+e.toString()+" "+Ya(n));if(typeof e=="string"&&e.length>Td/3&&wp(e)>Td)throw new Error(t+"contains a string greater than "+Td+" utf8 bytes "+Ya(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,o=!1;if(Ss(e,(i,l)=>{if(i===".value")a=!0;else if(i!==".priority"&&i!==".sv"&&(o=!0,!wk(i)))throw new Error(t+" contains an invalid key ("+i+") "+Ya(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XA(n,i),Dk(t,l,n),ew(n)}),a&&o)throw new Error(t+' contains ".value" child '+Ya(n)+" in addition to actual children.")}},yD=function(t,e){const s=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||s.length!==0&&!ID(s))throw new Error(qx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BD(t,e){let s=null;for(let n=0;n<e.length;n++){const a=e[n],o=a.getPath();s!==null&&!ik(o,s.path)&&(t.eventLists_.push(s),s=null),s===null&&(s={events:[],path:o}),s.events.push(a)}s&&t.eventLists_.push(s)}function uo(t,e,s){BD(t,s),ND(t,n=>Ys(n,e)||Ys(e,n))}function ND(t,e){t.recursionDepth_++;let s=!0;for(let n=0;n<t.eventLists_.length;n++){const a=t.eventLists_[n];if(a){const o=a.path;e(o)?(kD(t.eventLists_[n]),t.eventLists_[n]=null):s=!1}}s&&(t.eventLists_=[]),t.recursionDepth_--}function kD(t){for(let e=0;e<t.events.length;e++){const s=t.events[e];if(s!==null){t.events[e]=null;const n=s.getEventRunner();Oa&&Ut("event: "+s.toString()),dr(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="repo_interrupt",_D=25;class VD{constructor(e,s,n,a){this.repoInfo_=e,this.forceRestClient_=s,this.authTokenProvider_=n,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ED,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rp(),this.transactionQueueTree_=new $g,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vD(t,e,s){if(t.stats_=wg(t.repoInfo_),t.forceRestClient_||BA())t.server_=new lp(t.repoInfo_,(n,a,o,i)=>{p1(t,n,a,o,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>u1(t,!0),0);else{if(typeof s!="undefined"&&s!==null){if(typeof s!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Kt(s)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(n,a,o,i)=>{p1(t,n,a,o,i)},n=>{u1(t,n)},n=>{HD(t,n)},t.authTokenProvider_,t.appCheckProvider_,s),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(n=>{t.server_.refreshAuthToken(n)}),t.appCheckProvider_.addTokenChangeListener(n=>{t.server_.refreshAppCheckToken(n.token)}),t.statsReporter_=vA(t.repoInfo_,()=>new Vw(t.stats_,t.server_)),t.infoData_=new Bw,t.infoSyncTree_=new r1({startListening:(n,a,o,i)=>{let l=[];const r=t.infoData_.getNode(n._path);return r.isEmpty()||(l=hu(t.infoSyncTree_,n._path,r),setTimeout(()=>{i("ok")},0)),l},stopListening:()=>{}}),Zg(t,"connected",!1),t.serverSyncTree_=new r1({startListening:(n,a,o,i)=>(t.server_.listen(n,o,a,(l,r)=>{const p=i(l,r);uo(t.eventQueue_,n._path,p)}),[]),stopListening:(n,a)=>{t.server_.unlisten(n,a)}})}function xD(t){const s=t.infoData_.getNode(new at(".info/serverTimeOffset")).val()||0;return new Date().getTime()+s}function bk(t){return rD({timestamp:xD(t)})}function p1(t,e,s,n,a){t.dataUpdateCount++;const o=new at(e);s=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,s):s;let i=[];if(a)if(n){const r=bc(s,p=>zt(p));i=lD(t.serverSyncTree_,o,r,a)}else{const r=zt(s);i=iD(t.serverSyncTree_,o,r,a)}else if(n){const r=bc(s,p=>zt(p));i=oD(t.serverSyncTree_,o,r)}else{const r=zt(s);i=hu(t.serverSyncTree_,o,r)}let l=o;i.length>0&&(l=ef(t,o)),uo(t.eventQueue_,l,i)}function u1(t,e){Zg(t,"connected",e),e===!1&&YD(t)}function HD(t,e){Ss(e,(s,n)=>{Zg(t,s,n)})}function Zg(t,e,s){const n=new at("/.info/"+e),a=zt(s);t.infoData_.updateSnapshot(n,a);const o=hu(t.infoSyncTree_,n,a);uo(t.eventQueue_,n,o)}function KD(t){return t.nextWriteId_++}function YD(t){Rk(t,"onDisconnectEvents");const e=bk(t),s=rp();Ch(t.onDisconnect_,qe(),(a,o)=>{const i=uD(a,o,t.serverSyncTree_,e);hk(s,a,i)});let n=[];Ch(s,qe(),(a,o)=>{n=n.concat(hu(t.serverSyncTree_,a,o));const i=AD(t,a);ef(t,i)}),t.onDisconnect_=rp(),uo(t.eventQueue_,qe(),n)}function LD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SD)}function Rk(t,...e){let s="";t.persistentConnection_&&(s=t.persistentConnection_.id+":"),Ut(s,...e)}function Qk(t,e,s){return vk(t.serverSyncTree_,e,s)||je.EMPTY_NODE}function Xg(t,e=t.transactionQueueTree_){if(e||fu(t,e),mi(e)){const s=jk(t,e);ae(s.length>0,"Sending zero length transaction queue"),s.every(a=>a.status===0)&&MD(t,mr(e),s)}else Ck(e)&&gu(e,s=>{Xg(t,s)})}function MD(t,e,s){const n=s.map(p=>p.currentWriteId),a=Qk(t,e,n);let o=a;const i=a.hash();for(let p=0;p<s.length;p++){const u=s[p];ae(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ys(e,u.path);o=o.updateChild(d,u.currentOutputSnapshotRaw)}const l=o.val(!0),r=e;t.server_.put(r.toString(),l,p=>{Rk(t,"transaction put response",{path:r.toString(),status:p});let u=[];if(p==="ok"){const d=[];for(let m=0;m<s.length;m++)s[m].status=2,u=u.concat(Mo(t.serverSyncTree_,s[m].currentWriteId)),s[m].onComplete&&d.push(()=>s[m].onComplete(null,!0,s[m].currentOutputSnapshotResolved)),s[m].unwatcher();fu(t,Wg(t.transactionQueueTree_,e)),Xg(t,t.transactionQueueTree_),uo(t.eventQueue_,e,u);for(let m=0;m<d.length;m++)dr(d[m])}else{if(p==="datastale")for(let d=0;d<s.length;d++)s[d].status===3?s[d].status=4:s[d].status=0;else{ms("transaction at "+r.toString()+" failed: "+p);for(let d=0;d<s.length;d++)s[d].status=4,s[d].abortReason=p}ef(t,e)}},i)}function ef(t,e){const s=Ok(t,e),n=mr(s),a=jk(t,s);return CD(t,a,n),n}function CD(t,e,s){if(e.length===0)return;const n=[];let a=[];const i=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const r=e[l],p=ys(s,r.path);let u=!1,d;if(ae(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),r.status===4)u=!0,d=r.abortReason,a=a.concat(Mo(t.serverSyncTree_,r.currentWriteId,!0));else if(r.status===0)if(r.retryCount>=_D)u=!0,d="maxretry",a=a.concat(Mo(t.serverSyncTree_,r.currentWriteId,!0));else{const m=Qk(t,r.path,i);r.currentInputSnapshot=m;const f=e[l].update(m.val());if(f!==void 0){Dk("transaction failed: Data returned ",f,r.path);let P=zt(f);typeof f=="object"&&f!=null&&Yn(f,".priority")||(P=P.updatePriority(m.getPriority()));const v=r.currentWriteId,L=bk(t),x=dD(P,m,L);r.currentOutputSnapshotRaw=P,r.currentOutputSnapshotResolved=x,r.currentWriteId=KD(t),i.splice(i.indexOf(v),1),a=a.concat(aD(t.serverSyncTree_,r.path,x,r.currentWriteId,r.applyLocally)),a=a.concat(Mo(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",a=a.concat(Mo(t.serverSyncTree_,r.currentWriteId,!0))}uo(t.eventQueue_,s,a),a=[],u&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?n.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):n.push(()=>e[l].onComplete(new Error(d),!1,null))))}fu(t,t.transactionQueueTree_);for(let l=0;l<n.length;l++)dr(n[l]);Xg(t,t.transactionQueueTree_)}function Ok(t,e){let s,n=t.transactionQueueTree_;for(s=we(e);s!==null&&mi(n)===void 0;)n=Wg(n,s),e=st(e),s=we(e);return n}function jk(t,e){const s=[];return Gk(t,e,s),s.sort((n,a)=>n.order-a.order),s}function Gk(t,e,s){const n=mi(e);if(n)for(let a=0;a<n.length;a++)s.push(n[a]);gu(e,a=>{Gk(t,a,s)})}function fu(t,e){const s=mi(e);if(s){let n=0;for(let a=0;a<s.length;a++)s[a].status!==2&&(s[n]=s[a],n++);s.length=n,Mk(e,s.length>0?s:void 0)}gu(e,n=>{fu(t,n)})}function AD(t,e){const s=mr(Ok(t,e)),n=Wg(t.transactionQueueTree_,e);return mD(n,a=>{Pd(t,a)}),Pd(t,n),Ak(n,a=>{Pd(t,a)}),s}function Pd(t,e){const s=mi(e);if(s){const n=[];let a=[],o=-1;for(let i=0;i<s.length;i++)s[i].status===3||(s[i].status===1?(ae(o===i-1,"All SENT items should be at beginning of queue."),o=i,s[i].status=3,s[i].abortReason="set"):(ae(s[i].status===0,"Unexpected transaction status in abort"),s[i].unwatcher(),a=a.concat(Mo(t.serverSyncTree_,s[i].currentWriteId,!0)),s[i].onComplete&&n.push(s[i].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Mk(e,void 0):s.length=o+1,uo(t.eventQueue_,mr(e),a);for(let i=0;i<n.length;i++)dr(n[i])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){let e="";const s=t.split("/");for(let n=0;n<s.length;n++)if(s[n].length>0){let a=s[n];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function DD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const s of t.split("&")){if(s.length===0)continue;const n=s.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):ms(`Invalid query segment '${s}' in query '${t}'`)}return e}const d1=function(t,e){const s=bD(t),n=s.namespace;s.domain==="firebase.com"&&Wa(s.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&s.domain!=="localhost"&&Wa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),s.secure||mA();const a=s.scheme==="ws"||s.scheme==="wss";return{repoInfo:new SA(s.host,s.secure,n,a,e,"",n!==s.subdomain),path:new at(s.pathString)}},bD=function(t){let e="",s="",n="",a="",o="",i=!0,l="https",r=443;if(typeof t=="string"){let p=t.indexOf("//");p>=0&&(l=t.substring(0,p-1),t=t.substring(p+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(a=wD(t.substring(u,d)));const m=DD(t.substring(Math.min(t.length,d)));p=e.indexOf(":"),p>=0?(i=l==="https"||l==="wss",r=parseInt(e.substring(p+1),10)):p=e.length;const f=e.slice(0,p);if(f.toLowerCase()==="localhost")s="localhost";else if(f.split(".").length<=2)s=f;else{const P=e.indexOf(".");n=e.substring(0,P).toLowerCase(),s=e.substring(P+1),o=n}"ns"in m&&(o=m.ns)}return{host:e,port:r,domain:s,subdomain:n,secure:i,scheme:l,pathString:a,namespace:o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,s,n,a){this._repo=e,this._path=s,this._queryParams=n,this._orderByCalled=a}get key(){return Me(this._path)?null:nk(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=WP(this._queryParams),s=Cg(e);return s==="{}"?"default":s}get _queryObject(){return WP(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof tf))return!1;const s=this._repo===e._repo,n=ik(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return s&&n&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+WA(this._path)}}class gi extends tf{constructor(e,s){super(e,s,new Qg,!1)}get parent(){const e=ok(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}sD(gi);nD(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="FIREBASE_DATABASE_EMULATOR_HOST",jh={};let QD=!1;function OD(t,e,s,n,a){let o=n||t.options.databaseURL;o===void 0&&(t.options.projectId||Wa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ut("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let i=d1(o,a),l=i.repoInfo,r,p;typeof process!="undefined"&&process.env&&(p=process.env[RD]),p?(r=!0,o=`http://${p}?ns=${l.namespace}`,i=d1(o,a),l=i.repoInfo):r=!i.repoInfo.secure;const u=a&&r?new Yh(Yh.OWNER):new kA(t.name,t.options,e);yD("Invalid Firebase Database URL",i),Me(i.path)||Wa("Database URL must point to the root of a Firebase Database (not including a child path).");const d=GD(l,t,u,new NA(t.name,s));return new UD(d,t)}function jD(t,e){const s=jh[e];(!s||s[t.key]!==t)&&Wa(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LD(t),delete s[t.key]}function GD(t,e,s,n){let a=jh[e.name];a||(a={},jh[e.name]=a);let o=a[t.toURLString()];return o&&Wa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new VD(t,QD,s,n),a[t.toURLString()]=o,o}class UD{constructor(e,s){this._repoInternal=e,this.app=s,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wa("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){cA(Ta),Rs(new ks("database",(e,{instanceIdentifier:s})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return OD(n,a,o,s)},"PUBLIC").setMultipleInstances(!0)),ns(LP,MP,t),ns(LP,MP,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="firebasestorage.googleapis.com",qD="storageBucket",FD=2*60*1e3,JD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends an{constructor(e,s,n=0){super(Id(e),`Firebase Storage: ${s} (${Id(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Id(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nn||(nn={}));function Id(t){return"storage/"+t}function $D(){const t="An unknown error occurred, please check the error payload for server response.";return new ln(nn.UNKNOWN,t)}function WD(){return new ln(nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZD(){return new ln(nn.CANCELED,"User canceled the upload/download.")}function XD(t){return new ln(nn.INVALID_URL,"Invalid URL '"+t+"'.")}function e4(t){return new ln(nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function h1(t){return new ln(nn.INVALID_ARGUMENT,t)}function zk(){return new ln(nn.APP_DELETED,"The Firebase app was deleted.")}function t4(t){return new ln(nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=Ls.makeFromUrl(e,s)}catch{return new Ls(e,"")}if(n.path==="")return n;throw e4(e)}static makeFromUrl(e,s){let n=null;const a="([A-Za-z0-9.\\-_]+)";function o(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+a+i,"i"),r={bucket:1,path:3};function p(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",d=s.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${a}/o${m}`,"i"),P={bucket:1,path:3},_=s===Uk?"(?:storage.googleapis.com|storage.cloud.google.com)":s,v="([^?#]*)",L=new RegExp(`^https?://${_}/${a}/${v}`,"i"),Y=[{regex:l,indices:r,postModify:o},{regex:f,indices:P,postModify:p},{regex:L,indices:{bucket:1,path:2},postModify:p}];for(let K=0;K<Y.length;K++){const A=Y[K],R=A.regex.exec(e);if(R){const S=R[A.indices.bucket];let y=R[A.indices.path];y||(y=""),n=new Ls(S,y),A.postModify(n);break}}if(n==null)throw XD(e);return n}}class s4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(t,e,s){let n=1,a=null,o=null,i=!1,l=0;function r(){return l===2}let p=!1;function u(...v){p||(p=!0,e.apply(null,v))}function d(v){a=setTimeout(()=>{a=null,t(f,r())},v)}function m(){o&&clearTimeout(o)}function f(v,...L){if(p){m();return}if(v){m(),u.call(null,v,...L);return}if(r()||i){m(),u.call(null,v,...L);return}n<64&&(n*=2);let Y;l===1?(l=2,Y=0):Y=(n+Math.random())*1e3,d(Y)}let P=!1;function _(v){P||(P=!0,m(),!p&&(a!==null?(v||(l=2),clearTimeout(a),d(0)):v||(l=1)))}return d(0),o=setTimeout(()=>{i=!0,_(!0)},s),_}function a4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(t){return t!==void 0}function m1(t,e,s,n){if(n<e)throw h1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw h1(`Invalid value for '${t}'. Expected ${s} or less.`)}function i4(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const a=e(n)+"="+e(t[n]);s=s+a+"&"}return s=s.slice(0,-1),s}var dp;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dp||(dp={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t,e){const s=t>=500&&t<600,a=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||a||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,s,n,a,o,i,l,r,p,u,d,m=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=a,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=r,this.timeout_=p,this.progressCallback_=u,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,P)=>{this.resolve_=f,this.reject_=P,this.start_()})}start_(){const e=(n,a)=>{if(a){n(!1,new $r(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const r=l.loaded,p=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(r,p)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===dp.NO_ERROR,r=o.getStatus();if(!l||l4(r,this.additionalRetryCodes_)&&this.retry){const u=o.getErrorCode()===dp.ABORT;n(!1,new $r(!1,null,u));return}const p=this.successCodes_.indexOf(r)!==-1;n(!0,new $r(p,o))})},s=(n,a)=>{const o=this.resolve_,i=this.reject_,l=a.connection;if(a.wasSuccessCode)try{const r=this.callback_(l,l.getResponse());o4(r)?o(r):o()}catch(r){i(r)}else if(l!==null){const r=$D();r.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,r)):i(r)}else if(a.canceled){const r=this.appDelete_?zk():ZD();i(r)}else{const r=WD();i(r)}};this.canceled_?s(!1,new $r(!1,null,!0)):this.backoffId_=n4(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&a4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $r{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function c4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function u4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function d4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function h4(t,e,s,n,a,o,i=!0){const l=i4(t.urlParams),r=t.url+l,p=Object.assign({},t.headers);return u4(p,e),c4(p,s),p4(p,o),d4(p,n),new r4(r,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,a,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function g4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,s){this._service=e,s instanceof Ls?this._location=s:this._location=Ls.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new hp(e,s)}get root(){const e=new Ls(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g4(this._location.path)}get storage(){return this._service}get parent(){const e=m4(this._location.path);if(e===null)return null;const s=new Ls(this._location.bucket,e);return new hp(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw t4(e)}}function g1(t,e){const s=e==null?void 0:e[qD];return s==null?null:Ls.makeFromBucketSpec(s,t)}class f4{constructor(e,s,n,a,o){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=a,this._firebaseVersion=o,this._bucket=null,this._host=Uk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FD,this._maxUploadRetryTime=JD,this._requests=new Set,a!=null?this._bucket=Ls.makeFromBucketSpec(a,this._host):this._bucket=g1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ls.makeFromBucketSpec(this._url,e):this._bucket=g1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){m1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){m1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hp(this,e)}_makeRequest(e,s,n,a,o=!0){if(this._deleted)return new s4(zk());{const i=h4(e,this._appId,n,a,s,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,s){const[n,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,a).getPromise()}}const f1="@firebase/storage",T1="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="storage";function P4(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return new f4(s,n,a,e,Ta)}function I4(){Rs(new ks(T4,P4,"PUBLIC").setMultipleInstances(!0)),ns(f1,T1,""),ns(f1,T1,"esm2017")}I4();const yd=new WeakMap;function qk(t,e){return yd.has(e)||yd.set(e,t||{f:{},r:{},s:{},u:{}}),yd.get(e)}function y4(t,e,s,n){if(!t)return s;const[a,o]=Fk(t);if(!a)return s;const i=qk(void 0,n)[a]||{},l=e||o;return l&&l in i?i[l]:s}function E4(t,e,s,n){if(!t)return;const[a,o]=Fk(t);if(!a)return;const i=qk(void 0,n)[a],l=e||o;if(l)return s.then(r=>{i[l]=r}).catch(Js),l}function Fk(t){return XC(t)||eA(t)?["f",t.path]:tA(t)?["r",t.toString()]:sA(t)?["s",t.toString()]:[]}const Ed=new WeakMap;function B4(t,e,s){const n=cr();Ed.has(n)||Ed.set(n,new Map);const a=Ed.get(n),o=E4(e,s,t,n);return o&&a.set(o,t),o?()=>a.delete(o):Js}const N4={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Gh(t,e,s,n){if(!WC(t))return[t,{}];const a=[{},{}],o=Object.keys(s).reduce((l,r)=>{const p=s[r];return l[p.path]=p.data(),l},{});function i(l,r,p,u){r=r||{};const[d,m]=u;Object.getOwnPropertyNames(l).forEach(f=>{const P=Object.getOwnPropertyDescriptor(l,f);P&&!P.enumerable&&Object.defineProperty(d,f,P)});for(const f in l){const P=l[f];if(P==null||P instanceof Date||P instanceof lt||P instanceof nu)d[f]=P;else if(Mg(P)){const _=p+f;d[f]=_ in s?r[f]:P.path,m[_]=P.converter?P:P.withConverter(n.converter)}else if(Array.isArray(P)){d[f]=Array(P.length);for(let _=0;_<P.length;_++){const v=P[_];v&&v.path in o&&(d[f][_]=o[v.path])}i(P,r[f]||d[f],p+f+".",[d[f],m])}else co(P)?(d[f]={},i(P,r[f],p+f+".",[d[f],m])):d[f]=P}}return i(t,e,"",a),a}const sf={reset:!1,wait:!0,maxRefDepth:2,converter:N4,snapshotOptions:{serverTimestamps:"estimate"}};function mp(t){for(const e in t)t[e].unsub()}function Uh(t,e,s,n,a,o,i,l,r){const[p,u]=Gh(n.data(t.snapshotOptions),Lg(e,s),a,t);o.set(e,s,p),zh(t,e,s,a,u,o,i,l,r)}function k4({ref:t,target:e,path:s,depth:n,resolve:a,reject:o,ops:i},l){const r=Object.create(null);let p=Js;return l.once?rr(t).then(u=>{u.exists()?Uh(l,e,s,u,r,i,n,a,o):(i.set(e,s,null),a())}).catch(o):p=si(t,u=>{u.exists()?Uh(l,e,s,u,r,i,n,a,o):(i.set(e,s,null),a())},o),()=>{p(),mp(r)}}function zh(t,e,s,n,a,o,i,l,r){const p=Object.keys(a);if(Object.keys(n).filter(_=>p.indexOf(_)<0).forEach(_=>{n[_].unsub(),delete n[_]}),!p.length||++i>t.maxRefDepth)return l(s);let d=0;const m=p.length,f=Object.create(null);function P(_){_ in f&&++d>=m&&l(s)}p.forEach(_=>{const v=n[_],L=a[_],x=`${s}.${_}`;if(f[x]=!0,v)if(v.path!==L.path)v.unsub();else return;n[_]={data:()=>Lg(e,x),unsub:k4({ref:L,target:e,path:x,depth:i,ops:o,resolve:P.bind(null,x),reject:r},t),path:L.path}})}function S4(t,e,s,n,a,o){const i=Object.assign({},sf,o),{snapshotListenOptions:l,snapshotOptions:r,wait:p,once:u}=i,d="value";let m=xe(p?[]:t.value);p||s.set(t,d,[]);const f=n;let P,_=Js;const v=[],L={added:({newIndex:Y,doc:K})=>{v.splice(Y,0,Object.create(null));const A=v[Y],[R,S]=Gh(K.data(r),void 0,A,i);s.add(dn(m),Y,R),zh(i,m,`${d}.${Y}`,A,S,s,0,n.bind(null,K),a)},modified:({oldIndex:Y,newIndex:K,doc:A})=>{const R=dn(m),S=v[Y],y=R[Y],[T,E]=Gh(A.data(r),y,S,i);v.splice(K,0,S),s.remove(R,Y),s.add(R,K,T),zh(i,m,`${d}.${K}`,S,E,s,0,n,a)},removed:({oldIndex:Y})=>{const K=dn(m);s.remove(K,Y),mp(v.splice(Y,1)[0])}};function x(Y){const K=Y.docChanges(l);if(!P&&K.length){P=!0;let A=0;const R=K.length,S=Object.create(null);for(let y=0;y<R;y++)S[K[y].doc.id]=!0;n=y=>{y&&y.id in S&&++A>=R&&(p&&(s.set(t,d,dn(m)),m=t),f(dn(m)),n=Js)}}K.forEach(A=>{L[A.type](A)}),K.length||(p&&(s.set(t,d,dn(m)),m=t),n(dn(m)))}return u?ru(e).then(x).catch(a):_=si(e,x,a),Y=>{if(_(),Y){const K=typeof Y=="function"?Y():[];s.set(t,d,K)}v.forEach(mp)}}function _4(t,e,s,n,a,o){const i=Object.assign({},sf,o),l="value",r=Object.create(null);n=nA(n,()=>Lg(t,l));let p=Js;function u(d){d.exists()?Uh(i,t,l,d,r,s,0,n,a):(s.set(t,l,null),n(null))}return i.once?rr(e).then(u).catch(a):p=si(e,u,a),d=>{if(p(),d){const m=typeof d=="function"?d():null;s.set(t,l,m)}mp(r)}}const P1=Symbol();function nf(t,e){let s=Js;const n=Object.assign({},sf,e),a=dn(t),o=n.target||xe();oA()&&(n.once=!0);const i=y4(a,n.ssrKey,P1,cr()),l=i!==P1;l&&(o.value=i);let r=!l;const p=xe(!1),u=xe(),d=LI(),m=dm();let f=Js;function P(){let L=dn(t);const x=new Promise((Y,K)=>{if(s(n.reset),!L)return s=Js,Y(null);p.value=r,r=!0,L.converter||(L=L.withConverter(n.converter)),s=(Mg(L)?_4:S4)(o,L,V4,Y,K,n)}).catch(Y=>(d.value===x&&(u.value=Y),Promise.reject(Y))).finally(()=>{d.value===x&&(p.value=!1)});d.value=x}let _=Js;(it(t)||typeof t=="function")&&(_=ze(t,P)),P(),a&&(f=B4(d.value,a,n.ssrKey)),rt()&&ny(()=>d.value),m&&fI(v);function v(L=n.reset){_(),f(),s(L)}return Object.defineProperties(o,{error:{get:()=>u},data:{get:()=>o},pending:{get:()=>p},promise:{get:()=>d},stop:{get:()=>v}})}const V4={set:(t,e,s)=>JC(t,e,s),add:(t,e,s)=>t.splice(e,0,s),remove:(t,e)=>t.splice(e,1)};function nQ(t,e){return nf(t,{target:xe([]),...e})}function v4(t,e){return nf(t,e)}function x4(t){return dN(cr(t))}const bi=new WeakMap;function H4(t,e,s){e&&e[t]&&(e[t](s),delete e[t])}const K4={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},Y4=function(e,s,n){const a=Object.assign({},K4,s),{bindName:o,unbindName:i}=a,l=e.config.globalProperties;l[i]=function(p,u){H4(p,bi.get(this),u),delete this.$firestoreRefs[p]},l[o]=function(p,u,d){const m=Object.assign({},a,d),f=AI(this.$data,p);bi.has(this)||bi.set(this,{});const P=bi.get(this);P[p]&&P[p](m.reset);const _=LN(n||cr(),e).run(()=>Bp()),{promise:v,stop:L}=e.runWithContext(()=>_.run(()=>nf(u,{target:f,...m}))),x=Y=>{L(Y),_.stop()};return P[p]=x,this.$firestoreRefs[p]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:r}=this.$options,p=typeof r=="function"?r.call(this):r;if(!!p)for(const u in p)this[o](u,p[u],a)},beforeUnmount(){const r=bi.get(this);if(r)for(const p in r)r[p]();this.$firestoreRefs=null}})};function aQ(t){return(e,s)=>Y4(s,t,e)}function oQ(t){return M4({initialUser:t,dependencies:{popupRedirectResolver:oB,persistence:[sB,$E,jm]}})}const L4=Symbol("VueFireAuth");function M4({dependencies:t,initialUser:e}){return(s,n)=>{const[a,o]=C4(s,n,e,t);rA(a,o)}}function C4(t,e,s,n,a=QE(t,n)){const o=LN(t,e).run(()=>xe(s));return iA.set(t,o),e.provide(L4,a),[o,a]}const qh=fa("generalInfo",{state:()=>({generalInfoFilters:{selectedSchoolId:null,selectedCourseId:null,selectedLessonId:null},isProduction:!1,isInitialized:!1,collectionPath:"general/data/latest-version",demoCollectionPath:"demoData/data/general/data/latestVersion",b2cCourses:null,b2sCourses:null,b2cAllLessonId:null,b2sAllLessonId:null,allQuiz:null,lessonInfoGuideline:null,lessonInfoSample:null,lessonInfoSchema:null,lessonPlanGuideline:null,lessonPlanSample:null,lessonPlanSchema:null,lessonProjectGuideline:null,lessonProjectSample:null,lessonProjectSchema:null,lessonQuizGuideline:null,lessonQuizSample:null,lessonQuizSchema:null,lessonSlideSample:null,lessonSlideSchema:null,lessonSlideGuideline:null,allTools:null,allDevices:null,allEditorUsers:null,allGlossaryCategories:null,allResourceCategories:null,allPracticeCategories:null,allActivityCategories:null,allDifferentiateCategories:null,allQuestionCategories:null}),getters:{usePath:t=>t.isProduction?t.collectionPath:t.demoCollectionPath,allLessonIds:t=>({...t.b2cAllLessonId,...t.b2sAllLessonId}),allSchoolIds:t=>{const e=Object.values(t.allLessonIds).flat(),s=new Set;return e.forEach(n=>{s.add(n.schoolId)}),Array.from(s)},allCourseIdsBySelectedSchool:t=>{const e=t.allLessonIds,{selectedSchoolId:s}=t.generalInfoFilters,n=Object.values(e).flat().filter(o=>s?o.schoolId===s:!0),a=new Set;return n.forEach(o=>{a.add(o.courseId)}),Array.from(a)},allLessonIdsBySelectedCourse:t=>{const e=t.allLessonIds,{selectedCourseId:s}=t.generalInfoFilters,n=Object.values(e).flat().filter(o=>s?o.courseId===s:!0),a=new Set;return n.forEach(o=>{a.add(o.lessonId)}),Array.from(a)},filteredLessonIds:t=>{const e=t.allLessonIds,{selectedSchoolId:s,selectedCourseId:n}=t.generalInfoFilters;return Object.values(e).flat().filter(a=>{const o=s?a.schoolId===s:!0,i=n?a.courseId===n:!0;return o&&i})}},actions:{async initializeStore(){const t=x4(),e={b2cCourses:"b2c-courses",b2sCourses:"b2s-courses",b2cAllLessonId:"b2c-allLessonId",b2sAllLessonId:"b2s-allLessonId",allQuiz:"all-quiz",lessonInfoGuideline:"lesson-info-guideline",lessonInfoSample:"lesson-info-sample",lessonInfoSchema:"lesson-info-schema",lessonPlanGuideline:"lesson-plan-guideline",lessonPlanSample:"lesson-plan-sample",lessonPlanSchema:"lesson-plan-schema",lessonProjectGuideline:"lesson-project-guideline",lessonProjectSample:"lesson-project-sample",lessonProjectSchema:"lesson-project-schema",lessonQuizGuideline:"lesson-quiz-guideline",lessonQuizSample:"lesson-quiz-sample",lessonQuizSchema:"lesson-quiz-schema",lessonSlideSample:"lesson-slide-sample",lessonSlideSchema:"lesson-slide-schema",lessonSlideGuideline:"lesson-slide-guideline",allTools:"all-tools",allDevices:"all-devices",allEditorUsers:"all-editor-users",allGlossaryCategories:"all-glossary-categories",allResourceCategories:"all-resource-categories",allPracticeCategories:"all-practice-categories",allActivityCategories:"all-activity-categories",allDifferentiateCategories:"all-differentiate-categories",allQuestionCategories:"all-question-categories"};for(const[s,n]of Object.entries(e)){const a=sn(t,this.usePath,n),o=v4(a);C_(()=>{this[s]=o.value})}this.isInitialized=!0},async updateGeneralInfoFilter(t,e){this.generalInfoFilters[t]=e,t=="selectedSchoolId"?(this.generalInfoFilters.selectedCourseId=null,this.generalInfoFilters.selectedLessonId=null):t=="selectedCourseId"&&(this.generalInfoFilters.selectedLessonId=null)}}}),A4="B\xE9 L\xE0m Game AI",w4="H\u1ECDc ph\u1EA7n 1",D4=2,b4=2,R4=45,Q4="Tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t",O4="L\u1EADp tr\xECnh tr\xF2 ch\u01A1i",j4="H\u01B0\u1EDBng d\u1EABn h\u1ECDc sinh l\u1EDBp 4 t\u1EA1o tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t tr\xEAn Scratch, s\u1EED d\u1EE5ng c\xE1c l\u1EC7nh if-then v\xE0 s\u1EF1 ki\u1EC7n ch\u1EA1m \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n chu\u1ED9t tr\xE1nh m\xE8o.",G4="https://media.istockphoto.com/id/1188129812/vector/cat-chasing-mouse-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=w1lVfv-4-hGJ2uXq59aTu6rN2nJlb5bolUQ23i5pW9k=",U4=[{objDescription:"Hi\u1EC3u \u0111\u01B0\u1EE3c c\xE1ch s\u1EED d\u1EE5ng kh\u1ED1i l\u1EC7nh if-then \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt trong Scratch.",objRelatedGlossaries:[{id:"G001",vi:{term:"if-then",definition:"C\u1EA5u tr\xFAc \u0111i\u1EC1u ki\u1EC7n trong l\u1EADp tr\xECnh",category:"L\u1EADp tr\xECnh",group:"C\u1EA5u tr\xFAc \u0111i\u1EC1u khi\u1EC3n",examples:{howto:["S\u1EED d\u1EE5ng if-then \u0111\u1EC3 ki\u1EC3m tra \u0111i\u1EC1u ki\u1EC7n v\xE0 th\u1EF1c hi\u1EC7n h\xE0nh \u0111\u1ED9ng t\u01B0\u01A1ng \u1EE9ng"],context:["N\u1EBFu m\xE8o ch\u1EA1m v\xE0o chu\u1ED9t, th\xEC k\u1EBFt th\xFAc tr\xF2 ch\u01A1i"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"if-then",definition:"Conditional structure in programming",category:"Programming",group:"Control structures",examples:{howto:["Use if-then to check conditions and perform corresponding actions"],context:["If the cat touches the mouse, then end the game"]},field:"Computer Science"}},{id:"G002",vi:{term:"sprite",definition:"\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\u1ED3 h\u1ECDa trong Scratch",category:"L\u1EADp tr\xECnh",group:"\u0110\u1ED3 h\u1ECDa",examples:{howto:["T\u1EA1o sprite m\u1EDBi v\xE0 thi\u1EBFt k\u1EBF h\xECnh d\u1EA1ng cho n\xF3"],context:["S\u1EED d\u1EE5ng sprite m\xE8o v\xE0 chu\u1ED9t trong tr\xF2 ch\u01A1i"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"sprite",definition:"Graphical object in Scratch",category:"Programming",group:"Graphics",examples:{howto:["Create a new sprite and design its appearance"],context:["Use cat and mouse sprites in the game"]},field:"Computer Science"}}],objRelatedSkill:[{id:"S001",vi:{term:"T\u01B0 duy ph\u1EA3n bi\u1EC7n",definition:"Kh\u1EA3 n\u0103ng ph\xE2n t\xEDch v\xE0 \u0111\xE1nh gi\xE1 th\xF4ng tin m\u1ED9t c\xE1ch logic",category:"K\u1EF9 n\u0103ng m\u1EC1m",group:"T\u01B0 duy",examples:{howto:["\u0110\u1EB7t c\xE2u h\u1ECFi v\u1EC1 logic c\u1EE7a ch\u01B0\u01A1ng tr\xECnh"],context:["Xem x\xE9t c\xE1c tr\u01B0\u1EDDng h\u1EE3p c\xF3 th\u1EC3 x\u1EA3y ra trong tr\xF2 ch\u01A1i"]},field:"Gi\xE1o d\u1EE5c"},en:{term:"Critical Thinking",definition:"Ability to analyze and evaluate information logically",category:"Soft skills",group:"Thinking",examples:{howto:["Ask questions about the logic of the program"],context:["Consider possible scenarios in the game"]},field:"Education"}}],objRelatedStandard:[{id:"ST001",vi:{term:"CSTA 2-AP-10",definition:"S\u1EED d\u1EE5ng c\xE1c thu\u1EADt to\xE1n \u0111\u1EC3 gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1",category:"Ti\xEAu chu\u1EA9n gi\xE1o d\u1EE5c",group:"Khoa h\u1ECDc m\xE1y t\xEDnh",examples:{howto:["T\u1EA1o thu\u1EADt to\xE1n \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n chuy\u1EC3n \u0111\u1ED9ng c\u1EE7a m\xE8o"],context:["\xC1p d\u1EE5ng thu\u1EADt to\xE1n trong tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"CSTA 2-AP-10",definition:"Use algorithms to solve problems",category:"Education standards",group:"Computer Science",examples:{howto:["Create an algorithm to control cat movement"],context:["Apply algorithms in the Cat Chasing Mouse game"]},field:"Computer Science"}}]},{objDescription:"Hi\u1EC3u \u0111\u01B0\u1EE3c c\xE1ch s\u1EED d\u1EE5ng kh\u1ED1i l\u1EC7nh repeat-until \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt trong Scratch.",objRelatedGlossaries:[{id:"G001",vi:{term:"repeat-until",definition:"C\u1EA5u tr\xFAc v\xF2ng l\u1EB7p trong l\u1EADp tr\xECnh",category:"L\u1EADp tr\xECnh",group:"C\u1EA5u tr\xFAc \u0111i\u1EC1u khi\u1EC3n",examples:{howto:["S\u1EED d\u1EE5ng repeat-until \u0111\u1EC3 ki\u1EC3m tra \u0111i\u1EC1u ki\u1EC7n v\xE0 th\u1EF1c hi\u1EC7n h\xE0nh \u0111\u1ED9ng t\u01B0\u01A1ng \u1EE9ng"],context:["N\u1EBFu m\xE8o ch\u1EA1m v\xE0o chu\u1ED9t, th\xEC k\u1EBFt th\xFAc tr\xF2 ch\u01A1i"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"repeat-until",definition:"Loop structure in programming",category:"Programming",group:"Control structures",examples:{howto:["Use repeat-until to check conditions and perform corresponding actions"],context:["If the cat touches the mouse, then end the game"]},field:"Computer Science"}},{id:"G002",vi:{term:"sprite",definition:"\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\u1ED3 h\u1ECDa trong Scratch",category:"L\u1EADp tr\xECnh",group:"\u0110\u1ED3 h\u1ECDa",examples:{howto:["T\u1EA1o sprite m\u1EDBi v\xE0 thi\u1EBFt k\u1EBF h\xECnh d\u1EA1ng cho n\xF3"],context:["S\u1EED d\u1EE5ng sprite m\xE8o v\xE0 chu\u1ED9t trong tr\xF2 ch\u01A1i"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"sprite",definition:"Graphical object in Scratch",category:"Programming",group:"Graphics",examples:{howto:["Create a new sprite and design its appearance"],context:["Use cat and mouse sprites in the game"]},field:"Computer Science"}}],objRelatedSkill:[{id:"S001",vi:{term:"T\u01B0 duy ph\u1EA3n bi\u1EC7n",definition:"Kh\u1EA3 n\u0103ng ph\xE2n t\xEDch v\xE0 \u0111\xE1nh gi\xE1 th\xF4ng tin m\u1ED9t c\xE1ch logic",category:"K\u1EF9 n\u0103ng m\u1EC1m",group:"T\u01B0 duy",examples:{howto:["\u0110\u1EB7t c\xE2u h\u1ECFi v\u1EC1 logic c\u1EE7a ch\u01B0\u01A1ng tr\xECnh"],context:["Xem x\xE9t c\xE1c tr\u01B0\u1EDDng h\u1EE3p c\xF3 th\u1EC3 x\u1EA3y ra trong tr\xF2 ch\u01A1i"]},field:"Gi\xE1o d\u1EE5c"},en:{term:"Critical Thinking",definition:"Ability to analyze and evaluate information logically",category:"Soft skills",group:"Thinking",examples:{howto:["Ask questions about the logic of the program"],context:["Consider possible scenarios in the game"]},field:"Education"}}],objRelatedStandard:[{id:"ST001",vi:{term:"CSTA 2-AP-10",definition:"S\u1EED d\u1EE5ng c\xE1c thu\u1EADt to\xE1n \u0111\u1EC3 gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1",category:"Ti\xEAu chu\u1EA9n gi\xE1o d\u1EE5c",group:"Khoa h\u1ECDc m\xE1y t\xEDnh",examples:{howto:["T\u1EA1o thu\u1EADt to\xE1n \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n chuy\u1EC3n \u0111\u1ED9ng c\u1EE7a m\xE8o"],context:["\xC1p d\u1EE5ng thu\u1EADt to\xE1n trong tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"CSTA 2-AP-10",definition:"Use algorithms to solve problems",category:"Education standards",group:"Computer Science",examples:{howto:["Create an algorithm to control cat movement"],context:["Apply algorithms in the Cat Chasing Mouse game"]},field:"Computer Science"}}]}],z4=90,q4="S\u01A1 c\u1EA5p",F4="3-5",J4=!0,$4=[{id:"D001",vi:{term:"M\xE1y t\xEDnh x\xE1ch tay",definition:"Thi\u1EBFt b\u1ECB \u0111i\u1EC7n t\u1EED c\xE1 nh\xE2n c\xF3 th\u1EC3 di chuy\u1EC3n",category:"Thi\u1EBFt b\u1ECB",group:"M\xE1y t\xEDnh",examples:{howto:["M\u1EDF m\xE1y t\xEDnh x\xE1ch tay v\xE0 kh\u1EDFi \u0111\u1ED9ng Scratch"],context:["S\u1EED d\u1EE5ng m\xE1y t\xEDnh x\xE1ch tay \u0111\u1EC3 l\u1EADp tr\xECnh tr\xF2 ch\u01A1i"]},field:"C\xF4ng ngh\u1EC7"},en:{term:"Laptop",definition:"Portable personal computer",category:"Devices",group:"Computers",examples:{howto:["Open the laptop and start Scratch"],context:["Use a laptop to program the game"]},field:"Technology"}}],W4=[{id:"T001",vi:{term:"Scratch",definition:"Ng\xF4n ng\u1EEF l\u1EADp tr\xECnh tr\u1EF1c quan cho tr\u1EBB em",category:"Ph\u1EA7n m\u1EC1m",group:"L\u1EADp tr\xECnh",examples:{howto:["M\u1EDF Scratch v\xE0 t\u1EA1o d\u1EF1 \xE1n m\u1EDBi"],context:["S\u1EED d\u1EE5ng Scratch \u0111\u1EC3 t\u1EA1o tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t"]},field:"Khoa h\u1ECDc m\xE1y t\xEDnh"},en:{term:"Scratch",definition:"Visual programming language for children",category:"Software",group:"Programming",examples:{howto:["Open Scratch and create a new project"],context:["Use Scratch to create the Cat Chasing Mouse game"]},field:"Computer Science"}}],Z4=[{resourceName:"H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng Scratch c\u01A1 b\u1EA3n",resourceType:"document",resourceUrl:"https://scratch.mit.edu/projects/editor/?tutorial=getStarted"}],X4={projectName:"M\xE8o \u0111u\u1ED5i Chu\u1ED9t",projectId:"Cat_Chasing_Mouse",projectImage:"https://i.ytimg.com/vi/AlrVwMLu4n8/sddefault.jpg",projectDescription:"Tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t tr\xEAn Scratch, gi\xFAp h\u1ECDc sinh th\u1EF1c h\xE0nh l\u1EADp tr\xECnh c\u01A1 b\u1EA3n v\xE0 t\u01B0 duy logic.",projectFeatures:["M\xE8o di chuy\u1EC3n theo chu\u1ED9t.","Chu\u1ED9t di chuy\u1EC3n theo con tr\u1ECF chu\u1ED9t.","K\u1EBFt th\xFAc tr\xF2 ch\u01A1i khi m\xE8o b\u1EAFt \u0111\u01B0\u1EE3c chu\u1ED9t.","Hi\u1EC3n th\u1ECB th\xF4ng b\xE1o khi tr\xF2 ch\u01A1i k\u1EBFt th\xFAc"],projectShortInstruction:["Ch\u1ECDn nh\xE2n v\u1EADt m\xE8o v\xE0 chu\u1ED9t.","L\u1EADp tr\xECnh cho m\xE8o di chuy\u1EC3n theo chu\u1ED9t.","L\u1EADp tr\xECnh cho chu\u1ED9t di chuy\u1EC3n theo con tr\u1ECF chu\u1ED9t.","Th\xEAm \u0111i\u1EC1u ki\u1EC7n k\u1EBFt th\xFAc tr\xF2 ch\u01A1i."],projectBase:`S\u1EED d\u1EE5ng c\xE1c kh\u1ED1i l\u1EC7nh di chuy\u1EC3n, s\u1EF1 ki\u1EC7n, \u0111i\u1EC1u ki\u1EC7n v\xE0 bi\u1EBFn \u0111\u1EC3 t\u1EA1o tr\xF2 ch\u01A1i M\xE8o \u0111u\u1ED5i Chu\u1ED9t. 
- M\xE8o di chuy\u1EC3n t\u1EF1 \u0111\u1ED9ng h\u01B0\u1EDBng v\u1EC1 ph\xEDa chu\u1ED9t
- Chu\u1ED9t di chuy\u1EC3n theo con tr\u1ECF chu\u1ED9t