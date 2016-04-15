//script para fixar o menu     
      $(function(){   
        var nav = $('#menuHeader');   
        $(window).scroll(function () { 
          if ($(this).scrollTop() > 150) { 
            nav.addClass("menu-fixo"); 
          } else { 
            nav.removeClass("menu-fixo"); 
          } 
        });  
      });
      

// botao para voltar ao inicio da home
   $(function() {
    $('.back-to-top').hide();

    $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      }else {
       $('.back-to-top').fadeOut(); 
      }

    });

    $('.back-to-top').click(function(){
       $('html, body').animate({
        scrollTop: 0
       }, 800);
    }); 

    }); 


    //validacao de form
   $(document).ready(function(){
        $('#formulario').validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                
                termos: "required"
            },
            messages: {
                nome: {
                    required: "O campo nome é obrigatório.",
                    minlength: "O campo nome deve conter no mínimo 3 caracteres."
                },
                email: {
                    required: "O campo email é obrigatório.",
                    email: "O campo email deve conter um email válido."
                },
                
            }
 
        });
    });

$(document).ready(function() {
  $("#navbar a[href^='#']").on("click", function(e) {
    e.preventDefault(); 
   
    

    var hash = this.hash;
    $("html, body").animate( {
      scrollTop: $(hash).offset().top
    }, 900);
  });
});



   