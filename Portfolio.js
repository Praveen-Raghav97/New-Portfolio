const aboutSection = document.querySelector('.about-section')
const aboutMeBtn = document.querySelector('.about-me-btn')
const xIcon = document.querySelector('.x-icon')
const navbar = document.querySelector('.navbar')
const socialIcons = document.querySelector('.social-links')
const overlay = document.querySelector('.overlay')
const bodyContainer = document.querySelector('#body-container')
const latestWorks = document.querySelector('.latest-works-link')
const downArrow = document.querySelector('.down-arrow')
const latestWorksArrow = document.querySelector('.latest-works-arrow')
const blackLogo = document.querySelector('.black-logo')

aboutMeBtn.addEventListener('click', () => {
  aboutSection.classList.add('active')
  overlay.classList.add('active')
  navbar.classList.add('hidden')
  navbar.classList.add('hidden')
  socialIcons.classList.add('hidden')
})

xIcon.addEventListener('click', () => {
  aboutSection.classList.remove('active')
  overlay.classList.remove('active')
  navbar.classList.remove('hidden')
  socialIcons.classList.remove('hidden')
})

overlay.addEventListener('click', () => {
  aboutSection.classList.remove('active')
  overlay.classList.remove('active')
  navbar.classList.remove('hidden')
  socialIcons.classList.remove('hidden')
})

canvas.addEventListener('wheel', (e) => {
  window.scrollTo(0, (window.innerHeight * e.deltaY) / Math.abs(e.deltaY) + 5)
})

latestWorks.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

downArrow.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

latestWorksArrow.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

blackLogo.addEventListener('click', (e) => {
  scrollTo(0, 0)
})

// window.scrollTo(0,document.body.scrollHeight);

// new GitHubCalendar('.calendar', 'anuragsinghbam', {
//   responsive: true,
//   tooltips: true,
// })

var swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
})

// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Full Stack Developer..","Mern Stack Developer..","Frontend Developer..", "Backend Developer.."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	