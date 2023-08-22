import OurBarbers from "../components/home/OurBarbers"
import OurServices from "../components/home/OurServices"
import Welcome from "../components/home/Welcome"

const Home = () => {
    return (
        <div>
            <Welcome />
            <OurServices />
            <OurBarbers />
        </div>
    )
}

export default Home