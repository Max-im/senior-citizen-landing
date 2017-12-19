import $ from 'jquery';
import slick from 'slick-carousel';


const momentsFunc = () => {

  $('.moment__carousel').slick({
    prevArrow: '<span class="slick-prev">&#60;</span>',
    nextArrow: '<span class="slick-next">&#62;</span>'
  });

}

export default momentsFunc;