
let totalAttempts = 5;
let totalWons = 0;
let totalLosts = 0;
let attempts = 0;

const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const cardBody = document.querySelector(".card-body")
const resultText = document.querySelector(".resultText");
const remainingAttempts = document.querySelector(".remainingAttempts")
const lostWonMessage = document.createElement("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    attempts++;
    if(attempts === 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts : ${totalAttempts - attempts}`;
        lostWonMessage.innerHTML = `Total wons : ${totalWons} Total losts : ${totalLosts}`;
        lostWonMessage.classList.add("large-text");
        cardBody.appendChild(lostWonMessage);
    };
    guessingNumber.value = "";
});


const checkResult = (guessNumber) => {
    let randomNumber = getRandomNumber(5);

    if(guessNumber === randomNumber){
        resultText.innerHTML = `You have won`;
        totalWons++;
    }else{
        resultText.innerHTML = `You have lost, random number was : ${randomNumber}`;
        totalLosts++;
    }
}


const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}