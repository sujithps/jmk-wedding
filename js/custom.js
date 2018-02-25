  
$(document).ready(function(){

 $(".clock").countdown('2018/04/13', function(event) {
    $(this).html(event.strftime('<span>%D <b>days</b></span> <span>%H<b>hours</b></span> <span>%M<b>minutes</b></span> <span>%S<b>seconds</b></span>'));
  });
  
  window.scrollTo(0,document.body.scrollHeight);
  
});