import { Box, Button, Heading } from "@chakra-ui/react"
import NavbarImage from "./NavbarImage";
import Platform from "./Platform";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"

 const Navbar = () =>{
    return(
        <Box className={styles.main_navbar}>
            <Box className={styles.nav_box1}>
                <NavbarImage />
                <Platform />
                <Link to="#"> <Heading mt="10px" size={"sm"}>Solutions</Heading></Link>
                <Link to="#"><Heading mt="10px" size={"sm"}>Products</Heading></Link>
                <Link to="#"><Heading mt="10px" size={"sm"}>Resources</Heading></Link>
                <Link to="#"><Heading mt="10px" size={"sm"}>For Individuals</Heading></Link>
            </Box>
            <Box className={styles.nav_box1}>
                <Box mt="10px">
                    <Link to="#"><FaSearch  size={"1.2rem"} /></Link>
                </Box>
                <Link to="/login"> <Heading mt="10px" size={"sm"}>Sign In</Heading></Link>
                <Button colorScheme="brand.500" variant="outline">TRY FOR FREE</Button>
            </Box>
        </Box>
    )
 }
export default Navbar;