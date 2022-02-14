import {
  Box,
  Collapse,
  Flex,
  IconButton,
  ScaleFade,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef } from "react";
import { SiFirefox } from "react-icons/si";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useAppStore } from "../../store/AppStore";

const DrawerComp = ({ isLarger }) => {
  const { isSidebarOpen, sidebarLinks, onSidebarClose, onOpenSubMenu } =
    useAppStore((state) => state);

  const ref = useRef();

  useOutsideClick({
    ref: ref,
    handler: !isLarger ? onSidebarClose : () => {},
  });

  return (
    <Box
      ref={ref}
      bg="white"
      maxW="100%"
      w={isSidebarOpen ? "300px" : !isLarger ? "0" : "60px"}
      position={!isLarger && "absolute"}
      transition={".4s width"}
      overflow="hidden"
      minH="100vh"
      zIndex="9999"
      boxShadow="md"
    >
      <Box mt="3">
        <Flex justify="center">
          <IconButton
            aria-label="loggo"
            bg="none"
            color="brand.100"
            icon={
              <SiFirefox
                size="32"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              />
            }
          />
        </Flex>

        <Box
          h="calc(100vh - 200px)"
          overflowY="auto"
          overflowX="hidden"
          my="8"
          sx={{
            "&::-webkit-scrollbar-track": {
              bg: "transparent",
            },
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              bg: "brand.100",
              borderRadius: "20px",
            },
          }}
        >
          <Flex direction="column">
            {sidebarLinks.map((x) =>
              x.child_routes ? (
                <Box key={x.id}>
                  <Flex
                    justify={isSidebarOpen ? "flex-start" : "center"}
                    _hover={{ bg: "gray.200" }}
                    px={isSidebarOpen ? 6 : 0}
                    py="4"
                    w="100%"
                    cursor="pointer"
                    borderLeftRadius="2xl"
                    mb="1"
                    onClick={() => (isSidebarOpen ? onOpenSubMenu(x.id) : null)}
                  >
                    <Box mb="1">{x.icon}</Box>
                    <Flex
                      flex="1"
                      style={{ display: isSidebarOpen ? "flex" : "none" }}
                      justify="space-between"
                    >
                      <ScaleFade in={isSidebarOpen} initialScale={0}>
                        <Text ml="3" fontSize="sm">
                          {x.name}
                        </Text>
                      </ScaleFade>
                      {x.open ? <FiChevronDown /> : <FiChevronRight />}
                    </Flex>
                  </Flex>
                  <Collapse in={x.open} animateOpacity>
                    <Box pl="14">
                      {x.child_routes.map((cr) => (
                        <NavLink to={cr.path} key={cr.id}>
                          {({ isActive }) => (
                            <ScaleFade
                              in={isSidebarOpen}
                              initialScale={0}
                              style={{
                                display: isSidebarOpen ? "block" : "none",
                              }}
                              mb="2"
                            >
                              <Flex
                                _hover={{ color: "teal.600" }}
                                py="2"
                                w="100%"
                                cursor="pointer"
                                color={isActive ? "teal.600" : "none"}
                                mb="1"
                              >
                                <Text fontSize="sm">{cr.name}</Text>
                              </Flex>
                            </ScaleFade>
                          )}
                        </NavLink>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ) : (
                <NavLink to={x.path} key={x.id}>
                  {({ isActive }) => (
                    <Flex
                      justify={isSidebarOpen ? "flex-start" : "center"}
                      _hover={{ bg: "gray.200" }}
                      px={isSidebarOpen ? 6 : 0}
                      py="4"
                      w="100%"
                      cursor="pointer"
                      borderLeftRadius="2xl"
                      bg={isActive ? "gray.200" : "none"}
                      mb="1"
                    >
                      <Box mb="1">{x.icon}</Box>
                      <ScaleFade
                        in={isSidebarOpen}
                        initialScale={0}
                        style={{ display: isSidebarOpen ? "block" : "none" }}
                      >
                        <Text ml="3" fontSize="sm">
                          {x.name}
                        </Text>
                      </ScaleFade>
                    </Flex>
                  )}
                </NavLink>
              )
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerComp;
