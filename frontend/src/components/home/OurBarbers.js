import { useState } from 'react'

import barberOnePicture from '../../images/barbers/barber.jpg'
import barberTwoPicture from '../../images/barbers/barber2.jpg'
import barberThreePicture from '../../images/barbers/barber3.jpg'

const OurBarbers = () => {

    const [barber, setBarber] = useState(0)

    const barberOne =
        <div className="barber-card">
            <div className="barber">
                <h3>NAME</h3>
                <img className="barber-picture" src={barberOnePicture}></img>
            </div>
            <div className="barber-description">
                <p>Introducing Barber A, the founder and visionary behind our esteemed barbershop. With over a decade of experience, Barber A's journey began with a passion for crafting exceptional looks. As the driving force behind our establishment, Barber A's expertise is unparalleled. From classic cuts to modern trends, Barber A's versatile skill set ensures that every client receives an impeccable, customized look that suits their individual style. When you sit in Barber A's chair, you're not just getting a haircut – you're experiencing the legacy of a true master. </p>
                <div>
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>

    const barberTwo =
        <div className="barber-card">
            <div className="barber">
                <h3> NAME </h3>
                <img className="barber-picture" src={barberTwoPicture}></img>
            </div>
            <div className="barber-description">
                <p>Meet Barber B, the creative visionary behind some of the most daring and cutting-edge hairstyles in the city. With a keen eye for trends and an innate ability to translate your personality into a hairstyle, Barber B is your go-to for making a bold statement. From vibrant hair colors to edgy fades, Barber B's work is a fusion of art and style. If you're ready to embrace your individuality and showcase your unique flair, Barber B is the artist you've been looking for.</p>
                <div>
                    <button>Book Appointment</button>
                </div>
            </div>

        </div>

    const barberThree =
        <div className="barber-card">
            <div className="barber">
                <h3>NAME</h3>
                <img className="barber-picture" src={barberThreePicture}></img>
            </div>
            <div className="barber-description">
                <p>For those who appreciate the finer things in life, Barber C offers a grooming experience fit for a modern gentleman. With an emphasis on relaxation, precision, and unparalleled service, Barber C delivers meticulously crafted haircuts, beard trims, and classic straight razor shaves. From the moment you step into their chair, you'll be transported to a world of luxury and refinement. Elevate your grooming routine with Barber C's expert touch. </p>
                <div>
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>

    const displayBarber = [barberOne, barberTwo, barberThree]

    const handleSelectBarber = () => {
        if (barber >= displayBarber.length - 1) {
            setBarber(0)
        } else {
            setBarber(barber + 1)
        }
    }

    const handleSelectPreviousBarber = () => {
        if (barber < 1) {
            setBarber(displayBarber.length - 1)
        } else {
            setBarber(barber - 1)
        }
    }

    return (
        <div id="our-barbers-section">
            <div id="our-barbers-section-title">Our Barbers</div>

            <p id="our-barbers-description">At our salon, we understand that finding the right barber is a personal journey. That's why we've assembled a team of three exceptional barbers, each with their own unique skills, personalities, and specialties. Explore their profiles below and discover the perfect match for your grooming needs.</p>


            <div id="barbers-container">
                <button onClick={() => handleSelectPreviousBarber()}>LEFT</button>
                {displayBarber[barber]}
                <button onClick={() => handleSelectBarber()}>RIGHT</button>
            </div>



        </div>
    )
}

export default OurBarbers