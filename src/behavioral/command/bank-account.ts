import { Transaction } from './transaction'

export class BankAccount {
  public transactions: Transaction[] = []

  constructor(readonly bankAccountId: number) {}

  debit(amount: number) {
    this.transactions.push(new Transaction('debit', amount))
  }

  credit(amount: number) {
    this.transactions.push(new Transaction('credit', amount))
  }

  getBalance() {
    let total = 0
    for (const transaction of this.transactions) {
      if (transaction.type === 'credit') total += transaction.amount
      if (transaction.type === 'debit') total -= transaction.amount
    }
    return total
  }
}
