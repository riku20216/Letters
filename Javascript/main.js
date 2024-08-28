// --------メイン要素の表示--------
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('show');
});
// -----------------------------
// -----------------------------



// --------選択したテキストを手書き化--------
// --------------------------------------
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let selectedText = window.getSelection();
        if (selectedText.rangeCount) {
            let range = selectedText.getRangeAt(0);
            let span = document.createElement('span');
            span.className = 'selected-text';
            range.surroundContents(span);
        }
    }
});
// --------------------------------------
// --------------------------------------



// --------手紙型イメージ画像の切り替え-------
// --------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        document.getElementById('additionalImage1'),
        document.getElementById('additionalImage2'),
        document.getElementById('additionalImage3')
    ];
    
    let currentIndex = 0;
    const displayTime = 10000;
    const fadeDuration = 2000;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.remove('fade-out-image');
                img.classList.add('fade-in-image');
                img.style.display = 'block';
            } else {
                img.classList.remove('fade-in-image');
                img.classList.add('fade-out-image');
                setTimeout(() => img.style.display = 'none', fadeDuration);
            }
        });
    }

    setInterval(() => {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
    }, displayTime);

    function changeImage() {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(changeImage, duration);
    }

    showImage(currentIndex);
    changeImage();
});
// --------------------------------------
// --------------------------------------



// --------アプリ使用フローとQ&Aの開閉-------
// --------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const flowAccordionItems = document.querySelectorAll('.flow_accordion dt');
    const qaAccordionItems = document.querySelectorAll('.qa_accordion dt');

    function setupAccordion(accordionItems) {
        accordionItems.forEach(item => {
            item.addEventListener('click', function() {
                const dd = this.nextElementSibling;
                this.classList.toggle('active');
                dd.classList.toggle('active');
            });
        });
    }

    setupAccordion(flowAccordionItems);
    setupAccordion(qaAccordionItems);
});
// --------------------------------------
// --------------------------------------



// --------フッター（メニューボタン）のスクロール-------
// -----------------------------------------------
document.querySelectorAll('.footer-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// -----------------------------------------------
// -----------------------------------------------



// -------------スクロールフェードイン---------------
// -----------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.fadeIn');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollY;

            if (scrollY + windowHeight > elementTop) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
// -----------------------------------------------
// -----------------------------------------------