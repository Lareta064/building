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
        spaceBetween: 16,
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

    /*    catalog tabs */
    let catalogTabs = new Swiper(".catalog-tabs-btns", {
       slidesPerView: 2,
        speed:800,
        
         navigation: {
          nextEl: ".catalog-tabs-next",
          prevEl: ".catalog-tabs-prev",
        },
        breakpoints: {
				455: {
					slidesPerView: 2.8
				},
				768:{
					slidesPerView: 4
				},
				1024:{
					slidesPerView: 5
				},
        1200:{
          slidesPerView: 6,
        },
         1365:{
          slidesPerView: 8,
        }
			}
    });

    /*====slider single project =========*/
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".mySwiper2-next",
          prevEl: ".mySwiper2-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      /*====slider project plan mobile =========*/

      let projectPlan = new Swiper(".project-variants-slider", {
       slidesPerView: 1,
        speed:800,
        loop:true,
         navigation: {
          nextEl: ".project-variants-next",
          prevEl: ".project-variants-prev",
        }
      });

      /*====slider  guarantees mobile =========*/

      let guarantees = new Swiper(".guarantees-content-mobile", {
       slidesPerView: 1,
        speed:800,
        loop:true,
         navigation: {
          nextEl: ".guarantees-slider-next",
          prevEl: ".guarantees-slider-prev",
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

    /*===== Catalog  табы  ===== */
    const customTabs = document.querySelectorAll('[custom-tabs]');
    
    if(customTabs.length > 0){
      for(let item of customTabs){
        
        const ctBtns = item.querySelectorAll('[ct-btn]');
        const ctContents = item.querySelectorAll('[ct-content]');
        
        for(let i=0; i< ctBtns.length; i++){
          ctBtns[i].addEventListener('click', function(){
            for(let j=0; j< ctBtns.length;j++){
              if(j!=i){
                ctBtns[j].classList.remove('custom-tab--current');
                
              }
              else{
                const thisData =  this.getAttribute('ct-btn');
                this.classList.add('custom-tab--current');
                

                for(let content of ctContents){
                  content.classList.remove('ct-content--active');
                  const contentData = content.getAttribute('ct-content');
                  if(contentData == thisData){
                    content.classList.add('ct-content--active');
                  }
                }
              }

            }
            
          });
        }
      }
    }
})