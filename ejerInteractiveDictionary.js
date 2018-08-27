class Dictionary {
  constructor() {
    this.entries = {};
  }

  newEntry(key, value) {
    this.entries[key] = value;
  }

  look(key) {
    if (this.entries[key] === undefined) {
      return `Can't find entry for ${key}`;
    }

    return this.entries[key];
  }
}