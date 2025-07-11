let view = {
    displayMessage(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayGuess(id, result) {
        let cell = document.getElementById(id);
        cell.setAttribute("class", result);
    }
};

let model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [
        {locations: ["A1", "A2", "A3"],hits: ["", "", ""]},
        {locations: ["C1", "C2", "C3"],hits: ["", "", ""]},
        {locations: ["E1", "E2", "E3"],hits: ["", "", ""]},
    ],

    fire(guess) {
        let result = "miss";
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                result = "hit";
                ship.hits[index] = "hit";
                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                    view.displayMessage("You sank a battleship!");
                }
            }
        }
        view.displayGuess(guess, result);
        view.displayMessage(result.toUpperCase() + "!");
        if (result === "hit") {
            return true;
        }
        return false;
    },
    isSunk(ships) {
        return (!ships.hits.includes(""));
    },
};

model.fire(53);
model.fire(0);
model.fire(6);
model.fire(22);