'use strict'

var gMeme = _createMeme()

function _createMeme(id, txt, size, side, color) {
    var meme = {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: {
            txt: txt,
            size: size,
            align: side,
            color: color
        }
    };

    return meme;
}