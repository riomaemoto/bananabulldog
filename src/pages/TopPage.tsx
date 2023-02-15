import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Menus } from "./Menus";
import { Popular } from "./popular";
import { Location } from "./Location";
import { OnlineStore } from "./Online_store";
import { Gallery } from "./Gallery";
import { Pictures } from "./Pictures";
import { Hours } from "./Hours";

export const TopPage = () => {
  return (
    <>
      <Box bgColor={"red.100"} w={"100%"}>
        <Box maxW={"1400px"} m={"0 auto"} bgColor={"red.100"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              textAlign={"center"}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Banana Bulldog <br />
            </Heading>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                See menu
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box bgColor={"yellow"}>
        <Text p={8} pb={0} fontSize={"30px"} textAlign={"center"}>
          The story of Banana Bulldog
        </Text>
        <Text
          p={8}
          h={"400px"}
          fontSize={{ base: "18px", md: "30px" }}
          textAlign={"center"}
          overflow={"scroll"}
        >
          dhjnvcdserthnbvdsxcbnjytgfdvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytredhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytredhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxd
        </Text>
      </Box>
      <Popular />
      <Menus />
      <Location />
      <OnlineStore />
      <Gallery />
      <Pictures />
      <Hours />
    </>
  );
};
