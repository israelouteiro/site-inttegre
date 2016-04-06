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

      function validar() {
        var formulario = document.getElementById("formulario");
        var email = formulario.email;
        var nome = formulario.nome;

        var regex_email = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
        var regex_nome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/ 

        if (!regex_email.test(email.value)) {
            document.querySelector('input[type=email]').oninvalid = function() {
              this.setCustomValidity("");
              if (!this.validity.valid) {
                this.setCustomValidity("Digite um email valido");
              }

            }

         }

         if (regex_nome.test(nome.value)) {
            alert("nome valido");
         
         } else {
          alert("nome invalido");
         }

   }

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