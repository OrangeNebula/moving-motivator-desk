import { CardEntity, CardType } from './card.entity';
import { ExceedMaxCardError } from '../error/ExceedMaxCardError';

export class DeskEntity {
  static MaxDeskSlot = 10;

  public readonly cards: CardEntity[];

  constructor(
    cards: CardEntity[] | null,
  ) {
    if (cards) {
      this.cards = cards;
    } else {
      this.cards = CardEntity.getCardTypes().map((item, index) => (new CardEntity(
        item,
        index,
        0,
      )));
    }
  }

  getByPosition(position: number): CardEntity | null {
    return this.cards.find((item) => item.position === position) || null;
  }

  getByType(type: CardType): CardEntity | null {
    return this.cards.find((item) => item.type === type) || null;
  }

  getCardsPositionAsc(): CardEntity[] {
    return this.cards.sort((a, b) => (a.position < b.position ? -1 : 1));
  }

  add(card: CardEntity): void {
    if (this.cards.length >= DeskEntity.MaxDeskSlot) {
      throw new ExceedMaxCardError();
    }
    this.cards.push(card);
  }

  remove(position: number): CardEntity | null {
    const card = this.getByPosition(position);
    if (!card) {
      return null;
    }
    const index = this.cards.findIndex((item) => item.position === position);
    this.cards.splice(index, 1);
    return card;
  }

  change(position1: number, position2: number): void {
    const card1 = this.getByPosition(position1);
    const card2 = this.getByPosition(position2);
    if (card1) {
      card1.position = position2;
    }
    if (card2) {
      card2.position = position1;
    }
  }

  update(card: CardEntity): void {
    this.remove(card.position);
    this.add(card);
  }
}
