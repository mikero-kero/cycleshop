$(document).ready(function(){

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    },500);
  });

  $('.form-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    },500);
  });

  $('.logo').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    },400);
  });


  $('.menu-icon').on('click',function(){
      $('.submenu').slideToggle();
      return false;
  });
});
