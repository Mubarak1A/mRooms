import React from 'react'
import { useState, useEffect } from 'react'

function Bookingscreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const url = 'http://localhost:8080/api/rooms/id'

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setLoading(false);
        console.log(data)
        setRooms(data);
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Ooops.. Somethig went wrog.</h1>
        ) : ( <div className='row'>
                <div className="col-md-5">
                    <h1>{room.name}</h1>
                    <img src={room.imageurls[0]} className='big-img' />
                </div>
                <div className="col-md-5">
                    <h1>Booking Details</h1>
                    <hr />
                </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Bookingscreen;