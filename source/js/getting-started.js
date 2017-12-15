console.info("Welcome to Pattern Library: Webpack Edition");
console.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.info("Place any generic javascript files in the ./source/js folder, and webpack will bundle it up for you.");

window.addEventListener('resize', e => {
  const width = window.innerWidth;

  if( width > 768 ) {
    document.querySelector('.mainMenu')
      .classList.remove('hide');
  }
})


document.querySelector('.header__sendwich')
  .addEventListener('click', mainMenuToggle);



function mainMenuToggle(e) {
  document.querySelector('.mainMenu')
    .classList.toggle('hide');
}