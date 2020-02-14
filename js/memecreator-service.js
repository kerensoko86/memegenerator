'use strict'

var gMeme = createMeme();

function createMeme() {
    var meme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{ txt: '', size: 60, align: 'left', colorfont: '', colorfill: '', font: 'Impact', location: { x: 100, y: 100 } },
            { txt: '', size: 60, align: 'left', colorfont: '', colorfill: '', font: 'Impact', location: { x: 100, y: 300 } }
        ]
    }
    return meme;
}

function getMeme() {
    return gMeme;
}

function setSelectedLine(id) {
    return gMeme.selectedLineIdx = id;
}

function getMemeLines() {
    var lines = gMeme.lines;
    return lines;
}

function clearLine(id) {
    return gMeme.lines[id] = '';
}

function updateID(id) {
    return gMeme.selectedImgId = id;
}

function updateLocation(value) {
    return gMeme.lines[gMeme.selectedLineIdx].align = value;
}


function setFont(value) {
    return gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function setSize(diff) {
    return gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function setColorFont(colorFont) {
    return gMeme.lines[gMeme.selectedLineIdx].colorfont = colorFont;
}

function setColorFill(colorValue) {
    return gMeme.lines[gMeme.selectedLineIdx].colorfill = colorValue;
}

function setText(value) {
    return gMeme.lines[gMeme.selectedLineIdx].txt = value;
}