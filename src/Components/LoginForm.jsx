import { 
    Box,
    Button, 
    Container,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    Input,
    Stack 
} from "@chakra-ui/react"
import {Link } from "react-router-dom";
import styles from "./Login.module.css";
const LoginForm =()=>{
    return(
        <Box className={styles.login_box}>
            <Container ml="12%">
                <Image className={styles.img} src={"https://app.pluralsight.com/id/img/login-logo.png"} alt="logo"  />
                <Stack mt="2rem" spacing={3}>
                    <Heading size={"sm"}>Email or Username</Heading>
                    <Input w="300px" />
                    <Heading size={"sm"}>Password</Heading>
                    <Input w="300px" />
                </Stack>
                <Button className={styles.btn} colorScheme={"blue"}>Sign in</Button>
                <Button className={styles.btn} colorScheme={"blue"} variant="link">Forgot Password?</Button>
                <Button className={styles.btn} colorScheme={"blue"} variant="link">Sign in with company or school</Button>
                <Divider w="300px" mt="2rem" />
                <Button className={styles.btn} colorScheme={"blue"}>Create an account</Button>
                <Text className={styles.text}>Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</Text>
                <Flex gap="2rem" className={styles.link_flex}>
                    <Link className={styles.link} to="#"><Text>Terms of Use</Text></Link>
                    <Link className={styles.link} to="#"><Text>Privacy Policy</Text></Link>
                </Flex>
            </Container>
        </Box>
    )
}
export default LoginForm;