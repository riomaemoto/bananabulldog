import { Box, Text, Image } from "@chakra-ui/react";
import { store1 } from "../constants";

export const Location = () => {
  return (
    <>
      <Box
        p={{ base: "26px", md: "50px" }}
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
            pt={{ base: "5px", md: "80px" }}
            pl={{ base: "20px", md: "80px" }}
            mx={"auto"}
          >
            ロケーション
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
        <Image
          border={"2px solid black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={{ base: "300px", md: "600px" }}
          w={{ base: "100%", md: "50%" }}
          src={store1}
        ></Image>
      </Box>
    </>
  );
};
