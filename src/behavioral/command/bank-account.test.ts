import { BankAccount } from './bank-account'
import { TransferCommand } from './transfer-command'

test('Deve fazer uma transferência entre duas contas', () => {
  const bankAccountA = new BankAccount(1)
  const bankAccountB = new BankAccount(2)
  expect(bankAccountA.getBalance()).toBe(0)
  expect(bankAccountB.getBalance()).toBe(0)
  bankAccountA.debit(100)
  bankAccountB.credit(100)
  expect(bankAccountA.getBalance()).toBe(-100)
  expect(bankAccountB.getBalance()).toBe(100)
})

test('Deve fazer uma transferência entre duas contas usando um comando', () => {
  const from = new BankAccount(1)
  const to = new BankAccount(2)
  expect(from.getBalance()).toBe(0)
  expect(to.getBalance()).toBe(0)
  const transferCommand = new TransferCommand(from, to, 100)
  transferCommand.execute()
  expect(from.getBalance()).toBe(-100)
  expect(to.getBalance()).toBe(100)
})
