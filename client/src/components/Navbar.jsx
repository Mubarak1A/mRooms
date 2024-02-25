import { Link } from "react-router-dom";

const Navbar = () => {
    let user = JSON.parse(localStorage.getItem("currentuser"));
    const logout = () => {
        localStorage.removeItem("currentuser")
        user = None
    }

    //console.log(user)

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">mRooms</Link>
            <button className="navbar-toggler" style={{color:"white"}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {user ? (<>
                        <div class="dropdown mr-3">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-user mr-2"></i>{user.name}
                            </button>
                            <div class="dropdown-menu ">
                                <Link class="dropdown-item" to="/bookings">Bookings</Link>
                                <Link class="dropdown-item" to="/login" onClick={logout}>Logout</Link>
                            </div>
                        </div>
                </>) : <>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </>}
            </ul>
        </div>
        </nav >
    )
}

export default Navbar;
