window.addEventListener("load", bindEvents);

var flag = true;
let buttons;
let count = 0;
let isOver = false;

function bindEvents() {

    buttons = document.getElementsByTagName('button');

    for (let button of buttons) {

        button.addEventListener("click", printXor0);
    }
}

const isNotBlank = (currentButton) => currentButton.innerText.length === 1;
const isSame = (one, two, three) => one.innerText === two.innerText && two.innerText === three.innerText;
const isSameRow = (one, two, three) => isNotBlank(one) && isNotBlank(two) && isNotBlank(three) && isSame(one, two, three);

function isGameOver() {

    let isOver = false;

    if (isSameRow(buttons[0], buttons[1], buttons[2]))
        isOver = true;

    else if (isSameRow(buttons[3], buttons[4], buttons[5]))
        isOver = true;

    else if (isSameRow(buttons[6], buttons[7], buttons[8]))
        isOver = true;

    else if (isSameRow(buttons[0], buttons[3], buttons[6]))
        isOver = true;

    else if (isSameRow(buttons[1], buttons[4], buttons[7]))
        isOver = true;

    else if (isSameRow(buttons[2], buttons[5], buttons[8]))
        isOver = true;

    else if (isSameRow(buttons[0], buttons[4], buttons[8]))
        isOver = true;

    else if (isSameRow(buttons[2], buttons[4], buttons[6]))
        isOver = true;

    else if (isSameRow(buttons[0], buttons[1], buttons[2]))
        isOver = true;

    return isOver;
}

function printXor0() {

    if (this.innerText.length === 0 && !isOver) {

        label = flag === true ? "X" : "0";
        this.innerText = label;
        count++;

        flag = !flag;
    }

    if (count >= 5) {

        isOver = isGameOver();

        if (isOver) {

            flag = !flag;
            let winner = flag ? "X" : "0";

            document.getElementById('result').innerText = `Game Over ${winner} wins!`;

            setTimeout(() => {

                resetGame();

            }, 3000);
        }

    }
}

function resetGame() {

    isOver = false;
    document.getElementById('result').innerText = "";

    for (let button of buttons)
        button.innerText = "";
}