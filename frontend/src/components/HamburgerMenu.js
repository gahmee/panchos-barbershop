import { useRef } from "react"
import { useOnClickOutside } from "./hooks/useOnClickOutside"

const HamburgerMenu = ({ setToggleHamburgerMenu }) => {
    const contextMenuRef = useRef(null)
    useOnClickOutside(contextMenuRef, () => setToggleHamburgerMenu(false))

    return (
        <nav className="hamburger-menu" ref={contextMenuRef}>
            <ul className="nav-buttons" id="mobile-section-buttons">
                <li> <a href="#our-services-section">Services</a></li>
                <li><a href="#our-barbers-section">Barbers</a></li>
                <li><a href="#products-section">Products</a></li>
                <button className="book-appointment-button">Book Appointment</button>
            </ul>
        </nav>
    )
}

export default HamburgerMenu