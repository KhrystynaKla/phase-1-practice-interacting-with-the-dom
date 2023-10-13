const counter = document.getElementById('counter');
const buttonMinus = document.getElementById('minus');
const buttonPlus = document.getElementById('plus');
const buttonLike = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const buttonPause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form')
const inputCOmment = document.getElementById('comment-input')
const commentsList = document.getElementById('list')

let number = Number(counter.textContent);
let currentNumberForLikes = number;
let intervalID; 
let currentNumber = 0;
let countClick=1;


function updateCounter() {
    number = currentNumber; 
    counter.textContent = number;
}


function startCounterInterval() {
    intervalID = setInterval(() => {
        currentNumber++;
        updateCounter();
    }, 1000);
}

startCounterInterval();

buttonMinus.addEventListener('click', () => {
    currentNumber--;
    updateCounter();
});

buttonPlus.addEventListener('click', () => {
    currentNumber++;
    updateCounter();
});




buttonLike.addEventListener('click', () => {
    if (currentNumberForLikes === number) {
        countClick++;
    } else {
        const liLikes = document.createElement('li');
        liLikes.textContent = `${number} has been liked ${countClick} times`;
        likesList.appendChild(liLikes);
        countClick = 1;
    }
    currentNumberForLikes = number;
});

buttonPause.addEventListener('click', () => {
    if (buttonPause.textContent === ' pause ') {
        buttonMinus.disabled = true;
        buttonLike.disabled = true;
        buttonPlus.disabled = true;
        clearInterval(intervalID); // Clear the interval using the stored ID
        buttonPause.textContent = ' resume ';
    } else if (buttonPause.textContent === ' resume ') {
        buttonPause.textContent = ' pause ';
        buttonMinus.disabled = false;
        buttonLike.disabled = false;
        buttonPlus.disabled = false;
        startCounterInterval(); // Start the interval again
    }
});

commentForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const li = document.createElement('li')
    li.textContent=inputCOmment.value 
    commentsList.appendChild(li)
    commentForm.reset()
})