import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

import img1 from "@/assets/img/why1.png";
import img2 from "@/assets/img/why2.png";
import img3 from "@/assets/img/why3.png";
import img4 from "@/assets/img/why4.png";
import Image from "next/image";
import { CONTAINER_WIDTH } from "@/config/_variables.config";

const data = [
  {
    image: img1,
    title: "Опытные грузчики",
  },
  {
    image: img2,
    title: "Выезд в любой район",
  },
  {
    image: img3,
    title: "Современный транспорт",
  },
  {
    image: img4,
    title: "Гибкие условия",
  },
];

const Advantages = () => {
  return (
    <Box id="advantages" py={20}>
      <div className="container">
        <Flex
          flexDir="column"
          alignItems="start"
          justifyContent="end"
          pb="36px"
          pt={{ md: "60px", base: "50px" }}
          px={{ md: "30px", base: "4" }}
          borderRadius={16}
          bg="white"
        >
          <Text lineHeight="41px" maxW="317px" fontSize={34} fontWeight={700}>
            Почему выбирают нас?
          </Text>
          <Flex
            w="100%"
            flexDir={{ md: "row", base: "column" }}
            justifyContent="center"
            gap={4}
            mt="30px"
          >
            {data.map((el, index) => (
              <Flex
                gap="4px"
                borderRadius={20}
                flexDir={{ md: "column", base: "row" }}
                justifyContent={{ md: "center", base: "start" }}
                alignItems="center"
                w={{ md: 299, base: "100%" }}
                h={{ md: 201, base: 135 }}
                bg="#EFEFEF"
                p={{ md: 0, base: 4 }}
                gapX={{ md: 0, base: 4 }}
                key={index}
              >
                <Box w={{ md: 99, base: 75 }} h={{ md: 99, base: 75 }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={el.image}
                    alt="img"
                  />
                </Box>
                <Text fontSize={18} fontWeight={600}>
                  {el.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
    </Box>
  );
};

export default Advantages;
