import blacktop from "../../images/products/blacktop-pomade-6oz-front.jpg"
import classic from "../../images/products/classic-pomade-6oz-front.jpg"
import fiber from "../../images/products/fiber-pomade-6oz-front.jpg"
import gel from "../../images/products/gel-pomade.jpg"
import imperialLogo from "../../images/products/imperial-logo.jpg"
import { motion } from "framer-motion"

const Products = () => {
    return (
        <div id="products-section">
            <div id="product-section-title">
                <img src={imperialLogo}></img>
                SOLD HERE
            </div>
            <div id="product-container">
                <motion.img viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .5 } }} className="product-picture" src={blacktop}></motion.img>
                <motion.img viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .2, duration: .5 } }} className="product-picture" src={classic}></motion.img>
                <motion.img viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .4, duration: .5 } }} className="product-picture" src={fiber}></motion.img>
                <motion.img viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .6, duration: .5 } }} className="product-picture" src={gel}></motion.img>
            </div>

        </div>
    )
}

export default Products