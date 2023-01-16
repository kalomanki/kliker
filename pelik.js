let body = document.querySelector("body");
let cash = document.querySelector(".cash");
let kliks = 0;

body.onclick = function () {
    kliks = ++kliks;
    cash.innerHTML = kliks;

}

let corzina = document.querySelector(".corzina");
let magazin = document.querySelector(".magazin");
corzina.onclick = function () {
    magazin.style.display = "block";
}

let close = document.querySelector(".close");
close.onclick = function () {
    magazin.style.display = "none";
}

let shlem = document.querySelector(".shlem");
let sm = document.querySelector(".sm");
sm.onclick = function () {
    if (kliks > 9) {
        shlem.style.opacity = "1";
        sm.style.opacity="0.2"
        kliks = kliks - 10;
        cash.innerHTML = kliks;
    }
}

let bullava = document.querySelector(".bullava");
let oruzhie = document.querySelector(".oruzhie");
oruzhie.onclick = function () {
    if (kliks > 49) {
        bullava.style.opacity = "1";
        oruzhie.style.opacity="0.2"
        kliks = kliks - 50;
        cash.innerHTML = kliks;
    }
}

let nagrudnik = document.querySelector(".nagrudnik");
let grudak = document.querySelector(".grudak");
grudak.onclick = function () {
    if (kliks > 69) {
        nagrudnik.style.opacity = "1";
        grudak.style.opacity="0.2"
        kliks = kliks - 70;
        cash.innerHTML = kliks;
    }
}

let naplechniki = document.querySelector(".naplechniki");
let plechi = document.querySelector(".plechi");
plechi.onclick = function () {
    if (kliks > 49) {
        naplechniki.style.opacity = "1";
        plechi.style.opacity="0.2"
        kliks = kliks - 50;
        cash.innerHTML = kliks;
    }
}
let udashkinskaya = document.querySelector(".udashkinskaya");
let uybka = document.querySelector(".uybka");
uybka.onclick = function () {
    if (kliks > 39) {
        udashkinskaya.style.opacity = "1";
        uybka.style.opacity="0.2"
        kliks = kliks - 40;
        cash.innerHTML = kliks;
    }
}

let plash = document.querySelector(".plash");
let plas = document.querySelector(".plas");
plas.onclick = function () {
    if (kliks > 19) {
        plash.style.opacity = "1";
        plas.style.opacity="0.2"
        kliks = kliks - 20;
        cash.innerHTML = kliks;
    }
}

let sapogi=document.querySelector(".sapogi");
let kedi=document.querySelector(".kedi");
    kedi.onclick=function(){
        if(kliks>29){
            sapogi.style.opacity = "1";
            kedi.style.opacity="0.2"
            kliks=kliks-30;
            cash.innerHTML=kliks;
        }
    }