
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword   } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const signInWithEmailPassword = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(user=>{
            console.log('sign in with email & password is succesfully')
            setEmail(user);
            setPassword(user);
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then((result)=>{
            
            setUser(result.user)
            console.log('sign in with google succesfully');
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const signInWithGithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log('sign in with github succesfully');
            console.log(user)
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    }

   const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
        console.log('sign out succesful')
      }).catch((error) => {
        setError(error)
      });



   }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    }
    ,[]);
    return {
        setUser,
        setError,
        name, 
        setName,
        email, 
        password,
        signInWithEmailPassword,
        setEmail,
        setPassword,
        logOut,
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
      
    }

}

export default useFirebase;