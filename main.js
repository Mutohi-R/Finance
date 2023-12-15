const navToggle = document.querySelector('.mobile-nav-toggle');
const navigation = document.querySelector('.navigation')

navToggle.addEventListener('click', () => {
    navigation.toggleAttribute("data-visible")
})

const swiper = new Swiper ('.swiper', {
    effect: 'slide',
    loop: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        prevEL: '#nav-left',
        nextEl: '#nav-right',
    }
})