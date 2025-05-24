let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
    guess = prompt("Make your guess (number from 0 to 6):");

    if (guess < 0 || guess > 6) {
        alert("Enter a valid number")
    }
    else {
        guesses = guesses + 1
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Thats's a hit!")
        }
        else {
            alert("That's a miss :(")
        }
        if (hits == 3) {
            alert("You sunk the ship in " + guesses + " attempts!");
            isSunk = true;
        }
    }

}