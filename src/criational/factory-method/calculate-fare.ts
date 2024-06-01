import { RideRepository } from './ride-repository'
import { SegmentRepository } from './segment-repository'

export interface CalculateFareOutput {
  fare: number
}

export class CalculateFare {
  constructor(
    readonly rideRepository: RideRepository,
    readonly segmentRepository: SegmentRepository,
  ) {}

  async execute(rideId: string): Promise<CalculateFareOutput> {
    const ride = await this.rideRepository.getById(rideId)
    const segments = await this.segmentRepository.listByRideId(rideId)
    const fare = ride.calculateFare(segments)
    return {
      fare,
    }
  }
}
