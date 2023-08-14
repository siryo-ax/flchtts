class Game {

	constructor(winPoints) {
		this.winPoints = winPoints; 

		this.players = [];
		this.currentlyPlaying = null; 

		this.pointsToAdd = 0; 

		this.i = 0; 
	}

	createPlayer(name) {
		let player = new Player(name, this.winPoints); 
		this.players.push(player);

		return player;  
	}

	hit(points) {
		console.log("hit "+points);
		this.pointsToAdd+=points; 
	}

	start() {
		let p1 = this.createPlayer("P1");
		let p2 = this.createPlayer("P2");
		this.players.push(p1,p2);

		console.log("Game started")

		this.currentlyPlaying = this.players[this.i]
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

		this.i++; 
		if(this.i>this.players.length-1) {
			//return at the first player when OOB
			this.i=0; 
		}

		this.currentlyPlaying = this.players[this.i]
		this.pointsToAdd=0; 
	}

	gameover(player) {
		console.log(player.getName()+" winner")
	}

	removeAllPlayers() {
		for(let p of this.players){
			p.removePlayer(); 
		}
	}
}