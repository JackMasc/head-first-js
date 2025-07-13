window.onload = init

function init() {
    let blurred_images = document.getElementsByTagName("img")
    for (image of blurred_images) {
        image.onmouseover = unblurrImage
        image.onmouseout = reblurImage
    }
}

function unblurrImage(event) {
    image = event.target
    image.src = `static/images/${image.id}.jpg`
}

function reblurImage(event) {
    image = event.target
    image.src = `static/images/${image.id}blur.jpg`
}
