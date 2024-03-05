import React from 'react'
import { useState, useEffect } from 'react'
import Room from '../components/room'
import Loader from '../components/loader'
import Error from '../components/Error'
import { DatePicker } from 'antd'
import moment from 'moment'

function Homescreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const { RangePicker } = DatePicker;

  const [duplicateRooms, setDuplicateRooms] = useState([])

  const [searchKey, setSearchKey] = useState("")
  const [type, setType] = useState("")

  const url = 'https://mrooms.onrender.com/api/rooms'
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setLoading(false);
        //console.log(data)
        setRooms(data);
        setDuplicateRooms(data)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  const filterByDate = (dates) => {
    const formattedFromDate = dates[0].format("DD-MM-YYYY");
    const formattedToDate = dates[1].format("DD-MM-YYYY");

    setFromDate(formattedFromDate);
    setToDate(formattedToDate);

    const tempRooms = duplicateRooms.filter((room) => {
      if (room.currentbookings.length === 0) {
        return true; // Room has no bookings, include it
      }

      // Check if there is any overlapping booking for the selected date range
      return room.currentbookings.every((booking) => {
        return (
          moment(formattedToDate, "DD-MM-YYYY").isBefore(booking.fromDate) ||
          moment(formattedFromDate, "DD-MM-YYYY").isAfter(booking.toDate)
        );
      });
    });

    setRooms(tempRooms);
  };

  const filterBysearch = () => {
    const tempRooms = duplicateRooms.filter(room => room.name.toLowerCase().includes(searchKey.toLowerCase()))
    setRooms(tempRooms)
  }

  const filterByType = (e) => {
    if (e !== 'all') {
      setType(e)
      const tempRooms = duplicateRooms.filter(room => room.type.toLowerCase() === e.toLowerCase())
      setRooms(tempRooms)
    }
    else {
      setType('All')
      setRooms(duplicateRooms)
    }
  }



  return (
    <div className='container'>
      <div className="row mt-5 bs search-container">
        <div className="col-md-3">
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} className='filter' />
        </div>

        <div className="col-md-3 search">
          <input type='text' className='form-control filter' placeholder='search room'
            value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} onKeyUp={filterBysearch} />
        </div>

        <div className="col-md-3">
          <select className='form-control filter' value={type} onChange={(e) => { filterByType(e.target.value) }}>
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>


      </div>

      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : (
          rooms.map((room) => {
            return <div className='col-md-9 mt-2'>
              <Room room={room} fromDate={fromDate} toDate={toDate} />
            </div>
          }))
        }
      </div>
    </div>
  )
}

export default Homescreen;
