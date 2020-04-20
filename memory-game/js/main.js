const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = []
function checkForMatch() {
	if (cardsInPlay[0]===cardsInPlay[1]){
		console.log("You found a match!");
	}
	else if (cardsInPlay[0]!==cardsInPlay[1]) {
		alert("sorry, try again");
	}
}
function flipCard(cardId) {
console.log("user flipped" + cards[cardId].rank)
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {checkForMatch()}
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);


