import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';



const auth = getAuth();
const Register = () => {
  const {signInWithGoogle, signInWithGithub, setUser, setError, setName, setEmail, setPassword, name, email, password } = useFirebase();
  
  const handleName = e =>{
    setName(e.target.value);
    console.log(e.target.value);
  }
  const handleEmail = e =>{
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  const handlePassword = e =>{
    setPassword(e.target.value);
    console.log(e.target.value);
  }
  const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const emailUser = result.user
            setUser(emailUser)
            handleUpdateName(name)
            
            setError('')
        })
        
        .catch(error => {
            setError(error.code)
        })



}
const handleUpdateName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    })
        .then(() => {

        })
}
  
    return (
        <div className='container'>
            <div className="col-lg-6 my-5 mx-auto border shadow-sm p-5 rounded">
              <form onSubmit={handleRegister} >
                <div className="text-center mb-3">
                  <h3 className="fw-bold">Create in a account with:</h3>
                  
                  <button onClick={signInWithGoogle} type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                    
                  <button onClick={signInWithGithub} type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
          
                <p className="text-center">or:</p>
          
                {/* <!-- Name input --> */}
                <div className="form-outline mb-4">
                  <input onBlur={handleName}  type="text" id="registerName" className="form-control" />
                  <label className="form-label" htmlFor="registerName">Name</label>
                </div>
                    
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input onBlur={handleEmail} type="email" id="registerEmail" className="form-control" />
                  <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>
          
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input onBlur={handlePassword} type="password" id="registerPassword" className="form-control"/>
                  <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>
                <p className="text-danger text-center"></p>
                               
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
          
                {/* <!-- Submit button --> */}
                <button  type="submit" className="custom-btn d-block mx-auto text-white w-25 my-3">Register</button>
                <p className="text-center">Already have an account? <Link to="/login">Login</Link></p> 
              </form>
            </div>
        </div>
    );
};

export default Register;