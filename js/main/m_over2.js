
//  //  // 프로그래스 바 엘리먼트
//  const progressBar = document.getElementById("progress");
//  /**
//   * container element가 스크롤될 경우
//   */
// console.log(left_scroll_l)
//  const container = document.querySelector("#m_over2");
//  let container_t = container.getBoundingClientRect().top + window.scrollY +container.clientHeight
 
//  // container element 스크롤 이벤트 감지 및 콜백 셋팅
//  window.addEventListener("scroll", function () {

//    // 컨테이너의 스크롤 진행도 계산
//    const scrollHeight = container.scrollHeight - container.clientHeight + 1;
//    const scrolled = (window.scrollY - container_t  / window.scrollY+ scrollHeight) / 100;


//    // 계산된 스크롤 진행도를 CSS로 표현
//    progressBar.style.width = scrolled + "%";
//  });
