import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useAppStore } from "../../store/AppStore";

const Navbar = () => {
  const { isSidebarOpen, onSidebarClose, onSidebarOpen } = useAppStore(
    (state) => state
  );
  return (
    <Box w="100%">
      <Flex
        bg="brand.100"
        h="68px"
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
              isSidebarOpen ? (
                <AiOutlineMenuFold size="22" />
              ) : (
                <AiOutlineMenuUnfold size="22" />
              )
            }
            _focus={{ outline: "none" }}
            onClick={isSidebarOpen ? onSidebarClose : onSidebarOpen}
            size="md"
            bg="brand.100"
            _hover={{ bg: "brand.100" }}
            _active={{ bg: "brand.100" }}
            color="white"
            borderRadius="full"
            boxShadow="md"
          />
          <Box ml="4">
            <Text fontWeight="bold" fontSize="xl" color="white">
              Wolf skeleton
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
