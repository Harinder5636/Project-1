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

document.querySelector('button').addEventListener('click', Spinning)

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
      choiceEls[pic].imgEl.src = slot[choices[pic]].imgUrl
}
}

function Spinning() {
    choices.choice1 = grabOne();
    choices.choice2 = grabOne();
    choices.choice3 = grabOne();
    
    if(choices.choice1 === choices.choice2 && choices.choice1 === choices.choice3){
        results = 'win';
    
    } else {
        results = 'loss';
    }

    //update score
    scores[results]++
    render()
}
// console.log(Spinning());


function grabOne() {
let random = Math.floor(Math.random()* 3);
let grab = ['seven', 'cherry', 'lemon'];
return grab[random];
}
grabOne();





// event listeners
// render
// initialize 
// initialize ()
// render ();