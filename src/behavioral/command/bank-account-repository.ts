import { BankAccount } from './bank-account'

export interface BankAccountRepository {
  save(bankAccount: BankAccount): Promise<void>
  update(bankAccount: BankAccount): Promise<void>
  getById(bankAccountId: number): Promise<BankAccount>
}

export class BankAccountRepositoryMemory implements BankAccountRepository {
  bankAccounts: BankAccount[] = []

  async save(bankAccount: BankAccount): Promise<void> {
    this.bankAccounts.push(bankAccount)
  }

  async update(bankAccount: BankAccount): Promise<void> {
    const index = this.bankAccounts.findIndex(
      (existingBankAccount) =>
        existingBankAccount.bankAccountId === bankAccount.bankAccountId,
    )
    this.bankAccounts.splice(index, 1)
    this.bankAccounts.push(bankAccount)
  }

  async getById(bankAccountId: number): Promise<BankAccount> {
    const bankAccount = this.bankAccounts.find(
      (bankAccount) => bankAccount.bankAccountId === bankAccountId,
    )
    if (!bankAccount) throw new Error('Bank account not found')
    return bankAccount
  }
}
