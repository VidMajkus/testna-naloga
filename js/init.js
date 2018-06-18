
$('.first-slider').slick({
  arrows: false,
       autoplay: true,
         speed:300,
         arrows: false,
  		 infinite: true,
         draggable: true,
         dots: true,
         slidesToShow: 1,
         slidesToScroll: 1
})

$('.left').click(function(){
  $('.first-slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.first-slider').slick('slickNext');
})

$(document).ready(function(){
      $('.second-slider').slick({
      	  autoplay: true,
      	  speed:300,
          infinite: true,
  		  slidesToShow: 1,
          slidesToScroll: 1,
      });
    });
