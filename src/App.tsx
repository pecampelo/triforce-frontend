import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import { Table, Typography } from '@mui/material';
import Header from './Components/Main/Header';
import DropSelect from './Components/Main/DropSelect';
import BasicTable from './Components/Main/Table';

function App() {
  return (
    <div className="App">
      <div className='TopBar'></div>
      <div className='LeftBar'></div>
      <div className="Main">
        <div className="LeftInterface">
          <Header/>
          <Button variant="outlined">
            Ver contas
          </Button>
          <DropSelect/>

        </div>
        <div className="RightInterface">
          <h2>Banco:</h2>
          <span className='HeaderBank'>Nu Pagamentos S.A</span>
          <BasicTable/>

        </div>
      </div>
      <div className='RightBar'></div>
    </div>
  );
}

export default App;
