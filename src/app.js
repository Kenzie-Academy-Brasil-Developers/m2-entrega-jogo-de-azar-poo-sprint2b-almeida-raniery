import GameController from "./controllers/GameController.js";

window.onload = GameController.game.initGame.bind(GameController.game)