'use strict'

var gImages = createImages();

function createImages() {
    var gImages = [
        _createImage(1, '1', ['trump', 'heart']),
        _createImage(2, '2', ['dogs', 'cute']),
        _createImage(3, '3', ['dogs', 'baby']),
        _createImage(4, '4', ['cat', 'cute']),
        _createImage(5, '5', ['keren', 'heart']),
        _createImage(6, '6', ['keren', 'heart']),
        _createImage(7, '7', ['keren', 'heart']),
        _createImage(8, '8', ['keren', 'heart']),
        _createImage(9, '9', ['keren', 'heart']),
        _createImage(10, '10', ['keren', 'heart']),
        _createImage(11, '11', ['keren', 'heart']),
        _createImage(12, '12', ['keren', 'heart']),
        _createImage(13, '13', ['keren', 'heart']),
        _createImage(14, '14', ['keren', 'heart']),
        _createImage(15, '15', ['keren', 'heart']),
        _createImage(16, '16', ['keren', 'heart']),
        _createImage(17, '17', ['keren', 'heart']),
        _createImage(18, '18', ['keren', 'heart']),
        _createImage(19, '19', ['keren', 'heart']),
        _createImage(20, '20', ['keren', 'heart']),
        _createImage(21, '21', ['keren', 'heart']),
        _createImage(22, '22', ['keren', 'heart']),
        _createImage(23, '23', ['keren', 'heart']),
        _createImage(24, '24', ['keren', 'heart']),
        _createImage(25, '25', ['keren', 'heart']),

    ];

    return gImages;
}


function _createImage(id, url) {
    var image = {
        id: id,
        url: url,
        keywords: []
    };
    return image;
}

function getImages() {
    return gImages;
}

function getImagesByKW(kw) {
    return gImages.find(imageskeywords => imageskeywords.find(keyword => keyword === kw))
}