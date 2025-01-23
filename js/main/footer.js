// 타이핑 요소
let ftitle = document.querySelector(' .f_bgt > ul > li > a');

// 글자 모음
let letters = ['Design', 'Marketing', 'Web-Site'];

// 글자 입력 속도
let speed = 100;
let p = 0;

// 타이핑 효과
let typing = async () => {
    let letter = letters[p].split('');

    while (letter.length) {
        await wait(speed);
        ftitle.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
};

// 글자 지우는 효과
let remove = async () => {
    let letter = letters[p].split('');

    while (letter.length) {
        await wait(speed);

        letter.pop();
        ftitle.innerHTML = letter.join('');
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    p = !letters[p + 1] ? 0 : p + 1;
    typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);
