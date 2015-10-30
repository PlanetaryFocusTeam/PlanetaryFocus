$(function (){

  // Load world.png
  collie.ImageManager.add({
    "planet" : "images/world.png"
  });

  //Create a world layer
  var worldLayer = new collie.Layer({
    width: 500,
    height: 500
  });

  //Create object to display
  var world = new collie.DisplayObject({
    x: "center",
    y: "center",
    velocityRotate : 80,
    backgroundImage : "planet"
  }).addTo(worldLayer);

  //Add worldLayer to Renderer
  collie.Renderer.addLayer(worldLayer);

  // Load Renderer into container id
  collie.Renderer.load(document.getElementById("world"));

  //Start rendering
  collie.Renderer.start();

});
