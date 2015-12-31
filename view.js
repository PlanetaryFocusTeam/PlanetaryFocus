$(function (){
  // Load world.png
  var planet = document.getElementById("planet");

  // scale background image relative to window size
  $(document.body).css('background-size' ,(512 * window.innerWidth / (window.innerWidth + 512)) + 'px');

  // initialize planet animation
  TweenMax.to(planet, 0, {
    //set position to center of screen
    left: (window.innerWidth / 2) - 256,
    top: (window.innerHeight / 2) - 256,

    // scale planet relative to screen
    scaleX: window.innerWidth / (window.innerWidth + 512),
    scaleY: window.innerWidth / (window.innerWidth + 512),

    // bring planet to the front of window
    zIndex: 3
    });

  // start rotating planet
  TweenMax.to(planet, 100, {
    rotation:"360",
    repeat: -1,
    ease:Linear.easeNone
  });

  $(window).resize(function(){

    // adjust planet to new screen size
    TweenMax.to(planet, 0, {
      //set position to center of screen
      left: (window.innerWidth / 2) - 256,
      top: (window.innerHeight / 2) - 256,

      // scale planet relative to screen
      scaleX: window.innerWidth / (window.innerWidth + 512),
      scaleY: window.innerWidth / (window.innerWidth + 512)
    });

    // adjust background to new screen size
    $(document.body).css('background-size' ,(512 * window.innerWidth / (window.innerWidth + 512)) + 'px');
  });

});
