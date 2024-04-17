const BaseError = require("./baseError");

class SongError extends BaseError {
  name = this.constructor.name;

  stack = `Song Error ${this.stack}`;
}

module.exports = SongError;
