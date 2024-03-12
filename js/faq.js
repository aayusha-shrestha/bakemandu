const faqs = document.querySelectorAll('.faq');

for(let faq of faqs) {
    const icon = faq.querySelector('.faq__icon');
    const answer = faq.querySelector('.faq__answer');

    faq.addEventListener('click', () => {
        icon.classList.toggle('faq__icon--active');
        answer.classList.toggle('faq__answer--active');
    })
}