import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const Hours = () => {
  return (
    <>
      <Box p={"40px"} w={"100%"} bgColor={"orange.100"}>
        <Text
          fontSize={{ base: "24px", md: "32px" }}
          p={"18px"}
          textAlign={"center"}
        >
          営業時間
        </Text>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Flex>
            <Box p={"5px"} pl={{ base: "0px", md: "40px" }}>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                月曜日 9:00 - 22:00
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                火曜日 9:00 - 22:00
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                水曜日 9:00 - 22:00
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                木曜日 9:00 - 22:00
              </Text>
            </Box>
            <Box p={"5px"} pl={{ base: "0px", md: "40px" }}>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                金曜日 9:00 - 22:00
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                土曜日 9:00 - 22:00
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }} p={"8px"}>
                日曜日 9:00 - 22:00
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* <Box p={"32px"} textAlign={"center"}>
          <Button colorScheme={"twitter"} rounded={"full"} px={6}>
            <Text textAlign={"center"} fontSize={"16px"} fontWeight={"600"}>
              お問い合わせ
            </Text>
          </Button>
        </Box> */}
      </Box>
    </>
  );
};
