/* ==================================
   theme.js
================================== */

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;

/* Saved Theme */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

    body.classList.add(savedTheme);

}else{

    if(
      window.matchMedia(
      "(prefers-color-scheme: dark)"
      ).matches
    ){

        body.classList.add("dark");
    }
}

/* Icon Update */

function updateThemeIcon(){

    const icon =
    themeToggle.querySelector("i");

    if(body.classList.contains("dark")){

        icon.className =
        "fa-solid fa-sun";

    }else{

        icon.className =
        "fa-solid fa-moon";
    }
}

updateThemeIcon();

/* Toggle */

themeToggle.addEventListener(
"click",
()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem(
        "theme",
        "dark"
        );

    }else{

        localStorage.setItem(
        "theme",
        "light"
        );
    }

    updateThemeIcon();

});
