document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    prevBtn.addEventListener('click', () => {
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    });

    // Auto slide cada 2 segundos
    setInterval(() => {
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    }, 2000);

    showSlide(current);
  });

