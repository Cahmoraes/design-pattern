import type { User } from '../../application/entities/user/user'
import type { UserRepository } from '../../application/repositories/user-repository'

export class UserRepositoryMemory implements UserRepository {
  public users: User[] = []

  async userById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)
    if (!user) throw new Error('User not found.')
    return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }

  async update(user: User): Promise<void> {
    const userToUpdate = this.users.find(
      (userToUpdate) => user.id === userToUpdate.id,
    )
    if (!userToUpdate) throw new Error('User not found.')
    Object.assign(userToUpdate, user)
  }

  async delete(user: User): Promise<void> {
    const indexUserToDelete = this.users.findIndex(
      (userToDelete) => user.id === userToDelete.id,
    )
    if (indexUserToDelete < 0) throw new Error('User not found.')
    this.users.splice(indexUserToDelete, 1)
  }
}
