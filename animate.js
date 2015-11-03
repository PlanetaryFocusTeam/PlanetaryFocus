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
		originX: "left",
		originY: "top",
		width: window.innerWidth * 2,
		height: window.innerHeight * 2,
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
		worldLayer.set("width", window.innerWidth);
		worldLayer.set("height", window.innerHeight);
		world.set("x", (window.innerWidth / 2) - 256);
		world.set("y", (window.innerHeight / 2) - 256);
		world.set("scaleX", window.innerWidth / (window.innerWidth + 512));
		world.set("scaleY", window.innerWidth / (window.innerWidth + 512));
		starBackground.set("scaleX", window.innerWidth / (window.innerWidth + 512));
		starBackground.set("scaleY", window.innerWidth / (window.innerWidth + 512));
	});

});
