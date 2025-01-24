// Swiper 초기화
const swiper = new Swiper('.cube3d', {
    loop: true, // 무한 루프
    pagination: {
        clickable: true, // 페이지네이션 클릭 가능
    },
    effect: 'cube', // 3D 큐브 효과
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 3000, // 자동 재생 시간 (밀리초)
        disableOnInteraction: false,
    },
});
