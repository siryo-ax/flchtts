class Player {

	constructor(name, winPoints) {
		this.name = name; 
		this.points = winPoints; 

		let main = document.getElementById("playerslist");

		this.playerNode = document.createElement("span");
		this.nameNode = document.createTextNode(name);
		this.pointsNode = document.createTextNode(" pts : "+this.points);

		main.append(this.playerNode);
		this.playerNode.append(this.nameNode); 
		this.playerNode.append(this.pointsNode);
	}

	getName() {
		return this.name;
	}

	addPoints(points) {
		this.points -= points;
		this.pointsNode.textContent = " pts : "+this.points; 
	}

	getPoints() {
		return this.points; 
	}

	removePlayer() {
		this.playerNode.remove();
	}
	
}