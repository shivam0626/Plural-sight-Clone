import { Box, Heading, Text, } from "@chakra-ui/react"
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";

const FooterList =({heading,data}) =>{
    return(
        <Box className={styles.listbox}>
            <Heading mb="2rem" size={"sm"}>{heading}</Heading>
            {data.map((el)=>(
                <Link to="#"><Text className={styles.text}>{el}</Text></Link>
            ))}
        </Box>
    )
}
export default FooterList;