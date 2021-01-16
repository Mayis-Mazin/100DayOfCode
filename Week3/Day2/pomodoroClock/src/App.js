import './App.css';
import React, { useEffect, useState } from "react";
import Break from './components/Break'
import Session from './components/Session'


function App() {
  return (
   <div className='App'>
   <Break/>
   <Session/>
    </div>
  );
}

export default App;
