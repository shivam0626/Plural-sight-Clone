import { Box,Heading, SimpleGrid } from "@chakra-ui/react"
import styles from "./Discover.module.css"
import DiscoverComponent from "./DiscoverComponent";
import Story from "./Story";
const Discover =()=>{
    return(
        <Box className={styles.main_box}>
            <Heading size="sm" className={styles.heading1}>KEEP UP TO DATE</Heading>
            <Heading size="xl" className={styles.heading2}>Discover more about Pluralsight</Heading>
            <SimpleGrid spacing={1} columns={[1,2,2,4]}>
                <DiscoverComponent 
                img={"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/image/image-res.img.7ff160d9-5248-4b11-804e-cf66f7281f75.jpg"} 
                heading={"WHAT IS PLURALSIGHT SKILLS?"}
                text={"Discover the fastest, most effective path to developing technology skills"}
                />
                <DiscoverComponent 
                img={"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1875049544/parsys/image/image-res.img.50c64034-5c04-4b3b-aa76-4d2ce92c35cc.png"} 
                heading={"PLURALSIGHT NAMED A LEADER FOR IT TRAINING"}
                text={"We're honored to be recognized in the 2021 IDC MarketScape for IT training."}
                />
                <DiscoverComponent 
                img={"https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-demo-thumbnail.png"} 
                heading={"LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW"}
                text={"Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level"}
                />
                <DiscoverComponent 
                img={"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_383891725/parsys/image/image-res.img.52e3fa3f-a6b2-4942-bee6-bdf060c01de7.png"} 
                heading={"CREATE YOUR FREE ACCOUNT"}
                text={"Build new tech skills on us with free access to 50+ expert-led courses, assessments and more."}
                />
            </SimpleGrid>
            <Story />
        </Box>
    )
}
export default Discover;