import { Box, Text, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const Popular = () => {
  return (
    <>
      <Box
        p={{ base: "10px", md: "50px" }}
        bgColor={"orange.100"}
        display={{ base: "block", md: "flex" }}
      >
        <Box
          p={"20px"}
          h={{ base: "400px", md: "500px" }}
          w={{ base: "100%", md: "50%" }}
        >
          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "18px", md: "30px" }}
            pt={{ base: "10px", md: "80px" }}
            pl={{ base: "20px", md: "80px" }}
            mx={"auto"}
          >
            当店人気No.1
          </Text>
          <Text
            w={"100%"}
            pt={"20px"}
            px={"20px"}
            textAlign={{ base: "center", md: "start" }}
          >
            bvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfgh
          </Text>
          <Text
            w={"100%"}
            pt={"20px"}
            px={"20px"}
            textAlign={{ base: "center", md: "start" }}
          >
            bvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfghんbvcdrtgcsdfghjhgvbんjhgfgh
          </Text>
        </Box>
        {/* <Box
          border={"2px solid black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={{ base: "300px", md: "600px" }}
          w={{ base: "100%", md: "50%" }}
        >
          a
        </Box> */}
        <Image p={"10px"} src={store1} alt="" />
      </Box>
    </>
  );
};
