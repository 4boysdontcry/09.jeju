function sortAsc(key) {
  return function(a, b) {
    return key ? a[key] - b[key] : a - b
  }
}

function sortDesc(key) {
  return function(a, b) {
    return key ? b[key] - a[key] : b - a
  }
}

/*************** scroll spy *****************/			// offset: 해당 사진, div 등의 높이값
function scrollSpy(el, cls, _gap) {
  $(window).scroll(onSpyScroll).trigger('Scroll')
  function onScrollSpy() {
    var windowHeight = $(this).innerHeight()
    var scrollTop = $(this).scrollTop()
    var pageOffset = []
    var page
    var gap = _gap || 300
    $(el).each(function(i){
      pageOffset[i] = $(this).offset().top
    })
  
    for(var i=1; i<pageOffset.length; i++) {
      if(scrollTop < pageOffset[i] - gap) break
    }
    page = i - 1
    console.log(page)
    $(el).eq(page).addClass(cls)
  }
}

/*************** getSwiperOption *****************/
function getSwiperOptions(cls, opt) {
  /*
  - cls : '.promo-wrapper'
  - opt 
  {
    pager: true,
    navi: true,
    auto: true,
    delay: 3000,
    loop: true,
    space: 40,
    break: 1
  }
  */
  var opt = opt || {}
  var pagination = (opt.pager === false) ? false : {
    el: cls + ' .pager-wrapper',
    clickable: true
  }

  var navigation = (opt.navi === false) ? false : {
    nextEl: cls + ' .bt-slide.right',
    prevEl: cls + ' .bt-slide.left',
  }

  var autoplay = (opt.auto === false) ? false : {
    // delay: opt.delay ? opt.delay : 3000
    delay: opt.delay || 3000		// opt.delay에 값이 있으면 그 값을 넣고 없다면 3000을 넣어라 (3항 연산자 축약)
  }

  var breakpoints = {};
  if(opt.break == 2) {
    breakpoints = {
      768: { slidesPerView: 2}
    }
  }
  else if(opt.break == 3) {
    breakpoints = {
      768: { slidesPerView: 2},
      1200: { slidesPerView: 3}
    }
  }
  else if(opt.break == 4) {
    breakpoints = {
      576: { slidesPerView: 2},
      992: { slidesPerView: 3},
      1200: { slidesPerView: 4}
    }
  }
  else if(opt.break == 5) {
    breakpoints = {
      576: { slidesPerView: 2},
      768: { slidesPerView: 3},
      992: { slidesPerView: 4},
      1200: { slidesPerView: 5}
    }
  }

  return {
    pagination: pagination,
    navigation: navigation,
    autoplay: autoplay,
    loop: opt.loop === false ? false : true,
    slidesPerView: 1,
    spaceBetween: opt.space || 40,
    breakpoints: breakpoints
  }
}


function swiperHover(swiper, el){
  $(el).hover(function(){
    swiper.autoplay.stop()
  }, function(){
    swiper.autoplay.start()
  })
}