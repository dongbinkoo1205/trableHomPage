let white_wrap = document.querySelector('#info .white_wrap');
let cl = document.querySelector('#info .md_mouse');

let rotatex = document.querySelector('#info .white_wrap .md_mouse .mouse_w .rotate > .rotatex');
let rotatey = document.querySelector('#info .white_wrap .md_mouse .mouse_w .rotate > .rotatey');

document.addEventListener('mousemove', (e) => {
    // mousemove이벤트를 이용해

    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

    // pageX, pageY와는 다름.

    const mouseX = e.clientX;

    const mouseY = e.clientY;

    cl.style.left = mouseX + 'px';

    cl.style.top = mouseY + 'px';

    rotatex.innerHTML = '(' + mouseX + ',';
    rotatey.innerHTML = mouseY + ')';
});

// AOS 플러그인
AOS.init();

// SWIPER 플러그인
var swiper = new Swiper('.career_swi', {
    slidesPerView: 1.1,
    spaceBetween: 0,

    breakpoints: {
        768: {
            slidesPerView: 1.3, //브라우저가 768보다 클 때
        },
        1024: {
            slidesPerView: 3.5, //브라우저가 1024보다 클 때
        },
    },
});

// 히든 콘텐츠
let hidden_career = document.querySelectorAll('.career_swi .swiper-slide .hidden_career');
let hidden_btn = document.querySelectorAll('.career_swi .swiper-slide .career_cont');

for (let c = 0; c < hidden_btn.length; c++) {
    hidden_btn[c].addEventListener('click', function (e) {
        e.preventDefault();
        for (let p = 0; p < hidden_career.length; p++) {
            hidden_career[p].classList.remove('on');
        }
        this.nextElementSibling.classList.add('on');
    });
}
