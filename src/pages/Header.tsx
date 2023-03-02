import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { headerLogo1 } from "../constants";

export const Header = () => {
  const headerList = [
    {
      title: "HOME",
    },
    {
      title: "MENU",
    },
    {
      title: "PRODUCT",
    },
    {
      title: "LOCATION",
    },
    {
      title: "GALLERY",
    },
  ];

  return (
    <>
      <Flex bgColor={"white"} align={"center"} h={"100px"}>
        <Box>
          <Image
            display={"block"}
            m={"20px"}
            src={headerLogo1}
            w={"100px"}
            h={"100px"}
          />
        </Box>
        {/* <Box px={"24px"} borderRight={"1px solid black"}>
          <Text fontSize={"16px"} fontWeight={"bold"} mx={"auto"}>
            HOME
          </Text>
        </Box> */}
        {headerList.map((item) => (
          <Box
            {...(item.title === "HOME"
              ? { backgroundColor: "orange.400" }
              : { backgroundColor: "none" })}
            w={"200px"}
            _hover={{
              ...(item.title === "HOME"
                ? { color: "black" }
                : { color: "white" }),
              backgroundColor: "orange.400",
              cursor: "pointer",
            }}
            p={"24px"}
            borderRight={"1px solid black"}
          >
            <Text
              {...(item.title === "HOME"
                ? { fontWeight: "bold" }
                : { fontWeight: "none" })}
              fontSize={"16px"}
              textAlign={"center"}
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};
