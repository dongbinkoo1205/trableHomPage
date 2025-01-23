// 디자인 프로젝트 갯수 넣어주기
let designWrap = document.querySelector('#designPort');
let designCont = document.querySelectorAll('.mainDesign .MDWrap > li');
let designN = document.querySelector('#designPort .titleSection .dpTitle ul li span');
console.log(designN);
let designClick = document.querySelector('#designPort .mainDesign .MDWrap li .MDclick span');
let designHead = document.querySelectorAll('#designPort .mainDesign .MDWrap li .designDesc .dN');

for (i = 0; i < designCont.length; i++) {
    designN.innerHTML = designCont.length + `+`;
}

function ContMouseOverEvent() {
    for (let t = 0; t < designCont.length; t++) {
        designCont[t].addEventListener('mouseenter', function () {
            if (designCont[t].classList.contains('on')) {
                designCont[t].classList.remove('on');
            } else {
                designCont[t].classList.add('on');
                for (let b = 0; b < designHead.length; b++) {
                    designCont[t].querySelector('.MDclick span').innerHTML =
                        this.querySelector('.designDesc .dN').innerHTML;
                }
            }
        });
        designCont[t].addEventListener('mouseleave', function () {
            designCont[t].classList.remove('on');
            // designCont[t].classList.remove("sc")
        });
    }
}

ContMouseOverEvent();

let clickWrap = document.querySelectorAll('#designPort .mainDesign .MDWrap li .MDclick');
for (let m = 0; m < clickWrap.length; m++) {
    clickWrap[m].addEventListener('click', function (e) {
        e.preventDefault();
        for (let p = 0; p < designCont.length; p++) {
            if (designCont[p].classList.contains('sc')) {
                designCont[p].classList.remove('sc');
            }
        }
        this.parentNode.classList.add('sc');
        console.log(this);
        // setTimeout("location.href='samsung.html'", 1500);

        if (this.parentNode.classList.contains('sc')) {
            for (let t = 0; t < designCont.length; t++) {
                designCont[t].classList.remove('on');
            }
        }
        this.childNodes[1].innerHTML = 'Lets go!';
    });
}

// 클릭시 HTML 호출
function set1() {
    setTimeout("location.href='samsung.html'", 1500);
}

function set2() {
    setTimeout("location.href='gamtan.html'", 1500);
}

function set3() {
    setTimeout("location.href='hervino.html'", 1500);
}

function set4() {
    setTimeout("location.href='briz.html'", 1500);
}
// AOS 플러그인
AOS.init();
