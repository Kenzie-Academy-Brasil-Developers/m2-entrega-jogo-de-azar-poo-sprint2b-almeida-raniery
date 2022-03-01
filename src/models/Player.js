import Character from "./Character.js";
import Move from "./Move.js";

class Player extends Character {
  constructor() {
    const moveList = [new Move("Rock"), new Move("Paper"), new Move("Scissors")];

    super({
      lives: 3,
      graphics: {
        x: 12,
        y: 124,
        scale: 3,
        idle: { sx: 0, sy: 0 },
        ready: { sx: 1, sy: 0 },
        draw: { sx: 3, sy: 0 },
      },
      moveList: moveList,
    });
  }
}

export default Player;