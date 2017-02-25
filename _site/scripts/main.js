$(document).ready(function() {
  //Query code here




  $('.interactive-block').click(function(){
    $(this).find('.interactive-content').toggleClass('active');
  });


  $('.nav-button').click(function() {
    $('nav').toggleClass('mobile-nav-active');
  });


});
