//==================
// NAVBAR
//==================

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}



var windowWidth = $(window).width();
if(windowWidth > 768){
    function openNav() {
        document.getElementById("mySidenav").style.width = "23%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    }
}


//removable nav
    $(window).scroll(function(){
    if ($(document).scrollTop() > 350){
        $('header').hide(500)
    }});

    
    $(window).scroll(function(){
        if ($(document).scrollTop() < 350){
            $('header').show(500)
        }});

        //go to top button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//animate
AOS.init({
    duration: 1200,
  })