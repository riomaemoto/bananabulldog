import {
  Text,
  Image,
  Stack,
  Button,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { store1 } from "../constants";

export const AllMenu = () => {
  const menuList = [
    {
      img: store1,
      title: "Mango smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "480円",
    },
    {
      img: store1,
      title: "apple smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "500円",
    },
    {
      img: store1,
      title: "peach smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "600円",
    },
    {
      img: store1,
      title: "strawberry smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "380円",
    },
    {
      img: store1,
      title: "strawberry smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "380円",
    },
    {
      img: store1,
      title: "strawberry smoothie",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      price: "380円",
    },
  ];

  return (
    <>
      <Box bgColor={"orange.100"}>
        <Text textAlign={"center"} p={"16px"} fontSize={"40px"}>
          Menu
        </Text>
        <Box>
          <Flex flexWrap={"wrap"} justify={"center"}>
            {menuList.map((item) => (
              <Text fontSize={"28px"} p={"16px"} textAlign={"center"}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  w={"600px"}
                  h={"280px"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "300px" }}
                    src={item.img}
                  />
                  <Stack>
                    <CardBody p={"2px"} pt={"16px"}>
                      <Heading size="md">{item.title}</Heading>
                      <Text fontSize={"24px"} pt={"8px"}>
                        {item.description}
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="solid" colorScheme="blue">
                        {item.price}
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
