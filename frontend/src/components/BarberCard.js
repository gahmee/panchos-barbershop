import React from 'react'

const BarberCard = ({ isDesktop, handleSelectPreviousBarber, handleSelectBarber, name, picture, description }) => {
    return (
        <div>
            <h3 className="barber-name">{name}</h3>
            <div className="barber-container">
                <div className="barber-header">
                    {!isDesktop && <button className="barber-select-button" onClick={() => handleSelectPreviousBarber()}>{`<`}</button>}
                    <img className="barber-picture" src={picture}></img>
                    {!isDesktop && <button className="barber-select-button" onClick={() => handleSelectBarber()}>{`>`}</button>}
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