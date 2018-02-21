// Telephone Mask on Form
$(function(){
    $(".tel-field").mask("+7(999) 999-9999");
  });


//

$('.show-btn').click(function() {
    $('.calc__type_show').toggleClass("show");
    $(this).toggleClass("rotate");
});