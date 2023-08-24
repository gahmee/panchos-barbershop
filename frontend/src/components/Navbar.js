import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" ><h1>Panchos Barbershop</h1></Link>
            <div>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/bookappointment" >Book Appointment</Link>
            </div>
        </div>
    )
}

export default Navbar