import React from 'react'
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  return (
    <div className="registration">
        <form className='registration-form'>
        <div className='registration-input'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <input 
                 type={"text"}
                 placeholder="Username"
                 />
            </div>
            <div className='registration-input'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <input 
                 type={"email"}
                 placeholder="Email"
                 />
            </div>
            <div className='registration-input'>
                <FontAwesomeIcon icon={faLock}/>
                <input
                 type={"password"}
                 placeholder="Password"
                 />
            </div>
            <div className='registration-input'>
                <FontAwesomeIcon icon={faLock}/>
                <input
                 type={"password"}
                 placeholder="Repeat Password"
                 />
            </div>
            
            <Button text={"Sign In"}/>
        </form>
    </div>
  )
}

export default Registration