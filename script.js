let $tabLinks = document.getElementsByClassName('tablinks');
let $tabcontents = document.getElementsByClassName('tabcontents');
let $sideMenu = document.getElementById('sidemenu');

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

function closemenu(){
    $sideMenu.style.right = '-200px';
}

function openmenu(){
    $sideMenu.style.right = '0';
}