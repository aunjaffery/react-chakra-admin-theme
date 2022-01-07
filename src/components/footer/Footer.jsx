import { Box, Text, Flex, Container } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box bg="gray.600" minH="60px">
      <Container maxW="container.xl">
        <Flex>
          <Text color="white">This is footer</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
