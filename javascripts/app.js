$(function() {
  $.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
  }

  $('.clickabout').on('click', function(event){
    event.preventDefault();
    $('#about').scrollView();
  })

  $('img').on('click', function(){
    var modal = '#'+($(this).attr('id'))+"Modal";
    $(modal).show();
  })
  $('.close').on('click', function(){
    $('.modal').hide();
  })
});
