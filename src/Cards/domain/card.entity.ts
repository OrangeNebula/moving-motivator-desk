export enum CardType {
  Relatedness,
  Status,
  Curiosity,
  Acceptance,
  Goal,
  Power,
  Freedom,
  Honor,
  Mastery,
  Order,
}

export class CardEntity {
  constructor(
    public readonly type: CardType,
    public readonly index: number,
    public readonly score: number,
  ) {
  }
}