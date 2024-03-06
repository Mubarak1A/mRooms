import { useState } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Room = ({room, fromDate, toDate}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="row bs">
                <div className="col-md-4">
                    <img src={room.imageurls[0]} className="small-img"></img>
                </div>
                <div className="col-md-7 mt-5 text-right">
                    <h1>{room.name}</h1>
                    <p><b>Max Count:</b> {room.maxcount}</p>
                    <p><b>Phone Number</b>: {room.phonenumber}</p>
                    <p><b>Type:</b> {room.type}</p>

                    <div style={{float:'right'}}>
                        {(fromDate && toDate) && (
                            <Link to={`/rooms/${room._id}/${fromDate}/${toDate}`}>
                                <button className='btn btn-primary mr-3'>Book Now</button>
                            </Link>
                        )}
                        <button className="btn btn-primary" onClick={handleShow}>View Details</button>
                    </div>

                    <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header closeButton>
                        <Modal.Title>{room.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel>
                                {room.imageurls.map(url => {
                                    return <Carousel.Item>
                                    <img 
                                        className='d-block w-100 big-img'
                                        src={url}
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            <p>{room.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Room;