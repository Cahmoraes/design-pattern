import { ChangeNameCommand } from '../entities/user/commands/change-name-command'
import type { UserRepository } from '../repositories/user-repository'

export interface ChangeNameUseCaseInput {
  id: string
  firstName: string
  lastName: string
}

export class ChangeNameUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: ChangeNameUseCaseInput) {
    const user = await this.userRepository.userById(input.id)
    const changeNameCommand = new ChangeNameCommand(
      input.firstName,
      input.lastName,
    )
    user.execute(changeNameCommand)
    await this.userRepository.update(user)
  }
}
