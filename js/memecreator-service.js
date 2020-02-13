'use strict'

var gMeme = createMeme();

function createMeme() {
    var meme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{ txt: '', size: 60, align: 'left', colorfont: 'blue', colorfill: 'red', font: 'Impact', location: { x: 100, y: 100 } },
            { txt: '', size: 60, align: 'left', colorfont: 'blue', colorfill: 'red', font: 'Impact', location: { x: 100, y: 300 } }
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

function clearLine(value) {
    return gMeme.lines[gMeme.selectedLineIdx] = '';
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

function setColorFont() {
    return gMeme.lines[gMeme.selectedLineIdx].colorfont = getColorStroke();
}

function setColorFill() {
    return gMeme.lines[gMeme.selectedLineIdx].colorfill = getColorFill();
}

function setText(value) {
    return gMeme.lines[gMeme.selectedLineIdx].txt = value;
}