const httpStatus = require("http-status");
const SongError = require("../utils/errors/songError");
const { songRepo } = require('../repositories/songRepo');
const { logger } = require("../utils/logger");
const SongBuilder = require("../utils/builder/songBuilder");

class SongService {
    async #handle(fn) {
        try {
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
            logger.info(`retrieving songs with ${JSON.stringify(params)} params`)

            const builder = new SongBuilder()
            const query = builder
            .setArtist(params.artist)
            .setTitle(params.title)
            .build(); 
            
            const songs = await songRepo.getAllSongs(query)
            return songs;
        });
    }

    async getSongById(id) {
        return this.#handle(async () => {
            logger.info(`retrieving song with ${id} id`)

            const song = await songRepo.getSongById(id)

            if (!song) {
                throw new SongError(
                    `Song with ${id} id does not exist`,
                    httpStatus.NOT_FOUND
                )
            }

            return song;
        });
    }

    async createSong(songObj) {
        return this.#handle(async () => {
          logger.info(`song: ${songObj}`);

          const song = await songRepo.createSong(songObj)
          return song;
        });
    }
}

module.exports.songService = new SongService()