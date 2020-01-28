import React from 'react';
// import Questions from '../questions/Questions'
import './App.css';
// import Config from 'Config';


function App() {

  return (
   <React.Fragment>
      <h1>{process.env.REACT_APP_SERVER_URL}</h1>
   </React.Fragment>
  );
}

export default App;
