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