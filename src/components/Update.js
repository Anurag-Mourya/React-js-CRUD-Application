import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Update() {
 
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  },[]);

  const handelUpdate = (e) =>{
    e.preventDefault();
    axios.put(`https://6311663af5cba498da7e69b0.mockapi.io/react-crud-application/${id}`,{//put method is use for update....

    // this part is must be same as in creact.js...
      Name: name,
      Email: email
    }).then(()=>{
      navigate('/read');
    })  
    
  }
  return (
    <div className='row justify-content-center'>

    <div className="col-6 ">
        <div className="container mt-4">
            <h2 className='text-center bg-primary text-white rounded p-2'>Update Name or Email</h2>
            <form action="">
                <div className="form-group mt-4">
                    <label htmlFor="">Name: </label>
                    <input type="text" className="form-control " onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="">Email: </label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <button className="form-control btn btn-success mt-4 p-3" onClick={handelUpdate}>Update</button> 
                <Link to='/read'>
         <button className="form-control btn btn-secondary mt-4 p-3">Go Back</button></Link>
            </form>
        </div>
    </div>
</div>
  )
}

export default Update