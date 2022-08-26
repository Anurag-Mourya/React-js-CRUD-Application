import React from 'react'

function Logout(e) {
    const clickHandel = () =>{
        localStorage.clear();
        window.location.reload();
        e.preventDefault();
    }
  return (
    <div><button onClick={clickHandel} className="btn btn-primary text-white" style={{marginLeft: "21px"}}>Logout</button></div>
  )
}

export default Logout;