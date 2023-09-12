import { Link } from "react-router-dom"

const Welcome = ({ isDesktop }) => {
    return (
        <div id="welcome-section">

            <div id="panchos-description">
                <h1>Clean <br></br> Cut <br></br>Confidence</h1>
                {!isDesktop &&
                    <button className="book-appointment-button">
                        <Link>
                            BOOK NOW
                        </Link>
                    </button>
                }
            </div>

        </div>
    )
}

export default Welcome