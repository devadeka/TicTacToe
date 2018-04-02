// generate list of board cells
var cellList = document.querySelectorAll('.cell');
var paraTurnDisplay = document.querySelector('.turn-display');
var divOIndicator = document.querySelector('.o-indicator');
var divXIndicator = document.querySelector('.x-indicator');
var divGameBoard = document.querySelector('.game-board');
var btnNewGame = document.querySelector('.new-game');

// tracker for who's turn it is
var player = 0;
var gameWinState = false;
var placeCount = 0;

// set states for cell
var cellState = ['cell-player1','cell-player2','cell-empty'];
var playerIndication = ['O','X'];

// logic for clicking each cell in board
cellList.forEach(function(element){
    element.addEventListener('click',function(event){

        // apply logic if cell is empty and game has not been won
        if(event.target.classList.contains(cellState[2]) && (gameWinState === false)){

            // remove cell-empty class and apply class based on player turn
            event.target.classList.remove(cellState[2]);
            event.target.classList.add(cellState[player]);
            event.target.classList.add('animated');
            event.target.classList.add('fadeIn');

            var gameWinSituation = checkWinCondition(cellState[player])
            gameWinState = gameWinSituation[0];
            var gameWinCombination = gameWinSituation[1];
            placeCount += 1;

            if(gameWinState){
                // paraTurnDisplay.textContent = `Player ${playerIndication[player]} WINS!!`;
                showWinningCells(gameWinCombination);
            }
            else{
                //toggle player turn
                player = player^1;
                togglePlayer();

                if(placeCount === 9){
                    divGameBoard.classList.add('shake');
                    divGameBoard.classList.add('animated');
                }
            }
        }
    });
});

btnNewGame.addEventListener('click',function(){
    resetGame();
});

// function to toggle and indicate player turn
var togglePlayer = function(){
    if(divOIndicator.classList.contains('turn-selected')){
        divOIndicator.classList.remove('turn-selected');
        divOIndicator.classList.add('turn-unselected');
        divXIndicator.classList.remove('turn-unselected');
        divXIndicator.classList.add('turn-selected');
    }else if(divXIndicator.classList.contains('turn-selected')){
        divXIndicator.classList.remove('turn-selected');
        divXIndicator.classList.add('turn-unselected');
        divOIndicator.classList.remove('turn-unselected');
        divOIndicator.classList.add('turn-selected');
    }
    else{}
};

// function to animate winning combination
var showWinningCells = function(winningCombination){
    winningCombination.forEach(function(cell){
        cellList[cell].classList.remove('animated');
        cellList[cell].classList.remove('fadeIn');
        cellList[cell].classList.add('animated');
        cellList[cell].classList.add('flash');
    });
};

// function to check if three cells are the same
var checkWinLine = function(comb, cellPlayer){
    if( (cellList[comb[0]].classList.contains(cellPlayer))&&
        (cellList[comb[1]].classList.contains(cellPlayer))&&
        (cellList[comb[2]].classList.contains(cellPlayer))  )
    {
        return true;
    }
    else
    {
        return false;
    }
};

//checks if the board has a win condition
var checkWinCondition = function(cellPlayer){

    //combinations of cells that lead to a win
    var winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(var i = 0; i < winCombinations.length; i++){
        if(checkWinLine(winCombinations[i],cellPlayer)){
            return [true,winCombinations[i]];
        }
    }
    
    return [false,[]];
}

var resetGame = function(){
    cellList.forEach(function(cell){
        cell.classList = [];
        cell.classList.add("cell");
        cell.classList.add("cell-empty");
    });
    player = 0;
    gameWinState = false;
    placeCount = 0;
    divXIndicator.classList.remove('turn-selected');
    divXIndicator.classList.add('turn-unselected');
    divOIndicator.classList.remove('turn-unselected');
    divOIndicator.classList.add('turn-selected');
}