let confirm_btn = document.getElementById('confirm');
let warningPage = document.querySelector('.init__warning');
let homepage = document.querySelector('.homepage');
confirm_btn.addEventListener('click', () => {
    warningPage.style.display = 'none';
    homepage.style.display = 'block';
})