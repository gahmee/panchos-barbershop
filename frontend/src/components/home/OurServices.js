import hairdye from '../../images/hair-dye.jpg'
import haircut from '../../images/haircut.jpg'
import shave from '../../images/shave.jpg'

const OurServices = () => {
    return (
        <div id="our-services-section">
            <div id='our-services-section-title'>
                Our Services
            </div>

            <div id="our-services-description">
                Welcome to our premier salon, where your style journey begins. Our expert stylists and barbers are dedicated to giving you a transformative experience that leaves you looking and feeling your best. Whether you're seeking a bold change or a subtle enhancement, our range of haircut, hair dye, and shave services are tailored to suit your unique preferences and personality.
            </div>

            <div id="services-card-container">
                <div className="service-card">
                    <img src={haircut} alt="haircut"></img>
                    <div className='service-name'>HAIRCUT</div>
                    <div className='service-price'>$60</div>
                </div>
                <div className="service-card">
                    <img src={hairdye} alt="haircut"></img>
                    <div className='service-name'>HAIR DYE</div>
                    <div className='service-price'>$80</div>
                </div>
                <div className="service-card">
                    <img src={shave} alt="haircut"></img>
                    <div className='service-name'>SHAVE</div>
                    <div className='service-price'>$20</div>
                </div>
            </div>

        </div>
    )
}

export default OurServices
