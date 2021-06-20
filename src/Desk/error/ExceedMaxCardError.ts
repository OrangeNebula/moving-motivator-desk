export class ExceedMaxCardError extends Error {
  constructor() {
    super('Exceed maximum card count.');
  }
}
