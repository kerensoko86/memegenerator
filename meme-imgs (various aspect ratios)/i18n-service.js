'use strict'
var gTrans = {
    id: {
        en: 'Id',
        he: 'מזהה'
    },
    name: {
        en: 'Title',
        he: 'כותרת',
    },
    image: {
        en: 'Image',
        he: 'תמונה',
    },
    price: {
        en: 'Price',
        he: 'מחיר',
    },
    rating: {
        en: 'Rating',
        he: 'דירוג',
    },
    'headline': {
        en: 'My Bookstore',
        he: 'חנות הספרים שלי',
    },
    'add-book': {
        en: 'Add A Book',
        he: 'הוסף ספר',
    },
    'txt-name': {
        en: 'Please enter the name of the book',
        he: 'אנא הכנס את שם הספר',
    },
    'txt-price': {
        en: 'Please enter the price of the book',
        he: 'אנא הכנס את שם הספר',
    },
    'txt-img': {
        en: 'Please enter the URL of the book',
        he: 'אנא הכנס את הכריכה',
    },
    'save': {
        en: 'Save',
        he: 'שמור',
    },
    'read': {
        en: 'Read',
        he: 'הצג',
    },
    update: {
        en: 'Update',
        he: 'עדכן',
    },
    'remove': {
        en: 'save',
        he: 'הסר',
    },
    'update-rating': {
        en: 'Update Rating',
        he: 'עדכן דירוג'
    },
    sure: {
        en: 'Are you sure?',
        he: 'האם אתה בטוח?',
    },
    'change': {
        en: 'Change Language',
        he: 'שנה שפה'
    },
    'actions': {
        en: 'Actions',
        he: 'פעולות'
    }
}

var gCurrLang = 'en';

function doTrans() {
    // For each el get the data-trans and use getTrans to replace the innerText 
    var els = document.querySelectorAll('[data-trans]');
    console.log(els)
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

function formatNumOlder(num) {
    return num.toLocaleString('es');
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    if (gCurrLang === 'en') return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    if (gCurrLang === 'he') {
        num *= 3.45;
        return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
    }
}

function formatDate(time) {
    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}


function kmToMiles(km) {
    return km / 1.609;
}