

$(document).ready(function(){
  $(".track__carousel").owlCarousel({
  	center:true,
  	autoWidth:true,
  	loop:true,
    margin:60,
    // autoplay:true,
    // smartSpeed:3000,
    // autoplayTimeout:8000, 
  	responsive:{ 
  	 	0:{ 
  	 		items:1
        },
        768:{
            items:2
        },
        1200:{
            items:5,
            margin: 30,
        }
    }
  });
  $(".gallery__carousel").owlCarousel({
  	center:true,
  	autoWidth:true,
  	loop:true,
    margin:60,
    // autoplay:true,
    // smartSpeed:3000,
    // autoplayTimeout:8000, 
  	responsive:{ 
  	 	0:{ 
  	 		items:1
        },
        768:{
            items:3,
            margin:5,
        },
    }
  });
  $(".reviews__carousel").owlCarousel({
  	center:true,
  	autoWidth:true,
  	loop:true,
    margin:100,
    // autoplay:true,
    // smartSpeed:3000,
    // autoplayTimeout:8000, 
  	responsive:{ 
  	 	0:{ 
  	 		items:1
        },
        768:{
            items:3
        },
    }
  });
});

$(document).ready(function() {
  function accordion() {
  $(this).toggleClass('open');
  $('.prices__outer').not(this).removeClass('open');
  }
  $('.prices__outer').on('click', accordion);
});