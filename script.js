document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(faq => {
    faq.querySelector('.question').addEventListener('click', () => {
      faq.classList.toggle('open');
    });
  });
});
