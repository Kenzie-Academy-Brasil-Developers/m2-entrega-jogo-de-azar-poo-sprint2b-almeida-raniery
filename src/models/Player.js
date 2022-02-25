import Character from "./Character.js";
import Move from "./Move.js";

class Player extends Character {
  constructor() {
    super({lives: 3, graphics: {}});

    this.moveList     = [new Move("Rock"), new Move("Paper"), new Move("Scissors")];
  }
}

export default Player;