import React from 'react';
import { CardType } from '../domain/card.entity';
import styles from './card.module.css';

interface Props {
  cardType: CardType,
}

const CardImagePosition = {
  [CardType.Order]: {
    left: -490,
    top: 247,
  },
  [CardType.Mastery]: {
    left: -735,
    top: 0,
  },
  [CardType.Honor]: {
    left: -245,
    top: 0,
  },
  [CardType.Goal]: {
    left: -735,
    top: 247,
  },
  [CardType.Power]: {
    left: -980,
    top: 0,
  },
  [CardType.Freedom]: {
    left: 0,
    top: 247,
  },
  [CardType.Acceptance]: {
    left: -490,
    top: 0,
  },
  [CardType.Curiosity]: {
    left: 0,
    top: 0,
  },
  [CardType.Status]: {
    left: -980,
    top: 247,
  },
  [CardType.Relatedness]: {
    left: -245,
    top: 247,
  },
};

export const CardComponent = ({ cardType }: Props) => {
  const position = CardImagePosition[cardType];

  return (
    <div
      className={styles.Wrap}
      style={{
        backgroundPositionX: position.left,
        backgroundPositionY: position.top,
        backgroundImage: `url(${process.env.PUBLIC_URL}/xmotivators.png)`,
      }}
    >
      {/*
      <img src={`${process.env.PUBLIC_URL}/xmotivators.png`} alt="card" />
*/}
    </div>
  );
};
