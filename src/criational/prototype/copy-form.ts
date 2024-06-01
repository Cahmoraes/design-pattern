import { FormRepository } from './form-repository'

export interface InputCopyForm {
  fromFormId: string
  newFormId: string
  newCategory: string
  newDescription: string
}

export class CopyForm {
  constructor(readonly formRepository: FormRepository) {}

  async execute(input: InputCopyForm) {
    const form = await this.formRepository.getById(input.fromFormId)
    const newForm = form.clone()
    newForm.formId = input.newFormId
    newForm.category = input.newCategory
    newForm.description = input.newDescription
    await this.formRepository.save(newForm)
  }
}
