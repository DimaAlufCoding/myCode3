let gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [{ txt: 'Default text', size: 50, color: 'white',x:150,y:20 }]
}

function getMeme() {
    return gMeme
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}


function setLineTxt(newText) {
    const selectedLineIdx = gMeme.selectedLineIdx
    if (gMeme.lines[selectedLineIdx]) {
        gMeme.lines[selectedLineIdx].txt = newText
    }
}

function setColor(color) {
    const selectedLineIdx = gMeme.selectedLineIdx
    if (gMeme.lines[selectedLineIdx]) {
        gMeme.lines[selectedLineIdx].color = color
    }
}

function setFontSize(delta) {
    const selectedLineIdx = gMeme.selectedLineIdx;
    if (gMeme.lines[selectedLineIdx]) {

        gMeme.lines[selectedLineIdx].size += delta;
        if (gMeme.lines[selectedLineIdx].size < 10) {
            gMeme.lines[selectedLineIdx].size = 10; // Minimum font size
        }
    }
}

function setupTextInput() {
    const textInput = document.getElementById('meme-text')
    textInput.addEventListener('input', (event) => {
        setLineTxt(event.target.value) 
        renderMeme(getCurrentImage())
    })
}

function setupColorPicker() {
    const colorPicker = document.getElementById('color-picker')
    colorPicker.addEventListener('input', onChangeColor)
}

function addLine() {
    console.log('adding line')
    const newY = gMeme.lines.length === 0 ? 50 : gMeme.lines[gMeme.lines.length - 1].y + 40

    const newLine = {
        txt: 'New Line',
        size: 20,
        color : gMeme.lines[0].color,
        x: 150,
        y: newY
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    console.log(gMeme.selectedLineIdx)
}



function setText(meme,x,y) {
    console.log(gMeme.lines)

    meme.lines.forEach(line => {
    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.fillStyle = meme.lines[0].color
    gCtx.textAlign = "center"
    gCtx.strokeStyle = "red"
    const textWidth = gCtx.measureText(meme.lines[0].txt).width
    const textHeight = meme.lines[0].size
    gCtx.lineWidth = 2
    gCtx.strokeRect(
        x - textWidth / 2 - 5,
        y - textHeight,
        textWidth + 10,
        textHeight + 10 
    )
    gCtx.fillText(line.txt, x, y+line.y)})
}
