import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creact from './Creact';
import Read from './Read';
import Update from './Update';

function AppRoute() {
  return (
    <div>

      <BrowserRouter>

        <Routes>
            <Route>
              <Route path="/" element={<Creact/>}/>
              <Route path="/read" element={<Read/>}/>
              <Route path="/update" element={<Update/>}/>
            </Route>
        </Routes>

      </BrowserRouter>



    </div>
  )
}

export default AppRoute