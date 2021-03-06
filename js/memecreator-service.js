'use strict'

var gMeme = createMeme();

var gSavedMemes = getSavedMemes();

function getSavedMemes() {
    var memes = loadFromStorage('memes') || [];
    return memes;
}

function saveToMemesStorage(data) {
    gSavedMemes.push(data);
    saveToStorage('memes', gSavedMemes);
}

function createMeme() {
    var meme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
                txt: '',
                size: 60,
                align: 'center',
                colorfont: '',
                colorfill: '',
                font: 'Impact',
                location: { x: 200, y: 100 },
            },
            {
                txt: '',
                size: 60,
                align: 'center',
                colorfont: '',
                colorfill: '',
                font: 'Impact',
                location: { x: 200, y: 400 },
            }
        ]
    }
    return meme;
}


function getMeme() {
    return gMeme;
}

function setSelectedLine(id) {
    gMeme.selectedLineIdx = id;
}

function getMemeLines() {
    var lines = gMeme.lines;
    return lines;
}

function updateID(id) {
    return gMeme.selectedImgId = id;
}

function updateLocation(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value;
}


function setFont(value) {
    gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function setSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function setColorFont(colorFont) {
    gMeme.lines[gMeme.selectedLineIdx].colorfont = colorFont;
}

function setColorFill(colorValue) {
    gMeme.lines[gMeme.selectedLineIdx].colorfill = colorValue;
}

function setText(value) {
    gMeme.lines[gMeme.selectedLineIdx].txt = value;
}

function setEmoji(emoji) {
    gMeme.lines[gMeme.selectedLineIdx].txt += emoji;
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function(err) {
            console.error(err)
        })
}