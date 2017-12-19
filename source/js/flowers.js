import $ from 'jquery';
import slick from 'slick-carousel';


const flowersFunc = () => {

  $('.flowers__list').slick({
    mobileFirst: true,
    prevArrow: '<span class="slick-prev flowers__control_prev">&#60;</span>',
    nextArrow: '<span class="slick-next flowers__control_next">&#62;</span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

}

export default flowersFunc;