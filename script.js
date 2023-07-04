const $tabLinks = document.getElementsByClassName('tablinks');
const $tabcontents = document.getElementsByClassName('tabcontents');
const $sideMenu = document.getElementById('sidemenu');
const $left = document.querySelector('.left');
const $cursor = document.querySelector('.cursor');

function opentab(name){
    for(link of $tabLinks){
        link.classList.remove("activelink");
    }
    for(content of $tabcontents){
        content.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(name).classList.add("activetab");
}

let b = document.querySelector('.header').addEventListener('mousemove', function(e){
    Px = (e.clientX / window.innerWidth) * 100;
    Py = (e.clientY / window.innerHeight) * 100;
    $left.style.width = `calc(${Px}vw + 1px)`;
})

let a = window.addEventListener('touchmove', function(e){
    p = (e.touches[0].clientX / window.innerWidth) * 100;
    $left.style.width = `calc(${p}vw + 1px)`;
})
