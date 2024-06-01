import { InvalidAgeError } from '../errors/invalid-age-error'

export class Age {
  private readonly _value: number

  private constructor(value: number) {
    this._value = value
  }

  public static create(aNumber: number) {
    if (aNumber < 0) throw new InvalidAgeError(aNumber)
    return new Age(aNumber)
  }

  public static restore(aNumber: number) {
    return new Age(aNumber)
  }

  get value(): number {
    return this._value
  }

  public equals(other: object) {
    if (!(other instanceof Age)) return false
    return this._value === other._value
  }
}
