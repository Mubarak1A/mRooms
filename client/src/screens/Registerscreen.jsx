import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/loader'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Registerscreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSucces] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if(password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            
            const url = "http://localhost:8080/api/register"
            setLoading(true)
            fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: user
            })
                .then((response) => {
                    if (!response.ok) {
                        setLoading(false)
                        throw new Error('Network response was not ok');
                      }
                      setLoading(false)
                      return response.json();
                })
                .catch((err) => {
                    console.log(err)
                    //setLoading(false)
                    //setError(true)
                })
        }
        else {
            alert("Password not match!")
        }
    }

  return (
    <div>
        {error && <Error message={"Ooops... Something Went wrong! Please try again."}/>}
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 auth-box'>
                {success && <Success message={"Registration Success!"}/>}
                <div className='bs text-center'>
                    <h1>Resgister</h1>
                    <input type='text' className='form-control' id='name' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/><br />
                    <input type='email' className='form-control' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                    <input type='password' className='form-control' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <input type='password' className='form-control' id='cpassword' placeholder='Confirm Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)}/><br />

                    <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                    {loading && <Loader />}
                    <p className='mt-2'>Already have an acount? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}
