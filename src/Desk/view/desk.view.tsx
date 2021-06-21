import React from 'react';
import { CardType } from '../domain/card.entity';
import { CardComponent } from '../component/card.component';

interface Props {
  cards: {
    type: CardType,
    position: number,
  }[],
  onClick: (type: CardType) => void,
}

export const DeskView = (props: Props) => {
  const { cards, onClick } = props;
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {
        cards.map((item) => (
          <CardComponent
            cardType={item.type}
            onClick={() => onClick(item.type)}
          />
        ))
      }
    </div>
  );
};
