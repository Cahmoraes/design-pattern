import { AverageRepository } from './average-repository'

export interface GetAverageOutput {
  average: number
}

export class GetAverage {
  constructor(readonly averageRepository: AverageRepository) {}

  async execute(studentId: number): Promise<GetAverageOutput> {
    const average = await this.averageRepository.getByStudentId(studentId)
    return {
      average: average.value,
    }
  }
}
