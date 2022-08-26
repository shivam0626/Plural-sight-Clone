import Navbar from "../Components/Navbar"
import Offer from "../Components/Offer"
import {Box} from "@chakra-ui/react"
import PopularTopics from "../Components/PopularTopics"
import LatestFeatures from "../Components/LatestFeatures"
import Discover from "../Components/Discover"
import Growth from "../Components/Growth"
import Insight from "../Components/Insight"
import Footer from "../Components/Footer"

const Home = ()=>{
    return(
        <Box>
            <Navbar />
            <Offer />
            <PopularTopics />
            <LatestFeatures />
            <Discover />
            <Growth />
            <Insight />
            <Footer />
        </Box>
    )
}
export default Home;