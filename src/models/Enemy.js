import Character from "./Character.js";
import Move from "./Move.js";

class Enemy extends Character {
  constructor(data) {
    super(data)
    
    this.name        = data.name;  
    this.shortName  = data.shortName;
    this.specialMove = data.specialMove;
    this.openingMove = data.openingMove;
  }

  selectRandomMove() {
    this.selectedMove =  Move.randomMove(this.moveList);
  }
}

export default Enemy;