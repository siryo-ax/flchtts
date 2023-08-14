function init() { 
	let newGameButton = document.getElementById("newgame"); 
	let game; 
	
	newGameButton.addEventListener("click",()=> {
		if(game){
			game.removeAllPlayers(); 
		}
		game = new Game(301);
		game.start();
	});

	let nextTurnButton = document.getElementById("nextturn"); 

	nextTurnButton.addEventListener("click",()=>{
		game.nextTurn(); 
	})

	let targetPoints = document.querySelector("map[name='target']").childNodes;

	for(let tp of targetPoints){
		tp.addEventListener("click",()=> {
			let number = tp.getAttribute("title");
			game.hit(Number(number));
		});
	}
}

window.addEventListener("DOMContentLoaded", init);