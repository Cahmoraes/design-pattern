export type DomainEventType =
  | LeadInitialized
  | Contacted
  | PaymentConfirmed
  | ContactDetailsUpdated
  | FollowUpSet
  | OrderSubmitted

const eventType = {
  'lead-initialized': 'LEAD_INITIALIZED',
  contacted: 'CONTACTED',
  'follow-up-set': 'FALLOW_UP_SET',
  'contact-details-updated': 'CONTACT_DETAILS_UPDATED',
  'order-submitted': 'ORDER_SUBMITTED',
  'payment-confirmed': 'PAYMENT_CONFIRMED',
} as const

export type EventType = (typeof eventType)[keyof typeof eventType]

export interface DomainEvent {
  leadId: string
  eventId: number
  eventType: EventType
  timeStamp: Date
}

interface LeadInitializedDomainEvent extends Omit<DomainEvent, 'eventType'> {
  firstName: string
  lastName: string
  phoneNumber: string
}

export class LeadInitialized
  implements Omit<LeadInitializedDomainEvent, 'eventType'>
{
  readonly eventType = eventType['lead-initialized']
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date
  readonly firstName: string
  readonly lastName: string
  readonly phoneNumber: string

  constructor(props: LeadInitializedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.phoneNumber = props.phoneNumber
  }
}

export interface ContactedDomainEvent extends Omit<DomainEvent, 'eventType'> {}

export class Contacted implements ContactedDomainEvent {
  readonly eventType = eventType.contacted
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date

  constructor(props: ContactedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
  }
}

export interface PaymentConfirmedDomainEvent
  extends Omit<DomainEvent, 'eventType'> {
  status: string
}

export class PaymentConfirmed
  implements Omit<PaymentConfirmedDomainEvent, 'eventType'>
{
  readonly eventType = eventType['payment-confirmed']
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date
  readonly status: string

  constructor(props: PaymentConfirmedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
    this.status = props.status
  }
}

interface ContactDetailsUpdatedDomainEvent
  extends Omit<DomainEvent, 'eventType'> {
  firstName: string
  lastName: string
  phoneNumber: string
}

export class ContactDetailsUpdated
  implements Omit<ContactDetailsUpdatedDomainEvent, 'eventType'>
{
  readonly eventType = eventType['contact-details-updated']
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date
  readonly firstName: string
  readonly lastName: string
  readonly phoneNumber: string

  constructor(props: LeadInitializedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.phoneNumber = props.phoneNumber
  }
}

export class FollowUpSet implements Omit<DomainEvent, 'eventType'> {
  readonly eventType = eventType['follow-up-set']
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date

  constructor(props: ContactedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
  }
}

interface OrderSubmittedDomainEvent extends Omit<DomainEvent, 'eventType'> {
  paymentDeadline: Date
}

export class OrderSubmitted implements OrderSubmittedDomainEvent {
  readonly eventType = eventType['order-submitted']
  readonly leadId: string
  readonly eventId: number
  readonly timeStamp: Date
  readonly paymentDeadline: Date

  constructor(props: OrderSubmittedDomainEvent) {
    this.leadId = props.leadId
    this.eventId = props.eventId
    this.timeStamp = props.timeStamp
    this.paymentDeadline = props.paymentDeadline
  }
}
