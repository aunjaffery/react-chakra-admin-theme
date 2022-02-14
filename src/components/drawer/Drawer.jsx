import {
  Box,
  Flex,
  IconButton,
  ScaleFade,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef } from "react";
import { SiFirefox } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { Navlinks } from "../../Links";

const DrawerComp = ({ onClose, isOpen, isLarger }) => {
  const ref = useRef();

  useOutsideClick({
    ref: ref,
    handler: !isLarger ? onClose : () => {},
  });

  return (
    <Box
      ref={ref}
      bg="white"
      maxW="95%"
      w={isOpen ? "300px" : !isLarger ? "0" : "60px"}
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
        <Box>
          <Flex direction="column" my="8">
            {Navlinks.map((x) => (
              <NavLink to={x.path} key={x.id}>
                {({ isActive }) => (
                  <Flex
                    justify={isOpen ? "flex-start" : "center"}
                    _hover={{ bg: "gray.200" }}
                    px={isOpen ? 6 : 0}
                    py="4"
                    w="100%"
                    cursor="pointer"
                    borderLeftRadius="2xl"
                    bg={isActive ? "gray.200" : "none"}
                    mb="1"
                  >
                    <Box mb="1">{x.icon}</Box>
                    <ScaleFade
                      in={isOpen}
                      initialScale={0}
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <Text ml="3" fontSize="sm">
                        {x.name}
                      </Text>
                    </ScaleFade>
                  </Flex>
                )}
              </NavLink>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerComp;
