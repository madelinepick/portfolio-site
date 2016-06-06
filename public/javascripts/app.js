$(function() {
  $('img').on('click', function(){
    var modal = '#'+($(this).attr('id'))+"Modal";
    $(modal).slideDown(500);
  })
  $('.close').on('click', function(){
    $('.modal').slideUp(500);
  })
  $('.modal').on('click', function(){
    $('.modal').slideUp(500);
  })
});
