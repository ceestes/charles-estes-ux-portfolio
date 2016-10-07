$( document ).ready(function() {

  checkSize();

  $(window).resize(checkSize);

  jQuery(".menu-trigger").click(function(e) {

    jQuery("nav").slideToggle();
    e.preventDefault();

  });

});

function checkSize(){

  if ($(".menu-trigger").css("display") == "block" ){

    var nav = $("nav");
    $(nav).hide();



    }
}
