$(function(){
	var pagetop = '#pagetop';
	var timer = false;
	var diffPosition = 0;
	var nowPosition = 0;
	
    $('#pagetop').hide();
 
    $(window).on("scroll", function() {
		diffPosition = nowPosition - $(window).scrollTop();
		nowPosition = $(window).scrollTop();
		if(diffPosition > 0){
			$('#pagetop').show();
		}else{
			$('#pagetop').hide();
		}
			
		if (timer !== false) {
        	clearTimeout(timer);
    	}
    	timer = setTimeout(function() {
    		if ($(this).scrollTop() > 200) {
            	$('#pagetop').fadeIn();
        	} else {
            	$('#pagetop').fadeOut();
        	}
    	}, 200);
        
		/*
        scrollHeight = $(document).height(); 
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        footHeight = $("footer").innerHeight();
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {       
            $(".gotop").css({
                "position":"absolute",
                "bottom": footHeight
            });
        } else {
            $(".gotop").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
		*/
    });
 
    $('#pagetop a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        return false;
     });
 
});