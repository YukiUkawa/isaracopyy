$(function() {
	$('.faqlistitem').click(function(){
		var $answer=$(this).find('.answer');
	    if($answer.hasClass('open')){
	      $answer.removeClass('open');
	      $answer.slideUp();
	      $(this).find('span').text('+');
	    }
	    else {
	      $answer.addClass('open');
	      $answer.slideDown();
	      $(this).find('span').text('-');
	  	}
	});

	$('.toform').click(function(){
		var headerHeight = 75 ;
	    var id=$(this).attr('href');
	    var position=$(id).offset().top-headerHeight;
	    $('html,body').animate({
	      'scrollTop': position
	    },'slow');
	  });

	if (window.matchMedia('(max-width: 768px)').matches) {
		$('.boxflow').click(function(){
		var $flowdescription=$(this).find('.flowdescription');
	    if($flowdescription.hasClass('open')){
	      $flowdescription.removeClass('open');
	      $flowdescription.slideUp();
	      $(this).find('span').text('+');
	    }
	    else {
	      $flowdescription.addClass('open');
	      $flowdescription.slideDown();
	      $(this).find('span').text('-');
	  	} 
	});
	}
	else {

	};

	$('.top-btn').click(function(){
		$('html, body').animate({
			'scrollTop':0
		},'slow');
	});

	$(window).scroll(function(){
		$('.fadein').each(function(){
            var windowHeight = $(window).scrollTop();
            if (windowHeight > 0){
                $(this).addClass('scrollin');
            }else {
            	$(this).removeClass('scrollin');
            }
		});
	});
});
