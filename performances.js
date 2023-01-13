//performance carrousel
const prevcard  = document.querySelector('.prev-performance-card');
const nextcard = document.querySelector('.next-performance-card');

const performancestrack = document.querySelector('.performances-track');

let  performanceCarouselWidth = document.querySelector('.performances-carousel-container').offsetWidth;

window.addEventListener('resize', () => {
   performanceCarouselWidth = document.querySelector('.performances-carousel-container').offsetWidth;
})

let performanceindex = 0;

nextcard.addEventListener('click', () => {
  performanceindex++;
  prevcard.classList.add('show');
  performancestrack.style.transform = `translateX(-${performanceindex *  performanceCarouselWidth}px)`;
  
  if (performancestrack.offsetWidth - (performanceindex *  performanceCarouselWidth) <  performanceCarouselWidth) {
    nextcard.classList.add('hide');
  }
})

prevcard.addEventListener('click', () => {
  performanceindex--;
  nextcard.classList.remove('hide');
  if (performanceindex === 0) {
    prevcard.classList.remove('show');
  }
  performancestrack.style.transform = `translateX(-${performanceindex *  performanceCarouselWidth}px)`;
})
