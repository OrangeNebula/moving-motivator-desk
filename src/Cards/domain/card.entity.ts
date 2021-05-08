import {InvalidCardScoreError} from '../../Desk/error/InvalidCardScoreError';
import {DeskEntity} from '../../Desk/domain/desk.entity';
import {InvalidDeskIndexError} from '../../Desk/error/InvalidDeskIndexError';

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
  static MaxScore = 100;

  static MinScore = -100;

  constructor(
    public readonly type: CardType,
    private _index: number,
    private _score: number,
  ) {
    if (_index >= DeskEntity.MaxDeskSlot || _index < 0) {
      throw new InvalidDeskIndexError();
    }
  }

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value > CardEntity.MaxScore || value < CardEntity.MinScore) {
      throw new InvalidCardScoreError();
    }
    this._score = value;
  }
}