var gCanvas;
var gCtx;
var gX = 100;
var gY = 100;


function onInitMeme(id) {
    document.querySelector('.meme-container').style.display = 'block';
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    drawImg(id);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function getColor() {
    var elColor = document.getElementById('color-font');
    var colorValue = elColor.value;

    return colorValue;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data;
    elLink.download = 'my-meme.jpg'
}

function drawImg(id) {
    var img = new Image()
    img.src = `images/${id}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function renderText(value) {
    var lines = getMemeLines();
    gCtx.font = `${lines.size}px Impact`;
    gCtx.fillText(getText(value), gX, gY);
    gCtx.fillStyle = setColor();
    gCtx.strokeText(getText(value), gX, gY)
}

function onGetFontSize(diff) {
    setSize(diff);
}

function onClearLine() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}