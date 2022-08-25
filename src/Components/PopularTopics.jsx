import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Topic from "./Topic";
import styles from "./Topics.module.css";

const PopularTopics =()=>{
    return(
        <Box className={styles.main_box}>
            <Container maxW="5xl">
                <Heading size="sm" className={styles.heading1}>TRENDING TECHNOLOGIES</Heading>
                <Heading size="xl" className={styles.heading2} >Popular Topics to learn now</Heading>
                <SimpleGrid mt="4rem" spacing={8} columns={[1,2]}>
                    <Topic
                     course={"JavaScript"} 
                     number_of_course={"11 Courses"} 
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"}
                    />
                    <Topic 
                    course={"Angular"} 
                    number_of_course={"14 Courses"} 
                    image={"https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png"} 
                    />
                    <Topic 
                    course={"Core Python"} 
                    number_of_course={"12 Courses"}
                    image={"https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"} 
                    />
                    <Topic 
                    course={"C#"} 
                    number_of_course={"19 Courses"}
                    image={"https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png"} 
                    />
                </SimpleGrid>
            </Container>
        </Box>
    )
}
export default PopularTopics;