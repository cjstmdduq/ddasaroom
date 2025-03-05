// 문의 폼 제출 처리
document.getElementById('constructionForm').addEventListener('submit', function(e) {
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