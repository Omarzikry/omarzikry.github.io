//navbar background

$(document).ready(function() {     
    $('#link1').hover(function(){     
        $('#mySidenav').addClass('back');    
    },     
    function(){    
        $('#mySidenav').removeClass('back');     
    });
});   


$(document).ready(function() {     
    $('#link2').hover(function(){     
        $('#mySidenav').addClass('back1');    
    },     
    function(){    
        $('#mySidenav').removeClass('back1');     
    });
});   

$(document).ready(function() {     
    $('#link3').hover(function(){     
        $('#mySidenav').addClass('back2');    
    },     
    function(){    
        $('#mySidenav').removeClass('back2');     
    });
});   


$(document).ready(function() {     
    $('#link4').hover(function(){     
        $('#mySidenav').addClass('back3');    
    },     
    function(){    
        $('#mySidenav').removeClass('back3');     
    });
});
$(document).ready(function() {     
    $('#link5').hover(function(){     
        $('#mySidenav').addClass('back4');    
    },     
    function(){    
        $('#mySidenav').removeClass('back4');     
    });
});

$(document).ready(function() {     
    $('.nav-btn').click(function(){
        $('nav').toggleClass('showing');
        $('.nav-btn').toggleClass('close');
        $('.text h1').toggleClass('nav-showing');
        $('.text h2').toggleClass('nav-showing');
        $('.text button').toggleClass('nav-showing');
    })
});
//change navigation icon color on scrolling
$(window).scroll(function(){
    if ($(document).scrollTop() > 650){
        $('div.dash').addClass('black');
    }
    else{
        $('div.dash').removeClass('black');
    }
});

//============
// Animation
//============

AOS.init({
    duration: 1200,
  })

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