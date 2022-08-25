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
import SkillList from './SkillList';

function Platform() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme="brand.500" onClick={onOpen}>Platform</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent colorScheme="brand">
            <ModalCloseButton />
            <ModalBody>
                <Flex>
                    <Box>
                        <Text>WAYS TO UPSKILL</Text>
                        <SkillList />
                    </Box>
                    <Box>

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