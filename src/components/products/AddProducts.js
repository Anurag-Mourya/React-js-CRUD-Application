

import React, { useState, useEffect } from 'react';
import './AddProducts.css';
import AllProducts from './AllProducts';

const getLocalItem = () => {
    let list = localStorage.getItem('Products List');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

function AddProducts() {

    const [text, setText] = useState('');
    const [num, setNum] = useState(null);
    const [task, setTask] = useState(getLocalItem());


    const changeText = (event) => {
        setText(event.target.value);
    }

    const changeNum = (event) => {
        setNum(event.target.value);
    }

    const submitHandler = (event) => {
        let objTask = {
            text,
            num
        }

        setTask([...task, objTask]);
        setText('');
        setNum('')
        event.preventDefault();
    }

    const deleteProducts = (num) => {
        const filterProducts = task.filter((element, index) => {
            return element.num != num;
        })
        setTask(filterProducts);
    }

    useEffect(() => {
        localStorage.setItem('Products List', JSON.stringify(task));
    }, [task])

    return (
        <div>
            <div className="container border my-5 b-2">
                <div className="row">
                    <div className="col-12">
                        <form action="" onSubmit={submitHandler}>
                            <input type="text" className="m-4" placeholder='Enter your Product' required value={text} onChange={changeText} />

                            <input type="number" className="m-4" placeholder='Enter Product Price' required value={num} onChange={changeNum} />
                            <button type='submit' className='btn btn-primary'>Add Product</button>
                        </form>
                        <div className="view-container">
                            {task.length > 0 && <>

                                <div className="table-responsive">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AllProducts task={task} deleteProducts={deleteProducts} />
                                        </tbody>
                                    </table>
                                </div>

                            </>}
                            {task.length < 1 && <h1 className='bg-danger text-center text-white rounded'>No Products added here</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts;





