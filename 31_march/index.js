console.log("im here")

let para = document.querySelector('p')
console.log(para);

para.addEventListener('click', () => {
    let name = prompt("ENTER YOUR NAME")
    para.textContent = 'IM '+name
})


// Guessing Game
console.log("we are in guessing game");

let randomNumber = Math.floor(Math.random() * 100) +1;
console.log(randomNumber)
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1
let resetButton;

guessSubmit.addEventListener("click", checkGuess)


function resetGame(){
    guessCount = 1;

    const resultParams = document.querySelectorAll(".resultParas p");
    console.log(resultParams);
    resultParams.forEach(resultParam =>{
        resultParam.textContent = ""

    })

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false
    guessSubmit.disabled = false

    guessField.value = ""
    guessField.focus()

    lastResult.style.backgroundColor = 'white'

    randomNumber = Math.floor(Math.random()*100+1);
    console.log(randomNumber)

}

function setGameOver() {
    guessSubmit.disabled = true
    guessField.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'start new game'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
}



function checkGuess(){
    let userGuess = guessField.value;
    if (guessCount === 1){
        guesses.textContent = 'Previous Guess..'
    }
    guesses.textContent += userGuess + " ";

    if (userGuess == randomNumber){
        lastResult.textContent = "Congratulation";
        lastResult.style.backgroundColor = 'green';
        loworHi.textContent = ''

        setGameOver()
        
    }

    else if (userGuess == 10){
        lastResult.textContent = 'Game Over'
        
        setGameOver();
    }
    
    else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = 'red';
        
        if (userGuess < randomNumber){
            loworHi.textContent = "Last guess was too low!"
        }
        else if(userGuess > randomNumber){
            loworHi.textContent = 'Last guess was too high!'
        }
        
    }

guessCount++;
guessField.value = '';
guessField.focus()

}















