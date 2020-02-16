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

function drawImg() {
    var img = new Image()
    var meme = getMeme();
    img.src = `images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderText();
    }
}

document.querySelector('#my-canvas').addEventListener("click", onMouseClick, false);
document.querySelector('#my-canvas').addEventListener("mousemove", onMouseMove, false);

function onMouseClick(ev) {
    mouseClicked = !mouseClicked;
}

function onMouseMove(ev) {
    if (mouseClicked) {
        draw(ev);
    }
}

function draw(ev) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;
    var meme = getMeme();
    var id = meme.selectedLineIdx;

    if (offsetY < meme.lines[0].location.y + 100) {
        id = 0;
    } else {
        id = 1;
    }
    meme.lines[id].location.x = offsetX;
    meme.lines[id].location.y = offsetY;

    drawImg();
}

function renderText() {
    var lines = getMemeLines();
    lines.forEach(line => {
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillStyle = line.colorfill;
        gCtx.strokeStyle = line.colorfont;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.location.x, line.location.y);
        gCtx.strokeText(line.txt, line.location.x, line.location.y);
    });
}

function loadSavedMemes() {
    var savedMemes = getSavedMemes();
    savedMemes.forEach(
        savedMeme => {
            var image = document.createElement('img');
            image.setAttribute("src", savedMeme);
            image.setAttribute("width", "400");
            image.setAttribute("height", "400");
            document.querySelector('.savedmemes').appendChild(image);
        })
}

// Changes lines attributes and other buttons
function getColorFill() {
    var colorValue = document.getElementById('color-fill').value;
    setColorFill(colorValue);
    drawImg();
    doTrans();
}

function getColorStroke() {
    var colorFont = document.getElementById('color-font').value;
    setColorFont(colorFont);
    drawImg();
}

function onChangeAlign(value) {
    updateLocation(value);
    drawImg();
}

function onChangeFont(value) {
    setFont(value);
    drawImg();
}

function onMoveLine(value) {
    var meme = getMeme();
    var lines = getMemeLines();
    if (value === 'up') lines[meme.selectedLineIdx].location.y--;
    if (value === 'down') lines[meme.selectedLineIdx].location.y++;
    drawImg();
}

function onAddLine() {
    document.getElementById('0').value = '';
    gID++;
}

function onSetText(value) {
    lineNum(gID);
    setText(value);
    drawImg();
}

function onGetFontSize(diff) {
    setSize(diff);
    drawImg();
}

function onSwitchLinesText() {
    var lines = getMemeLines();
    var tmp = lines[0].txt;
    lines[0].txt = lines[1].txt;
    lines[1].txt = tmp;
    drawImg();
}

function onChangeFocus() {
    var lines = getMemeLines();
    var tmp = lines[0];
    lines[0] = lines[1];
    lines[1] = tmp;
}

function onClearLine() {
    var meme = getMeme();
    setSelectedLine(meme.selectedLineIdx);
    setText('');
    drawImg();
}

function lineNum(el) {
    var id = el;
    setSelectedLine(id);
    return id;
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    var elBtn = document.querySelector('.menu-btn');
    elBtn.innerText = (elBtn.innerText === '☰') ? 'X' : '☰';
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data;
    saveToMemesStorage(data);
    elLink.download = 'my-meme.jpg';
}

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#emoji-button');
    const picker = new EmojiButton();

    picker.on('emoji', emoji => {
        document.querySelector('.line1').value += emoji;
        drawImg();
    });

    button.addEventListener('click', () => {
        picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
    });
});


function onImgInput(ev) {
    loadImageFromInput(ev, renderCanvas)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function(event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
}