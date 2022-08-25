import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import styles from "./LatestFeatures.module.css";


const Features =({logo,head,heading,text,image})=>{
    return(
        <Flex className={styles.feature_flex}>
            <Box className={styles.feature_box}>
                <Flex mt="1rem" gap={"1rem"}>
                    <Image src={logo} alt="logo" h="25px" />
                    <Heading size={"sm"} color={"white"}>{head}</Heading>
                </Flex>
                <Heading size="xl" mt="1.5rem">{heading}</Heading> 
                <Text fontSize={"18px"} mt="1rem">{text}</Text>
                <Heading mt="3rem" size={"md"}>Learn More...</Heading>
            </Box>
            <Image src={image} alt="cloud" w="620px" />
        </Flex>
    )
}
export default Features;