import React from 'react';
import { DeskView } from '../view/desk.view';
import { DeskViewModel } from '../view-model/desk.view-model';
import { CardEntity, CardType } from '../domain/card.entity';
import { DeskEntity } from '../domain/desk.entity';
import { Logger } from '../../Core/logger/Logger';

interface Props {
  viewModel: DeskViewModel,
}

// eslint-disable-next-line no-unused-vars, arrow-body-style
export const DeskController = ({ viewModel }: Props) => {
  const desk = viewModel.getDesk();
  // TODO: Add event handler, core UI business logic
  // TODO: Have reference to the view model
  const onClickCard = (type: CardType) => {
    Logger.info(type);
    Logger.info(desk.getCardsPositionAsc());
    const card = desk.getByType(type) as CardEntity;
    let replacePosition = card.position + 1;
    if (card.position === DeskEntity.MaxDeskSlot - 1) {
      replacePosition = 0;
    }
    const replaceCard = desk.getByPosition(replacePosition) as CardEntity;
    desk.remove(replacePosition);
    desk.remove(card?.position);
    replaceCard.position = card.position;
    card.position = replacePosition;
    desk.add(card);
    desk.add(replaceCard);
    Logger.info(desk.getCardsPositionAsc());
  };

  /*
  const onMoveCard = () => {
  };

  const onReleaseCard = () => {
  };
  */
  return (
    <DeskView
      cards={desk.getCardsPositionAsc()}
      onClick={onClickCard}
    />
  );
};
