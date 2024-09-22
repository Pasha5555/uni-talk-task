import React from 'react';
import { Typography } from '@mui/material';
import { OperatorsTableWrapper } from './components/OperatorsTableWrapper/OperatorsTableWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Operators</Typography>
      <OperatorsTableWrapper />
    </div>
  );
}

export default App;
