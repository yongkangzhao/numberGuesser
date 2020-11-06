let min;
let max;
let answer;
let defaultLives;
let currentLives;



document.addEventListener('DOMContentLoaded', initialize);
document.getElementById('guess-value').addEventListener('click', evaluate);
const submit = document.querySelector('#guess-value');
const guess = document.getElementById('guess-input');
const msg = document.querySelector('.message');
function initialize(e){
    min = 1;
    max = 10;
    answer = Math.round(Math.random() * (max - min) + min);
    defaultLives = 3;
    currentLives = defaultLives;
    submit.value = 'SUBMIT';
    msg.innerHTML = '';
    guess.value = '';
    msg.className = '';
    guess.style.borderColor = 'gray';
    guess.disabled = false;
    console.log(answer);
}


function evaluate(e){
    if (guess.value == ''){
        alert('Enter your guess');
        return;
    }
    if (submit.value === 'Play Again!'){
        initialize();
        return;
    }

    if (guess.value == answer){
        // correct
        correct();
        
    }else{
        // wrong
        wrong();
    }
}

function correct(){
    msg.innerHTML = 'correct';
    msg.className = 'correct';
    guess.style.borderColor = 'green';
    gameOver();
}

function wrong(){
    msg.className = 'wrong';
    guess.style.borderColor = 'red';
    currentLives -= 1;
    if (currentLives == 0){
        msg.innerHTML = 'wrong and the answer is: '+answer;
        gameOver();
    }else{
        msg.innerHTML = 'wrong and you have ' + currentLives +' lives left';
    }
}

function gameOver(){
    submit.value = 'Play Again!';
    guess.disabled = true;
}


