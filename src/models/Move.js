class Move {
  constructor(type) {
    this.type = type;
    switch (type) {
      case "Rock":
        this.id       = 0;
        this.weakness = "Paper";
        this.strength = "Scissors";
        this.graphic  = { sx: 4, sy: 4 };
        this.flipped  = { sx: 1, sy: 5 };
        break;
      case "Paper":
        this.id       = 1;
        this.weakness = "Scissors";
        this.strength = "Rock";
        this.graphic  = { sx: 5, sy: 4 };
        this.flipped  = { sx: 2, sy: 5 };
        break;
      case "Scissors":
        this.id       = 2;
        this.weakness = "Rock";
        this.strength = "Paper";
        this.graphic  = { sx: 0, sy: 5 };
        this.flipped  = { sx: 3, sy: 5 };
        break;
    }

    this.graphic = { x: 168, y: 100, scale: 2, ...this.graphic};
    this.flipped = { x: 106, y:  92, scale: 2, ...this.flipped };
  }

  static randomMove(moveList) {
    const randomIndex = Math.floor(Math.random() * moveList.length);

    return moveList[randomIndex];
  }
}

export default Move;