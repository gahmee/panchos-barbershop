import React from 'react'
import { motion } from "framer-motion"

const BarberCard = ({ isDesktop, handleSelectPreviousBarber, handleSelectBarber, name, picture, description }) => {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='barber-card'
        >
            <h3 className="barber-name">{name}</h3>
            <div className="barber-container">
                <div className="barber-header">
                    {!isDesktop && <button className="barber-select-button" onClick={() => handleSelectPreviousBarber()}>{`<`}</button>}
                    <img className="barber-picture" alt={`${name} cutting hair`} src={picture}></img>
                    {!isDesktop && <button className="barber-select-button" onClick={() => handleSelectBarber()}>{`>`}</button>}
                </div>
                <div className="barber-description">
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <a href="https://www.square.com" target="_blank" rel="noopener noreferrer">
                        <div>
                            <button className="book-appointment-button">Book Appointment</button>
                        </div>
                    </a>
                </div>
            </div>

        </motion.div>
    )
}

export default BarberCard