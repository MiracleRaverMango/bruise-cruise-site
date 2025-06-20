document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('closeLightbox');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      lightboxImage.src = trigger.src;
      lightbox.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      lightboxImage.src = '';
    }
  });
});
