 $('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2500, 'swing', function () {
 window.location.hash = target;
 });
 });

 // grecaptcha.ready(function() {
 //      grecaptcha.execute('reCAPTCHA_site_key', {action: 'homepage'}).then(function(token) {
 //         ...
 //      });
 //  });

 $(document).ready(function(){
      $('.slider').bxSlider();
    });
