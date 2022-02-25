class Character {
  constructor({lives, graphics}) {
    this.selectedMove;

    this._lives       = lives;
    this.graphics     = graphics;
    this.isDead       = false;
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
}

export default Character;