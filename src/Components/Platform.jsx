import {
    Modal,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,Text, Flex
  } from '@chakra-ui/react';
import SkillFor from './SkillFor';
import SkillList from './SkillList';

function Platform() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme="brand.500" onClick={onOpen}>Platform</Button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalContent bgColor="black">
            <ModalCloseButton />
            <ModalBody>
                <Flex gap={"5rem"}>
                    <Box>
                      <Text fontSize={"14px"} color={"whiteAlpha.500"}>WAYS TO UPSKILL</Text>
                      <SkillList />
                    </Box>
                    <Box>
                      <Text fontSize={"14px"} color={"whiteAlpha.500"}>SKILL FOR</Text>
                      <SkillFor />
                    </Box>
                </Flex>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Platform;