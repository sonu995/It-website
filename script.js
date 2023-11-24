// -----searching--------------


let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});



// ---------banner------
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  mouseDrag:false,
  autoplay:true,
  animateOut: 'slideOutUp',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});




AOS.init();



const strings = ["Frontend", "Developer", "Engineer", "Javascript", "React.js"];
const fontSlash = document.querySelector(".typingContent");

const slash = document.querySelector(".root");
let xPercentage = 0;

function slashAnimation() {
  setTimeout(() => {
    let interval = setInterval(() => {
      xPercentage += 2;
      slash.style.setProperty("--x-percentage", xPercentage + "%");

      if (xPercentage === 100) {
        clearInterval(interval);

        // Wait for 2 seconds before decreasing
        setTimeout(() => {
          interval = setInterval(() => {
            xPercentage -= 2;
            slash.style.setProperty("--x-percentage", xPercentage + "%");

            if (xPercentage === 0) {
              clearInterval(interval);
              const index = strings.indexOf(fontSlash.innerText); // find index of prevoius H1 content
              const nextIndex = index + 1 === strings.length ? 0 : index + 1;
              fontSlash.innerText = strings[nextIndex]; // change with next index of strings array
              // Start over after reaching 0
              slashAnimation();
            }
          }, 10);
        }, 2000);
      }
    }, 10);
  }, 150);
}
slashAnimation();
