window.onload = startTimer

function startTimer() {
    setTimeout(popAlert, 2000)
}

function popAlert() {
    al = alert("Time is over!")
    setTimeout(popAlert, 2000)
}