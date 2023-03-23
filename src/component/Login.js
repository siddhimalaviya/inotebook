import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from './context/notes/noteContext';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const context = useContext(noteContext);
    const navigate = useNavigate();
    const {swalAlert } = context;

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            //Save the auth token and Redirect
            localStorage.setItem('token', json.authtoken)
            navigate('/');
            swalAlert("Logged in Successfully", "success")


        } else {
            swalAlert("Invalid credentials", "error")
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
        <div className='container '>
            <div className=' row '>
             <div className=" text-white col-6 my-5" >
               <div>
                   <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-huge-smartphone-login-account-social-media-app-user-interface-secure-login_241107-1247.jpg?w=2000" alt=""  style={{ width: "35rem" }}/>
               </div>
             </div>
             <div className=" mx-2 text-black col-6 my-5" style={{ width: "25rem" }}>
               <div className="card-body" style={{color: props.mode === 'dark'? 'white': 'black'}}>
                    <h2 className='text-center'> Login to continue to iNotebook</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                            <div id="emailHelp"  style={{color: props.mode === 'dark'? 'white': '#737171 '}}>We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
                        </div>
                        <div className="d-flex justify-content-center">

                        <button type="submit" className="btn btn-primary " >Log in</button>
                        </div>
                        <div className='text-center'>
                                You don't have an Account?
                                <Link to="/signup">Sign up</Link>
                            </div>
                    </form>
  
               </div>
             </div>
            </div>
        </div>
            </>
            )
}

            export default Login


        //     <div className=' row '>
        //     <div className="card bg-success text-white col-10" >
        //       <div className="card-body">
        //           <img src="./assest/image/login.png" alt=""  />
        //       </div>
        //     </div>
        //     <div className="card bg-warning mx-2 text-black col-2" style={{ width: "12rem" }}>
        //       <div className="card-body">
        //           <h2 className='text-center'> Login to continue to iNotebook</h2>
    //     <form onSubmit={handleLogin}>
    //     <div className="mb-3">
    //         <label htmlFor="email" className="form-label">Email address</label>
    //         <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
    //         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //     </div>
    //     <div className="mb-3">
    //         <label htmlFor="password" className="form-label">Password</label>
    //         <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
    //     </div>
    //     <button type="submit" className="btn btn-primary" >Log in</button>
    // </form>
  
        //       </div>
        //     </div>
        //   </div>