document.addEventListener("DOMContentLoaded", function (){

/*============= menu toggle ===============*/
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

 
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
    /*  Слайдер ПРЕИМУЩЕСТВА */
    let benefitsSlider = new Swiper(".benefits-slider", {
       slidesPerView: 1,
        speed:800,
        // loop: true,
         navigation: {
          nextEl: ".benefits-slider-next",
          prevEl: ".benefits-slider-prev",
        },
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

     /*  Слайдер РЕАЛИЗОВАННЫЕ ПРОЕКТЫ */
    let portfolioSlider = new Swiper(".portfolio-slider", {
       slidesPerView: 1,
        speed:800,
        loop: true,
        centeredSlides: true,
         navigation: {
          nextEl: ".portfolio-slider-next",
          prevEl: ".portfolio-slider-prev",
        },
        breakpoints: {
				425: {
					slidesPerView: 1.1
				},
        575: {
					slidesPerView: 1.5
				},
				700:{
					slidesPerView: 1.8,
          centeredSlides: true,
				}, 
        991:{
	        slidesPerView: 2.2,
        },
        1200:{
	        slidesPerView: 2.8,
        },
        1364:{
          	slidesPerView: 3.5,
        },
        
        1440:{
          	slidesPerView: 3.7,
        },
        1800:{
          	slidesPerView: 4.6,
        }

      }
    });

     /* modal*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      
      const modalFramesClose = document.querySelectorAll('[frame-close]');
      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            bodyEl.classList.remove('noscroll');
            overlay.classList.remove('active');
            
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('noscroll');
               overlay.classList.add('active');
            }
          }
        });
      }
      /*закрыть модалки с атрибутом frame-modal*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('noscroll');
          overlay.classList.remove('active');
        });
      }
    }
    overlay.addEventListener('click', function(e){
    for(let frame of modalFrames){
      frame.classList.remove('visible');
      }
      bodyEl.classList.remove('noscroll');
      this.classList.remove('active');
    });
})