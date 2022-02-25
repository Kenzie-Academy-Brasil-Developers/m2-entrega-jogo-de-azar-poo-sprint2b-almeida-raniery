import Character from "./Character.js";
import Move from "./Move.js";

class Player extends Character {
  constructor() {
    const moveList = [new Move("Rock"), new Move("Paper"), new Move("Scissors")];

    super({lives: 3, graphics: {}, moveList: moveList});  }
}

export default Player;