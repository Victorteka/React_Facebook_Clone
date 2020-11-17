import { Button } from '@material-ui/core'
import React from 'react'

import './Login.css'
import {auth, provider} from "../../firebase"
import {actionType} from '../../reducer'
import {useStateValue} from '../../StateProvider' 

function Login() {

    const [state, dispatch] = useStateValue()

    const siginIn = () =>{
        //sign in stuff
        auth.signInWithPopup(provider)
        .then((results )=> {
            dispatch({
                type: actionType.SET_USER,
                user:results.user,
            })
        })
        .catch(error => alert(error))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""/>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Facebook_Logo_%282015%29_light.svg" alt=""/> */}
            </div>
            <Button type='submit' onClick={siginIn}>
                Sigin in
            </Button>
        </div>
    )
}

export default Login
