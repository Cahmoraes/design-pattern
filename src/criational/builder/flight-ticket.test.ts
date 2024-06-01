import { FlightTicket } from './flight-ticket'
import { FlightBuilder } from './flight-ticket-builder'

test('Deve criar uma passagem aérea', () => {
  const builder = new FlightBuilder()
  builder
    .setFlight('Azul', '9876')
    .setTrip('FLN', 'GRU')
    .setPassenger('John Doe', 'john.doe@email.com', '111.111.111-11', 'M')
    .setEmergencyContact('Bob Simpson', '5511999999999')
    .setCheckinInformation(true, '1', '4A')
    .setPriority(5)
  const flightTicket = new FlightTicket(builder)
  expect(flightTicket.passengerName).toBe('John Doe')
  expect(flightTicket.passengerEmail).toBe('john.doe@email.com')
  expect(flightTicket.passengerDocument).toBe('111.111.111-11')
})
