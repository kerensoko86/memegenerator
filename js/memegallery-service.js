'use strict'

var gImages = createImages();
var gKW = [];

function createImages() {
    var gImages = [
        createImage(1, '1', ['trump', 'funny']),
        createImage(2, '2', ['dogs', 'cute']),
        createImage(3, '3', ['dogs', 'baby']),
        createImage(4, '4', ['cat', 'cute']),
        createImage(5, '5', ['baby', 'funny']),
        createImage(6, '6', ['keren', 'funny']),
        createImage(7, '7', ['baby', 'funny']),
        createImage(8, '8', ['keren', 'heart']),
        createImage(9, '9', ['baby', 'heart']),
        createImage(10, '10', ['keren', 'heart']),
        createImage(11, '11', ['keren', 'heart']),
        createImage(12, '12', ['keren', 'heart']),
        createImage(13, '13', ['keren', 'heart']),
        createImage(14, '14', ['keren', 'heart']),
        createImage(15, '15', ['keren', 'heart']),
        createImage(16, '16', ['keren', 'heart']),
        createImage(17, '17', ['keren', 'heart']),
        createImage(18, '18', ['keren', 'heart']),
        createImage(19, '19', ['keren', 'heart']),
        createImage(20, '20', ['keren', 'heart']),
        createImage(21, '21', ['keren', 'heart']),
        createImage(22, '22', ['keren', 'heart']),
        createImage(23, '23', ['keren', 'heart']),
        createImage(24, '24', ['keren', 'heart']),
        createImage(25, '25', ['keren', 'heart']),

    ];

    return gImages;
}

function createImage(id, url, keywords) {
    var image = {
        id: id,
        url: url,
        keywords: keywords
    };
    return image;
}

function getImages() {
    return gImages;
}

function getImagesByKW(kw) {
    gKW = [];
    for (var i = 0; i < gImages.length; i++) {
        for (var j = 0; j < gImages[i].keywords.length; j++) {
            if (gImages[i].keywords[j] === kw) {
                gKW.push(gImages[i]);
            }
        }
    }
    return gKW;
}