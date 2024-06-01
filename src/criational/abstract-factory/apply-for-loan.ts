import { InstallmentRepository } from './installment-repository'
import { LoanFactory } from './loan-factory'
import { LoanRepository } from './loan-repository'
import { RepositoryFactory } from './repository-factory'

export interface ApplyForLoanInput {
  amount: number
  income: number
  installments: number
}

export interface ApplyForLoanOutput {
  loanId: string
}

export class ApplyForLoan {
  private readonly loanRepository: LoanRepository
  private readonly installmentRepository: InstallmentRepository

  constructor(
    readonly repositoryFactory: RepositoryFactory,
    readonly loanFactory: LoanFactory,
  ) {
    this.loanRepository = repositoryFactory.createLoanRepository()
    this.installmentRepository = repositoryFactory.createInstallmentRepository()
  }

  async execute(input: ApplyForLoanInput): Promise<ApplyForLoanOutput> {
    const loan = this.loanFactory.createLoan(
      input.amount,
      input.income,
      input.installments,
    )
    const installmentCalculator = this.loanFactory.createInstallmentCalculator()
    const installments = installmentCalculator.calculate(loan)
    await this.loanRepository.save(loan)
    for (const installment of installments) {
      await this.installmentRepository.save(installment)
    }
    return {
      loanId: loan.loanId,
    }
  }
}
