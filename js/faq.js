const faqs = document.querySelectorAll('.faq');

for(faq of faqs) {
    const icon = faq.querySelector('.icon');
    const answer = faq.querySelector('.answer');

    faq.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
}