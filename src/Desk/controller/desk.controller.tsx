import React from 'react';
import { DeskView } from '../view/desk.view';
import { DeskViewModel } from '../view-model/desk.view-model';

interface Props {
  viewModel: DeskViewModel,
}

// eslint-disable-next-line no-unused-vars, arrow-body-style
export const DeskController = ({ viewModel }: Props) => {
  // TODO: Add event handler, core UI business logic
  // TODO: Have reference to the view model
  /*
  const onClickCard = () => {
  };

  const onMoveCard = () => {
  };

  const onReleaseCard = () => {
  };
  */
  return (
    <DeskView />
  );
};
