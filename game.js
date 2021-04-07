const grid = document.querySelector('.grid');
const showScore = document.getElementById('score');
const width = 28; 
let score = 0;

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 3, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 3, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
squares = [];

// legend
// 0 pac-dots
// 1 wall
// 2 ghost-lair
// 3 power-pill
// 4 empty
function drawBoard(){
    for (let i = 0; i < layout.length; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
    
        if (layout[i] === 0){
            squares[i].classList.add('pac-dot');
        }else if (layout[i] === 1) {
            squares[i].classList.add('wall');
        }else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair');
        }else if (layout[i] === 3) {
            squares[i].classList.add('power-pill');
        }else if (layout[i] === 5) {
            squares[i].classList.add('pac-man')
        }
    }
}
drawBoard()

let currentIndex = 459;
squares[currentIndex].classList.add('pac-man');
console.log(currentIndex % width !== 0, !squares[currentIndex - 1].classList.contains('ghost-lair'),
!squares[currentIndex - 1].classList.contains('wall'))
function movePacman(event) {
    //console.log(event)

    squares[currentIndex].classList.remove('pac-man');
    switch(event.keyCode) {
        // LEFT
      case 37:
        if(currentIndex % width !== 0 &&
        !squares[currentIndex - 1].classList.contains('ghost-lair') &&
        !squares[currentIndex - 1].classList.contains('wall'))
        currentIndex --;

        if (squares[currentIndex -1] === squares[363]) currentIndex = 391;
        break;
    
        // UP
      case 38:
        if(currentIndex - width >= 0 &&
        !squares[currentIndex - width].classList.contains('ghost-lair') &&
        !squares[currentIndex - width].classList.contains('wall')) 
        currentIndex -= width;
        break;
        // RIGHT
      case 39:
        if(currentIndex % width < width - 1 &&
        !squares[currentIndex +1 ].classList.contains('ghost-lair') &&
        !squares[currentIndex +1 ].classList.contains('wall'))
        currentIndex ++;
        if (squares[currentIndex +1] === squares[392]) currentIndex = 364;
        break;
        // DOWN
      case 40:
        if (currentIndex + width < width * width &&
        !squares[currentIndex - width].classList.contains('ghost-lair') &&
        !squares[currentIndex - width].classList.contains('wall'))
        currentIndex += width;
        break;
    }
    squares[currentIndex].classList.add('pac-man')
    eatPacDot();
    eatPowerPill();
    // checkGameOver()
    // checkWin()
  }
document.addEventListener('keyup', movePacman)

function eatPacDot() {
    if (squares[currentIndex].classList.contains('pac-dot')) {
        score++;
        showScore.innerHTML = score;
        squares[currentIndex].classList.remove('pac-dot')
    }
}

function eatPowerPill() {
    if (squares[currentIndex].classList.contains('power-pill')) {
        score += 10;
        showScore.innerHTML = score;
        squares[currentIndex].classList.remove('power-pill');
        ghosts.forEach(ghost => ghost.panicMode = true)
        setTimeout(panicModeOff, 10000)
    }
}

// // panicMode for ghosts
// // panicModeOff for ghosts

class Ghost {
    constructor(name, index, speed){
        this.name = name;
        this.index = index;
        this.speed = speed;
        this.panicMode = false;
        this.currentIndex = index;
    }
}

const ghosts = [
    new Ghost('clyde', 408, 500),
    new Ghost('pinky', 352, 400),
    new Ghost('blinky', 347, 300),
    new Ghost('inky', 403, 200),
]

ghosts.forEach(ghost => {
    squares[ghost.index].classList.add(ghost.name);
    squares[ghost.index].classList.add('ghost');
    })

function panicModeOff() {
    ghosts.forEach(ghost => ghost.panicMode = false);
}
// function panicMode(){
//     squares[ghost.currentIndex].classList.add('ghost-panic');
// }

function checkGameOver() {
    if (squares[currentIndex].classList.contains('ghost') &&
        !squares[currentIndex].classList.contains('ghost-panic')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        document.removeEventListener('keyup', movePacman);
        setTimeout(function(){ alert("Game Over"); }, 500);
        }
}