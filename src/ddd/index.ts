import { ChangeAgeUseCase } from './application/use-cases/change-age-usecase'
import { ChangeNameUseCase } from './application/use-cases/change-name-usecase'
import { CreateUserUseCase } from './application/use-cases/create-user-usecase'
import { GetUserUseCase } from './application/use-cases/get-user-usecase'
import { UserRepositoryMemory } from './infra/repositories/user-repository-memory'

const userRepository = new UserRepositoryMemory()
const createUserUseCase = new CreateUserUseCase(userRepository)

;(async () => {
  const id = '1'
  await createUserUseCase.execute({
    id,
    age: 30,
    firstName: 'Caique',
    lastName: 'Moraes',
  })

  const getUser = new GetUserUseCase(userRepository)
  let user = await getUser.execute({ id })
  console.log(user)
  const changeNameUseCase = new ChangeNameUseCase(userRepository)
  await changeNameUseCase.execute({
    id,
    firstName: 'Caique Vinícius',
    lastName: 'de Moraes',
  })
  user = await getUser.execute({ id })
  console.log(user)
  const changeAgeUseCase = new ChangeAgeUseCase(userRepository)
  await changeAgeUseCase.execute({ id, age: 31 })
  user = await getUser.execute({ id })
  console.log(user)
})()
