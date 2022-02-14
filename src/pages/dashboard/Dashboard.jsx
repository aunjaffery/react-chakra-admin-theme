import { Box, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box mt="6">
      <Flex mb="4" justify="center">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          as="span"
          fontWeight="extrabold"
        >
          Wolf Skeleton
        </Text>
      </Flex>
      {Array.from(Array(7).keys()).map((x) => (
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={[6, 6, 6, 8]}
          mb="8"
          key={x}
        >
          <Text>
            For some reason this doesn't seem to work for me. However,
            @amarjeet987's solution works fine when I apply it directly to the
            element! Not really practical when you want to apply it to each
            instance of the element in your project, but it works. +1 Totally
            agree, the focus-visible approach is working well for me too, but it
            would be great if this could be implemented in the library itself
            somehow, those blue outlines showing up on click take away from how
            nice the rest of the components look.
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
