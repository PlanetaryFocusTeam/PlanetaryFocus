$(function (){

	// remove scroll options
	document.documentElement.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie only

	// Load world.png
	collie.ImageManager.add({
		"planet" : "images/world.png",
		"stars" : "images/stars-64x64.png" //temporary background
	});

	//Create a world layer
	var worldLayer = new collie.Layer({
		width: window.screen.availWidth,
		height: window.screen.availHeight
	});

	//Create star background to display
	var starBackground = new collie.DisplayObject({
		originX: 0,
		originY: 0,
		width: window.screen.availWidth * 3,
		height: window.screen.availHeight * 3,
		scaleX: window.innerWidth / (window.innerWidth + 512),
		scaleY: window.innerWidth / (window.innerWidth + 512),
		backgroundRepeat: "repeat",
		backgroundImage: "stars"
	}).addTo(worldLayer);

	//Create world object to display
	var world = new collie.DisplayObject({
		x: (window.innerWidth / 2) - 256, //center planet on x-axis
		y: (window.innerHeight / 2) - 256, //center planet on y-axis
		velocityRotate : 2,
		scaleX: window.innerWidth / (window.innerWidth + 512),
		scaleY: window.innerWidth / (window.innerWidth + 512),
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
		world.set("x", (window.innerWidth / 2) - 256);
		world.set("y", (window.innerHeight / 2) - 256);
		world.set("scaleX", window.innerWidth / (window.innerWidth + 512));
  	world.set("scaleY", window.innerWidth / (window.innerWidth + 512));
		starBackground.set("scaleX", window.innerWidth / (window.innerWidth + 512));
		starBackground.set("scaleY", window.innerWidth / (window.innerWidth + 512));
	});
});
