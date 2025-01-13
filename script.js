// gsap.from('.header', { duration: 1.5, y: '-100%', ease: 'bounce' });
// gsap.from('.link', { duration: 2, opacity: 0, delay: .5, stagger: .3 });
// gsap.from('.right', { duration: 1.5, x: '-100vw', ease: 'power2.in', delay: 1.5 });
// gsap.from('.left', { duration: 1, x: '-100%', delay: 1.5 });
// gsap.from('.footer', { duration: 1, y: 0, delay: 1.8, ease: 'elastic' });

const timeline = gsap.timeline({ defaults: { duration: 1.5 } });
timeline
    .from('.header', { y: '-100%', ease: 'bounce' })
    .from('.link', { opacity: 0, stagger: .3 })
    .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
    .from('.left', { x: '-100%' }, 1.4)
    .to('.footer', { y: 0, ease: 'back.inOut(2.7)' }, 3);

const reverseButtonElement = document.querySelector('.reverse-button');

reverseButtonElement.addEventListener('click', () => {
    timeline.timeScale(3);
    timeline.reverse();
});