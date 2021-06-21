import React from 'react';
import './App.css';
import { DeskController } from './Desk/controller/desk.controller';
import { DeskViewModel } from './Desk/view-model/desk.view-model';
import { DeskModel } from './Desk/model/desk.model';

function App() {
  const deskModel = new DeskModel();
  const deskViewModel = new DeskViewModel(deskModel);
  return (
    <div className="App">
      <DeskController viewModel={deskViewModel} />
    </div>
  );
}

export default App;
