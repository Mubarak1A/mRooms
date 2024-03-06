import React from 'react'
import { Link } from 'react-router-dom'

function Landingscreen() {
  return (
    <div className='landing'>
            <div className="container">
              <h2>mRooms</h2>
              <h3>Home away from home experience.</h3>

              <Link to={'/home'}>
                  <button className='btn' style={{background:'white', width:'150px'}}>Get Started</button>
              </Link>
            </div>
    </div>
  )
}

export default Landingscreen