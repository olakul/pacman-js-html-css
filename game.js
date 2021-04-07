const grid = document.querySelector('.grid');
const showScore = document.getElementById('score');
const width = 28; 

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
        }
    }
}
drawBoard()

let currentIndex = 485;
squares[currentIndex].classList.add('pac-man');

function movePacman(event) {
    squares[currentIndex].classList.remove('pac-man');
    switch(event.keyCode) {
      case 37:
        if(currentIndex % width !== 0)
        currentIndex -= 1;
        break;
      case 38:
        if(currentIndex - width >= 0 ) 
        currentIndex -= width;
        break;
      case 39:
        if(currentIndex % width < width - 1)
        currentIndex += 1;
        break;
      case 40:
        if (currentIndex + width < width * width)
        currentIndex += width;
        break;
    }
    squares[currentIndex].classList.add('pac-man')
    // pacDotEaten()
    // powerPillEaten()
    // checkForGameOver()
    // checkForWin()
  }
document.addEventListener('keyup', movePacman)