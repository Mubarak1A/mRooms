import React from 'react'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { useState, useEffect } from 'react'
import Loader from '../components/loader'
import Error from '../components/Error';
import Success from '../components/Success'


function Adminscreen() {

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('currentuser')).isadmin){
            window.location.href ='/home'
        }
    })

    return (
        <div className='ml-3 mt-3 mr-3 bs'>
            <h1 className='text-center'>Admin Panel</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab='Bookings' key='1'>
                    <Bookings />
                </TabPane>
                <TabPane tab='Rooms' key='2'>
                    <Rooms />
                </TabPane>
                <TabPane tab='Add Room' key='3'>
                    <AddRoom />
                </TabPane>
                <TabPane tab='Users' key='4'>
                    <Users />
                </TabPane>
            </Tabs>
        </div>

    )
}

export default Adminscreen


export function Bookings() {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8080/api/getbookings')
            .then((res) => {
                return res.json()
            })
            .then((bookings) => {
                setLoading(false)
                setBookings(bookings)
                //console.log(bookings)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h3>Bookings</h3>
                {loading && <Loader />}
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map((booking) => {
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export function Rooms() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8080/api/rooms')
            .then((res) => {
                return res.json()
            })
            .then((rooms) => {
                setLoading(false)
                setRooms(rooms)
                //console.log(bookings)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h3>Rooms</h3>
                {loading && <Loader />}
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Room Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent Per Day</th>
                            <th>Max Count</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map((room) => {
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phoneno}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8080/api/getusers')
            .then((res) => {
                return res.json()
            })
            .then((rooms) => {
                setLoading(false)
                setUsers(rooms)
                //console.log(bookings)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h3>Users</h3>
                {loading && <Loader />}
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length && (users.map((user) => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isadmin === true ? 'Yes' : 'No'}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function AddRoom() {
    const [name, setName] = useState();
    const [maxcount, setMaxCount] = useState();
    const [phonenumber, setPhoneNumber] = useState();
    const [rentperday, setRentPerDay] = useState();
    const [imageurl1, setImageUrl1] = useState();
    const [imageurl2, setImageUrl2] = useState();
    const [imageurl3, setImageUrl3] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSucces] = useState(false)

    const handleSubmit = () => {
        const roomDetails = {
            name,
            maxcount,
            phonenumber,
            rentperday,
            description,
            imageurls: [imageurl1, imageurl2, imageurl3],
            type,
          };
          
        //console.log(roomDetails)
        setLoading(true)
        fetch('http://localhost:8080/api/addroom', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(roomDetails)
        })
            .then((response) => {
                if (!response.ok) {
                    setLoading(false)
                    throw new Error('Network response was not ok');
                }
                setLoading(false)
                setSucces(true)
                setTimeout(() => {
                    window.location.reload();
                }, 400);
            })
            .catch((err) => {
                //console.log(err)
                setLoading(false)
                setError(true)
            })
    }

    return (
        <div className="row">
            {error && <Error message={"Ooops... Something Went wrong! Please try again."} />}
            {success && <Success message={"Room added Successfully!"} />}
            <div className="col-md-6">
                <input type="text" className='form-control' placeholder='Room Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Max Count' value={maxcount} onChange={(e) => setMaxCount(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Phone Number' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Rent Per Day' value={rentperday} onChange={(e) => setRentPerDay(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Decription' value={description} onChange={(e) => setDescription(e.target.value)} /><br />
            </div>
            <div className="col-md-6">
                <input type="text" className='form-control' placeholder='Image Url 1' value={imageurl1} onChange={(e) => setImageUrl1(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Image Url 2' value={imageurl2} onChange={(e) => setImageUrl2(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Image Url 3' value={imageurl3} onChange={(e) => setImageUrl3(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} /><br />
            </div>

            <button className='btn btn-primary' onClick={handleSubmit}>Add Room</button>
            {loading && <Loader />}
        </div>
    )
}