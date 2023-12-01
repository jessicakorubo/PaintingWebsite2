const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 100) {
        navbar.style.top = "0";
    }
    else {
        navbar.style.top = "initial";
    }
})