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

// grabing the show field the names
let nameList = document.querySelector('.name__list');


// list for player name
var player_names = []

// input field
var player_name = document.getElementById('input_player_name');
var addBtn = document.getElementById('input_btn');

// Event Listener
addBtn.addEventListener('click', addName);

// Functions
function addName(event){
    event.preventDefault();
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameList.appendChild(nameDiv);
    // creating new li
    const newName = document.createElement('li');
    newName.classList.add('single__name');
    nameDiv.appendChild(newName);
    // for the name
    const singleName = document.createElement('p');
    const delBtn = document.createElement('button');
    delBtn.classList.add('del__btn');
    delBtn.innerHTML = '<img src="./img/minus 1.png" alt="minus">'
    newName.appendChild(singleName);
    newName.appendChild(delBtn)

    singleName.innerText = player_name.value;
}

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