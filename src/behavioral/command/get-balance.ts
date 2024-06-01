import { BankAccountRepository } from './bank-account-repository'

export interface GetBalanceOutput {
  balance: number
}

export class GetBalance {
  constructor(readonly bankAccountRepository: BankAccountRepository) {}

  async execute(bankAccountId: number): Promise<GetBalanceOutput> {
    const bankAccount = await this.bankAccountRepository.getById(bankAccountId)
    return {
      balance: bankAccount.getBalance(),
    }
  }
}
