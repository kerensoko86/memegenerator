var gMeme;

function onInit() {
    renderImages();
    doTrans();
    onRenderPopularKw();
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

function onFilterByKw2(value) {
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

function onRenderPopularKw() {
    var keys = getFilterIcons();
    console.log(keys);
    let elSearchBtns = document.querySelector('.search-btn');
    let strHTMLs = '';
    keys.forEach(key => {
        let keyName = key.charAt(0) + key.slice(1)
        strHTMLs += `<button value="${keyName}" class="search-btn buttonkw" onclick="onFilterByKw2(value)">${keyName}</button>`
    });
    elSearchBtns.innerHTML = strHTMLs;
}