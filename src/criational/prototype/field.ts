import { randomUUID } from 'node:crypto'

import { Prototype } from './prototype'

export class Field implements Prototype {
  private constructor(
    readonly fieldId: string,
    readonly type: string,
    readonly title: string,
  ) {}

  static create(type: string, title: string) {
    const fieldId = randomUUID()
    return new Field(fieldId, type, title)
  }

  public clone(): Field {
    return new Field(this.fieldId, this.type, this.title)
  }
}
