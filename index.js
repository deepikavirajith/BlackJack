let status = document.getElementById("status");
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let selector = [];
let total = 0
let isAlive = false;
let hasBlackJack = false;
let person = {
    name: "Peter",
    points: 300
}



function getRandomCard(){
let randomNumber = Math.floor(Math.random() * 13) + 1;
if(randomNumber > 10){
return 10;
}else if (randomNumber === 11){
return 11;
}else {
return randomNumber;
}
}

function startGame(){
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
 selector = [firstCard, secondCard];
total = firstCard + secondCard;
renderGame();
}

function renderGame(){
let per = document.getElementById("per");
per.textContent = person.name + ": $" + person.points;
cards.textContent = "Cards: "
for(let i= 0; i < selector.length; i++){
cards.textContent += `${selector[i]} `;
}
sum.textContent = `Sum: ${total}`;
if(total < 21){
status.textContent = " Draw a new card."
} else if(total === 21){
status.textContent = "You got BalckJack!";
hasBlackJack = true;
}else{
status.textContent = "OOP's you are out of game.";
isAlive = false;
}
}

function newCard(){
if(isAlive === true && hasBlackJack === false){
console.log("clicked");
let new_card = getRandomCard();
total += new_card;
selector.push(new_card);
renderGame();
}
}

