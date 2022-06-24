var socket = io();

let side = 25;



function setup() {
    frameRate(5);
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}



function nkarel(matrix) {

	// var weath = 'winter'
	// // // let img = loadImage('./grass.webp');

	// socket.on("weath", function (data)
    // {
    //     weath = data;
    // })
    // function preload(){
    //     img1 =loadImage("grass.webp");
    //   }
    
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {

			if (matrix[y][x] == 1) {
				fill("#31e037")	
			} else if (matrix[y][x] == 2) {
				fill("#f0f573");
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
			} else if (matrix[y][x] == 3) {
				fill("#e63420")
			}
			else if (matrix[y][x] == 4) {
				fill("black")
			}
			else if (matrix[y][x] == 5) {
				fill("blue")
			}

			rect(x * side, y * side, side, side);


		}
	}
}


setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },500
)

// This function countinue functin add() in server
function add(){
	socket.emit("add")
}	

// This function changes wheather


function changeWheather(){
    let button1 = document.getElementById("butSummer");
	let button2 = document.getElementById("butAutumn");
    let button3 = document.getElementById("butWinter");
	let button4 = document.getElementById("butSpring");

	button1.onclick = changeColorSummer;
    function changeColorSummer(){
        document.body.style.backgroundColor = "#fffca1";
		let weath = "summer";
		socket.emit('weath', weath);
    }
    

    button2.onclick = changeColorAutumn;
    function changeColorAutumn(){
        document.body.style.backgroundColor = "#fcae60";
    }

	button3.onclick = changeColorWinter;
    function changeColorWinter(){
        document.body.style.backgroundColor = "#faf7d4";
    }

	button4.onclick = changeColorSpring;
    function changeColorSpring(){
        document.body.style.backgroundColor = "#bcf0ad";
    }

}

window.onload = changeWheather;