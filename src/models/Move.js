class Move {
  constructor(type) {
    this.type = type;
    switch (type) {
      case "Rock":
        this.weakness = "Paper";
        this.strength = "Scissors";
        this.graphic  = { sx: 4, sy: 4 };
        this.flipped  = { sx: 1, sy: 5 };
        break;
      case "Paper":
        this.weakness = "Scissors";
        this.strength = "Rock";
        this.graphic = { sx: 5, sy: 4 };
        this.flipped = { sx: 2, sy: 5 };
        break;
      case "Scissors":
        this.weakness = "Rock";
        this.strength = "Paper";
        this.graphic = { sx: 0, sy: 5 };
        this.flipped = { sx: 3, sy: 5 };
        break;
    }
  }

  static randomMove(moveList) {
    const randomIndex = Math.floor(Math.random() * moveList.length);

    return moveList[randomIndex];
  }
}

export default Move;