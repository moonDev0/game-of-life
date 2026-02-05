// class Matrix extends Array {
// 	constructor(rows, cols, fillValue = 0) {}

// 	has(x, y) {}

// 	get(x, y) {}

// 	set(x, y, value) {}
	
// 	getNeighbors(x, y) {}
// }

// class GameOfLife {
// 	constructor() {
// 		this.state = new Matrix(3, 3);

// 		this.state.set(0, 1, 1);
// 		this.state.set(1, 1, 1);
// 		this.state.set(2, 1, 1);

// 		this.nextState = new Matrix(3, 3);
// 	}

// 	evolve() {}

// 	toString() {}
// }

// const game = new GameOfLife();

// setInterval(() => {
// 	game.evolve()
// 	console.log(game.toString())
// 	console.clear()
// }, 500);