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
