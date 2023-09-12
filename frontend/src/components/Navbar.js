import { Link } from "react-router-dom"

const Navbar = ({ isDesktop }) => {

    return (
        <div className="navbar">
            <div className="nav-buttons" id="section-buttons">
                <div>Services</div>
                -
                <div>Barbers</div>
                -
                <div>Products</div>
            </div>
            <div className="nav-buttons" id="home-button">
                <Link to="/" ><h1>Pancho's</h1></Link>
            </div>
            {isDesktop && <div className="nav-buttons" id="appointment-buttons">
                <button className="book-appointment-button">
                    <Link>
                        BOOK NOW
                    </Link>
                </button>
            </div>}
            {/* <div>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/bookappointment" >Book Appointment</Link>
            </div> */}
        </div>
    )
}

export default Navbar