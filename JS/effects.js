$(document).ready(function() {   
    $('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').slideUp(200);
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});

	$('#return-to-top').click(function() {      // When arrow is clicked
    	$('body,html').animate({
        	scrollTop : 0                       // Scroll to top of body
    	}, 500);
	});

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
	})
});

// ===== Scroll to Top ==== 
