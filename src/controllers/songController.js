const { songService } = require("../services/songService");
const { handleResponse } = require("../utils/response");

class SongController {
    async getAllSong(req, res) {
        handleResponse(songService.getAllSongs(req.query), res);
    }

    async getSongById(req, res) {
        const { id } = req.params;
        handleResponse(songService.getSongById(id), res);
    }

    async createSong(req, res) {
        handleResponse(songService.createSong(req.body), res);
    }
}

module.exports = new SongController();