import{c as e,a as t,b as o,d as r,r as s,o as n,e as l,f as a,t as u,F as c,p as i,g as d,h as p,i as m,j as f}from"./vendor-55bad255.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=e({history:t(),routes:[]}),h=o({state:{couter:0}});var v=(e,t)=>{const o=e.__vccOpts||e;for(const[r,s]of t)o[r]=s;return o};const b=e=>(i("data-v-8203a322"),e=e(),d(),e),y=b((()=>a("p",null,[p(" Recommended IDE setup: "),a("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),p(" + "),a("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1))),k=b((()=>a("p",null,[p("See "),a("code",null,"README.md"),p(" for more information.")],-1))),_=b((()=>a("p",null,[a("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),p(" | "),a("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1))),V=b((()=>a("p",null,[p(" Edit "),a("code",null,"components/HelloWorld.vue"),p(" to test hot module replacement. ")],-1)));var j=v(r({props:{msg:null},setup(e){const t=s(0);return(o,r)=>(n(),l(c,null,[a("h1",null,u(e.msg),1),y,k,_,a("button",{type:"button",onClick:r[0]||(r[0]=e=>t.value++)},"count is: "+u(t.value),1),V],64))}}),[["__scopeId","data-v-8203a322"]]);const E=a("img",{alt:"Vue logo",src:"./static/png/logo-03d6d6da.png"},null,-1);f(r({setup:e=>(e,t)=>(n(),l(c,null,[E,m(j,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))})).use(g).use(h).mount("#app");