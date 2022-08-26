import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import {FaFacebookF,FaInstagramSquare,FaTwitter,FaLinkedinIn,FaYoutube} from "react-icons/fa";

const FooterBottom =()=>{
    return(
        <Flex mt="2rem" gap="4rem">
            <Box>
                <Flex gap={"1.5rem"}>
                    <Link to="#"><Image src="https://www.pluralsight.com/content/dam/pluralsight2/general/icons/light/ps-icon.png" alt="logo" w="35px" /></Link>
                    <Text mt="10px" fontSize={"12px"}>Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</Text>
                </Flex>
            </Box>
            <Box>
                <Flex mt="1rem" gap={"2rem"}>
                    <Link to="#"><Heading size={"xs"}>Terms of Use</Heading></Link>
                    <Link to="#"><Heading size={"xs"}>Privacy Notice</Heading></Link>
                    <Link to="#"><Heading size={"xs"}>Modern Slavery Act Transparency Statement</Heading></Link>
                </Flex>
            </Box>
            <Box>
                <Flex  mt="1rem"  gap={"1.5rem"}>
                    <Link to="#"><FaFacebookF /></Link>
                    <Link to="#"><FaInstagramSquare /></Link>
                    <Link to="#"><FaTwitter /></Link>
                    <Link to="#"><FaLinkedinIn /></Link>
                    <Link to="#"><FaYoutube /></Link>
                </Flex>
            </Box>
        </Flex>
    )
}
export default FooterBottom;