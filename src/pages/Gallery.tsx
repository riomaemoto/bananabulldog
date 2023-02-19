import { Box, Image, Text } from "@chakra-ui/react";
import { firstLogo1, store1 } from "../constants";

export const Gallery = () => {
  return (
    <>
      <Box pb={"55px"} bgColor={"orange.100"}>
        <Text fontSize={"28px"} p={"60px"} textAlign={"center"}>
          Gallery
        </Text>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100vw"}
        >
          <Box
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image p={"10px"} src={store1} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
