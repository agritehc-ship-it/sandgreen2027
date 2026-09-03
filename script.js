// ==========================================
// 1. تشغيل القائمة الجانبية (Hamburger Menu)
// ==========================================
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sideMenu = document.getElementById('sideMenu');
    
    if (hamburger && sideMenu) {
        hamburger.classList.toggle('active');
        sideMenu.classList.toggle('active');
    }
}

// ==========================================
// 2. تشغيل معرض الصور التلقائي (Image Slider)
// ==========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');

function showNextSlide() {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(showNextSlide, 4000); // تغيير الصورة كل 4 ثوانٍ
}

// ==========================================
// 3. المحرك المباشر لساعة العقارب الرقمية
// ==========================================
function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;

    const secHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.minute-hand');
    const hrHand = document.querySelector('.hour-hand');

    if (secHand && minHand && hrHand) {
        secHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
        hrHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    }
}

// تشغيل الساعة كل ثانية
setInterval(updateAnalogClock, 1000);
updateAnalogClock();
