import React from 'react'
import { useState, useEffect } from 'react'
import Room from '../components/room'

function Homescreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const url = 'http://localhost:8080/api/rooms'

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
        ) : (
          rooms.map((room) => {
            return <div className='col-md-9 mt-2'>
                <Room room={room}/>
            </div>
          })
        )}
      </div>
    </div>
  )
}

export default Homescreen;