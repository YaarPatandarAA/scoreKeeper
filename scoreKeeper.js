var p1btn = document.getElementById("p1");
var p2btn = document.getElementById("p2");
var rstBtn = document.getElementById("rst");

var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            document.getElementById("p1s").classList.add("winner");
            gameOver = true;
        }
        document.getElementById("p1s").textContent = p1Score;
    }
});

p2btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            document.getElementById("p2s").classList.add("winner");
            gameOver = true;
        }
        document.getElementById("p2s").textContent = p2Score;
    }
});

rstBtn.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function () {
    document.getElementById("num").textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});

function reset() {
    document.getElementById("p1s").textContent = p1Score = 0;
    document.getElementById("p2s").textContent = p2Score = 0;

    document.getElementById("p1s").classList.remove("winner");
    document.getElementById("p2s").classList.remove("winner");

    gameOver = false;
}