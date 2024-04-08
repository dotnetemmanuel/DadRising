//Game Map
const gameMapArr = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

function RandomizePosition() {
	const randomPosArray = [0, 1, 2, 3, 4];
	return randomPosArray[Math.floor(Math.random() * randomPosArray.length)];
}

//Characters
let player = {
	posX: 2,
	posY: 2,
	name: "You",
};

function generateUniquePosition(occupiedPositions) {
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

let occupiedPositions = [{ posX: player.posX, posY: player.posY }];

let dad = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/dad.jpg",
	name: "Dad",
};
occupiedPositions.push({ posX: dad.posX, posY: dad.posY });

// //Position functions
let mom = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/mom.jpg",
	name: "Mom",
};
occupiedPositions.push({ posX: mom.posX, posY: mom.posY });

let partner = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/partner.jpg",
	name: "Kattis",
};
occupiedPositions.push({ posX: partner.posX, posY: partner.posY });

let child1 = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/child1.jpg",
	name: "Saga",
};
occupiedPositions.push({ posX: child1.posX, posY: child1.posY });

let child2 = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/child2.jpg",
	name: "Léon",
};
occupiedPositions.push({ posX: child2.posX, posY: child2.posY });

let child3 = {
	...generateUniquePosition(occupiedPositions),
	image_source: "/images/child3.jpg",
	name: "Charlie",
};
occupiedPositions.push({ posX: child3.posX, posY: child3.posY });

function DrawGameMap() {
	let gameMap = document.getElementById("game_map");
	gameMap.innerHTML = "";
	gameMapArr[player.posY][player.posX] = player.name;
	gameMapArr[dad.posY][dad.posX] = dad.name;
	gameMapArr[mom.posY][mom.posX] = mom.name;
	gameMapArr[partner.posY][partner.posX] = partner.name;
	gameMapArr[child1.posY][child1.posX] = child1.name;
	gameMapArr[child2.posY][child2.posX] = child2.name;
	gameMapArr[child3.posY][child3.posX] = child3.name;

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
	if (player.posY <= 0) {
		player.posY = player.posY;
	} else {
		gameMapArr[player.posY][player.posX] = "";
		player.posY--;
		if (gameMapArr[player.posY][player.posX] !== "") {
			console.log(
				"There is " + gameMapArr[player.posY][player.posX] + " at this index"
			);
		}
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
		if (gameMapArr[player.posY][player.posX] !== "") {
			console.log(
				"There is " + gameMapArr[player.posY][player.posX] + " at this index"
			);
		}
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
		if (gameMapArr[player.posY][player.posX] !== "") {
			console.log(
				"There is " + gameMapArr[player.posY][player.posX] + " at this index"
			);
		}
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
		if (gameMapArr[player.posY][player.posX] !== "") {
			console.log(
				"There is " + gameMapArr[player.posY][player.posX] + " at this index"
			);
		}
		DrawGameMap();
		console.log(player.posY + " " + player.posX);
	}
}

DrawGameMap();
