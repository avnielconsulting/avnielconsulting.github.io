
$(document).ready(function() {

  $(".rotate").hover(function(){
    $(this).toggleClass("motion");
  });

}).on('click', 'a', function(event){

  var url = $.attr(this, 'href');

  if(url && url.indexOf('#') >= 0) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $(url).offset().top - 75
    }, 500);
  }
});

var app = angular.module('AvnielApp', []);
