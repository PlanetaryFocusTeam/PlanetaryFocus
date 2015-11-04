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
	var starBackground = new collie.DisplayObject({
		originX: 0,
		originY: 0,
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
	$(window).resize({originalX: window.innerWidth, originalY: window.innerHeight}, function(){
		worldLayer.resize(window.innerWidth, window.innerHeight, true);
		// world.set("x", (window.innerWidth / 2) - 256);
		// world.set("y", (window.innerHeight / 2) - 256);
	  // world.set("scaleX", window.innerWidth / (window.innerWidth + 512));
    // world.set("scaleY", window.innerWidth / (window.innerWidth + 512));
		//starBackground.set("width", window.innerWidth * 2);
		//starBackground.set("height", window.innerHeight * 2);
	//	starBackground.set("scaleX", window.innerWidth / (window.innerWidth + 512));
	//	starBackground.set("scaleY", window.innerWidth / (window.innerWidth + 512));
		// var deltaX = originalX - window.innerWidth;
		// var deltaY = originalY - window.innerHeight;
	  // starBackground.set("originX", starBackground.get("originX") - deltaX);
		// alert("" + deltaX + "" + deltaY);
	  // starBackground.set("originY", starBackground.get("originY") - deltaY);

	});

});
