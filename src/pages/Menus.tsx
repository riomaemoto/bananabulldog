import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const Menus = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        p={{ base: "10px", md: "100px" }}
        bgColor={"orange.100"}
        overflow={"hidden"}
      >
        <Box>
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
              />
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
                />
                <Image
                  mt={"22px"}
                  w={"230px"}
                  h={"260px"}
                  bgColor={"blue.200"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  src={store1}
                />
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
                />
                <Image
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  m={"10px"}
                  bgColor={"red.100"}
                  h={"230px"}
                  w={"200px"}
                  src={store1}
                />
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
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
