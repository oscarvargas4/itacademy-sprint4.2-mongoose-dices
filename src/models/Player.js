const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { Game, gameSchema } = require('./Game');

const playerSchema = new Schema(
  {
    username: { type: String, default: "ANONIM" },
    winRate: Number,
    dateCreated: { type: Date, default: Date.now },
    games: {
      type: [gameSchema], // ! Array de esquemas pero no de modelos.
      default: undefined, // ! Modificar esto para cuando no haya juegos
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Player = model("Player", playerSchema);

module.exports = Player;
