function renderGallery() {
    renderImages()
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderMeme)
}

function loadImageFromInput(ev, onImageReady) {
    // document.querySelector('.share-container').innerHTML = ''
    const reader = new FileReader()

    reader.onload = function (event) {
        const img = new Image()
        img.onload = () => onImageReady(img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}

function currentImg(currImg) {
    if (!currImg) return;

    const img = new Image()

    img.src = currImg
    img.onload = () => {
        renderMeme(img)
    }
}
