/* ==================================
   animations.js
================================== */

/* Reveal Animation */

const reveals =
document.querySelectorAll(
".service-card,.feature-card,.project-card,.about-image,.about-content,.stats-grid"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(60px)";

item.style.transition=
"all .8s ease";

observer.observe(item);

});

/* Navbar Blur Effect */

window.addEventListener(
"scroll",
()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.style.backdropFilter =
"blur(25px)";

}else{

navbar.style.backdropFilter =
"blur(0px)";
}

});

/* Smooth Anchor Scroll */

document.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
)

.scrollIntoView({

behavior:"smooth"

});

});

});
