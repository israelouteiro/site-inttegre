var dialog;


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

	dialog = document.querySelector('#modal-contato-success');
	if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

	validateForm();

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

var validateForm = function(){
	$('#form-contato').validate({
		submitHandler: function(form){
			sentMail();
			return false;
		}
	});
}

var sentMail = function(){
	showLoad();
	var sent_data = { name:$('#name').val(), email:$('#email').val() , message:$('#message').val() };
	$.post('service/sender.php', sent_data).done(function(rdata){
		dialog.showModal();
		document.getElementById('form-contato').reset();
		hideLoad();
	}).fail(function(){
		hideLoad();
	})
}

var showLoad = function(){
	$('.loader').css('display','flex');
}

var hideLoad = function(){
	$('.loader').css('display','none');
}

var closeModal = function() {
    dialog.close();
};
