import { Location } from './location'
import { RideRepository } from './ride-repository'
import { SegmentRepository } from './segment-repository'

export interface UpdateLocationInput {
  rideId: string
  lat: number
  long: number
  date: Date
}

export class UpdateLocation {
  constructor(
    readonly rideRepository: RideRepository,
    readonly segmentRepository: SegmentRepository,
  ) {}

  async execute(input: UpdateLocationInput): Promise<void> {
    const ride = await this.rideRepository.getById(input.rideId)
    const newLocation = new Location(input.lat, input.long, input.date)
    const segment = ride.createSegment(ride.lastLocation, newLocation)
    ride.updateLocation(newLocation)
    await this.rideRepository.update(ride)
    await this.segmentRepository.save(segment)
  }
}
