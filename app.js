var board = []
var cellList = document.querySelectorAll('.cell');
//Load 

var player = 0;
var cellState = ['cell-player1','cell-player2','cell-empty'];

cellList.forEach(function(element){
    element.addEventListener('click',function(event){
        if(event.target.classList.contains(cellState[2])){
            event.target.classList.remove(cellState[2]);
            event.target.classList.add(cellState[player]);
            player = player^1; 
        }
        else{
            console.log(event.target.classList);
        }
    });
});

