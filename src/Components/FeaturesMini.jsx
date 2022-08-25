import { Box, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./LatestFeatures.module.css";
import { Link } from "react-router-dom";

const FeaturesMini =({logo,heading,text})=>{
    return(
        <Box className={styles.feature_mini_box}>
            <Image src={logo} alt="logo"/>
            <Heading mt="1.5rem" size={"lg"}>{heading}</Heading>
            <Text fontSize={"18px"} mt="1.5rem">{text}</Text>
            <Link to="#"><Heading mt="1.5rem" size={"md"}>Learn More...</Heading></Link>
        </Box>
    )
}
export default FeaturesMini;