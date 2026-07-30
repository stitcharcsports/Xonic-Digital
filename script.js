/*
=========================================
NAVBAR SCROLL EFFECT
=========================================
*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/*
=========================================
SMOOTH SCROLLING
=========================================
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/*
=========================================
SCROLL REVEAL
=========================================
*/

const revealItems = document.querySelectorAll(

`
section,
.feature-card,
.step-card,
.result-card,
.audience-card,
.compare-box,
.comparison-card,
.pipeline-box,
.highlight-box,
.cta-card
`

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.classList.add("reveal");

observer.observe(item);

});


/*
=========================================
FAQ
=========================================
*/

const faqs = document.querySelectorAll(".faq details");

faqs.forEach((item)=>{

item.addEventListener("toggle",()=>{

if(item.open){

faqs.forEach(other=>{

if(other!==item){

other.removeAttribute("open");

}

});

}

});

});


/*
=========================================
ACTIVE NAVIGATION
=========================================
*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop-120;

const height = section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*
=========================================
MOBILE MENU
=========================================
*/

const toggle = document.querySelector(".mobile-toggle");

const nav = document.querySelector(".nav-links");

if(toggle){

toggle.addEventListener("click",()=>{

nav.classList.toggle("mobile-open");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("mobile-open");

});

});


/*
=========================================
BUTTON RIPPLE
=========================================
*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*
=========================================
PIPELINE HOVER
=========================================
*/

document.querySelectorAll(".pipeline-box").forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-8px) scale(1.02)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="";

});

});


/*
=========================================
CURRENT YEAR
=========================================
*/

const year = document.querySelector(".current-year");

if(year){

year.textContent = new Date().getFullYear();

}


/*
=========================================
PRELOADER SUPPORT (OPTIONAL)
=========================================
*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log("Website Ready.");