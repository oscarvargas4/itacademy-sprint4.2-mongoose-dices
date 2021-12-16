const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema(
  {
    diceOne: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },
    diceTwo: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },
    dices: {
      type: Number,
      required: true,
      min: 2,
      max: 12,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Game = model("Game", gameSchema);

module.exports = {
    Game,
    gameSchema
};
