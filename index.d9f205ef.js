const e=(e,r,o)=>{o.property=e.value},r=document.querySelector("#form");document.querySelector("#submit-btn");const o=document.querySelector("#backdrop"),t=document.querySelector("#close-btn"),l=document.querySelector("body"),s={};r.addEventListener("submit",t=>{t.preventDefault(),e(r.querySelector("#form-name"),r.querySelector("#form-name").dataset.property,s),e(r.querySelector("#form-email"),r.querySelector("#form-email").dataset.property,s),e(r.querySelector("#form-message"),r.querySelector("#form-message").dataset.property,s),r.querySelector("#form-name").value="",r.querySelector("#form-email").value="",r.querySelector("#form-message").value="",o.classList.toggle("is-hidden"),l.classList.toggle("no-scroll")}),t.addEventListener("click",()=>{o.classList.toggle("is-hidden"),l.classList.toggle("no-scroll")}),console.log(s);
//# sourceMappingURL=index.d9f205ef.js.map
