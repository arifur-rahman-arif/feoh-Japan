/* Scroll To Top Function Starts*/

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            document.querySelector('.btnScrollTop').classList.add('activated');
        } else {
            document.querySelector('.btnScrollTop').classList.remove('activated');
        }
    });
});

document.querySelector('.btnScrollTop').addEventListener('click', function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 5);
    }
});

/* Scroll To Top Function Ends*/
