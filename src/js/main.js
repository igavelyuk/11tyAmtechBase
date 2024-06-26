//Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});




// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#navigation");
const CShamburgerMenu = document.querySelector("#navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener('scroll', (e) => {
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }


    document.addEventListener('DOMContentLoaded', () => {
        const sliders = document.querySelectorAll('.products-slider');
        sliders.forEach((slider, index) => initializeSlider(slider, index));
    });


    function initializeSlider(slider, index) {
      const slides = slider.querySelectorAll('.slide');
      const dots = slider.querySelectorAll('.dot');

        let currentIndex = 0;

        function showSlides(index) {
            if (index >= slides.length-1) {
                currentIndex = 0;
            }
            if (index < 0) {
                currentIndex = slides.length;
            }

            slides.forEach((slide, i) => {
                slide.style.display = (i === currentIndex) ? 'block' : 'none';
            });

            dots.forEach((dot, i) => {
                dot.className = dot.className.replace(' active', '');
                if (i === currentIndex) {
                    dot.className += ' active';
                }
            });
        }

        // showSlides(currentIndex);

        slider.querySelector('.prev').addEventListener('click', () => {
            if (currentIndex = 0) showSlides(currentIndex -= 1);
            showSlides(currentIndex += 1)
        });

        slider.querySelector('.next').addEventListener('click', () => {
            showSlides(currentIndex += 1);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlides(currentIndex = i);
            });
        });
    }
