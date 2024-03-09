const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const icon = faq.querySelector('.icon');
    const answer = faq.querySelector('.answer');

    faq.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})