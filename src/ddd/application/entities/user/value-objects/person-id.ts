import { randomUUID } from 'node:crypto'

export class PersonId {
  private readonly _value: string

  private constructor(aSting: string) {
    this._value = aSting
  }

  public static create(anIdOrUndefined?: string) {
    const id = anIdOrUndefined ?? randomUUID()
    return new PersonId(id)
  }

  public static restore(aString: string) {
    return new PersonId(aString)
  }

  get value() {
    return this._value
  }

  public toString() {
    return this.value
  }

  public equals(other: object) {
    if (!(other instanceof PersonId)) return false
    return this._value === other._value
  }
}
