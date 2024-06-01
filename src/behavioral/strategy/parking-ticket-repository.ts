import { ParkingTicket } from './parking-ticket'

export interface ParkingTicketRepository {
  getByPlate(plate: string): Promise<ParkingTicket | undefined>
  save(ticket: ParkingTicket): Promise<void>
  update(ticket: ParkingTicket): Promise<void>
}

export class ParkingTicketRepositoryMemory implements ParkingTicketRepository {
  private static instance: ParkingTicketRepositoryMemory
  public parkingTickets: ParkingTicket[] = []
  private constructor() {}

  static getInstance(): ParkingTicketRepositoryMemory {
    if (!this.instance) {
      this.instance = new ParkingTicketRepositoryMemory()
    }
    return this.instance
  }

  async getByPlate(plate: string): Promise<ParkingTicket | undefined> {
    return (
      this.parkingTickets.find((ticket) => ticket.plate === plate) ?? undefined
    )
  }

  async save(ticket: ParkingTicket): Promise<void> {
    this.parkingTickets.push(ticket)
  }

  async update(ticket: ParkingTicket): Promise<void> {
    const index = this.parkingTickets.findIndex(
      (existingTicket) => existingTicket.plate === ticket.plate,
    )
    this.parkingTickets.splice(index, 1)
    this.parkingTickets.push(ticket)
  }
}
