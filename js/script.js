// Sal.js
sal();

// Glide JS
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  scrollLock: true,
  dots: '#dots',
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

// Particles JS
particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


// Auto Scroll JQuery
$("#projects").click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#project").offset().top
  }, 2000);
});

$("#contacts").click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 2000);
});

$("#aboutMe").click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 2000);
});
