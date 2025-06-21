// タイピングエフェクト
function typeWriter() {
    const messages = [
        "Web開発を学んでいます",
        "フロントエンドが好きです", 
        "ユーザー体験を大切にします",
        "毎日コードを書いています"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.getElementById('typed-text');
    
    if (!typedElement) return;
    
    function type() {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed = 50;
        }
        
        if (!isDeleting && charIndex === currentMessage.length) {
            typeSpeed = 2000; // 完了後の待機時間
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            typeSpeed = 500; // 次のメッセージまでの待機時間
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// スキルバーのアニメーション
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        
        // 段階的にアニメーションを開始
        setTimeout(() => {
            bar.style.width = width + '%';
        }, index * 200);
    });
}

// フォーム送信処理
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // ローディング状態を表示
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;
        
        // フォームデータを取得
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // 簡単なバリデーション
        if (!data.name || !data.email || !data.message) {
            alert('必須項目をすべて入力してください。');
            resetSubmitButton();
            return;
        }
        
        if (!data.privacy) {
            alert('プライバシーポリシーに同意してください。');
            resetSubmitButton();
            return;
        }
        
        // 送信シミュレーション
        setTimeout(() => {
            resetSubmitButton();
            showSuccessMessage();
            form.reset();
        }, 2000);
        
        function resetSubmitButton() {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// 成功メッセージ表示
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'flex';
    }
}

// 成功メッセージ非表示
function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

// スムーススクロール
function smoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const overviewSection = document.querySelector('.overview-section');
            if (overviewSection) {
                overviewSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// アクティブナビゲーション更新
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('.html', '');
        if (href === `${currentPage}.html` || (currentPage === '' && href === 'home.html')) {
            link.classList.add('active');
        }
    });
}

// 交差オブザーバーでアニメーション
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // スキルページの場合、スキルバーアニメーションを実行
                if (entry.target.classList.contains('skills-grid')) {
                    setTimeout(() => animateSkillBars(), 300);
                }
            }
        });
    }, observerOptions);
    
    // 観察対象の要素を選択
    const observeElements = document.querySelectorAll('.overview-card, .update-item, .skill-item, .interest-card, .goal-item, .timeline-item');
    observeElements.forEach(el => observer.observe(el));
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // タイピングエフェクトを開始
    typeWriter();
    
    // フォーム処理を設定
    handleFormSubmission();
    
    // スムーススクロールを設定
    smoothScroll();
    
    // アクティブナビゲーションを更新
    updateActiveNavigation();
    
    // 交差オブザーバーを設定
    setupIntersectionObserver();
    
    // スキルページの場合、少し遅れてアニメーション開始
    if (window.location.pathname.includes('skills.html')) {
        setTimeout(() => animateSkillBars(), 1000);
    }
});

// ウィンドウリサイズ時の対応
window.addEventListener('resize', function() {
    // 必要に応じてレイアウト調整
});

// スクロール時のヘッダー効果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.backdropFilter = 'none';
    }
});
