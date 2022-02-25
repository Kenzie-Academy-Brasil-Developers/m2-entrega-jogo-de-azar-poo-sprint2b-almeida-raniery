import GameController from "./controllers/GameController.js";
import Move           from "./models/Move.js";

const enemiesDB = [
  {
    name: "Peaceful Pete",
    lives: 2,
    moveList: [new Move("Scissors"), new Move("Paper")],
    graphics: {},

    openingMove: function () {
      return this.movesList[0];
    },
  },
  {
    name: "Tony Two-Fingers",
    lives: 2,
    moveList: [new Move("Scissors"), new Move("Rock")],
    graphics: {},
  },
  {
    name: "Tricky Tracy",
    lives: 3,
    moveList: [new Move("Scissors"), new Move("Paper"), new Move("Rock")],
    graphics: {},
    specialMove: function () {
      return new Move(this.selectedMove.weakness);
    },
  },
  {
    name: "Bad Bluff Bronco",
    lives: 3,
    moveList: [new Move("Scissors"), new Move("Paper"), new Move("Rock")],
    graphics: {},
    specialMove: function () {
      this.graphics.idle = this.graphics.tells[this.selectedMove.type];
      return this.selectedMove;
    },
  },
  {
    name: "Lucky Lucy",
    lives: 1,
    moveList: [],
    graphics: {},
    specialMove: function () {
      return new Move(GameController.getPlayerMove().weakness);
    },
  },
];

export default enemiesDB;