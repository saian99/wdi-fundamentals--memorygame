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
function flipCard() {
	if (this.getAttribute('src') == 'card-deck-css/images/backs/red.svg') {
		let cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		ranksInPlay.push(cards[cardId].rank);
		suitesInPlay.push(cards[cardId].suit);
		console.log(cards[cardId].rank + " of " + cards[cardId].suit + " was chosen----");
		checkForMatch();

	}
}


function createBoard() {
	for (let i = 0; i < cards.length; i++){
		const cardElement = document.
		createElement("img")
		cardElement.setAttribute('src', "images,back.png")
		cardElement.setAttribute('data-id', [i])
		cardElement.addEventlistener('click',
			flipCard())
		cardElement.appendChild('game-board')
	};
};
createBoard();

