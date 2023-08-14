function init() { 
	let newGameButton = document.getElementById("newgame"); 
	let nextTurnButton = document.getElementById("nextturn");
	let resetButton = document.getElementById("reset");

	let game;
	
	nextTurnButton.disabled = true;
	resetButton.disabled = true;
	
	newGameButton.addEventListener("click",()=> {
		if(game){
			game.removeAllPlayers(); 
		}

		let playerNumber = 0;
		
		/*while(playerNumber<=0) {
			playerNumber = prompt("Combien de joueurs ?",2);
		}*/

		game = new Game(301);
		game.start(document.getElementById("playerNumber").value);
		nextTurnButton.disabled = false;
		resetButton.disabled = false;
	}); 

	nextTurnButton.addEventListener("click",()=>{
		game.nextTurn(); 
	}); 

	resetButton.addEventListener("click",()=>{
		game.reset();
	});

	let targetPoints = document.querySelector("map[name='target']").childNodes;

	for(let tp of targetPoints){
		tp.addEventListener("click",()=> {
			let number = tp.getAttribute("title");
			game.hit(Number(number));
		});
	}
}

window.addEventListener("DOMContentLoaded", init);