$(function() {
  $.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
  }
  // 
  // $(window).scroll(function() {
  //     if ($(this).scrollTop() >= ($('#about').position().top-100)) {
  //         $('#about').addClass('skew');
  //     }
  //   });

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
