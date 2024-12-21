let gMeme = {
    selectedImgId: null,
    lines: [{ txt: 'Default text', size: 20, color: 'black' }]
}

function getMeme() {
    return gMeme
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(newText) {
    if (gMeme.lines[0]) gMeme.lines[0].txt = newText
}
