setTimeout(wakeUpUser, 5000)
function wakeUpUser() {
    alert("Wake up!");
}

let scopes = 5;
while (scopes > 0) {
    console.log("Eating ice");
    scopes = scopes - 1;
    if (scopes < 3) {
        alert("We are running out of ice cream!")
    }
};
console.log("Ice cream is finished")