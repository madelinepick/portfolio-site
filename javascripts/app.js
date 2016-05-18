$(function() {
    $('img').on('click', function(){
      var modal = '#'+($(this).attr('id'))+"Modal";
      $(modal).show();
    })
    $('.close').on('click', function(){
      $('.modal').hide();
    })
});
