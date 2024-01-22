let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick= () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

function openservicespage(){
    window.location.href="services.html"
}


function opencareerspage(){
    window.location.href="apply.html"
}
function openclientspage(){
    window.location.href="clients.html"
}
function opencontactpage(){
    window.location.href="contact.html"
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal for header and website content
    ScrollReveal().reveal('.about', {
        duration: 500,
        easing: 'ease-in',
        scale: 1,
        viewFactor: 0.5,
        reset: true,
        distance: '20px',
        origin: 'bottom',
    });
    document.querySelectorAll('.box').forEach(function (box) {
    ScrollReveal().reveal(box, {
        duration: 500,
        easing: 'ease-in',
        scale: 1,
        viewFactor: 0.5,
        reset: true,
        distance: '20px',
        origin: 'bottom',
    });
    });
});
