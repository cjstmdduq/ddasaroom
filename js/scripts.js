// 모바일 메뉴 토글 버튼 생성 및 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-container');
    
    // 모바일 메뉴 토글 버튼 추가
    const toggleButton = document.createElement('button');
    toggleButton.className = 'mobile-menu-toggle';
    toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(toggleButton);

    // 모바일 메뉴 토글 이벤트
    toggleButton.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('show');
        toggleButton.innerHTML = navMenu.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // 드롭다운 메뉴 토글 (모바일)
    const menuItems = document.querySelectorAll('.nav-menu > li');
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.style.display = 
                        dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });
});

// 문의 폼 제출 처리
document.getElementById('constructionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 폼 데이터 수집
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        region: document.getElementById('region').value,
        size: document.getElementById('size').value,
        balcony: document.getElementById('balcony').value,
        location: document.getElementById('location').value
    };

    // 여기에 폼 제출 로직 추가
    console.log('문의 접수:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    this.reset();
}); 