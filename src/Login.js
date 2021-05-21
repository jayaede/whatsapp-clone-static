import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    
    const [{}, dispatch] = useStateValue(); 

    const signin = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login_container">
                <img src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png'
                alt=''
                />
                <div className='login_text'>
                    <h1>SignIn to What'sApp</h1>
                </div>
                <Button  onClick={signin}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
