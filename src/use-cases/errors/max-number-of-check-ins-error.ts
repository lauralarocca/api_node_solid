export class MaxNumberOfCheckInsError extends Error {
  constructor() {
    super('Maxx number of check-ins reached.')
  }
}
