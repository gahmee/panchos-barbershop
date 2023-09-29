import { motion } from "framer-motion"

const Welcome = ({ isDesktop }) => {
    return (
        <section id="welcome-section">

            <div id="panchos-description">
                <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .1, duration: 2 } }}>
                    CLEAN
                </motion.div>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .6, duration: 2 } }}>
                    CUT
                </motion.div>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.1, duration: 2 } }}>
                    CONFIDENCE
                </motion.div>
                {!isDesktop &&
                    <a href="https://www.square.com" target="_blank" rel="noopener noreferrer">
                        <div>
                            <button className="book-appointment-button">Book Appointment</button>
                        </div>
                    </a>
                }
            </div>

        </section>
    )
}


// initial = {{ opacity: 0 }}
// whileInView = {{ opacity: 1, transition: { delay: .3 } }}

export default Welcome