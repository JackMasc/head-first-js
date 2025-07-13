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
        {locations: ["", "", ""],hits: ["", "", ""]},
        {locations: ["", "", ""],hits: ["", "", ""]},
        {locations: ["", "", ""],hits: ["", "", ""]},
    ],

    generateAllShips() {
        let locations;
        for (let i=0; i < this.numShips; i++) {
            do {
                locations = this.generateShip()
            } while (this.collision(locations));
            this.ships[i].locations = locations 

        }
    },

    generateShip() {
        let direction = Math.floor(Math.random()*2)
        let row
        let col
        if (direction === 1) {
            row = Math.floor(Math.random()*this.boardSize)
            col = Math.floor(Math.random()*(this.boardSize - (this.shipLength +1)))
        } else {
            row = Math.floor(Math.random()*(this.boardSize - (this.shipLength +1)))
            col = Math.floor(Math.random()*this.boardSize)
        }
        let newShipLocations = []
        for (let i = 0; i<this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(`${row}${(col+i)}`)
            } else {
                newShipLocations.push(`${(row+i)}${col}`)
            }
        }
        return newShipLocations
    },

    collision(locations) {
        for (let i=0; i<this.numShips; i++) {
            let ship=this.ships[i]
            for (let j=0; j<this.shipLength; j++) {
                if (ship.locations.includes(locations[j])) {
                    return true
                }
            }
        }
        return false
    },

    fire(guess) {
        let result ="miss";
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    if (ship.hits[index] === "") {
                        result = "hit";
                        ship.hits[index] = "hit";
                        view.displayMessage(result.toUpperCase() + "!");
                        view.displayGuess(guess, result);
                        if (this.isSunk(ship)) {
                            this.shipsSunk++;
                            view.displayMessage("You sank a battleship!");
                        }
                        return true
                    } else {
                        view.displayMessage("You did already play this guess before!")
                        return false
                    }
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
    parseGuess(guess) {
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
    },
    processGuess(guess) {
        let elaborated_guess = this.parseGuess(guess)
        if (elaborated_guess) {
            this.guesses++
            let hit = model.fire(elaborated_guess);
            if (hit == true && model.shipsSunk === model.numShips) {
                view.displayMessage("You won!!")
            }
        }
    }
}

function setup() {
    let fireButton = document.getElementById("fireButton")
    fireButton.onclick = handleFireButton
    let restartButton = document.getElementById("restartButton")
    restartButton.onclick = handleRestartButton
    let guessInput = document.getElementById("guessInput")
    guessInput.onkeypress = handleKeyPress;
    model.generateAllShips()
}

function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton")
    if (e.keyCode === 13) {
        fireButton.click()
        return false
    }
}

function handleFireButton() {
    let guessInput = document.getElementById("guessInput")
    let guess = guessInput.value
    controller.processGuess(guess)
    guessInput.value = ""
}

function handleRestartButton() {
    window.location.reload()
}

window.onload = setup;