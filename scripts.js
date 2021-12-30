// your javascript file
const container = document.querySelector('#container');

/*
const content = document.createElement('div');
content.classList.add('nameX');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!!"
para.style.color = "red"
container.appendChild(para);

const div = document.createElement('div')
div.style.border.color = "black"
div.style.background = "pink"

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"

const p = document.createElement('p')
p.textContent = "I'm in a div too"

div.appendChild(h1)
div.appendChild(p)
container.appendChild(div)
*/

const w = document.querySelector('#winner');

const newh1 = document.createElement('h1')
newh1.textContent = "Winner"
w.appendChild(newh1)

const newp = document.createElement('p')
w.appendChild(newp)

const newp1 = document.createElement('p')
w.appendChild(newp1)

const p = document.querySelector('#player');
const ptext = document.createElement('p')
p.appendChild(ptext)

const c = document.querySelector('#computer');
const ctext = document.createElement('p')
c.appendChild(ctext)

let pscore = 0;
let cscore = 0;

ctext.textContent = `Computer Score is ${cscore}`
ptext.textContent = `Player Score is ${pscore}`


function alertFunction(e) {


    let humanChoice = e.target.textContent;

    let computerChoice = computerPlay();


    humanChoice = humanChoice.toUpperCase();

    newp.textContent = `Player Choice is ${humanChoice} and Computer Choice is ${computerChoice}`

    playRound(humanChoice, computerChoice)


    ctext.textContent = `Computer Score is ${cscore}`
    ptext.textContent = `Player Score is ${pscore}`
}



function modButton(e) {
    e.target.style.background = "red";
}


/*btn1.addEventListener('click', function(e) {

    e.target.style.background = 'blue';
});*/

/*
const btn1 = document.querySelector('#btn1')


btn1.addEventListener('click', modButton);


btn1.addEventListener('click', alertFunction)
*/

const btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.addEventListener('click', alertFunction)
});


function computerPlay() {
    let i = Math.random()
    console.log(i)

    if (i < 0.35) {
        return "ROCK"
    } else if (i < 0.7) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        newp1.textContent = `It is a draw, both chose ${humanChoice}`
        return
    }

    if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            newp1.textContent = "You lose! Paper beats Rock"
            cscore++
        } else {
            newp1.textContent = "You Win! Rock beats Scissors"
            pscore++
        }
        return
    }

    if (humanChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            newp1.textContent = "You lose! Scissors beats Paper"
            cscore++
        } else {
            newp1.textContent = "You Win! Paper beats Rock"
            pscore++
        }
        return
    }

    if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            newp1.textContent = "You lose! Rock beats Scissors"
            cscore++
        } else {
            newp1.textContent = "You Win! Scissors beats Paper"
            pscore++
        }
        return
    }
}


/*
do {
    humanChoice = prompt("Enter your choice for Rock Paper Scissors").toUpperCase()

    if (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
        alert("Invalid Choice")
    }
} while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS")
*/

let cars = ["mazda", "bmw"]