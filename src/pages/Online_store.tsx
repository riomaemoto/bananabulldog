import { Box, Flex } from "@chakra-ui/react";

export const OnlineStore = () => {
  return (
    <>
      <Flex w={"100%"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
          bgColor={"purple.100"}
        >
          a
        </Box>
        <Box
          bgColor={"skyblue"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
        >
          b
        </Box>
      </Flex>
      <Flex w={"100%"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
          bgColor={"green.100"}
        >
          a
        </Box>
        <Box
          bgColor={"orange.200"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
        >
          b
        </Box>
      </Flex>
    </>
  );
};
