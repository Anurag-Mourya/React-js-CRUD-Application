import React, { useState } from 'react'
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
// to navigate to read page when we click on submit btn...



function Creact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();//to navigate the read page when we click submit btn...
   
  
const submitHandler = (e) =>{
    e.preventDefault();
      axios.post('https://6311663af5cba498da7e69b0.mockapi.io/react-crud-application', {
      Name: name,
      Email: email
    })
        .then(() =>{
            navigate('/read');//to navigate the read page when we click submit btn...
        });
};
  
    return (
        <>
        <Link to='/read'>
         <button className='btn btn-secondary m-3' style={{position: 'absolute',right: 0}}>Show Data</button></Link>
        <div className='row justify-content-center'>
            
            <div className="col-6 ">
           
                <div className="container mt-4">
               
                    <h2 className='text-center bg-primary text-white rounded p-2'>CRUD Application in React</h2>
                    <form action="" onSubmit={submitHandler}>
                        <div className="form-group mt-4">
                            <label htmlFor="">Name: </label>
                            <input required type="text" className="form-control " onChange={(e)=>setName(e.target.value)} value={name}/>
                        </div>

                        <div className="form-group mt-4">
                            <label htmlFor="">Email: </label>
                            <input required type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <button className="form-control btn btn-success mt-4">Add</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Creact