import type { UserRepository } from '../repositories/user-repository'

export interface GetUserUseCaseInput {
  id: string
}

export interface GetUserUseCaseOutput {
  id: string
  firstName: string
  lastName: string
  age: number
}

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: GetUserUseCaseInput): Promise<GetUserUseCaseOutput> {
    const user = await this.userRepository.userById(input.id)
    return {
      id: user.id,
      firstName: user.name.firstName,
      lastName: user.name.lastName,
      age: user.age,
    }
  }
}
