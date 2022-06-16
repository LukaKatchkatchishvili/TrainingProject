// burger menu
const hamburger = document.querySelector(".header__burger");
const closeburger = document.querySelector(".close");

const navMenu = document.querySelector(".mini-menu");

hamburger.addEventListener("click",() =>{
    navMenu.classList.add("active");
    window.onscroll = ()=>{
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    };
})
closeburger.addEventListener("click",() =>{
    navMenu.classList.remove("active");
    window.onscroll = ()=>{
        window.onscroll=function(){}
    };
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



// remove active when clicked outside
document.addEventListener("click", (event) => {
    let clicked = event.target;
    do {
        if (clicked == navMenu || clicked == hamburger) {
            return;
        }
        clicked=clicked.parentNode;
    } while (clicked);
    navMenu.classList.remove("active");
});
