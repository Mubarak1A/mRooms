import React from 'react'
import { Link } from 'react-router-dom'

function Landingscreen() {
  return (
    <div className='row landing'>
        <div className="col-md-9">
            <h2 style={{color:'white', fontSize:'150px'}}>mRooms</h2>
            <h3 style={{color:'white', fontSize:'48px'}}>Home away from home experience.</h3>

            <Link to={'/home'}>
                <button className='btn' style={{background:'white', width:'150px'}}>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Landingscreen