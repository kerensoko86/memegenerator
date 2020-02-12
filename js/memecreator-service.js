'use strict'

var gMeme = createMeme();
console.log(gMeme);

function createMeme() {
    var meme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{ txt: '', size: 60, align: 'left', color: 'blue', font: 'Impact', location: { x: 100, y: 100 } },
            { txt: '', size: 60, align: 'left', color: 'blue', font: 'Impact', location: { x: 100, y: 300 } }
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

function getMemeLines(selectedLineIdx) {
    var lines = gMeme.lines[selectedLineIdx];
    return lines;
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

function setColor() {
    return gMeme.lines[gMeme.selectedLineIdx].color = getColorFill();
}

function setText(value) {
    return gMeme.lines[gMeme.selectedLineIdx].txt = value;
}