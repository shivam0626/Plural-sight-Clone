import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import styles from "./Discover.module.css";
const Story =()=>{
    return(
        <Flex mt="5rem">
            <Box>
                <Image src={"https://www.pluralsight.com/content/pluralsight/en/customer-stories/ryan-chasteauneuf/jcr:content/image-res.transform/share-image/image.img.7e1dbbfb-db20-4149-ab6d-a06911e95484.jpg"} alt="story"  />
            </Box>
            <Box className={styles.story_box}>
                <Image src={"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-customer-types-1/generic_block/parsys/columns/column-parsys-2/generic_block_1680525755/parsys/columns/column-parsys-1/image_copy/image-res.img.3e216197-72b2-4cf3-ab1c-ca12db822d73.png"} />
                <Text className={styles.text}>Ryan Chasteauneuf had always dreamed of being a soldier. After disaster struck in Afghanistan, he was forced to abandon his lifelong dream and start over. Driven to achieve in the face of adversity, he turned to Pluralsight to upskill.</Text>
                <Button 
                colorScheme={"black"}
                bg="black"
                mt="3rem"
                >SEE RYAN'S STORY</Button>
            </Box>
        </Flex>
    )
}
export default Story;