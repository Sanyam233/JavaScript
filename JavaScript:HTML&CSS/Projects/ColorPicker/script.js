var _selectedNumber = 6;
var colors = _generateRandomColor(_selectedNumber);
var color_picked = _pickColor();
var square_boxes = document.getElementsByClassName("square");
var rgb_heading = document.getElementById("rgb");
var heading = document.getElementsByTagName("h1")[0];
var reset = document.getElementById("reset");
var indicator = document.getElementById("indicator");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var toggleButtons = document.getElementsByClassName("toggleButton");

rgb_heading.textContent = color_picked;

for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        toggleButtons[0].classList.remove('selected');
        toggleButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent == "Easy" ? _selectedNumber = 3 : _selectedNumber = 6;
        _reset();
        _toggleBlockCode(_selectedNumber);
    })
}


for (var i = 0; i < square_boxes.length; i++) {
    square_boxes[i].style.backgroundColor = colors[i];

    square_boxes[i].addEventListener('click', function() {
        if (this.style.backgroundColor == color_picked) {
            indicator.textContent = "Correct";
            heading.style.backgroundColor = color_picked;
            rgb_heading.style.backgroundColor = color_picked;
            for (var j = 0; j < square_boxes.length; j++) {
                square_boxes[j].style.backgroundColor = this.style.backgroundColor;
            }
            reset.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "#121212";
            indicator.textContent = "Try Again";

        }

    })
}

reset.addEventListener('click', function() {
    _reset();
});

function _reset() {
    reset.textContent = "New Colors";
    rgb_heading.style.backgroundColor = "#E33357";
    heading.style.backgroundColor = "#E33357";
    colors = _generateRandomColor(_selectedNumber);
    color_picked = _pickColor();
    indicator.textContent = "";
    rgb_heading.textContent = color_picked;

    for (var i = 0; i < square_boxes.length; i++) {
        square_boxes[i].style.backgroundColor = colors[i];
    }

}

function _generateRandomColor(number) {
    var arr = [];

    for (var i = 0; i < number; i++) {
        var x = _randomColor();
        arr.push(x);
    }
    return arr;
}

function _randomColor() {

    var r = Math.floor(Math.random() * 256) + 1;
    var g = Math.floor(Math.random() * 256) + 1;
    var b = Math.floor(Math.random() * 256) + 1;

    return `rgb(${r}, ${g}, ${b})`;

}

function _pickColor() {
    var random_number = Math.floor(Math.random() * colors.length - 1) + 1;
    return colors[random_number];
}

function _toggleBlockCode(_selectedNumber) {
    for (var i = 0; i < square_boxes.length; i++) {
        if (i < 3) {
            square_boxes[i].style.backgroundColor = colors[i];
        } else {
            square_boxes[i].style.display = _selectedNumber == 3 ? "none" : "block";
        }
    }
}