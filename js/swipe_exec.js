
/* 탭 상품 스크립트 */
if(0 < $("#tabSwipeProduct").length) {
	try {
		var tabsSwiper = new Swiper('#tabSwipeProduct .swiper-tab-container',{
			speed:500,
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
			onSlideChangeStart: function()	{
				$("#tabSwipeProduct ul.menu > li").removeClass('selected');
				$("#tabSwipeProduct ul.menu > li").eq(tabsSwiper.activeIndex).addClass('selected');
			}
		});

		$("#tabSwipeProduct ul.menu > li").bind('touchstart mousedown click', function(e) {
			e.preventDefault();
				$("#tabSwipeProduct ul.menu > li").removeClass('selected');
			$(this).addClass('selected');
			tabsSwiper.slideTo( $(this).index() );
		});
	} catch(e) {}
}

