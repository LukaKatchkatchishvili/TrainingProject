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
