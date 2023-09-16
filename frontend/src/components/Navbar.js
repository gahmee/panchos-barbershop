import { Link } from "react-router-dom"

const Navbar = ({ isDesktop }) => {

    return (
        <div className="navbar">
            <ul className="nav-buttons" id="section-buttons">
                <li> <a href="#our-services-section">Services</a></li>
                <li><a href="#our-barbers-section">Barbers</a></li>
                <li><a href="#products-section">Products</a></li>
            </ul>
            <div className="nav-buttons" id="home-button">
                <Link to="/" ><h1>Pancho's</h1></Link>
            </div>
            {isDesktop && <div className="nav-buttons" id="appointment-buttons">

                <a href="#our-barbers-section">
                    <button className="book-appointment-button">
                        BOOK NOW
                    </button>
                </a>

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