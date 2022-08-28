import { Box, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const SkillFor =()=>{
    const list = ['Software Development','IT ops','Info & cyber security','Cloud computing','Machine learning','Data professional']
    return(
        <Box className={styles.skillforlist}>
           {
           list.map((el)=>(
            <Link to="#">
                <Heading lineHeight={"1.8rem"} size={"sm"}>{el}</Heading>
            </Link>
           ))
           }
        </Box>
    )
}
export default SkillFor;