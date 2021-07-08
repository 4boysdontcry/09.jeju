# Jeju dream tower Clone coding

## GOALS
### 1. main의 동영상은 플레이가 끝난 이후에 다음으로 넘어간다
```bash
function onAni() {
  $(this).addClass('active');
  video.currentTime = 0;
  if ($slide.eq(idx).hasClass('is-video')) video.play();
  else {
    clearTimeout(timeout);
    timeout = setTimeout(onPlay, gap);
  }
}

function onPlay(e) {
			if (e !== 'pager') idx = (idx == lastIdx) ? 0 : idx + 1;
			$pagerSlide.find('.pager').removeClass('active');
			$pagerSlide.find('.pager').eq(idx).addClass('active');
			$slide.eq(idx).css({
				'z-index': depth++,
				'left': '100%'
			})
			$slide.removeClass('active');
			$slide.eq(idx).stop().animate({
				'left': 0
			}, speed, onAni);
		}
```
### 2. cookie를 이용해 '오늘 하루 안보기' 활성화
```bash
function setCookie() {
  var $cookieWrapper = $('.cookie-wrapper');
  var $cookieClose = $cookieWrapper.find('.bt-close');
  var $cookieConfirm = $cookieWrapper.find('.bt-confirm');

  if($.cookie('hideCookie') === 'Y') onCloseCookie();

  function onCloseCookie() {
    $('.cookie-wrapper').hide();
  }

  function onCloseTodayCookie() {
    $.cookie('hideCookie', 'Y', {
      expires: 1,
      path: '/'
    });
    onCloseCookie();
  }

  $cookieClose.click(onCloseCookie);
  $cookieConfirm.click(onCloseTodayCookie);
}
```
### 3. openweathermap에서 날씨정보를 가져온다.
```bash
function weather() {
  var $weather = $('.main-wrapper .weather');
  var weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
  var weatherData = {
    appid: 'appid',
    units: 'metric'
  };
function onGetWeather(r) {
  console.log(r);
  $weather.find('.icon').addClass(weatherIcon['i' + r.weather[0].icon]);
  $weather.find('.temp').text(r.main.temp);
  $weather.find('.date').text(moment(r.dt * 1000).format('YYYY. M. D. ddd'));
  $weather.find('.time > span').text(moment(r.dt * 1000).format('hh:mm'));
  $weather.find('.time > small').text(moment(r.dt * 1000).format('A'));
}
function onGetGeo(r) {    // 현재 위치값
  weatherData.lat = r.coords.latitude;
  weatherData.lon = r.coords.longitude;
  $.get(weatherURL, weatherData, onGetWeather);
}
function onErrorGeo() {   // 에러 발생시 넣어줄 위치값
  weatherData.lat = 33.485739737138786;
  weatherData.lon = 126.48154043372092;
  $.get(weatherURL, weatherData, onGetWeather);
}
navigator.geolocation.getCurrentPosition(onGetGeo, onErrorGeo);
}
```
