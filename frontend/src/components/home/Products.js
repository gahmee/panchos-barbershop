import blacktop from "../../images/products/blacktop-pomade-6oz-front.jpg"
import classic from "../../images/products/classic-pomade-6oz-front.jpg"
import fiber from "../../images/products/fiber-pomade-6oz-front.jpg"
import gel from "../../images/products/gel-pomade.jpg"
import imperialLogo from "../../images/products/imperial-logo.jpg"
import { motion } from "framer-motion"

const Products = () => {
    return (
        <section id="products-section">
            <div id="product-section-title">
                <img alt="imperial pomade products logo" src={imperialLogo}></img>
                SOLD HERE
            </div>
            <div id="product-container">
                <motion.img
                    viewport={{ once: true, amount: 1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: .5 } }}
                    className="product-picture"
                    src={blacktop}
                    alt="imperial blacktop pomade"
                >
                </motion.img>
                <motion.img
                    viewport={{ once: true, amount: 1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1, transition: { delay: .2, duration: .5 }
                    }}
                    className="product-picture"
                    src={classic}
                    alt="imperial classic pomade"
                >
                </motion.img>
                <motion.img
                    viewport={{ once: true, amount: 1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: .4, duration: .5 } }}
                    className="product-picture" src={fiber}
                    alt="imperial fiber pomade"
                >
                </motion.img>
                <motion.img
                    viewport={{ once: true, amount: 1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: .6, duration: .5 } }}
                    className="product-picture" src={gel}
                    alt="imperial gel pomade"
                >
                </motion.img>
            </div>


        </section>
    )
}

export default Products