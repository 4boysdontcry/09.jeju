var options = {
	videoURL: 'EGGe07oYRkU',
	containment: '.video-wrapper2',
	autoPlay: true, 
	mute: true, 
	startAt: 0,
	opacity: .5, 
	loop: true, 
	ratio: '4/3', 
	addRaster: false,
	showControls: false,
  showYTLogo: false,
  onReady: function (){
    
  },
  onError: function(){
    alert('동영상을 가져올 수 없습니다.')
  }
}

$('#youtubeBg').YTPlayer(options);



// var $video = $('.video-wrapper video')
// $(window).resize('onResize')
// function onResize() {
//   var windowWidth = $(this).innerWidth()
//   var videoWidth = $video.innerWidth()
//   if(windowWidth > videoWidth) {
//     $video.css({'width': '100%', 'height': 'auto'})
//   }
//   else{
//     $video.rcss({'width': 'auto', 'height': 'auto' })
//   }
// }