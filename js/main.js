// burger menu
const hamburger = document.querySelector(".header__burger");
const closeburger = document.querySelector(".close");

const navMenu = document.querySelector(".mini-menu");

hamburger.addEventListener("click",() =>{
    navMenu.classList.add("active");
})
closeburger.addEventListener("click",() =>{
    navMenu.classList.remove("active");
})
document.querySelectorAll(".burgerclick").forEach(n=> n.addEventListener("click",()=>{
    navMenu.classList.remove("active");
}))

// onscroll header shadow
const header = document.querySelector(".header");
window.onscroll = ()=>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll")
      }
}


// send button
let send = document.querySelector(".send");
let sendInput = document.querySelector(".send__input");

send.addEventListener("click",()=>{
    sendInput.value="";
})