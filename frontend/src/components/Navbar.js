

const Navbar = ({ isDesktop, setToggleHamburgerMenu }) => {

    return (
        <nav className="navbar">

            <ul className="nav-buttons" id="section-buttons">
                <li> <a href="#our-services-section">Services</a></li>
                <li><a href="#our-barbers-section">Barbers</a></li>
                <li><a href="#products-section">Products</a></li>
            </ul>
            <div className="nav-buttons" id="home-button">
                <a href="#welcome-section"><h1>Pancho's</h1></a>
            </div>
            {isDesktop && <div className="nav-buttons" id="appointment-buttons">

                <a href="#our-barbers-section">
                    <div>
                        <button className="book-appointment-button">Book Now</button>
                    </div>
                </a>

            </div>}
            {!isDesktop &&
                <button id="hamburger-menu-button" onClick={() => setToggleHamburgerMenu(true)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>}
        </nav>
    )
}

export default Navbar