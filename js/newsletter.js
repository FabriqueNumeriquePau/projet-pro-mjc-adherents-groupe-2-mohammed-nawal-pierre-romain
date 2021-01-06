function commande(nom, argument){
    if (typeof argument === 'undefined') {
      argument = '';
    }
    document.execCommand(nom, false, argument);
  }
  function rafraichit(){
    var valeur = $('.editeur').html();
    $('.htmlview').text(valeur);
  }
  $(document).ready(function(){
    $('button').click(function(){
      var id = $(this).attr('id');
      switch(id){
        case "createLink":
          argument = prompt("Quelle est l'adresse du lien ?");
          commande(id, argument);
          break;
        case "insertImage":
          argument = prompt("Veuillez entrer le lien vers l'image");
          commande(id, argument);
          break;
  
        case "forecolor":
          argument = prompt("Quelle couleur désirez vous ?");
          commande(id, argument);
          break;
  
        default:
          commande(id);
          break;
      }
      rafraichit();
    });
  
    $('.editeur').keyup(function(){
      rafraichit();
    });
  
    $('#save').click(function(){
      $('.message-popup').remove();
      $('.wysiwyg').append('<div class="message-popup">All changes saved.</div>');
      setTimeout(function(){
        $('.message-popup').css("opacity", ".8");
      }, 100);
      setTimeout(function(){
        $('.message-popup').remove();
      }, 3500);
    });
  });