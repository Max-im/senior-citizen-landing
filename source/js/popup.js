import $ from 'jquery';
import magnificPopup from 'magnific-popup';

const popupFunc = () => {

  $('.moment__btn').magnificPopup({
    type: 'inline',
    preloader: false,
  });

   $('.moment__plus').magnificPopup({
    type: 'inline',
    preloader: false,
  });
}


export default popupFunc;