let pot = document.querySelectorAll("#port_wrap > .port_cont > .p_wrap > .p_item")
let pot_lsbox = document.querySelector("#port_wrap > .port_cont > .p_wrap > li:last-child")

let pot_num = pot.length
let winw  = window.innerWidth

window.onload = function() {
    function isODD(pot_num){
        if(pot_num%2==1 && winw < 1025){
            pot_lsbox.style.width="100%"
        }
      }
    isODD(pot_num)

if( winw < 768){
    // 포트폴리오 박스 마우스 호버 효과 실행
    window.addEventListener("touchstart", function() {}, true);

}
    
}

