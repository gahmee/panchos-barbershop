import OurBarbers from "../components/home/OurBarbers"
import OurServices from "../components/home/OurServices"
import Welcome from "../components/home/Welcome"
import Products from "../components/home/Products"
import Footer from "../components/home/Footer"

const Home = ({ isDesktop }) => {

    return (
        <div>
            <Welcome isDesktop={isDesktop} />
            <OurServices isDesktop={isDesktop} />
            <OurBarbers isDesktop={isDesktop} />
            <Products />
            <Footer />
        </div>
    )
}

export default Home