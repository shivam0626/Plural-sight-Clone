import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from "./Discover.module.css"

const DiscoverComponent =({img,heading,text})=>{
    return(
        <Box className={styles.grid_box}>
            <Link to="#"><Image className={styles.img} src={img} alt="link"/></Link>
            <Heading className={styles.y_head} size={"sm"}>{heading}</Heading>
            <Text className={styles.para}>{text}</Text>
        </Box>
    )
}
export default DiscoverComponent;