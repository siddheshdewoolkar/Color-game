var numberOfSquares = 6;

var init_color = decide_color(numberOfSquares);

// selects all the div boxes from HTML
var allbox = document.querySelectorAll(".square");

// Setting the goal_color for the player
var goal_color = set_win_color();

// Displays Correct or Try Again while selecting
var message = document.querySelector("#message");

// Selects the header for changing the text
var h1 = document.querySelector("h1");

// Selects the target_color from HTML
var displaytargetcolor = document.getElementById("displaytargetcolor");

// Shows the color to be selected
displaytargetcolor.textContent = goal_color;

// selecting the new colors button
var button_reset = document.querySelector("#play");

// making the reset button
button_reset.addEventListener("click",reset);

// easy button
var button_easy = document.querySelector("#easy");

// listener for easy button
button_easy.addEventListener("click",easy);

// hard button
var button_hard = document.querySelector("#hard");

// listener for hard button
button_hard.addEventListener("click",hard);


// for loop for applying colors to the boxes
for(var i = 0; i < allbox.length; i++){
	// to add colors to all boxes
	allbox[i].style.backgroundColor = init_color[i];

	// to add event listener to all boxes
	allbox[i].addEventListener("click", checkcolor);
}


// hard function
function hard(){
	button_hard.classList.add("selected");
	button_easy.classList.remove("selected");
	numberOfSquares = 6;
	init_color = decide_color(numberOfSquares);
	goal_color = set_win_color();
	displaytargetcolor.textContent = goal_color;
	h1.style.backgroundColor = "steelblue";
	button_reset.textContent = "New Colors";

	for(var i = 0; i < allbox.length; i++)
	{
	// to add colors to all boxes
	allbox[i].style.backgroundColor = init_color[i];
	allbox[i].style.display = "block";
	
	// to add event listener to all boxes
	allbox[i].addEventListener("click", checkcolor);
}
}

// easy function
function easy(){
	button_easy.classList.add("selected");
	button_hard.classList.remove("selected");
	numberOfSquares = 3;
	init_color = decide_color(numberOfSquares);
	goal_color = set_win_color();
	displaytargetcolor.textContent = goal_color;
	h1.style.backgroundColor = "steelblue";
	button_reset.textContent = "New Colors";

	for(var i = 0; i < allbox.length; i++)
	{
		if(i <= 2)
		{
			allbox[i].style.backgroundColor = init_color[i];
			allbox[i].addEventListener("click", checkcolor);
		}
		else {
			allbox[i].style.display = "none";	
		}
	}
}

// making a function for the rest function
function reset(){
	init_color = decide_color(numberOfSquares);
	goal_color = set_win_color();
	displaytargetcolor.textContent = goal_color;
	h1.style.backgroundColor = "steelblue";
	button_reset.textContent = "New Colors";
	message.textContent = "";

	for(var i = 0; i < allbox.length; i++)
	{
	// to add colors to all boxes
	allbox[i].style.backgroundColor = init_color[i];

	// to add event listener to all boxes
	allbox[i].addEventListener("click", checkcolor);
}
}

// To check if the selected box is correct or wrong
function checkcolor(){
	if (this.style.backgroundColor === goal_color) {
			message.textContent = "Correct";
			button_reset.textContent = "Play Again?";
			for(var i = 0; i < allbox.length; i++){
				allbox[i].style.backgroundColor = goal_color;
				h1.style.backgroundColor = goal_color;
		}
	}
		else{
			this.style.backgroundColor = "black";
			message.textContent = "Try Again";
		}
}

// to set the winning color
function set_win_color(){
	var num = Math.floor(Math.random() * init_color.length);
	return init_color[num];
}

// deciding the color and filling the array with that color
function decide_color(num){
	var colors = [];
	for(var i = 0; i < num; i++){
	var col_red = Math.floor(Math.random()*256);
	var col_green = Math.floor(Math.random()*256);
	var col_blue = Math.floor(Math.random()*256);
	colors.push("rgb(" + col_red + ", " + col_green + ", " + col_blue + ")");
	}
	return colors;
}