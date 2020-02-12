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

function onSubmit(ev) {
    ev.preventDefault();
    var fontColor = document.getElementById('font-color').value;
    var bcgColor = document.getElementById('bcg-color').value;
    var birthday = document.getElementById('date').value;
    var birthTime = document.getElementById('time').value;

    createPrefs(fontColor, bcgColor, birthday, birthTime);

    var astro = getAstrology();
    if (document.title === 'Homepage') {
        document.querySelector('h3').innerText = astro;
    }
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data;
    elLink.download = 'my-meme.jpg'
}

function drawImg(id) {
    var img = new Image()
    img.src = `images/${id}.jpg`;
    console.dir(img);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(value) {
    gCtx.font = '40px Impact'
    gCtx.fillText(value, gX, gY)
    gCtx.strokeText(value, gX, gY)
}

function clearFirstLine() {
    gCtx.fillText('', gX, gY)
    gCtx.strokeText('', gX, gY)
}