import { ChangeAgeCommand } from '../entities/user/commands/change-age-command'
import type { UserRepository } from '../repositories/user-repository'

export interface ChangeAgeUseCaseInput {
  id: string
  age: number
}

export class ChangeAgeUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: ChangeAgeUseCaseInput) {
    const user = await this.userRepository.userById(input.id)
    const changeNameCommand = new ChangeAgeCommand(input.age)
    user.execute(changeNameCommand)
    await this.userRepository.update(user)
  }
}
