const grid = document.querySelector(".grid")
const startButton = document.querySelector("#button")
const score = document.getElementById("score")
let squares=[]
let currentSnake=[2,1,0];
let direction = 1;


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
    // remove styling from the last element
    squares[tail].classList.remove("snake");
    // add square to the begining 
    currentSnake.unshift(currentSnake[0]+direction);
     //add the styling
    squares[currentSnake[0]].classList.add("snake");
}
move()

let timerId = setInterval(move,1000);

//39 is right arrow
//38 is up arrow
//37 is left arrow
//40 is down arrow

function control(e){
    if(e.key == 'ArrowRight'){
        console.log("Move snake right")
    }else if(e.key == 'ArrowUp'){
        console.log("Move snake up")
    }else if(e.key == 'ArrowLeft'){
        console.log("Move snake left")
    }else if(e.key === 'ArrowDown'){
        console.log("Move snake down")
    }
}

// document.addEventListener("keyup",control);