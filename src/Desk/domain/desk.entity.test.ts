import {DeskEntity} from './desk.entity';
import {CardEntity, CardType} from '../../Cards/domain/card.entity';
import {ExceedMaxCardError} from '../error/ExceedMaxCardError';

describe('Desk entity test', () => {
  test('Can add card properly', () => {
    const desk = new DeskEntity([]);
    desk.add(new CardEntity(
      CardType.Acceptance, 0, 0,
    ));
    expect(desk.get(0).type).toBe(CardType.Acceptance);
  });

  test('If desk has maximum cards, adding card will throw error', () => {
    const desk = new DeskEntity([
      new CardEntity(
        CardType.Acceptance, 0, 0,
      ),
      new CardEntity(
        CardType.Curiosity, 1, 0,
      ),
      new CardEntity(
        CardType.Freedom, 2, 0,
      ),
      new CardEntity(
        CardType.Goal, 3, 0,
      ),
      new CardEntity(
        CardType.Honor, 4, 0,
      ),
      new CardEntity(
        CardType.Mastery, 5, 0,
      ),
      new CardEntity(
        CardType.Order, 6, 0,
      ),
      new CardEntity(
        CardType.Status, 7, 0,
      ),
      new CardEntity(
        CardType.Power, 8, 0,
      ),
      new CardEntity(
        CardType.Relatedness, 9, 0,
      ),
    ]);
    expect(() => {
      desk.add(new CardEntity(
        CardType.Acceptance, 0, 0,
      ));
    }).toThrow(ExceedMaxCardError);
  });

  test('Can remove card properly', () => {
    const desk = new DeskEntity([
      new CardEntity(CardType.Status, 0, 0),
    ]);
    desk.remove(0);
    expect(desk.get(0)).toBe(null);
  });

  test('Can change card index', () => {
    const desk = new DeskEntity([
      new CardEntity(CardType.Status, 0, 0),
    ]);
    desk.change(0, 5);
    expect(desk.get(5).type).toBe(CardType.Status);
  });

  test('Can update card properly', () => {
    const desk = new DeskEntity([
      new CardEntity(CardType.Status, 0, 0),
    ]);
    desk.update(new CardEntity(CardType.Status, 0, 100));
    expect(desk.get(0).score).toBe(100);
  });
});