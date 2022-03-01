class Character {
  static states = ["draw","ready", "idle", "idle"];

  constructor({lives, graphics, moveList}) {
    this.selectedMove;
    
    this.moveList     = moveList;
    this._lives       = lives;
    this.graphics     = graphics;
    this.isDead       = false;
    this.currentState = "idle"
  }

  set lives(newValue) {
    this._lives = newValue >= 0? newValue : 0;
    
    if(this._lives === 0) {
      this.isDead = true;
    }
  }

  get lives() {
    return this._lives;
  }

  getGraphics(handle) {
    const {x, y, scale} = this.graphics;
    const transform     = {x, y, scale};

    return {...transform, ...this.graphics[handle]}
  }
}

export default Character;