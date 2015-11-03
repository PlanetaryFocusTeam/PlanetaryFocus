$(function (){
  //collie.Renderer.setRenderingMode("canvas");
  // Load world.png
  collie.ImageManager.add({
    "planet" : "images/world.png",
    "stars" : "images/stars-64x64.png" //temporary background
  });

  //Create a world layer
  var worldLayer = new collie.Layer({
    width: window.innerWidth,
    height: window.innerHeight
  });

  //Create star background to display
  //TODO: Create a better background
  var starBackground = new collie.DisplayObject({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundRepeat: "repeat",
    backgroundImage: "stars"
  }).addTo(worldLayer);

  //Create world object to display
  var world = new collie.DisplayObject({
    x: ((window.innerWidth / 2) - 250), //center planet on x-axis
    y: ((window.innerHeight / 2) - 250), //center planet on y-axis
    velocityRotate : 2,
    scaleX:(window.innerWidth / 2000),
    scaleY:(window.innerWidth / 2000),
    backgroundImage : "planet"
  }).addTo(worldLayer);

  //Add worldLayer to Renderer
  collie.Renderer.addLayer(worldLayer);


  // Load Renderer into container id
  collie.Renderer.load(document.getElementById("world"));

  //Start rendering
  collie.Renderer.start();

  // Dynamically change planet location and scale on window resize
  $(window).resize(function(){
    world.set("x",(window.innerWidth / 2) - 250);
    world.set("y",(window.innerHeight / 2) - 250);
    world.set("scaleX", (window.innerWidth / 2000));
    world.set("scaleY", (window.innerWidth / 2000));
  });

});
