// 오프닝
let loading_w = document.querySelector(".loading_w")

window.addEventListener('load', function() {
    setTimeout(function () {
        loading_w.classList.add("on")
        },5400);
    setTimeout(function () {
        loading_w.classList.add("on2")
        },6400);
})
