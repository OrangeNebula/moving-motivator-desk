import React from 'react';
import './App.css';
import { CardComponent } from './Desk/component/card.component';
import { CardType } from './Desk/domain/card.entity';

function App() {
  return (
    <div className="App">
      <CardComponent cardType={CardType.Power} />
      <CardComponent cardType={CardType.Honor} />
    </div>
  );
}

export default App;
