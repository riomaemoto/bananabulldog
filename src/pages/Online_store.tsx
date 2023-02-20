import { Box, Flex, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const OnlineStore = () => {
  return (
    <>
      <Flex w={"100%"}>
        <Image
          src={store1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
          bgColor={"purple.100"}
        ></Image>
        <Image
          src={store1}
          bgColor={"skyblue"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
        ></Image>
      </Flex>
      <Flex w={"100%"}>
        <Image
          src={store1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
          bgColor={"green.100"}
        ></Image>
        <Image
          src={store1}
          bgColor={"orange.200"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          h={{ base: "200px", md: "600px" }}
        ></Image>
      </Flex>
    </>
  );
};
