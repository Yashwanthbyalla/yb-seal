"use strict";
function loadSEAL() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--sal', window.pageYOffset / (document.body.offsetHeight - window.innerHeight) + 'px');
    }, false);
    window.addEventListener("scroll", scrollAnimate);
    scrollAnimate();
}
function scrollAnimate() {
    const y_elements = document.querySelectorAll(".y-scroll");
    const triggerBottom = (window.innerHeight / 5) * 4;
    y_elements.forEach((y_item) => {
        const y_itemTop = y_item.getBoundingClientRect().top;
        if (y_itemTop < triggerBottom) {
            y_item.classList.add("sal-show");
            const value = y_item.getAttribute("y-sal-dur");
            if (value) {
                y_item.style.transition = value + 's all ease';
            }
            else {
                y_item.style.transition = '0.6s all ease';
            }
            if ((Array.from(y_item.classList).includes('y-scroll-slide-up')) || (Array.from(y_item.classList).includes('y-scroll-slide-down'))) {
                let op = 0.1;
                while (op < 1) {
                    op += 0.1;
                    if (op == 1)
                        return;
                    y_item.style.opacity = op;
                }
            }
        }
        else {
            y_item.classList.remove("sal-show");
            if ((Array.from(y_item.classList).includes('y-scroll-slide-up')) || (Array.from(y_item.classList).includes('y-scroll-slide-down'))) {
                let op = 1;
                while (op > 0) {
                    op -= 0.1;
                    if (op == 0)
                        return;
                    y_item.style.opacity = op;
                }
            }
        }
    });
}
loadSEAL();
