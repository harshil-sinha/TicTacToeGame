let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');


let turn = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = 'O';
            turn = false;
        }
        else {
            box.innerText = 'X';
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = () =>{
    turn = true;
    enabledBoxes();
    msg_container.classList.add('hide');

}
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} `;
    msg_container.classList.remove('hide');
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }

}

newGamebtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);