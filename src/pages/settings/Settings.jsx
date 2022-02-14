import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";

const Settings = () => {
  const sendMsg = (e) => {
    e.preventDefault();
    if (e.target.msg.value) {
      let data = {
        channelId: e.target.channelId.value,
        msg: e.target.msg.value,
      };
      console.log(data);
    }
  };
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
          Wolf Settings
        </Text>
      </Flex>
      <Flex my="10" justify="center">
        <form onSubmit={sendMsg} style={{ width: "100%", maxWidth: "600px" }}>
          <Flex direction="column" align="center" gridGap="6">
            <Input
              placeholder="channelId"
              name="channelId"
              borderColor="gray.600"
            />
            <Input placeholder="msg" name="msg" borderColor="gray.600" />
            <Button type="submit" w="100%">
              send
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Settings;
