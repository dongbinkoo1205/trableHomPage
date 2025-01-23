// 화면에 따라 올라오는 텍스트
let over_wrap =document.querySelector("#banner")
let over_wrap_t = over_wrap.getBoundingClientRect().width
let over_text = document.querySelectorAll("#m_over .over_left > ul > li")

console.log(over_wrap_t)

window.addEventListener("scroll", function(){
    if(window.scrollY >= over_wrap_t){
        for(let i = 0; i < over_text.length; i++){
            over_text[i].classList.add("on")
        }
    }else{
        for(let i = 0; i < over_text.length; i++){
            over_text[i].classList.remove("on")
        }

    }
})
