class Move {
  constructor(type) {
    this.type = type;
    switch(type){
      case "Rock":
        this.weakness = "Paper";
        this.strength = "Scissors";
        break;
      case "Papers":
        this.weakness = "Scissors";
        this.strength = "Rock";
        break;
      case "Scisors":
        this.weakness = "Rock";
        this.strength = "Paper";
        break;
    }
  }

  static randomMove(moveList) {
    const randomIndex = Math.floor(Math.random() * moveList.length);

    return moveList[randomIndex];
  }
}

export default Move;