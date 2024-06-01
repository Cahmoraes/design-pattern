export interface CreatePersonProps {
  firstName: string
  lastName: string
}

export class Name {
  private readonly _firstName: string
  private readonly _lastName: string

  private constructor(props: CreatePersonProps) {
    this._firstName = props.firstName
    this._lastName = props.lastName
  }

  public static create(props: CreatePersonProps) {
    return new Name(props)
  }

  public get firstName() {
    return this._firstName
  }

  public get lastName() {
    return this._lastName
  }

  public get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  public equals(other: object) {
    if (!(other instanceof Name)) return false
    return (
      this._firstName === other._firstName && this._lastName === other._lastName
    )
  }
}
