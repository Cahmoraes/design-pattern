import { User } from '../entities/user/user'
import type { UserRepository } from '../repositories/user-repository'

export interface CreateUserUseCaseInput {
  id?: string
  firstName: string
  lastName: string
  age: number
}

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserUseCaseInput) {
    const user = User.create(input)
    await this.userRepository.save(user)
  }
}
