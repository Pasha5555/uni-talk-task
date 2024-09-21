import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
import OperatorsTableWrapper from './components/OperatorsTableWrapper/OperatorsTableWrapper';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { operatorAddonsFetching, operatorsFetching } from './store/reducers/OperatorsSlice';

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Operators</Typography>
      <OperatorsTableWrapper />
    </div>
  );
}

export default App;
