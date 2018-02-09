//animated nav
/*function myNav() {
    document.getElementById("nav").style.WebkitAnimation = "nav-motion 2s ease forwards"; // Code for Chrome, Safari, and Opera
    document.getElementById("nav").style.animation = "nav-motion 2s ease forwards";
}*/

$(document).ready(function(){
    $(".bars").click(function(){
        $("#nav").toggleClass("nav-motion");
    });
});