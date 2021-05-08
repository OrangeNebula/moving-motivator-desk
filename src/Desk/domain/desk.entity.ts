import {CardEntity} from '../../Cards/domain/card.entity';

export class DeskEntity {
  static MaxDeskSlot = 10;

  constructor(
    public readonly cards: CardEntity[],
  ) {
  }

  get(index: number): CardEntity | null {

  }

  add(card: CardEntity): void {

  }

  remove(index: number): CardEntity {

  }

  change(index1: number, index2: number): void {

  }

  update(card: CardEntity): void {

  }
}