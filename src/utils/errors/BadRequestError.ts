export class BadUserInputError extends Error {
  constructor(message: string) {
    super(message);
  }
}
