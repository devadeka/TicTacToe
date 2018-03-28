var board = []
var cellList = document.querySelectorAll('.cell');

var player = 0;
var cellState = ['cell-player1','cell-player2','cell-empty'];

cellList.forEach(function(element){
    element.addEventListener('click',function(event){
        if(event.target.classList.contains(cellState[2])){
            event.target.classList.remove(cellState[2]);
            event.target.classList.add(cellState[player]);
            console.log(checkWinCondition(cellState[player]));
            player = player^1; 
        }
        else{
            console.log(event.target.classList);
        }
    });
});

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
}

var checkWinCondition = function(cellPlayer){
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
            return true;
        }
    }
    

    return false;
}