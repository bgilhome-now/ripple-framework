import{r,o as i,d as x,J as v,b as g,G as m,w as y,$ as B,e as _,n as w,E as C,aB as E,T as b}from"./entry.BQBpzZgQ.js";function R(s,n,a=null){const t=r(a);return i(()=>{t.value=parseFloat(getComputedStyle(s.value).getPropertyValue(n))*1e3}),t}const T=x({__name:"RplExpandable",props:{expanded:{type:Boolean,default:!1}},setup(s){const n=s,a=r(null),t=r(!1),l=R(a,"--rpl-motion-speed-9",420);function p(e){e.style.height="0px"}function u(e,o){e.style.height=`${e.scrollHeight}px`,setTimeout(o,l.value)}function d(e){e.style.height="auto",e.style.overflow="initial"}function c(e){e.style.height=`${e.getBoundingClientRect().height}px`,e.style.overflow="hidden"}function f(e,o){e.style.height="0px",setTimeout(o,l.value)}const h=v(()=>({"rpl-expandable":!0,"rpl-expandable--open":n.expanded,"rpl-expandable--start-expanded":t.value}));return i(()=>{n.expanded&&(t.value=!0)}),(e,o)=>(g(),m(b,{onBeforeEnter:p,onEnter:u,onAfterEnter:d,onBeforeLeave:c,onLeave:f},{default:y(()=>[B(_("div",{ref_key:"containerRef",ref:a,class:w(h.value),role:"region"},[C(e.$slots,"default")],2),[[E,e.expanded]])]),_:3}))}});export{T as _};
