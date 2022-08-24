import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarImage = ()=>{
    return (
        <Link to="/" className={styles.web_logo}>
            <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png" alt="logo" />
        </Link>
    )
}
export default NavbarImage;