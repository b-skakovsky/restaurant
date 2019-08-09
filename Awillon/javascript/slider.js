$('.header-slider').slick({
	dots:true,
  autoplay: true,
  autoplaySpeed: 3000,
   arrows : false,
   pauseOnHover: false
	// prevArrow: '<button class="prev"  type="button"><i class="fas fa-chevron-left"></i></button>',
	// nextArrow: '<button class="next" type="button"><i class="fas fa-chevron-right"></i></button>'
});
$('.slider-windows-wrapper').slick({
  speed: 300,
  dots:true,
  slidesToShow: 4,
  prevArrow: document.querySelector('#my-arrow-prev'),
  nextArrow: document.querySelector('#my-arrow-next'),

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		
// 	  infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,



$('.slider-second-wrapper').slick({
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	nextArrow: document.querySelector('#my-arrow-nextr'),
  prevArrow: document.querySelector('#my-arrow-prevr'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
