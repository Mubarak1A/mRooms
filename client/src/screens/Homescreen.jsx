import React from 'react'
import { useState, useEffect } from 'react'
import Room from '../components/room'
import Loader from '../components/loader'
import Error from '../components/Error'

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
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return <div className='col-md-9 mt-2'>
                <Room room={room}/>
            </div>
          })
        ) : <Error message={"Ooops... Something Went wrong! Please try again."}/> 
        }
      </div>
    </div>
  )
}

export default Homescreen;