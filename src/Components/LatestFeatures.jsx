import { Box,Heading, SimpleGrid } from "@chakra-ui/react"
import Features from "./Feature";
import styles from "./LatestFeatures.module.css";
import cloud from "../images/Cloud-labs-image2x-min.png";
import flow from "../images/flow-interface.png"
import FeaturesMini from "./FeaturesMini";
import certify from "../images/certification-prep.png"
import d_module from "../images/delivery-module.png"
import sandboxes from "../images/sandboxes.png"


const LatestFeatures =()=>{
    return (
        <Box className={styles.main_box}>
            <Heading size="sm" className={styles.heading1}>SEE WHAT'S NEW</Heading>
            <Heading size="xl" className={styles.heading2}>Our latest features</Heading>
            <Features 
            logo={"https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png"}
            head={"LABS"}
            heading={"Deepen your people's expertise with hands-on labs"}
            text={"Improve your teams’ confidence in their ability to deliver on business objectives by building the right skills that meet your org’s needs. Pluralsight offers 950+ labs that enable hands-on practice in secure environments across domains such as cloud (AWS, GCP and Azure), IT Ops, security, data and software development."}
            image={cloud}
            />
             <Features 
            logo={"https://www.pluralsight.com/content/dam/pluralsight2/abm-assets/abm-template/abm-flow-logo.png"}
            head={""}
            heading={"Unlock your people and upgrade your process like never before"}
            text={"Pluralsight Flow's newest insights show you the what, how, and why of your team's dynamics and delivery.The result? Healthier and more efficient engineering teams."}
            image={flow}
            />
            <SimpleGrid columns={[1,null,3,3]} className={styles.grid}>
                <FeaturesMini 
                logo={certify}
                heading={"Empower your teams to grow their skills and their careers"}
                text={"Prepare your team for certification exams with our expert authored content and practice exams."}
                />
                <FeaturesMini 
                logo={d_module}
                heading={"Make lasting workflow improvements with insights from your Jira data"}
                text={"Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow."}
                />
                <FeaturesMini 
                logo={sandboxes}
                heading={"Utilize a space for unrestricted exploration"}
                text={"Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses."}
                />

                
            </SimpleGrid>
        </Box> 
    )
}
export default LatestFeatures;