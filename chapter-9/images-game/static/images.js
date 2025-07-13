window.onload = init

function init() {
    let blurred_images = document.getElementsByTagName("img")
    for (image of blurred_images) {
        image.onclick = unblurrImage
    }
}

function unblurrImage(event) {
    image = event.target
    image.src = `static/images/${image.id}.jpg`
}