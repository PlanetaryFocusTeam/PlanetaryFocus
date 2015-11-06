$(function (){
  // Load world.png
  var planet = document.getElementById("planet");

  // initialize planet animation
  TweenMax.to(planet, 0, {
    //set position to center of screen
    left: (window.innerWidth / 2) - 256,
    top: (window.innerHeight / 2) - 256,

    // scale planet relative to screen
    scaleX: window.innerWidth / (window.innerWidth + 512),
    scaleY: window.innerWidth / (window.innerWidth + 512),

    // bring planet to the front of window
    Zindex: 3
    });

  // start rotating planet
  TweenMax.to(planet, 100, {
    rotation:"360",
    repeat: -1,
    ease:Linear.easeNone
  });



});
