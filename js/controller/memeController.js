let gElCanvas
let gCtx
let gCurrColor = "black"
const CANVAS_WIDTH = 500
const CANVAS_HEIGHT = 500

function initCanvas() {
    gElCanvas = document.getElementById("meme-canvas")
    gCtx = gElCanvas.getContext("2d")
    gElCanvas.width = CANVAS_WIDTH
    gElCanvas.height = CANVAS_HEIGHT
}

function renderMeme(img) {
    if (!gElCanvas) initCanvas();

    clearCanvas()

    if (!img) return

    const meme = getMeme()
    
    const imgRatio = img.naturalWidth / img.naturalHeight
    let renderWidth = CANVAS_WIDTH
    let renderHeight = CANVAS_HEIGHT
    if (imgRatio > 1) {
        renderHeight = CANVAS_WIDTH / imgRatio
    } else {
        renderWidth = CANVAS_HEIGHT * imgRatio
    }
    const offsetX = (CANVAS_WIDTH - renderWidth) / 2
    const offsetY = (CANVAS_HEIGHT - renderHeight) / 2

    gCtx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight)

    const centerX = CANVAS_WIDTH / 2
    const centerY = CANVAS_HEIGHT / 2

    drawText(meme, centerX, centerY)

}




function clearCanvas() {
    
    if(!gCtx) return
    gCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function drawText(meme, x, y) {
    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.fillStyle = meme.lines[0].color
    gCtx.textAlign = "center"
    gCtx.fillText(meme.lines[0].txt, x, y)
}
