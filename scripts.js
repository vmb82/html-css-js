// your javascript file
const container = document.querySelector('#container');

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

function alertFunction() {
    console.log("Helo");
}

function modButton(e) {
    e.target.style.background = "red";
}

const btn1 = document.querySelector('#btn1')


btn1.addEventListener('click', modButton);

/*btn1.addEventListener('click', function(e) {

    e.target.style.background = 'blue';
});*/

btn1.addEventListener('click', alertFunction)



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
        console.log("It is a draw, both chose " + humanChoice)
        return
    }

    if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            console.log("You lose! Paper beats Rock")
        } else {
            console.log("You Win! Rock beats Scissors")
        }
        return
    }

    if (humanChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            console.log("You lose! Scissors beats Paper")
        } else {
            console.log("You Win! Paper beats Rock")
        }
        return
    }

    if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            console.log("You lose! Rock beats Scissors")
        } else {
            console.log("You Win! Scissors beats Paper")
        }
        return
    }
}

let computerChoice = computerPlay()

console.log(computerChoice)

let humanChoice = "default"

do {
    humanChoice = prompt("Enter your choice for Rock Paper Scissors").toUpperCase()

    if (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
        alert("Invalid Choice")
    }
} while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS")

console.log(humanChoice)

let cars = ["mazda", "bmw"]

playRound(humanChoice, computerChoice)