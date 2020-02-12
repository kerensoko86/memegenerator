var gCanvas;
var gCtx;


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

function getColorFill() {
    var elColor = document.getElementById('color-fill');
    var colorValue = elColor.value;
    return colorValue;
}

function getColorStroke() {
    var elColor = document.getElementById('color-font');
    var colorValue = elColor.value;
    return colorValue;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data;
    elLink.download = 'my-meme.jpg'
}

function onChangeAlign(value) {
    updateLocation(value);
    drawImg();
}

function onMoveLine(value) {
    var meme = getMeme();
    var lines = getMemeLines(meme.selectedLineIdx);
    if (value === 'up') lines.location.y--;
    if (value === 'down') lines.location.y++;
}

function drawImg() {
    var img = new Image()
    var meme = getMeme();
    img.src = `images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderText();
    }
}

function onAddLine() {
    var newLine = document.querySelector('.line2').style.display = 'block';
    return newLine;
}


function onSetText(value) {
    setText(value);
    renderText();
}

function onChangeFont(value) {
    setFont(value);
    renderText();
}

function chooseLine(el) {
    var id = document.querySelector('#id')
    return id;
}

function lineNum(el) {
    var id = el;
    setSelectedLine(id);
    return id;
}

function onChange() {}

function renderText() {
    var meme = getMeme();
    var lines = getMemeLines(meme.selectedLineIdx);
    gCtx.font = `${lines.size}px ${lines.font}`;
    gCtx.fillText(lines.txt, lines.location.x, lines.location.y);
    gCtx.fillStyle = getColorFill();
    gCtx.strokeStyle = getColorStroke();
    gCtx.textAlign = lines.align;
    gCtx.strokeText(lines.txt, lines.location.x, lines.location.y);
    drawImg();
}


function onGetFontSize(diff) {
    setSize(diff);
    renderText();
    drawImg();
}

document.getElementById('swap_button').onclick = function() {
    var tmp = document.getElementById('0').value;
    document.getElementById('0').value = document.getElementById('1').value;
    setText(document.getElementById('0').value);
    document.getElementById('1').value = tmp;
    renderText()
};