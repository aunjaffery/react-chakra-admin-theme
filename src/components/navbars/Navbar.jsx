import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = ({ onOpen, isOpen, onClose }) => {
  return (
    <Box w="100%">
      <Flex
        bg="purple.800"
        h="60px"
        align="center"
        px="4"
        justify="space-between"
      >
        <Flex align="center">
          <IconButton
            css={{
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            }}
            aria-label="close-btn"
            icon={
              isOpen ? (
                <AiOutlineMenuFold size="22" />
              ) : (
                <AiOutlineMenuUnfold size="22" />
              )
            }
            _focus={{ outline: "none" }}
            onClick={isOpen ? onClose : onOpen}
            size="md"
            bg="purple.800"
            _hover={{ bg: "purple.800" }}
            _active={{ bg: "purple.800" }}
            color="white"
            borderRadius="full"
            boxShadow="md"
          />
          <Box ml="4">
            <Text fontWeight="bold" fontSize="xl" color="white">
              Home
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
