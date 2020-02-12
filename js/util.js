function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printMat(mat, selector) {
    var strHTML = '<table border="2" oncontextmenu= "return false"><tbody>';
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < mat[0].length; j++) {
            var cell = mat[i][j];
            var tdId = `cell-${i}-${j}`;
            var className = `cell cell${i}-${j}`;
            strHTML += `<td id="${tdId}" onmousedown="cellClicked(this, ${i}, ${j}, event)" class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;

    return mat;
}

function renderCellHide(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.isShown = true;
    elCell.innerHTML = value;
}

function toggleDarkLight() {
    var body = document.querySelector("#body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function storageTime(newGameTime) {

    gameTime = localStorage.getItem("gameTime");
    if (!gameTime) {
        localStorage.setItem("gameTime", newGameTime);
        document.querySelector('#gametime').innerHTML = gameTime;
    } else {
        if (newGameTime < gameTime) {
            localStorage.setItem("gameTime", newGameTime);
        }
    }
    document.querySelector('#gametime').innerHTML = gameTime;
}