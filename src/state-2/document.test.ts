import { Document } from './document'

let document: Document

beforeEach(() => {
  document = new Document()
})

test('Deve criar um documento de rascunho', () => {
  expect(document.status).toBe('draft')
})

test('Deve transitar o documento para publicado', () => {
  document.publish()
  expect(document.status).toBe('published')
})

test('Não deve transitar um documento rejeitado para publicado', () => {
  document.publish()
  expect(document.status).toBe('published')
  expect(() => document.reject()).toThrow(new Error("Can't reject"))
})

test('Deve transitar um documento rejeitado para rascunho', () => {
  document.reject()
  expect(document.status).toBe('rejected')
  document.draft()
  expect(document.status).toBe('draft')
})
