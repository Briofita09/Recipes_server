export default class InvalidIdError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}
