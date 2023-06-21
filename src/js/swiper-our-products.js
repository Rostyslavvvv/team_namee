  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
    slidesPerView: 1,
  spaceBetween: 18,
   // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    clickable: true,
    },
    
  
  breakpoints: {
    
    768: {
      slidesPerView: 2,
      
    },
    1200: {
      slidesPerView: 4,
      
    },
  },

});
