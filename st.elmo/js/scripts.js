////////////////nav bar

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


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
    $('#link6').hover(function(){     
        $('#mySidenav').addClass('back5');    
    },     
    function(){    
        $('#mySidenav').removeClass('back5');     
    });
});   





