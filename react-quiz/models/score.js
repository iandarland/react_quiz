const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    score : Number,
    userName : String
})

const Score = mongoose.model("Score", scoreSchema)

module.exports = Score;