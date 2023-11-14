let head = document.getElementById('head');
let head2 = document.getElementById('head2');
let imgRef = document.getElementById('imgRef')
let currentPlayer = 'X';  //start with x
let gameBoard = [];

    // function to add X O in boxes 
    function play(selectedBox) {
        let box = selectedBox.target;
        let index = box.id;
        if (!box.innerHTML && head.innerHTML != "Game Over!" ) {
            box.innerHTML = currentPlayer;
            gameBoard[index] = currentPlayer;
            // toggle player

            if (checkForWin()) {
                head.innerHTML = `Game Over!`
                setTimeout(function(){
                    location.reload();
                },3000)
            }
    
            if(currentPlayer == 'X'){
                currentPlayer = 'O';
            }
            else {
                currentPlayer = 'X';
            }
        }
    }

// add function to boxes 
let boxes = document.querySelectorAll('.box');

for (let i = 0 ; i < boxes.length; i++){
    boxes[i].addEventListener(`click`,play);
}

// Win Rows
let winRow = {
    "r1" : [0, 1, 2],
    "r2" : [3, 4, 5], 
    "r3": [6, 7, 8]
} 
// Win Columns
let winCol = {
    "c1" : [0, 3, 6],
    "c2" : [1, 4, 7], 
    "c3": [2, 5, 8]
} 
// Diagonals
let winDia = {
    "d1" :[0, 4, 8],
    "d2" :[2, 4, 6] , 
} 

function checkForWin() {
    // Check rows
    for (let row in winRow) {
        if (
            gameBoard[winRow[row][0]] === gameBoard[winRow[row][1]] &&
            gameBoard[winRow[row][1]] === gameBoard[winRow[row][2]] &&
            gameBoard[winRow[row][0]] !== undefined
        ) {
            head2.style.display ="block";
            head2.innerHTML = (`Player ${gameBoard[winRow[row][0]]} wins!`);
            return true;
        }
    }

    // Check columns
    for (let col in winCol) {
        if (
            gameBoard[winCol[col][0]] === gameBoard[winCol[col][1]] &&
            gameBoard[winCol[col][1]] === gameBoard[winCol[col][2]] &&
            gameBoard[winCol[col][0]] !== undefined
        ) {
            head2.style.display ="block";
            head2.innerHTML =(`Player ${gameBoard[winCol[col][0]]} wins!`);
            return true;
        }
    }

    // Check diagonals
    for (let dia in winDia) {
        if (
            gameBoard[winDia[dia][0]] === gameBoard[winDia[dia][1]] &&
            gameBoard[winDia[dia][1]] === gameBoard[winDia[dia][2]] &&
            gameBoard[winDia[dia][0]] !== undefined
        ) {
            head2.style.display ="block";
            head2.innerHTML = (`Player ${gameBoard[winDia[dia][0]]} wins!`);
            return true;
        }
    }

    return false; // No winner yet
}
if (!head2.innerHTML) {
    head2.style.display ="none";
}


imgRef.addEventListener('click', function(){
    location.reload();
})