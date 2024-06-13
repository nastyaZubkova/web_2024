let buttonBangChan = document.getElementById("bang-chan");
let buttonChangbin = document.getElementById("changbin");
let buttonFelix = document.getElementById("felix");
let buttonHyunjin = document.getElementById("hyunjin");
let buttonJeongin = document.getElementById("jeongin");
let buttonJisung = document.getElementById("jisung");
let buttonLeeKnow = document.getElementById("lee-know");
let buttonSeungmin = document.getElementById("seungmin");
let imagesMambers = document.querySelector(".images");

let mambers = [
    ["../static/images/bang_chan.jpg", "../static/images/bang_chan_1.jpg", "../static/images/bang_chan_2.jpg", "../static/images/bang_chan_3.jpg"],
    ["../static/images/changbin.jpg", "../static/images/changbin_1.jpg", "../static/images/changbin_2.jpg", "../static/images/changbin_3.jpg"],
    ["../static/images/felix.jpg", "../static/images/felix_1.jpg", "../static/images/felix_2.jpg", "../static/images/felix_3.jpg"],
    ["../static/images/hyunjin.jpg", "../static/images/hyunjin_1.jpg", "../static/images/hyunjin_2.jpg", "../static/images/hyunjin_3.jpg"],
    ["../static/images/jeongin.jpg", "../static/images/jeongin_1.jpg", "../static/images/jeongin_2.jpg", "../static/images/jeongin_3.jpg"],
    ["../static/images/jisung.jpg", "../static/images/jisung_1.jpg", "../static/images/jisung_2.jpg", "../static/images/jisung_3.jpg"],
    ["../static/images/lee_know.jpg", "../static/images/lee_know_1.jpg", "../static/images/lee_know_2.jpg", "../static/images/lee_know_3.jpg"],
    ["../static/images/seungmin.jpg", "../static/images/seungmin_1.jpg", "../static/images/seungmin_2.jpg", "../static/images/seungmin.jpg"]
]

let mamber = mambers[0][0];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomMamber = getRandomInt(8)
mamber = mambers[randomMamber][getRandomInt(4)]
imagesMambers.style.backgroundImage = `url('${mamber}')`;

function buttonClick(button, memberIndex) {
    if (randomMamber == memberIndex) {
        button.style.backgroundColor = "#98FB98";
        setTimeout(() => {
            button.style.backgroundColor = "#ecdfd3e3";
            randomMamber = getRandomInt(8);
            mamber = mambers[randomMamber][getRandomInt(4)];
            imagesMambers.style.backgroundImage = `url('${mamber}')`;
        }, 1000);
    } else {
        button.style.backgroundColor = "#FFA07A";
        setTimeout(() => {
            button.style.backgroundColor = "#ecdfd3e3";
        }, 1000);
    }
}

buttonBangChan.onclick = function() {
    buttonClick(buttonBangChan, 0);
}

buttonChangbin.onclick = function() {
    buttonClick(buttonChangbin, 1);
}

buttonFelix.onclick = function() {
    buttonClick(buttonFelix, 2);
}

buttonHyunjin.onclick = function() {
    buttonClick(buttonHyunjin, 3);
}

buttonJeongin.onclick = function() {
    buttonClick(buttonJeongin, 4);
}

buttonJisung.onclick = function() {
    buttonClick(buttonJisung, 5);
}

buttonLeeKnow.onclick = function() {
    buttonClick(buttonLeeKnow, 6);
}

buttonSeungmin.onclick = function() {
    buttonClick(buttonSeungmin, 7);
}

