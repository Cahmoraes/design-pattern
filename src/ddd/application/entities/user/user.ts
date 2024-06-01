import { ChangeAgeCommand } from './commands/change-age-command'
import { ChangeNameCommand } from './commands/change-name-command'
import { Age } from './value-objects/age'
import { Name } from './value-objects/name'
import { PersonId } from './value-objects/person-id'

export interface CreateUserProps {
  id?: string
  firstName: string
  lastName: string
  age: number
}

export interface UserProps {
  id: PersonId
  name: Name
  age: Age
}

export class User {
  private _id: PersonId
  private _name: Name
  private _age: Age

  private constructor(props: UserProps) {
    this._id = props.id
    this._name = props.name
    this._age = props.age
  }

  public static create(props: CreateUserProps) {
    return new User({
      id: PersonId.create(props.id),
      name: Name.create({
        firstName: props.firstName,
        lastName: props.lastName,
      }),
      age: Age.create(props.age),
    })
  }

  public static restore(props: UserProps) {
    return new User(props)
  }

  get id() {
    return this._id.toString()
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age.value
  }

  execute(cmd: ChangeNameCommand): void
  execute(cmd: ChangeAgeCommand): void
  execute(cmd: unknown): void {
    if (cmd instanceof ChangeNameCommand) this.changeName(cmd)
    if (cmd instanceof ChangeAgeCommand) this.changeAge(cmd)
  }

  private changeName(cmd: ChangeNameCommand) {
    this._name = Name.create({
      firstName: cmd.firstName,
      lastName: cmd.lastName,
    })
  }

  private changeAge(cmd: ChangeAgeCommand) {
    this._age = Age.create(cmd.newAge)
  }
}
