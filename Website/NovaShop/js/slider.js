/* 
   NovaShop - Hero Slider Logic
*/

class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.interval = null;
    }

    start() {
        if (this.slides.length < 2) return;
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = new HeroSlider();
    slider.start();
});
