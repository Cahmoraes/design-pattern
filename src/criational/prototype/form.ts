import { Field } from './field'
import { Prototype } from './prototype'

export class Form implements Prototype {
  fields: Field[] = []

  constructor(
    public formId: string,
    public category: string,
    public description: string,
  ) {}

  addField(type: string, title: string): void {
    this.fields.push(Field.create(type, title))
  }

  clone(): Form {
    const newForm = new Form(this.formId, this.category, this.description)
    const fields: Field[] = []
    for (const field of this.fields) {
      fields.push(field.clone())
    }
    newForm.fields = fields
    return newForm
  }
}
