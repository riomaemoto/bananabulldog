import { Box, Flex, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const Pictures = () => {
  return (
    <>
      <Box
        w={"100%"}
        px={"20px"}
        py={"20px"}
        h={{ base: "330px", md: "600px" }}
        bgColor={"orange.100"}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Flex>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
            </Flex>
            <Flex>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
            </Flex>
            <Flex>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
              <Image
                src={store1}
                m={"5px"}
                w={{ base: "90px", md: "175px" }}
                h={{ base: "90px", md: "175px" }}
                bgColor={"green.100"}
              ></Image>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};
