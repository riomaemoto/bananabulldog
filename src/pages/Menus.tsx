import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const Menus = () => {
  return (
    <>
      <Box
        m={"0 auto"}
        w={"100%"}
        p={"10px"}
        bgColor={"orange.100"}
        overflow={"hidden"}
      >
        <Flex
          w={"100vw"}
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
        >
          <Box p={"10px"} w={"30%"} justifyContent={"space-around"}>
            <Image
              w={"100%"}
              h={"500px"}
              bgColor={"blue.200"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              src={store1}
            ></Image>
            <Flex justifyContent={"space-between"}>
              <Image
                mt={"22px"}
                w={"230px"}
                h={"260px"}
                bgColor={"blue.200"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                src={store1}
              ></Image>
              <Image
                mt={"22px"}
                w={"230px"}
                h={"260px"}
                bgColor={"blue.200"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                src={store1}
              ></Image>
            </Flex>
          </Box>

          <Box>
            <Flex>
              <Image
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                m={"10px"}
                bgColor={"red.100"}
                h={"300px"}
                w={"200px"}
                src={store1}
              ></Image>
              <Image
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                m={"10px"}
                bgColor={"red.100"}
                h={"230px"}
                w={"200px"}
                src={store1}
              ></Image>
            </Flex>
            <Image
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"green"}
              m={"10px"}
              h={"463px"}
              w={"400px"}
              src={store1}
            ></Image>
          </Box>
        </Flex>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"200px"}
        >
          <Text
            borderRadius={"30px"}
            p={"10px"}
            w={{ base: "150px", md: "200px" }}
            bgColor={"green.300"}
            textAlign={"center"}
            textDecor={"underline"}
          >
            他のメニュー
          </Text>
        </Box>
      </Box>
    </>
  );
};
