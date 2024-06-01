export class InvalidAgeError extends Error {
  constructor(age: number) {
    super(`Invalid age ${age}`)
    this.name = 'InvalidAgeError'
  }
}
