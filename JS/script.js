window.onload = function () {
	let image = document.getElementById("image");
	image.style.filter = "brightness(0%)";
};

function Lights() {
	let image = document.getElementById("image");
	let lightSwitch = document.getElementById("light_switch");

	if (image.style.filter === "brightness(0%)") {
		image.style.filter = "brightness(100%)";
		lightSwitch.value = "Turn Off";
	} else {
		image.style.filter = "brightness(0%)";
		lightSwitch.value = "Turn On";
	}
}
