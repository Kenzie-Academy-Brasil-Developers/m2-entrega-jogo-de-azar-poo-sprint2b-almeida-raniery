import enemiesDB       from "../enemiesDB.js";
import Enemy           from "./Enemy.js"
import GameTimer       from "./GameTimer.js";
import Player          from "./Player.js";
import InputController from "../controllers/InputController.js";
import GameView        from "../views/GameView.js";
import Character       from "./Character.js";
import GameOverView from "../views/GameOverView.js";
import EndGameView from "../views/EndGameView.js";
import TitleView from "../views/TitleView.js";

class Game {
    constructor() {
      this.stageNumber     = 0;
      this.turnNumber      = 0;
      this.status          = "Title"
      this.timer           = new GameTimer(3000);
      this.playerCharacter = new Player();
      this.input           = new InputController(this.playerCharacter.moveList);

      this.song            = new Audio("src/audio/Drifter.mp3");
      this.harmonica       = new Audio("src/audio/Harmonica.ogg");
      this.ricochet        = new Audio("src/audio/Ricochet.ogg");
      this.startAudio      = new Audio("src/audio/Game-Start.ogg")

      this.harmonica.volume = 0.3;
    }

    initGame(){
      document.fonts.load('32px November').then(
        () => {
          this.view = new TitleView();
          this.view.init();
        }
      );
    }

    calculateVictory() {
      const playerMove = this.playerCharacter.selectedMove;
      const enemyMove  = this.currentEnemy.selectedMove;
      
      this.turnNumber++;

      if(enemyMove.type === playerMove.type) {
        return "Draw!"
      } else if (playerMove.type === enemyMove.weakness) {
        this.currentEnemy.lives -= 1;
        return "Player Wins!";
      } else {
        this.playerCharacter.lives -=1;
        return `${this.currentEnemy.name} Wins!`;
      }
    }

    nextStage() {
      this.stageNumber++;
      this.currentEnemy = new Enemy(enemiesDB[this.stageNumber]);
    }

    updateStates(timeStamp = 3) {

      if(this.playerCharacter.isDead) {
        this.status = "Over";
        this.view = new GameOverView();
      } else if(this.currentEnemy.isDead) {
        if (this.stageNumber < 4){
           this.nextStage();
        } else {
          this.status = "Over";
          this.view = new EndGameView();
        }
      }

      this.playerCharacter.currentState = Character.states[timeStamp];
      this.currentEnemy.currentState    = Character.states[timeStamp];
    }

    restartGame() {
      this.song.pause();
      this.song.currentTime = 0;
      
      this.status          = "Running";
      this.currentEnemy    = new Enemy(enemiesDB[this.stageNumber]);
      this.playerCharacter = new Player();
      this.view            = new GameView();

      this.song.loop = true;
      this.song.play();
      this.startAudio.play();
      
      this.view.init();
    }
}

export default Game;