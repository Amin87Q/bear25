function showSection(sectionId) {
    // پنهان کردن همه بخش‌ها
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // نمایش بخش انتخاب شده
    document.getElementById(sectionId).style.display = 'block';
}

function startMining() {
    // توابع مربوط به شروع استخراج
    console.log('Mining started');
    // تغییر وضعیت استخراج به فعال
    document.querySelector('#miningBear p').textContent = 'Status: Mining';
}

function stopMining() {
    // توابع مربوط به توقف استخراج
    console.log('Mining stopped');
    // تغییر وضعیت استخراج به غیرفعال
    document.querySelector('#miningBear p').textContent = 'Status: Idle';
}

function buyUpgrade(upgradeType) {
    // توابع مربوط به خرید ارتقاء
    if (upgradeType === 'production') {
        upgradeProduction();
    } else if (upgradeType === 'clickRate') {
        upgradeClickRate();
    }
}

function upgradeProduction() {
    // توابع مربوط به ارتقاء تولید
    console.log('Production upgraded');
}

function upgradeClickRate() {
    // توابع مربوط به ارتقاء نرخ کلیک
    console.log('Click rate upgraded');
}

// بارگذاری صفحه پیش‌فرض
window.onload = () => showSection('homeSection');
