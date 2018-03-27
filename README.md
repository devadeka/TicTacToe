# TicTacToe
TicTacToe Game

Pseudocode:

index.html
    - body
        - h1 : App Heading
        - div : Game Board
            - div : Game Cells
        - div : turn
            - p : player turn message


app.js
    - instantiate board with blank icon character
    - initiate player
    - define win condition function
        - change player turn message to who wins
    - create variables from document query
        - list of game cells
        - player indication
    - loop through add click listener
        - change div background image
        - each click, run win condition function
        - each click, toggle player