const dash = () => {
  const image = document.querySelector('.prof-image');
  const board = document.querySelector('.prof-icon');

  image.addEventListener('click', (e) => {
    e.preventDefault()
    board.classList.toggle('prof-icon-active')
  })
}

dash();

const showActive = () => {

  const activePage = window.location.pathname;
  const myLinks = document.querySelectorAll('.myLink');
  const home = document.getElementById('homeLink');

  myLinks.forEach(link => {
    if (link.href.includes(activePage)) {
      if (activePage.length === 1) {
        home.style.color = "#ffbb00";
        console.log('mypage');
      }
      else {
        link.style.color = '#ffbb00';
        //   home.style.color = "#00ff00";
        console.log(activePage)
      }

    }
    else {
      link.style.color = "ffffff";
    }
  });

}

showActive();
