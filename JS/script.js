// window.onload = function () {
// 	let image = document.getElementById("image");
// 	image.style.filter = "brightness(0%)";
// };

//Creating array
const gameMapArr = [
	["-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-"],
];

let player = {
	posX: 2,
	posY: 2,
};

drawGameMap();

function drawGameMap() {
	let gameMap = document.getElementById("game_map");
	gameMap.innerHTML = "";
	gameMapArr[player.posY][player.posX] = "X";

	for (let i = 0; i < gameMapArr.length; i++) {
		let mapRows = document.createElement("tr");
		for (let j = 0; j < gameMapArr[i].length; j++) {
			let cellData = document.createElement("td");
			cellData.textContent = gameMapArr[i][j];
			mapRows.appendChild(cellData);
		}
		gameMap.appendChild(mapRows);
	}
}

function GoUp() {
	if (player.posY === 0) {
		player.posY = player.posY;
	} else {
		gameMapArr[player.posY][player.posX] = "-";
		player.posY--;
		drawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoDown() {
	if (player.posY === 4) {
		player.posY = player.posY;
	} else {
		gameMapArr[player.posY][player.posX] = "-";
		player.posY++;
		drawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoLeft() {
	if (player.posX === 0) {
		player.posX = player.posX;
	} else {
		gameMapArr[player.posY][player.posX] = "-";
		player.posX--;
		drawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoRight() {
	if (player.posX === 4) {
		player.posX = player.posX;
	} else {
		gameMapArr[player.posY][player.posX] = "-";
		player.posX++;
		drawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function Lights() {
	let imageContainer = document.getElementById("image_container");
	let lightSwitch = document.getElementById("light_switch");

	if (imageContainer.style.filter === "brightness(0%)") {
		imageContainer.style.filter = "brightness(100%)";
		lightSwitch.value = "Turn Off";
	} else {
		imageContainer.style.filter = "brightness(0%)";
		lightSwitch.value = "Turn On";
	}
}
