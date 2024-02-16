import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/loader'
import Error from '../components/Error'
import moment from 'moment'

function Bookingscreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id, fromDate, toDate } = useParams();
  //const {totalDays, setTotalDays} = useState();

  const FromDate = moment(fromDate, 'DD-MM-YYYY');
  const ToDate = moment(toDate, 'DD-MM-YYYY');

  const dateDifference = ToDate.diff(FromDate, 'days') + 1;

  const totalAmount = dateDifference * rooms.rentperday

  const user = JSON.parse(localStorage.getItem('currentuser'))

  

  const url = `http://localhost:8080/api/rooms/${id}`

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
        ) : rooms? ( 
              <div className='row bs'>
                <div className="col-md-6">
                    <h1>{rooms.name}</h1>
                    <img src={rooms.imageurls[0]} className='big-img' />
                </div>
                <div className="col-md-6">
                    <div style={{textAlign: 'right'}}>
                      <h1>Booking Details</h1>
                      <hr />
                      <b>
                        <p>Name : {user.name} </p>
                        <p>From Date :  {fromDate} </p>
                        <p>To Date : {toDate} </p>
                        <p>Max Count : {rooms.maxcount} </p>
                      </b>
                    </div>

                    <div style={{textAlign: 'right'}} className='mt-4'>
                      <h1>Amount</h1>
                      <hr />
                      <b>
                        <p>Total days : {dateDifference} </p>
                        <p>Rent per day : {rooms.rentperday}</p>
                        <p>Total Amount : {totalAmount} </p>
                      </b>
                    </div>
                    <div style={{float: 'right'}}>
                      <button className='btn btn-primary'>Pay Now</button>    
                    </div>
                </div>
            </div>
          ) : <Error message={"Ooops... Something Went wrong! Please try again."}/>
        }
      </div>
    </div>
  )
}

export default Bookingscreen;