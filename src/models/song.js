const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: [true, "Please provide the title"],
        },
        artist: {
          type: String,
          required: [true, "Please provide the artist"],
        },
        releaseDate: {
          type: Date,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("Song", SongSchema)