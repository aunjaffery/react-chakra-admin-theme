import {
  Box,
  Flex,
  useDisclosure,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "../navbars/Navbar";
import DrawerComp from "../drawer/Drawer";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [isLarger] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    if (isLarger) {
      onOpen();
    } else return;
  }, []);
  return (
    <Box position="relative">
      <DrawerOverLay isLarger={isLarger} isOpen={isOpen} />
      <Flex>
        <DrawerComp isOpen={isOpen} onClose={onClose} isLarger={isLarger} />
        <Box
          w="100%"
          minH="calc(100vh)"
          bg="gray.200"
          position="relative"
          overflowY="hidden"
        >
          <SimpleBar style={{ maxHeight: "calc(100vh" }}>
            <Navbar onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
            <Container maxW="container.xl">{children}</Container>
          </SimpleBar>
        </Box>
      </Flex>
    </Box>
  );
};

const DrawerOverLay = ({ isLarger, isOpen }) => {
  return (
    <Box>
      {!isLarger && isOpen && (
        <Box
          w="100vw"
          h="100vh"
          bg="blackAlpha.500"
          position="fixed"
          top="0"
          left="0"
          zIndex="1300"
        />
      )}
    </Box>
  );
};

export default Layout;
