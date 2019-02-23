var backgroundVal = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colors = document.querySelector("#colors");
var body = document.querySelector("body");


window.onload = function() {
	body.style.background = "linear-gradient(to right," +
		color1.value +
		"," +
		color2.value +
		" )";
	let style = window.getComputedStyle(body);
    backgroundVal.textContent  = style.getPropertyValue('background');
	
};


colors.addEventListener("input", function (e) {
	body.style.background = "linear-gradient(to right," +
		color1.value +
		"," +
		color2.value +
		" )";

	backgroundVal.textContent = body.style.background +";";	
});


