export class InvalidCardScoreError extends Error {
  constructor() {
    super('Invalid card score.');
  }
}
