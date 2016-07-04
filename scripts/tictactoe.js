var player1 = "X";
var player2 = "Y";
var playerTurn = 0;
var displayArr = [];
var gridClass = []
var gameEnd;
var gridId;
var gridValue = 0;

winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
console.log("Initial display array " + displayArr);
gridClass = document.getElementsByClassName("all-squares");
gridClass.innerHTML = "";
for (var i = 0; i < gridClass.length; i++) {
  console.log("Calling event listener " + i);
  gridClass[i].addEventListener("click", function(e) {
    checkSym(e.target.id);
  });
}

resetBtn = document.getElementById("clear-btn");
resetBtn.addEventListener("click", function() {
  location.reload(true);
});

function checkSym(id) {
  if (playerTurn < 9) {
    console.log("The id is " + id);

    gridId = document.getElementById(id);
    // var gridValue = 0;

    console.log("The value of gridId is " + id);
    if (playerTurn % 2 == 0 && gridId.innerHTML == "") {
      console.log("gridId.innerHTML" + gridId.innerHTML);
      // gridId.innerHTML = "X";
      gridId.innerHTML = ('<img src="./images/x1.png" alt="crosses">');
      // redSquare=document.createElement("div");
      // redSquare.className="all-squares";
      // redSquare.className="redsquare";
      // gridId.appendChild(redSquare);
      console.log("gridId.innerHTML " + gridId.innerHTML);


      gridValue = "X";
      changeSym(gridId);
      document.getElementById("header").innerHTML = "It\'s O\'s turn";
      console.log("Display Array " + displayArr);
      playerTurn++;

    } else if (gridId.innerHTML == "") {
      console.log("Entering else if" + gridId.innerHTML);
      console.log("gridId.innerHTML" + gridId.innerHTML);
      // gridId.innerHTML = "O";
      gridId.innerHTML = ('<img src="./images/circle1.png" alt="crosses">');
      // gridId.className="bluesquare";
      console.log("gridId.innerHTML " + gridId.innerHTML);

      console.log("Value of h1 " + document.getElementById("header").innerHTML);
      gridValue = "O";
      changeSym(gridId);
      document.getElementById("header").innerHTML = "It\'s X\'s turn";
      console.log("Display Array " + displayArr);
      playerTurn++;
    }
    if (playerTurn == 9) {
      console.log(displayArr);
      //  gameEnd = checkWinner();
      //  console.log("gameEnd" + gameEnd);
      alert("Game Over! It's a DRAW");
      playAgain();
    }

    // } else {
    //   // if (playerTurn == 9) {
    //   //   console.log(displayArr);
    //   //   //  gameEnd = checkWinner();
    //   //   //  console.log("gameEnd" + gameEnd);
    //   //   alert("Game Over! It's a DRAW");
    //   //   location.reload(true);
    //   // }
    //
    //
    //
    //   // location.reload();
  }
}

function changeSym(gridId) {

  switch (gridId) {
    case square1:
      displayArr[0] = gridValue;
      console.log("gridValue " + gridValue);
      console.log("DisplayArr[0] " + displayArr);
      // gridClass[0]=gridValue;
      // console.log("gridClass[0] " + gridClass);
      checkWinner(gridValue);
      break;
    case square2:
      displayArr[1] = gridValue;
      console.log("DisplayArr[1] " + displayArr);
      // gridClass[1]=gridValue;
      // console.log("gridClass[1] " + gridClass);
      checkWinner(gridValue);
      break;
    case square3:
      displayArr[2] = gridValue;
      console.log("DisplayArr[2] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square4:
      displayArr[3] = gridValue;
      console.log("DisplayArr[3] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square5:
      displayArr[4] = gridValue;
      console.log("DisplayArr[4] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square6:
      displayArr[5] = gridValue;
      console.log("DisplayArr[5] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square7:
      displayArr[6] = gridValue;
      console.log("DisplayArr[6] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square8:
      displayArr[7] = gridValue;
      console.log("DisplayArr[7] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    case square9:
      displayArr[8] = gridValue;
      console.log("DisplayArr[8] " + displayArr);
      checkWinner(gridValue);
      // checkWinner();
      break;
    default:
      break;
  }

}



function checkWinner(playerSym) {

  for (var a = 0; a < winCombinations.length; a++) {
    if (displayArr[winCombinations[a][0]] == playerSym && displayArr[winCombinations[a][1]] == playerSym && displayArr[winCombinations[a][2]] == playerSym) {
      alert(playerSym + " WON!");
      playAgain();
    }
  }
}




function playAgain() {

  y = confirm("Play Again?");
  if (y == true) {
    location.reload();
  } else {
    alert("OK");
    alert("Bye");
  }


}
