import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([]);
    const [tabledark, setTabledark] = useState('');
    const readData = () => {
        axios.get('https://6311663af5cba498da7e69b0.mockapi.io/react-crud-application')
            .then((responce) => {

                setData(responce.data);
                console.log(data);
            })
    }

    // whent the page is reload and data is changed the readData is re-renderd that is whay we are using useEffect hook..
    useEffect(() => {
        readData();
    }, []);//when the value of data is changed then this hook is called..


    const deleteHandler = (id) => {
        axios.delete(`https://6311663af5cba498da7e69b0.mockapi.io/react-crud-application/${id}`)
            .then(() => {
                readData();//beacause the data is show deleted without page refresh..
            })
    }

    const saveLocalStorage = (id, name, email) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        // in localStorage we given the key value pair
    }
    return (
        <>
            <Link to='/'>
                <button className='btn btn-secondary m-3' style={{ position: 'absolute', right: 0 }}>Create Data</button></Link>


            <div className="form-check form-switch m-3" onClick={()=>{
               if(tabledark === 'table-dark'){
                setTabledark('')
               }else{
                setTabledark('table-dark');
               }

            }}>
            <input className="form-check-input" type="checkbox" id="switchDefault"/>
    
        </div>

            <div className='container justify-content-center'>
                <h1 className='text-center'>Read Operation</h1>
                <table className={`table table-bordered mt-4 text-center ${tabledark}`}>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        data.map((eachData, index) => {
                            return (
                                <>
                                    <tbody key={index}>

                                        <tr>
                                            <th>{eachData.id}.</th>
                                            <td>{eachData.Name}</td>
                                            <td>{eachData.Email}</td>

                                            <td>
                                                <Link to="/update">

                                                    <button className='btn btn-success rounded' onClick={() => saveLocalStorage(eachData.id, eachData.Name, eachData.Email)}>Edit</button>

                                                    {/* when click on edit btn we save all the data on local storage for update.. */}
                                                </Link>

                                            </td>

                                            <td><button className='btn btn-danger  rounded' onClick={() => deleteHandler(eachData.id)}>Delete</button></td>
                                            {/* here we are deleting a perticular id form get api */}
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })

                    }
                </table>
            </div>
        </>
    )
}

export default Read