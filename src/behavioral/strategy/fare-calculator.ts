export interface FareCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number
}

export class AirportFairCalculator implements FareCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const diff =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60)
    return diff * 10
  }
}

export class ShoppingFairCalculator implements FareCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const diff =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60)
    let fare = 10
    const remainingHours = diff - 3
    if (remainingHours > 0) fare += remainingHours * 10
    return fare
  }
}

export class BeachFairCalculator implements FareCalculator {
  calculate(): number {
    return 10
  }
}

export class PublicFairCalculator implements FareCalculator {
  calculate(): number {
    return 0
  }
}

export class FareCalculatorFactory {
  static create(location: string): FareCalculator {
    if (location === 'airport') return new AirportFairCalculator()
    if (location === 'shopping') return new ShoppingFairCalculator()
    if (location === 'beach') return new BeachFairCalculator()
    if (location === 'public') return new PublicFairCalculator()
    throw new Error('Location not found')
  }
}
