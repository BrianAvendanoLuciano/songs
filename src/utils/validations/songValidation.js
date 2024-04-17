const Joi = require('joi');

const validateGetAllSongs = Joi.object().keys({
    title: Joi.string().allow('').optional(),
    artist: Joi.string().allow('').optional(),
})

const validateCreateSong = Joi.object().keys({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    releaseDate: Joi.date().iso().required(),
    duration: Joi.string().required(),
})

module.exports = { 
    validateGetAllSongs,
    validateCreateSong,
}