import React from 'react'
import { useState, useEffect } from 'react'
import Room from '../components/room'
import Loader from '../components/loader'
import Error from '../components/Error'
import { DatePicker, Space } from 'antd'
import moment from 'moment'

function Homescreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const { RangePicker } = DatePicker;

  const url = 'http://localhost:8080/api/rooms'

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setLoading(false);
        //console.log(data)
        setRooms(data);
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  const filterByDate = (dates) => {
    const formatedFromDate = dates[0].format('DD-MM-YYYY');
    const formatedToDate = dates[1].format('DD-MM-YYYY');

    //console.log('Selected Date Range:', formattedStartDate, 'to', formattedEndDate);
    setFromDate(formatedFromDate);
    setToDate(formatedToDate);
  }

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-3">
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>
        </div>
      </div>

      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return <div className='col-md-9 mt-2'>
                <Room room={room} fromDate={fromDate} toDate={toDate}/>
            </div>
          })
        ) : <Error message={"Ooops... Something Went wrong! Please try again."}/> 
        }
      </div>
    </div>
  )
}

export default Homescreen;