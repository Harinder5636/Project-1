// constants
const slot = {
    seven: {
        imgUrl: 'imgs/7.jpeg'
    },
    cherry: {
        imgUrl: 'imgs/cherry.jpeg'
    },
    lemon: {
        imgUrl: 'imgs/lemon.png'
    }
}

// app's state (varibales)
let choices; // imgs
let results; //who won
let scores; //score

// initialize the values of our state variables



// cached element references 
const scoreEls = {
    win: document.querySelector('#scoreOfWin'),
    loss: document.querySelector('#scoreOfLoss'),
}

const choiceEls = {
    choice1: {
    imgEl: document.querySelector('#choice1 > img')
    },
    choice2: {
    imgEl: document.querySelector('#choice2 > img')
    },
    choice3: {
    imgEl: document.querySelector('#choice3 > img')
    }
}

document.querySelector('button').addEventListener('click',Spinning)
// event listeners


// functions

init ()

function init(){
    scores = {
        win: 0,
        loss: 0,
    }
    choices = {
        choice1: 'seven',
        choice2: 'seven',
        choice3: 'seven',
    }
    results = null;

    render()
}
function render(){
    for (let digits in scores){
     scoreEls[digits].textContent = scores[digits];
     // or scoreEls[digits].textContent = 0;
    }
    for (let pic in choices){
      choiceEls[pic].imgEl.src = slot.seven.imgUrl
      // or choiceEls[pic].imgEl.src = slot[choices[pic]].imgUrl
    }
}

function Spinning(){
}
// resultEls[result].imgEl.src = rpsLookup

// render
// initialize 
// initialize ()
// render ();

