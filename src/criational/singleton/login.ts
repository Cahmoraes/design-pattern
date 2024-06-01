import { type UserRepository, UserRepositoryMemory } from './user-repository'

export interface LoginInput {
  email: string
  password: string
}

export interface LoginOutput {
  email: string
  password: string
}

export class Login {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = UserRepositoryMemory.getInstance()
  }

  async execute(input: LoginInput) {
    const user = await this.userRepository.getByEmail(input.email)
    let success = false
    if (user && user.passwordMatches(input.password)) {
      success = true
    }
    return {
      success,
    }
  }
}
