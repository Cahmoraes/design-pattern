import { CopyForm, InputCopyForm } from './copy-form'
import { Form } from './form'
import { FormRepositoryMemory } from './form-repository'

test('Deve copiar um formulário', async () => {
  const formRepository = new FormRepositoryMemory()
  const form = new Form('1', 'Marketing', 'Leads v1')
  form.addField('text', 'name')
  form.addField('text', 'email')
  await formRepository.save(form)
  const copyForm = new CopyForm(formRepository)
  const input: InputCopyForm = {
    fromFormId: '1',
    newFormId: '2',
    newCategory: 'Marketing',
    newDescription: 'Leads v2',
  }
  await copyForm.execute(input)
  const newForm = await formRepository.getById('2')
  expect(newForm.category).toBe('Marketing')
  expect(newForm.description).toBe('Leads v2')
  expect(newForm.fields).toHaveLength(2)
  expect(newForm.fields.at(0)?.title).toBe('name')
  expect(newForm.fields.at(1)?.title).toBe('email')
})
