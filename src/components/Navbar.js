import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">HackerKernel</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/add-products" >Add Product Form 
                       </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/list-of-products" >List of all the added products.
</Link>
                    </li>
                  
                    <li>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Products" aria-label="Search" />

                    </li> */}

                    <li className="nav-item ml-5">
                      <Logout/>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default Navbar;