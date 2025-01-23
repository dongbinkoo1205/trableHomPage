// 메인 가로스크롤
$(document).ready(function () {
    let vw100 = document.querySelector('#m_over2').clientWidth;
    let slide_wi = document.querySelector('.pt_wrap').clientWidth;

    let slide_true = slide_wi - vw100;

    var lscoll = new ScrollMagic.Controller();

    var testAction = new TimelineMax().fromTo('.pt_wrap', 1, { x: '0' }, { x: `${-slide_true}` }, 0.1);

    var test = new ScrollMagic.Scene({
        triggerElement: '.left_scroll',
        triggerHook: 'onLeave',
        duration: '3000',
    })
        .setPin('.left_scroll')
        .setTween(testAction)
        .addTo(lscoll);
});

let port_imgs = document.querySelectorAll('.pt_wrap > div');
let port_text = document.querySelectorAll('.left_scroll > .port > .pt_wrap > div > .port_text');

// 기존 마우스 오버

for (var i = 0; i < port_imgs.length; i++) {
    port_imgs[i].addEventListener('mouseover', function () {
        for (var j = 0; j < port_imgs.length; j++) {
            port_text[j].classList.remove('on');
        }

        this.querySelector('.port_text').classList.add('on');
    });
}

for (var i = 0; i < port_imgs.length; i++) {
    port_imgs[i].addEventListener('mouseout', function () {
        this.querySelector('.port_text').classList.remove('on');
    });
}
