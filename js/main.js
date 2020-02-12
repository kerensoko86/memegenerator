var gMeme;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gID = 0;

function renderImages() {

}

function onInit() {
    renderImages();
    // doTrans();
}

function renderImages(images) {
    var images = getImages();
    var strHTMLs = '';
    strHTMLs += images.map(image =>
        `<tr><td ><a href="#" onclick="onChangePage(${image.id})"><img class="inside-image" src="images/${image.url}.jpg"/img>
        </a></td>`).join('');

    var elimageList = document.querySelector('.image-list');
    elimageList.innerHTML = strHTMLs;
    // doTrans();
}

function onFilterByKW(value) {
    getImagesByKW(value);
}

function onChangePage(id) {
    document.querySelector('.main-containter').style.display = 'none';
    onInitMeme(id);
}