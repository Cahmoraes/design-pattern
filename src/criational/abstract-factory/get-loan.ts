import { InstallmentRepository } from './installment-repository'
import { LoanRepository } from './loan-repository'
import { RepositoryFactory } from './repository-factory'

export interface GetLoanInput {
  loanId: string
}

export interface GetLoanOutput {
  amount: number
  income: number
  installments: {
    number: number
    amount: number
    amortization: number
    interest: number
    balance: number
  }[]
}

export class GetLoan {
  readonly loanRepository: LoanRepository
  readonly installmentRepository: InstallmentRepository

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.loanRepository = repositoryFactory.createLoanRepository()
    this.installmentRepository = repositoryFactory.createInstallmentRepository()
  }

  async execute(input: GetLoanInput): Promise<GetLoanOutput> {
    const loan = await this.loanRepository.getById(input.loanId)
    const installments = await this.installmentRepository.listByLoanId(
      input.loanId,
    )
    const output: GetLoanOutput = {
      amount: loan.amount,
      income: loan.income,
      installments: [],
    }
    for (const installment of installments) {
      output.installments.push({
        number: installment.number,
        amount: installment.amount,
        amortization: installment.amortization,
        interest: installment.interest,
        balance: installment.balance,
      })
    }
    return output
  }
}
