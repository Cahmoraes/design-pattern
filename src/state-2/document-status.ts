import { Document } from './document'
export type StatusType = 'draft' | 'published' | 'rejected'
export abstract class DocumentStatus {
  protected _document: Document
  protected abstract _status: StatusType

  constructor(document: Document) {
    this._document = document
  }

  get status() {
    return this._status
  }

  public abstract draft(): void

  public abstract publish(): void
  public abstract reject(): void
}

export class DocumentDraft extends DocumentStatus {
  protected _status: StatusType = 'draft'

  public draft(): void {
    throw new Error('Document is already in draft state')
  }

  public publish(): void {
    this._document.transitionStateTo('published')
  }

  public reject(): void {
    this._document.transitionStateTo('rejected')
  }
}

export class DocumentPublished extends DocumentStatus {
  protected _status: StatusType = 'published'

  public draft(): void {
    throw new Error('Cant draft published document')
  }

  public publish(): void {
    throw new Error('Document is already in published state')
  }

  public reject(): void {
    throw new Error("Can't reject")
  }
}

export class DocumentRejected extends DocumentStatus {
  protected _status: StatusType = 'rejected'

  public draft(): void {
    this._document.transitionStateTo('draft')
  }

  public publish(): void {
    throw new Error("Can't reject")
  }

  public reject(): void {
    throw new Error("Can't reject")
  }
}
