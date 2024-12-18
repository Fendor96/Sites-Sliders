const menuBtn = document.getElementById("menuBTN");
let hamburger = document.getElementById('hamb');


menuBtn.addEventListener("click", ()=>{

    console.log("click");


    if (hamburger.classList.contains('desactiveBurger')) {
        hamburger.classList.replace('desactiveBurger', 'activeBurger');
        menuBtn.textContent = "X";
        menuBtn.style.color = "white";

    }else{
        hamburger.classList.replace('activeBurger', 'desactiveBurger');
        menuBtn.textContent = "☰";
        menuBtn.classList.add('slide-out');
    }

});