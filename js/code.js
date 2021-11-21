
window.onload = function() {
    alert("hello world!");
    saludo();
}

//ej2
function saludo() {
    fecha = new Date(); 
    hora = fecha.getHours();
    if (hora < 7 || hora > 17) {
        //noche
        document.getElementById("saludo").innerHTML = "¡Buenas noches!";
        document.getElementById("color").style.backgroundColor = "#3E3730";
    } else {
        //día
        document.getElementById("saludo").innerHTML = "¡Buenos días!";
        document.getElementById("color").style.backgroundColor = "rgb(238, 107, 47)";
    }
}

//ej3
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {
    var array = []
    for (let i = 0; i < n; i++) {
        let numr = getRndInteger(min, max);
        if (array.includes(numr)) {
            i--;
        } else {
            array.push(numr);
        }
    }
    return array;
}

//ej4
function buttonOpacity() {
    let opacity = document.getElementById('myDIV').style.opacity;
    if (opacity == 0.5) {
        document.getElementById('myDIV').style.opacity = '1';
    } else {
        document.getElementById('myDIV').style.opacity = '0.5';
    }
}

//ej5
function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function galleryRandom() {
    let n = 17;
    let min = 1;
    let max = 17;
    let images = document.getElementsByClassName('rnd');
    let listRnd = getListRandom(n, min, max);
    for (i = 0; i < n; i++) {
        images[i].setAttribute("src", "./IMG/IMG_" + listRnd[i] + ".PNG");
    }
}
