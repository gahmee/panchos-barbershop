import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div id="nav-buttons">
                <div>Services</div>
                -
                <div>Barbers</div>
                -
                <div>Products</div>
            </div>
            <div id="home-button">
                <Link to="/" ><h1>Pancho's</h1></Link>
            </div>
            <Link id="book-appointment-button">
                BOOK NOW
            </Link>
            {/* <div>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/bookappointment" >Book Appointment</Link>
            </div> */}
        </div>
    )
}

export default Navbar