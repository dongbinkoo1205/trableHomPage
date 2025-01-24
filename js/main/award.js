// 메인 가로스크롤 마우스 오버
document.addEventListener('DOMContentLoaded', function () {
    let award_section = document.querySelectorAll('#award_new > .award_cont > ul > li > ul.award_text');
    let award_img = document.querySelectorAll('#award_new > .award_cont > ul > li > ul .award_img > img');

    for (var i = 0; i < award_section.length; i++) {
        award_section[i].addEventListener('mouseover', function () {
            for (var j = 0; j < award_section.length; j++) {
                award_img[j].classList.remove('on');
                award_section[j].classList.remove('on');
            }
            this.querySelector('.award_img > img').classList.add('on');
            this.classList.add('on');
        });

        award_section[i].addEventListener('mouseout', function () {
            for (var q = 0; q < award_section.length; q++) {
                award_img[q].classList.remove('on');
            }
        });
    }

    /* 24/07/29 추가 하나씩 opacity되는 텍스트 */
    let opacityCont = document.querySelector('.award_mt');
    let opacityItem = document.querySelectorAll('.award_mt .mt_desc ul li');
    console.log(opacityCont);
    let opacityContTop = opacityCont.offsetTop;

    window.addEventListener('scroll', function () {
        for (let i = 0; i < opacityItem.length; i++) {
            if (window.scrollY < opacityContTop) {
                opacityItem[i].classList.remove('on');
                opacityCont.classList.remove('on');
            } else {
                opacityCont.classList.add('on');
                setTimeout(function () {
                    opacityItem[i].classList.add('on');
                }, (i + 1) * 100);
                clearInterval();
            }
        }
    });

    /* 24/07/29 추가 높이값에 따라 텍스트 변경 */
    let foldWrap = document.querySelector('#award_new .award_fold');
    let foldHead = document.querySelector('.fHW');
    let foldConts = document.querySelectorAll('#award_new .award_fold .foldCont > ul');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        // First condition
        if (scrollY >= foldConts[0].getBoundingClientRect().top + scrollY) {
            foldWrap.classList.add('on');
            foldHead.classList.add('t2');
        } else {
            foldHead.classList.remove('t2');
            foldWrap.classList.remove('on');
        }

        // Second condition
        if (scrollY >= foldConts[1].getBoundingClientRect().top + scrollY) {
            foldHead.classList.remove('t2');
            foldHead.classList.add('t4');
        } else {
            foldHead.classList.remove('t4');
        }

        // Third condition
        if (scrollY >= foldConts[2].getBoundingClientRect().top + scrollY) {
            foldHead.classList.remove('t2');
            foldHead.classList.remove('t4');
            foldHead.classList.add('t6');
        } else {
            foldHead.classList.remove('t6');
        }

        // Fourth condition
        if (scrollY >= foldConts[3].getBoundingClientRect().top + scrollY) {
            foldHead.classList.remove('t2');
            foldHead.classList.remove('t4');
            foldHead.classList.remove('t6');
            foldHead.classList.add('t8');
        } else {
            foldHead.classList.remove('t8');
        }
    });
});
// let winw  = window.innerWidth

// if( winw < 768){
//     // 포트폴리오 박스 마우스 호버 효과 실행
//     window.addEventListener("touchstart", function() {}, true);

// }
