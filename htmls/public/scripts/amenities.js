/* ===== START: Smooth Scroll Script ===== */

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.amenities-img-grid-item');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ===== END: Smooth Scroll Script ===== */

/* ===== START: Accordion Toggle Script ===== */

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.accordion-toggle');
    const toggleAllButton = document.getElementById('toggle-all');
    const upArrowIcon = toggleAllButton.querySelector('.up-arrow-icon');
    const toggleAllSpan = toggleAllButton.querySelector('span');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-id');
            const content = document.getElementById(contentId);

            if (content.classList.contains('hidden')) {
                // document.querySelectorAll('.accordion-content').forEach(el => {
                //     el.classList.add('hidden');
                //     el.previousElementSibling.querySelector('span.text-2xl').innerHTML = '&#43;';
                // });

                content.classList.remove('hidden');
                button.querySelector('span.text-2xl').innerHTML = '&#8722;';
            } else {
                content.classList.add('hidden');
                button.querySelector('span.text-2xl').innerHTML = '&#43;';
            }
        });
    });

    toggleAllButton.addEventListener('click', () => {
        const allContents = document.querySelectorAll('.accordion-content');
        const allAreHidden = [...allContents].every(content => content.classList.contains('hidden'));

        if (allAreHidden) {
            allContents.forEach(content => {
                content.classList.remove('hidden');
                content.previousElementSibling.querySelector('span.text-2xl').innerHTML = '&#8722;';
            });
            upArrowIcon.style.transform = 'rotate(0deg)';
            toggleAllSpan.textContent = toggleAllButton.dataset.textCollapse;
        } else {
            allContents.forEach(content => {
                content.classList.add('hidden');
                content.previousElementSibling.querySelector('span.text-2xl').innerHTML = '&#43;';
            });
            upArrowIcon.style.transform = 'rotate(180deg)';
            toggleAllSpan.textContent = toggleAllButton.dataset.textExpand;
        }
    });
});

/* ===== END: Accordion Toggle Script ===== */

/* ===== START: Show More Script ===== */

document.addEventListener('DOMContentLoaded', () => {
    const hiddenRows = document.querySelector('.hidden-row');
    const button = document.querySelector('.show-more-button');
    const showText = button.querySelector('.show-text');
    const lessText = button.querySelector('.less-text');
    const arrowIcon = button.querySelector('.arrow-icon');

    button.addEventListener('click', () => {
        const isExpanded = hiddenRows.style.display === 'flex';

        hiddenRows.style.display = isExpanded ? 'none' : 'flex';
        showText.classList.toggle('hidden', !isExpanded);
        lessText.classList.toggle('hidden', isExpanded);

        // Rotate the arrow icon
        arrowIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

/* ===== END: Show More Script ===== */
