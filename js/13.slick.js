
$('.slick-wrapper').slick({
    // variableWidth: true,      // slide의 크기가 다를 경우
    // adaptiveHeight: true,     // slide의 높이가 제각각일 경우
    // centerMode: true,         // 선택된 slide가 중앙으로 배치
    // centerPadding: '60%',    // 잘안됨
    // fade: true,              // fade mode
    // vertical: true,          // vertical mode
    // verticalSwiping: ,       // vertical mode에서
    // cssEase: 'linear'        // linear, // animation easing
    // focusOnSelect: ,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    // edgeFriction: 0.1,       //infinite: false 일때 작동 마지막 slide에 도착했을때 0에 가까울수록 적게 움직임
    pauseOnDotsHover: true,     // pager에 호버하면 멈춤
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,         // mobile에서 손가락으로 강제 이동
    touchThreshold: 15,         // touch 민감도 숫자가 높을수록 조금만 터치해도 넘어감
    responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1
            }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});