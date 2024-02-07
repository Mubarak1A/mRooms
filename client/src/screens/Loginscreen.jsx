import React from 'react'
import { useState } from 'react'
import { Link, json } from 'react-router-dom'
import Loader from '../components/loader'
import Error from '../components/Error'

export default function Loginscreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        const user = {
            email,
            password,
        }
        
        setLoading(true)
        const url = "http://localhost:8080/api/login"
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((user) => {

                setLoading(false);
                localStorage.setItem('currentUser', JSON.stringify(user))
                window.location.href="/home"
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
                console.log(err)
            })
    }

  return (
    <div>
        {loading && <Loader />}

        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 auth-box'>
                {error && <Error message={"Invalid Credentials"}/>}
                <div className='bs'>
                    <h1>Login</h1>
                    <input type='email' className='form-control' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                    <input type='password' className='form-control' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />

                    <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                    <p className='mt-2'>Don't have an acount? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}
