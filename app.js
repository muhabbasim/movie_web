const rightArrows = document.querySelectorAll('.movie-list-arrow-right');
const leftArrows = document.querySelectorAll('.movie-list-arrow-left');
const movieList = document.querySelectorAll('.movie-list');
const toggleBall = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.content, .navbar-container, .profile-text-container svg, .movie-list-title, .sidebar, .toggle, .toggle svg, .sidebar svg');

// console.log(movieList)

leftArrows.forEach((leftArrow, i) => {
  const itemNumber = movieList[0].querySelectorAll('img').length; // number of img in each movie list
  const ratio = Math.floor(window.innerWidth / 270) // the screen width
  let clickCounter = 0;
  
  leftArrow.addEventListener('click', () => {
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {

      movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`
      // console.log('arrow clicked:' + i)
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  })
  // console.log(movieList[i].computedStyleMap().get('transform')[0].x.value);
  // console.log(movieList[0].querySelectorAll('img').length)
})

rightArrows.forEach((rightArrow, i) => {
  const itemNumber = movieList[0].querySelectorAll('img').length; // number of img in each movie list
  const ratio = Math.floor(window.innerWidth / 270) // the screen width
  let clickCounter = 0;
  
  rightArrow.addEventListener('click', () => {
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {

      movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value + 300}px)`
      // console.log('arrow clicked:' + i)
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  })
  // console.log(movieList[i].computedStyleMap().get('transform')[0].x.value);
  // console.log(movieList[0].querySelectorAll('img').length)
})

toggleBall.addEventListener('click', () => {
  items.forEach(item => {
    item.classList.toggle('active');
  })
  toggleBall.classList.toggle('active');
})


// console.log(window.innerWidth)
// console.log(Math.floor(window.innerWidth/270))