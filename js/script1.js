document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000, // Muda o slide a cada 3 segundos
        disableOnInteraction: false, // Continua o autoplay mesmo após interação
      },
      speed: 2000, // Duração da transição entre slides em milissegundos (1 segundo)
    });
  });
  