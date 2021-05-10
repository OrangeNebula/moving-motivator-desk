import {InvalidCardScoreError} from '../error/InvalidCardScoreError';
import {DeskEntity} from './desk.entity';
import {InvalidDeskIndexError} from '../error/InvalidDeskIndexError';

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
    private _position: number,
    private _score: number,
  ) {
    if (_position >= DeskEntity.MaxDeskSlot || _position < 0) {
      throw new InvalidDeskIndexError();
    }
  }

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
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