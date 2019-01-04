var p1btn = document.getElementById("p1");
var p2btn = document.getElementById("p2");
var rstBtn = document.getElementById("rst");

var p1Score = 0;
var p2Score = 0;

p1btn.addEventListener("click", function() {
    p1Score++;
    document.getElementById("p1s").textContent = p1Score;
})

p2btn.addEventListener("click", function() {
    p2Score++;
    document.getElementById("p2s").textContent = p2Score;
})