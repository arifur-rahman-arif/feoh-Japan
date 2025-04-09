document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const btnScrollTop = document.querySelector('.btnScrollTop');

    window.addEventListener('scroll', function () {
        let currentScroll = window.scrollY;

        if (currentScroll < lastScrollTop && currentScroll > 200) {
            // User is scrolling up and past 200px
            btnScrollTop.classList.add('activated');
        } else {
            // User is scrolling down or at the top
            btnScrollTop.classList.remove('activated');
        }

        lastScrollTop = currentScroll;
    });

    btnScrollTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});