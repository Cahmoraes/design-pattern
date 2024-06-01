import { Grade } from './grade'
import { GradeRepository } from './grade-repository'
import { Mediator } from './mediator'

export interface SaveGradeInput {
  studentId: number
  exam: string
  value: number
}

export class SaveGradeMediator {
  constructor(
    readonly gradeRepository: GradeRepository,
    readonly mediator: Mediator,
  ) {}

  async execute(input: SaveGradeInput): Promise<void> {
    const grade = new Grade(input.studentId, input.exam, input.value)
    await this.gradeRepository.save(grade)
    await this.mediator.notify('gradeSaved', { studentId: input.studentId })
  }
}
