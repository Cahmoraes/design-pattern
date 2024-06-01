import type { User } from '../entities/user/user'

export interface UserRepository {
  userById(id: string): Promise<User>
  save(user: User): Promise<void>
  update(user: User): Promise<void>
  delete(user: User): Promise<void>
}
