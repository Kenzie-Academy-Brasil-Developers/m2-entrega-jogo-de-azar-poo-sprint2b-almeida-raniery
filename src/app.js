import GameController from "./controllers/GameController.js";

const gameView = GameController.game.view

window.onload = gameView.createView.bind(gameView);