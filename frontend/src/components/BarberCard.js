import React from 'react'

const BarberCard = ({ handleSelectPreviousBarber, handleSelectBarber, name, picture, description }) => {
    return (
        <div>
            <h3 className="barber-name">{name}</h3>
            <div className="barber-container">
                <div>
                    <button onClick={() => handleSelectPreviousBarber()}>{`<`}</button>
                    <img className="barber-picture" src={picture}></img>
                    <button onClick={() => handleSelectBarber()}>{`>`}</button>
                </div>
                <div className="barber-description">
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div>
                        <button className="book-appointment-button">Book Appointment</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BarberCard