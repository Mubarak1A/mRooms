import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Registerscreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handleSubmit = () => {
        const user = {
            name,
            email,
            password,
            cpassword
        }
        console.log(user)
    }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5  bs auth-box'>
            <h1>Resgister</h1>
                <input type='text' className='form-control' id='name' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/><br />
                <input type='email' className='form-control' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <input type='password' className='form-control' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                <input type='password' className='form-control' id='cpassword' placeholder='Confirm Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)}/><br />

                <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                <p className='mt-2'>Already have an acount? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}
