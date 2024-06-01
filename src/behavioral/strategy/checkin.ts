import { ParkingTicket } from './parking-ticket'
import { ParkingTicketRepository } from './parking-ticket-repository'

export interface CheckinInput {
  plate: string
  checkInDate: Date
  location: string
}

export class Checkin {
  constructor(readonly parkingTicketRepository: ParkingTicketRepository) {}

  async execute(input: CheckinInput) {
    const existingTicket = await this.parkingTicketRepository.getByPlate(
      input.plate,
    )
    if (existingTicket) throw new Error('Duplicated plate')
    const parkingTicket = new ParkingTicket(
      input.plate,
      input.checkInDate,
      input.location,
    )
    await this.parkingTicketRepository.save(parkingTicket)
  }
}
