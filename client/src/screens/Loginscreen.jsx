import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Loginscreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const user = {
            email,
            password,
        }
        console.log(user)
    }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5  bs auth-box'>
            <h1>Login</h1>
                <input type='email' className='form-control' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <input type='password' className='form-control' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />

                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                <p className='mt-2'>Don't have an acount? <Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
  )
}
