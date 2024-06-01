import { FareCalculatorFactory } from './fare-calculator'

export class ParkingTicket {
  fare: number
  checkoutDate?: Date

  constructor(
    readonly plate: string,
    readonly checkinDate: Date,
    readonly location: string,
  ) {
    this.fare = 0
  }

  checkout(checkoutDate: Date) {
    this.checkoutDate = checkoutDate
    const fareCalculator = FareCalculatorFactory.create(this.location)
    this.fare = fareCalculator.calculate(this.checkinDate, this.checkoutDate)
  }
}
