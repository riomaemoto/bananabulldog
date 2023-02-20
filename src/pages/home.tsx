import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { firstLogo1 } from "../constants";

export const Home = () => {
  return (
    <Box bgColor={"orange.100"} overflow={"hidden"} h={"100vh"}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 16 }}
          py={{ base: 20, md: 24 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          >
            <Box
              boxSize="sm"
              alignItems={"center"}
              m={"auto"}
              width={{ base: "100%", md: "60%" }}
              mt={{ base: "20px", md: "40px" }}
            >
              <Image p={0} src={firstLogo1} alt="" />
            </Box>
            <Text
              p={"8px"}
              mt={"8px"}
              fontSize={{ base: "48px", md: "72px" }}
              fontFamily={"sans-serif"}
            >
              Comming soon...!
            </Text>
            <br />
          </Heading>
        </Stack>
      </Container>
    </Box>
  );
};
