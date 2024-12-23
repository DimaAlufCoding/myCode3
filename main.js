initApp()
attachEventListeners()







function initApp() {
    renderGallery()
    setupColorPicker()
    
}


function attachEventListeners() {
    const textInput = document.getElementById('meme-text')
    textInput.addEventListener('input', handleTextInput)
    console.log(textInput)
}

function handleTextInput(event) {
    const newText = event.target.value
    setLineTxt(newText)

    const img = getCurrentImage();

    if (!img) return;

    renderMeme(img);
}


function getCurrentImage() {
    const selectedImgId = getMeme().selectedImgId;

    if (!selectedImgId) return;

    const img = new Image()
    img.src = gImgs.find((img) => img.id === selectedImgId).url;


    return img
}


function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}



