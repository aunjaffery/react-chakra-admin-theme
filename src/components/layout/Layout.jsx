import { Box, Flex, Container, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../navbars/Navbar";
import DrawerComp from "../drawer/Drawer";
import { useEffect } from "react";
import { useAppStore } from "../../store/AppStore";

const Layout = ({ children }) => {
  const [isLarger] = useMediaQuery("(min-width: 768px)");
  const { isSidebarOpen, onSidebarOpen } = useAppStore((state) => state);
  useEffect(() => {
    if (isLarger) {
      onSidebarOpen();
    } else return;
  }, []);
  return (
    <Box position="relative">
      <DrawerOverLay isLarger={isLarger} isSidebarOpen={isSidebarOpen} />
      <Flex>
        <DrawerComp isLarger={isLarger} />
        <Box
          flex="1"
          minH="calc(100vh)"
          bg="gray.200"
          position="relative"
          overflowY="hidden"
        >
          <Box
            h="100vh"
            overflowY="auto"
            sx={{
              "&::-webkit-scrollbar-track": {
                bg: "transparent",
              },
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                bg: "brand.100",
                borderRadius: "20px",
              },
            }}
          >
            <Navbar />
            <Container maxW="container.xl">{children}</Container>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const DrawerOverLay = ({ isLarger, isSidebarOpen }) => {
  return (
    <Box>
      {!isLarger && isSidebarOpen && (
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
