const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,o=setInterval((function(t){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=e,span.textContent=e}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.5dcee56d.js.map