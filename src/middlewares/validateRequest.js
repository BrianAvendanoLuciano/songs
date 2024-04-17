const Joi = require("joi");

function validateRequest (schema, toValidate = 'query') {
    return (req, res, next) => {
        const { query, body } = req;

        const validationOptions = { errors: { label: 'key' }, abortEarly: false };
        const { error } = toValidate === 'query' ?
            Joi.compile(schema).prefs(validationOptions).validate(query) :
            Joi.compile(schema).prefs(validationOptions).validate(body);

        if (error) {
            const errorMessages = error.details.map(err => err.message).join(', ');
            return res.status(400).json({ errors: errorMessages });
        }

        next();
    };
};

module.exports = {
    validateRequest
};
