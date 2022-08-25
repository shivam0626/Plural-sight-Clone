import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from "./Topics.module.css";
const Topic=({course,number_of_course,image})=>{
    return(
    <Link to="#">
     <Flex className={styles.topics_flex}>
        <Box>
            <Text className={styles.t1}>PATH</Text>
            <Text className={styles.text1}>{course}</Text>
            <Text className={styles.t2}>{number_of_course}</Text>
            <Heading size="sm" className={styles.head2}>Take a look...</Heading>
        </Box>
        <Box>
            <Image src={image} alt="logo" w="55px" />
        </Box>
    </Flex>
    </Link>
    )
}
export default Topic;