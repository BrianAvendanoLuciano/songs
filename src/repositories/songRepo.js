const httpStatus = require("http-status");
const connect = require("../config/db");
const Song = require("../models/song");
const SongError = require("../utils/errors/songError");

class SongRepo {
    async #handle(fn) {
        try {
            await connect();
            return await fn();
          } catch (error) {
            throw new SongError(
                error?.message,
                error?.statusCode ? error.statusCode : httpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAllSongs(params) {
        return this.#handle(async () => {
            const songs = await Song.find(params);
            return songs;
        });
    }

    async getSongById(id) {
        return this.#handle(async () => {
            const songs = await Song.findById(id);
            return songs;
        });
    }

    async createSong(songObj) {
        return this.#handle(async () => {
          const song = await Song.create(songObj);
          return song;
        });
    }
}

module.exports.songRepo = new SongRepo();