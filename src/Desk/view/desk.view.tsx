import React from 'react';
import { CardType } from '../domain/card.entity';
import { CardComponent } from '../component/card.component';

interface Props {
  cards: {
    type: CardType,
    position: number,
  }[],
}

export const DeskView = (props: Props) => {
  const { cards } = props;
  return (
    <div>
      {
        cards.map((item) => (
          <CardComponent cardType={item.type} />
        ))
      }
    </div>
  );
};
