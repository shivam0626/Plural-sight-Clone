import { Box, Button } from "@chakra-ui/react"
import NavbarImage from "./NavbarImage";
import Platform from "./Platform";
import styles from "./Navbar.module.css"

 const Navbar = () =>{
    return(
        <Box className={styles.main_navbar}>
            <Box className={styles.nav_box1}>
                <NavbarImage />
                <Platform />
                <Platform />
                <Platform />

            </Box>
            <Box>
                <Button colorScheme="brand.500" variant="outline">TRY FOR FREE</Button>
            </Box>
        </Box>
    )
 }
export default Navbar;