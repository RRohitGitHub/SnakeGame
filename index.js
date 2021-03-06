const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const scoreDisplay = document.getElementById("score")
let squares=[]
let currentSnake=[2,1,0];
let direction = 1;
const width=10;
let appleIndex=0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId=0;
let flag = false;

function createGrids(){

    //create 100 of these elements with for loop
    for(let i=0;i<width*width;i++){
    //create elements
    const square = document.createElement("div")
    // console.log(square);
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


function startGame(){
    console.log("Current Snake while entering after alert");
    console.log(currentSnake);
    //Remove the snake
    currentSnake.forEach(index=>squares[index].classList.remove("snake"));
    
    // Remove the apple
    squares[appleIndex].classList.remove("apple");
    clearInterval(timerId);
    currentSnake=[2,1,0];
    direction = 1;
    score = 0;
    scoreDisplay.textContent=score;
    intervalTime = 1000;
    // Generate Apple
    generateApple()
    // Readd the class of snake for our new current Snake
    currentSnake.forEach(index=>squares[index].classList.add("snake"))
    timerId = setInterval(move,intervalTime);

}

function move(){
    if(
        (currentSnake[0]+width >=width*width && direction === width) ||//if snake has hit bottom
        (currentSnake[0]+width ===width-1 && direction === 1) || //Snake has hit right wall
        (currentSnake[0]+width ===0 && direction === -1) || //Snake has hit left wall
        (currentSnake[0]-width < 0  && direction === -width) || //Snake has hit top wall
        squares[currentSnake[0] + direction].classList.contains("snake")
    )
    
    {
        clearInterval(timerId);
        flag = confirm("Press OK to restart and cancel to close!")
        startGame();
    } 

    // remove the last element
    const tail = currentSnake.pop();
    // remove styling from the last element
    squares[tail].classList.remove("snake");
    // add square to the begining 
    currentSnake.unshift(currentSnake[0]+direction);
    
    if(squares[currentSnake[0]].classList.contains("apple")){
        //snake head collides with apple, remove class of apple and add class of snake
        squares[currentSnake[0]].classList.remove("apple")
        console.log("removed")
        console.log(currentSnake)
        // grow our snake by adding class of snake
        squares[tail].classList.add("snake");
        currentSnake.push(tail)
        //generate a new apple
        generateApple();
        //Add one to the score
        score+=5;
        scoreDisplay.textContent=score;
        // speed up our snake
        clearInterval(timerId)
        intervalTime = intervalTime*speed;
        timerId = setInterval(move,intervalTime);
    }
    console.log(currentSnake)

     //add the styling
    squares[currentSnake[0]].classList.add("snake");
}

function generateApple(){
    do{
        appleIndex= Math.floor(Math.random() * squares.length)
    }while(squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple");
}

generateApple()

//39 is right arrow
//38 is up arrow
//37 is left arrow
//40 is down arrow

function control(e){
    if(e.key == 'ArrowRight'){
        console.log("Move snake right")
        direction = 1;
    }else if(e.key == 'ArrowUp'){
        console.log("Move snake up")
        direction = -width;
    }else if(e.key == 'ArrowLeft'){
        console.log("Move snake left")
        direction = -1;
    }else if(e.key === 'ArrowDown'){
        console.log("Move snake down")
        direction = +width;
    }
}

// keyup - event is fired when pressed key is release
// keydown - event is fired when key is pressed

startButton.addEventListener("click",startGame);
document.addEventListener("keyup",control);