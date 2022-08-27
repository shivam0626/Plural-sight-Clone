import { Box, Flex, Heading,Button } from "@chakra-ui/react"
import LoginForm from "../Components/LoginForm";
import styles from "../Components/Login.module.css"

const Login=()=>{
    return(
       <Box>
        <Flex>
            <Box w="40%">
                <LoginForm />
            </Box>
            <Box className={styles.img_box}>
                <Flex gap={"1rem"} className={styles.heading_flex}>
                    <Heading fontWeight={"light"} size={"2xl"}>Let's create the future</Heading>
                    <Heading size={"2xl"}>together.</Heading>
                </Flex>
                <Button className={styles.trial_btn} colorScheme={"white"} variant="outline">Start a FREE 10-day trial</Button>
            </Box>
        </Flex>
       </Box>
    )
}
export default Login;