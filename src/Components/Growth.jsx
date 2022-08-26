import { Box, Image,Heading, Text, Button } from "@chakra-ui/react"
import styles from "./Growth.module.css"
const Growth =()=>{
    return(
        <Box className={styles.growth_main}>
            <Image 
            className={styles.img}
            src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_1609496607/parsys/columns/column-parsys-1/animation_wrapper/parsys/image/image-res.img.fb67a8ae-f0d4-436b-a836-1de774719180.png"
            alt="logo" />
            <Heading 
            className={styles.heading}
            size={"xl"}
            >
                See our growth, progress and evolution
            </Heading>
            <Text  className={styles.text}>
                At Pluralsight, we see first-hand every day how technology makes the impossible, possible. It’s why Pluralsight One exists: To advance our mission of democratizing technology skills, challenging assumptions about solutions and create significant, lasting social impact.
            </Text>
            <Button 
            className={styles.btn}
            variant={"outline"}
            size="lg"
            >
                FOR NONPROFITS
            </Button>
        </Box>
    )
}
export default Growth;
