const btn = document.getElementById('sendgogo');

document.getElementById('ct_form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_ezaqnrr';
    const templateID = 'template_k3c24od';

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = 'CONTACT PROJECT';
            alert('문의주신 내용이 접수되었습니다. 감사합니다.');
            document.querySelector('#f_com').value = '';
            document.querySelector('#f_name').value = '';
            document.querySelector('.f_proj').value = '';
            document.querySelector('.f_prow').value = '';
            document.querySelector('.p_bud').value = '';
            document.querySelector('#p_mon').value = '';
            document.querySelector('#f_page').value = '';
            document.querySelector('#p_refer').value = '';
            document.querySelector('#p_phone').value = '';
            document.querySelector('#p_email').value = '';
        },
        (err) => {
            btn.value = 'CONTACT PROJECT';
            alert(JSON.stringify(err));
        }
    );
});

// 문의하기 입력폼 일치 (회사명)
let cg_com = document.querySelectorAll('.cg_com');
f_com.oninput = function () {
    for (let k = 0; k < cg_com.length; k++) {
        if (f_com.value === '') {
            cg_com[k].innerHTML = '회사명';
        } else {
            cg_com[k].innerHTML = f_com.value;
        }
    }
};

// 문의하기 입력폼 일치 (담당자명)
let cg_name = document.querySelectorAll('.cg_name');
f_name.oninput = function () {
    for (let k = 0; k < cg_name.length; k++) {
        if (f_name.value === '') {
            cg_name[k].innerHTML = '담당자명';
        } else {
            cg_name[k].innerHTML = f_name.value;
        }
    }
};

// 문의하기 입력폼 일치 (관심 서비스)

let cg_serv = document.querySelectorAll('.cg_serv');
let checkBoxes1 = document.getElementsByClassName('f_proj');

for (let i = 0; i < checkBoxes1.length; i++) {
    checkBoxes1[i].oninput = function () {
        for (let k = 0; k < cg_serv.length; k++) {
            cg_serv[k].innerHTML = checkBoxes1[i].value;
        }
    };
}

function getCheckedCnt() {
    // 선택된 목록 가져오기
    let serv_num = document.querySelectorAll('.ct_wrap .ct_live ul li .serv_num');
    const query = 'input[name="f_proj"]:checked';
    const selectedElements1 = document.querySelectorAll(query);
    // 선택된 목록의 갯수 세기
    const selectedElementsCnt1 = selectedElements1.length;

    // 출력
    for (let k = 0; k < serv_num.length; k++) {
        serv_num[k].innerText = selectedElementsCnt1;
    }
}

getCheckedCnt();

// 문의하기 입력폼 일치 (프로젝트 유형)
let cg_pj = document.querySelectorAll('.cg_pj');
let checkBoxes2 = document.getElementsByClassName('f_prow');

for (let w = 0; w < checkBoxes2.length; w++) {
    checkBoxes2[w].oninput = function () {
        for (let k = 0; k < cg_pj.length; k++) {
            cg_pj[k].innerHTML = checkBoxes2[w].value;
        }
    };
}

function getCheckedPrj() {
    // 선택된 목록 가져오기
    let proj_num = document.querySelectorAll('.ct_wrap .ct_live ul li .proj_num');
    const query = 'input[name="f_prow"]:checked';
    const selectedElements2 = document.querySelectorAll(query);
    // 선택된 목록의 갯수 세기
    const selectedElementsCnt2 = selectedElements2.length;

    // 출력
    for (let k = 0; k < proj_num.length; k++) {
        proj_num[k].innerText = selectedElementsCnt2;
    }
}

// 문의하기 입력폼 일치 (프로젝트 기간)
let = cg_during = document.querySelectorAll('.cg_during');

p_mon.oninput = function () {
    for (let k = 0; k < cg_during.length; k++) {
        cg_during[k].innerHTML = p_mon.value;
    }
};

// 개인정보 수집 이용동의

let agree_btn = document.querySelector('.form_sec8 > .agreebtn');
let agree_report = document.querySelector('.agree_report');

agree_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (agree_report.classList.contains('on')) {
        agree_report.classList.remove('on');
    } else {
        agree_report.classList.add('on');
    }
});

let agree_cbtn = document.querySelector('.close_btn');

agree_cbtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (agree_report.classList.contains('on')) {
        agree_report.classList.remove('on');
    } else {
        agree_report.classList.add('on');
    }
});

emailjs.init('W5Y1NgMRDgzCAxvDM');
