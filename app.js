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

var checkWinLine = function(index1,index2,index3, cellPlayer){
    if( (cellList[index1].classList.contains(cellPlayer))&&
        (cellList[index2].classList.contains(cellPlayer))&&
        (cellList[index3].classList.contains(cellPlayer))  )
    {
        return true;
    }
    else
    {
        return false;
    }
}

var checkWinCondition = function(cellPlayer){
    if(checkWinLine(0,1,2,cellPlayer)){
        return true;
    }
    else if(checkWinLine(3,4,5,cellPlayer)){
        return true;
    }
    else if(checkWinLine(6,7,8,cellPlayer)){
        return true;
    }
    else if(checkWinLine(0,3,6,cellPlayer)){
        return true;
    }
    else if(checkWinLine(1,4,7,cellPlayer)){
        return true;
    }
    else if(checkWinLine(2,5,8,cellPlayer)){
        return true;
    }
    else if(checkWinLine(0,4,8,cellPlayer)){
        return true;
    }
    else if(checkWinLine(2,4,6,cellPlayer)){
        return true;
    }
    else{
        return false;
    }
}