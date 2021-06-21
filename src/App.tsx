import React from 'react';
import './App.css';
import { CardComponent } from './Desk/component/card.component';
import { CardType } from './Desk/domain/card.entity';

function App() {
  return (
    <div className="App">
      <CardComponent cardType={CardType.Curiosity} />
      <CardComponent cardType={CardType.Honor} />
      <CardComponent cardType={CardType.Acceptance} />
      <CardComponent cardType={CardType.Mastery} />
      <CardComponent cardType={CardType.Power} />
      <CardComponent cardType={CardType.Freedom} />
      <CardComponent cardType={CardType.Relatedness} />
      <CardComponent cardType={CardType.Order} />
      <CardComponent cardType={CardType.Goal} />
      <CardComponent cardType={CardType.Status} />
    </div>
  );
}

export default App;
