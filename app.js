/*
Programming Exercise

You have 60 minutes to complete and return this test. Evaluation criteria is
Correctness
Coding style
Speed
The final result should consist of source code in the language of your choice and the log print-outs explained later.
You may use whatever on-/offline material you wish.
Good luck and have fun!
  Create a deck of cards

Design data structures for representing a standard deck of cards.
  Implement code which creates a sorted deck of 52 cards in following order: Numerically smallest numbers first with suits
  in following order: Hearts, Diamonds, Clubs and Spades. Aces shall be treated with numeric value of 1, Up to kings with value of 13.
Example sorting order:
  Ace of Hearts, Ace of Diamonds, Ace of Clubs, Ace of Spades, Two of Hearts, ... King of Spades.
  Print out the deck and provide the log and the source code as the result.
  Implement search-algorithm.

  Write a search algorithm for finding the position (index) of any card from the sorted deck in an optimal manner
  (least amount of comparisons). Prove your answer by printing out the index of following cards: Ace of Spades, Seven of Spades,
  Eight of Hearts, Queen of Diamonds.
  Hint: Consider a recursive algorithm.
  Provide the log and the source code as the result. Both files and a link to a repository are acceptable.
*/

function binaryFind(value, type) {
    let minIndex = 0;
    let maxIndex = this.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement.type === type) {
            if (currentElement.value < value) {
                minIndex = currentIndex + 1;
            } else if (currentElement.value > value) {
                maxIndex = currentIndex - 1;
            } else {
                return { // Modification
                    found: true,
                    index: currentIndex
                };
            }
        } else {
            minIndex++;
        }
    }

    return { // Modification
        found: false,
        index: currentElement.value < value ? currentIndex + 1 : currentIndex
    };
}

Array.prototype.binaryFind = binaryFind;

let cardDeck = getCardDeck();

console.log('cards deck:');

cardDeck.forEach((card, index) => {
    console.log(`Index: ${index} - ${JSON.stringify(card)}`);
});

console.log('########################################################################################################');

// Ace of Spades, Seven of Spades, Eight of Hearts, Queen of Diamonds.
const valuesToSearch = [
    {value: 1, type: 'Spades'},
    {value: 7, type: 'Spades'},
    {value: 8, type: 'Hearts'},
    {value: 12, type: 'Diamonds'},
];

valuesToSearch.forEach(valueToSearch => {
    let position = cardDeck.binaryFind(valueToSearch.value, valueToSearch.type);
    console.log(position);
    console.log(`===> ${valueToSearch.value} ${valueToSearch.type}, Index: ${position.index}`);
});

console.log('********************************************************************************************************');

function getCardDeck() {
    const types = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const cardDeck = [];

    types.forEach(type => {
        for (let i = 1; i <= 13; i++) {
            cardDeck.push(
                {
                    value: i,
                    type: type
                }
            )
        }
    });

    return cardDeck;
}
