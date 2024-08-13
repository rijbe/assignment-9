import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password);
        if(password.length < 6){
          setRegisterError('your password should be 6 character or longer');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('your password should be uppercase one character')
          return;
        }
        setRegisterError('')
        setSuccess('')
        createUser(email, password)
        .then(result => {
          console.log(result.user)
          setSuccess('Your register is successfully')
        })
        .catch(error => {
          console.log(error);
          setRegisterError(error.message)
        })
       
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
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
                <button className="btn btn-primary">Register</button>
              </div>
              {
                registerError && <p className="text-red-500">{registerError}</p>
              }
              {
                success && <p className="text-green-500 text-center">{success}</p>
              }
              <p>All ready have a account please <Link to='/login' className='text-blue-500'>Login</Link></p>
            </form>

          </div>
        </div>
      </div>
    );
};

export default Register;