import { Grade } from './grade'

export interface GradeRepository {
  save(grade: Grade): Promise<void>
  listByStudentId(studentId: number): Promise<Grade[]>
}

export class GradeRepositoryMemory implements GradeRepository {
  public grades: Grade[] = []
  private static instance: GradeRepositoryMemory

  async save(grade: Grade): Promise<void> {
    this.grades.push(grade)
  }

  async listByStudentId(studentId: number): Promise<Grade[]> {
    return this.grades.filter((grade) => grade.studentId === studentId)
  }

  public static getInstance(): GradeRepositoryMemory {
    if (!GradeRepositoryMemory.instance) {
      GradeRepositoryMemory.instance = new GradeRepositoryMemory()
    }
    return GradeRepositoryMemory.instance
  }
}
