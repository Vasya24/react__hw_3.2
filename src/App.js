import React from 'react';
import './css/main.css'
import Data from './data/etsy.json';
import Listing from './components/Listing';

const data = Data;

function App() {
  return (
    <div className="item-list">
      <Listing items={data}/>    
    </div>
  );
}

export default App;
