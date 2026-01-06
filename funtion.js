// 图片轮播核心逻辑
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'respect.webp',
        'HIK.jpg',
        'BIKE.jpg',
        'XIAN1.jpg',
        'XIAN2.jpg',
        '罗阳.jpg'
    ];
    let currentIndex = 0;

    const sliderContainer = document.getElementById('image-slider');
    const sliderImage = document.getElementById('slider-img');

    const prevBtn = document.createElement('button');
    prevBtn.id = 'prev-btn';
    prevBtn.textContent = '上一张';

    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-btn';
    nextBtn.textContent = '下一张';

    sliderContainer.appendChild(prevBtn);
    sliderContainer.appendChild(nextBtn);

    sliderImage.src = images[currentIndex];

    function changeImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        sliderImage.style.opacity = 0;
        setTimeout(() => {
            sliderImage.src = images[currentIndex];
            sliderImage.style.opacity = 1;
        }, 300);
    }

    prevBtn.addEventListener('click', () => changeImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => changeImage(currentIndex + 1));

    // 关键修改：自动切换间隔改为30秒（30000毫秒）
    setInterval(() => changeImage(currentIndex + 1), 30000);

});
