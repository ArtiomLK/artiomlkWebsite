// Side Bar
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); 
})(jQuery); 


$(document).ready(function(){
    $('.button').click(function(){
        var clickBtnValue = $(this).val();
        var ajaxurl = 'ajax.php',
        data =  {'action': clickBtnValue};
        $.post(ajaxurl, data, function (response) {
            // Response div goes here.
            alert("action performed successfully");
        });
    });

});
