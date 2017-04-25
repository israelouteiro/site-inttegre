//fixa o mapa

$('.mapa').click(function() {
	$('.mapa iframe').css("pointer-events", "auto");
});


// botao para voltar ao inicio da home
$(function() {
	$('.back-to-top').hide();

	$('main').scroll(function(){
		if($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		}else {
			$('.back-to-top').fadeOut(); 
		}
	});

	$(document).on('click','.back-to-top',function(){ 
		$('main').animate({
			scrollTop: 0
		}, 800);
	});

}); 

var previewsH = 0;
var gotoItem = function(selector){ 
	headerHeight = $(window).width() > 1024 ? $('header').height() : 0 ;
	$('main').animate({
		scrollTop: previewsH + ( $(selector).offset().top - ( headerHeight + 45 ))
	}, 800, function(){
		previewsH = $('main').scrollTop();
	}); 
};

var cleanNGotoItem = function(selector){
	$('.mdl-layout__obfuscator').click()
	setTimeout(function(){
		gotoItem(selector);
	}, 100)
}