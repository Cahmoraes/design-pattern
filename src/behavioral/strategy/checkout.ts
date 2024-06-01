import { ParkingTicketRepository } from './parking-ticket-repository'

export interface CheckoutInput {
  plate: string
  checkoutDate: Date
}

export interface CheckoutOutput {
  plate: string
  fare: number
}

export class Checkout {
  constructor(readonly parkingTicketRepository: ParkingTicketRepository) {}

  async execute(input: CheckoutInput): Promise<CheckoutOutput> {
    const parkingTicket = await this.parkingTicketRepository.getByPlate(
      input.plate,
    )
    if (!parkingTicket) throw new Error('Parking ticket not found')
    parkingTicket.checkout(input.checkoutDate)
    await this.parkingTicketRepository.update(parkingTicket)
    return {
      plate: parkingTicket.plate,
      fare: parkingTicket.fare,
    }
  }
}
