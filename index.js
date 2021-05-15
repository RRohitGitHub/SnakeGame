const grid = document.querySelector(".grid")
const startButton = document.querySelector("#button")
const score = document.getElementById("score")
let squares=[]
let currentSnake=[2,1,0];


function createGrids(){

    //create 100 of these elements with for loop
    for(let i=0;i<100;i++){
    //create elements
    const square = document.createElement("div")
    console.log(square);
    //add styling to these elements
    square.classList.add('square')
    // Put the elements in grid
    grid.appendChild(square)
    //put the element onto grid and push into new squares array
    squares.push(square);    
    }
}

createGrids();

currentSnake.forEach(index=>squares[index].classList.add("snake"))

function move(){
    // remove the last element
    const tail = currentSnake.pop();
    console.log(tail);
    console.log(currentSnake);
    // remove styling from the last element
    squares[tail].classList.remove("snake");
    // add square to the begining and also add the styling
}

move()