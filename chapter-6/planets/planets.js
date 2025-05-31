function updatePlanet() {
    let rp = document.getElementById("rp")
    console.log(rp.innerHTML)
    rp.innerHTML = "Not so well!!"
    rp.setAttribute("class", "red")
}

window.onload = updatePlanet