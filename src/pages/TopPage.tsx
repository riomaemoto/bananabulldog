import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Menus } from "./Menus";
import { Popular } from "./popular";
import { Location } from "./Location";
import { OnlineStore } from "./Online_store";
import { Gallery } from "./Gallery";
import { Pictures } from "./Pictures";
import { Hours } from "./Hours";
import { Link } from "react-router-dom";
import { store1 } from "../constants";

export const TopPage = () => {
  return (
    <>
      <Box
        bgImage={store1}
        bgRepeat={"no-repeat"}
        bgColor={"orange.100"}
        bgSize={"cover"}
        h={"500px"}
        // w={"100%"}
      >
        <Box maxW={"1400px"} m={"0 auto"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 36 }}
            pb={{ base: 2, md: 10 }}
          >
            <Heading
              textAlign={"center"}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"gray.50"}
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
              <Link to={"/menu"}>
                <Button colorScheme={"orange"} rounded={"full"} px={6}>
                  <Text fontSize={"24px"} fontWeight={"600"}>
                    See menu
                  </Text>
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box bgColor={"orange.100"}>
        <Box bgColor={"yellow"}>
          <Text
            p={8}
            pb={0}
            bgColor={"orange.100"}
            fontSize={"30px"}
            textAlign={"center"}
          >
            バナナブルドッグとは？
          </Text>
          <Text
            p={8}
            h={"400px"}
            fontSize={{ base: "18px", md: "30px" }}
            textAlign={"center"}
            bgColor={"orange.100"}
          >
            dhjnvcdserthnbvdsxcbnjytgfdvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytredhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytredhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxddhjnvcdserthnbvdsxcvbnjytgfdsasxcvfgfdxsdfghjytresxcvbhtrdcvbnvcxd
          </Text>
        </Box>
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
