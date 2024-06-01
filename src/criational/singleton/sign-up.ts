import { User } from './user'
import { type UserRepository, UserRepositoryMemory } from './user-repository'

export interface SignUpInput {
  name: string
  email: string
  password: string
}

export class SignUp {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = UserRepositoryMemory.getInstance()
  }

  async execute(input: SignUpInput) {
    const user = User.create(input.name, input.email, input.password)
    await this.userRepository.save(user)
  }
}
