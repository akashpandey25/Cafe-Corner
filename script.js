const menuOpenBtn=document.querySelector("#menu-open-btn");
const menuCloseBtn=document.querySelector("#menu-close-btn");
menuOpenBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseBtn.addEventListener("click",()=>{
    document.body.classList.remove("show-mobile-menu");
});