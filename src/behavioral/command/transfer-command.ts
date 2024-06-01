import { BankAccount } from './bank-account'
import { Command } from './command'

export class TransferCommand implements Command {
  constructor(
    readonly from: BankAccount,
    readonly to: BankAccount,
    readonly amount: number,
  ) {}

  execute(): void {
    this.from.debit(this.amount)
    this.to.credit(this.amount)
  }
}
