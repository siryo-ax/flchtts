class Game {

	constructor(winPoints) {
		this.winPoints = winPoints; 

		this.players = [];
		this.currentlyPlaying = null; 

		this.pointsToAdd = 0;
		this.darts = 0;  

		this.i = 0; 
	}

	hit(points) {
		if(this.darts<3){
			console.log("hit "+points);
			this.pointsToAdd+=points;
			this.currentlyPlaying.tempPoints(this.pointsToAdd);
			this.darts++;	
		}
	}

	start(playerNumber) {
		for(let i=1;i<=playerNumber;i++){
			this.players.push(new Player("Joueur "+i,this.winPoints));
		}

		console.log("Game started")

		this.currentlyPlaying = this.players[this.i]
		this.currentlyPlaying.isPlaying();
	}

	nextTurn() {
		console.log(this.currentlyPlaying.getPoints());
		console.log(this.pointsToAdd); 

		if(this.currentlyPlaying.getPoints()===this.pointsToAdd){
			this.currentlyPlaying.addPoints(this.pointsToAdd); 
			this.gameover(this.currentlyPlaying);
		}else{
			if(this.currentlyPlaying.getPoints()<this.pointsToAdd){
				this.currentlyPlaying.addPoints(0); 
				console.log("Too much");
			}else{
				this.currentlyPlaying.addPoints(this.pointsToAdd); 
				console.log("Points added");
			}
		}

		this.currentlyPlaying.isPlaying();
		
		this.i++; 
		if(this.i>this.players.length-1) {
			//return at the first player when OOB
			this.i=0; 
		}

		this.currentlyPlaying = this.players[this.i];

		this.pointsToAdd=0; 
		this.darts=0;
		this.currentlyPlaying.isPlaying();

		console.log("next turn");
	}

	reset() {
		this.pointsToAdd=0;
		this.darts=0;
		this.currentlyPlaying.tempPoints(this.pointsToAdd);
	}

	gameover(player) {
		console.log(player.getName()+" winner")
		alert(player.getName()+"a gagné !");
		document.getElementById("nextturn").disabled=true; 
	}

	removeAllPlayers() {
		for(let p of this.players){
			p.removePlayer(); 
		}
	}
}