const mehrFunc = () => {

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

}

export default mehrFunc;