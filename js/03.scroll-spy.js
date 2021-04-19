/* 
Scroll Spy
1. 선행학습: dimension
*/

/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll)
$(window).trigger('Scroll')



/*************** 이벤트 콜백 *****************/			// offset: 해당 사진, div 등의 높이값
function onScroll() {
	var windowHeight = $(this).innerHeight()
	var scrollTop = $(this).scrollTop()
	var pageOffset = []
	var page
	var gap = 300
	$('.content').each(function(i){
		pageOffset[i] = $(this).offset().top
	})

	for(var i=1; i<pageOffset.length; i++) {
		if(scrollTop < pageOffset[i] - gap) break
	}
	page = i - 1
	console.log(page)
	$('.content').eq(page).addClass('active')
	// $('.content').eq(page).addClass('active animated rubberBand')

}




// console.log('windowHeight:', windowHeight)
// console.log('scrollTop:', scrollTop)
// console.log('pageOffset:', pageOffset)
/* 
for(var i=0; i<$('.page').length; i++) {
	pageOffset[i] = $('.page').eq(i).offset().top
}

if(scrollTop >= pageOffset[3]) {
	console.log('page4')
}
else if(scrollTop >= pageOffset[2]) {
	console.log('page3')
}
else if(scrollTop >= pageOffset[1]) {     // scrollTop(스크롤이 올라간 값)과 pageOffset(페이지의 높이값)을 비교
	console.log('page2')
}
else {
	console.log('page1')
} 

if(scrollTop < pageOffset[1]) {
	console.log('page1')
}
else if(scrollTop < pageOffset[2]) {
	console.log('page2')
}
else if(scrollTop < pageOffset[3]) {
	console.log('page3')
}
else {
	console.log('page4')
}
*/