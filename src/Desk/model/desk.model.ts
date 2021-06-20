import { DeskEntity } from '../domain/desk.entity';
import { CardEntity, CardType } from '../domain/card.entity';

interface RawCard {
  type: CardType;
  position: number;
  score: number;
}

export class DeskModel {
  static Key = 'desk';

  getDesk = (): DeskEntity => {
    const raw = localStorage.getItem(DeskModel.Key);
    if (!raw) {
      return new DeskEntity(null);
    }
    const cards = JSON.parse(raw)
      .cards
      .map((item: RawCard) => new CardEntity(
        item.type,
        item.position,
        item.score,
      ));
    return new DeskEntity(cards);
  }

  updateDesk = (desk: DeskEntity): void => {
    localStorage.setItem(DeskModel.Key, JSON.stringify(desk));
  }
}
