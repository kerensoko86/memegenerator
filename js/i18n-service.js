'use strict'
var gTrans = {
    Gallery: {
        en: 'Gallery',
        he: 'גלריה'
    },
    Memes: {
        en: 'Memes',
        he: 'שמורים',
    },
    About: {
        en: 'About',
        he: 'עליי',
    },
    change: {
        en: 'Change Language',
        he: 'שנה שפה'
    },
    'txt-kw': {
        en: 'Please enter your search keywords here',
        he: 'אנא הכנס את מילות החיפוש שלך כאן',
    },
    'txt-line': {
        en: 'Please enter your sentence here',
        he: 'אנא הכנס את המשפט שלך כאן',
    },
    'footer': {
        en: 'BE AWARE! These memes should be used only to make people happy',
        he: 'שים לב! התמונות המצחיקות נועדו לשמח אנשים'
    }
}

var gCurrLang = 'en';

function doTrans() {
    // For each el get the data-trans and use getTrans to replace the innerText 
    var els = document.querySelectorAll('[data-trans]');
    els.forEach(el => {
        var txt = getTrans(el.dataset.trans);

        // If this is an input, translate the placeholder
        if (el.placeholder) el.placeholder = txt;
        else el.innerText = txt;
    })
}

function getTrans(transKey) {
    var langMap = gTrans[transKey]
    if (!langMap) return 'UNKNOWN';
    // console.log(transKey);
    var txt = langMap[gCurrLang]
        // If translation not found - use english
    if (!txt) txt = langMap['en'];
    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}