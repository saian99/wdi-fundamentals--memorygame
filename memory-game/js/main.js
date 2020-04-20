const cards = ['queen', 'queen', 'king', 'king']

const cardsInPlay = []
const cardOne = cards[0]
cardsInPlay.push(cardOne);
console.log(cardOne)

const cardTwo = cards[2]
cardsInPlay.push(cardTwo);
console.log(cardTwo)

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}
	else if (cardsInPlay[0]!==cardsInPlay[1]) {
		alert("sorry, try again");
	}
}

