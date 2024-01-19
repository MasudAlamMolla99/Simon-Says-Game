let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "purple", "green"];
let h2 = document.querySelector("h2");
let highScore = [];
let highScr = 0;
// let userColor;


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randIdx];
    // console.log(randomColor);
    // console.log(randIdx);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    let randBtn = document.querySelector(`.${randomColor}`);

    //random button chose
    gameFlash(randBtn);
}
function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }


    }
    else {
        highScore.push(level);

        for (let i = 0; i < highScore.length; i++) {
            if (level > highScore[i]) {
                highScr = level;

            }
            else {
                highScr = highScore[i];
            }
        }

        h2.innerHTML = `Gameover ! Your score was <b>${level}</b> <br> Your highest score was ${highScr} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150)
        reset();
    }
}
function btnPress() {
    let btn = this;
    // console.log(this)
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userFlash.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}