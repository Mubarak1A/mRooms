import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Loader from '../components/loader'
import Error from '../components/Error'
import { Tag } from 'antd';

function ProfileScreen() {
    const user = JSON.parse(localStorage.getItem('currentuser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])

    return (
        <div className='ml-3 mt-3'>
            <Tabs defaultActiveKey="1">
                <TabPane tab='Profile' key='1' className='bs profile-container'>
                    <h1>My Profile</h1>

                    <h5><strong>Name:</strong>   {user.name}</h5>
                    <h5><strong>Email:</strong>   {user.email}</h5>
                    <h5><strong>IsAdmin:</strong>   {user.isAdmin ? 'Yes' : 'No'}</h5>
                </TabPane>
                <TabPane tab='Bookings' key='2'>
                    <Bookings />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfileScreen


export function Bookings() {
    let user = JSON.parse(localStorage.getItem("currentuser"));
    let [bookings, setbookings] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch("https://mrooms.onrender.com/api/getbookingsbyid", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify({userid : user._id})
        })
        .then((response) => {
            setLoading(false);
            if (!response.ok) {
                console.log('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            //const data = JSON.stringify(res)
            console.log(data)
            setbookings(data)
            console.log(bookings)
        })
        .catch((err) => {
            setLoading(false)
            setError(true)
            //console.log(err)
        })
    }, [])

    const cancelBooking = (bookingid, roomid) => {
        setLoading(true)
        fetch('https://mrooms.onrender.com/api/bookings/cancelbooking', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({bookingid, roomid})
        })
        .then((res) => {
            //console.log(res)
            setLoading(false)
            window.location.reload()
        })
        .catch((err) => {
            setLoading(false)
            setError(true)
            console.log(err)
        })
    }

    return (
        <div>
            <div className='row'>
            <div className="col-md-6">
                    {loading && <Loader />}
                    {bookings && (bookings.map(booking => {
                        return(
                            <div className='bs'>
                                <h2>{booking.room}</h2>
                                <h5><strong>Bookingid:</strong>   {booking._id}</h5>
                                <h5><strong>ChecKIn:</strong>   {booking.fromdate}</h5>
                                <h5><strong>CheckOut:</strong>   {booking.todate}</h5>
                                <h5><strong>Amount:</strong>   ${booking.totalamount}</h5>
                                <h5><strong>Status:</strong>   {booking.status === 'booked' ? (<Tag color="green">CONFIRMED</Tag>) : (<Tag color="red">CANCELLED</Tag>)}</h5>
                            
                                <div className='text-right'>
                                    {(booking.status !== 'cancelled') && <button className='btn btn-primary' onClick={() => {cancelBooking(booking._id, booking.roomid)} }>CANCEL BOOKING</button>}
                                </div>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}
