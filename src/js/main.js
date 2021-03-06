document.addEventListener("DOMContentLoaded", function (){

/*============= menu toggle ===============*/
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const overlayBlock = document.querySelector('#overlay');
  const bodyEl = document.body;
  
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if(document.querySelector('.visible')){
      document.querySelector('.visible').classList.remove('visible');
    }
    if (this.classList.contains('active')) {
       
      this.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlayBlock.classList.remove('active');
      bodyEl.classList.remove('noscroll');
      

    } else {
      this.classList.add('active');
	    mobileMenu.classList.add('active');
      overlayBlock.classList.add('active');
      bodyEl.classList.add('noscroll');
      
    
      }
    });
    window.addEventListener('resize', function () {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlayBlock.classList.remove('active');
      bodyEl.classList.remove('noscroll');
      
      for(let item of modalFrames){item.classList.remove('visible')}
    });

    
      if(mobileMenu){
        const mobMenuLinks = mobileMenu.querySelectorAll('a');
        for(let item of mobMenuLinks){
          item.addEventListener('click', function(e){
            if( this.nextElementSibling.classList.contains('submenu')){
              if( this.classList.contains('active')){
                  this.classList.remove('active');
              }
              else{
                this.classList.add('active');
                this.nextElementSibling.classList.add('active');
                this.previousElementSibling.classList.add('active');
                e.preventDefault();
              }
            }
          });
        }
        const mobMenuIcons = mobileMenu.querySelectorAll('.drop-icon');
        for(let item of  mobMenuIcons){
          const thisParent = item.closest('.drop-menu');
          const thisParentSubMenu = thisParent.querySelector('.submenu');
          item.addEventListener('click', function(){
            if(this.classList.contains('active')){
              this.classList.remove('active');
              thisParent.classList.remove('active');
              thisParentSubMenu.classList.remove('active');
            }
            else{
               this.classList.add('active');
              thisParent.classList.add('active');
              thisParentSubMenu.classList.add('active');
            }
          })
        }
         overlay.addEventListener('click', function(e){
            mobileMenu.classList.remove('active');
            bodyEl.classList.remove('noscroll');
            this.classList.remove('active');
            menuToggle.classList.remove('active');
            
          });
      }
    /*  ?????????????? ???????????????????????? */
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

     /*  ?????????????? ?????????????????????????? ?????????????? */
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
      let portfolioSliderShort = new Swiper(".portfolio-slider--short", {
       slidesPerView: 1,
        speed:800,
        loop: true,
        spaceBetween: 16,
         navigation: {
          nextEl: ".portfolio-short-next",
          prevEl: ".portfolio-short-prev",
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
	        slidesPerView: 2,
        },
        1200:{
	        slidesPerView: 2.2,
        },
        1364:{
          	slidesPerView: 3,
        },
        
        1440:{
          	slidesPerView: 3.2,
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
        360: {
					slidesPerView: 2.5
				},
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
          slidesPerView: 6.5,
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
               if(mobileMenu.classList.contains('active')){
                 mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
               }
            }
          }
        });
      }
      /*?????????????? ?????????????? ?? ?????????????????? frame-modal*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('noscroll');
          overlay.classList.remove('active');
          if(item.closest('.modal-video')){
            
             item.closest('.modal-video').querySelector('.modal-video-wrapper iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
            }
        });
      }
    }
    overlay.addEventListener('click', function(e){
    for(let frame of modalFrames){
      frame.classList.remove('visible');
      if( frame.querySelector('.modal-video-wrapper')){
        console.log('223');
          frame.querySelector('.modal-video-wrapper iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        }
      }
      bodyEl.classList.remove('noscroll');
      this.classList.remove('active');
      
    });

    /*===== Catalog  ????????  ===== */
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

    // ?????????? ?????? ????????????????
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input.phone').click(function () {
		$(this).setCursorPosition(3); // set position number
	});



  //*********** */
  const dataOpen = document.querySelectorAll('[data-open');
  if(dataOpen.length > 0){
    const singleProjectTabs = document.getElementById('single-project-tab');
    const singleProjectTabsBtn = singleProjectTabs.querySelectorAll('[ct-btn]');
    let event = new Event("click");
  
    for(let item of dataOpen){
      item.addEventListener('click', function(){
        const thisData = item.getAttribute('data-open');
        for(let btn of singleProjectTabsBtn){
          const btnData = btn.getAttribute('ct-btn');
          
          if(btnData == thisData){
            btn.dispatchEvent(event);
             
          }
        }
         
      })
    }
  }
})