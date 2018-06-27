$(document).ready(function () {
  // === navbar === //
  var clickDelay = 500,
    clickDelayTimer = null;

  $('.burger-click-region').on('click', function () {

    if (clickDelayTimer === null) {

      var $burger = $(this);
      $burger.toggleClass('active');
      $burger.parent().toggleClass('is-open');

      if (!$burger.hasClass('active')) {
        $burger.addClass('closing');
      }

      clickDelayTimer = setTimeout(function () {
        $burger.removeClass('closing');
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
      }, clickDelay);
    }
  });

  // === slick carousels === //
  $('.carousel').slick({
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplay: true,
    autoplaySpeed: 4000,
    zIndex: 10,
    speed: 500,
    //fade: true,
  });
  $('.carousel2').slick({
    prevArrow: '.prev2',
    nextArrow: '.next2',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      },]
  });
  $('.carousel3').slick({
    prevArrow: '.prev3',
    nextArrow: '.next3',
  });
  $('.carousel4').slick({
    prevArrow: '.prev4',
    nextArrow: '.next4',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*$('.carousel').on('afterChange', function( slick, currentSlide){
    $(".slide-current .text p").removeClass('start-text-down');
    $('.slide-current .text p').addClass('end-text-down');        
 });*/
  // === slider === //
  //////////
  //slide z-index
  var counter = 1;
  var counter2 = 2;
  var counter3 = 3;
  $('.next3').click(function () {
    if (counter === 3) {
      counter = 1; // If counter = 3, set it back to 1 for next loop
    } else {
      counter++; // Else, add 1 to the counter
    }
    if (counter2 === 3) {
      counter2 = 1; // If counter = 3, set it back to 1 for next loop
    } else {
      counter2++; // Else, add 1 to the counter
    }
    if (counter3 === 3) {
      counter3 = 1; // If counter = 3, set it back to 1 for next loop
    } else {
      counter3++; // Else, add 1 to the counter
    }
    $("#slider1").attr("class", "slide" + counter);
    $("#slider2").attr("class", "slide" + counter2);
    $("#slider3").attr("class", "slide" + counter3);
  })
  $('.prev3').click(function () {
    if (counter === 1) {
      counter = 3; // If counter = 3, set it back to 1 for next loop
    } else {
      counter--; // Else, add 1 to the counter
    }
    if (counter2 === 1) {
      counter2 = 3; // If counter = 3, set it back to 1 for next loop
    } else {
      counter2--; // Else, add 1 to the counter
    }
    if (counter3 === 1) {
      counter3 = 3; // If counter = 3, set it back to 1 for next loop
    } else {
      counter3--; // Else, add 1 to the counter
    }
    $("#slider1").attr("class", "slide" + counter);
    $("#slider2").attr("class", "slide" + counter2);
    $("#slider3").attr("class", "slide" + counter3);
  });
  $('#mySlider').slickAnimation();
  // === end === //
  AOS.init();

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("black");
    } else {
        $("header").removeClass("black");
    }
});

 // === burger menu === //
 $('.burger').click(function(){
   $('nav').toggleClass('open')
   $('nav').toggleClass('closed')
 })





});


