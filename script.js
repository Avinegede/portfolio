
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);
console.log("she is dumb");
 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    const nav_items = document.querySelector(".nav .nav-items");
    nav_items.classList.toggle("active");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 