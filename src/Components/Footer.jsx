import { SimpleGrid,Box, Divider, Container, Flex, Text } from "@chakra-ui/react";
import FooterList from "./FooterList";
import styles from "./Footer.module.css";
import {MdLanguage} from "react-icons/md"
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const Footer =()=>{
    const l1 = ['Pluralsight Skills','Pluralsight Flow','Government','Gift of Pluralsight','View Pricing','Contact Sales','Skill up for free'];
    const l2= ['Browse library','Role IQ','Skill IQ','Iris','Authors','Professional services'];
    const l3 = ['About us','Customer stories','Careers','Blog','Newsroom','Resource center','Guides'];
    const l4 = ['Download Pluralsight','Events','Teach','Partners','Affiliate Partners','PluralsightOne.org','Subscribe'];
    const l5 = ['Contact','Help center','IP allowlist','Sitemap'];
    return(
        <Box className={styles.footer_main} >             
            <SimpleGrid columns={5}>
                <FooterList heading={"SOLUTIONS"} data={l1}/>
                <FooterList heading={"PLATFORM"} data={l2}/>
                <FooterList heading={"COMPANY"} data={l3}/>
                <FooterList heading={"RESOURCES"} data={l4}/>
                <FooterList heading={"SUPPORT"} data={l5}/>
            </SimpleGrid>
            <Container maxW={"7xl"}>  
                <Divider className={styles.divider} />
                <Flex gap="2rem" className={styles.lan_flex}>
                    <MdLanguage size={"1.5rem"} />
                    <Link to="#"><Text>Deutsch</Text></Link>
                    <Link to="#"><Text>English</Text></Link>
                    <Link to="#"><Text>French</Text></Link>
                </Flex>
                <Divider className={styles.divider} />
                <FooterBottom />
            </Container>
        </Box>
    )
}
export default Footer;