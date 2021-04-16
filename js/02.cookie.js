/*************** 글로벌 설정 *****************/
init()


/*************** 사용자 함수 *****************/
function init() {
  setTimeout(onModalShow, 2000)
}


/*************** 이벤트 등록 *****************/
$('.bt-close').click(onModalHide)
$('.bt-open').click(onModalShow)


/*************** 이벤트 콜백 *****************/
function onModalShow(){
  $('.modal-wrapper').show()
  $('.modal-wrapper').css('background-color')   //값을 읽어들이는 용도
  $('.modal-wrapper').css('background-color', 'rgba(0, 0, 0, .8)')
  $('.modal-wrapper > .modal-wrap').css('transform')    //기본위치값이 숨어있어야 위에서 떨어지는 효과 가능
  $('.modal-wrapper > .modal-wrap').css('transform', 'translate(-50%, -50%)')
}

function onModalHide() {
  $('.modal-wrapper').attr('style', '')   // attr: 속성값 - transition이 한번 작동한 후 그 값이 남아있기 때문에 초기화 해줌
  $('.modal-wrapper .modal-wrap').attr('style', '')
}
