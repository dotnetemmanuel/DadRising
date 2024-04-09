//GAME MAP
const gameMapArr = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

// VARIABLES
let player;
let dad;
let mom;
let child1;
let child2;
let cat;
let partner;
let occupiedPositions;
let score = 0;

//EVENT LISTENERS
document.getElementById("score").innerHTML = "Score: " + score;

let buttonUp = document.getElementById("button_up");
buttonUp.addEventListener("click", GoUp);

let buttonDown = document.getElementById("button_down");
buttonDown.addEventListener("click", GoDown);

let buttonLeft = document.getElementById("button_left");
buttonLeft.addEventListener("click", GoLeft);

let buttonRight = document.getElementById("button_right");
buttonRight.addEventListener("click", GoRight);

// FUNCTIONS
function ChangeImage() {
	let roomImage = document.getElementById("room_image");
	let playerPosition = [player.posY, player.posX].toString();
	let characterImage = document.getElementById("character_image");

	let imageMap = {
		"0,0": "/images/rooms/0-0.jpg",
		"0,1": "/images/rooms/0-1.jpg",
		"0,2": "/images/rooms/0-2.jpg",
		"0,3": "/images/rooms/0-3.jpg",
		"0,4": "/images/rooms/0-4.jpg",
		"1,0": "/images/rooms/1-0.jpg",
		"1,1": "/images/rooms/1-1.jpg",
		"1,2": "/images/rooms/1-2.jpg",
		"1,3": "/images/rooms/1-3.jpg",
		"1,4": "/images/rooms/1-4.jpg",
		"2,0": "/images/rooms/2-0.jpg",
		"2,1": "/images/rooms/2-1.jpg",
		"2,2": "/images/rooms/2-2.jpg",
		"2,3": "/images/rooms/2-3.jpg",
		"2,4": "/images/rooms/2-4.jpg",
		"3,0": "/images/rooms/3-0.jpg",
		"3,1": "/images/rooms/3-1.jpg",
		"3,2": "/images/rooms/3-2.jpg",
		"3,3": "/images/rooms/3-3.jpg",
		"3,4": "/images/rooms/3-4.jpg",
		"4,0": "/images/rooms/4-0.jpg",
		"4,1": "/images/rooms/4-1.jpg",
		"4,2": "/images/rooms/4-2.jpg",
		"4,3": "/images/rooms/4-3.jpg",
		"4,4": "/images/rooms/4-4.jpg",
	};

	if (imageMap[playerPosition]) {
		roomImage.style.transition = "opacity 1200ms ease-in-out";
		roomImage.style.opacity = "0";
		setTimeout(() => {
			roomImage.setAttribute("src", imageMap[playerPosition]);
			roomImage.style.opacity = "1";

			if (
				gameMapArr[player.posY][player.posX] === gameMapArr[dad.posY][dad.posX]
			) {
				characterImage.style.transition = "opacity 1200ms ease-in-out";
				characterImage.style.opacity = "0";
				setTimeout(() => {
					characterImage.setAttribute("src", "/images/characters/dad.png");
					characterImage.style.opacity = "1";
				}, 1200);
			} else {
				characterImage.style.transition = "";
				characterImage.style.opacity = "0";
				characterImage.setAttribute("src", "");
			}
		}, 1200);
	}
}
function RandomizePosition() {
	const randomPosArray = [0, 1, 2, 3, 4];
	return randomPosArray[Math.floor(Math.random() * randomPosArray.length)];
}

function GenerateUniquePosition(occupiedPositions) {
	let posX = RandomizePosition();
	let posY = RandomizePosition();

	while (
		(posX === 2 && posY === 2) ||
		occupiedPositions.some((pos) => pos.posX === posX && pos.posY === posY)
	) {
		posX = RandomizePosition();
		posY = RandomizePosition();
	}

	return { posX, posY };
}

function PlaceCharacters() {
	player = {
		posX: 2,
		posY: 2,
		name: "You",
	};

	occupiedPositions = [{ posX: player.posX, posY: player.posY }];

	dad = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/dad.jpg",
		name: "Dad",
	};
	occupiedPositions.push({ posX: dad.posX, posY: dad.posY });

	mom = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/mom.jpg",
		name: "Mom",
	};
	occupiedPositions.push({ posX: mom.posX, posY: mom.posY });

	partner = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/partner.jpg",
		name: "Kattis",
	};
	occupiedPositions.push({ posX: partner.posX, posY: partner.posY });

	child1 = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/child1.jpg",
		name: "Saga",
	};
	occupiedPositions.push({ posX: child1.posX, posY: child1.posY });

	child2 = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/child2.jpg",
		name: "Léon",
	};
	occupiedPositions.push({ posX: child2.posX, posY: child2.posY });

	cat = {
		...GenerateUniquePosition(occupiedPositions),
		image_source: "/images/child3.jpg",
		name: "Charlie",
	};
	occupiedPositions.push({ posX: cat.posX, posY: cat.posY });
}

function DrawGameMap() {
	let gameMap = document.getElementById("game_map");
	gameMap.innerHTML = "";
	gameMapArr[player.posY][player.posX] = player.name;
	gameMapArr[dad.posY][dad.posX] = dad.name;
	gameMapArr[mom.posY][mom.posX] = mom.name;
	gameMapArr[partner.posY][partner.posX] = partner.name;
	gameMapArr[child1.posY][child1.posX] = child1.name;
	gameMapArr[child2.posY][child2.posX] = child2.name;
	gameMapArr[cat.posY][cat.posX] = cat.name;

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

function CheckOccupied() {
	let message = document.getElementById("message");

	if (gameMapArr[player.posY][player.posX] !== "") {
		if (gameMapArr[player.posY][player.posX] !== "Dad") {
			score++;
			message.innerHTML = `<br>You have found and saved ${
				gameMapArr[player.posY][player.posX]
			}!`;
			document.getElementById("score").innerHTML = `Score: ${score}`;
		}

		if (gameMapArr[player.posY][player.posX] === "Dad") {
			message.style.transition = "opacity 2400ms ease-in-out";
			message.style.opacity = "0";
			setTimeout(() => {
				message.innerHTML = `<br> Your dad! He is euphoric and knocks you out with his 30 year-old joke:<br><br>${dadJoke}<br><br>GAME OVER`;
				message.style.opacity = "1";
			}, 2400);
		}
	}
      else{
            message.innerHTML = "";
      }
}

function GoUp() {
	if (player.posY <= 0) {
		player.posY = player.posY;
	} else {
		gameMapArr[player.posY][player.posX] = "";
		player.posY--;
		ChangeImage();
		CheckOccupied();
		DrawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoDown() {
	if (player.posY >= 4) {
		player.posY = player.posY;
	} else {
		gameMapArr[player.posY][player.posX] = "";
		player.posY++;
		ChangeImage();
		CheckOccupied();
		DrawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoLeft() {
	if (player.posX <= 0) {
		player.posX = player.posX;
	} else {
		gameMapArr[player.posY][player.posX] = "";
		player.posX--;
		ChangeImage();
		CheckOccupied();
		DrawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

function GoRight() {
	if (player.posX >= 4) {
		player.posX = player.posX;
	} else {
		gameMapArr[player.posY][player.posX] = "";
		player.posX++;
		ChangeImage();
		CheckOccupied();
		DrawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

// FUNCTION CALLS ON PAGE LOAD
PlaceCharacters();
DrawGameMap();
