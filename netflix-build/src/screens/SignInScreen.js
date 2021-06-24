import React, { useRef, useState } from 'react'
// import { useHistory } from 'react-router';
import { auth } from '../firebase';
import './SignInScreen.css'

const SignInScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const ConfirmPasswordRef = useRef(null);

    const [signUp, setSignUp] = useState(false);

    // const history = useHistory();

    const register = (e) => {
        e.preventDefault();

        if(ConfirmPasswordRef.current.value === passwordRef.current.value) {
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message);
            })
        } else {
            alert(`Your password and confirmation password does not match`)
        }

       
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error => {
            alert(error.message)
        }))
    }

    return (
        <div className='signinScreen'>
            {signUp ? (
                <form>
                    <h1>Sign Up</h1>
                    <input ref={emailRef} placeholder='Email' type='email' />
                    <input ref={passwordRef} placeholder='Password' type='password' />
                    <input ref={ConfirmPasswordRef} placeholder='Confirm Password' type='password' />
                    <button type='submit' onClick={register}>
                        Sign Up
                    </button>
                    <h4>
                        <span className='signinScreen-gray'>Already have an account? </span>
                        <span className='signinScreen-link' onClick={() => setSignUp(false)}>Sign In</span>
                    </h4>
                </form>
            ) : (
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} placeholder='Email' type='email' />
                    <input ref={passwordRef} placeholder='Password' type='password' />
                    <button type='submit' onClick={signIn}> 
                        Sign In
                    </button>

                    <h4>
                        <span className='signinScreen-gray'>New to Netflix?  </span>
                        <span className='signinScreen-link' onClick={() => setSignUp(true)}>Sign Up now.</span>
                    </h4>
                </form>
                )}            
        </div>
    );
}

// onClick={register}
export default SignInScreen
