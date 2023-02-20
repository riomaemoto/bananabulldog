import { Box, Flex, Text } from "@chakra-ui/react";

export const Hours = () => {
  return (
    <>
      <Box w={"100%"} bgColor={"orange.100"}>
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
        <Text
          m={"auto"}
          mb={"20px"}
          h={"1px"}
          w={"90%"}
          // bgColor={"black"}
        ></Text>

        <Box p={"20px"} pb={{ base: "40px", md: "100px" }}>
          <Text
            m={"auto"}
            p={"10px"}
            textAlign={"center"}
            w={"200px"}
            bgColor={"brown"}
            borderRadius={"20px"}
            color={"white"}
          >
            お問い合わせ
          </Text>
        </Box>
      </Box>
    </>
  );
};
