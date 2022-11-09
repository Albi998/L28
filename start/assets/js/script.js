var s = 0;
var m = 0;
var h = 0;
var timer = setInterval(counter, 1000);
var sRecord = sessionStorage.getItem("Secondi");
var mRecord = sessionStorage.getItem("Minuti");
var hRecord = sessionStorage.getItem("Ore");

if (sRecord && mRecord) {
    s = Number(sRecord);
    m = Number(mRecord);
    h = Number(hRecord);
}

function counter() {

    if (s == 60) {
        s = 0;
        m++;
    } if (m == 60) {
        m = 0;
        h++;
    }
    s++;

    sessionStorage.setItem("Secondi", s);
    sessionStorage.setItem("Minuti", m);
    sessionStorage.setItem("Ore", h);

    document.querySelector(".display-4").innerHTML = `Tempo: ${h} h ${m} m ${s} s`;

}

window.addEventListener("DOMContentLoaded", counter);
