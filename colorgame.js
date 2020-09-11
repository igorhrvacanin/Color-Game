var numofSquares = 6;
var colors = [];
var pickedColor;
var squers = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");
// colorDisplay.textContent = pickedColor;

init();

function init() {
    for (var i = 0; i < modeBtn.length;i++){
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy" ? numofSquares = 3 :numofSquares = 6;
            reset();
        });
    }
    for (var i = 0; i < squers.length; i++){
// add colors to squares
        squers[i].style.backgroundColor = colors[i];

        // add clickliseners to squares
        squers[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";

            }
        });
    }
    reset();
}


for (var i = 0; i < modeBtn.length;i++){
    modeBtn[i].addEventListener("click", function () {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent ==="Easy" ? numofSquares = 3 :numofSquares = 6;
        // if (this.textContent === "Easy"){
        //     numofSquares = 3;
        // }
        // else {
        //     numofSquares = 6;
        // }

        reset();
    });
}
function reset(){
    colors = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squers.length; i++){
        if (colors[i]){
            squers[i].style.display = "block";
            squers[i].style.backgroundColor = colors[i];
        }
        else {
            squers[i].style.display = "none";
        }


    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    resetButton.textContent="New Colors";

}

//
// easyBtn.addEventListener("click", function () {
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//     h1.style.backgroundColor = "steelblue";
//    numofSquares = 3;
//    colors = generateRandomColors(numofSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squers.length;i++){
//         if (colors[i]){
//             squers[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squers[i].style.display = "none";
//         }
//    }
// });
//
// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numofSquares = 6;
//     colors = generateRandomColors(numofSquares);
//     pickedColor = pickColor();
//     h1.style.backgroundColor = "steelblue";
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squers.length;i++){
//             squers[i].style.backgroundColor = colors[i];
//             squers[i].style.display = "block";
//
//
//     }
// });

resetButton.addEventListener("click",  function() {
    reset();

    //
    // colors = generateRandomColors(numofSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // for (var i = 0; i < squers.length; i++){
    //     squers[i].style.backgroundColor = colors[i];
    //
    // }
    // h1.style.backgroundColor = "steelblue";
    // resetButton.textContent = "New Colors";
    // messageDisplay.textContent = "";
    // resetButton.textContent="New Colors";
    //

});




function changeColors(color) {
    for (var i = 0; i <squers.length; i++){
        squers[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    // crvena
    var r = Math.floor(Math.random() * 256);
    // zelena
    var g = Math.floor(Math.random() * 256);
    //plava
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}