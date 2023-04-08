function loadSEAL() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--seal', window.pageYOffset / (document.body.offsetHeight - window.innerHeight) + 'px');
        document.body.style.setProperty('overflow-x', 'hidden');
    }, false);
    window.addEventListener("scroll", scrollAnimate);
    scrollAnimate();
}
function scrollAnimate() {
    const y_elements = document.querySelectorAll<HTMLElement>(".yb-seal");
    const triggerBottom = (window.innerHeight / 5) * 4.5;
    y_elements.forEach((y_item) => {
        const y_itemTop = y_item.getBoundingClientRect().top;
        if (y_itemTop < triggerBottom) {
            y_item.classList.add("seal-show");
            // duration
            const durationValue = y_item.getAttribute("yb-seal-duration");
            if (durationValue) {
                y_item.style.transition = durationValue + 's all ease';
            }
            else {
                y_item.style.transition = '0.6s all ease';
            }
            // Delay
            const delayValue = y_item.getAttribute("yb-seal-delay");
            if (delayValue) {
                y_item.style.transitionDelay = delayValue + 's';
            }
            // Timing function
            const timingValue = y_item.getAttribute("yb-seal-timing");
            const timingWidthValue = y_item.getAttribute("yb-seal-timing-width");
            if (timingValue) {
                y_item.style.transitionTimingFunction = timingValue;
                y_item.style.transition = 'width 2s' + timingValue;
                y_item.addEventListener('mouseenter', function () {
                    y_item.style.width = timingWidthValue + 'px';
                });
                y_item.addEventListener('mouseleave', function () {
                    y_item.style.width = '';
                });
            }
            if ((Array.from(y_item.classList).includes('yb-seal-slide-up')) || (Array.from(y_item.classList).includes('yb-seal-slide-down'))) {
                let op = 0.1;
                while (op < 1) {
                    op += 0.1;
                    if (op == 1)
                        return;
                    y_item.style.opacity = op.toString();
                }
            }
        }
        else {
            y_item.classList.remove("seal-show");
            if ((Array.from(y_item.classList).includes('yb-seal-slide-up')) || (Array.from(y_item.classList).includes('yb-seal-slide-down'))) {
                let op = 1;
                while (op > 0) {
                    op -= 0.1;
                    if (op == 0)
                        return;
                    y_item.style.opacity = op.toString();
                }
            }
        }
    });
}
loadSEAL();
