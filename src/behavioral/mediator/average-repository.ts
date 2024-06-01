import { Average } from './average'

export interface AverageRepository {
  save(average: Average): Promise<void>
  getByStudentId(studentId: number): Promise<Average>
}

export class AverageRepositoryMemory implements AverageRepository {
  public averages: Average[] = []
  private static instance: AverageRepositoryMemory

  public static getInstance() {
    if (!AverageRepositoryMemory.instance) {
      AverageRepositoryMemory.instance = new AverageRepositoryMemory()
    }
    return AverageRepositoryMemory.instance
  }

  async save(average: Average): Promise<void> {
    this.deleteAverage(average)
    this.averages.push(average)
  }

  private deleteAverage(averageToRemove: Average) {
    const index = this.averages.findIndex(
      (average) => average.studentId === averageToRemove.studentId,
    )
    this.averages.splice(index, 1)
  }

  async getByStudentId(studentId: number): Promise<Average> {
    const average = this.averages.find(
      (average) => average.studentId === studentId,
    )
    if (!average) throw new Error('Average not found')
    return average
  }
}
