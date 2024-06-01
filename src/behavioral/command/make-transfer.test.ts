import { BankAccount } from './bank-account'
import { BankAccountRepositoryMemory } from './bank-account-repository'
import { GetBalance } from './get-balance'
import { MakeTransfer } from './make-transfer'

test('Deve fazer uma transferência bancária', async () => {
  const bankAccountRepository = new BankAccountRepositoryMemory()
  await bankAccountRepository.save(new BankAccount(1))
  await bankAccountRepository.save(new BankAccount(2))
  const makeTransfer = new MakeTransfer(bankAccountRepository)
  const input = {
    fromBankAccountId: 1,
    toBankAccountId: 2,
    amount: 100,
  }
  await makeTransfer.execute(input)
  const getBalance = new GetBalance(bankAccountRepository)
  const outputA = await getBalance.execute(1)
  expect(outputA.balance).toBe(-100)
  const outputB = await getBalance.execute(2)
  expect(outputB.balance).toBe(100)
})
