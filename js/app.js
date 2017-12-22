// Declaración de variables
$(document).ready(function(){
  var firstInput = $('#username');
  var secondInput = $('#password');
  var thirdInput = $('#confirm_password');
  var firstPopover = $('.span-1');
  var secondPopover = $('.span-2');
  var thirdPopover = $('.span-3');
  var submitBtn = $('#submit');  

// Muestra y oculta las notificaciones por cada input
  firstInput.on('click', function(){
    firstPopover.show();
  })

  secondInput.on('click', function(){
    secondPopover.show();
  })

  thirdInput.on('click', function(){
    thirdPopover.show();
  })

  firstInput.on('keyup', function(){
    if (firstInput.val().length > 3) {
      firstPopover.hide();
    }
  })

  secondInput.on('keyup', function(){
    if (secondInput.val().length > 6) {
      secondPopover.hide();
    }
  })

  thirdInput.on('keyup', function(){
    if (thirdInput.val().length > 6) {
      thirdPopover.hide();
    }
  })

  //Valida campos vacíos, contraseña incorrecta y campos de longs. menores.

  submitBtn.on('click', function(){
    if (secondInput.val() !== thirdInput.val()) {
      thirdInput.css('outline', '1px solid red');
      $('.msg').show();
      $('input[type="submit"]').attr('disabled','disabled');
    } else if (firstInput.val() == '' && secondInput.val() == '' && thirdInput.val() == ''){
      $('input').css('outline', '1px solid red');
      $('.msg').text('*Por favor, llena los campos').show();
      $('input[type="submit"]').attr('disabled','disabled');
    }
  })

  submitBtn.on('click', function(){
    if (firstInput.val().length <= 3 && secondInput.val().length <= 6 && thirdInput.val().length <= 6){
      $('input[type="submit"]').attr('disabled','disabled');
    }

  })
});  
