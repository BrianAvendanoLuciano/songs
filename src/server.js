const app = require('./app')
const { APP_REFERENCE } = require('./constants/common');
const { logger } = require('./utils/logger');

app.listen(APP_REFERENCE.PORT, () => {
    logger.info(`API is running on port: ${APP_REFERENCE.PORT}`)
})