let hourEl = document.querySelector(".hour")
let minuteEl = document.querySelector(".minute")
let secoundEl = document.querySelector(".secound")
let ampmEl = document.querySelector(".amorpm")
let b = document.querySelector("body")
let hBG = document.querySelector(".hours")
let mBG = document.querySelector(".minutes")
let sBG = document.querySelector(".secounds")
let contBtn = document.querySelector(".contact-btn")


function updateClock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "AM"

    if (h > 18 || h < 6) {
        b.style.background = "#525252"
        b.style.color = "white"
        hBG.style.background = "rgba(51, 51, 51, 0.466)"
        mBG.style.background = "rgba(51, 51, 51, 0.466)"
        sBG.style.background = "rgba(51, 51, 51, 0.466)"
        contBtn.style.color = "white"
    }
    if (h > 12) {
        ap = "PM"
        h -= 12
    } 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerHTML = h
    minuteEl.innerHTML = m
    secoundEl.innerHTML = s
    ampmEl.innerHTML = ap
    setTimeout(()=> {
        updateClock()
    }, 1000)
}

updateClock()