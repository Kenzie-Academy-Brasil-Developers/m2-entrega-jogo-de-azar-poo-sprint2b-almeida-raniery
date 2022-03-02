import GameController from "./controllers/GameController.js";
import Move           from "./models/Move.js";

const enemiesDB = [
  {
    name: "Peaceful Pete",
    shortName: "Peace Pete",
    lives: 2,
    moveList: [new Move("Scissors"), new Move("Paper")],
    graphics: {
      x: 230,
      y: 142,
      scale: 2,
      idle: { sx: 4, sy: 0 },
      ready: { sx: 4, sy: 0 },
      draw: { sx: 0, sy: 1 },
    },
  },
  {
    name: "Two-Fingered Jack",
    shortName: "Two-Finger",
    lives: 2,
    moveList: [new Move("Scissors"), new Move("Rock")],
    graphics: {
      x: 230,
      y: 142,
      scale: 2,
      idle: { sx: 1, sy: 1 },
      ready: { sx: 2, sy: 1 },
      draw: { sx: 4, sy: 1 },
    },
  },
  {
    name: "Tricky Tracy",
    shortName: "Tricky Tracy",
    lives: 3,
    moveList: [new Move("Scissors"), new Move("Paper"), new Move("Rock")],
    graphics: {
      x: 230,
      y: 142,
      scale: 2,
      idle: { sx: 5, sy: 1 },
      ready: { sx: 1, sy: 2 },
      draw: { sx: 1, sy: 2 },
    },
    selectMove: function () {
      const move     = Move.randomMove(this.moveList);
      const fakeMove = new Move(move.weakness);

      this.selectedMove = move;

      return function () {
        GameController.showEnemyMove(fakeMove);
      }
    },
  },
  {
    name: "Bad Bluff Bronco",
    shortName: "Bad-Bluff",
    lives: 3,
    moveList: [new Move("Scissors"), new Move("Paper"), new Move("Rock")],
    graphics: {
      x: 230,
      y: 142,
      scale: 2,
      idle: { sx: 2, sy: 2 },
      ready: [
        { sx: 3, sy: 2 },
        { sx: 0, sy: 3 },
        { sx: 3, sy: 3 },
      ],
      draw: [
        { sx: 5, sy: 2 },
        { sx: 2, sy: 3 },
        { sx: 5, sy: 3 },
      ],
    },
    getAltGraphic: function(handle){
      const graphicsArray = this.graphics[handle];
      return graphicsArray[this.selectedMove.id];
    },
  },
  {
    name: "Lucky Lucy",
    shortName: "Lucky Lucy",
    lives: 1,
    moveList: [],
    graphics: {
      x: 230,
      y: 142,
      scale: 2,
      idle: { sx: 0, sy: 4 },
      ready: { sx: 1, sy: 4 },
      draw: { sx: 3, sy: 4 },
    },
    selectMove: function () {
      this.selectedMove = new Move(GameController.getPlayerMove().weakness);
    },
  },
];

export default enemiesDB;