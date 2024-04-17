const httpStatus = require("http-status");

async function handleResponse(promise, res) {
    try {
        const result = await promise;
        res.status(200).json({ data: result });
    } catch (error) {
        const statusCode = error?.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
        const message = error?.message || 'Internal Server Error';
        res.status(statusCode).json({ message });
    }
}

module.exports = { handleResponse };