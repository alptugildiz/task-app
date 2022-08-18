

const input1 = document.getElementById("fromInput")
const input2 = document.getElementById("whereInput")
var sonuc1;
var sonuc2;


const updateSonuc1 = debounce((text) => {
    sonuc1 = text
})
const updateSonuc2 = debounce((text) => {
    sonuc2 = text
})

input1.addEventListener("input", e => {
    updateSonuc1(e.target.value)
})
input2.addEventListener("input", e => {
    updateSonuc2(e.target.value)
})

function debounce(cb, delay = 1500) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

setInterval(function () {
    if(sonuc1!=sonuc2 && sonuc1 != '' && sonuc1 != undefined && sonuc2 != '' && sonuc2 != undefined ){
        window.location.href="card-list.html"
    }
}, 10000);