import React from 'react';
import '../style/App.css';
import AddPurchase from '../containers/AddPurchase';
import VisiblePurchaseList from '../containers/VisiblePurchaseList';

const App = () =>
  (
    <div>
      <h1>Purchase Tracker</h1>
      <AddPurchase />
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <VisiblePurchaseList />
      </div>
    </div>
  )

export default App;
