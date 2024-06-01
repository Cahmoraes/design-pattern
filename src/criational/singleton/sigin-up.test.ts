import { Login } from './login'
import { SignUp } from './sign-up'

test('Deve criar uma conta de usuário', async () => {
  const signUp = new SignUp()
  const login = new Login()
  const inputSignUp = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    password: '123456',
  }
  await signUp.execute(inputSignUp)

  const inputLogin = {
    email: 'john.doe@email.com',
    password: '123456',
  }
  const outputLogin = await login.execute(inputLogin)
  expect(outputLogin.success).toBe(true)
})
