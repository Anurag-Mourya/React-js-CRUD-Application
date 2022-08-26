import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import AddProducts from './components/products/AddProducts';
import AllProducts from './components/products/AllProducts';

import {
      BrowserRouter,
      Routes,
      Route,
} from "react-router-dom";

const App = () => {
      return (

            <>
                  <BrowserRouter>
                        <Navbar />
                        <Routes>

                              <Route>
                                    <Route path='/' element={<Home />} />
                              </Route>

                              <Route>
                                    <Route path='/add-products' element={<AddProducts />} />
                              </Route>

                              <Route>
                                    <Route path='/list-of-products' element={<AllProducts />} />
                              </Route>
                        </Routes>
                  </BrowserRouter>
            </>

      )
}

export default App;