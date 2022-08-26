import { Button, Flex, Heading } from "@chakra-ui/react"
import styles from "./Growth.module.css";

const Insight =()=>{
    return(
        <Flex className={styles.insight_flex} >
            <Heading size={"xl"}>Insights that give you an edge</Heading>
            <Button 
            colorScheme={"black"} 
            variant="outline" 
            size={"lg"}
            >
                TRY FOR FREE
            </Button>
        </Flex>
    )
}
export default Insight;