var numsquares = 9;

var colors = generaterandomcolors(numsquares);

var squares = document.querySelectorAll('.square');

var pickedcolor = pickcolor();

var colordisplay = document.getElementById('colordisplay');

var messagedisplay = document.getElementById('message');

var h1 = document.querySelector('h1');

var resetbutton = document.querySelector('#reset');

var easybtn = document.querySelector('#easybtn');

var medbtn = document.querySelector('#medbtn');

var hardbtn = document.querySelector('#hardbtn');

easybtn.addEventListener('click', function() {
	//add selected class to easy and remove from rest
	easybtn.classList.add('selected');
	medbtn.classList.remove('selected');
	hardbtn.classList.remove('selected');
	numsquares = 3;
	//generate all new colors
	colors = generaterandomcolors(numsquares);
	//pick new random color from array
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colordisplay.textContent = pickedcolor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			//set color of 3 squares
			squares[i].style.backgroundColor = colors[i];
		} else {
			//hide last 6 squares
			squares[i].style.display = 'none';
		}
	}
});

medbtn.addEventListener('click', function() {
	//add selected class to med and remove from rest
	easybtn.classList.remove('selected');
	medbtn.classList.add('selected');
	hardbtn.classList.remove('selected');
	numsquares = 6;
	//generate all new colors
	colors = generaterandomcolors(numsquares);
	//pick new random color from array
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colordisplay.textContent = pickedcolor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			//set color of 6 squares
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';
		} else {
			//hide last 3 squares
			squares[i].style.display = 'none';
		}
	}
});

hardbtn.addEventListener('click', function() {
	//add selected class to hard and remove from rest
	easybtn.classList.remove('selected');
	medbtn.classList.remove('selected');
	hardbtn.classList.add('selected');
	numsquares = 9;
	//generate all new colors
	colors = generaterandomcolors(numsquares);
	//pick new random color from array
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colordisplay.textContent = pickedcolor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		//set color of all 9 squares
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

resetbutton.addEventListener('click', function() {
	//generate all new colors
	colors = generaterandomcolors(numsquares);
	//pick new random color from array
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colordisplay.textContent = pickedcolor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	//change background color
	h1.style.backgroundColor = '#4682b4';
	//display when reset button is clicked
	messagedisplay.textContent = '';
	//display when reset button is clicked
	this.textContent = 'New Colors';
});
//display the rgb color picked on the top
colordisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//get color of clicked square
		var clickedcolor = this.style.backgroundColor;
		//compare color to pickedcolor
		if (clickedcolor === pickedcolor) {
			messagedisplay.textContent = 'Correct!';
			resetbutton.textContent = 'Play Again?';
			//change color of all squares to picked color
			changecolors(clickedcolor);
			//change color of h1 to picked color
			h1.style.backgroundColor = clickedcolor;
		} else {
			//change background color of square to body color
			this.style.backgroundColor = '#232323';
			messagedisplay.textContent = 'Try Again';
		}
	});
}
function changecolors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor() {
	//pick random color from the generated random colors
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num) {
	//make array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomcolor());
	}
	//return that array
	return arr;
}

function randomcolor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//return random colors
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
