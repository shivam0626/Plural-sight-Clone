import { Flex, Heading, Image, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import dashboard from "../images/dashboard.png"
import iq from "../images/iq.png"
import cloud from "../images/cloud.png"
import hand from "../images/hand.png"
import certifications from "../images/certifications.png"
import analytics from "../images/analytics.png"


const SkillList =()=>{
    return(
        <List mt="1rem" color={"white"} spacing={7}>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image src={dashboard} alt="dashboard" w="20px" h="20px" />
                    <Heading size="sm">Courses</Heading>
                </Flex>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image  src={iq} alt="iq" w="20px" h="20px" />
                    <Heading size="sm">Skill Assessments</Heading>
                </Flex>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image  src={cloud} alt="cloud" w="20px" h="20px" />
                    <Heading size="sm">Labs</Heading>
                </Flex>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image  src={hand} alt="hand" w="20px" h="20px" />
                    <Heading size="sm">Hand-on learning</Heading>
                </Flex>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image  src={certifications} alt="certifications" w="20px" h="20px" />
                    <Heading size="sm">Certification prep</Heading>
                </Flex>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Flex gap="1rem">
                    <Image  src={analytics} alt="analytics" w="20px" h="20px" />
                    <Heading size="sm">Team efficiency</Heading>
                </Flex>
            </Link>
            </ListItem>

            
        </List>
    )
}
export default SkillList;