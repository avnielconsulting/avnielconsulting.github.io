
$(document).ready(function() {

  $(".rotate").hover(function(){
    $(this).toggleClass("motion");
  });

}).on('click', 'a', function(event){

  var url = $.attr(this, 'href');

  if(url && url.indexOf('#') >= 0 && $(url).offset() > 0) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $(url).offset().top - 75
    }, 500);
  }
});

$('#menu img, #menu span').click(function() {
  window.open($("index.html").attr('href'),'_blank');
});

var app = angular.module('AvnielApp', []);
