import type { User } from './user'

export interface UserRepository {
  save(user: User): Promise<void>
  getByEmail(email: string): Promise<User | undefined>
}

export class UserRepositoryMemory implements UserRepository {
  users: User[]
  static instance: UserRepositoryMemory

  private constructor() {
    this.users = []
  }

  public static getInstance(): UserRepositoryMemory {
    if (!UserRepositoryMemory.instance) {
      UserRepositoryMemory.instance = new UserRepositoryMemory()
    }
    return UserRepositoryMemory.instance
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }

  async getByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email)
    if (!user) return undefined
    return user
  }
}
