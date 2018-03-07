

    var windowWidth = $(window).width();
    if(windowWidth > 768){
        $(function() {
            var header = $('header');
            var backgrounds = new Array(
            'url("images/model18.jpeg")',
            'url("images/model25.jpeg")',
            'url("images/model19.jpeg")',
            'url("images/model15.jpeg")'
            );
            var current = 0;
            
            function nextBackground() {
            header.css(
            'background',
            backgrounds[current = ++current % backgrounds.length]
            );
            
            setTimeout(nextBackground, 5000);
            }
            setTimeout(nextBackground, 5000);
            header.css('background', backgrounds[0]);
            header.css('background-size', 'cover');
            //header.css('background-position', 'center')
            });


            //gallary slider
            $(function() {
              var gallary = $('.gallary');
              var backgrounds = new Array(
              'url("images/gallary.jpeg")',
              'url("images/gallary5.jpeg")',
              'url("images/gallary11.jpeg")',
              'url("images/gallary9.jpeg")'
              );
              var current = 0;
              
              function nextBackground() {
              gallary.css(
              'background',
              backgrounds[current = ++current % backgrounds.length]
              );
              gallary.css('background-size', 'cover');
              setTimeout(nextBackground, 4000);
              }
              setTimeout(nextBackground, 4000);
              gallary.css('background', backgrounds[0]);
              gallary.css('background-size', 'cover');
              }); 
    }
    /*$('.item1').mouseover(function() {
      var item1 = $('.item1');
      var backgrounds = new Array(
      'url("images/slide9.jpeg")',
      'url("images/slide21.jpeg")',
      'url("images/slide1.jpeg")',
      'url("images/slide5.jpeg")'
      );
      var current = 0;
      
      function nextBackground() {
      item1.css(
      'background',
      backgrounds[current = ++current % backgrounds.length]
      );
      item1.css(
        'background-size',
        'cover'
      )
      
      setTimeout(nextBackground, 1000);
      }
      setTimeout(nextBackground, 1000);
      item1.css('background', backgrounds[0]);
      item1.mouseleave.nextBackground.stop
      });*/
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


//smooth scrolling


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  $(document).ready(function() {
    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['firstPage', 'secondPage'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
  
      //Scrolling
      css3: true,
      scrollingSpeed: 400,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
  
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
  
      //Design
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : ['#ccc', '#fff'],
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  
      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',
  
      lazyLoading: true,
  
      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
  });