
let firstInput = document.querySelector(".FirstInput")
let secondInput = document.querySelector(".SecondInput")
let submit = document.querySelector(".SubmitButton")
let randomNumber = Math.floor(Math.random() * 100) + 10
let trueOrFalse = document.querySelector(".TrueorFalse")
let button
let count = 3
let chancesRemaining = document.querySelector(".chancesRemaining") 
chancesRemaining.textContent = count;
let randomNumberUI = document.querySelector(".randomNumber")

randomNumberUI.textContent = randomNumber

submit.addEventListener('click', ()=>{
    checkGuess();
})

function checkGuess(){
    if (count == 1){
        trueOrFalse.textContent = ""
        gameOver();

    }
    firstValue = Number(firstInput.value)
    secondValue = Number(secondInput.value)
    let sumOfInput = firstValue + secondValue;
    if (sumOfInput == randomNumber){
        trueOrFalse.textContent = "Congrates"
        trueOrFalse.style.backgroundColor = 'green'
        gameOver();
    }
    else{
        trueOrFalse.textContent = "Wrong Guess, try again"
        trueOrFalse.style.backgroundColor = 'red';
        firstInput.value = ""
        firstInput.focus()
        secondInput.value = ""
        count -=1
        chancesRemaining.textContent =  count
    }
}


function gameOver(){
    firstInput.disabled = true;
    secondInput.disabled = true;
    button = document.createElement("button")
    button.textContent = "Start Game Again"
    document.body.append(button)
    button.addEventListener('click', () =>resetGame())
}

function resetGame(){
    chances = 3
    chancesRemaining.textContent = chances
    randomNumber =  Math.floor(Math.random() *100 + 10)
    console.log(randomNumber);
    trueOrFalse.textContent = ""
    trueOrFalse.style.backgroundColor = 'lightblue'
    randomNumberUI.textContent = randomNumber
    firstInput.disabled = false
    secondInput.disabled = false
    firstInput.value = ""
    firstInput.focus()

    secondInput.value = ""
    button.parentNode.removeChild(button)
}