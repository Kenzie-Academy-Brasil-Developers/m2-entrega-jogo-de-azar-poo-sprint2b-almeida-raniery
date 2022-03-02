import Character from "./Character.js";
import Move from "./Move.js";

class Enemy extends Character {
  constructor(data) {
    super(data)

    this.name          = data.name;  
    this.shortName     = data.shortName;

    if (data.getAltGraphic) {
      this.getAltGraphic = data.getAltGraphic;
    }

    if (data.selectMove) {
      this.selectMove = data.selectMove;
    }
  }

  selectMove() {
    this.selectedMove = Move.randomMove(this.moveList);
  }
}

export default Enemy;