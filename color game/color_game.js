var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("reset") || document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var extremebtn = document.querySelector("#extremebtn");
colorDisplay.textContent = pickedColor;

// Initialize squares based on current numSquares
for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    } else {
        squares[i].style.display = "none";
    }

    // attach click listeners
    squares[i].addEventListener("click", function () {
        // grab the color
        var clickedColor = this.style.background;
        // compare it with picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            messageDisplay.textContent = "Try Again!";
            this.style.background = "#232323";
        }
    });
}

easybtn.addEventListener("click", function () {
    hardbtn.classList.remove("selected");
    extremebtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
});

hardbtn.addEventListener("click", function () {
    easybtn.classList.remove("selected");
    extremebtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
});

extremebtn.addEventListener("click", function () {
    easybtn.classList.remove("selected");
    hardbtn.classList.remove("selected");
    extremebtn.classList.add("selected");
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
});

resetButton.addEventListener("click", function () {
    if (resetButton.textContent === "Play Again?") {
        resetButton.textContent = "New Colors";
    }
    // generate new random colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickcolor();
    // display that color in message
    colorDisplay.textContent = pickedColor;

    // change the background of h1 to normal
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
        squares[i].style.display = "block";
    }
}

function pickcolor() {
    var randomcolor = Math.floor(Math.random() * colors.length);
    return colors[randomcolor];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // repeat num times
    for (var i = 0; i < num; i++) {
        // push into array
        arr.push(rcg());
    }


    // return array
    return arr;
}

function rcg() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
