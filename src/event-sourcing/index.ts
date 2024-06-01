import {
  ContactDetailsUpdated,
  Contacted,
  FollowUpSet,
  LeadInitialized,
  OrderSubmitted,
  PaymentConfirmed,
} from './events/event'
import { LeadSearchModelProjection } from './lead-search-model-projection'

const leadSearchModelProjection = new LeadSearchModelProjection()
const leadInitialized = new LeadInitialized({
  eventId: 0,
  leadId: '1',
  firstName: 'Casey',
  lastName: 'David',
  phoneNumber: '555-2951',
  timeStamp: new Date(),
})

console.log(leadSearchModelProjection)

leadSearchModelProjection.apply(leadInitialized)
console.log(leadSearchModelProjection)

const firstContacted = new Contacted({
  eventId: 1,
  leadId: '1',
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(firstContacted)
console.log(leadSearchModelProjection)

const followUpSet = new FollowUpSet({
  eventId: 2,
  leadId: '1',
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(followUpSet)
console.log(leadSearchModelProjection)

const contactDetailsUpdated = new ContactDetailsUpdated({
  leadId: '1',
  eventId: 3,
  firstName: 'Casey',
  lastName: 'Davis',
  phoneNumber: '555-8001',
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(contactDetailsUpdated)
console.log(leadSearchModelProjection)

const secondContacted = new Contacted({
  leadId: '1',
  eventId: 4,
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(secondContacted)
console.log(leadSearchModelProjection)

const orderSubmitted = new OrderSubmitted({
  leadId: '1',
  eventId: 5,
  paymentDeadline: new Date(new Date().getDate() + 7),
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(orderSubmitted)
console.log(leadSearchModelProjection)

const paymentConfirmed = new PaymentConfirmed({
  leadId: '1',
  eventId: 6,
  status: 'converted',
  timeStamp: new Date(),
})

leadSearchModelProjection.apply(paymentConfirmed)
console.log(leadSearchModelProjection)
