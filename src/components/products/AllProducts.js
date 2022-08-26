import React from 'react';

const AllProducts = ({ task,deleteProducts }) => {
  return task.map(objTask => (
    <tr  key={objTask.num} >
      <td>{objTask.text}</td>
      <td>${objTask.num}</td>
      <td className='delete-btn btn' onClick={()=>deleteProducts(objTask.num)} style={{cursor: 'pointer'}}>X</td>
    </tr>
   
  ));
}

export default AllProducts