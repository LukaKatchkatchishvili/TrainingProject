const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav__wrapper");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const news = document.querySelector(".news");

hamburger.addEventListener("click",() =>{
    header.classList.toggle("active");
    footer.classList.toggle("active");
})
document.querySelectorAll(".header__nav__wrapper--link").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
}))
