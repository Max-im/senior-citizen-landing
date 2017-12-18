import $ from 'jquery';
import slick from 'slick-carousel';

window.addEventListener('resize', e => resizeWindow(e));


function resizeWindow(e){
  const width = window.innerWidth;

  if( width > 768 ) {
    document.querySelector('.mainMenu')
      .classList.remove('hide');

    document.querySelectorAll('.mehrTarget')
      .forEach(item => {
        item.classList.remove('hide');
      });
  }
}

resizeWindow();

document.querySelector('.header__sendwich')
  .addEventListener('click', mainMenuToggle);


document.querySelectorAll('.mehr')
  .forEach(item => {
    item.addEventListener('click', toggleMehr);
  });


function toggleMehr(e) {
  e.target.closest('.container')
    .querySelectorAll('.mehrTarget')
    .forEach(item => {
      item.classList.toggle('hide');
    });
}


function mainMenuToggle(e) {
  document.querySelector('.mainMenu')
    .classList.toggle('hide');
}



$('.moment__carousel').slick({
  prevArrow: '<span class="slick-prev">&#60;</span>',
  nextArrow: '<span class="slick-next">&#62;</span>'
});

