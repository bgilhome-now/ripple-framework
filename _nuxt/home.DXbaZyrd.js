import{o as B,a as S,d as $,J as q,r as E,b as a,c as v,g as l,e as o,t as i,G as h,w as s,D as H,f as _,n as P,E as U,V,v as I,N as t,az as u,aA as f,Q as G,a0 as M}from"./entry.BQBpzZgQ.js";import{_ as b}from"./RplIcon.vue.DZXVwNZU.js";import{_ as O}from"./RplTextLink.css.BVgW-za8.js";import{u as F}from"./useRippleEvent.CHIkdrLu.js";import{_ as D}from"./_plugin-vue_export-helper.DlAUqK2U.js";import J from"./DocsHeroHeader.Bv1wGQXQ.js";import{_ as Q}from"./RplPromoCard.vue.CtAEC_Rc.js";import W from"./DocsHomeSection.BGMG_lLa.js";import j from"./ContentRenderer.BDBk5BEq.js";import{_ as K}from"./RplContent.css.BFvR4804.js";import X from"./DocsWhatsNew.EtNxNG_j.js";import{_ as Y}from"./AppLayout.vue.BLkc32Ez.js";import{u as Z}from"./head.DK0lxYbG.js";import"./RplLink.vue.Dti83k4T.js";import"./RplImage.css.CtfFhLJM.js";import"./ContentRendererMarkdown.vue.BHrlc8j7.js";import"./RplList.vue.D1L1uJEs.js";import"./RplButton.css.B8vYqjOa.js";import"./nuxt-link.CrZos1NE.js";import"./RplExpandable.vue.DUiL95jN.js";const ee=(c,e)=>{if(typeof window<"u"){const r=new ResizeObserver(m=>{e(m[0].contentRect.height)});B(()=>{c.value&&(r.observe(c.value),window.addEventListener("resize",e))}),S(()=>{r.disconnect(),window.removeEventListener("resize",e)})}},te=["aria-labelledby"],oe={class:"rpl-alert__message-wrap"},se=["id"],R="Dismiss alert",le=$({__name:"RplAlert",props:{variant:{default:"information"},iconName:{default:"icon-information-circle-filled"},message:{default:""},linkText:{default:""},linkUrl:{default:""},dismissed:{type:Boolean,default:!1},alertId:{},isDismissible:{type:Boolean,default:!0}},emits:["dismiss"],setup(c,{emit:e}){const r=c,m=e,{emitRplEvent:y}=F("rpl-alert",m),w=()=>{y("dismiss",{id:r.alertId,action:"close",label:r.message,text:R},{global:!0})},g=q(()=>({"rpl-alert":!0,[`rpl-alert--${r.variant}`]:r.variant,"rpl-alert--closed":r.dismissed,"rpl-u-screen-only":!0})),p=E(null);return ee(p,n=>{p.value&&p.value.style.display!=="none"&&p.value.style.setProperty("--local-container-height",`${n}px`)}),(n,C)=>(a(),v("div",{ref_key:"alertRef",ref:p,class:P(g.value)},[n.dismissed?_("",!0):(a(),v("div",{key:0,class:"rpl-alert__inner",role:"region","aria-labelledby":`alert-message-${r.alertId}`},[l(b,{class:"rpl-alert__icon-info",size:"m",nopad:"",name:n.iconName},null,8,["name"]),o("div",oe,[o("div",{id:`alert-message-${r.alertId}`,class:"rpl-alert__message rpl-type-label rpl-type-weight-bold"},i(n.message),9,se),n.linkText&&n.linkUrl?(a(),h(O,{key:0,class:"rpl-alert__link rpl-type-p rpl-u-focusable--alt-colour",url:n.linkUrl},{default:s(()=>[H(i(n.linkText),1),l(b,{name:"icon-arrow-right"})]),_:1},8,["url"])):_("",!0)]),n.isDismissible?(a(),v("button",{key:0,class:"rpl-alert__btn-close rpl-u-focusable-inline rpl-u-focusable--alt-colour","data-cy":"dismiss",onClick:w},[l(b,{title:R,name:"icon-cancel"})])):_("",!0)],8,te))],2))}}),re={},ne={class:"rpl-alert-container"};function ie(c,e){return a(),v("div",ne,[U(c.$slots,"default")])}const ae=D(re,[["render",ie]]),ce={class:"docs-home-getting-started"},pe={class:"rpl-container"},de={class:"rpl-grid"},_e={class:"rpl-col-12 rpl-col-6-m"},me={class:"rpl-col-12 rpl-col-6-m"},ue={class:"rpl-grid"},fe={class:"rpl-col-12 rpl-col-6-m rpl-col-4-l"},he={class:"rpl-col-12 rpl-col-6-m rpl-col-4-l"},ke={class:"rpl-col-12 rpl-col-12-m rpl-col-4-l"},ve={class:"rpl-col-12"},ye=$({__name:"home",setup(c){const{page:e,toc:r}=V(),{title:m,subheader:y,description:w,hideModulesSection:g}=I();return Z(e),(p,n)=>{const C=le,N=ae,z=J,d=Q,k=W,A=j,T=K,L=X,x=Y;return a(),h(x,{background:"alt"},{aboveHeader:s(()=>[l(N,null,{default:s(()=>[l(C,{message:"These Docs are for Ripple version 2.0. If you are looking for the original Ripple Storybook please click below",linkText:"View Ripple 1 storybook",linkUrl:"https://master--5e736ff82649250022dd830c.chromatic.com/","alert-id":"storybook-alert",isDismissible:!1})]),_:1})]),aboveBody:s(()=>[l(z,{title:t(m),description:t(y)},null,8,["title","description"]),o("div",ce,[o("div",pe,[l(k,{title:"Getting Started"},{default:s(()=>[o("div",de,[o("div",_e,[l(d,u(f(t(e).primaryCTA)),{default:s(()=>[o("p",null,i(t(e).primaryCTA.description),1)]),_:1},16)]),o("div",me,[l(d,u(f(t(e).secondaryCTA)),{default:s(()=>[o("p",null,i(t(e).secondaryCTA.description),1)]),_:1},16)])])]),_:1})])])]),belowBody:s(()=>[t(e).whatsNew?(a(),h(L,{key:0,title:t(e).whatsNew.title,links:t(e).whatsNew.links},{default:s(()=>[l(T,null,{default:s(()=>[o("p",null,i(t(e).whatsNew.description),1)]),_:1})]),_:1},8,["title","links"])):_("",!0)]),default:s(()=>[l(k,{title:"Find out more"},{default:s(()=>[o("div",ue,[o("div",fe,[l(d,u(f(t(e).quickLink1)),{default:s(()=>[o("p",null,i(t(e).quickLink1.description),1)]),_:1},16)]),o("div",he,[l(d,u(f(t(e).quickLink2)),{default:s(()=>[o("p",null,i(t(e).quickLink2.description),1)]),_:1},16)]),o("div",ke,[l(d,u(f(t(e).quickLink3)),{default:s(()=>[o("p",null,i(t(e).quickLink3.description),1)]),_:1},16)])])]),_:1}),!t(g)&&t(e).modulesCTA?(a(),h(k,{key:0,title:"Using Ripple in SDP sites"},{default:s(()=>[o("div",{class:"rpl-grid",style:M({"--rpl-clr-gradient-horizontal":"var(--rpl-clr-dark)"})},[o("div",ve,[l(d,G(t(e).framework,{highlight:""}),{default:s(()=>[o("p",null,i(t(e).framework.description),1)]),_:1},16)])],4)]),_:1})):_("",!0),l(k,null,{default:s(()=>[t(e)&&!t(e)._empty?(a(),h(A,{tag:"DocsContent",class:"content-full",key:t(e)._id,value:t(e)},null,8,["value"])):_("",!0)]),_:1})]),_:1})}}}),Ve=D(ye,[["__scopeId","data-v-a9424485"]]);export{Ve as default};
