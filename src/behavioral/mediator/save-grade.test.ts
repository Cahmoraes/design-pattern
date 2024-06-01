import { AverageRepositoryMemory } from './average-repository'
import { CalculateAverage } from './calculate-average'
import { GetAverage } from './get-average'
import { GradeRepositoryMemory } from './grade-repository'
import { Mediator } from './mediator'
import { SaveGrade } from './save-grade'
import { SaveGradeMediator } from './save-grade-mediator'

test('Deve salvar a nota do aluno e calcular a média', async () => {
  const studentId = Math.round(Math.random() * 1000000)
  const gradeRepository = new GradeRepositoryMemory()
  const averageRepository = new AverageRepositoryMemory()
  const calculateAverage = new CalculateAverage(
    gradeRepository,
    averageRepository,
  )
  const saveGrade = new SaveGrade(gradeRepository, calculateAverage)
  const inputP1 = {
    studentId,
    exam: 'P1',
    value: 10,
  }
  await saveGrade.execute(inputP1)
  const inputP2 = {
    studentId,
    exam: 'P2',
    value: 9,
  }
  await saveGrade.execute(inputP2)
  const inputP3 = {
    studentId,
    exam: 'P2',
    value: 8,
  }
  await saveGrade.execute(inputP3)
  const getAverage = new GetAverage(averageRepository)
  const output = await getAverage.execute(studentId)
  expect(output.average).toBe(9)
})

test('Deve salvar a nota do aluno e calcular a média usando mediator', async () => {
  const studentId = Math.round(Math.random() * 1000000)
  const gradeRepository = new GradeRepositoryMemory()
  const averageRepository = new AverageRepositoryMemory()
  const calculateAverage = new CalculateAverage(
    gradeRepository,
    averageRepository,
  )
  const mediator = new Mediator()
  mediator.register('gradeSaved', async (data: any) => {
    await calculateAverage.execute(data.studentId)
  })
  const saveGrade = new SaveGradeMediator(gradeRepository, mediator)
  const inputP1 = {
    studentId,
    exam: 'P1',
    value: 10,
  }
  await saveGrade.execute(inputP1)
  const inputP2 = {
    studentId,
    exam: 'P2',
    value: 9,
  }
  await saveGrade.execute(inputP2)
  const inputP3 = {
    studentId,
    exam: 'P2',
    value: 8,
  }
  await saveGrade.execute(inputP3)
  const getAverage = new GetAverage(averageRepository)
  const output = await getAverage.execute(studentId)
  expect(output.average).toBe(9)
})
