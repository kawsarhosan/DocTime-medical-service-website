import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';


const auth = getAuth();

const Login = () => {

  const {signInWithGoogle, signInWithGithub, setUser, setError, email, password, setEmail, setPassword} = useFirebase();
  const handleEmail = e=>{
    setEmail(e.target.value)
  }
  const handlePassword = e =>{
    setPassword(e.target.value);
  }
  const handleLogIn = (e) => {
    console.log(email, password, 'login successfully')
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loginUser = result.user
            console.log(loginUser)
            setUser(loginUser)
            setError('')

        })
        .finally(() => {
            
        })
        .catch(error => {
            setError(error.code)
        })

}


    return (
        <div className='container'>
           
                <div className="col-lg-6 my-5 mx-auto border shadow-sm p-5 rounded">
                    <form onSubmit={handleLogIn}>

                        <h3 className="fw-bold text-center">Login</h3>
                        {/* <!-- Email input --> */}
                        <div className="form-outline mt-3 mb-4">
                          <input onBlur={handleEmail} type="email" id="form2Example1" className="form-control" required />
                          <label className="form-label" htmlFor="form2Example1">Email address</label>
                        </div>
                      
                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                          <input onBlur={handlePassword} type="password" id="form2Example2" className="form-control" required />
                          <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                      
                        {/* <!-- 2 column grid layout for inline styling --> */}
                        <div className="row my-3">
                          <div className="col d-flex justify-content-around">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example3"
                                
                              />
                              <label className="form-check-label" htmlFor="form2Example3"> Remember me </label>
                            </div>
                          </div>
                      
                          <div className="col">
                            {/* <!-- Simple link --> */}
                            <NavLink to="/forget" >Forgot password?</NavLink>
                          </div>
                        </div>
                      
                        {/* <!-- Submit button --> */}
                        <button type="submit" className="custom-btn d-block mx-auto mb-3 text-white w-25">Login</button>
                      
                        {/* <!-- Register buttons --> */}
                        <div className="text-center">
                          <p>Don’t have an account? <Link to="/register">Create an account</Link></p>
                          <p>or sign up with:</p>
                                                
                          <button onClick={signInWithGoogle} type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-google"></i>
                          </button>
                                            
                          <button onClick={signInWithGithub} type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                      </form>
                </div>
        
        </div>
    );
};

export default Login;