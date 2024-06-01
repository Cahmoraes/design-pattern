import {
  DocumentDraft,
  DocumentPublished,
  DocumentRejected,
  DocumentStatus,
  StatusType,
} from './document-status'

export class Document {
  private _status: DocumentStatus

  constructor() {
    this._status = new DocumentDraft(this)
  }

  get status(): StatusType {
    return this._status.status
  }

  public transitionStateTo(status: StatusType) {
    switch (status) {
      case 'draft':
        this._status = new DocumentDraft(this)
        break
      case 'published':
        this._status = new DocumentPublished(this)
        break
      case 'rejected':
        this._status = new DocumentRejected(this)
        break
      default:
        throw new Error('Invalid status')
    }
  }

  public draft() {
    this._status.draft()
  }

  public publish() {
    this._status.publish()
  }

  public reject() {
    this._status.reject()
  }
}
