// Desaparecer span y aparecer popover cuano la tecla este en el input, submit deshabilitado
$(document).ready(function(){
  var firstInput = $('#username');
  var secondInput = $('#password');
  var thirdInput = $('#confirm_password');
  var firstPopover = $('.span-1');
  var secondPopover = $('.span-2');
  var thirdPopover = $('.span-3');
  var submitBtn = $('#submit');  

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
  
  submitBtn.on('click', function(){
    if (secondInput.val() !== thirdInput.val()) {
      thirdInput.css('border', '1px solid red');
    }
  })
  
  

});  
