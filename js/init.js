(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); 
})(jQuery); 


$(document).ready(function(){
  $('.slider').slider();
});

  var options = [
    {selector: '.class', offset: 200, callback: customCallbackFunc },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);