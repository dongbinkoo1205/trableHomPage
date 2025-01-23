//오프닝 객체
let i_body = document.querySelector("#intro_text");
let i_t = document.querySelectorAll("#intro_text > ul > li > span");
let i_t2 = document.querySelectorAll("#intro_text > ul > li > span.hd");
let i_b = document.querySelector(".text_ball .t_ball");

let intro_smile = document.querySelector("#intro_next > .ball_bg");
let intro_talk = document.querySelector("#intro_next > .talk_box");

// 오프닝
window.addEventListener("load", function () {
  // 오프닝 시작
  for (let i = 0; i < i_t2.length; i++) {
    setTimeout(function () {
      i_t2[i].classList.add("on");
      i_b.classList.add("on");
    }, 1000);
  }
  setTimeout(() => {
    i_body.classList.add("on");
    for (let i = 0; i < i_t.length; i++) {
      i_t[i].classList.add("ch");
    }
  }, 1400);

  setTimeout(function () {
    i_body.classList.add("opacity");
  }, 2700);
  setTimeout(function () {
    i_body.style.display = "none";
  }, 3500);
  setTimeout(function () {
    intro_smile.classList.add("on");
  }, 4000);
  setTimeout(function () {
    intro_smile.classList.add("talk");
  }, 4200);

  // 문의하기 얼굴

intro_smile.addEventListener("click", function (e) {
    e.preventDefault();
    if(intro_talk.classList.contains("on")){
        intro_talk.classList.remove("on");

    }else{
        intro_talk.classList.add("on");
    }
});



// 클릭시 사라짐

let contact_close = document.querySelector("#intro_next .us_close");



contact_close.addEventListener("click", function(e){
    e.preventDefault();
    if(intro_talk.classList.contains("on")){
        intro_talk.classList.remove('on')
    }
})


// 현재 날짜와 시간을 가져오기

let clockTarget = document.querySelector("#intro_next .talk_box .us2_head ul .us_clock");

function clock() {
const currentDate = new Date();

// 각 구성 요소를 가져오기
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// 날짜와 시간을 문자열로 포맷팅
clockTarget.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

}

clock();
setInterval(clock, 1000);


// 타이핑 효과
const typingwrap = document.querySelector(" .talk_wrap .typing  .typing_cg");

// 글자 모음
const letters = [
  "DESIGN을 도와드릴까요?", 
  "MARKETING이 필요하신가요?",
  "UX/UI를 변경하시겠어요?",
  "WEB-SITE를 제작하시겠어요?",
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    typingwrap.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    typingwrap.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


// 티에이 프로젝트 궁금하신가요 버튼 모음

let talk_wrap = document.querySelector("#intro_next > .talk_box")
let talk_wrap_lc = talk_wrap.offsetTop;

let talk_btns = document.querySelectorAll(".talk_wrap > div > .talk_btn")
let talk_conts = document.querySelectorAll(".talk_wrap > div > .talk_oj")

let message_cont = document.querySelectorAll("#intro_next > .talk_box .talk_wrap .talk_oj .oj_cont")

let talk_message = document.querySelectorAll("#intro_next > .talk_box .talk_wrap .talk_oj .oj_cont  .oj_3d > .d3_message > .coun_message")


// 콘텐츠의 스크롤을 아래로 함수 선언
function cont_bt(){
  setTimeout(() => {
    for(let o = 0; o < talk_conts.length; o++){
      let talk_cont_bt =  message_cont[o].getBoundingClientRect().top
      talk_conts[o].scrollTo({top:talk_cont_bt, behavior:'smooth'});
     } 
  }, 800);
}

// function heightsame(){
//   for(let l = 0; l < talk_conts.length; l++){ 
//     if(talk_conts[l].classList.contains("on")&& ){
//       console.log("hi")
//       // talk_wrap.classList.add("scrollStop")
//       for(let b = 0; b < talk_conts.length; b++){
//         talk_wrap.style.height = talk_conts[b].offsetHeight + "px"
//       }
//     }else if(talk_conts[l].classList.contains("hi") === false){
//       console.log("bye")
//       // talk_wrap.classList.remove("scrollStop")

//     }
//   }
// }


// function scrollFix(){
//   for(let c = 0; c < talk_conts.length; c++){ 
//     if(talk_conts[c].classList.contains("on")){
//     }else{
//       talk_wrap.classList.remove("scrollStop")

//     }
//   }

// }

for(let t = 0; t < talk_btns.length; t++){
  // 콘텐츠 클릭시 위로 올라가며, 해당 섹션에 맞는 콘텐츠 등장
    talk_btns[t].addEventListener("click", function(){

        talk_wrap.scrollTo({top:talk_wrap_lc, behavior:'smooth'});
        
        for(let c = 0; c < talk_conts.length; c++){ 
            talk_conts[c].classList.remove("on")  
        }
        this.nextElementSibling.classList.add('on');
        this.parentNode.parentNode.parentNode.classList.add('scrollStop');
        
        for(let p = 0; p < talk_prev.length; p++){
          talk_prev[p].addEventListener("click", function(){
            talk_wrap.classList.remove("scrollStop")
          })
        }

        // 콘텐츠 클릭시 부모의 높이값과 자식의 높이값을 같게 만들어 초과되는 공간 삭제
        // heightsame();

        // 콘텐츠의 스크롤을 아래로 함수 호출
        cont_bt();




        // scrollFix()
        // 콘텐츠 내부 말풍선 효과
        if(this.nextElementSibling.scrollTop < 100){
          for(let m = 0; m < talk_message.length; m++){
              talk_message[m].classList.add("on") 
          }
      }


      
    })
}

// 뒤로가기 버튼
let talk_prev = document.querySelectorAll("#intro_next > .talk_box .talk_wrap .talk_oj .ojt_img .ts_close")

for(let p = 0; p < talk_prev.length; p++){
    talk_prev[p].addEventListener("click", function(){
        for(let c = 0; c < talk_conts.length; c++){
            if(talk_conts[c].classList.contains("on")){
                talk_conts[c].classList.remove("on")

            }else{
            }
        }
    })
}






});




// setTimeout(() => {
//   talk_conts.scrollTo({bottom:0, behavior:'smooth'});
// }, 500);

// // 이 부분부터 수정
