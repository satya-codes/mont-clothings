import React from 'react';
import { Route } from "react-router-dom";

import HomePage  from "./pages/hompage/homepage.component";
import ShopPage from './pages/shop/ShopPage.component';

import './App.css';

function App() {
  return (
    <div>
      <switch>
        <Route exact  path='/' component={HomePage}/>
        <Route exact  path='/shop' component={ShopPage}/>

      </switch>
    </div>
  );
}


export default App;
 