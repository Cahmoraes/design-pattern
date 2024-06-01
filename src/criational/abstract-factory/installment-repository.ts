import { Installment } from './installment'

export interface InstallmentRepository {
  save(installment: Installment): Promise<void>
  listByLoanId(loanIn: string): Promise<Installment[]>
}

export class InstallmentRepositoryMemory implements InstallmentRepository {
  installments: Installment[] = []
  static instance: InstallmentRepositoryMemory

  private constructor() {}

  static getInstance() {
    if (!InstallmentRepositoryMemory.instance) {
      InstallmentRepositoryMemory.instance = new InstallmentRepositoryMemory()
    }
    return InstallmentRepositoryMemory.instance
  }

  async save(installment: Installment): Promise<void> {
    this.installments.push(installment)
  }

  async listByLoanId(loanIn: string): Promise<Installment[]> {
    return this.installments.filter(
      (installment) => installment.loanId === loanIn,
    )
  }
}
