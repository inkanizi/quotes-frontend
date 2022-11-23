import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import Button from '../Button/Button'

const Login = () => {
  return (
    <div className='login'>

        <form className='login-form'>
            <div
            className='login-input'>
                <FontAwesomeIcon className="login-input_icon" icon={faEnvelope}/>
                <input 
                 type={"email"}
                 placeholder="Email"
                 />
            </div>
            <div className='login-input'>
                <FontAwesomeIcon className="login-input_icon" icon={faLock}/>
                <input
                 type={"password"}
                 placeholder="Password"
                 />
            </div>
            
            <Button text={"Sign In"}/>
        </form>
    </div>
  )
}

export default Login