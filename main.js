$(document).ready(function(){

  // LightBox

  $('.venobox').venobox({
    framewidth : '800px',                            // default: ''
    frameheight: '600px',                            // default: ''
    bgcolor    : '#ffffff',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'], // default: []
    spinner    : 'wave',
    spinColor  : '#10c9c3'
  });
  
  // Slick Slider 

  $('.main-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.partner-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Counter Up

  $('.counter').counterUp({
    delay: 100,
    time: 5000
  });

  // Sticky Menu 

  $(window).on('scroll', function() {
    if($(this).scrollTop() > 20) {
      $('.main-menu').addClass('sticky')
    } else {
      $('.main-menu').removeClass('sticky')
    }
  });

  $('#nav').onePageNav({
    currentClass: 'active'
  });


});