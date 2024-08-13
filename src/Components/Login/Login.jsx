import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [loginpage, setLoginpage] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()
   const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if(password.length < 6){
        setLoginpage('password must be 6 character')
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setLoginpage('Your password must be alphabet one character')
        return;
    }

    setLoginpage('')
    setSuccess('')
    signIn(email, password)
    
    .then(result => {
        console.log(result.user)
        setSuccess('your register is successfully')
        navigate(location?.state?location.state : '/')
    })
    .catch(error => {
        console.log(error);
        setLoginpage(error.message)
    })
    setLoginpage('')
    setSuccess('')
   }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text":"password"} placeholder="password" name='password' className="input input-bordered" required />
                    <span className="ml-72 -mt-8 mb-2" onClick={()=>setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEye />: <FaEyeSlash></FaEyeSlash>
                    }
                    </span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>

                    <p>You have not account please <Link to='/register' className='text-blue-500'>Register</Link></p>
                    {
                        loginpage && <p className='text-red-500'>{loginpage}</p>
                    }
                    {
                        success && <p className='text-green-600 text-center'>{success}</p>
                    }
                </form>
              
                </div>
                
            </div>
        </div>
    );
};

export default Login;