class SongBuilder {
  // mongoose filter
  filter = {};

  /**
   * sets the document limit
   * @param {int} limit
   * @returns FilterHelper
   */
  setTitle(title) {
    if (title) {
      this.filter.title = { $regex: title, $options: "i" };
    }
    return this;
  }

  /**
   * sets the document limit
   * @param {int} limit
   * @returns FilterHelper
   */
  setArtist(artist) {
    if (artist) {
      this.filter.artist = { $regex: artist, $options: "i" };
    }
    return this;
  }

  /**
   * return the filter object
   * @returns object
   */
  build() {
    return this.filter;
  }
}

module.exports = SongBuilder;
