(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",r),s.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u=document.querySelector(".top-sellers-btn"),p=document.querySelector(".hero-button-one"),m=document.querySelector(".reviews-open-btn"),c=document.querySelector(".backdrop"),l=document.querySelector(".backdrop-reviews");u.addEventListener("click",()=>{d(c)});p.addEventListener("click",()=>{d(c)});m.addEventListener("click",()=>{d(l)});function d(n){n.classList.remove("is-hidden")}function a(n){n.classList.add("is-hidden")}const b=document.querySelector(".modal-close-btn");b.addEventListener("click",()=>{a(c)});const f=document.querySelector(".modal-reviews-close-btn");f.addEventListener("click",()=>{a(l)});const w=document.querySelector(".modal-reviews-button-submit");w.addEventListener("click",()=>{a(l)});new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}});new Swiper(".swiper_1",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:28},1158:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
