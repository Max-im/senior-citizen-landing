const headerFunc = () => {

  window.addEventListener('resize', e => resizeWindow(e));


  function resizeWindow(e){
    const width = window.innerWidth;

    if( width > 768 ) {
      document.querySelector('.header__mainMenu')
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


  function mainMenuToggle(e) {
    document.querySelector('.header__mainMenu')
      .classList.toggle('hide');
  }

}


export default headerFunc;