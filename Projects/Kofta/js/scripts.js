$(document).ready(function(){
    $(".dropdown, .btn-group").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});		


// Intiate animation for hover

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}



///////////////////equal

$(".big-lefty").height($(".big-righty").height());




////////////clickable box

$(".myBox").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });



/////////////googlemap


