import{y as te,D as ae,bb as y,az as oe,G as ne,r as k,k as f,aX as ie,I as se,bc as le,J as re,bd as ue,w as C,u as E,ay as x,at as H,aA as ce,i as A,aJ as de,p as fe,z as he,ak as ve}from"./index.45a17209.js";import{u as me,v as D,b as ge,p as q,c as ye,d as Te,r as M,s as pe,e as be}from"./QSelect.98935f96.js";import{c as j}from"./selection.eae1b1a4.js";var Oe=te({name:"QTooltip",inheritAttrs:!1,props:{...me,...ae,...y,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...y.transitionShow,default:"jump-down"},transitionHide:{...y.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:D},self:{type:String,default:"top middle",validator:D},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:oe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:L,emit:T,attrs:h}){let i,s;const v=fe(),{proxy:{$q:a}}=v,l=k(null),c=k(!1),Q=f(()=>q(e.anchor,a.lang.rtl)),W=f(()=>q(e.self,a.lang.rtl)),z=f(()=>e.persistent!==!0),{registerTick:B,removeTick:I}=ie(),{registerTimeout:d}=se(),{transitionProps:J,transitionStyle:N}=le(e),{localScrollTarget:p,changeScrollEvent:R,unconfigureScrollTarget:_}=ye(e,w),{anchorEl:o,canShow:G,anchorEvents:r}=Te({showing:c,configureAnchorEl:Y}),{show:U,hide:m}=re({showing:c,canShow:G,handleShow:X,handleHide:$,hideOnRouteChange:z,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:K});const{showPortal:b,hidePortal:S,renderPortal:V}=ue(v,l,ee,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:l,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(g,n=>{(n===!0?be:M)(t)}),E(()=>{M(t)})}function X(t){b(),B(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{b(!0),T("show",t)},e.transitionDuration)}function $(t){I(),S(),P(),d(()=>{S(!0),T("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),_(),x(r,"tooltipTemp")}function u(){pe({targetEl:l.value,offset:e.offset,anchorEl:o.value,anchorOrigin:Q.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(a.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[g,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(x(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(o.value!==null||e.scrollTarget!==void 0){p.value=ce(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;R(p.value,t)}}function Z(){return c.value===!0?A("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,N.value],role:"tooltip"},he(L.default)):null}function ee(){return A(de,J.value,Z)}return E(P),Object.assign(v.proxy,{updatePosition:u}),V}});export{Oe as Q};