// http://127.0.0.1:5500/head-first-js/chapter-8/battleships.html

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
        {locations: ["01", "02", "03"],hits: ["", "", ""]},
        {locations: ["11", "12", "13"],hits: ["", "", ""]},
        {locations: ["31", "32", "33"],hits: ["", "", ""]},
    ],

    fire(guess) {
        let result ="miss";
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                result = "hit";
                ship.hits[index] = "hit";
                view.displayMessage(result.toUpperCase() + "!");
                view.displayGuess(guess, result);
                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                    view.displayMessage("You sank a battleship!");
                }
                return true
            }
        }
        view.displayMessage(result.toUpperCase() + "!");
        view.displayGuess(guess, result);
        return false;
    },
    isSunk(ships) {
        return (!ships.hits.includes(""));
    },
};

let controller = {
    guesses: 0,
    processGuess(guess) {
        let elaborated_guess = parseGuess(guess)
        if (elaborated_guess!=null) {
            result = model.fire(elaborated_guess);
            if (result == true && model.shipsSunk == model.numShips) {
                view.displayMessage("You won!!")
            }
        }
    }
}

function parseGuess(guess) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"]
    if (guess==null || guess.length!=2) {
        view.displayMessage("Please enter a valid guess!")
    } else {
        let firstChar = guess.charAt(0)
        let row = alphabet.indexOf(firstChar)
        let column = guess.charAt(1)
        if (isNaN(column)) {
            view.displayMessage("That's not on the board")
        } else if (column < 0 || column >= model.boardSize) {
            view.displayMessage("That's not on the board")
        } else if (row < 0 || row >= model.boardSize) {
            view.displayMessage("Not on the board")
        } else {
            return row + column
        }
    }
    return null
}

controller.processGuess("A0")