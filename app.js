// generate list of board cells
var cellList = document.querySelectorAll('.cell');
var paraTurnDisplay = document.querySelector('.turn-display');

// tracker for who's turn it is
var player = 0;
var gameWinState = false;

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

            var gameWinSituation = checkWinCondition(cellState[player])
            gameWinState = gameWinSituation[0];
            var gameWinCombination = gameWinSituation[1];
            
            if(gameWinState){
                paraTurnDisplay.textContent = `Player ${playerIndication[player]} WINS!!`;
                showWinningCells(gameWinCombination);
            }
            else{
                //toggle player turn
                player = player^1;
                
                paraTurnDisplay.textContent = `Player ${playerIndication[player]}'s Turn`;
            }
            
        }
    });
});

var showWinningCells = function(winningCombination){
    winningCombination.forEach(function(cell){
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