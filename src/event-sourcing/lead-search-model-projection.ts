import {
  ContactDetailsUpdated,
  type DomainEventType,
  type LeadInitialized,
} from './events/event'

export class LeadSearchModelProjection {
  public leadId?: string
  public firstNames = new Set<string>()
  public lastNames = new Set<string>()
  public phoneNumbers = new Set<string>()
  public version = 0

  public apply(domainEvent: DomainEventType) {
    switch (domainEvent.eventType) {
      case 'LEAD_INITIALIZED':
        return this.handleLeadInitialized(domainEvent)
      case 'CONTACTED':
        return this.handleContacted()
      case 'CONTACT_DETAILS_UPDATED':
        return this.handleContactDetailsChanged(domainEvent)
      case 'ORDER_SUBMITTED':
        return this.handleOrderSubmitted()
      case 'FALLOW_UP_SET':
        return this.handleFallowUpSet()
      case 'PAYMENT_CONFIRMED':
        return this.handlePaymentConfirmed()
    }
  }

  private handleLeadInitialized(domainEvent: LeadInitialized) {
    this.leadId = domainEvent.leadId
    this.version = domainEvent.eventId
    this.firstNames.add(domainEvent.firstName)
    this.lastNames.add(domainEvent.lastName)
    this.phoneNumbers.add(domainEvent.phoneNumber)
  }

  private handleContacted() {
    this.version += 1
  }

  private handleContactDetailsChanged(domainEvent: ContactDetailsUpdated) {
    this.firstNames.add(domainEvent.firstName)
    this.lastNames.add(domainEvent.lastName)
    this.phoneNumbers.add(domainEvent.phoneNumber)
    this.version += 1
  }

  private handleOrderSubmitted() {
    this.version += 1
  }

  private handleFallowUpSet() {
    this.version += 1
  }

  private handlePaymentConfirmed() {
    this.version += 1
  }
}
