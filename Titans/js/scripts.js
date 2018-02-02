//navbar

$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('nav').addClass('shrink');
    }
    else{
        $('nav').removeClass('shrink');
    }
});



//navbar handle

$('.handle').on('click',function(){
    $('nav ul').toggleClass('showing')
})