import { CalculateAverage } from './calculate-average'
import { Grade } from './grade'
import { GradeRepository } from './grade-repository'

export interface SaveGradeInput {
  studentId: number
  exam: string
  value: number
}

export class SaveGrade {
  constructor(
    readonly gradeRepository: GradeRepository,
    readonly calculateAverage: CalculateAverage,
  ) {}

  async execute(input: SaveGradeInput): Promise<void> {
    const grade = new Grade(input.studentId, input.exam, input.value)
    await this.gradeRepository.save(grade)
    await this.calculateAverage.execute(input.studentId)
  }
}
