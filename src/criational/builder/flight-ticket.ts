import { FlightBuilder } from './flight-ticket-builder'

export class FlightTicket {
  airline: string
  flightCode: string
  fromAirport: string
  toAirport: string
  passengerName: string
  passengerEmail: string
  passengerDocument: string
  passengerGender: string
  emergencyContactName: string
  emergencyContactTelephone: string
  seat: string
  checkedBags: number
  hasCheckin: boolean
  terminal: string
  gate: string
  priority: number

  constructor(flightBuilder: FlightBuilder) {
    this.airline = flightBuilder.airline
    this.fromAirport = flightBuilder.fromAirport
    this.toAirport = flightBuilder.toAirport
    this.flightCode = flightBuilder.flightCode
    this.passengerName = flightBuilder.passengerName
    this.passengerEmail = flightBuilder.passengerEmail
    this.passengerDocument = flightBuilder.passengerDocument
    this.passengerGender = flightBuilder.passengerGender
    this.emergencyContactName = flightBuilder.emergencyContactName
    this.emergencyContactTelephone = flightBuilder.emergencyContactTelephone
    this.seat = flightBuilder.seat
    this.checkedBags = flightBuilder.checkedBags
    this.hasCheckin = flightBuilder.hasCheckin
    this.terminal = flightBuilder.terminal
    this.gate = flightBuilder.gate
    this.priority = flightBuilder.priority
  }
}
