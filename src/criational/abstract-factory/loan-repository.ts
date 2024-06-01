import { Loan } from './loan'

export interface LoanRepository {
  save(loan: Loan): Promise<void>
  getById(loanId: string): Promise<Loan>
}

export class LoanRepositoryMemory implements LoanRepository {
  loans: Loan[] = []
  static instance: LoanRepositoryMemory

  private constructor() {}

  static getInstance() {
    if (!LoanRepositoryMemory.instance) {
      LoanRepositoryMemory.instance = new LoanRepositoryMemory()
    }
    return LoanRepositoryMemory.instance
  }

  async save(loan: Loan): Promise<void> {
    this.loans.push(loan)
  }

  async getById(loanId: string): Promise<Loan> {
    const loan = this.loans.find((loan) => loan.loanId === loanId)
    if (!loan) throw new Error('Loan not found')
    return loan
  }
}
