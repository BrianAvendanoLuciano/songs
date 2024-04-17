const express = require('express');
const songController = require('../controllers/songController');
const { validateGetAllSongs, validateCreateSong } = require('../utils/validations/songValidation');
const { validateRequest } = require('../middlewares/validateRequest');
const songRouter = express.Router();

songRouter.get('/', validateRequest(validateGetAllSongs), songController.getAllSong);
songRouter.post('/', validateRequest(validateCreateSong, 'body'), songController.createSong);
songRouter.get('/:id', songController.getSongById);

module.exports = { songRouter }