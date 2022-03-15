document.addEventListener("DOMContentLoaded", function (){

/*============= menu toggle ===============*/
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const modalFramesOpen = document.querySelectorAll('[frame-btn]');
  const modalFrames = document.querySelectorAll('[frame-modal]');

 
  const overlayBlock = document.querySelector('#overlay');
  const bodyEl = document.body;
  menuToggle.addEventListener('click', function () {
    if (this.classList.contains('active')) {

      this.classList.remove('active');
    //   mobileMenu.classList.remove('active');
    //   overlayBlock.classList.remove('active');
    //   bodyEl.classList.remove('noscroll');

    } else {
      this.classList.add('active');
	//     mobileMenu.classList.add('active');
    //   overlayBlock.classList.add('active');
    //   bodyEl.classList.add('noscroll');
      }
    });
    // window.addEventListener('resize', function () {
    //   menuToggle.classList.remove('active');
    //   mobileMenu.classList.remove('active');
    //   overlayBlock.classList.remove('active');
    //   bodyEl.classList.remove('noscroll');
    //   overlayModal.classList.remove('active');
    //   for(let item of modalFrames){item.classList.remove('visible')}
    // });

    let cardsSlider = new Swiper(".cards-block", {
       slidesPerView: 1,
        speed:800,
        loop: true,
        breakpoints: {
				455: {
					slidesPerView: 2
				},
				700:{
					slidesPerView: 3
				},
				1024:{
					slidesPerView: 4
				},
        1200:{
          slidesPerView: 5,
        },
        1365:{
          slidesPerView: 7
        }
			}
      });

})