import OurBarbers from "../components/home/OurBarbers"
import OurServices from "../components/home/OurServices"
import Welcome from "../components/home/Welcome"
import Products from "../components/home/Products"
import Footer from "../components/home/Footer"

const Home = () => {
    return (
        <div>
            <Welcome />
            <OurServices />
            <OurBarbers />
            <Products />
            <Footer />
        </div>
    )
}

export default Home