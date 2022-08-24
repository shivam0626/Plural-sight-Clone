import { Heading, Image, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import dashboard from "../images/dashboard.png"
import iq from "../images/iq.png"
import cloud from "../images/cloud.png"
import hand from "../images/hand.png"
import certifications from "../images/certifications.png"
import analytics from "../images/analytics.png"


const SkillList =()=>{
    return(
        <List spacing={2}>
            <ListItem>
            <Link to="#">
                <img src={dashboard} alt="dashboard" w="20px" h="20px" />
                <Heading size="sm">Courses</Heading>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Image  src={iq} alt="iq" w="20px" h="20px" />
                <Heading size="sm">Skill Assessments</Heading>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Image  src={cloud} alt="cloud" w="20px" h="20px" />
                <Heading size="sm">Labs</Heading>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Image  src={hand} alt="hand" w="20px" h="20px" />
                <Heading size="sm">Hand-on learning</Heading>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Image  src={certifications} alt="certifications" w="20px" h="20px" />
                <Heading size="sm">Certification prep</Heading>
            </Link>
            </ListItem>
            <ListItem>
            <Link to="#">
                <Image  src={analytics} alt="analytics" w="20px" h="20px" />
                <Heading size="sm">Team efficiency</Heading>
            </Link>
            </ListItem>

            
        </List>
    )
}
export default SkillList;