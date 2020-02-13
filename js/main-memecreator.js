var gCanvas;
var gCtx;
var gID = 0;


var mouseClicked = false;

function onInitMeme(id) {
    document.querySelector('.meme-container').style.display = 'block';
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    drawImg(id);
}

function getColorFill() {
    var elColor = document.getElementById('color-fill');
    var colorValue = elColor.value;
    setColorFill(colorValue);
    renderText();
}

function getColorStroke() {
    var elColor = document.getElementById('color-font');
    var colorFont = elColor.value;
    setColorFont(colorFont);
    drawImg();
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
    var lines = getMemeLines();
    if (value === 'up') lines[meme.selectedLineIdx].location.y--;
    if (value === 'down') lines[meme.selectedLineIdx].location.y++;
    drawImg();
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
    document.getElementById('0').value = '';
    gID++;
}


function onSetText(value) {
    lineNum(gID);
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

function renderText() {
    var lines = getMemeLines();
    lines.forEach(line => {
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillText(line.txt, line.location.x, line.location.y);
        gCtx.fillStyle = line.colorfill;
        gCtx.strokeStyle = line.colorfont;
        gCtx.textAlign = line.align;
        gCtx.strokeText(line.txt, line.location.x, line.location.y);
    });
    drawImg();
}


function onGetFontSize(diff) {
    setSize(diff);
    renderText();
    drawImg();
}

function change() {
    var lines = getMemeLines();
    var tmp = lines[0].txt;
    lines[0].txt = lines[1].txt;
    lines[1].txt = tmp;
    drawImg();
}

function onClearLine(value) {
    clearLine(value)
    drawImg();

}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    var elBtn = document.querySelector('.menu-btn');
    elBtn.innerText = (elBtn.innerText === '☰') ? 'X' : '☰';
}