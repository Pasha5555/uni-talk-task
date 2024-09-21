import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import OperatorsTableWrapper from './components/OperatorsTableWrapper/OperatorsTableWrapper';


function App() {
  return (
    <div className="App">
      <Typography variant="h4">Operators</Typography>
      <OperatorsTableWrapper />
    </div>
  );
}

export default App;
