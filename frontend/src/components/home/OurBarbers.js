import { useEffect, useState } from 'react'
import BarberCard from '../BarberCard'

import barberOnePicture from '../../images/barbers/barber.jpg'
import barberTwoPicture from '../../images/barbers/barber2.jpg'
import barberThreePicture from '../../images/barbers/barber3.jpg'


const barbers = [
    {
        name: 'FRANCISCO "PANCHO" AGUIRRE',
        picture: barberOnePicture,
        description: `The founder and visionary behind our esteemed barbershop.
        With over a decade of experience, Pancho's journey began with a passion for crafting exceptional looks.
        From classic cuts to modern trends, Pancho's versatile skill set ensures that every client receives an impeccable, customized look that suits their individual style.
        When you sit in Pancho's chair, you're not just getting a haircut – you're experiencing the legacy of a true master.`},
    {
        name: 'DIEGO HERNANDEZ ',
        picture: barberTwoPicture,
        description: `The creative visionary behind some of the most daring and cutting-edge hairstyles in the city.
        With a keen eye for trends and an innate ability to translate your personality into a hairstyle, Diego is your go-to for making a bold statement.
        From vibrant hair colors to edgy fades, Diego's work is a fusion of art and style.
        If you're ready to embrace your individuality and showcase your unique flair, Diego is the artist you've been looking for.`
    },
    {
        name: 'CARLOS RAMIREZ',
        picture: barberThreePicture,
        description: `For those who appreciate the finer things in life, Barber C offers a grooming experience fit for a modern gentleman. 
        With an emphasis on relaxation, precision, and unparalleled service, Barber C delivers meticulously crafted haircuts, beard trims, and classic straight razor shaves. 
        From the moment you step into their chair, you'll be transported to a world of luxury and refinement. 
        Elevate your grooming routine with Barber C's expert touch. `
    }
]


const OurBarbers = ({ isDesktop }) => {
    const [barber, setBarber] = useState(0)

    const handleSelectBarber = () => {
        if (barber >= barbers.length - 1) {
            setBarber(0)
        } else {
            setBarber(barber + 1)
        }
    }

    const handleSelectPreviousBarber = () => {
        if (barber <= 0) {
            setBarber(barbers.length - 1)
        } else {
            setBarber(barber - 1)
        }
    }

    return (
        <div id="our-barbers-section">
            <div className="section-wrapper">
                <div id="our-barbers-section-title">MEET OUR BARBERS</div>

                <div id="barbers-container">

                    {isDesktop && barbers.map((barber) =>
                        <BarberCard isDesktop={isDesktop} name={barber.name} picture={barber.picture} description={barber.description} />
                    )}
                    {!isDesktop &&
                        <div>
                            <BarberCard handleSelectBarber={handleSelectBarber} handleSelectPreviousBarber={handleSelectPreviousBarber} name={barbers[barber].name} picture={barbers[barber].picture} description={barbers[barber].description} />
                        </div>}

                </div>
            </div>



        </div>
    )
}

export default OurBarbers