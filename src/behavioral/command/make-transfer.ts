import { BankAccountRepository } from './bank-account-repository'
import { TransferCommand } from './transfer-command'

export interface MakeTransferInput {
  fromBankAccountId: number
  toBankAccountId: number
  amount: number
}

export class MakeTransfer {
  constructor(readonly bankAccountRepository: BankAccountRepository) {}

  async execute(input: MakeTransferInput) {
    const from = await this.bankAccountRepository.getById(
      input.fromBankAccountId,
    )
    const to = await this.bankAccountRepository.getById(input.toBankAccountId)
    const transferCommand = new TransferCommand(from, to, input.amount)
    transferCommand.execute()
    await this.bankAccountRepository.update(from)
    await this.bankAccountRepository.update(to)
  }
}
