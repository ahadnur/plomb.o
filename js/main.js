// sections
let warningPage = document.querySelector('.init__warning');
let homepage = document.querySelector('.homepage');
let addPlayer = document.querySelector('.add__player');

// warning page btn
let confirm_btn = document.getElementById('confirm');

// Home Page sections and buttons
let addPlayerBtn = document.getElementById('add__player');

// btns of add player
let addPlayerPrevBtn = document.getElementById('homePage');
let addPlayerNextBtn = document.getElementById('addNewPlayer');

confirm_btn.addEventListener('click', () => {
    warningPage.style.display = 'none';
    homepage.style.display = 'block';
})

addPlayerBtn.addEventListener('click', ()=> {
    homepage.style.display = 'none';
    addPlayer.style.display = 'block';
})

addPlayerPrevBtn.addEventListener('click', () => {
    addPlayer.style.display = 'none';
    homepage.style.display = 'block';
})

addPlayerNextBtn.addEventListener('click', () => {
    addPlayer.style.display = "none";
    
})