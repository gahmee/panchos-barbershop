import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Welcome = ({ isDesktop }) => {
    return (
        <div id="welcome-section">

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


// initial = {{ opacity: 0 }}
// whileInView = {{ opacity: 1, transition: { delay: .3 } }}

export default Welcome