import React, { useRef } from 'react'
import '../Style/SignUpScreen.css'
import { authentication } from '../firestore'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";


function SignUpScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault();

    
    createUserWithEmailAndPassword(
      authentication,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential) => {
      console.log('user signed up',userCredential);
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      authentication,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential) => {
      console.log('user signed up',userCredential);
    })
    .catch((error) => {
      alert(error.message);
    })
   
  }


  return (
    <div className='signupScreen'>

      <form>
      <h1>Sign In</h1>
        <input ref = {emailRef} type="email" placeholder='Email' />
        <input ref = {passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}> Sign In </button>

        <h4>
          <span className='signupScreen_gray'> New To Netflix? </span>
          <span className='signupScreen_link' onClick={register}>Sign Up now. </span> 
        </h4>

      </form>
    </div>
  )
}

export default SignUpScreen