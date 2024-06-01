export class LotteryTicket {
  constructor(
    readonly draw: string,
    readonly date: Date,
    readonly bet1: string,
    readonly bet2: string,
    readonly bet3: string,
    readonly bet4: string,
    readonly bet5: string,
    readonly bet6: string,
  ) {}
}
