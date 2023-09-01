import blacktop from "../../images/products/blacktop-pomade-6oz-front.jpg"
import classic from "../../images/products/classic-pomade-6oz-front.jpg"
import fiber from "../../images/products/fiber-pomade-6oz-front.jpg"
import imperialLogo from "../../images/products/imperial-logo.jpg"

const Products = () => {
    return (
        <div id="products-section">
            <div id="product-section-title">
                <img src={imperialLogo}></img>
            </div>
            <div id="product-container">
                <img className="product-picture" src={blacktop}></img>
                <img className="product-picture" src={classic}></img>
                <img className="product-picture" src={fiber}></img>
            </div>

        </div>
    )
}

export default Products