import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwOQlx3yE3eA68aiF72bzGpc" alt="" />
        </div>

        <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login