var gMeme;
var gKeywords = { 'happy': 12, 'funny puk': 1 }

function onInit() {
    renderImages();
    doTrans();
}

function renderImages() {
    var images = getImages();
    var strHTMLs = '';
    strHTMLs += images.map(image =>
        `<a href="#" onclick="onChangePage(${image.id})" data-id="${image.id}"><img class="inside-image" src="images/${image.url}.jpg"/img>
        </a>`).join('');

    var elimageList = document.querySelector('.image-list');
    elimageList.innerHTML = strHTMLs;
    doTrans();
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    renderImages();
}

function onFilterByKW(value) {
    var images = getImagesByKW(value);
    var strHTMLs = '';
    strHTMLs += images.map(image =>
        `<a href="#" onclick="onChangePage(${image.id})" data-id="${image.id}"><img class="inside-image" src="images/${image.url}.jpg"/img>
        </a>`).join('');

    var elimageList = document.querySelector('.image-list');
    elimageList.innerHTML = strHTMLs;
    if (document.querySelector('.kw').value === '') {
        renderImages();
    }
}

function onFilterByKW2(value) {
    var images = getImagesByKW(value);
    var strHTMLs = '';
    strHTMLs += images.map(image =>
        `<a href="#" onclick="onChangePage(${image.id})" data-id="${image.id}"><img class="inside-image" src="images/${image.url}.jpg"/img>
        </a>`).join('');

    var elimageList = document.querySelector('.image-list');
    elimageList.innerHTML = strHTMLs;

}

function onChangePage(id) {
    document.querySelector('.main-containter').style.display = 'none';
    updateID(id);
    onInitMeme(id);
}