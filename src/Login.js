// import React, {useState, useEffect} from 'react';


// function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')




// async function login (){
//         console.log('data', email, password);  
//         let item = {email, password};
//         let result = await fetch("http://localhost:3000/login",{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(item)
//         });
//         result = await result.json();
//         localStorage.setItem('user info', JSON.stringify(result));

//     }
//   return (
//     <div>
//         <div>

//             <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
//             <input type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
//             <button onClick={login}>Login</button>

//         </div>
//     </div>
//   )
// }

// export default Login



import React, { useRef } from 'react';
import App from './App'
// import Home from './components/products/Home';


function Login() {
  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem("emailData")
  const getpassword = localStorage.getItem("passwordData")

  const submitHandler = (e) => {
    if (email.current.value === "eve.holt@reqres.in" && password.current.value === "pistol") {
      localStorage.setItem("emailData", "eve.holt@reqres.in");
      localStorage.setItem("passwordData", "pistol");
    }
    // e.preventDefault();
  }
  return (
    <div>
      {
        getEmail && getpassword ? <App /> :
          <div className="row align-center m-auto container my-5 py-5">
           
            <div className="col-6 m-auto container">
            <div className="mb-5 bg-danger text-center text-dark rounded"><h1>Login And Enter</h1></div>
              <form onSubmit={submitHandler}>
             
                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1">Email address: </label>
                  <input type="email" id="form2Example1" className="form-control" ref={email} placeholder='enter your email'/>       
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2">Password: </label>
                  <input placeholder='enter your password' type="password" id="form2Example2"  className="form-control" ref={password} />
                  
                </div>
                <button className="btn btn-primary btn-block mb-4">Log In</button>
              </form>
            </div>
          </div>




      }

    





    </div>
  )
}

export default Login