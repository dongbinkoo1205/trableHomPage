const btnn = document.getElementById('main_gogo');

document.getElementById('form_main').addEventListener('submit', function (event) {
    event.preventDefault();

    btnn.value = 'Sending...';

    const serviceID = 'service_603nopq';
    const templateID = 'template_t4amd6p';

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btnn.value = 'CONTACT PROJECT';
            alert('문의주신 내용이 접수되었습니다. 감사합니다.');
            document.querySelector('#m_com').value = '';
            document.querySelector('#m_name').value = '';
            document.querySelector('.m_proj').value = '';
            document.querySelector('.m_prow').value = '';
            document.querySelector('.m_bud').value = '';
            document.querySelector('#m_mon').value = '';
            document.querySelector('#m_page').value = '';
            document.querySelector('#m_refer').value = '';
            document.querySelector('#m_phone').value = '';
            document.querySelector('#m_email').value = '';
        },
        (err) => {
            btnn.value = 'CONTACT PROJECT';
            alert(JSON.stringify(err));
        }
    );
});

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
