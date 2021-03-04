// sections
let warningPage = document.querySelector('.init__warning');
let homepage = document.querySelector('.homepage');
let addPlayer = document.querySelector('.add__player');

// warning page btn
let confirm_btn = document.getElementById('confirm');

// Home Page sections and buttons
let addPlayerBtn = document.getElementById('add__player');



// questions section
var questions = document.querySelector('.questions');

// question
var questionList = [
    "This is the first quest of the game! This is the second line of the questand this is the third line",
    "Second questions is not like the first one",
    "This is the third question"
]





// grabing the show field the names
var nameList = document.querySelector('.name__list');


// list for player name
var player_names = []
console.log(player_names);
// input field
var player_name = document.getElementById('input_player_name');
var addBtn = document.getElementById('input_btn');

// Event Listener
addBtn.addEventListener('click', addName);

function addName(){
    // Creating the li for name__list
    var listItem = document.createElement('li');
    listItem.classList.add('name');
    nameList.appendChild(listItem);

    // creating the name element
    var name_content = document.createElement('p');
    name_content.classList.add('text');
    listItem.appendChild(name_content);

    // Creating the button
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('del__btn');
    deleteBtn.innerHTML = '<img src="./img/minus 1.png" alt="minus">'
    listItem.appendChild(deleteBtn)

    // adding the names
    name_content.innerText = player_name.value;
    player_names.push(player_name.value);
    player_name.value = ""

}

// btns of add player
let addPlayerPrevBtn = document.getElementById('homePage');
let addPlayerNextBtn = document.getElementById('addNewPlayer');
var playerAddWarning = document.querySelector('.player__warning__sec');

// question selector
var questions = document.querySelector('.questions')
var playerAddedConfirm = document.getElementById('warning__confirm');
playerAddedConfirm.addEventListener('click', () => {
    addPlayer.style.display = "block";
    playerAddWarning.style.display = "none";
})

addPlayerNextBtn.addEventListener('click', checkLength);
function checkLength(){
    return
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

// about btn
var about_btn = document.getElementById('about__btn');
var about__sec = document.querySelector('.about');

about_btn.addEventListener('click', ()=> {
    // console.log("CLicked");
    questions.style.display = "none";
    homepage.style.display = "none";
    about__sec.style.display = 'block';
})

// about page btn selector
var aboutPrevBtn = document.getElementById('prev');
aboutPrevBtn.addEventListener('click', () => {
    about__sec.style.display = 'none';
    homepage.style.display = "block";
})