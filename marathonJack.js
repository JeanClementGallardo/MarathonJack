var dealerCardNb = 0;
var yourCardNb = 0;

var cardList = [...Array(53).keys()];
var pickedCard = [];  //Carte deja tirees



function pickCard(cardList,pickedCard){
  var rand = Math.floor(Math.random() * (53 - 0 + 1)) + 0;
  while (pickedCard.includes(rand)){ // si la carte a deja ete tiree
    rand = Math.floor(Math.random() * (53 - 0 + 1)) + 0; //une autre carte est choisie
  }
  pickedCard.push(rand); // on ajoute la carte tiree au carte deja tiree
  console.log(rand);
}

function displayCard(cardValue,imageID){

  str = cardValue.toString().concatenate(.BMP)
  imageID.src = images[x];
}
