import Character from "./Character";
import Move from "./Move";

class Enemy extends Character {
  constructor(data) {
    super(data)
    
    this.specialMove = data.specialMove;
    this.openingMove = data.openingMove;
  }

  getRandomMove() {
    return Move.randomMove(this.moveList);
  }
}

export default Enemy;