import React from 'react';
import Header from './components/Header';
import CandyType from './pages/CandyType';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css'

const App = () => (
  
  
    <MuiThemeProvider>
      <div className="App">
        <Header />
        <CandyType />
      </div>
    </MuiThemeProvider>
      
     
  
)

export default App;
