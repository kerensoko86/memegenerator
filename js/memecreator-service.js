'use strict'

var gMeme = createMeme();
console.log(gMeme);

function createMeme() {
    var meme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: { txt: '', size: 60, align: 'left', color: 'blue' }
    }
    return meme;
}

function getMemeLines() {
    var lines = gMeme.lines;
    return lines;
}

function setSize(diff) {
    return gMeme.lines.size += diff;
}

function setColor() {
    return gMeme.lines.color = getColor();
}

function getText(value) {
    return gMeme.lines.txt = value;
}