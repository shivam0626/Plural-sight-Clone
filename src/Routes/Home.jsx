import Navbar from "../Components/Navbar"
import Offer from "../Components/Offer"
import {Box} from "@chakra-ui/react"
import PopularTopics from "../Components/PopularTopics"
import LatestFeatures from "../Components/LatestFeatures"
import Discover from "../Components/Discover"

const Home = ()=>{
    return(
        <Box>
            <Navbar />
            <Offer />
            <PopularTopics />
            <LatestFeatures />
            <Discover />
        </Box>
    )
}
export default Home;